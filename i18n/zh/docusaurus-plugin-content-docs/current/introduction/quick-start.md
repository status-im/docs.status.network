# 快速开始

在本节中，我们将在不到 10 分钟的时间内指导您在 **Status Network 测试网** 上部署一个示例合约。

为了简单起见，我们将使用 Remix IDE 来在 Status Network 上部署智能合约。

## 准备工作

在开始之前：

- **将 Status Network 测试网添加到 MetaMask**：

  请按照 [Status Network 文档](/general-info/add-status-network) 中的分步说明，将 Status Network 测试网添加到 MetaMask。您将需要网络的 RPC URL、链 ID 和其他详细信息。

- **获取测试网代币**：

  本指南假设您已经在 Status Network 上获得了测试网 ETH。您可以使用 [Status Network 测试网水龙头](#) 来请求测试代币。

我们已经准备好开始了！

## Remix 与示例代码

**Remix** 是一个无需设置的智能合约开发工具。它易于上手，允许简单的部署过程、调试、与智能合约交互等。它是测试快速更改和与已部署智能合约交互的绝佳工具。

在本教程中，我们将部署 Remix 中作为示例提供的 `SimpleStorage.sol` 智能合约，但您可以使用自己的任何代码。

以下是示例代码：

```solidity
// SPDX-License-Identifier: GPL-3.0

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

> **注意：** 这个合约允许您存储一个数字，然后读取该数字。

## 部署步骤

1. **复制示例代码**：

   - 复制上述示例代码，并将其粘贴到 Remix 中名为 `SimpleStorage.sol` 的新文件中。

2. **编译智能合约**：

   - 转到 **Solidity Compiler** 选项卡（在左侧边栏）。
   - 确保编译器版本与合约中的 pragma 声明（`0.8.24`）匹配。
   - 点击 **“Compile SimpleStorage.sol”**。
   - 您可以启用 **“Auto compile”**，以便在更改合约代码时自动编译。

3. **部署智能合约**：

   - 切换到 **Deploy & Run Transactions** 选项卡。
   - 在 **“Environment”** 下拉菜单中，选择 **“Injected Provider - MetaMask”**。这会将 Remix 连接到您的 MetaMask 钱包。
   - MetaMask 可能会提示您连接到 Remix。请确认连接。
   - 确保在 MetaMask 中选择了 **Status Network 测试网**。
   - 在 **“Contract”** 下，确保选择了 `SimpleStorage`。
   - 点击 **“Deploy”**。
   - MetaMask 将弹出，要求您确认交易。
   - 查看交易详情并点击 **“Confirm”**。
   - 等待交易被挖矿。您可以在 Remix 或 MetaMask 中跟踪状态。

**恭喜您！** 您刚刚在 Status Network 上部署了您的第一个智能合约。

## 与已部署的智能合约交互

1. **访问已部署的合约**：

   - 在 Remix 中的 **“Deployed Contracts”** 部分下，您将看到已部署的 `SimpleStorage` 合约。

2. **存储一个数字**：

   - 展开已部署的合约以查看其函数。
   - 在 **“store”** 函数的输入字段中，输入一个数字（例如 `42`）。
   - 点击 **“transact”**。
   - MetaMask 会提示您确认交易。点击 **“Confirm”**。
   - 等待交易被确认。

3. **检索数字**：

   - 点击 **“retrieve”** 函数。
   - 存储的数字将显示在按钮下方。

## 下一步

- **获取支持**：

  - 如果您遇到任何问题或有疑问，请访问 [Status Network 支持](https://status.app) 或加入社区频道寻求帮助。

## 总结

您已成功完成：

- 设置与 Status Network 测试网交互的环境。
- 使用 Remix IDE 和 MetaMask 部署了智能合约。
- 通过存储和检索数字，与已部署的合约进行了交互。

---

如果您想更深入地学习，可以考虑探索更复杂的智能合约。查看更多教程请点击[这里](/tutorials/ethers-tutorial)。

**祝您编程愉快！**