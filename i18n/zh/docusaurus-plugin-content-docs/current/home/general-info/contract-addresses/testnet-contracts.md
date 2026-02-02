---
title: 测试网合约
description: 包含桥接合约、核心基础设施、L2合约在内的Status Network测试网合约地址的综合列表，以及它们的用途和区块浏览器链接。
keywords: [Status Network合约, 测试网地址, 智能合约, 桥接合约, L1合约, L2合约, 区块链基础设施]
---

# 测试网合约

本页面列出了Status Network测试网基础设施的所有重要合约地址。

## 第一层合约 (Sepolia)

这些合约部署在Sepolia测试网上。您可以在[Sepolia Etherscan](https://sepolia.etherscan.io)上查看它们。

### 桥接合约
- **Rollup Contract**
  - 地址: [`0x0Bf464f24D867ff0B20aE8f9C353a589138D6836`](https://sepolia.etherscan.io/address/0x0bf464f24d867ff0b20ae8f9c353a589138d6836)
  - 用途: 管理L2的有效性、DA和从L1到L2的消息传递

- **L1 Token Bridge Proxy**
  - 地址: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)
  - 用途: 管理L1上的代币桥接操作

### 核心基础设施
- **L1 Postman**
  - 地址: [`0xB15725119b917d348FfEB365B43bCDeEbfb65C5d`](https://sepolia.etherscan.io/address/0xB15725119b917d348FfEB365B43bCDeEbfb65C5d)
  - 用途: 处理L1和L2之间的消息传递

- **L1 Data Submission**
  - 地址: [`0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d`](https://sepolia.etherscan.io/address/0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d)
  - 用途: 管理从L2到L1的数据提交

- **L1 Finalization**
  - 地址: [`0xb91CB39b3b9F015b0aC88616A463B35568052AEF`](https://sepolia.etherscan.io/address/0xb91CB39b3b9F015b0aC88616A463B35568052AEF)
  - 用途: 处理L1上L2区块的最终确认

## 第二层合约 (Status Network测试网)

这些合约部署在Status Network测试网上。您可以在[Status Network Explorer](https://sepoliascan.status.network)上查看它们。

### 桥接合约
- **L2 Message Service**
  - 地址: [`0xe74Bd8db0440533F8915042D980AbAA86085821c`](https://sepoliascan.status.network/address/0xe74Bd8db0440533F8915042D980AbAA86085821c)
  - 用途: 管理从L2到L1的消息传递
  
- **L2 Token Bridge Proxy**
  - 地址: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)
  - 用途: 管理L2上的代币桥接操作

### 基础设施合约
- **L2 Faucet**
  - 地址: [`0x06338B70F1eAbc60d7A82C083e605C07F78bb878`](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)
  - 用途: 向用户分发测试网代币

- **L2 Anchoring**
  - 地址: [`0x24B5eD2763129D6cBDEfE32e08558D2095132560`](https://sepoliascan.status.network/address/0x24B5eD2763129D6cBDEfE32e08558D2095132560)
  - 用途: 管理L1和L2之间的状态锚定

### Karma合约
- **Karma**
  - 地址: [`0x7ec5Dc75D09fAbcD55e76077AFa5d4b77D112fde`](https://sepoliascan.status.network/address/0x7ec5Dc75D09fAbcD55e76077AFa5d4b77D112fde)
  - 用途: 不可转让的ERC20原生声誉代币

- **KarmaTiers**
  - 地址: [`0xc7fCD786a161f42bDaF66E18a67C767C23cFd30C`](https://sepoliascan.status.network/address/0xc7fCD786a161f42bDaF66E18a67C767C23cFd30C)
  - 用途: 无Gas交易的等级级别

- **KarmaNFT**
  - 地址: [`0xf78d58742840C0ee00b17EE062855392d10a0305`](https://sepoliascan.status.network/address/0xf78d58742840C0ee00b17EE062855392d10a0305)
  - 用途: 灵魂绑定Karma NFT

- **StakeManager**
  - 地址: [`0x5cDf1646E4c1D21eE94DED1DA8da3Ca450dc96D1`](https://sepoliascan.status.network/address/0x5cDf1646E4c1D21eE94DED1DA8da3Ca450dc96D1)
  - 用途: SNT质押合约

- **VaultFactory**
  - 地址: [`0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14`](https://sepoliascan.status.network/address/0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14)
  - 用途: 创建连接到StakeManager的自托管保险库的工厂

### 实用工具合约
- **Multicall3**
  - 地址: [`0xcA11bde05977b3631167028862bE2a173976CA11`](https://sepoliascan.status.network/address/0xcA11bde05977b3631167028862bE2a173976CA11)
  - 用途: 从一个请求批量处理对链的多个调用
  
- **deterministic-deployment-proxy**
  - 地址: [`0x4e59b44847b379578588920cA78FbF26c0B4956C`](https://sepoliascan.status.network/address/0x4e59b44847b379578588920cA78FbF26c0B4956C)
  - 用途: Hardhat等流行框架在后台使用的CREATE2实用工具合约
  
- **safe-singleton-factory**
  - 地址: [`0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7`](https://sepoliascan.status.network/address/0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7)
  - 用途: Safe相关合约使用的单例工厂
