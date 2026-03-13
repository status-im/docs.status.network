# クイックスタート

このセクションでは、10分以内に**Status Networkテストネット**にサンプルコントラクトをデプロイする方法を説明します。

簡単のため、Remix IDEを使用してStatus Networkにスマートコントラクトをデプロイする方法を見ていきましょう。

## 準備

始める前に：

1. **Status NetworkテストネットをMetaMaskに追加**：

   MetaMaskにStatus Networkテストネットを追加する方法については、[Status Network追加ガイド](/overview/general-info/add-status-network)の手順に従ってください。

2. **テストETHを入手**：

   SepoliaのETHとStatus NetworkのETHの両方が必要です：
   - まず[Sepoliaフォーセット](https://faucet.status.network)からSepolia ETHを入手
   - 次に[Statusブリッジ](https://bridge.status.network)を使用してETHをStatus Networkにブリッジ
   - または、[テストネットフォーセット](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)から直接Status Network ETHを入手

これで準備完了です！

## Remixとサンプルコード

**Remix**は、セットアップ不要のスマートコントラクト開発ツールです。簡単に始められ、シンプルなデプロイプロセス、デバッグ、スマートコントラクトとの対話などが可能です。

このチュートリアルでは、シンプルな`SimpleStorage.sol`コントラクトをデプロイします：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 number;
    
    function store(uint256 num) public {
        number = num;
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}
```

> **注意：** このコントラクトは数値を保存し、その数値を読み取ることができます。

## デプロイの手順

1. **サンプルコードをコピー**：

   - サンプルコードをコピーし、Remixで`SimpleStorage.sol`という新しいファイルに貼り付けます。

2. **スマートコントラクトをコンパイル**：

   - 左サイドバーの**Solidityコンパイラー**タブに移動。
   - コンパイラーバージョンが0.8.0以上であることを確認。
   - **「SimpleStorage.solをコンパイル」**をクリック。
   - コントラクトコードを変更するたびに自動コンパイルするには**「自動コンパイル」**を有効にできます。

3. **スマートコントラクトをデプロイ**：

   - **デプロイ＆実行トランザクション**タブに切り替え。
   - **「環境」**ドロップダウンメニューで**「Injected Provider - MetaMask」**を選択。
   - MetaMaskがRemixへの接続を求めることがあります。接続を確認してください。
   - MetaMaskで**Status Networkテストネット**が選択されていることを確認。
   - **「コントラクト」**で`SimpleStorage`が選択されていることを確認。
   - **「デプロイ」**をクリック。
   - MetaMaskがポップアップし、トランザクションの確認を求めます。ガス代はETHで支払われます。
   - トランザクションの詳細を確認し、**「確認」**をクリック。
   - トランザクションがマイニングされるのを待ちます。

4. **デプロイを確認**：
   
   - デプロイ後、Remixからコントラクトのアドレスをコピー
   - [Status Networkエクスプローラー](https://sepoliascan.status.network)で確認

**おめでとうございます！** Status Networkに最初のスマートコントラクトをデプロイしました。

## デプロイしたスマートコントラクトと対話する

1. **デプロイしたコントラクトにアクセス**：

   - Remixの**「デプロイされたコントラクト」**セクションで、デプロイした`SimpleStorage`コントラクトが表示されます。

2. **数値を保存**：

   - デプロイされたコントラクトを展開して関数を表示。
   - **「store」**関数の入力フィールドに数値（例：`42`）を入力。
   - **「transact」**をクリック。
   - MetaMaskがトランザクションの確認を求めます。ガス代はETHで支払われます。
   - トランザクションが確認されるのを待ちます。

3. **数値を取得**：

   - **「retrieve」**関数をクリック。
   - ボタンの下に保存された数値が表示されます。
   - これはview関数なので、ガス代は不要です。

## 次のステップ

- **サポートを受ける**：
  - サポートが必要な場合は[Telegramコミュニティ](https://t.me/statusl2)に参加
  - 詳細については[ネットワークの詳細](/overview/general-info/network-details)をチェック
  - Status Networkへの[トークンのブリッジ](/overview/general-info/bridge/bridging-testnet)について学ぶ

## まとめ

以下のことを達成しました：
- Status Networkテストネットと対話するための環境設定
- ブリッジまたはフォーセットを通じてテストネットETHを入手
- Remix IDEとMetaMaskを使用してスマートコントラクトをデプロイ
- 数値の保存と取得によってデプロイしたコントラクトと対話

より高度な開発については、以下を使用したデプロイのガイドをチェックしてください：
- [Hardhat](/build-for-karma/deploying-contracts/using-hardhat)
- [Foundry](/build-for-karma/deploying-contracts/using-foundry)
