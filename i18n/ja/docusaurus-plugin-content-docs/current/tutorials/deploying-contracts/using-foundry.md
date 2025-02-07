# Foundryを使用したスマートコントラクトのデプロイ

このチュートリアルでは、Foundryを使用してStatus Networkテストネットにスマートコントラクトをデプロイする手順を説明します。

## 前提条件

開始する前に、以下が必要です：

- **Foundry**: [公式Foundryブック](https://book.getfoundry.sh/getting-started/installation)からインストール
- **Ethereumウォレット**: Status Networkテストネット用のプライベートキー
- **テストネットETH**: Status NetworkテストネットのETHが必要です
  - Status NetworkテストネットのETHは[フォーセット](/tools/testnet-faucets)から入手できます
- **基本知識**: Solidityとコマンドラインの基礎知識

## 達成目標

- Foundryプロジェクトの初期化
- 基本的なEthereumスマートコントラクトの作成
- Status Networkテストネットデプロイ用のFoundryの設定
- スマートコントラクトのデプロイ

## 手順

### 1. Foundryプロジェクトの初期化

まず、新しいFoundryプロジェクトを作成します：

```bash
# 新規プロジェクトの作成
forge init hello_status
cd hello_status

# プライベートキー用の.envファイルを作成
touch .env
echo "PRIVATE_KEY=your_private_key_here" >> .env
```

### 2. スマートコントラクトの作成

`src/Counter.sol`を`HelloWorld.sol`に置き換えます：

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

### 3. Status Network用のFoundryの設定

`foundry.toml`を作成または更新します：

```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc = "0.8.24"

[rpc_endpoints]
status_testnet = "https://public.sepolia.rpc.status.network"
```

### 4. コントラクトのデプロイ

デプロイメントスクリプト`script/Deploy.s.sol`を作成します：

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

forgeを使用してデプロイします：

```bash
# 環境変数の読み込み
source .env

# Status Networkテストネットにデプロイ
forge script script/Deploy.s.sol:DeployScript \
    --rpc-url https://public.sepolia.rpc.status.network \
    --broadcast \
```

### 5. コントラクトとの対話

コントラクトと対話するスクリプト`script/Interact.s.sol`を作成します：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/HelloWorld.sol";

contract InteractScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address contractAddress = address(0x...); // コントラクトアドレスに置き換えてください
        
        vm.startBroadcast(deployerPrivateKey);
        
        HelloWorld hello = HelloWorld(contractAddress);
        
        // 現在の挨拶を読み取り
        string memory currentGreeting = hello.getGreet();
        console.log("Current greeting:", currentGreeting);
        
        // 挨拶を更新
        hello.setGreet("Hello from Foundry!");
        
        vm.stopBroadcast();
    }
}
```

対話スクリプトを実行します：

```bash
forge script script/Interact.s.sol:InteractScript \
    --rpc-url https://public.sepolia.rpc.status.network \
    --broadcast
```

### 6. 簡単な対話のためのCastコマンド

`cast`を使用してコントラクトと対話することもできます：

```bash
# 挨拶を読み取り
cast call <CONTRACT_ADDRESS> "getGreet()" \
    --rpc-url https://public.sepolia.rpc.status.network

# 新しい挨拶を設定
cast send <CONTRACT_ADDRESS> "setGreet(string)" "New greeting!" \
    --private-key $PRIVATE_KEY \
    --rpc-url https://public.sepolia.rpc.status.network
```

### 7. テスト

テストファイル`test/HelloWorld.t.sol`を作成します：

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

テストを実行します：

```bash
forge test
```

## サポート

問題が発生した場合：
- [Telegramコミュニティ](https://t.me/+k04A_OZbhIs1Mzc9)に参加
- [ネットワークステータス](https://health.status.network)を確認
- [ネットワーク詳細](/general-info/network-details)を参照

## 追加リソース

- [Foundryブック](https://book.getfoundry.sh/)
- [Status Networkエクスプローラー](https://sepoliascan.status.network)
