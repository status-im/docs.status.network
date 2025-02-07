# テストネットのコントラクト

このページでは、Status Networkテストネットインフラストラクチャの重要なコントラクトアドレスを全て掲載しています。

## レイヤー1コントラクト（Sepolia）

これらのコントラクトはSepoliaテストネットにデプロイされています。[Sepolia Etherscan](https://sepolia.etherscan.io)で確認できます。

### ブリッジコントラクト
- **L1トークンブリッジプロキシ**
  - アドレス: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)
  - 目的: L1上のトークンブリッジング操作を管理

### コアインフラストラクチャ
- **L1ポストマン**
  - アドレス: [`0xB15725119b917d348FfEB365B43bCDeEbfb65C5d`](https://sepolia.etherscan.io/address/0xB15725119b917d348FfEB365B43bCDeEbfb65C5d)
  - 目的: L1とL2間のメッセージ受け渡しを処理

- **L1データ送信**
  - アドレス: [`0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d`](https://sepolia.etherscan.io/address/0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d)
  - 目的: L2からL1へのデータ送信を管理

- **L1ファイナライゼーション**
  - アドレス: [`0xb91CB39b3b9F015b0aC88616A463B35568052AEF`](https://sepolia.etherscan.io/address/0xb91CB39b3b9F015b0aC88616A463B35568052AEF)
  - 目的: L1上のL2ブロックのファイナライゼーションを処理

## レイヤー2コントラクト（Status Networkテストネット）

これらのコントラクトはStatus Networkテストネットにデプロイされています。[Status Network Explorer](https://sepoliascan.status.network)で確認できます。

### ブリッジコントラクト
- **L2トークンブリッジプロキシ**
  - アドレス: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)
  - 目的: L2上のトークンブリッジング操作を管理

### インフラストラクチャコントラクト
- **L2フォーセット**
  - アドレス: [`0x06338B70F1eAbc60d7A82C083e605C07F78bb878`](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)
  - 目的: ユーザーにテストネットトークンを配布

- **L2アンカリング**
  - アドレス: [`0x24B5eD2763129D6cBDEfE32e08558D2095132560`](https://sepoliascan.status.network/address/0x24B5eD2763129D6cBDEfE32e08558D2095132560)
  - 目的: L1とL2間の状態アンカリングを管理
