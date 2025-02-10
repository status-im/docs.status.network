---
title: Using Foundry with Status Network
description: Comprehensive guide to deploying and testing smart contracts on Status Network using Foundry. Learn about project setup, deployment scripts, testing, and contract interaction using Cast.
keywords: [Foundry tutorial, smart contract deployment, Status Network development, blockchain testing, Solidity development, web3 development, Foundry testing]
---

# Using Foundry to Deploy Smart Contracts

This tutorial will guide you through the process of deploying a smart contract on Status Network testnet using Foundry.

## Prerequisites

Before you begin, ensure you have the following:

- **Foundry**: Install from the [official Foundry book](https://book.getfoundry.sh/getting-started/installation)
- **Ethereum Wallet**: A private key for Status Network testnet
- **Testnet ETH**: You'll need Status Network testnet ETH
  - Get Status Network testnet ETH from our [Faucet](/tools/testnet-faucets)
- **Basic Knowledge**: Familiarity with Solidity and command line

## What You'll Accomplish

- Initialize a Foundry project
- Write a basic Ethereum smart contract
- Configure Foundry for Status Network testnet deployment
- Deploy your smart contract

## Steps

### 1. Initialize a Foundry Project

First, create a new Foundry project:

```bash
# Create a new project
forge init hello_status
cd hello_status

# Create .env file for private key
touch .env
echo "PRIVATE_KEY=your_private_key_here" >> .env
```

### 2. Writing the Smart Contract

Replace `src/Counter.sol` with our `HelloWorld.sol`:

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

### 3. Configure Foundry for Status Network

Create or update `foundry.toml`:

```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc = "0.8.24"

[rpc_endpoints]
status_testnet = "https://public.sepolia.rpc.status.network"
```

### 4. Deploy the Contract

Create a deployment script `script/Deploy.s.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/HelloWorld.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);
        
        HelloWorld hello = new HelloWorld();
        console.log("HelloWorld deployed to:", address(hello));
        
        vm.stopBroadcast();
    }
}
```

Deploy using forge:

```bash
# Load environment variables
source .env

# Deploy to Status Network testnet
forge script script/Deploy.s.sol:DeployScript \
    --rpc-url https://public.sepolia.rpc.status.network \
    --broadcast \
```

### 5. Interact with the Contract

Create a script to interact with your contract `script/Interact.s.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/HelloWorld.sol";

contract InteractScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address contractAddress = address(0x...); // Replace with your contract address
        
        vm.startBroadcast(deployerPrivateKey);
        
        HelloWorld hello = HelloWorld(contractAddress);
        
        // Read current greeting
        string memory currentGreeting = hello.getGreet();
        console.log("Current greeting:", currentGreeting);
        
        // Update greeting
        hello.setGreet("Hello from Foundry!");
        
        vm.stopBroadcast();
    }
}
```

Run the interaction script:

```bash
forge script script/Interact.s.sol:InteractScript \
    --rpc-url https://public.sepolia.rpc.status.network \
    --broadcast
```

### 6. Cast Commands for Quick Interactions

You can also use `cast` to interact with your contract:

```bash
# Read the greeting
cast call <CONTRACT_ADDRESS> "getGreet()" \
    --rpc-url https://public.sepolia.rpc.status.network

# Set a new greeting
cast send <CONTRACT_ADDRESS> "setGreet(string)" "New greeting!" \
    --private-key $PRIVATE_KEY \
    --rpc-url https://public.sepolia.rpc.status.network
```

### 7. Testing

Create a test file `test/HelloWorld.t.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/HelloWorld.sol";

contract HelloWorldTest is Test {
    HelloWorld hello;

    function setUp() public {
        hello = new HelloWorld();
    }

    function testGreeting() public {
        assertEq(hello.getGreet(), "Hello, Status Network!");
        
        hello.setGreet("New greeting");
        assertEq(hello.getGreet(), "New greeting");
    }
}
```

Run the tests:

```bash
forge test
```

## Support

If you encounter any issues:
- Join our [Telegram Community](https://t.me)
- Check [Network Status](https://health.status.network)
- View our [Network Details](/general-info/network-details)

## Additional Resources

- [Foundry Book](https://book.getfoundry.sh/)
- [Status Network Explorer](https://sepoliascan.status.network)