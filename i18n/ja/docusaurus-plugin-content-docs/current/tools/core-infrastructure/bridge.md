---
title: 'Status Network ブリッジ'
description: 'Hoodi と Status Network Hoodi テストネット間のトークン転送のための Status Network ブリッジ使用ガイド。'
keywords:
  - 'Status Network ブリッジ'
  - 'トークンブリッジ'
  - 'クロスチェーン転送'
  - 'L1 L2 ブリッジ'
  - 'Hoodi ブリッジ'
slug: '/tools/core-infrastructure/bridge'
---

# Status Network Hoodi テストネットブリッジ

Status Network Hoodi テストネットブリッジを使用すると、
Hoodi（レイヤー1）と Status Network Hoodi テストネット（レイヤー2）間で
トークンを転送しメッセージを受け渡しできます。
ブリッジインターフェースは
[bridge.status.network](https://bridge.status.network) で利用できます。

:::warning Hoodi テストネット終了 — 2026年5月15日
Status Network は Linea スタックへ統合されます。Hoodi テストネットのブリッジは **2026年5月15日** に停止します。停止前に L2 のテストネット ETH を L1 へ戻してください。停止後に残った残高は復元できません。[公式発表を読む](https://status.network/blog/status-network-merges-with-linea-scaling-gasless-privacy-upstream)。
:::

## ブリッジコントラクト

### レイヤー1（Hoodi）

- **LineaRollup (proxy)**: [`0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5`](https://hoodi.etherscan.io/address/0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5)
- **トークンブリッジ**: [`0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6`](https://hoodi.etherscan.io/address/0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6)

### レイヤー2（Status Network）

- **L2MessageService (proxy)**: [`0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D`](https://hoodiscan.status.network/address/0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D)
- **トークンブリッジ**: [`0x48845B2B3cAb9773a5BBA2519f64003316BA6678`](https://hoodiscan.status.network/address/0x48845B2B3cAb9773a5BBA2519f64003316BA6678)

## 機能

- **トークンブリッジング**: ネットワーク間で ERC-20 トークンを転送
- **ETH ブリッジング**: Hoodi と Status Network 間で ETH をブリッジ
- **トランザクション追跡**: ブリッジトランザクションのステータスを監視
- **ガス見積もり**: ブリッジ前に推定ガスコストを確認

## サポートされているトークン

サポートされているトークンとそのコントラクトアドレスの最新リストについては、[トークンリストリポジトリ](https://github.com/status-im/status-network-token-list)をご参照ください。

## ブリッジの使用

ブリッジの使用方法の詳細な手順や重要なセキュリティ上の考慮事項については、[ブリッジングガイド](/overview/general-info/bridge/bridging-testnet)をご参照ください。

## ブリッジトランザクションの監視

以下を使用してブリッジトランザクションを監視できます：

- L2 トランザクションには [Status Network エクスプローラー](https://hoodiscan.status.network)
- L1 トランザクションには [Hoodi Etherscan](https://hoodi.etherscan.io)

## サポート

ブリッジ使用中に問題が発生した場合：

- 一般的な解決策については[ブリッジングガイド](/overview/general-info/bridge/bridging-testnet)をチェック
- サポートについては [Telegram コミュニティ](https://t.me/statusl2)に参加
