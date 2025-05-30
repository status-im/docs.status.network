---
title: テストネットコントラクト
description: ブリッジコントラクト、コアインフラ、L2コントラクトを含むStatus Networkテストネットコントラクトアドレスの包括的なリストと、それぞれの目的およびブロックエクスプローラーへのリンク。
keywords: [Status Networkコントラクト, テストネットアドレス, スマートコントラクト, ブリッジコントラクト, L1コントラクト, L2コントラクト, ブロックチェーンインフラ]
---

# テストネットコントラクト

このページでは、Status Networkテストネットインフラのすべての重要なコントラクトアドレスを一覧表示します。

## レイヤー1コントラクト (Sepolia)

これらのコントラクトはSepoliaテストネットにデプロイされています。[Sepolia Etherscan](https://sepolia.etherscan.io)で確認できます。

### ブリッジコントラクト
- **Rollup Contract**
  - アドレス: [`0x0Bf464f24D867ff0B20aE8f9C353a589138D6836`](https://sepolia.etherscan.io/address/0x0bf464f24d867ff0b20ae8f9c353a589138d6836)
  - 目的: L2の有効性、DAおよびL1からL2へのメッセージングを管理

- **L1 Token Bridge Proxy**
  - アドレス: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)
  - 目的: L1でのトークンブリッジング操作を管理

### コアインフラ
- **L1 Postman**
  - アドレス: [`0xB15725119b917d348FfEB365B43bCDeEbfb65C5d`](https://sepolia.etherscan.io/address/0xB15725119b917d348FfEB365B43bCDeEbfb65C5d)
  - 目的: L1とL2間のメッセージ受け渡しを処理

- **L1 Data Submission**
  - アドレス: [`0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d`](https://sepolia.etherscan.io/address/0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d)
  - 目的: L2からL1へのデータ送信を管理

- **L1 Finalization**
  - アドレス: [`0xb91CB39b3b9F015b0aC88616A463B35568052AEF`](https://sepolia.etherscan.io/address/0xb91CB39b3b9F015b0aC88616A463B35568052AEF)
  - 目的: L1でのL2ブロックのファイナライゼーションを処理

## レイヤー2コントラクト (Status Networkテストネット)

これらのコントラクトはStatus Networkテストネットにデプロイされています。[Status Network Explorer](https://sepoliascan.status.network)で確認できます。

### ブリッジコントラクト
- **L2 Message Service**
  - アドレス: [`0xe74Bd8db0440533F8915042D980AbAA86085821c`](https://sepoliascan.status.network/address/0xe74Bd8db0440533F8915042D980AbAA86085821c)
  - 目的: L2からL1へのメッセージングを管理
  
- **L2 Token Bridge Proxy**
  - アドレス: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)
  - 目的: L2でのトークンブリッジング操作を管理

### インフラコントラクト
- **L2 Faucet**
  - アドレス: [`0x06338B70F1eAbc60d7A82C083e605C07F78bb878`](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)
  - 目的: ユーザーにテストネットトークンを配布

- **L2 Anchoring**
  - アドレス: [`0x24B5eD2763129D6cBDEfE32e08558D2095132560`](https://sepoliascan.status.network/address/0x24B5eD2763129D6cBDEfE32e08558D2095132560)
  - 目的: L1とL2間の状態アンカリングを管理

### ユーティリティコントラクト
- **Multicall3**
  - アドレス: [`0xcA11bde05977b3631167028862bE2a173976CA11`](https://sepoliascan.status.network/address/0xcA11bde05977b3631167028862bE2a173976CA11)
  - 目的: 一つのリクエストからチェーンへの複数呼び出しをバッチング
  
- **deterministic-deployment-proxy**
  - アドレス: [`0x4e59b44847b379578588920cA78FbF26c0B4956C`](https://sepoliascan.status.network/address/0x4e59b44847b379578588920cA78FbF26c0B4956C)
  - 目的: Hardhatなどの人気フレームワークが内部で使用するCREATE2ユーティリティコントラクト
  
- **safe-singleton-factory**
  - アドレス: [`0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7`](https://sepoliascan.status.network/address/0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7)
  - 目的: Safe関連コントラクトで使用されるシングルトンファクトリー
