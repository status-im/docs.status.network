---
title: 事前預入
description: SNT、LINEA、ETH向けのAragonベースのボールトと、ステーブルコイン預入のためのGeneric Protocol統合を含む、Status Networkの事前預入ボールトアーキテクチャの技術概要。
keywords: [Status Network, 事前預入, ボールト, Aragon, Generic Protocol, Karma, GUSD, ステーブルコイン, 利回り, ETH, SNT, LINEA, Lido, Morpho]
---

Status Networkは、メインネットローンチに先立ち、流動性の確保と初期Karma配布のための事前預入キャンペーンを実施しています。2つの異なるボールトシステムがキャンペーンを支えています：

| 資産                     | ボールト提供者   | 受領トークン | ネットワーク     |
|--------------------------|------------------|--------------|------------------|
| SNT, LINEA, ETH          | Aragon           | あり         | Ethereum / Linea |
| USDT, USDC, USDS (→GUSD) | Generic Protocol | なし         | Ethereum         |

このページでは、各システムの技術アーキテクチャについて説明します。

## Aragon ボールト (SNT · LINEA · ETH)

### 概要

SNT、LINEA、ETHボールトは、[Aragon](https://aragon.org/)がStatus Network専用に開発したスマートコントラクトです。ソースコードは公開されています：

- リポジトリ: [aragon/status-predeposit-vaults](https://github.com/aragon/status-predeposit-vaults)
- コアコントラクト: [`PreDepositVault.sol`](https://github.com/aragon/status-predeposit-vaults/blob/development/src/PreDepositVault.sol)

各ボールトは[ERC-4626インターフェース](https://ethereum.org/developers/docs/standards/tokens/erc-4626)を実装しており：

1. 単一の基礎資産（SNT、LINEA、またはWETH）の預入を受け付けます。
2. 預入時に、預入者の按分請求権を表す**ボールトシェアトークン**（svSNT、svLINEA、またはsvWETH）を発行します。
3. メインネットローンチまで預入資産を保管し、その後管理者がStatus Network L2にブリッジします。

### 利回り戦略 (ETH)

預入されたETHは[Lido](https://lido.fi/)を通じてステーキングされ、ステーキング利回りを獲得します。生成された利回りの一部は、ローンチ時にStatus Networkのネイティブファンディングプールに充当されます。

### デプロイ済みコントラクト

アドレスとネットワークの完全なリストは、[事前預入ボールトコントラクト](/home/general-info/contract-addresses/pre-deposit)を参照してください。

## Generic Protocol ボールト (GUSD)

GUSDは、USDT、USDC、USDSで完全に担保された利回り生成メタステーブルコインで、[Generic Protocol](https://docs.generic.money/)によって構築されています。GUSDインフラストラクチャはGeneric Protocolが維持管理しており、Status Networkは**DepositorHelper**コントラクトを通じて統合しています。

### 利回り戦略 (ステーブルコイン)

GUSDボールトは、[Steakhouse Financial](https://steakhouse.financial/)と[Morpho](https://morpho.org/)を通じた多層利回り戦略を実装しています：

1. 預入されたステーブルコインは**Generic Protocolの資産別ボールト**にルーティングされます（例：[USDC Vault](https://etherscan.io/address/0x4825eFF24F9B7b76EEAFA2ecc6A1D5dFCb3c1c3f)）。
2. ボールトは資産を**Steakhouse Financial MetaMorphoボールト**に割り当てます（例：[steakUSDC](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)）。
3. Steakhouseボールトは[**Morphoレンディングマーケット**](https://etherscan.io/address/0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb)に資産を供給し、レンディング利回りを獲得します。

生成された利回りの一部は、メインネットローンチ時にStatus Networkのネイティブファンディングプールに充当されます。

::::note
GUSDボールトは受領トークンを発行**しません**。預入記録はGeneric Protocolのコントラクトに記録されます。[Hub](https://hub.status.network/pre-deposits)でウォレットを接続するか、オンチェーンで直接確認できます。
::::

### DepositorHelper コントラクト

Status Networkの事前預入は、DepositorHelperを通じてGeneric Protocolと連携します：
[`0x79B4cDb14A31E8B0e21C0120C409Ac14Af35f919`](https://etherscan.io/address/0x79B4cDb14A31E8B0e21C0120C409Ac14Af35f919)

### 預入フロー (GUSD)

ユーザーがUSDC、USDT、またはUSDSを預入すると、以下のオンチェーン操作が実行されます：

1. DepositorHelperがステーブルコインを使用できるように**承認**します。
2. DepositorHelperで資産と金額を指定して**[`depositAndPredeposit`](https://docs.generic.money/code-ref/protocol/periphery/GenericDepositor.sol/contract.GenericDepositor#depositandpredeposit)を呼び出し**ます。
3. ステーブルコインがDepositorHelperに転送されます。
4. 預入者の基礎ステーブルコインに対する請求権を表す[**GenericUnit**](https://etherscan.io/address/0x8c307baDbd78bEa5A1cCF9677caa58e7A2172502)シェアがDepositorHelperに発行されます。
5. DepositorHelperがステーブルコインを対応する**Generic Protocol資産ボールト**に預入します（[USDC Vault](https://etherscan.io/address/0x4825eFF24F9B7b76EEAFA2ecc6A1D5dFCb3c1c3f)、[USDT Vault](https://etherscan.io/address/0xB8280955aE7b5207AF4CDbdCd775135Bd38157fE)、または[USDS Vault](https://etherscan.io/address/0x6133dA4Cd25773Ebd38542a8aCEF8F94cA89892A)）。
6. 資産ボールトは**Steakhouse Financial MetaMorphoボールト**に割り当て、**Morphoレンディングマーケット**に資産を供給します。
7. **Bridge Coordinator L1**が`Predeposited`イベントを発行し、Status Networkメインネット向けの事前預入を記録します。
8. メインネットローンチ時、預入に基づいてStatus NetworkでGUSDとKarma、SNT & LINEAインセンティブ、Generic Protocolポイント、および潜在的なネイティブアプリポイントを受け取れます。

Generic Protocolの構造（GUSDトークノミクス、ブリッジングインフラストラクチャなど）の完全な概要は、[Generic Protocolドキュメント](https://docs.generic.money/)を参照してください。

## インセンティブとKarma

事前預入者は以下を獲得します：

- **Karma**：譲渡不可のガバナンストークン；ガスレススループットと投票権を付与（詳細は[Karmicトークノミクス](/home/tokenomics/karmic-tokenomics)を参照）。
- **流動性インセンティブ**：ボールト全体に1,500万SNTと2,000万LINEAトークンを配布。
- **ステーブルコイン預入者向けGeneric Protocolポイント**：Generic ProtocolがStatus Networkメインネットにローンチした際に使用可能なポイント。
- **ネイティブアプリポイント**：ネイティブアプリがトークノミクスを公開次第確定予定。

配分は以下に依存します：

- ボールト内の期間
- ボールトTVL

メインネットローンチ時の初期Karma配布：

| ボールト    | 初期Karma割合 |
|-------------|---------------|
| SNT         | 25%           |
| LINEA       | 10%           |
| ETH         | 20%           |
| GUSD        | 20%           |

ネイティブアプリはメインネットローンチ時に初期Karmaの25%を受け取ります。

## セキュリティ

- **Aragonボールト**：監査済み；レポートは[リポジトリの`audit/`フォルダ](https://github.com/aragon/status-predeposit-vaults/tree/development/audit)で確認可能。
- **Generic Protocol**：監査済み；セキュリティ開示とレポートの詳細は[ドキュメント](https://docs.generic.money/resources/audits)を参照。

## リスクと考慮事項

ボールトへの預入には、スマートコントラクトリスク、ブリッジングリスク、市場リスク、および基礎となる利回り戦略に関連するプロトコルリスクが伴います。キャンペーン期間中ロックできる金額のみを預入してください。

参加する前に、[Status Network事前預入免責事項](https://status.network/legal/status-network-pre-deposit-disclaimer)をお読みください。

このドキュメントは情報提供のみを目的としており、金融アドバイスを構成するものではありません。

## 関連資料

- [事前預入ボールトコントラクト](/home/general-info/contract-addresses/pre-deposit) — デプロイ済みアドレス情報
- [Karmicトークノミクス](/home/tokenomics/karmic-tokenomics) — Karmaの獲得方法と使用方法
- [経済モデル](/home/tokenomics/economic-model) — Status Networkの持続可能な収益モデル
- [Aragonドキュメント](https://docs.aragon.org/)
- [Generic Protocolドキュメント](https://docs.generic.money/)
