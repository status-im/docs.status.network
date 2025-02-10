# Hardhatを使用したスマートコントラクトのデプロイ

このチュートリアルでは、Hardhat、Hardhat Ignition、およびTypeScriptを使用してStatus Networkテストネットにスマートコントラクトをデプロイする手順を説明します。

## 前提条件

開始する前に、以下が必要です：

- **Node.jsとnpm**: [公式Node.jsウェブサイト](https://nodejs.org/)からダウンロードしてインストール
- **Ethereumウォレット**: Status Networkテストネット用のプライベートキーを持つMetaMaskまたは他のウォレット
- **テストネットETH**: Status NetworkテストネットのETHが必要です
  - Status NetworkテストネットのETHは[フォーセット](/tools/testnet-faucets)から入手できます
- **基本知識**: Solidity、Hardhat、コマンドラインの基礎知識

## 達成目標

- TypeScriptベースのHardhatプロジェクトの初期化
- 基本的なEthereumスマートコントラクトの作成
- Status Networkテストネットデプロイ用のHardhatの設定
- Hardhat Ignitionを使用したスマートコントラクトのデプロイ

## 手順

### 1. HardhatのTypeScriptプロジェクトの初期化

まず、プロジェクトを作成し設定します：

```bash
mkdir my-hardhat-project && cd my-hardhat-project
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv
npx hardhat init
```

プロンプトが表示されたら、「Create a TypeScript project」を選択してTypeScriptベースのHardhatプロジェクトを設定します。

環境変数を設定します：

```bash
# .envファイルを作成
touch .env

# プライベートキーを追加（このファイルは絶対にコミットしないでください！）
echo "PRIVATE_KEY=your_private_key_here" >> .env
```

### 2. スマートコントラクトの作成

`contracts/HelloWorld.sol`を作成します：

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

### 3. Status Network用のHardhatの設定

`hardhat.config.ts`を更新します：

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

### 4. Ignitionデプロイメントモジュールの作成

`ignition/modules/HelloWorld.ts`を作成します：

```typescript
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HelloWorld", (m) => {
  const helloWorld = m.contract("HelloWorld");
  
  return { helloWorld };
});
```

### 5. コントラクトのデプロイ

```bash
npx hardhat compile
npx hardhat ignition deploy ignition/modules/HelloWorld.ts --network statusTestnet
```

デプロイメントにより、デプロイメントの成果物と履歴を含む新しいディレクトリ`ignition/deployments`が作成されます。

### 7. コントラクトとの対話

`scripts/interact.ts`を作成します：

```typescript
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";

async function main() {
  const contractAddress = "0x0d8a93870494Fa21ec39602f31Aa67C9Fed5604f";
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const contract = HelloWorld.attach(contractAddress) as HelloWorld;

  // 現在の挨拶を読み取り
  const greeting = await contract.getGreet();
  console.log("Current greeting:", greeting);

  // 挨拶を更新
  const tx = await contract.setGreet("Hello from Status Network!");
  await tx.wait();
  console.log("Greeting updated!");

  // 更新された挨拶を読み取り
  const newGreeting = await contract.getGreet();
  console.log("New greeting:", newGreeting);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

対話スクリプトを実行します：

```bash
npx hardhat run scripts/interact.ts --network statusTestnet
```

## サポート

問題が発生した場合：
- [Telegramコミュニティ](https://t.me)に参加
- [ネットワークステータス](https://health.status.network)を確認
- [ネットワーク詳細](/general-info/network-details)を参照
