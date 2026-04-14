---
title: '测试网合约'
description: '包含桥接合约、核心基础设施、L2合约在内的Status Network测试网合约地址的综合列表，以及它们的用途和区块浏览器链接。'
keywords:
  - 'Status Network合约'
  - '测试网地址'
  - '智能合约'
  - '桥接合约'
  - 'L1合约'
  - 'L2合约'
  - '区块链基础设施'
---

# 测试网合约

本页面列出了Status Network测试网基础设施的所有重要合约地址。

## 第一层合约 (Hoodi)

这些合约部署在Hoodi测试网上。您可以在[Hoodi Etherscan](https://hoodi.etherscan.io)上查看它们。

### 桥接合约
- **Rollup 合约**
  - 地址: [`0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5`](https://hoodi.etherscan.io/address/0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5)
  - 用途: 管理L2的有效性、DA和从L1到L2的消息传递

- **L1 代币桥代理**
  - 地址: [`0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6`](https://hoodi.etherscan.io/address/0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6)
  - 用途: 管理L1上的代币桥接操作

### 核心基础设施
- **L1 邮差合约**
  - 地址: [`0xB15725119b917d348FfEB365B43bCDeEbfb65C5d`](https://hoodi.etherscan.io/address/0xB15725119b917d348FfEB365B43bCDeEbfb65C5d)
  - 用途: 处理L1和L2之间的消息传递

- **L1 数据提交合约**
  - 地址: [`0xf28FffAA0BD329EcE4e85f3D7163267649eb6B80`](https://hoodi.etherscan.io/address/0xf28FffAA0BD329EcE4e85f3D7163267649eb6B80)
  - 用途: 管理从L2到L1的数据提交

- **L1 最终确定合约**
  - 地址: [`0x74527db6DCa3E006c3ff76787E89eE8dD7963f43`](https://hoodi.etherscan.io/address/0x74527db6DCa3E006c3ff76787E89eE8dD7963f43)
  - 用途: 处理L1上L2区块的最终确认

## 第二层合约 (Status Network测试网)

这些合约部署在Status Network测试网上。您可以在[Status Network Explorer](https://hoodiscan.status.network)上查看它们。

### 桥接合约
- **L2 消息服务合约**
  - 地址: [`0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D`](https://hoodiscan.status.network/address/0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D)
  - 用途: 管理从L2到L1的消息传递
  
- **L2 代币桥代理**
  - 地址: [`0x48845B2B3cAb9773a5BBA2519f64003316BA6678`](https://hoodiscan.status.network/address/0x48845B2B3cAb9773a5BBA2519f64003316BA6678)
  - 用途: 管理L2上的代币桥接操作

### 基础设施合约
- **L2 水龙头合约**
  - 地址: [`0x06338B70F1eAbc60d7A82C083e605C07F78bb878`](https://hoodiscan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)
  - 用途: 向用户分发测试网代币

- **L2 锚定合约**
  - 地址: [`0x24B5eD2763129D6cBDEfE32e08558D2095132560`](https://hoodiscan.status.network/address/0x24B5eD2763129D6cBDEfE32e08558D2095132560)
  - 用途: 管理L1和L2之间的状态锚定

### Karma合约
- **Karma**
  - 地址: [`0x0700be6f329cc48c38144f71c898b72795db6c1b`](https://hoodiscan.status.network/address/0x0700be6f329cc48c38144f71c898b72795db6c1b)
  - 用途: 不可转让的ERC20原生声誉代币

- **KarmaTiers**
  - 地址: [`0xb8039632e089dcefa6bbb1590948926b2463b691`](https://hoodiscan.status.network/address/0xb8039632e089dcefa6bbb1590948926b2463b691)
  - 用途: 无Gas交易的等级级别

- **KarmaNFT**
  - 地址: [`0x420077c98880a9ebb45296cf7721ab7a5b56bd47`](https://hoodiscan.status.network/address/0x420077c98880a9ebb45296cf7721ab7a5b56bd47)
  - 用途: 灵魂绑定Karma NFT

- **StakeManager**
  - 地址: [`0x2bc5b2a5f580064aab6fbc1ee30113cd808582ac`](https://hoodiscan.status.network/address/0x2bc5b2a5f580064aab6fbc1ee30113cd808582ac)
  - 用途: SNT质押合约

- **VaultFactory**
  - 地址: [`0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14`](https://hoodiscan.status.network/address/0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14)
  - 用途: 创建连接到StakeManager的自托管保险库的工厂

### 实用工具合约
- **Multicall3**
  - 地址: [`0xcA11bde05977b3631167028862bE2a173976CA11`](https://hoodiscan.status.network/address/0xcA11bde05977b3631167028862bE2a173976CA11)
  - 用途: 从一个请求批量处理对链的多个调用
  
- **确定性部署代理**
  - 地址: [`0x4e59b44847b379578588920cA78FbF26c0B4956C`](https://hoodiscan.status.network/address/0x4e59b44847b379578588920cA78FbF26c0B4956C)
  - 用途: Hardhat等流行框架在后台使用的CREATE2实用工具合约
  
- **Safe 单例工厂**
  - 地址: [`0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7`](https://hoodiscan.status.network/address/0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7)
  - 用途: Safe相关合约使用的单例工厂
