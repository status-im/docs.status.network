---
sidebar_label: '⛽ 无Gas交易'
title: Status Network的无Gas交易
description: 了解Status Network如何使用RLN（速率限制无效器）和Karma等级来实现防垃圾邮件和公平使用的无Gas交易。
keywords: [Status Network, 无Gas交易, Linea, RLN, Rate Limiting Nullifier, Karma, 零知识证明, ZKP, 灵魂绑定代币, 区块链, 第二层, L2, 垃圾邮件防护]
---

# Status Network的无Gas交易

Status Network旨在大规模引入无Gas交易。这种无Gas方法的关键组件是Vac的速率限制无效器（Rate Limiting Nullifier），它允许在不需要传统Gas费用的情况下进行交易速率限制。本文档描述了安全启用无Gas交易所需的架构和集成元素。

这些无Gas交易的实现代码可在[Status Network代码库](https://github.com/status-im/status-network-monorepo)中找到。

### 1.2 RLN

RLN是一个零知识系统，旨在在不违规的情况下防止垃圾邮件而不损害用户隐私。它通过ZKP和Shamir秘密共享执行的加密速率限制来替代传统的Gas费用。

RLN特征：

- **零知识证明：** 用户生成ZKP来验证他们的RLN组成员身份，而不透露他们的身份。组成员身份表示每个等级的最大无Gas交易吞吐量。
- **Shamir秘密共享和无效器：** 用户持有用于为交易生成唯一无效器的秘密密钥。如果用户在一个时期（例如，区块或时间戳）内超过其交易限制，他们的秘密密钥将变得可恢复，从而暴露他们。
- **垃圾邮件检测：** 超过限制的用户有效地泄露了他们的秘密，导致诸如拒绝列表包含、未来更高的Gas成本或潜在的代币削减等惩罚。

### 1.3. RLN成员管理

RLN使用稀疏默克尔树来高效处理大规模成员证明。基准研究确定，支持100万账户的高度为20的树为证明生成和验证提供了最佳性能。对于超过100万账户的可扩展性，可以使用多个SMT和注册表来引导用户到适当的树。

Prover包括一个注册服务，该服务监听来自Karma合约的事件，其中Karma被分配给新地址。检测到此类事件后，注册服务通过生成和注册其RLN凭据（identitySecretHash和identityCommitment）将用户加入RLN成员合约。RLN证明服务为交易生成证明，这些证明通过gRPC流式传输到Sequencer中的RLN验证器。验证器将这些证明存储在内存中，并基于交易哈希与传入交易匹配，因为该过程是异步的。

```mermaid
graph TD
    A[用户钱包] -->|通过白名单应用的首次L2操作| B(Karma发行)
    A -->|桥接到SN| B
    B -->|灵魂绑定代币| C{等级分配}

    subgraph "等级限制"
        D[Basic]
        E[Active]
        F[Regular]
        G[Power User]
        H[High-Throughput]
        I[S-Tier]
    end

    C --> D
    C --> E
    C --> F
    C --> G
    C --> H
    C --> I

    %% RLN流程
    A -->|提交无Gas交易| J[RPC节点]
    J -->|转发交易数据| K[Prover]
    subgraph "Prover服务"
        K --> K1[注册服务]
        K --> K2[RLN证明服务]
        K --> K3[Karma API服务]
        K1 -->|监听Karma事件| L[Karma合约]
        K1 -->|用户入驻| M[RLN成员合约]
        K2 -->|生成RLN证明| N[gRPC流]
        K3 -->|跟踪交易和Karma等级| O[存储]
    end
    J -->|发送交易| P[Sequencer]
    N -->|流式传输RLN证明| P

    %% Sequencer部分
    subgraph "Sequencer操作"
        P --> Q[RLN验证器插件]
        Q -->|订阅gRPC流| N
        Q -->|在内存中存储证明| R{匹配交易哈希}
        R -->|验证RLN证明| S{配额检查}
        S -->|在限制内| T[添加到内存池]
        S -->|超过限制| U[拒绝列表]
        U -->|标记地址| V[需要高级Gas]
        Q -->|检测到垃圾邮件| W[削减RLN质押]
    end

    %% Gas估算流程
    A -->|请求Gas估算| X[修改的linea_estimateGas RPC]
    X -->|查询| U
    U -->|地址已列出| Y[应用高级Gas倍数]
    Y -->|支付高级Gas| Z[从拒绝列表中移除]
    Z -->|获得Karma| B
    U -->|地址未列出| AA[标准Gas估算]

    %% 样式
    classDef wallet fill:#FFD700,stroke:#DAA520,color:#333
    classDef karma fill:#98FB98,stroke:#2E8B57,color:#333
    classDef tier fill:#87CEFA,stroke:#4682B4,color:#333
    classDef tierNode fill:#ADD8E6,stroke:#4682B4,color:#333
    classDef rln fill:#FFB6C1,stroke:#DB7093,color:#333
    classDef sequencer fill:#DDA0DD,stroke:#BA55D3,color:#333
    classDef gas fill:#FFA07A,stroke:#FF4500,color:#333

    class A wallet
    class B,L karma
    class C tier
    class D,E,F,G,H,I tierNode
    class J,K,K1,K2,K3,M,N,O rln
    class P,Q,R,S,T,U,V,W sequencer
    class X,Y,Z,AA gas
```

## 3. 系统组件

### 3.1 Prover

Prover是一个由三个服务组成的系统：

1. **注册服务**：监听来自Karma合约的Karma分配事件。当新地址收到Karma时，它通过生成RLN凭据并注册它们来将用户加入RLN成员合约。
2. **RLN证明服务**：使用Zerokit库为交易生成RLN证明。证明通过gRPC流直接流式传输到Sequencer中的RLN验证器。
3. **Karma API服务**：跟踪用户在一个时期内进行的交易并维护其Karma等级状态。它将交易数据存储在内部数据库中，以便高效查询和等级管理。

这些服务确保安全的凭据管理、证明生成和交易跟踪，gRPC使与Sequencer的低延迟通信成为可能。

### 3.2 RLN验证器

RLN验证器是sequencer内部的besu插件，通过Java本机接口利用RLN的Zerokit Rust库。
验证器：

- 订阅来自RLN证明服务的gRPC流以接收生成的RLN证明。
- 将证明存储在内存中，并基于交易哈希与传入交易匹配，考虑到交易（通过RPC节点）和证明（通过gRPC）的异步到达。
- 验证证明真实性、无效器唯一性和用户交易配额。

验证失败的交易将被拒绝，用户可能会被临时添加到拒绝列表中。

### 3.3 拒绝列表

拒绝列表临时限制超过配额或参与垃圾邮件的用户：

- 条目根据吞吐量等级在设定的持续时间（例如，小时或天）后过期
- 用户可以通过支付高级Gas费用来绕过限制
- 支付高级费用会将用户从列表中移除并获得额外的Karma

### 3.4 `linea_estimateGas` RPC修改

linea_estimateGas方法被定制以考虑拒绝列表上的用户：

- 检查用户的拒绝列表状态
- 根据需要添加高级Gas倍数
- 为用户提供透明度和准确的Gas估算 