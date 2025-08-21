---
sidebar_label: '⛽ ガスレストランザクション'
title: Status Networkのガスレストランザクション
description: Status NetworkがRLN（Rate Limiting Nullifier）とKarmaティアを使用してスパム防止と公正な使用のためのガスレストランザクションを実装する方法を学びます。
keywords: [Status Network, ガスレストランザクション, Linea, RLN, Rate Limiting Nullifier, Karma, ゼロ知識証明, ZKP, ソウルバウンドトークン, ブロックチェーン, レイヤー2, L2, スパム防止]
---

# Status Networkのガスレストランザクション

Status Networkは大規模なガスレストランザクションの導入を目指しています。このガスレスアプローチの主要コンポーネントは、VacのRate Limiting Nullifierで、従来のガス手数料を必要とせずにトランザクション速度制限を可能にします。この文書では、ガスレストランザクションを安全に有効にするために必要なアーキテクチャと統合要素について説明します。

これらのガスレストランザクションの実装コードは、[Status Networkモノレポ](https://github.com/status-im/status-network-monorepo)で利用可能です。

### 1.2 RLN

RLNは、違反が発生しない限りユーザーのプライバシーを損なうことなくスパムを防ぐように設計されたゼロ知識システムです。ZKPとShamirの秘密分散を通じて実行される暗号化速度制限で従来のガス手数料を置き換えます。

RLNの特徴：

- **ゼロ知識証明：** ユーザーは自分のアイデンティティを明かすことなくRLNグループメンバーシップを検証するZKPを生成します。グループメンバーシップは各ティアの最大ガスレストランザクション処理能力を示します。
- **Shamirの秘密分散とNullifier：** ユーザーはトランザクションの一意のnullifierを生成するために使用される秘密鍵を保持します。ユーザーがエポック（ブロックやタイムスタンプなど）内でトランザクション制限を超えると、秘密鍵が回復可能になり、露出します。
- **スパム検出：** 制限を超えるユーザーは効果的に自分の秘密を明かすことになり、拒否リストへの追加、将来の高いガス費用、または潜在的なトークンスラッシングなどのペナルティを受けます。

### 1.3. RLNメンバーシップ管理

RLNは大規模なメンバーシップ証明を効率的に処理するためにスパースマークルツリーを使用します。ベンチマーク研究により、100万アカウントをサポートする高さ20のツリーが証明生成と検証に最適なパフォーマンスを提供することが判明しました。100万アカウントを超えるスケーラビリティのために、レジストリと共に複数のSMTを使用してユーザーを適切なツリーに誘導できます。

ProverにはKarmaが新しいアドレスに割り当てられるKarma Contractからのイベントを監視するRegistrar Serviceが含まれています。そのようなイベントを検出すると、Registrar ServiceはRLN認証情報（identitySecretHashとidentityCommitment）を生成して登録し、ユーザーをRLN Membership Contractにオンボーディングします。RLN Prover Serviceはトランザクションの証明を生成し、gRPCを介してSequencerのRLN Verifierにストリーミングされます。Verifierはこれらの証明をメモリに保存し、プロセスが非同期であるため、トランザクションハッシュに基づいて受信トランザクションと照合します。

```mermaid
graph TD
    A[ユーザーウォレット] -->|ホワイトリストアプリ経由の最初のL2アクション| B(Karma発行)
    A -->|SNへのブリッジ| B
    B -->|ソウルバウンドトークン| C{ティア割り当て}

    subgraph "ティア制限"
        D[Basic]
        E[Active]
        F[Regular]
        G[Power User]
        H[High-Throughput]
        I[S-Tier]
    end

    C --> D
    C --> E
    C --> F
    C --> G
    C --> H
    C --> I

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
    class D,E,F,G,H,I tierNode
    class J,K,K1,K2,K3,M,N,O rln
    class P,Q,R,S,T,U,V,W sequencer
    class X,Y,Z,AA gas
```

## 3. システムコンポーネント

### 3.1 Prover

Proverは3つのサービスで構成されるシステムです：

1. **Registrar Service**: Karma ContractからKarma割り当てイベントを監視します。新しいアドレスがKarmaを受け取ると、RLN認証情報を生成して登録し、ユーザーをRLN Membership Contractにオンボーディングします。
2. **RLN Prover Service**: Zerokitライブラリを使用してトランザクションのRLN証明を生成します。証明はgRPCストリームを介してSequencerのRLN Verifierに直接ストリーミングされます。
3. **Karma API Service**: エポック内でユーザーが行ったトランザクションを追跡し、Karmaティアステータスを維持します。効率的なクエリとティア管理のために内部データベースにトランザクションデータを保存します。

これらのサービスは安全な認証情報管理、証明生成、トランザクション追跡を保証し、gRPCがSequencerとの低遅延通信を可能にします。

### 3.2 RLN Verifier

RLN Verifierはsequencer内のbesuプラグインで、Java Native Interfaceを介してRLNのZerokit Rustライブラリを活用します。
Verifierは：

- RLN Prover ServiceからgRPCストリームを購読して生成されるRLN証明を受信します。
- 証明をメモリに保存し、トランザクション（RPCノード経由）と証明（gRPC経由）の非同期到着を考慮して、トランザクションハッシュに基づいて受信トランザクションと照合します。
- 証明の真正性、nullifierの一意性、ユーザートランザクションクォータを検証します。

検証に失敗したトランザクションは拒否され、ユーザーは一時的に拒否リストに追加される場合があります。

### 3.3 拒否リスト

拒否リストはクォータを超過したりスパムに関与したりするユーザーを一時的に制限します：

- エントリは処理能力ティアに基づいて設定された期間（時間や日など）後に期限切れになります
- ユーザーはプレミアムガス手数料を支払うことで制限を回避できます
- プレミアム手数料を支払うとユーザーがリストから削除され、追加のKarmaを獲得します

### 3.4 `linea_estimateGas` RPC修正

linea_estimateGasメソッドは拒否リストのユーザーを考慮するようにカスタマイズされています：

- ユーザーの拒否リストステータスをチェックします
- 必要に応じてプレミアムガス倍率を追加します
- ユーザーに透明性と正確なガス推定を提供します 