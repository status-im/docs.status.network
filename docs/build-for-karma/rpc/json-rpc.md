---
title: JSON-RPC API
description: Status Network JSON-RPC API reference for builders.
keywords:
  [
    Status Network,
    JSON-RPC,
    Linea,
    EIP-1559,
    eth_estimateGas,
    linea_estimateGas,
    Karma,
    gasless,
  ]
---

Status Network is based on Linea zkEVM, meaning **most JSON-RPC methods behave exactly like a standard EVM node**.

For the canonical list of supported methods and their standard semantics, refer to the following official documentations:

- **[Ethereum JSON-RPC API](https://ethereum.github.io/execution-apis/api-documented/)** — standard Ethereum RPC methods
- **[Linea JSON-RPC API Reference](https://docs.linea.build/api/reference)** — Linea-specific methods, including `linea_estimateGas`

## Status Network extensions

Status Network extends the standard Linea JSON-RPC with Karma-aware fee estimation:

### `linea_estimateGas`

On Linea, [`linea_estimateGas`](https://docs.linea.build/api/reference/linea-estimategas) is the recommended way to estimate gas, returning `gasLimit`, `baseFeePerGas`, and `priorityFeePerGas` in a single call.

Status Network extends `linea_estimateGas` with Karma-aware behavior:

- **Gasless users**: Returns zero `baseFeePerGas` and `priorityFeePerGas` for eligible users with available Karma quota
- **Deny-listed users**: Applies a premium multiplier to fee fields for users on the deny list

### Status Network RPC differences

On base Linea, `linea_estimateGas` is already the recommended method because it returns fee fields that account for L1 verification costs and data compression - something `eth_estimateGas` and other `eth_` namespace calls do not provide.
Status Network's fork extends `linea_estimateGas` further to be Karma-aware; all other JSON-RPC methods retain their standard semantics.

That means using the traditional fee flow with `eth_` methods (for example `eth_gasPrice`, `eth_maxPriorityFeePerGas`, or `eth_feeHistory`) can lead to **inaccurate** fee suggestions: they miss both Linea's L2-specific pricing and Status Network's Karma adjustments.

Use `linea_estimateGas` as the single source of truth for `gasLimit`, `baseFeePerGas`, and `priorityFeePerGas` on Status Network.

See [Linea's gas-fee guide](https://docs.linea.build/network/how-to/gas-fees) and [Linea's `linea_estimateGas` reference](https://docs.linea.build/api/reference/linea-estimategas) for the base Linea behavior.

:::info
For detailed integration guidance including code examples, migration steps, and common pitfalls, see the [Gasless Integration](/build-for-karma/guides/gasless-integration) guide.
:::

### Additional resources

- [Linea's gas-fee guide](https://docs.linea.build/network/how-to/gas-fees)
- [Linea's `linea_estimateGas` reference](https://docs.linea.build/api/reference/linea-estimategas)
- [Karmic Tokenomics](/overview/tokenomics/karmic-tokenomics) — how Karma impacts gas fees
- [Gasless Transactions](/overview/general-info/gasless-transactions) — technical details of the RLN-based gasless system
