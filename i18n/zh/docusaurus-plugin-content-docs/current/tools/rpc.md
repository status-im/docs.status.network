# RPC 端点

Status Network 提供公共 RPC（远程过程调用）端点，允许您与网络进行交互。

## 公共 RPC URL

```
https://public.sepolia.rpc.status.network
```

## 使用 RPC

### 添加到 MetaMask
有关使用此 RPC 将 Status Network 添加到您钱包的说明，请参阅我们的[添加网络指南](../general-info/add-status-network.md)。

### Web3 库配置

```javascript
// Web3.js
const web3 = new Web3('https://public.sepolia.rpc.status.network');

// Ethers.js v5
const provider = new ethers.providers.JsonRpcProvider('https://public.sepolia.rpc.status.network');
```

## 可用方法

RPC 端点支持标准的以太坊 JSON-RPC 方法，包括：

- `eth_blockNumber`: 获取最新区块号
- `eth_getBalance`: 获取账户余额
- `eth_sendRawTransaction`: 发送已签名的交易
- `eth_call`: 执行调用而不创建交易
- `eth_getLogs`: 获取事件日志
- `eth_getTransactionByHash`: 获取交易详情
- `eth_getBlockByNumber`: 获取区块信息

有关支持的 RPC 方法的完整列表和详细规范，请参考 [Linea API 参考](https://docs.linea.build/api/reference)，因为 Status Network 基于 Linea 技术。

## 速率限制

公共 RPC 端点有速率限制以确保公平使用：
- 每个 IP 每秒 10 个请求
- 每个 IP 每天 100,000 个请求

如需更高限制，请通过 Telegram 与我们联系。

## 支持

如果您在使用 RPC 端点时遇到问题：
- 加入我们的 [Telegram 社区](https://t.me/statusl2)获取支持
- 考虑在您的应用程序中实现备用 RPC 策略
