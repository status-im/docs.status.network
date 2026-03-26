---
title: 'Status Networkのガスレストランザクション'
description: 'Status NetworkがRLN（Rate Limiting Nullifier）とKarmaティアを使用してスパム防止と公正な使用のためのガスレストランザクションを実装する方法を学びます。'
keywords:
  - 'Status Network'
  - 'ガスレストランザクション'
  - 'Linea'
  - 'RLN'
  - 'Rate Limiting Nullifier'
  - 'Karma'
  - 'ゼロ知識証明'
  - 'ZKP'
  - 'ソウルバウンドトークン'
  - 'ブロックチェーン'
  - 'レイヤー2'
  - 'L2'
  - 'スパム防止'
sidebar_label: '⛽ Gasless Transactions'
---

# Status Networkのガスレストランザクション

Status Networkは大規模なガスレストランザクションの導入を目指しています。このガスレスアプローチの主要コンポーネントは、VacのRate Limiting Nullifierで、従来のガス手数料を必要とせずにトランザクション速度制限を可能にします。この文書では、ガスレストランザクションを安全に有効にするために必要なアーキテクチャと統合要素について説明します。

ガスレストランザクションの実装コードは、[Status Networkモノレポ](https://github.com/status-im/status-network-monorepo?tab=readme-ov-file#architecture-components)で利用可能です。

ガスレスの運用レベルの実装についての詳細は、[Karma統合ガイド](/build-for-karma/guides)を参照してください。

## RLN

RLNは、違反が発生しない限りユーザーのプライバシーを損なうことなくスパムを防ぐように設計されたゼロ知識システムです。ZKPとShamirの秘密分散を通じて実行される暗号化速度制限で従来のガス手数料を置き換えます。

RLNの特徴：

- **ゼロ知識証明：** ユーザーは自分のアイデンティティを明かすことなくRLNグループメンバーシップを検証するZKPを生成します。グループメンバーシップは各ティアの最大ガスレストランザクション処理能力を示します。
- **Shamirの秘密分散とNullifier：** ユーザーはトランザクションの一意のnullifierを生成するために使用される秘密鍵を保持します。ユーザーがエポック（ブロックやタイムスタンプなど）内でトランザクション制限を超えると、秘密鍵が回復可能になり、露出します。
- **スパム検出：** 制限を超えるユーザーは効果的に自分の秘密を明かすことになり、拒否リストへの追加、将来の高いガス費用、または潜在的なトークンスラッシングなどのペナルティを受けます。

### RLNメンバーシップ管理

RLNは大規模なメンバーシップ証明を効率的に処理するためにスパースマークルツリーを使用します。ベンチマーク研究により、100万アカウントをサポートする高さ20のツリーが証明生成と検証に最適なパフォーマンスを提供することが判明しました。100万アカウントを超えるスケーラビリティのために、レジストリと共に複数のSMTを使用してユーザーを適切なツリーに誘導できます。

ProverにはKarmaが新しいアドレスに割り当てられるKarma Contractからのイベントを監視するRegistrar Serviceが含まれています。そのようなイベントを検出すると、Registrar ServiceはRLN認証情報（identitySecretHashとidentityCommitment）を生成して登録し、ユーザーをRLN Membership Contractにオンボーディングします。RLN Prover Serviceはトランザクションの証明を生成し、gRPCを介してSequencerのRLN Verifierにストリーミングされます。Verifierはこれらの証明をメモリに保存し、プロセスが非同期であるため、トランザクションハッシュに基づいて受信トランザクションと照合します。

```mermaid
graph TD
    A[ユーザーウォレット] -->|ホワイトリストアプリ経由の最初のL2アクション| B(Karma発行)
    A -->|SNへのブリッジ| B
    B -->|ソウルバウンドトークン| C{ティア割り当て}

    subgraph "ティア制限"
        T1[Entry]
        T2[Newbie]
        T3[Basic]
        T4[Active]
        T5[Regular]
        T6[Power User]
        T7[Pro User]
        T8[High-Throughput]
        T9[S-Tier]
        T10[Legendary]
    end

    C --> T1
    C --> T2
    C --> T3
    C --> T4
    C --> T5
    C --> T6
    C --> T7
    C --> T8
    C --> T9
    C --> T10

    %% RLNフロー
    A -->|ガスレスTx送信| J[RPCノード]
    J -->|Txデータ転送| K[Prover]
    subgraph "Proverサービス"
        K --> K1[Registrar Service]
        K --> K2[RLN Prover Service]
        K --> K3[Karma API Service]
        K1 -->|Karmaイベント監視| L[Karma Contract]
        K1 -->|ユーザーオンボーディング| M[RLN Membership Contract]
        K2 -->|RLN証明生成| N[gRPCストリーム]
        K3 -->|TxとKarmaティア追跡| O[ストレージ]
    end
    J -->|Tx送信| P[Sequencer]
    N -->|RLN証明ストリーム| P

    %% Sequencerセクション
    subgraph "Sequencer操作"
        P --> Q[RLN Verifierプラグイン]
        Q -->|gRPCストリーム購読| N
        Q -->|メモリに証明保存| R{Txハッシュマッチング}
        R -->|RLN証明検証| S{クォータチェック}
        S -->|制限内| T[Mempoolに追加]
        S -->|制限超過| U[拒否リスト]
        U -->|アドレスフラグ| V[プレミアムガス必要]
        Q -->|スパム検出| W[RLNステークスラッシュ]
    end

    %% ガス推定フロー
    A -->|ガス推定リクエスト| X[修正されたlinea_estimateGas RPC]
    X -->|クエリ| U
    U -->|アドレスリスト済み| Y[プレミアムガス倍率適用]
    Y -->|プレミアムガス支払い| Z[拒否リストから削除]
    Z -->|Karma獲得| B
    U -->|アドレス未リスト| AA[標準ガス推定]

    %% スタイリング
    classDef wallet fill:#FFD700,stroke:#DAA520,color:#333
    classDef karma fill:#98FB98,stroke:#2E8B57,color:#333
    classDef tier fill:#87CEFA,stroke:#4682B4,color:#333
    classDef tierNode fill:#ADD8E6,stroke:#4682B4,color:#333
    classDef rln fill:#FFB6C1,stroke:#DB7093,color:#333
    classDef sequencer fill:#DDA0DD,stroke:#BA55D3,color:#333
    classDef gas fill:#FFA07A,stroke:#FF4500,color:#333

    class A wallet
    class B,L karma
    class C tier
    class T1,T2,T3,T4,T5,T6,T7,T8,T9,T10 tierNode
    class J,K,K1,K2,K3,M,N,O rln
    class P,Q,R,S,T,U,V,W sequencer
    class X,Y,Z,AA gas
```

## システムコンポーネント

### Prover

Proverは3つのサービスで構成されるシステムです：

1. **Registrar Service**: Karma ContractからKarma割り当てイベントを監視します。新しいアドレスがKarmaを受け取ると、RLN認証情報を生成して登録し、ユーザーをRLN Membership Contractにオンボーディングします。
2. **RLN Prover Service**: Zerokitライブラリを使用してトランザクションのRLN証明を生成します。証明はgRPCストリームを介してSequencerのRLN Verifierに直接ストリーミングされます。
3. **Karma API Service**: エポック内でユーザーが行ったトランザクションを追跡し、Karmaティアステータスを維持します。効率的なクエリとティア管理のために内部データベースにトランザクションデータを保存します。

これらのサービスは安全な認証情報管理、証明生成、トランザクション追跡を保証し、gRPCがSequencerとの低遅延通信を可能にします。

### RLN Verifier

RLN Verifierはsequencer内のbesuプラグインで、Java Native Interfaceを介してRLNのZerokit Rustライブラリを活用します。
Verifierは：

- RLN Prover ServiceからgRPCストリームを購読して生成されるRLN証明を受信します。
- 証明をメモリに保存し、トランザクション（RPCノード経由）と証明（gRPC経由）の非同期到着を考慮して、トランザクションハッシュに基づいて受信トランザクションと照合します。
- 証明の真正性、nullifierの一意性、ユーザートランザクションクォータを検証します。

検証に失敗したトランザクションは拒否され、ユーザーは一時的に拒否リストに追加される場合があります。

### 拒否リスト

拒否リストはクォータを超過したりスパムに関与したりするユーザーを一時的に制限します：

- エントリは処理能力ティアに基づいて設定された期間（時間や日など）後に期限切れになります
- ユーザーはプレミアムガス手数料を支払うことで制限を回避できます
- プレミアム手数料を支払うとユーザーがリストから削除され、追加のKarmaを獲得します

## `linea_estimateGas` RPC修正

Status Networkは、ベースのLinea `linea_estimateGas`をKarma対応の動作で拡張しており、返される**手数料フィールド**は送信者アドレス`from`のKarma残高に依存する場合があります。
`gasLimit`の計算は、ベースのLinea実装（内部的に標準の`eth_estimateGas`ロジックを使用）から変更されていません。

具体的には、Status Networkの`linea_estimateGas`は：

- **拒否リストプレミアムの適用**: 送信者が拒否リストに掲載されている場合、ノードは通常の手数料見積もりを計算し、**手数料フィールド**にプレミアム倍率を適用します。
- **対象ユーザーへのガスレス見積もりの返却**: 送信者に利用可能なKarmaクォータがある場合、メソッドはゼロの`baseFeePerGas`と`priorityFeePerGas`を返します。

上記のロジックは、[Status Networkモノレポのこのセクション](https://github.com/status-im/status-network-monorepo/blob/v1.0.1/besu-plugins/linea-sequencer/sequencer/src/main/java/net/consensys/linea/rpc/methods/LineaEstimateGas.java#L218)でオープンソース化されている修正版`LineaEstimateGas`実装に含まれています。

Karma対応の手数料見積もり動作と`linea_estimateGas`の詳細については、[JSON-RPC API](/tools/rpc/json-rpc)を参照してください。
