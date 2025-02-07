# RPCエンドポイント

Status Networkは、ネットワークとの対話を可能にする公開RPC（Remote Procedure Call）エンドポイントを提供しています。

## 公開RPC URL

```
https://public.sepolia.rpc.status.network
```

## RPCの使用

### MetaMaskへの追加
このRPCを使用してStatus Networkをウォレットに追加する方法については、[ネットワーク追加ガイド](../general-info/add-status-network.md)をご参照ください。

### Web3ライブラリの設定

```javascript
// Web3.js
const web3 = new Web3('https://public.sepolia.rpc.status.network');

// Ethers.js v5
const provider = new ethers.providers.JsonRpcProvider('https://public.sepolia.rpc.status.network');
```

## 利用可能なメソッド

RPCエンドポイントは、以下を含む標準的なEthereum JSON-RPCメソッドをサポートしています：

- `eth_blockNumber`: 最新のブロック番号を取得
- `eth_getBalance`: アカウント残高を取得
- `eth_sendRawTransaction`: 署名済みトランザクションを送信
- `eth_call`: トランザクションを作成せずにコールを実行
- `eth_getLogs`: イベントログを取得
- `eth_getTransactionByHash`: トランザクションの詳細を取得
- `eth_getBlockByNumber`: ブロック情報を取得

サポートされているRPCメソッドの完全なリストと詳細な仕様については、Status NetworkがLinea技術をベースにしているため、[Linea APIリファレンス](https://docs.linea.build/api/reference)を参照してください。

## レート制限

公開RPCエンドポイントには、公平な使用を確保するためのレート制限があります：
- IPあたり1秒間に10リクエスト
- IPあたり1日100,000リクエスト

より高い制限が必要な場合は、Telegramでお問い合わせください。

## サポート

RPCエンドポイントに問題が発生した場合：
- 進行中の問題については[ネットワークステータス](https://health.status.network)をチェック
- サポートについては[Telegramコミュニティ](https://t.me/+k04A_OZbhIs1Mzc9)に参加
- アプリケーションにフォールバックRPC戦略の実装を検討
