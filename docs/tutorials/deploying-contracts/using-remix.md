---
title: Using Remix with Status Network
description: Learn how to deploy smart contracts on Status Network using Remix IDE. Beginner-friendly guide with step-by-step instructions for contract deployment and interaction.
keywords: [Remix IDE, smart contract deployment, Status Network development, blockchain tutorial, web3 development, solidity]
---

# Using Remix to Deploy Smart Contracts

This tutorial will guide you through deploying a smart contract on Status Network testnet using the Remix IDE. Remix is a browser-based IDE that's perfect for quick development and testing.

## Prerequisites

Before you begin, ensure you have:

- **Web Browser**: A modern web browser like Chrome or Firefox
- **MetaMask**: Install the [MetaMask](https://metamask.io) browser extension
- **Testnet ETH**: You'll need Status Network testnet ETH
  - Get Status Network testnet ETH from our [Faucet](/tools/testnet-faucets)
- **Network Configuration**: Add Status Network testnet to MetaMask following our [Add Network guide](/general-info/add-status-network)

## Steps

### 1. Open Remix IDE

Visit [remix.ethereum.org](https://remix.ethereum.org) in your browser.

### 2. Create a New File

1. Click the "File Explorer" icon (first icon on the left sidebar)
2. Click the "+" button to create a new file
3. Name it `HelloWorld.sol`

### 3. Write the Smart Contract

Copy and paste the following code into `HelloWorld.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloWorld {
    string public greet = "Hello, Status Network!";

    function setGreet(string memory _greet) public {
        greet = _greet;
    }

    function getGreet() public view returns (string memory) {
        return greet;
    }
}
```

### 4. Compile the Contract

1. Click the "Solidity Compiler" icon (second icon on the left sidebar)
2. Select compiler version "0.8.24"
3. Click "Compile HelloWorld.sol"
4. Ensure compilation succeeds (you'll see a green checkmark)

### 5. Deploy the Contract

1. Click the "Deploy & Run Transactions" icon (fourth icon on the left sidebar)
2. In the "Environment" dropdown, select "Injected Provider - MetaMask"
3. MetaMask will prompt you to connect - ensure Status Network testnet is selected
4. Click "Deploy"
5. Confirm the transaction in MetaMask
6. Wait for the transaction to be confirmed

### 6. Interact with Your Contract

Once deployed, you'll see your contract under "Deployed Contracts":

1. Expand the contract interface
2. You can:
   - Click "greet" to read the current greeting
   - Enter a new greeting in the "setGreet" field and click the button to update it
   - Click "getGreet" to read the greeting again

## Troubleshooting

### Common Issues

1. **Transaction Failed**
   - Check that you're connected to Status Network testnet

2. **Contract Not Found**
   - Wait a few minutes for the explorer to index your contract
   - Double-check the contract address

3. **Compilation Errors**
   - Verify the compiler version matches the pragma statement
   - Check for any syntax errors highlighted in Remix

## Support

If you encounter any issues:
- Join our [Telegram Community](https://t.me)
- Check [Network Status](https://health.status.network)
- View our [Network Details](/general-info/network-details)

## Additional Resources

- [Remix Documentation](https://remix-ide.readthedocs.io/)
- [Status Network Explorer](https://sepoliascan.status.network)
