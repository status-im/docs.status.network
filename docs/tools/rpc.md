---
title: RPC Endpoints
description: Official RPC endpoints for Status Network, including configuration guides for MetaMask and Web3 libraries. Learn about available methods, rate limits, and best practices.
keywords: [Status Network RPC, JSON-RPC, blockchain API, web3 configuration, MetaMask setup, blockchain development]
---

# RPC Endpoints

The Status Network provides public RPC (Remote Procedure Call) endpoints that allow you to interact with the network.

## Public RPC URL

```
https://public.sepolia.rpc.status.network
```

## Using the RPC

### Adding to MetaMask
For instructions on adding Status Network to your wallet using this RPC, see our [Add Network guide](../general-info/add-status-network.md).

### Web3 Library Configuration

```javascript
// Web3.js
const web3 = new Web3('https://public.sepolia.rpc.status.network');

// Ethers.js v5
const provider = new ethers.providers.JsonRpcProvider('https://public.sepolia.rpc.status.network');
```

## Available Methods

The RPC endpoint supports standard Ethereum JSON-RPC methods, including:

- `eth_blockNumber`: Get the latest block number
- `eth_getBalance`: Get account balance
- `eth_sendRawTransaction`: Send signed transactions
- `eth_call`: Execute a call without creating a transaction
- `eth_getLogs`: Get event logs
- `eth_getTransactionByHash`: Get transaction details
- `eth_getBlockByNumber`: Get block information

For a complete list of supported RPC methods and detailed specifications, refer to the [Linea API Reference](https://docs.linea.build/api/reference), as Status Network is based on Linea technology.

## Rate Limits

The public RPC endpoint has rate limiting to ensure fair usage:
- 10 requests per second per IP
- 100,000 requests per day per IP

For higher limits, get in touch with us on Telegram.

## Support

If you experience issues with the RPC endpoint:
- Join our [Telegram Community](https://t.me/statusl2) for support
- Consider implementing a fallback RPC strategy in your application