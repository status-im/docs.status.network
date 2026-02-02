---
title: Using Hardhat with Status Network
description: Step-by-step tutorial for deploying smart contracts on Status Network using Hardhat and TypeScript. Learn about project setup, configuration, and contract deployment.
keywords: [Hardhat tutorial, smart contract deployment, Status Network development, TypeScript, blockchain development, web3 development]
---

# Using Hardhat to Deploy Smart Contracts

This tutorial will guide you through the process of deploying a smart contract on Status Network testnet using Hardhat, Hardhat Ignition, and TypeScript.

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js and npm**: Download and install from the [official Node.js website](https://nodejs.org/)
- **Ethereum Wallet**: MetaMask or another wallet with a private key for Status Network testnet
- **Testnet ETH**: You'll need Status Network testnet ETH
  - Get Status Network testnet ETH from our [Faucet](/tools/testnet-faucets)
- **Basic Knowledge**: Familiarity with Solidity, Hardhat, and command line

## What You'll Accomplish

- Initialize a TypeScript-based Hardhat project
- Write a basic Ethereum smart contract
- Configure Hardhat for Status Network testnet deployment
- Deploy your smart contract using Hardhat Ignition

## Steps

### 1. Initialize a Hardhat TypeScript Project

First, create and set up your project:

```bash
mkdir my-hardhat-project && cd my-hardhat-project
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv
npx hardhat init
```

When prompted, select "Create a TypeScript project" to set up a TypeScript-based Hardhat project.

Set up your environment variables:

```bash
# Create a .env file
touch .env

# Add your private key (never commit this file!)
echo "PRIVATE_KEY=your_private_key_here" >> .env
```

### 2. Writing the Smart Contract

Create `contracts/HelloWorld.sol`:

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

### 3. Configuring Hardhat for Status Network

Update `hardhat.config.ts`:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      evmVersion: "paris"
    },
  },
  networks: {
    statusTestnet: {
      url: "https://public.sepolia.rpc.status.network",
      chainId: 1660990954,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
```

### 4. Create Ignition Deployment Module

Create `ignition/modules/HelloWorld.ts`:

```typescript
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HelloWorld", (m) => {
  const helloWorld = m.contract("HelloWorld");
  
  return { helloWorld };
});
```

### 5. Deploy the Contract

```bash
npx hardhat compile
npx hardhat ignition deploy ignition/modules/HelloWorld.ts --network statusTestnet
```

The deployment will create a new directory `ignition/deployments` containing your deployment artifacts and history.

### 7. Interact with Your Contract

Create `scripts/interact.ts`:

```typescript
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";

async function main() {
  const contractAddress = "0x0d8a93870494Fa21ec39602f31Aa67C9Fed5604f";
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const contract = HelloWorld.attach(contractAddress) as HelloWorld;

  // Read current greeting
  const greeting = await contract.getGreet();
  console.log("Current greeting:", greeting);

  // Update greeting
  const tx = await contract.setGreet("Hello from Status Network!");
  await tx.wait();
  console.log("Greeting updated!");

  // Read updated greeting
  const newGreeting = await contract.getGreet();
  console.log("New greeting:", newGreeting);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

Run the interaction script:

```bash
npx hardhat run scripts/interact.ts --network statusTestnet
```

## Support

If you encounter any issues:
- Join our [Telegram Community](https://t.me/statusl2)
- View our [Network Details](/home/general-info/network-details)