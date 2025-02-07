# 测试网合约

本页列出了 Status Network 测试网基础设施的所有重要合约地址。

## 第一层合约 (Sepolia)

这些合约部署在 Sepolia 测试网上。您可以在 [Sepolia Etherscan](https://sepolia.etherscan.io) 上查看它们。

### 跨链桥合约
- **L1 代币跨链桥代理**
  - 地址: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)
  - 用途: 管理 L1 上的代币跨链操作

### 核心基础设施
- **L1 信使**
  - 地址: [`0xB15725119b917d348FfEB365B43bCDeEbfb65C5d`](https://sepolia.etherscan.io/address/0xB15725119b917d348FfEB365B43bCDeEbfb65C5d)
  - 用途: 处理 L1 和 L2 之间的消息传递

- **L1 数据提交**
  - 地址: [`0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d`](https://sepolia.etherscan.io/address/0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d)
  - 用途: 管理从 L2 到 L1 的数据提交

- **L1 最终确认**
  - 地址: [`0xb91CB39b3b9F015b0aC88616A463B35568052AEF`](https://sepolia.etherscan.io/address/0xb91CB39b3b9F015b0aC88616A463B35568052AEF)
  - 用途: 处理 L1 上 L2 区块的最终确认

## 第二层合约 (Status Network 测试网)

这些合约部署在 Status Network 测试网上。您可以在 [Status Network Explorer](https://sepoliascan.status.network) 上查看它们。

### 跨链桥合约
- **L2 代币跨链桥代理**
  - 地址: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)
  - 用途: 管理 L2 上的代币跨链操作

### 基础设施合约
- **L2 水龙头**
  - 地址: [`0x06338B70F1eAbc60d7A82C083e605C07F78bb878`](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)
  - 用途: 向用户分发测试网代币

- **L2 锚定**
  - 地址: [`0x24B5eD2763129D6cBDEfE32e08558D2095132560`](https://sepoliascan.status.network/address/0x24B5eD2763129D6cBDEfE32e08558D2095132560)
  - 用途: 管理 L1 和 L2 之间的状态锚定
