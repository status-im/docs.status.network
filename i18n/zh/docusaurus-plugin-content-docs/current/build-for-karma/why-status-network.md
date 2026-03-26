---
title: '为何在 Status 上构建：为人类与机器人提供的免 Gas 执行'
description: '在 Status Network 上构建的理由：可预测成本、零 Gas 执行，以及通过逐块流动性再平衡工具减轻机器人的 LVR。'
keywords:
  - 'Status Network'
  - '构建理由'
  - 'L2对比'
  - '无Gas'
  - 'Karma'
  - '公共资助'
  - '开发者优势'
  - 'Linea zkEVM'
sidebar_position: 2
---

# 为什么要在 Status Network 上构建

有数十个 L2 可供选择。以下是 Status Network 值得你关注的原因。

<div className="comparison-grid">
  <a className="comparison-row-link" href="#sustainable-public-funding">
    <div className="comparison-row">
      <div className="comparison-label">开发者资金</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>持续收入池，随应用增长而扩展</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">典型 L2</div>
          <p>一次性资助，每隔几个月需要重新申请</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#gasless-by-default">
    <div className="comparison-row">
      <div className="comparison-label">用户 Gas</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>通过 Karma 免费 —— 无需 paymaster、relayer 或账户抽象配置</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">典型 L2</div>
          <p>用户支付 Gas，或开发者运营 paymaster + relayer 基础设施</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#built-in-reputation-with-karma">
    <div className="comparison-row">
      <div className="comparison-label">用户声誉</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>通过 Karma 实现全网声誉系统 —— 防垃圾、信任信号、功能准入</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">典型 L2</div>
          <p>无 —— 需自行构建或集成第三方方案</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#privacy-focused-civil-goods">
    <div className="comparison-row">
      <div className="comparison-label">隐私</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>原生 ZK 工具 —— Rate Limiting Nullifiers 等</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">典型 L2</div>
          <p>第三方集成</p>
        </div>
      </div>
    </div>
  </a>
</div>

## 可持续公共资金

Status Network 不依赖一次性资助或基金会金库。相反，它拥有一个持续的公共资金池，资金来源于：

- **原生收益**：来自桥接的收益型资产（初期为 ETH 和稳定币）
- **DEX 交易费**：来自原生去中心化交易所
- **溢价 Gas 费**：来自列入黑名单的用户
- **未来原生应用费用**（借贷、NFT、启动板等）

了解更多 → [经济模型](/overview/tokenomics/economic-model)

Karma 持有者投票决定如何将公共资金池分配给应用和构建者。你的应用通过产生活动和交易量对网络贡献越多，你和用户获得的 Karma 就越多，你对未来分配的影响力就越大。

**对构建者意味着什么：**

- 不仅是每隔几个月需要重新申请的一次性资助，而是持续收入流
- 资金随应用增长而扩展 —— 用户越多，Karma 越多，你获得的激励越多
- 社区治理分配，无基金会把关

了解更多 → [公共资金](/overview/tokenomics/public-funding)

## 默认无 Gas

在大多数链上，“无 Gas”意味着配置 paymaster、运行 relayer 或集成账户抽象 SDK。在 Status Network 上，无 Gas 是默认行为。

每个 Karma 余额为正的地址都享有免费交易配额。无需 paymaster。无需 relayer。无需特殊钱包配置。你的应用对符合条件的用户直接免 Gas 运行。

**对构建者意味着什么：**

- 无 Gas 带来的 UX 摩擦。你的 onboarding 漏斗不会在“桥接一些 ETH 用于 Gas”这一步流失用户
- 无需集成 ERC-4337、元交易或 Gas 中继模式
- 无需为用户承担 Gas 的基础设施成本

无 Gas 系统通过 [Rate Limiting Nullifiers (RLN)](/overview/general-info/gasless-transactions/#rln) 在 sequencer 层面强制执行，这是一种零知识防垃圾机制。

## 内置 Karma 声誉

Karma 是一种灵魂绑定（不可转让）代币，每个用户通过真实的网络参与获得，如质押、桥接、提供流动性、使用应用或支付溢价 Gas。它无法购买或转让。

**对构建者意味着什么：**

- **信任信号**：高 Karma 用户是经过验证的活跃参与者，而非空投农民或女巫
- **功能准入**：构建者可根据用户 Karma 等级设置功能准入，如高级功能、优先访问或更优费率
- **防垃圾**：网络本身通过 RLN 机制限制垃圾，Karma 等级直接控制无 Gas 交易配额，意味着高 Karma 用户天然更不易发起垃圾
- **无冷启动问题**：你的应用受益于生态系统中全网建立的声誉

了解更多 → [Karmic 代币经济学](/overview/tokenomics/karmic-tokenomics)

## 注重隐私的公共产品

Status Network 采用 [自由技术研究所 (IFT)](https://free.technology) 的技术构建。最值得一提的是，无 Gas 交易系统使用 [RLN (Rate Limiting Nullifiers)](https://vac.dev/rln)，这是由 IFT 研究部门 [Vac](https://vac.dev) 开发的零知识防垃圾机制。

我们与 IFT 在技术愿景上一致，致力于构建保障数字时代公民自由的公共产品。Status Network 将基于我们的无 Gas 特性增加注重隐私的模块。

<!-- 了解更多 → [Status Network 与隐私](/overview/general-info/privacy) -->

## 完全 EVM 等效

Status Network 基于 [Linea zkEVM](https://linea.build) 技术栈构建。这意味着构建者可以：

- 无需修改即可部署现有 Solidity 合约
- 使用标准以太坊工具如 Hardhat、Foundry、ethers.js、viem 等
- 使用标准 JSON-RPC 方法（部分与 Gas 费相关的方法除外。详见 [JSON-RPC API](/tools/rpc/json-rpc)）
- 继承 Linea rollup 架构的零知识证明安全

无自定义 VM。无非标准操作码。无需重写合约或后端。
