---
id: deploying-contracts-index
title: 部署你的第一个合约
description: 选择你偏好的部署工具，将智能合约部署到 Status Network。提供 Hardhat、Foundry、Remix 和 Scaffold-ETH 2 的指南。
keywords: [deploy smart contract, Status Network, Hardhat, Foundry, Remix, Scaffold-ETH 2, blockchain deployment, EVM]
slug: /build-for-karma/deploying-contracts
sidebar_position: 1
---

Status Network 完全兼容 EVM，因此你可以使用任何标准以太坊工具链部署合约。选择适合你工作流程的工具，按照分步指南将你的第一个合约部署到测试网。

:::tip 开始之前
请确保你已[将 Status Network 添加到钱包](/overview/general-info/add-status-network)，并领取一些[测试网 ETH](/tools/core-infrastructure/testnet-faucets)。
:::

## 选择部署工具

<div className="deploy-card-grid">

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-hardhat">
  <div className="deploy-card-icon">🎩</div>
  <div className="deploy-card-content">
    <h3>Hardhat</h3>
    <p>行业标准的开发环境，用于编译、测试和部署 Solidity 合约。包含 Hardhat Ignition 和 TypeScript 支持。</p>
    <span className="deploy-card-tag">TypeScript · Testing · Ignition</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-foundry">
  <div className="deploy-card-icon">⚒️</div>
  <div className="deploy-card-content">
    <h3>Foundry</h3>
    <p>基于 Rust 的超快智能合约开发工具包。使用 Solidity 编写测试，使用 Cast 与合约交互。</p>
    <span className="deploy-card-tag">Solidity Tests · Cast · Fast Builds</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-remix">
  <div className="deploy-card-icon">🎛️</div>
  <div className="deploy-card-content">
    <h3>Remix IDE</h3>
    <p>零配置的浏览器 IDE，适合快速原型开发、学习和部署简单合约，无需任何本地工具。</p>
    <span className="deploy-card-tag">Browser-Based · No Setup · Beginner-Friendly</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-se2">
  <div className="deploy-card-icon">🏗️</div>
  <div className="deploy-card-content">
    <h3>Scaffold-ETH 2</h3>
    <p>全栈入门套件，预配置 Status Network 扩展。包含 NextJS 前端、合约热重载，以及 Hardhat 和 Foundry 支持。</p>
    <span className="deploy-card-tag">Full-Stack · NextJS · Hot Reload</span>
  </div>
</a>

</div>

## 不知道选哪个？

| 工具 | 最适合 | 所需配置 |
|---|---|---|
| **Hardhat** | 具有复杂测试和部署流程的生产项目 | Node.js + npm |
| **Foundry** | 偏好 Solidity 原生测试和快速编译的开发者 | Rust 工具链 |
| **Remix** | 快速实验、学习和简单一次性部署 | 无（浏览器） |
| **Scaffold-ETH 2** | 从一开始就需要前端的全栈 dApp | Node.js + npm |

## 部署之后

合约上线后，以下是你的下一步：

- 通过 Karma [集成无 Gas 交易](/build-for-karma/guides/gasless-integration)，让用户无需支付 Gas
- [阅读声誉集成指南](/build-for-karma/guides/reputation-integration)，使用 Karma 构建支持声誉的功能
