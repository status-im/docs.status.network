---
title: 在Status Network上使用Scaffold-ETH 2
description: 使用预配置的Scaffold-ETH 2扩展在Status Network上部署智能合约的快速入门指南。
keywords: [Scaffold-ETH 2, 智能合约部署, Status Network开发, Foundry, Hardhat, NextJS, web3开发]
---

# 使用Scaffold-ETH 2部署智能合约

[Status Network Scaffold-ETH 2扩展](https://github.com/status-im/status-network-scaffold-extension)提供了预配置的设置，支持Foundry和Hardhat，以及NextJS前端，用于在Status Network上部署智能合约。

## 先决条件

- **Yarn**: JavaScript项目的包管理器
- **Foundry** (可选): 如果选择Foundry工作流
- **以太坊钱包** (可选): 用于测试的EVM钱包私钥，但没有也没关系

> **注意**: Status Network支持无gas交易，因此测试网ETH是可选的。如果您仍然需要测试网ETH，请从我们的[水龙头](/tools/testnet-faucets)获取。

## 快速开始

1. **安装扩展:**
   ```bash
   npx create-eth@latest -e status-im/status-network-scaffold-extension
   ```

2. **配置您的账户:**
   ```bash
   yarn generate
   ```

3. **部署到Status Network:**
   ```bash
   yarn deploy --network statusSepolia
   ```

4. **验证您的合约:**
   ```bash
   # Hardhat
   yarn hardhat:hardhat-verify --network statusSepolia <YourDeployedContractAddress>
   # Foundry
   yarn status:verify --network statusSepolia
   ```

5. **启动前端:**
   ```bash
   yarn start
   ```

## 关键要点

- **无需本地链**: 直接部署到测试网
- **部署和验证始终使用 `--network statusSepolia`**
- **Blockscout验证**: Status Network使用Blockscout，而不是Etherscan
- **预配置前端**: NextJS自动连接到Status Network

## 支持

有关详细配置选项、故障排除和高级用法：
- 查看[扩展README](https://github.com/status-im/status-network-scaffold-extension)获取全面文档
- 加入我们的[Telegram社区](https://t.me/statusl2)寻求支持
- 查看我们的[网络详情](/general-info/network-details)
