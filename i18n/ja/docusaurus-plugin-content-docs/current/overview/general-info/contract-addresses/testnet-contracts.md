---
title: 'テストネットコントラクト'
description: 'ブリッジコントラクト、コアインフラ、L2コントラクトを含むStatus Networkテストネットコントラクトアドレスの包括的なリストと、それぞれの目的およびブロックエクスプローラーへのリンク。'
keywords:
  - 'Status Networkコントラクト'
  - 'テストネットアドレス'
  - 'スマートコントラクト'
  - 'ブリッジコントラクト'
  - 'L1コントラクト'
  - 'L2コントラクト'
  - 'ブロックチェーンインフラ'
---

# テストネットコントラクト

このページでは、Status Networkテストネットインフラのすべての重要なコントラクトアドレスを一覧表示します。

## レイヤー1コントラクト (Hoodi)

これらのコントラクトはHoodiテストネットにデプロイされています。[Hoodi Etherscan](https://hoodi.etherscan.io)で確認できます。

### ブリッジコントラクト
- **ロールアップコントラクト**
  - アドレス: [`0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5`](https://hoodi.etherscan.io/address/0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5)
  - 目的: L2の有効性、DAおよびL1からL2へのメッセージングを管理

- **L1トークンブリッジプロキシ**
  - アドレス: [`0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6`](https://hoodi.etherscan.io/address/0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6)
  - 目的: L1でのトークンブリッジング操作を管理

### コアインフラ
- **L1ポストマン**
  - アドレス: [`0xB15725119b917d348FfEB365B43bCDeEbfb65C5d`](https://hoodi.etherscan.io/address/0xB15725119b917d348FfEB365B43bCDeEbfb65C5d)
  - 目的: L1とL2間のメッセージ受け渡しを処理

- **L1データ送信**
  - アドレス: [`0xf28FffAA0BD329EcE4e85f3D7163267649eb6B80`](https://hoodi.etherscan.io/address/0xf28FffAA0BD329EcE4e85f3D7163267649eb6B80)
  - 目的: L2からL1へのデータ送信を管理

- **L1ファイナライゼーション**
  - アドレス: [`0x74527db6DCa3E006c3ff76787E89eE8dD7963f43`](https://hoodi.etherscan.io/address/0x74527db6DCa3E006c3ff76787E89eE8dD7963f43)
  - 目的: L1でのL2ブロックのファイナライゼーションを処理

## レイヤー2コントラクト (Status Networkテストネット)

これらのコントラクトはStatus Networkテストネットにデプロイされています。[Status Network Explorer](https://hoodiscan.status.network)で確認できます。

### ブリッジコントラクト
- **L2メッセージサービス**
  - アドレス: [`0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D`](https://hoodiscan.status.network/address/0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D)
  - 目的: L2からL1へのメッセージングを管理
  
- **L2トークンブリッジプロキシ**
  - アドレス: [`0x48845B2B3cAb9773a5BBA2519f64003316BA6678`](https://hoodiscan.status.network/address/0x48845B2B3cAb9773a5BBA2519f64003316BA6678)
  - 目的: L2でのトークンブリッジング操作を管理

### インフラコントラクト
- **L2フォーセット**
  - アドレス: [`0x06338B70F1eAbc60d7A82C083e605C07F78bb878`](https://hoodiscan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)
  - 目的: ユーザーにテストネットトークンを配布

- **L2アンカリング**
  - アドレス: [`0x24B5eD2763129D6cBDEfE32e08558D2095132560`](https://hoodiscan.status.network/address/0x24B5eD2763129D6cBDEfE32e08558D2095132560)
  - 目的: L1とL2間の状態アンカリングを管理

### Karmaコントラクト
- **Karma**
  - アドレス: [`0x0700be6f329cc48c38144f71c898b72795db6c1b`](https://hoodiscan.status.network/address/0x0700be6f329cc48c38144f71c898b72795db6c1b)
  - 目的: 譲渡不可のERC20ネイティブレピュテーショントークン

- **KarmaTiers**
  - アドレス: [`0xb8039632e089dcefa6bbb1590948926b2463b691`](https://hoodiscan.status.network/address/0xb8039632e089dcefa6bbb1590948926b2463b691)
  - 目的: ガスレス取引のティアレベル

- **KarmaNFT**
  - アドレス: [`0x420077c98880a9ebb45296cf7721ab7a5b56bd47`](https://hoodiscan.status.network/address/0x420077c98880a9ebb45296cf7721ab7a5b56bd47)
  - 目的: ソウルバウンドKarma NFT

- **StakeManager**
  - アドレス: [`0x2bc5b2a5f580064aab6fbc1ee30113cd808582ac`](https://hoodiscan.status.network/address/0x2bc5b2a5f580064aab6fbc1ee30113cd808582ac)
  - 目的: SNTステーキングコントラクト

- **VaultFactory**
  - アドレス: [`0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14`](https://hoodiscan.status.network/address/0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14)
  - 目的: StakeManagerに接続するセルフカストディボールトを作成するファクトリー

### ユーティリティコントラクト
- **Multicall3**
  - アドレス: [`0xcA11bde05977b3631167028862bE2a173976CA11`](https://hoodiscan.status.network/address/0xcA11bde05977b3631167028862bE2a173976CA11)
  - 目的: 一つのリクエストからチェーンへの複数呼び出しをバッチング
  
- **決定論的デプロイプロキシ**
  - アドレス: [`0x4e59b44847b379578588920cA78FbF26c0B4956C`](https://hoodiscan.status.network/address/0x4e59b44847b379578588920cA78FbF26c0B4956C)
  - 目的: Hardhatなどの人気フレームワークが内部で使用するCREATE2ユーティリティコントラクト
  
- **Safeシングルトンファクトリー**
  - アドレス: [`0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7`](https://hoodiscan.status.network/address/0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7)
  - 目的: Safe関連コントラクトで使用されるシングルトンファクトリー
