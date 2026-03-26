---
id: 'deploying-contracts-index'
title: '最初のコントラクトをデプロイする'
description: 'Status Networkでスマートコントラクトを稼働させるためのデプロイツールを選択してください。Hardhat、Foundry、Remix、Scaffold-ETH 2のガイドがあります。'
keywords:
  - 'スマートコントラクトデプロイ'
  - 'Status Network'
  - 'Hardhat'
  - 'Foundry'
  - 'Remix'
  - 'Scaffold-ETH 2'
  - 'ブロックチェーンデプロイ'
  - 'EVM'
slug: '/build-for-karma/deploying-contracts'
sidebar_position: 1
---

# 最初のコントラクトをデプロイする

Status Networkは完全なEVM互換なので、標準的なイーサリアムツールチェーンを使ってコントラクトをデプロイできます。ワークフローに合ったツールを選び、ステップバイステップのガイドに従ってテストネットに最初のコントラクトをデプロイしましょう。

:::tip 開始前に
[ウォレットにStatus Networkを追加](/overview/general-info/add-status-network)し、[テストネットETH](/tools/core-infrastructure/testnet-faucets)を入手しておいてください。
:::

## デプロイツールを選ぶ

<div className="deploy-card-grid">

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-hardhat">
  <div className="deploy-card-icon">🎩</div>
  <div className="deploy-card-content">
    <h3>Hardhat</h3>
    <p>Solidityコントラクトのコンパイル、テスト、デプロイのための業界標準の開発環境。Hardhat IgnitionとTypeScriptサポート付き。</p>
    <span className="deploy-card-tag">TypeScript · テスト · Ignition</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-foundry">
  <div className="deploy-card-icon">⚒️</div>
  <div className="deploy-card-content">
    <h3>Foundry</h3>
    <p>Rustベースの高速スマートコントラクト開発ツールキット。Solidityでテストを書き、Castでコントラクトとやり取り。</p>
    <span className="deploy-card-tag">Solidityテスト · Cast · 高速ビルド</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-remix">
  <div className="deploy-card-icon">🎛️</div>
  <div className="deploy-card-content">
    <h3>Remix IDE</h3>
    <p>ゼロセットアップのブラウザベースIDE。クイックプロトタイピング、学習、ローカルツールなしでのシンプルなコントラクトのデプロイに最適。</p>
    <span className="deploy-card-tag">ブラウザベース · セットアップ不要 · 初心者向け</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-se2">
  <div className="deploy-card-icon">🏗️</div>
  <div className="deploy-card-content">
    <h3>Scaffold-ETH 2</h3>
    <p>Status Network拡張がプリ設定されたフルスタックスターターキット。NextJSフロントエンド、コントラクトのホットリロード、HardhatとFoundryの両方に対応。</p>
    <span className="deploy-card-tag">フルスタック · NextJS · ホットリロード</span>
  </div>
</a>

</div>

## どれを選べばいいか迷っている場合

| ツール | 最適な用途 | 必要なセットアップ |
|---|---|---|
| **Hardhat** | 複雑なテストとデプロイパイプラインを持つ本番プロジェクト | Node.js + npm |
| **Foundry** | Solidityネイティブのテストと高速コンパイルを好む開発者 | Rustツールチェーン |
| **Remix** | クイック実験、学習、シンプルな単発デプロイ | 不要（ブラウザ） |
| **Scaffold-ETH 2** | 初日からフロントエンドが必要なフルスタックdApp | Node.js + npm |

## デプロイ後

コントラクトが稼働したら、次のステップは以下の通りです：

- [ガスレス取引の統合](/build-for-karma/guides/gasless-integration) — Karmaを通じてユーザーがガス代を支払わずに済む
- [レピュテーション統合ガイドを読む](/build-for-karma/guides/reputation-integration) — Karmaを使ったレピュテーション対応機能の構築
