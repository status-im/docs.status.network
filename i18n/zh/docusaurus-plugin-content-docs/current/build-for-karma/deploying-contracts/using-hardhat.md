# 使用 Hardhat 部署智能合约

本教程将指导您使用 Hardhat、Hardhat Ignition 和 TypeScript 在 Status Network 测试网上部署智能合约。

## 前提条件

开始之前，请确保您具备以下条件：

- **Node.js 和 npm**: 从[官方 Node.js 网站](https://nodejs.org/)下载并安装
- **以太坊钱包**: MetaMask 或其他具有 Status Network 测试网私钥的钱包
- **测试网 ETH**: 您需要 Status Network 测试网 ETH
  - 从我们的[水龙头](/tools/testnet-faucets)获取 Status Network 测试网 ETH
- **基础知识**: 熟悉 Solidity、Hardhat 和命令行

## 您将完成

- 初始化基于 TypeScript 的 Hardhat 项目
- 编写基本的以太坊智能合约
- 配置 Hardhat 以部署到 Status Network 测试网
- 使用 Hardhat Ignition 部署您的智能合约

## 步骤

### 1. 初始化 Hardhat TypeScript 项目

首先，创建并设置您的项目：

```bash
mkdir my-hardhat-project && cd my-hardhat-project
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv
npx hardhat init
```

当提示时，选择"Create a TypeScript project"以设置基于 TypeScript 的 Hardhat 项目。

设置环境变量：

```bash
# 创建 .env 文件
touch .env

# 添加您的私钥（永远不要提交此文件！）
echo "PRIVATE_KEY=your_private_key_here" >> .env
```

### 2. 编写智能合约

创建 `contracts/HelloWorld.sol`：

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

### 3. 为 Status Network 配置 Hardhat

更新 `hardhat.config.ts`：

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
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

### 4. 创建 Ignition 部署模块

创建 `ignition/modules/HelloWorld.ts`：

```typescript
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HelloWorld", (m) => {
  const helloWorld = m.contract("HelloWorld");
  
  return { helloWorld };
});
```

### 5. 部署合约

```bash
npx hardhat compile
npx hardhat ignition deploy ignition/modules/HelloWorld.ts --network statusTestnet
```

部署将创建一个新的目录 `ignition/deployments`，其中包含您的部署产物和历史记录。

### 7. 与合约交互

创建 `scripts/interact.ts`：

```typescript
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";

async function main() {
  const contractAddress = "0x0d8a93870494Fa21ec39602f31Aa67C9Fed5604f";
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const contract = HelloWorld.attach(contractAddress) as HelloWorld;

  // 读取当前问候语
  const greeting = await contract.getGreet();
  console.log("Current greeting:", greeting);

  // 更新问候语
  const tx = await contract.setGreet("Hello from Status Network!");
  await tx.wait();
  console.log("Greeting updated!");

  // 读取更新后的问候语
  const newGreeting = await contract.getGreet();
  console.log("New greeting:", newGreeting);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

运行交互脚本：

```bash
npx hardhat run scripts/interact.ts --network statusTestnet
```

## 支持

如果遇到问题：
- 加入我们的 [Telegram 社区](https://t.me/statusl2)
- 查看[网络详情](/home/general-info/network-details)
