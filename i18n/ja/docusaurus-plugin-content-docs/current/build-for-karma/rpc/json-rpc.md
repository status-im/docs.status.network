---
title: JSON-RPC API
description: ビルダー向けStatus Network JSON-RPC APIリファレンス。
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

Status NetworkはLinea zkEVMをベースとしており、**ほとんどのJSON-RPCメソッドは標準的なEVMノードと同じ動作をします**。

サポートされているメソッドとその標準セマンティクスの一覧については、以下の公式ドキュメントを参照してください:

- **[イーサリアムJSON-RPC API](https://ethereum.github.io/execution-apis/api-documented/)** — 標準イーサリアムRPCメソッド
- **[Linea JSON-RPC APIリファレンス](https://docs.linea.build/api/reference)** — `linea_estimateGas`を含むLinea固有のメソッド

## Status Networkの拡張

Status Networkは標準のLinea JSON-RPCにKarma対応の手数料推定を追加しています:

### `linea_estimateGas`

Lineaでは、[`linea_estimateGas`](https://docs.linea.build/api/reference/linea-estimategas)がガス推定の推奨メソッドであり、1回の呼び出しで`gasLimit`、`baseFeePerGas`、`priorityFeePerGas`を返します。

Status Networkは`linea_estimateGas`にKarma対応の動作を追加しています:

- **ガスレスユーザー**: 利用可能なKarmaクォータを持つ対象ユーザーに対して、`baseFeePerGas`と`priorityFeePerGas`をゼロで返します
- **拒否リストユーザー**: 拒否リストに載っているユーザーの手数料フィールドにプレミアム乗数を適用します

### Status Network RPCの違い

ベースのLineaでも、`linea_estimateGas`はすでに推奨メソッドです。L1検証コストとデータ圧縮を考慮した手数料フィールドを返すためで、これは`eth_estimateGas`やその他の`eth_`名前空間の呼び出しでは提供されない情報です。
Status Networkのフォークは`linea_estimateGas`をさらに拡張してKarma対応にしており、その他のJSON-RPCメソッドはすべて標準セマンティクスを維持しています。

つまり、`eth_`メソッドを使用した従来の手数料フロー（例: `eth_gasPrice`、`eth_maxPriorityFeePerGas`、`eth_feeHistory`）は**不正確な**手数料提案につながる可能性があります。LineaのL2固有の価格設定とStatus NetworkのKarma調整の両方が欠落するためです。

Status Networkでは、`linea_estimateGas`を`gasLimit`、`baseFeePerGas`、`priorityFeePerGas`の唯一の信頼できるソースとして使用してください。

ベースLineaの動作については、[Lineaのガス手数料ガイド](https://docs.linea.build/network/how-to/gas-fees)と[Lineaの`linea_estimateGas`リファレンス](https://docs.linea.build/api/reference/linea-estimategas)を参照してください。

:::info
コード例、移行手順、よくある落とし穴を含む詳細な統合ガイドは、[Karma の使い方](/build-for-karma/guides)ガイドを参照してください。
:::

### その他のリソース

- [Lineaのガス手数料ガイド](https://docs.linea.build/network/how-to/gas-fees)
- [Lineaの`linea_estimateGas`リファレンス](https://docs.linea.build/api/reference/linea-estimategas)
- [カルミックトークノミクス](/overview/tokenomics/karmic-tokenomics) — Karmaがガス手数料に与える影響
- [ガスレストランザクション](/overview/general-info/gasless-transactions) — RLNベースのガスレスシステムの技術的詳細
