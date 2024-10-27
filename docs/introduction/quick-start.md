# Quick Start

In this section, we'll get you deploying a sample contract on **Status Network Testnet** in less than 10 minutes.

Let’s see how to deploy a smart contract on Status Network using the Remix IDE for simplicity.

## Get Everything Ready

Before getting started:

- **Add Status Network Testnet to MetaMask**:

  Follow the [Status Network documentation](/general-info/add-status-network) for step-by-step instructions on how to add the Status Network testnet to MetaMask. You'll need the network's RPC URL, Chain ID, and other details.

- **Obtain Testnet Tokens**:

  This guide assumes you have obtained testnet ETH on the Status Network. You can use the [Status Network Testnet Faucet](#) to request test tokens.

We are ready to get started!

## Remix & Sample Code

**Remix** is a no-setup tool for developing smart contracts. It’s easy to get started, allowing a simple deployment process, debugging, interacting with smart contracts, and more. It’s a great tool to test quick changes and interact with deployed smart contracts.

For the sake of this tutorial, we will be deploying the `SimpleStorage.sol` smart contract that comes as an example in Remix, but you can use any of your code.

Here's the sample code:

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

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
   - Ensure the compiler version matches the pragma statement in your contract (`0.8.24`).
   - Click **"Compile SimpleStorage.sol"**.
   - You can enable **"Auto compile"** for automatic compilation whenever you change the contract code.

3. **Deploy the Smart Contract**:

   - Switch to the **Deploy & Run Transactions** tab.
   - In the **"Environment"** dropdown menu, select **"Injected Provider - MetaMask"**. This connects Remix to your MetaMask wallet.
   - MetaMask may prompt you to connect to Remix. Confirm the connection.
   - Ensure that **Status Network Testnet** is selected in MetaMask.
   - Under **"Contract"**, make sure `SimpleStorage` is selected.
   - Click **"Deploy"**.
   - MetaMask will pop up, asking you to confirm the transaction.
   - Review the transaction details and click **"Confirm"**.
   - Wait for the transaction to be mined. You can track the status in Remix or MetaMask.

**CONGRATULATIONS!** You just deployed your first smart contract on Status Network.

## Interact with Your Deployed Smart Contract

1. **Access Deployed Contract**:

   - In Remix, under the **"Deployed Contracts"** section, you'll see your deployed `SimpleStorage` contract.

2. **Store a Number**:

   - Expand the deployed contract to view its functions.
   - In the **"store"** function input field, enter a number (e.g., `42`).
   - Click **"transact"**.
   - MetaMask will prompt you to confirm the transaction. Click **"Confirm"**.
   - Wait for the transaction to be confirmed.

3. **Retrieve the Number**:

   - Click on the **"retrieve"** function.
   - The stored number will display below the button.

## Next Steps

- **Get Support**:

  - If you encounter any issues or have questions, visit the [Status Network Support](https://status.app) or join the community channels for assistance.

## Summary

You've successfully:

- Set up your environment to interact with Status Network Testnet.
- Deployed a smart contract using Remix IDE and MetaMask.
- Interacted with your deployed contract by storing and retrieving a number.

---

If you want to dive deeper, consider exploring more complex smart contracts. Checkout more tutorials [here](/tutorials/ethers-tutorial).

**Happy Coding!**