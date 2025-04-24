---
title: Quick Start
description: Get started with Status Network in under 10 minutes. Learn how to deploy your first smart contract using Remix IDE, get test ETH, and interact with the network.
keywords: [Status Network tutorial, quick start, smart contract deployment, Remix IDE, blockchain development, testnet setup, MetaMask configuration]
---

# Quick Start

In this section, we'll get you deploying a sample contract on **Status Network Testnet** in less than 10 minutes.

Let's see how to deploy a smart contract on Status Network using the Remix IDE for simplicity.

## Get Everything Ready

Before getting started:

1. **Add Status Network Testnet to MetaMask**:

   Follow the [Add Status Network guide](/general-info/add-status-network) for step-by-step instructions on how to add the Status Network testnet to MetaMask.

2. **Get Test ETH**:

   You'll need both Sepolia ETH and Status Network Testnet ETH:
   - First get Sepolia ETH from [Sepolia Faucet](https://faucet.status.network)
   - Then bridge some ETH to Status Network Testnet using the [Status Bridge](https://bridge.status.network)
   - Alternatively, get Status Network Testnet ETH directly from our [Testnet Faucet](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)

We are ready to get started!

## Remix & Sample Code

**Remix** is a no-setup tool for developing smart contracts. It's easy to get started, allowing a simple deployment process, debugging, interacting with smart contracts, and more.

For this tutorial, we will deploy a simple `SimpleStorage.sol` contract:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 number;
    
    function store(uint256 num) public {
        number = num;
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}
```

> **Note:** This contract lets you store a number and then read what that number is.

## Steps to Deploy

1. **Copy the Sample Code**:

   - Copy the sample code and paste it into a new file named `SimpleStorage.sol` in Remix.

2. **Compile the Smart Contract**:

   - Go to the **Solidity Compiler** tab (on the left sidebar).
   - Ensure the compiler version is 0.8.0 or higher.
   - Click **"Compile SimpleStorage.sol"**.
   - You can enable **"Auto compile"** for automatic compilation whenever you change the contract code.

3. **Deploy the Smart Contract**:

   - Switch to the **Deploy & Run Transactions** tab.
   - In the **"Environment"** dropdown menu, select **"Injected Provider - MetaMask"**.
   - MetaMask may prompt you to connect to Remix. Confirm the connection.
   - Ensure that **Status Network Testnet** is selected in MetaMask.
   - Under **"Contract"**, make sure `SimpleStorage` is selected.
   - Click **"Deploy"**.
   - MetaMask will pop up, asking you to confirm the transaction. Gas fees will be paid in ETH.
   - Review the transaction details and click **"Confirm"**.
   - Wait for the transaction to be mined.

4. **Verify Deployment**:
   
   - Once deployed, copy your contract's address from Remix
   - View it on [Status Network Explorer](https://sepoliascan.status.network)

**CONGRATULATIONS!** You just deployed your first smart contract on Status Network.

## Interact with Your Deployed Smart Contract

1. **Access Deployed Contract**:

   - In Remix, under the **"Deployed Contracts"** section, you'll see your deployed `SimpleStorage` contract.

2. **Store a Number**:

   - Expand the deployed contract to view its functions.
   - In the **"store"** function input field, enter a number (e.g., `42`).
   - Click **"transact"**.
   - MetaMask will prompt you to confirm the transaction. Gas fees will be paid in ETH.
   - Wait for the transaction to be confirmed.

3. **Retrieve the Number**:

   - Click on the **"retrieve"** function.
   - The stored number will display below the button.
   - This is a view function, so no gas fees are required.

## Next Steps

- **Get Support**:
  - Join our [Telegram Community](https://t.me/statusl2) for assistance
  - Check our [Network Details](/general-info/network-details) for more information
  - Learn about [bridging tokens](/general-info/bridge/bridging-testnet) to Status Network

## Summary

You've successfully:
- Set up your environment to interact with Status Network Testnet
- Obtained testnet ETH through bridging or faucet
- Deployed a smart contract using Remix IDE and MetaMask
- Interacted with your deployed contract by storing and retrieving a number

For more advanced development, check out our guides for deploying with:
- [Hardhat](/tutorials/deploying-contracts/using-hardhat)
- [Foundry](/tutorials/deploying-contracts/using-foundry)