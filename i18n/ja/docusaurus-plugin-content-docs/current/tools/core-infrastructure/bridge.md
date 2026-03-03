---
title: Status Network ブリッジ
description: Sepolia と Status Network テストネット間のトークン転送のための Status Network ブリッジ使用ガイド。
keywords: [Status Network ブリッジ, トークンブリッジ, クロスチェーン転送, L1 L2 ブリッジ, Sepolia ブリッジ]
---

# Status Network テストネットブリッジ

Status Network テストネットブリッジを使用すると、Sepolia（レイヤー1）と Status Network テストネット（レイヤー2）間でトークンを転送しメッセージを受け渡しできます。ブリッジインターフェースは [bridge.status.network](https://bridge.status.network) で利用できます。

## ブリッジコントラクト

### レイヤー1（Sepolia）
- **トークンブリッジ**: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)

### レイヤー2（Status Network）
- **トークンブリッジ**: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)

## 機能

- **トークンブリッジング**: ネットワーク間で ERC-20 トークンを転送
- **ETH ブリッジング**: Sepolia と Status Network 間で ETH をブリッジ
- **トランザクション追跡**: ブリッジトランザクションのステータスを監視
- **ガス見積もり**: ブリッジ前に推定ガスコストを確認

## サポートされているトークン

サポートされているトークンとそのコントラクトアドレスの最新リストについては、[トークンリストリポジトリ](https://github.com/status-im/status-network-token-list)をご参照ください。

## ブリッジの使用

ブリッジの使用方法の詳細な手順や重要なセキュリティ上の考慮事項については、[ブリッジングガイド](/overview/general-info/bridge/bridging-testnet)をご参照ください。

## ブリッジトランザクションの監視

以下を使用してブリッジトランザクションを監視できます：
- L2 トランザクションには [Status Network エクスプローラー](https://sepoliascan.status.network)
- L1 トランザクションには [Sepolia Etherscan](https://sepolia.etherscan.io)

## サポート

ブリッジ使用中に問題が発生した場合：
- 一般的な解決策については[ブリッジングガイド](/overview/general-info/bridge/bridging-testnet)をチェック
- サポートについては [Telegram コミュニティ](https://t.me/statusl2)に参加
