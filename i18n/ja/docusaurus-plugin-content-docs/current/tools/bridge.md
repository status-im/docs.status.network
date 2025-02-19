# Status Networkテストネットブリッジ

Status Networkテストネットブリッジを使用すると、Sepolia（レイヤー1）とStatus Networkテストネット（レイヤー2）間でトークンを転送できます。ブリッジインターフェースは[bridge.status.network](https://bridge.status.network)で利用できます。

## 概要

ブリッジは以下を可能にする重要なインフラストラクチャコンポーネントとして機能します：
- SepoliaからStatus Networkテストネットへのトークン転送
- Status NetworkテストネットからSepoliaへのトークン引き出し
- L1とL2間のメッセージ受け渡し

## ブリッジコントラクト

### レイヤー1（Sepolia）
- **トークンブリッジ**: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)

### レイヤー2（Status Network）
- **トークンブリッジ**: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)

## 機能

- **トークンブリッジング**: ネットワーク間でERC-20トークンを転送
- **ETHブリッジング**: SepoliaとStatus Network間でETHをブリッジ
- **トランザクション追跡**: ブリッジトランザクションのステータスを監視
- **ガス見積もり**: ブリッジ前に推定ガスコストを確認

## サポートされているトークン

サポートされているトークンとそのコントラクトアドレスの最新リストについては、[トークンリストリポジトリ](https://github.com/status-im/status-network-token-list)をご参照ください。

## ブリッジの使用

ブリッジの使用方法の詳細な手順や重要なセキュリティ上の考慮事項については、[ブリッジングガイド](../general-info/bridge/bridging-testnet.md)をご参照ください。

## ブリッジトランザクションの監視

以下を使用してブリッジトランザクションを監視できます：
- L2トランザクションには[Status Networkエクスプローラー](https://sepoliascan.status.network)
- L1トランザクションには[Sepolia Etherscan](https://sepolia.etherscan.io)

## サポート

ブリッジ使用中に問題が発生した場合：
- 一般的な解決策については[ブリッジングガイド](../general-info/bridge/bridging-testnet.md)をチェック
- サポートについては[Telegramコミュニティ](https://t.me/statusl2)に参加
