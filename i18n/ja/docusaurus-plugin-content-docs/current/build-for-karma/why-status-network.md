---
title: なぜStatus Networkで構築するのか
description: Status Networkで構築する理由 — ガスレス取引、Karmaレピュテーション、持続可能な公共資金、他L2との比較。
keywords: [Status Network, why build, L2 comparison, gasless, Karma, public funding, developer advantages, Linea zkEVM]
sidebar_position: 2
---

選択できるL2は数多くあります。Status Networkが注目に値する理由をご紹介します。

<div className="comparison-grid">
  <a className="comparison-row-link" href="#sustainable-public-funding">
    <div className="comparison-row">
      <div className="comparison-label">開発者資金</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>アプリのトラクションに応じてスケールする継続的な収益プール</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">一般的なL2</div>
          <p>数ヶ月ごとに再申請する一度きりのグラント</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#gasless-by-default">
    <div className="comparison-row">
      <div className="comparison-label">ユーザーのガス</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>Karmaで無料 — ペイマスター、リレイヤー、アカウント抽象化のセットアップ不要</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">一般的なL2</div>
          <p>ユーザーがガスを支払うか、開発者がペイマスター＋リレイヤーインフラを運用</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#built-in-reputation-with-karma">
    <div className="comparison-row">
      <div className="comparison-label">ユーザーレピュテーション</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>Karmaによるネットワーク全体のレピュテーションシステム — スパム耐性、トラストシグナル、機能ゲーティング</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">一般的なL2</div>
          <p>なし — 自前で構築するかサードパーティソリューションを統合</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#privacy-focused-civil-goods">
    <div className="comparison-row">
      <div className="comparison-label">プライバシー</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>ネイティブZKベースのツール — Rate Limiting Nullifiersなど</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">一般的なL2</div>
          <p>サードパーティ統合</p>
        </div>
      </div>
    </div>
  </a>
</div>

## 持続可能な公共資金

Status Networkは一度きりのグラントや財団の資金に依存しません。代わりに、以下のソースから継続的に供給される公共資金プールを有しています：

- **ネイティブ利回り** — ブリッジされた利回り付き資産（当初はETHとステーブルコイン）から
- **DEX手数料** — ネイティブ分散型取引所から
- **プレミアムガス手数料** — 拒否リスト入りユーザーから
- **将来のネイティブアプリ手数料** — レンディング、NFT、ローンチパッドなど

詳細 → [経済モデル](/overview/tokenomics/economic-model)

Karmaホルダーがこの公共資金プールをアプリとビルダーにどう配分するかを投票します。アプリがネットワークに貢献するほど（アクティビティと取引量を生み出すほど）、あなたとユーザーが獲得するKarmaが増え、将来の配分に対する影響力も大きくなります。

**ビルダーにとっての意味：**

- 数ヶ月ごとに再申請する一度きりのグラントではなく、継続的な収益ストリーム
- 資金はアプリのトラクションに応じてスケール — ユーザーが増えればKarmaも増え、インセンティブも増加
- コミュニティガバナンスによる配分、財団の門番なし

詳細 → [公共資金](/overview/tokenomics/public-funding)

## デフォルトでガスレス

多くのチェーンでは「ガスレス」はペイマスターのセットアップ、リレイヤーの運用、アカウント抽象化SDKの統合を意味します。Status Networkでは、ガスレスがデフォルトの動作です。

正のKarma残高を持つすべてのアドレスは無料取引枠を取得します。ペイマスター不要。リレイヤー不要。特別なウォレット設定不要。対象ユーザーにはアプリがガス料金なしでそのまま動作します。

**ビルダーにとっての意味：**

- ガスによるUXの摩擦なし。オンボーディングファネルで「ガス用にETHをブリッジして」のステップでユーザーを失わない
- ERC-4337、メタトランザクション、ガスリレーパターンの統合が不要
- ユーザーに代わってガスをスポンサーするインフラコストが不要

ガスレスシステムは[Rate Limiting Nullifiers（RLN）](/overview/general-info/gasless-transactions/#rln)（ゼロ知識スパム防止メカニズム）によりシーケンサーレベルで強制されています。

## Karmaによる組み込みレピュテーション

Karmaは、ステーキング、ブリッジ、流動性提供、アプリ利用、プレミアムガス支払など、本物のネットワーク参加を通じて全ユーザーが獲得するソウルバウンド（譲渡不可）トークンです。購入や譲渡はできません。

**ビルダーにとっての意味：**

- **トラストシグナル**：高Karmaユーザーは検証済みのアクティブ参加者であり、エアドロップ農家やシビルではない
- **機能ゲーティング**：ビルダーはプレミアム機能、優先アクセス、優遇レートなどをユーザーのKarmaティアに基づいてゲートできる
- **スパム耐性**：ネットワーク自体がRLNメカニズムでスパムをゲートしており、Karmaティアがガスレス取引枠を直接制御するため、高Karmaユーザーは本質的にスパムしにくい
- **コールドスタート問題なし**：アプリはエコシステム全体で構築されたレピュテーションの恩恵を受ける

詳細 → [Karmic Tokenomics](/overview/tokenomics/karmic-tokenomics)

## プライバシー重視のシビルグッズ

Status Networkは[Institute of Free Technology（IFT）](https://free.technology)の技術で構築されています。特に、ガスレス取引システムは[Vac](https://vac.dev)（IFTの研究部門）が開発したゼロ知識スパム防止メカニズムである[RLN（Rate Limiting Nullifiers）](https://vac.dev/rln)を使用しています。

私たちは、デジタル時代の市民的自由を守る公共財を構築するというIFTの技術ビジョンに沿っています。Status Networkはガスレス性を活かしたプライバシー重視モジュールを追加していきます。

<!-- 詳細 → [Status Networkとプライバシー](/overview/general-info/privacy) -->

## 完全なEVM等価性

Status Networkは[Linea zkEVM](https://linea.build)スタック上に構築されています。つまりビルダーは以下が可能です：

- 既存のSolidityコントラクトを修正なしでデプロイ
- Hardhat、Foundry、ethers.js、viemなどの標準イーサリアムツールを使用
- 標準JSON-RPCメソッドを使用（ガス料金関連の一部メソッドを除く。詳細は[JSON-RPC API](/tools/rpc/json-rpc)を参照）
- Lineaのロールアップアーキテクチャから継承したゼロ知識証明ベースのセキュリティ

カスタムVMなし。非標準オペコードなし。コントラクトやバックエンドの書き直しなし。
