---
id: deploying-contracts-index
title: Deploy Your First Contract
description: Choose your preferred deployment tool to get a smart contract live on Status Network. Guides available for Hardhat, Foundry, Remix, and Scaffold-ETH 2.
keywords: [deploy smart contract, Status Network, Hardhat, Foundry, Remix, Scaffold-ETH 2, blockchain deployment, EVM]
slug: /build-for-karma/deploying-contracts
sidebar_position: 1
---

Status Network is fully EVM-compatible, so you can deploy contracts using any standard Ethereum toolchain. Pick the tool that fits your workflow and follow the step-by-step guide to get your first contract live on the testnet.

:::tip Before you start
Make sure you've [added Status Network to your wallet](/overview/general-info/add-status-network) and grabbed some [testnet ETH](/tools/testnet-faucets).
:::

## Choose a Deployment Tool

<div className="deploy-card-grid">

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-hardhat">
  <div className="deploy-card-icon">🎩</div>
  <div className="deploy-card-content">
    <h3>Hardhat</h3>
    <p>The industry-standard development environment for compiling, testing, and deploying Solidity contracts. Includes Hardhat Ignition and TypeScript support.</p>
    <span className="deploy-card-tag">TypeScript · Testing · Ignition</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-foundry">
  <div className="deploy-card-icon">⚒️</div>
  <div className="deploy-card-content">
    <h3>Foundry</h3>
    <p>A blazing-fast, Rust-based toolkit for smart contract development. Write tests in Solidity and interact with contracts using Cast.</p>
    <span className="deploy-card-tag">Solidity Tests · Cast · Fast Builds</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-remix">
  <div className="deploy-card-icon">🎛️</div>
  <div className="deploy-card-content">
    <h3>Remix IDE</h3>
    <p>A browser-based IDE with zero setup — perfect for quick prototyping, learning, and deploying simple contracts without any local tooling.</p>
    <span className="deploy-card-tag">Browser-Based · No Setup · Beginner-Friendly</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-se2">
  <div className="deploy-card-icon">🏗️</div>
  <div className="deploy-card-content">
    <h3>Scaffold-ETH 2</h3>
    <p>A full-stack starter kit with a pre-configured Status Network extension. Includes a NextJS frontend, contract hot-reload, and both Hardhat and Foundry support.</p>
    <span className="deploy-card-tag">Full-Stack · NextJS · Hot Reload</span>
  </div>
</a>

</div>

## Not Sure Which to Pick?

| Tool | Best For | Setup Required |
|---|---|---|
| **Hardhat** | Production projects with complex testing and deployment pipelines | Node.js + npm |
| **Foundry** | Developers who prefer Solidity-native testing and fast compilation | Rust toolchain |
| **Remix** | Quick experiments, learning, and simple one-off deployments | None (browser) |
| **Scaffold-ETH 2** | Full-stack dApps that need a frontend from day one | Node.js + npm |

## After Deployment

Once your contract is live, here are your next steps:

- [Integrate gasless transactions](/build-for-karma/gasless-integration) through Karma so your users never pay gas
- [Read reputation integration guide](/build-for-karma/reputation-integration) to build reputation-aware features using Karma
