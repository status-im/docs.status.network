---
title: Status NetworkでScaffold-ETH 2を使用する
description: 事前設定されたScaffold-ETH 2拡張機能を使用してStatus Networkでスマートコントラクトをデプロイするためのクイックスタートガイド。
keywords: [Scaffold-ETH 2, スマートコントラクトデプロイ, Status Network開発, Foundry, Hardhat, NextJS, web3開発]
---

# Scaffold-ETH 2を使用したスマートコントラクトのデプロイ

[Status Network Scaffold-ETH 2拡張機能](https://github.com/status-im/status-network-scaffold-extension)は、FoundryとHardhatの両方のサポート、およびNextJSフロントエンドと共にStatus Networkでスマートコントラクトをデプロイするための事前設定されたセットアップを提供します。

## 前提条件

- **Yarn**: JavaScriptプロジェクト用のパッケージマネージャー
- **Foundry** (オプション): Foundryワークフローを選択する場合
- **Ethereumウォレット** (オプション): テスト用のEVMウォレットの秘密鍵ですが、持っていなくても問題ありません

> **注意**: Status Networkはガスレス取引をサポートしているため、テストネットETHはオプションです。それでもテストネットETHが必要な場合は、[Faucet](/tools/testnet-faucets)から取得してください。

## クイックスタート

1. **拡張機能をインストール:**
   ```bash
   npx create-eth@latest -e status-im/status-network-scaffold-extension
   ```

2. **アカウントを設定:**
   ```bash
   yarn generate
   ```

3. **Status Networkにデプロイ:**
   ```bash
   yarn deploy --network statusSepolia
   ```

4. **コントラクトを検証:**
   ```bash
   # Hardhat
   yarn hardhat:hardhat-verify --network statusSepolia <YourDeployedContractAddress>
   # Foundry
   yarn status:verify --network statusSepolia
   ```

5. **フロントエンドを起動:**
   ```bash
   yarn start
   ```

## 重要なポイント

- **ローカルチェーンは不要**: テストネットに直接デプロイ
- **デプロイと検証には常に `--network statusSepolia` を使用**
- **Blockscout検証**: Status NetworkはEtherscanではなくBlockscoutを使用
- **事前設定されたフロントエンド**: NextJSは自動的にStatus Networkに接続

## サポート

詳細な設定オプション、トラブルシューティング、高度な使用方法については：
- 包括的なドキュメントについては[拡張機能README](https://github.com/status-im/status-network-scaffold-extension)を確認
- [Telegramコミュニティ](https://t.me/statusl2)に参加してサポートを求める
- [ネットワーク詳細](/general-info/network-details)を表示
