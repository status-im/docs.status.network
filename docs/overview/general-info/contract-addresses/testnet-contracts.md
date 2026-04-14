---
title: 'Testnet Contracts: Core Status Network Addresses'
description: Official list of testnet contract addresses for Status Network. Access bridge, infrastructure, and core reputation contracts for developer integration.
keywords: [Status Network contracts, testnet addresses, smart contracts, bridge contracts, L1 contracts, L2 contracts, blockchain infrastructure]
---

# Testnet Contracts

This page lists all the important contract addresses for the Status Network testnet infrastructure.

:::warning Sepolia Testnet Sunset
The Sepolia-based testnet is subject to be sunsetted by the end of April 2026.
Please migrate to the **Status Network Hoodi Testnet**.
Refer to the [migration guide](https://status-im.notion.site/status-network-sepolia-testnet-deprecation-notice) for more information.
:::

## Layer 1 Contracts (Hoodi)

These contracts are deployed on the Hoodi testnet. You can view them on [Hoodi Etherscan](https://hoodi.etherscan.io).

### Bridge Contracts

- **LineaRollup (proxy)**
  - Address: [`0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5`](https://hoodi.etherscan.io/address/0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5)
  - Purpose: Manages the L2's validity, DA and messaging from L1 to L2

- **TokenBridge L1 (proxy)**
  - Address: [`0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6`](https://hoodi.etherscan.io/address/0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6)
  - Purpose: Manages token bridging operations on L1

### Infrastructure Accounts

- **L1 Data Submission**
  - Address: [`0xf28FffAA0BD329EcE4e85f3D7163267649eb6B80`](https://hoodi.etherscan.io/address/0xf28FffAA0BD329EcE4e85f3D7163267649eb6B80)
  - Purpose: Manages data submission from L2 to L1

- **L1 Finalization**
  - Address: [`0x74527db6DCa3E006c3ff76787E89eE8dD7963f43`](https://hoodi.etherscan.io/address/0x74527db6DCa3E006c3ff76787E89eE8dD7963f43)
  - Purpose: Handles finalization of L2 blocks on L1

## Layer 2 Contracts (Status Network Testnet V2)

These contracts are deployed on the Status Network Hoodi Testnet (Chain ID: 374).
You can view them on the [Status Network Hoodi Testnet Explorer](https://hoodiscan.status.network).

### Bridge Contracts

- **L2MessageService (proxy)**
  - Address: [`0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D`](https://hoodiscan.status.network/address/0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D)
  - Purpose: Manages the messaging from L2 to L1

- **TokenBridge L2 (proxy)**
  - Address: [`0x48845B2B3cAb9773a5BBA2519f64003316BA6678`](https://hoodiscan.status.network/address/0x48845B2B3cAb9773a5BBA2519f64003316BA6678)
  - Purpose: Manages token bridging operations on L2

### Status Network Contracts

- **Karma (proxy)**
  - Address: [`0x0700be6f329cc48c38144f71c898b72795db6c1b`](https://hoodiscan.status.network/address/0x0700be6f329cc48c38144f71c898b72795db6c1b)
  - Purpose: Non-transferable ERC20 native reputation token

- **KarmaTiers**
  - Address: [`0xb8039632e089dcefa6bbb1590948926b2463b691`](https://hoodiscan.status.network/address/0xb8039632e089dcefa6bbb1590948926b2463b691)
  - Purpose: Tier levels for gasless transactions (11 tiers initialized)

- **RLN (proxy)**
  - Address: [`0x420077c98880a9ebb45296cf7721ab7a5b56bd47`](https://hoodiscan.status.network/address/0x420077c98880a9ebb45296cf7721ab7a5b56bd47)
  - Purpose: Rate-Limiting Nullifier for gasless transactions

- **StakeManager (proxy)**
  - Address: [`0x2bc5b2a5f580064aab6fbc1ee30113cd808582ac`](https://hoodiscan.status.network/address/0x2bc5b2a5f580064aab6fbc1ee30113cd808582ac)
  - Purpose: SNT Staking contract
  
### Utility Contracts

- **Multicall3**
  - Address: [`0xcA11bde05977b3631167028862bE2a173976CA11`](https://hoodiscan.status.network/address/0xcA11bde05977b3631167028862bE2a173976CA11)
  - Purpose: Aggregate multiple calls into a single call for efficiency and reduced RPC requests
