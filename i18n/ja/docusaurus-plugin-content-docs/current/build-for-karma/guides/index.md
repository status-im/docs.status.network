---
title: Karmaを使う
description: Status NetworkでKarmaベースのガスレスUXとレピュテーション対応機能を統合するためのエントリーポイント。
keywords: [Karma, gasless, reputation, integration, Status Network]
slug: /build-for-karma/guides
sidebar_position: 3
---

KarmaはStatus Networkでガスレストランザクション特権とレピュテーションを提供します。
このセクションでは、アプリにガスレス動作とティア対応のプロダクトロジックを統合する方法を説明します。

## はじめに

**トランザクションを処理しますか？**

- [ガスレス統合](/build-for-karma/guides/gasless-integration)から始めて、`linea_estimateGas`をガスレスとプレミアム手数料の判定における唯一の信頼できるソースとして使用してください。

**レピュテーションで機能を制限しますか？**

- [レピュテーション統合](/build-for-karma/guides/reputation-integration)に進み、オンチェーンでKarma残高とティアを読み取り、コントラクトのゲーティングを行い、ティア対応のフロントエンドを設計する方法を学びましょう。
