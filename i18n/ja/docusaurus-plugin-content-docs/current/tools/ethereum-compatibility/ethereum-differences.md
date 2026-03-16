---
title: Ethereum と Status Network の違い
description: Status Network と Ethereum メインネットの違い — 開発者が知っておくべきオペコード、プリコンパイル、トランザクションタイプ、API 動作。
keywords: [Status Network, Ethereum の違い, EVM 互換性, オペコード, プリコンパイル, Linea zkEVM]
sidebar_position: 1
---

このページでは、Ethereum メインネットと比べて Status Network 上で動作が異なる、あるいはまだ提供されていない機能をまとめます。
ここに記載がない機能については、Status Network 上で利用可能であり、その動作は Ethereum メインネットと同一であるとみなせます。
もし異なる挙動を見つけた場合は、[Telegram Builder コミュニティ](https://t.me/statusl2) までご連絡ください。

::::note

Status Network は [Linea zkEVM](https://linea.build) スタックの上に構築されています。
以下に挙げる差分は Linea zkEVM のアーキテクチャに由来するものであり、Status Network にもそのまま適用されます。

::::

## EVM オペコード

| オペコード | Ethereum | Status Network |
| --- | --- | --- |
| `BLOBBASEFEE` | 現在のブロックにおける blob ベースフィーの値を返します。 | 常に最小値を返します。 |
| `BLOBHASH` | トランザクションに紐づく blob の `index` を指定すると、その blob のハッシュを返します。<br/>範囲外のインデックスの場合は `0` を返します。 | 常に `0` を返します。 |
| `BLOCKHASH` | 直近 256 ブロックのうち、指定されたブロックのハッシュを返します。 | 正しい値を返しますが、その値は証明によって保証されているわけではありません（Status Network はタイプ 2 zkEVM であり、L2 固有の状態表現を使用・証明します）。 |
| `PREVRANDAO` | ひとつ前のブロックの RANDAO 値を返します。 | Ethereum と同様の数式を用います。例: `L2_prevrandao XOR hash(signed(slot_id))`。 |

_詳細については、Ethereum Foundation の [Opcode Reference](https://ethereum.org/en/developers/docs/evm/opcodes/) を参照してください。_

[Evmdiff](https://evmdiff.com) は EVM 実装を比較する際に便利です（Ethereum Mainnet と _Linea_ を比較）。
また、[evm.codes](https://evm.codes/) は Ethereum 上の個々のオペコードの詳細を調べるのに役立ちます。

## プリコンパイル（Precompiles）

| プリコンパイル | Ethereum | Status Network |
| --- | --- | --- |
| `BLAKE2f` | BLAKE2 暗号ハッシュアルゴリズムで使用される圧縮関数 F。 | 未対応。 |
| `MODEXP` | 任意精度のモジュラ累乗演算。 | 引数（base, exponent, modulus）が 512 バイトを超えない整数に限りサポートされます。 |
| プリコンパイルをトランザクションの受信者にする | さまざまなユースケースで利用可能。 | 未対応。トランザクションの `to` アドレスはプリコンパイルアドレス、つまり `0x01`〜`0x09` の範囲のアドレスにはできません。 |
| `RIPEMD-160` | ハッシュ関数。 | 未対応。 |

## Beacon ルート

[EIP-4788](https://eips.ethereum.org/EIPS/eip-4788) は Ethereum の Dencun アップグレードで導入されたもので、
ビーコンチェーンブロックのハッシュツリールートを `get` / `set` できるスマートコントラクトを追加しました。

この機能は Status Network にも存在します。
ただし Ethereum メインネットと比較してブロックタイムが異なるため、利用できるのは直前のブロックのルートのみです。

## コールデータ（Call data）

Status Network のシーケンサーは、トランザクションが対応する blob に収まるよう、
コールデータのサイズに制限を設けています。
現在の上限は 60,000 バイトです。

## JSON-RPC API

Status Network は標準的な Ethereum JSON-RPC API メソッドを使用します。
ただし、いくつかのメソッドは Ethereum と動作が異なる場合があります。特に `linea_estimateGas` は、
Karma を考慮した手数料推定のために拡張されています。

詳細は [JSON-RPC API](/tools/rpc/json-rpc) リファレンスを参照してください。

## タイプ 3 トランザクション

Status Network はタイプ 3（`0x3`、いわゆる「blob」）トランザクションをサポートしていません。
このトランザクションタイプは、Ethereum メインネットでは主に L2 ロールアップが L1 にデータを安価に投稿する用途で使用されています。

## EIP-7702

Status Network はまだ EIP-7702 をサポートしていません。

