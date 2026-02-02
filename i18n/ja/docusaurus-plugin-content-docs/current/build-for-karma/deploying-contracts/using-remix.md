# Remixを使用したスマートコントラクトのデプロイ

このチュートリアルでは、Remix IDEを使用してStatus Networkテストネットにスマートコントラクトをデプロイする手順を説明します。Remixは、迅速な開発とテストに最適なブラウザベースのIDEです。

## 前提条件

開始する前に、以下が必要です：

- **Webブラウザ**: ChromeやFirefoxなどの最新のブラウザ
- **MetaMask**: [MetaMask](https://metamask.io)ブラウザ拡張機能をインストール
- **テストネットETH**: Status NetworkテストネットのETHが必要です
  - Status NetworkテストネットのETHは[フォーセット](/tools/testnet-faucets)から入手できます
- **ネットワーク設定**: [ネットワーク追加ガイド](/home/general-info/add-status-network)に従ってMetaMaskにStatus Networkテストネットを追加

## 手順

### 1. Remix IDEを開く

ブラウザで[remix.ethereum.org](https://remix.ethereum.org)にアクセスします。

### 2. 新規ファイルの作成

1. 「File Explorer」アイコン（左サイドバーの最初のアイコン）をクリック
2. 「+」ボタンをクリックして新規ファイルを作成
3. `HelloWorld.sol`という名前を付ける

### 3. スマートコントラクトの作成

以下のコードを`HelloWorld.sol`にコピー＆ペーストします：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloWorld {
    string public greet = "Hello, Status Network!";

    function setGreet(string memory _greet) public {
        greet = _greet;
    }

    function getGreet() public view returns (string memory) {
        return greet;
    }
}
```

### 4. コントラクトのコンパイル

1. 「Solidity Compiler」アイコン（左サイドバーの2番目のアイコン）をクリック
2. コンパイラバージョン「0.8.24」を選択
3. 「高度な構成」を選択し、EVM バージョン「paris」を選択します。
4. 「Compile HelloWorld.sol」をクリック
5. コンパイルが成功することを確認（緑のチェックマークが表示されます）

### 5. コントラクトのデプロイ

1. 「Deploy & Run Transactions」アイコン（左サイドバーの4番目のアイコン）をクリック
2. 「Environment」ドロップダウンで「Injected Provider - MetaMask」を選択
3. MetaMaskが接続を要求 - Status Networkテストネットが選択されていることを確認
4. 「Deploy」をクリック
5. MetaMaskでトランザクションを確認
6. トランザクションが確認されるのを待つ

### 6. コントラクトとの対話

デプロイ後、「Deployed Contracts」の下にコントラクトが表示されます：

1. コントラクトインターフェースを展開
2. 以下の操作が可能です：
   - 「greet」をクリックして現在の挨拶を読み取り
   - 「setGreet」フィールドに新しい挨拶を入力してボタンをクリックして更新
   - 「getGreet」をクリックして挨拶を再度読み取り

## トラブルシューティング

### よくある問題

1. **トランザクションの失敗**
   - Status Networkテストネットに接続されていることを確認

2. **コントラクトが見つからない**
   - エクスプローラーがコントラクトをインデックスするまで数分待つ
   - コントラクトアドレスを再確認

3. **コンパイルエラー**
   - コンパイラーバージョンがpragma文と一致することを確認
   - Remixで強調表示された構文エラーを確認

## サポート

問題が発生した場合：
- [Telegramコミュニティ](https://t.me/statusl2)に参加
- [ネットワーク詳細](/home/general-info/network-details)を参照

## 追加リソース

- [Remixドキュメント](https://remix-ide.readthedocs.io/)
- [Status Networkエクスプローラー](https://sepoliascan.status.network)
