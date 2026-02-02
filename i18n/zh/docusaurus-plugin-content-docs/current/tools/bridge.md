# Status Network 测试网跨链桥

Status Network 测试网跨链桥允许用户在 Sepolia（第一层）和 Status Network 测试网（第二层）之间转移代币。跨链桥界面可在 [bridge.status.network](https://bridge.status.network) 访问。

## 概述

跨链桥作为关键基础设施组件，支持以下功能：
- 从 Sepolia 向 Status Network 测试网转移代币
- 从 Status Network 测试网向 Sepolia 提取代币
- L1 和 L2 之间的消息传递

## 跨链桥合约

### 第一层 (Sepolia)
- **代币跨链桥**: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)

### 第二层 (Status Network)
- **代币跨链桥**: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)

## 功能

- **代币跨链**: 在网络间转移 ERC-20 代币
- **ETH 跨链**: 在 Sepolia 和 Status Network 之间跨链 ETH
- **交易追踪**: 监控您的跨链交易状态
- **gas 估算**: 跨链前查看预估 gas 费用

## 支持的代币

有关支持的代币及其合约地址的最新列表，请参考我们的[代币列表仓库](https://github.com/status-im/status-network-token-list)。

## 使用跨链桥

关于如何使用跨链桥的详细说明，包括分步指南和重要的安全考虑事项，请参考我们的[跨链指南](/home/general-info/bridge/bridging-testnet)。

## 监控跨链交易

您可以使用以下工具监控跨链交易：
- [Status Network 浏览器](https://sepoliascan.status.network) 用于 L2 交易
- [Sepolia Etherscan](https://sepolia.etherscan.io) 用于 L1 交易

## 支持

如果您在使用跨链桥时遇到任何问题：
- 查看[跨链指南](/home/general-info/bridge/bridging-testnet)了解常见解决方案
- 加入我们的 [Telegram 社区](https://t.me/statusl2)获取帮助
