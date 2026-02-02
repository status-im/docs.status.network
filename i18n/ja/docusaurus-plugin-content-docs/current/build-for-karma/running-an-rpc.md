---
title: 独自のRPCノードの運用
description: 公式RPCツールを使用してStatus Network用の独自RPCノードをセットアップし、運用するための完全ガイド。ノードのセットアップ、設定、メンテナンスについて学びます。
keywords: [RPCノード, Status Network RPC, ブロックチェーンノード, WebSocket, wss, セルフホストRPC, ネットワークインフラ, Status L2 RPCツール]
---

# 独自のRPCノードの運用

このチュートリアルでは、Status Network用の独自のRemote Procedure Call (RPC)ノードをセットアップして運用するプロセスをガイドします。独自のRPCノードを運用することで、Status Networkとのやり取りをより強力に制御し、プライバシーを強化し、サードパーティサービスへの依存を減らすことができます。

## はじめに

[Status Network RPCツールリポジトリ](https://github.com/status-im/status-l2-rpc-tools)は、独自のRPCノードを運用するために必要なすべてのツール、ジェネシスファイル、セットアップスクリプトを提供します。

### 完全セットアップガイド
詳細なセットアップ手順、前提条件、システム要件、ステップバイステップのガイダンスについては、リポジトリ内の**[公式README](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md)**を参照してください。

## ノードオプション

セットアップスクリプトは、選択可能な2つのノード実装を提供します：

- **Besuノード**: ポート`8545`で実行 (http://localhost:8545)
- **Gethノード**: ポート`8445`で実行 (http://localhost:8445)

必要に応じて、どちらか一方または両方を同時に実行できます。

## ノードの検証
以下の例では、Besuを使用している場合は`<YOUR_CLIENT_PORT>`を`8545`に、Gethを使用している場合は`8445`に置き換えてください。

### 基本検証

ノードが実行されたら、正常に動作していることを確認します：

```bash
# 現在のブロック番号を含むレスポンスが返されるはずです。
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

### ヘルスと同期の検証
包括的なノードヘルスチェックの場合：

```bash
# ノードの同期ステータスを確認します。ノードが同期している場合はfalseを返します。
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>

# ノードの接続ピア数を確認します（> 0 である必要があります）
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

最新で健全なノードは以下を示すはずです：
- `eth_blockNumber`が信頼できる参照（公開RPCやブロックエクスプローラーなど）と一致する
- `eth_syncing`が`false`を返す（完全に同期済み）
- `net_peerCount`が0より大きい（ピアに接続済み）

## WebSocketサポート

ノードは、リアルタイムイベントサブスクリプション用のWebSocket接続もサポートしています：

```bash
# WebSocketエンドポイント
ws://localhost:8546  # Besu
ws://localhost:8446  # Geth
```

### WebSocket接続

### サブスクリプションの例

```json
// 新しいブロックヘッダーをサブスクライブ
{"jsonrpc":"2.0","method":"eth_subscribe","params":["newHeads"],"id":1}

// フィルタに一致するログをサブスクライブ
{"jsonrpc":"2.0","method":"eth_subscribe","params":["logs",{"address":"0x..."}],"id":1}

// サブスクライブ解除
{"jsonrpc":"2.0","method":"eth_unsubscribe","params":["0x..."],"id":1}
```

## 高度な機能

### バッチリクエスト

ノードは、効率向上のためバッチJSON-RPCリクエストをサポートしています：

- **デフォルトバッチ上限**: バッチあたり1,024リクエスト
- **設定**: `--rpc-http-max-batch-size`で調整可能（無制限にする場合は`1`に設定）
- **最大リクエストサイズ**: 5 MB（デフォルト `--rpc-http-max-request-content-length`）

### リソース集約的なメソッド

レスポンス時間が長くなる可能性のあるメソッドに注意してください：

| メソッド | レスポンス時間 | 備考 |
|--------|---------------|-------|
| `eth_getLogs` (大きな範囲) | 200msから数秒 | 制限された範囲とブルームフィルタを使用 |
| `eth_estimateGas` | 200msから数秒 | 負荷が高い場合や複雑なコントラクトの場合は遅くなる可能性あり |

::::tip パフォーマンスのヒント
本番環境では、数千程度の読み取りRPSから始めて、特定のワークロードとハードウェアテストに基づいて水平スケーリングしてください。
::::

## トラブルシューティング

### よくある問題

1. **ポートがすでに使用中**
   ```bash
   # ポート8545（Besu）または8445（Geth）を使用しているものを確認
   lsof -i :8545
   lsof -i :8445
   
   # 必要に応じてプロセスを終了
   kill -9 <PID>
   ```

2. **Dockerコンテナの問題**
   ```bash
   # 実行中のコンテナを確認
   docker ps
   
   # コンテナログを表示
   docker compose logs -f
   
   # コンテナを再起動
   docker compose restart
   ```

3. **ノードが同期しない**
   - インターネット接続を確認
   - 十分なディスク容量があることを確認
   - Dockerコンテナログを確認：`docker compose logs`
   - システムが最小要件を満たしていることを確認

4. **RPCエンドポイントが応答しない**
   - コンテナが実行中であることを確認：`docker ps`
   - ファイアウォール設定を確認
   - RPCポート（8545、8445）がアクセス可能であることを確認
   - エラーのコンテナログを確認

### ノードの監視

```bash
# Dockerコンテナのステータスを確認
docker compose ps

# コンテナログを監視
docker compose logs -f

# ディスク使用量を監視
df -h

# ネットワーク接続を確認
netstat -tulpn | grep :8545
netstat -tulpn | grep :8445
```

## ストレージ計画

### ディスク容量要件

成長に基づいてストレージ容量を計画します：

- 初期サイズ：約200 GB（6ヶ月後、2秒ブロックで約12Mトランザクション）
- 成長率：中程度、ネットワーク活動に依存
- 推奨：余裕を持たせるため2 TB Gen4 NVMe

::::warning 成長を計画する
継続的な運用を確保するため、常に現在の要件を超える追加ストレージ容量を確保してください。
::::

## セキュリティに関する考慮事項

独自のRPCノードを運用する場合：

1. **ファイアウォール設定**: 必要なポート（8545、8445）のみを公開
2. **アクセス制御**: 本番環境では認証の実装を検討
3. **ネットワーク分離**: RPCエンドポイントをインターネットに直接公開しない
4. **定期的な更新**: ノードソフトウェアとDockerイメージを最新に保つ
5. **バックアップ**: ノード設定を定期的にバックアップ（データは必要に応じて再同期可能）
6. **レート制限**: 複数のユーザーに公開する場合はレート制限を実装

::::caution 本番環境デプロイ
本番環境では、レート制限のため公開RPCエンドポイントに依存しないでください。独自のプライベートRPCノードを運用することで、より良い信頼性とパフォーマンスが得られます。
::::

## パフォーマンス最適化

RPCノードのパフォーマンスを最適化するには：

1. **SSDストレージ**: より良いI/Oパフォーマンスのために Gen4 NVMe ストレージを使用
2. **十分なRAM**: キャッシング用の適切なメモリを確保（32〜48 GB推奨）
3. **ネットワーク帯域幅**: 同期とピア通信のための安定した1+ Gbps接続
4. **CPUリソース**: トランザクション検証のための適切な処理能力（8〜12コア推奨）
5. **水平スケーリング**: 高トラフィックアプリケーションの場合、ロードバランサーの背後で複数のノードを実行

## サポート

問題が発生した場合：

- 最新の更新については[公式README](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md)を確認
- [ネットワーク詳細](/home/general-info/network-details)およびドキュメント全般を確認
- サポートについては[Telegramコミュニティ](https://t.me/statusl2)に参加

## 追加リソース

- [Status Network RPCツールリポジトリ](https://github.com/status-im/status-l2-rpc-tools) - セットアップガイドとスクリプトを含む公式リポジトリ
- [Status Networkドキュメント](https://docs.status.network/) - 公式ドキュメント
- [Status Networkブロックエクスプローラー](https://sepoliascan.status.network) - Sepoliaテストネットエクスプローラー
