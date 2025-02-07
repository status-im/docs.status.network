# Status Network Testnet Bridge

The Status Network Testnet Bridge allows users to transfer tokens between Sepolia (Layer 1) and Status Network testnet (Layer 2). The bridge interface is available at [bridge.status.network](https://bridge.status.network).

## Overview

The bridge serves as a crucial infrastructure component that enables:
- Token transfers from Sepolia to Status Network testnet
- Token withdrawals from Status Network testnet to Sepolia
- Message passing between L1 and L2

## Bridge Contracts

### Layer 1 (Sepolia)
- **Token Bridge**: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)

### Layer 2 (Status Network)
- **Token Bridge**: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)

## Features

- **Token Bridging**: Transfer ERC-20 tokens between networks
- **ETH Bridging**: Bridge ETH between Sepolia and Status Network
- **Transaction Tracking**: Monitor the status of your bridge transactions
- **Gas Estimation**: See estimated gas costs before bridging

## Supported Tokens

For the most up-to-date list of supported tokens and their contract addresses, please refer to our [Token List Repository](https://github.com/status-im/status-network-token-list).

## Using the Bridge

For detailed instructions on how to use the bridge, including step-by-step guides and important security considerations, please refer to our [Bridging Guide](../general-info/bridge/bridging-testnet.md).

## Monitoring Bridge Transactions

You can monitor your bridge transactions using:
- [Status Network Explorer](https://sepoliascan.status.network) for L2 transactions
- [Sepolia Etherscan](https://sepolia.etherscan.io) for L1 transactions

## Support

If you encounter any issues while using the bridge:
- Check our [Bridging Guide](../general-info/bridge/bridging-testnet.md) for common solutions
- Join our [Telegram Community](https://t.me/+k04A_OZbhIs1Mzc9) for assistance
- Monitor [Network Status](https://health.status.network) for any ongoing issues