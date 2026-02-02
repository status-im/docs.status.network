# 快速开始

在本节中，我们将帮助您在 10 分钟内在 **Status Network 测试网**上部署一个示例合约。

让我们看看如何使用 Remix IDE 在 Status Network 上部署智能合约，这是最简单的方式。

## 准备工作

在开始之前：

1. **将 Status Network 测试网添加到 MetaMask**：

   按照 [Status Network 添加指南](/home/general-info/add-status-network) 的步骤说明将 Status Network 测试网添加到 MetaMask。

2. **获取测试 ETH**：

   您需要 Sepolia ETH 和 Status Network ETH：
   - 首先从 [Sepolia 水龙头](https://faucet.status.network) 获取 Sepolia ETH
   - 然后使用 [Status 跨链桥](https://bridge.status.network) 将一些 ETH 跨链到 Status Network
   - 或者直接从我们的 [测试网水龙头](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878) 获取 Status Network ETH

现在我们准备开始了！

## Remix 和示例代码

**Remix** 是一个无需设置的智能合约开发工具。它易于上手，提供简单的部署流程、调试功能、智能合约交互等功能。

在本教程中，我们将部署一个简单的 `SimpleStorage.sol` 合约：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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

> **注意：** 这个合约允许您存储一个数字并读取该数字。

## 部署步骤

1. **复制示例代码**：

   - 复制示例代码并在 Remix 中粘贴到一个名为 `SimpleStorage.sol` 的新文件中。

2. **编译智能合约**：

   - 转到 **Solidity 编译器**标签页（在左侧边栏）。
   - 确保编译器版本为 0.8.0 或更高。
   - 点击 **"编译 SimpleStorage.sol"**。
   - 您可以启用 **"自动编译"** 以在更改合约代码时自动编译。

3. **部署智能合约**：

   - 切换到 **部署 & 运行交易**标签页。
   - 在 **"环境"** 下拉菜单中，选择 **"Injected Provider - MetaMask"**。
   - MetaMask 可能会提示您连接到 Remix。确认连接。
   - 确保在 MetaMask 中选择了 **Status Network 测试网**。
   - 在 **"合约"** 下，确保选择了 `SimpleStorage`。
   - 点击 **"部署"**。
   - MetaMask 将弹出窗口，要求您确认交易。gas 费用将以 ETH 支付。
   - 检查交易详情并点击 **"确认"**。
   - 等待交易被打包。

4. **验证部署**：
   
   - 部署完成后，从 Remix 复制您的合约地址
   - 在 [Status Network 浏览器](https://sepoliascan.status.network) 上查看

**恭喜！** 您刚刚在 Status Network 上部署了您的第一个智能合约。

## 与您部署的智能合约交互

1. **访问已部署的合约**：

   - 在 Remix 的 **"已部署的合约"** 部分，您将看到您部署的 `SimpleStorage` 合约。

2. **存储数字**：

   - 展开已部署的合约以查看其函数。
   - 在 **"store"** 函数输入字段中，输入一个数字（例如：`42`）。
   - 点击 **"transact"**。
   - MetaMask 将提示您确认交易。gas 费用将以 ETH 支付。
   - 等待交易确认。

3. **检索数字**：

   - 点击 **"retrieve"** 函数。
   - 存储的数字将显示在按钮下方。
   - 这是一个 view 函数，所以不需要支付 gas 费用。

## 下一步

- **获取支持**：
  - 加入我们的 [Telegram 社区](https://t.me/statusl2) 获取帮助
  - 查看我们的 [网络详情](/home/general-info/network-details) 了解更多信息
  - 了解如何 [跨链代币](/home/general-info/bridge/bridging-testnet) 到 Status Network

## 总结

您已经成功：
- 设置环境以与 Status Network 测试网交互
- 通过跨链或水龙头获取测试网 ETH
- 使用 Remix IDE 和 MetaMask 部署智能合约
- 通过存储和检索数字与您部署的合约进行交互

对于更高级的开发，请查看我们使用以下工具的部署指南：
- [Hardhat](/build-for-karma/deploying-contracts/using-hardhat)
- [Foundry](/build-for-karma/deploying-contracts/using-foundry)
