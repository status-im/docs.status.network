---
title: Using Scaffold-ETH 2 with Status Network
description: Quick start guide for deploying smart contracts on Status Network using the pre-configured Scaffold-ETH 2 extension.
keywords: [Scaffold-ETH 2, smart contract deployment, Status Network development, Foundry, Hardhat, NextJS, web3 development]
---

# Using Scaffold-ETH 2 to Deploy Smart Contracts

The [Status Network Scaffold-ETH 2 extension](https://github.com/status-im/status-network-scaffold-extension) provides a pre-configured setup for deploying smart contracts on Status Network with both Foundry and Hardhat support, plus a NextJS frontend.

## Prerequisites

- **Yarn**: Package manager for JavaScript projects
- **Foundry** (optional): If you choose the Foundry workflow
- **Ethereum Wallet** (optional): An EVM wallet private key for test, but it's okay if you don't have one

> **Note**: Status Network supports gasless transactions, so testnet ETH is optional. If you still need testnet ETH, get it from our [Faucet](/tools/core-infrastructure/testnet-faucets).

## Quick Start

1. **Install the extension:**
   ```bash
   npx create-eth@latest -e status-im/status-network-scaffold-extension
   ```

2. **Configure your account:**
   ```bash
   yarn generate
   ```

3. **Deploy to Status Network:**
   ```bash
   yarn deploy --network statusSepolia
   ```

4. **Verify your contract:**
   ```bash
   # Hardhat
   yarn hardhat:hardhat-verify --network statusSepolia <YourDeployedContractAddress>
   # Foundry
   yarn status:verify --network statusSepolia
   ```

5. **Launch the frontend:**
   ```bash
   yarn start
   ```

## Key Points

- **No local chain needed**: Deploy directly to testnet
- **Always use `--network statusSepolia`** for deployments and verification
- **Blockscout verification**: Status Network uses Blockscout, not Etherscan
- **Pre-configured frontend**: NextJS automatically connects to Status Network

## Support

For detailed configuration options, troubleshooting, and advanced usage:
- Check the [extension README](https://github.com/status-im/status-network-scaffold-extension) for comprehensive documentation
- Join our [Telegram Community](https://t.me/statusl2) and ask for support
- View our [Network Details](/overview/general-info/network-details)
