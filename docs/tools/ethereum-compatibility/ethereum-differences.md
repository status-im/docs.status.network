---
title: Differences between Ethereum and Status Network
description: Differences between Status Network and Ethereum mainnet — opcodes, precompiles, transaction types, and API behavior developers should know about.
keywords: [Status Network, Ethereum differences, EVM compatibility, opcodes, precompiles, Linea zkEVM]
sidebar_position: 1
---

# Differences between Ethereum and Status Network

This page outlines Ethereum mainnet functionality that differs on Status Network, or is not yet available.
Absence from this page indicates that the functionality is available on Status Network and identical to behavior on Ethereum mainnet.
If you're experiencing otherwise, please get in touch via our [Telegram Builder's Community](https://t.me/statusl2).

:::note

Status Network is built on the [Linea zkEVM](https://linea.build) stack. The differences listed below are inherited from the Linea zkEVM architecture and apply equally to Status Network.

:::

## EVM opcodes

| Opcode | Ethereum | Status Network |
| --- | --- | --- |
| `BLOBBASEFEE` | Returns the value of the blob base-fee of the current block. | Will always return the minimum value. |
| `BLOBHASH` | Given an `index` for a blob associated with a transaction, returns the hash of the corresponding blob. <br/> Returns `0` if out of bounds. | Will always return `0`. |
| `BLOCKHASH` | Returns the hash of a requested block from the 256 most recent blocks. | Returns the correct value, but the value is not guaranteed by the proof (Status Network is a type 2 zkEVM, and uses/proves an L2-specific state representation). |
| `PREVRANDAO` | Returns the RANDAO value from the previous block. | Uses a formula similar to Ethereum, e.g. `L2_prevrandao XOR hash(signed(slot_id))`. |

_Consult the Ethereum Foundation's [Opcode Reference](https://ethereum.org/en/developers/docs/evm/opcodes/)
for more._

[Evmdiff](https://evmdiff.com) is also a useful resource for comparing EVM implementations (compare Ethereum Mainnet against _Linea_), and
[evm.codes](https://evm.codes/) is useful for information about specific opcodes on Ethereum.

## Precompiles

| Precompile | Ethereum | Status Network |
| --- | --- | --- |
| `BLAKE2f` | Compression function F used in the BLAKE2 cryptographic hashing algorithm. | Not supported. |
| `MODEXP` | Arbitrary-precision exponentiation under modulo. | Only supports arguments (base, exponent, modulus) that do not exceed 512-byte integers. |
| Precompiles as transaction recipients | Applicable to various use cases. | Not supported. A transaction `to` address cannot be a precompile, i.e. an address in the range `0x01`-`0x09`. |
| `RIPEMD-160` | A hash function. | Not supported. |

## Beacon root

[EIP-4788](https://eips.ethereum.org/EIPS/eip-4788), included in Ethereum's Dencun upgrade,
introduced a smart contract that enables the caller to `get` or `set` the hash tree root of a
beacon chain block.

This functionality is available on Status Network. However, due to the difference in block time
when compared to Ethereum mainnet, only the root of the previous block is available.

## Call data

Status Network's sequencer limits the size of call data so that transactions can fit into the
corresponding blob. The current limit is 60,000 bytes.

## JSON-RPC API

Status Network uses the standard Ethereum JSON-RPC API methods. However, in a few cases, methods
differ from those on Ethereum — most notably `linea_estimateGas`, which is extended with
Karma-aware fee estimation.

For full details, see the [JSON-RPC API](/tools/rpc/json-rpc) reference.

## Type 3 transactions

Status Network does not support type 3 (`0x3` or "blob") transactions. This type is used on
Ethereum mainnet primarily for layer 2 rollups to cheaply post data on L1.

## EIP-7702

EIP-7702 is not yet supported on Status Network.
