# 使用 Foundry 部署智能合约

本教程将指导您使用 Foundry 在 Status Network 测试网上部署智能合约。

## 前提条件

开始之前，请确保您具备以下条件：

- **Foundry**: 从[官方 Foundry 文档](https://book.getfoundry.sh/getting-started/installation)安装
- **以太坊钱包**: Status Network 测试网的私钥
- **测试网 ETH**: 您需要 Status Network 测试网 ETH
  - 从我们的[水龙头](/tools/testnet-faucets)获取 Status Network 测试网 ETH
- **基础知识**: 熟悉 Solidity 和命令行

## 您将完成

- 初始化 Foundry 项目
- 编写基本的以太坊智能合约
- 配置 Foundry 以部署到 Status Network 测试网
- 部署您的智能合约

## 步骤

### 1. 初始化 Foundry 项目

首先，创建一个新的 Foundry 项目：

```bash
# 创建新项目
forge init hello_status
cd hello_status

# 创建 .env 文件存储私钥
touch .env
echo "PRIVATE_KEY=your_private_key_here" >> .env
```

### 2. 编写智能合约

将 `src/Counter.sol` 替换为 `HelloWorld.sol`：

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

### 3. 为 Status Network 配置 Foundry

创建或更新 `foundry.toml`：

```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc = "0.8.24"

[rpc_endpoints]
status_testnet = "https://public.sepolia.rpc.status.network"
```

### 4. 部署合约

创建部署脚本 `script/Deploy.s.sol`：

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

使用 forge 部署：

```bash
# 加载环境变量
source .env

# 部署到 Status Network 测试网
forge script script/Deploy.s.sol:DeployScript \
    --rpc-url https://public.sepolia.rpc.status.network \
    --broadcast \
```

### 5. 与合约交互

创建交互脚本 `script/Interact.s.sol`：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/HelloWorld.sol";

contract InteractScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address contractAddress = address(0x...); // 替换为您的合约地址
        
        vm.startBroadcast(deployerPrivateKey);
        
        HelloWorld hello = HelloWorld(contractAddress);
        
        // 读取当前问候语
        string memory currentGreeting = hello.getGreet();
        console.log("Current greeting:", currentGreeting);
        
        // 更新问候语
        hello.setGreet("Hello from Foundry!");
        
        vm.stopBroadcast();
    }
}
```

运行交互脚本：

```bash
forge script script/Interact.s.sol:InteractScript \
    --rpc-url https://public.sepolia.rpc.status.network \
    --broadcast
```

### 6. 使用 Cast 命令快速交互

您也可以使用 `cast` 与合约交互：

```bash
# 读取问候语
cast call <CONTRACT_ADDRESS> "getGreet()" \
    --rpc-url https://public.sepolia.rpc.status.network

# 设置新问候语
cast send <CONTRACT_ADDRESS> "setGreet(string)" "New greeting!" \
    --private-key $PRIVATE_KEY \
    --rpc-url https://public.sepolia.rpc.status.network
```

### 7. 测试

创建测试文件 `test/HelloWorld.t.sol`：

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

运行测试：

```bash
forge test
```

## 支持

如果遇到问题：
- 加入我们的 [Telegram 社区](https://t.me/statusl2)
- 查看[网络详情](/home/general-info/network-details)

## 其他资源

- [Foundry 文档](https://book.getfoundry.sh/)
- [Status Network 浏览器](https://sepoliascan.status.network)
