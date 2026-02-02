# 使用 Remix 部署智能合约

本教程将指导您使用 Remix IDE 在 Status Network 测试网上部署智能合约。Remix 是一个基于浏览器的 IDE，非常适合快速开发和测试。

## 前提条件

开始之前，请确保您具备：

- **网络浏览器**: Chrome 或 Firefox 等现代浏览器
- **MetaMask**: 安装 [MetaMask](https://metamask.io) 浏览器扩展
- **测试网 ETH**: 您需要 Status Network 测试网 ETH
  - 从我们的[水龙头](/tools/testnet-faucets)获取 Status Network 测试网 ETH
- **网络配置**: 按照我们的[添加网络指南](/home/general-info/add-status-network)将 Status Network 测试网添加到 MetaMask

## 步骤

### 1. 打开 Remix IDE

在浏览器中访问 [remix.ethereum.org](https://remix.ethereum.org)。

### 2. 创建新文件

1. 点击"File Explorer"图标（左侧边栏的第一个图标）
2. 点击"+"按钮创建新文件
3. 命名为 `HelloWorld.sol`

### 3. 编写智能合约

将以下代码复制粘贴到 `HelloWorld.sol` 中：

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

### 4. 编译合约

1. 点击"Solidity Compiler"图标（左侧边栏的第二个图标）
2. 选择编译器版本"0.8.24"
3. 选择“高级配置”，然后选择 EVM 版本“paris”。
4. 点击"Compile HelloWorld.sol"
5. 确保编译成功（会看到绿色对勾）

### 5. 部署合约

1. 点击"Deploy & Run Transactions"图标（左侧边栏的第四个图标）
2. 在"Environment"下拉菜单中选择"Injected Provider - MetaMask"
3. MetaMask 会提示连接 - 确保选择了 Status Network 测试网
4. 点击"Deploy"
5. 在 MetaMask 中确认交易
6. 等待交易确认

### 6. 与合约交互

部署后，您将在"Deployed Contracts"下看到您的合约：

1. 展开合约界面
2. 您可以：
   - 点击"greet"读取当前问候语
   - 在"setGreet"字段中输入新问候语并点击按钮更新
   - 点击"getGreet"再次读取问候语

## 故障排除

### 常见问题

1. **交易失败**
   - 检查是否已连接到 Status Network 测试网

2. **找不到合约**
   - 等待几分钟让浏览器索引您的合约
   - 仔细检查合约地址

3. **编译错误**
   - 验证编译器版本是否与 pragma 语句匹配
   - 检查 Remix 中突出显示的任何语法错误

## 支持

如果遇到问题：
- 加入我们的 [Telegram 社区](https://t.me/statusl2)
- 查看[网络详情](/home/general-info/network-details)

## 其他资源

- [Remix 文档](https://remix-ide.readthedocs.io/)
- [Status Network 浏览器](https://sepoliascan.status.network)
