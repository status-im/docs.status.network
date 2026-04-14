---
title: 'Testnet Bridge: Move Tokens to Status Network L2'
description: Official bridge guide for Status Network. Transfer ETH and tokens between Sepolia and our gasless L2 to start building with reputation-based access.
keywords: [Status Network bridge, token bridge, cross-chain transfer, L1 L2 bridge, token bridging, Sepolia bridge]
slug: /tools/core-infrastructure/bridge
---

# Status Network Testnet Bridge

The Status Network bridge allows users to transfer tokens and pass messages between Layer 1 and Status Network (Layer 2). 
The bridge interface is available at [bridge.status.network](https://bridge.status.network).

:::warning Sepolia Testnet Sunset
The Sepolia-based testnet is subject to be sunsetted by the end of April 2026. Please migrate to the new **Status Network Hoodi Testnet** below. Refer to the [migration guide](https://status-im.notion.site/status-network-sepolia-testnet-deprecation-notice) for more information. 
:::

## Bridge Contracts

### Layer 1 (Hoodi)

- **LineaRollup (proxy)**: [`0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5`](https://hoodi.etherscan.io/address/0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5)
- **TokenBridge L1 (proxy)**: [`0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6`](https://hoodi.etherscan.io/address/0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6)

#### Layer 2 (Status Network Hoodi)

- **L2MessageService (proxy)**: [`0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D`](https://hoodiscan.status.network/address/0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D)
- **TokenBridge L2 (proxy)**: [`0x48845B2B3cAb9773a5BBA2519f64003316BA6678`](https://hoodiscan.status.network/address/0x48845B2B3cAb9773a5BBA2519f64003316BA6678)

## Features

- **Token Bridging**: Transfer ERC-20 tokens between networks
- **ETH Bridging**: Bridge ETH between L1 and Status Network
- **Transaction Tracking**: Monitor the status of your bridge transactions
- **Gas Estimation**: See estimated gas costs before bridging

## Supported Tokens

For the most up-to-date list of supported tokens and their contract addresses, please refer to our [Token List Repository](https://github.com/status-im/status-network-token-list).

## Using the Bridge

For detailed instructions on how to use the bridge, including step-by-step guides and important security considerations, please refer to our [Bridging Guide](/overview/general-info/bridge/bridging-testnet).

## Monitoring Bridge Transactions

You can monitor your bridge transactions using:

- [Status Network Explorer](https://hoodiscan.status.network) for L2 transactions
- [Hoodi Etherscan](https://hoodi.etherscan.io) for L1 transactions

## Support

If you encounter any issues while using the bridge:

- Check our [Bridging Guide](/overview/general-info/bridge/bridging-testnet) for common solutions
- Join our [Telegram Community](https://t.me/statusl2) for assistance
