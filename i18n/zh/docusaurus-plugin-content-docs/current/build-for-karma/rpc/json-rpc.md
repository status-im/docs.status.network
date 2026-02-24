---
title: JSON-RPC API
description: 面向开发者的 Status Network JSON-RPC API 参考。
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

Status Network 基于 Linea zkEVM，这意味着**大多数 JSON-RPC 方法的行为与标准 EVM 节点完全一致**。

关于已支持方法及其标准语义的权威列表，请参阅以下官方文档：

- **[以太坊 JSON-RPC API](https://ethereum.github.io/execution-apis/api-documented/)** — 标准以太坊 RPC 方法
- **[Linea JSON-RPC API 参考](https://docs.linea.build/api/reference)** — Linea 专属方法，包括 `linea_estimateGas`

## Status Network 扩展

Status Network 在标准 Linea JSON-RPC 基础上扩展了具有 Karma 感知能力的费用估算：

### `linea_estimateGas`

在 Linea 上，[`linea_estimateGas`](https://docs.linea.build/api/reference/linea-estimategas) 是估算 Gas 的推荐方式，在单次调用中返回 `gasLimit`、`baseFeePerGas` 和 `priorityFeePerGas`。

Status Network 为 `linea_estimateGas` 增加了 Karma 感知行为：

- **无 Gas 用户**：对具有可用 Karma 配额的符合条件用户，返回零 `baseFeePerGas` 和 `priorityFeePerGas`
- **被拒绝名单用户**：对拒绝名单中的用户，在费用字段上应用溢价乘数

### Status Network RPC 差异

在基础 Linea 上，`linea_estimateGas` 已经是推荐方法，因为它返回的费用字段考虑了 L1 验证成本和数据压缩——这是 `eth_estimateGas` 和其他 `eth_` 命名空间调用所不具备的。
Status Network 的分叉进一步将 `linea_estimateGas` 扩展为具有 Karma 感知能力；所有其他 JSON-RPC 方法保留其标准语义。

这意味着使用传统的 `eth_` 方法费用流程（例如 `eth_gasPrice`、`eth_maxPriorityFeePerGas` 或 `eth_feeHistory`）可能导致**不准确**的费用建议：它们同时缺少 Linea 的 L2 专属定价和 Status Network 的 Karma 调整。

在 Status Network 上，使用 `linea_estimateGas` 作为 `gasLimit`、`baseFeePerGas` 和 `priorityFeePerGas` 的唯一数据来源。

基础 Linea 行为请参阅 [Linea 的 Gas 费用指南](https://docs.linea.build/network/how-to/gas-fees) 和 [Linea 的 `linea_estimateGas` 参考](https://docs.linea.build/api/reference/linea-estimategas)。

:::info
包含代码示例、迁移步骤和常见陷阱的详细集成指南，请参阅[为 Karma 构建](/build-for-karma/guides)指南。
:::

### 附加资源

- [Linea 的 Gas 费用指南](https://docs.linea.build/network/how-to/gas-fees)
- [Linea 的 `linea_estimateGas` 参考](https://docs.linea.build/api/reference/linea-estimategas)
- [Karmic 代币经济学](/overview/tokenomics/karmic-tokenomics) — Karma 如何影响 Gas 费用
- [无 Gas 交易](/overview/general-info/gasless-transactions) — 基于 RLN 的无 Gas 系统的技术细节
