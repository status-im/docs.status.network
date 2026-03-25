---
title: 以太坊与 Status Network 之间的差异
description: Status Network 与以太坊主网之间的差异——开发者需要了解的操作码、预编译合约、交易类型和 API 行为。
keywords: [Status Network, 以太坊差异, EVM 兼容性, 操作码, 预编译合约, Linea zkEVM]
sidebar_position: 1
---

本文概述了以太坊主网上的功能在 Status Network 上存在差异或尚不可用的部分。
如果某项功能未在本文中提及，则表示该功能在 Status Network 上可用，且其行为与以太坊主网保持一致。
如果你遇到与本文不一致的情况，请通过我们的 [Telegram Builder 社区](https://t.me/statusl2) 联系我们。

::::note

Status Network 基于 [Linea zkEVM](https://linea.build) 技术栈构建。下面列出的差异来自 Linea zkEVM 的体系结构，同样适用于 Status Network。

::::

## EVM 操作码

| 操作码 | 以太坊 | Status Network |
| --- | --- | --- |
| `BLOBBASEFEE` | 返回当前区块的 blob 基础费用。 | 始终返回最小值。 |
| `BLOBHASH` | 给定与交易关联的 blob `index`，返回对应 blob 的哈希。<br/>若索引越界则返回 `0`。 | 始终返回 `0`。 |
| `BLOCKHASH` | 返回最近 256 个区块中指定区块的哈希。 | 返回正确的值，但该值不受证明约束（Status Network 是 2 类 zkEVM，并使用 / 证明特定于 L2 的状态表示）。 |
| `PREVRANDAO` | 返回上一区块的 RANDAO 值。 | 使用与以太坊类似的公式，例如 `L2_prevrandao XOR hash(signed(slot_id))`。 |

_更多信息请参考以太坊基金会的 [操作码参考](https://ethereum.org/en/developers/docs/evm/opcodes/)。_

[Evmdiff](https://evmdiff.com) 对比 EVM 实现（将 Ethereum Mainnet 与 _Linea_ 进行比较）也非常有用，
而 [evm.codes](https://evm.codes/) 则适合查询以太坊上具体操作码的详细信息。

## 预编译合约（Precompiles）

| 预编译 | 以太坊 | Status Network |
| --- | --- | --- |
| `BLAKE2f` | BLAKE2 加密哈希算法中使用的压缩函数 F。 | 不支持。 |
| `MODEXP` | 任意精度的模幂运算。 | 仅支持参数（base、exponent、modulus）长度不超过 512 字节的整数。 |
| 将预编译合约作为交易接收方 | 适用于多种用例。 | 不支持。交易的 `to` 地址不能是预编译合约地址，即不能是 `0x01`–`0x09` 范围内的地址。 |
| `RIPEMD-160` | 一种哈希函数。 | 不支持。 |

## Beacon 根

[EIP-4788](https://eips.ethereum.org/EIPS/eip-4788) 在以太坊 Dencun 升级中引入了一个智能合约，
允许调用方 `get` 或 `set` 信标链区块的哈希树根。

该功能在 Status Network 上同样可用。但由于与以太坊主网相比区块时间不同，只有前一个区块的根是可用的。

## Call data

Status Network 的排序器会限制 call data 的大小，以确保交易可以装入对应的 blob 中。
当前的限制为 60,000 字节。

## JSON-RPC API

Status Network 使用标准的以太坊 JSON-RPC API 方法。
不过在少数情况下，这些方法与以太坊存在差异——最显著的是 `linea_estimateGas`，它扩展了对 Karma 感知的费用估算。

完整细节请参阅 [JSON-RPC API](/tools/rpc/json-rpc) 参考文档。

## 类型 3 交易

Status Network 不支持类型 3（`0x3` 或“blob”）交易。
该类型在以太坊主网上主要用于二层 Rollup 以较低成本在 L1 上发布数据。

## EIP-7702

Status Network 目前尚未支持 EIP-7702。

