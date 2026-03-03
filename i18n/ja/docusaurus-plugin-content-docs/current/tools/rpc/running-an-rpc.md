---
title: 独自RPCノードの運用
description: 公式RPCツールを使ってStatus Network用の独自RPCノードをセットアップ・運用する完全ガイド。ノードセットアップ、設定、メンテナンスについて学びます。
keywords: [RPC node, Status Network RPC, blockchain node, WebSocket, wss, self-hosted RPC, network infrastructure, Status L2 RPC tools]
---

このチュートリアルでは、Status Network用のリモートプロシージャコール（RPC）ノードをセットアップ・運用する手順を説明します。独自のRPCノードを運用することで、Status Networkとのやり取りをより細かく制御し、プライバシーを高め、サードパーティサービスへの依存を減らせます。

## はじめに

[Status Network RPC Toolsリポジトリ](https://github.com/status-im/status-l2-rpc-tools)には、独自のRPCノードを運用するために必要なツール、ジェネシスファイル、セットアップスクリプトがすべて含まれています。

### 完全セットアップガイド

詳細なセットアップ手順、前提条件、システム要件、ステップバイステップのガイダンスについては、リポジトリの[**公式README**](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md)を参照してください。

## ノードオプション

セットアップスクリプトでは、次の2つのノード実装から選択できます：

- **Besu Node**：ポート`8545`で動作（http://localhost:8545）
- **Geth Node**：ポート`8445`で動作（http://localhost:8445）

必要に応じてどちらか一方、または両方を同時に実行できます。

## ノードの検証

以下の例では、`<YOUR_CLIENT_PORT>`をBesuの場合は`8545`、Gethの場合は`8445`に置き換えてください。

### 基本検証

ノードが起動したら、正しく動作しているか確認します：

```bash
# 現在のブロック番号を含むレスポンスが返ってくるはずです。
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

### ヘルスチェックと同期検証

ノードの包括的なヘルスチェック：

```bash
# ノードの同期状態を確認。同期済みの場合はfalseを返します。
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>

# ノードの接続ピア数を確認（0より大きいこと）
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

最新で健全なノードでは以下が確認できます：
- `eth_blockNumber`が信頼できる参照（パブリックRPCやブロックエクスプローラーなど）と一致
- `eth_syncing`が`false`を返す（完全同期済み）
- `net_peerCount`が0より大きい（ピアに接続済み）

## WebSocketサポート

ノードはリアルタイムイベント購読用のWebSocket接続にも対応しています：

```bash
# WebSocketエンドポイント
ws://localhost:8546  # Besu
ws://localhost:8446  # Geth
```

### WebSocket接続

### 購読の例

```json
// 新しいブロックヘッダーを購読
{"jsonrpc":"2.0","method":"eth_subscribe","params":["newHeads"],"id":1}

// フィルターに一致するログを購読
{"jsonrpc":"2.0","method":"eth_subscribe","params":["logs",{"address":"0x..."}],"id":1}

// 購読解除
{"jsonrpc":"2.0","method":"eth_unsubscribe","params":["0x..."],"id":1}
```

## 高度な機能

### バッチリクエスト

ノードは効率化のためのバッチJSON-RPCリクエストに対応しています：

- **デフォルトバッチ上限**：1バッチあたり1,024リクエスト
- **設定**：`--rpc-http-max-batch-size`で調整可能（`1`で無制限）
- **最大リクエストサイズ**：5 MB（デフォルト`--rpc-http-max-request-content-length`）

### リソース集約型メソッド

レスポンスに時間がかかる可能性のあるメソッドに注意してください：

| メソッド | レスポンス時間 | 備考 |
|--------|---------------|-------|
| `eth_getLogs`（広い範囲） | 200ms〜数秒 | 範囲を限定し、ブルームフィルターを活用 |
| `eth_estimateGas` | 200ms〜数秒 | 負荷時や複雑なコントラクトでは遅くなる可能性 |

:::tip パフォーマンスのヒント
本番環境では、低数千RPSの読み取りから始め、ワークロードとハードウェアテストに基づいて水平スケールしてください。
:::

## トラブルシューティング

### よくある問題

1. **ポートが使用中**
   ```bash
   # ポート8545（Besu）または8445（Geth）を使用しているプロセスを確認
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
   - 十分なディスク容量があるか確認
   - Dockerコンテナのログを確認：`docker compose logs`
   - システムが最小要件を満たしているか確認

4. **RPCエンドポイントが応答しない**
   - コンテナが実行中か確認：`docker ps`
   - ファイアウォール設定を確認
   - RPCポート（8545、8445）がアクセス可能か確認
   - エラーの有無をコンテナログで確認

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

成長に合わせてストレージ容量を計画してください：

- 初期サイズ：約200 GB（6ヶ月後、2秒ブロックで約1,200万トランザクション）
- 成長率：ネットワークアクティビティに依存、中程度
- 推奨：余裕を持って2 TB Gen4 NVMe

:::warning 成長を見据えた計画
継続運用のため、現在の要件を超えるストレージ容量を必ず確保してください。
:::

## セキュリティの考慮事項

独自のRPCノードを運用する際：

1. **ファイアウォール設定**：必要なポート（8545、8445）のみを公開
2. **アクセス制御**：本番環境では認証の実装を検討
3. **ネットワーク分離**：RPCエンドポイントをインターネットに直接公開しない
4. **定期的な更新**：ノードソフトウェアとDockerイメージを最新に保つ
5. **バックアップ**：ノード設定を定期的にバックアップ（データは再同期可能）
6. **レート制限**：複数ユーザーに公開する場合はレート制限を実装

:::caution 本番デプロイ
本番環境では、レート制限のためパブリックRPCエンドポイントへの依存は避けてください。独自のプライベートRPCノードを運用することで、信頼性とパフォーマンスが向上します。
:::

## パフォーマンス最適化

RPCノードのパフォーマンスを最適化するには：

1. **SSDストレージ**：I/Oパフォーマンス向上のためGen4 NVMeストレージを使用
2. **十分なRAM**：キャッシュ用に十分なメモリを確保（32〜48 GB推奨）
3. **ネットワーク帯域**：同期とピア通信のため安定した1 Gbps以上の接続
4. **CPUリソース**：トランザクション検証に十分な処理能力（8〜12コア推奨）
5. **水平スケーリング**：高トラフィックアプリでは、ロードバランサーの背後で複数ノードを運用

## サポート

問題が発生した場合：

- 最新情報は[公式README](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md)を確認
- [ネットワーク詳細](/overview/general-info/network-details)およびドキュメント全般を参照
- サポートは[Telegramコミュニティ](https://t.me/statusl2)に参加

## 追加リソース

- [Status Network RPC Toolsリポジトリ](https://github.com/status-im/status-l2-rpc-tools) — セットアップガイドとスクリプト付き公式リポジトリ
- [Status Networkドキュメント](https://docs.status.network/) — 公式ドキュメント
- [Status Networkブロックエクスプローラー](https://sepoliascan.status.network) — Sepoliaテストネットエクスプローラー
