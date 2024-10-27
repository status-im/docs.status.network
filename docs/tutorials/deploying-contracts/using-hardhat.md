# Using Hardhat to Deploy Smart Contracts

This tutorial will guide you through the process of deploying a smart contract on **Status Network's Ethereum Layer 2** using **Hardhat** and **TypeScript**.

---

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js and npm**: Download and install from the [official Node.js website](https://nodejs.org/).
- **Ethereum Wallet**: A private key for the **Status Network Testnet** that has testnet ETH.
  - Obtain testnet ETH from the [Status Network Testnet Faucet](/tools/testnet-faucets).
  - **Important**: Use a new wallet without real funds to ensure security in case the private key gets compromised.
- **Basic Knowledge**: Familiarity with **Solidity**, **Hardhat**, and the command line is helpful but not mandatory.

---

## What You'll Accomplish

- Initialize a TypeScript-based Hardhat project.
- Write a basic Ethereum smart contract.
- Configure Hardhat for Status Network Testnet deployment.
- Deploy your smart contract on Status Network.

---

## Steps

### 1. Initialize a Hardhat TypeScript Project

Open your terminal and create a new directory for your project, then navigate into it:

```bash
mkdir my-hardhat-project && cd my-hardhat-project
```

Initialize an npm project:

```bash
npm init -y
```

Install the necessary packages for Hardhat and TypeScript:

```bash
npm install --save-dev hardhat ts-node typescript @nomiclabs/hardhat-ethers ethers @typechain/ethers-v5 @typechain/hardhat typechain
```

Start a new Hardhat project with TypeScript:

```bash
npx hardhat
```

When prompted, make the following selections:

- Choose **"Create a TypeScript project"**.
- For the `.gitignore` prompt, select **"Yes"**.
- For installing the project's dependencies, select **"Yes"**.

Example interaction:

```plaintext
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888      88b 888P   d88  888 888  88b      88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888  Y888888 888      Y88888 888  888  Y888888  Y888

👷 Welcome to Hardhat v2.18.2 👷‍

✔ What do you want to do? · Create a TypeScript project
✔ Hardhat project root: · /Users/username/my-hardhat-project
✔ Do you want to add a .gitignore? (Y/n) · y
✔ Do you want to install this sample project's dependencies with npm (@nomicfoundation/hardhat-toolbox)? (Y/n) · y
```

---

### 2. Writing the Smart Contract

In the `contracts` directory, delete the sample smart contract `Lock.sol` and create a new file named `HelloWorld.sol`:

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

---

### 3. Configuring Hardhat for Status Network

Edit the `hardhat.config.ts` file to include Status Network Testnet settings:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  networks: {
    statusTestnet: {
      url: "https://testnet.status.network",
      chainId: 2020,
      accounts: ["YOUR_PRIVATE_KEY_HERE"], // BE VERY CAREFUL, DO NOT SHARE THIS
    },
  },
  solidity: "0.8.24",
};

export default config;
```

- Replace `YOUR_PRIVATE_KEY_HERE` with your Status Network Testnet private key (without quotes).

> **Important:** Do not push your `hardhat.config.ts` file to any public repository or share your private key with anyone. To prevent accidental exposure, ensure your `.gitignore` file includes `hardhat.config.ts`.

---

### 4. Compilation

Compile the smart contract:

```bash
npx hardhat compile
```

You should see output indicating that the compilation was successful.

---

### 5. Deployment

In the `scripts` directory, create a new file named `deploy.ts`:

```typescript
import { ethers } from "hardhat";

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  const helloWorld = await HelloWorld.deploy();

  await helloWorld.deployed();

  console.log("HelloWorld deployed to:", helloWorld.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

> **Note:** If you encounter gas-related issues, you can specify `gasPrice` and `gasLimit` when deploying:

```typescript
const gasPrice = ethers.utils.parseUnits('10', 'gwei'); // Adjust as needed
const gasLimit = 500000; // Adjust based on your contract

const helloWorld = await HelloWorld.deploy({ gasPrice, gasLimit });
```

#### Deploy the smart contract to the Status Network Testnet:

```bash
npx hardhat run scripts/deploy.ts --network statusTestnet
```

Upon successful deployment, you should see an output similar to:

```plaintext
HelloWorld deployed to: 0xYourContractAddressHere
```

---

### 6. Verify Your Contract on the Block Explorer

Visit the [Status Network Testnet Explorer](https://testnet.statusscan.io/) and search for your contract address to view its details.

---

### 7. Interacting with Your Smart Contract

You can interact with your deployed contract using Hardhat scripts, tests, or via a frontend application.

#### Example: Interacting via a Script

Create a new script `interact.ts` in the `scripts` directory:

```typescript
import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0xYourContractAddressHere"; // Replace with your contract address

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = HelloWorld.attach(contractAddress);

  // Read the current greeting
  const currentGreet = await helloWorld.getGreet();
  console.log("Current Greet:", currentGreet);

  // Update the greeting
  const tx = await helloWorld.setGreet("Hello from Hardhat!");
  await tx.wait();

  // Read the updated greeting
  const newGreet = await helloWorld.getGreet();
  console.log("Updated Greet:", newGreet);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

Run the script:

```bash
npx hardhat run scripts/interact.ts --network statusTestnet
```

---

## Conclusion

Congratulations! You've successfully deployed a smart contract on the **Status Network Testnet** using **Hardhat** and **TypeScript**.

---

## Next Steps

- **Explore More Tutorials**:

  - Check out other tutorials in the [Status Network Documentation](/tutorials).

- **Deploy to Mainnet**:

  - Once you're comfortable with the testnet, consider deploying to the Status Network Mainnet. Update your `hardhat.config.ts` with the mainnet RPC URL and Chain ID.

- **Secure Your Private Keys**:

  - Use environment variables to store your private keys securely.
  - Install `dotenv` package:

    ```bash
    npm install dotenv
    ```

  - Update your `hardhat.config.ts`:

    ```typescript
    import { HardhatUserConfig } from "hardhat/config";
    import "@nomicfoundation/hardhat-toolbox";
    import * as dotenv from "dotenv";

    dotenv.config();

    const config: HardhatUserConfig = {
      networks: {
        statusTestnet: {
          url: "https://testnet.status.network",
          chainId: 2020,
          accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
      },
      solidity: "0.8.24",
    };

    export default config;
    ```

  - Create a `.env` file in the root of your project:

    ```
    PRIVATE_KEY=your_private_key_without_quotes
    ```

  - Update your `.gitignore` to include `.env`.

---

## Resources

- [Status Network Official Website](https://status.network/)
- [Status Network Documentation](https://docs.status.network/)
- [Hardhat Documentation](https://hardhat.org/getting-started/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Ethers.js Documentation](https://docs.ethers.io/)

---

**Need Help?**

If you encounter any issues or have questions, feel free to reach out:

- **Support**: [support@statusnetwork.io](mailto:nadeem@status.network)
- **Community Discord**: [Join Our Discord](https://discord.gg/status_im)

---

**Happy Coding!**