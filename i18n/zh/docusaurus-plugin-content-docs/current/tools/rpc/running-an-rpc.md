---
title: 运行你自己的 RPC 节点
description: 使用官方 RPC 工具为 Status Network 设置和运行自有 RPC 节点的完整指南。了解节点配置、设置和维护。
keywords: [RPC node, Status Network RPC, blockchain node, WebSocket, wss, self-hosted RPC, network infrastructure, Status L2 RPC tools]
---

本教程将指导你为 Status Network 设置和运行自己的远程过程调用 (RPC) 节点。运行自有 RPC 节点可以更好地控制与 Status Network 的交互、增强隐私并减少对第三方服务的依赖。

## 入门

[Status Network RPC Tools 仓库](https://github.com/status-im/status-l2-rpc-tools) 提供运行自有 RPC 节点所需的全部工具、创世文件和设置脚本。

### 完整设置指南

有关详细设置说明、前置条件、系统要求和分步指导，请参阅仓库中的 [**官方 README**](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md)。

## 节点选项

设置脚本提供两种节点实现供选择：

- **Besu 节点**：运行在端口 `8545` (http://localhost:8545)
- **Geth 节点**：运行在端口 `8445` (http://localhost:8445)

可根据需要运行其中一种或同时运行两种。

## 验证你的节点

在以下示例中，若使用 Besu 则将 `<YOUR_CLIENT_PORT>` 替换为 `8545`，若使用 Geth 则替换为 `8445`。

### 基本验证

节点运行后，验证其是否正常工作：

```bash
# 你应该会收到包含当前区块号的响应。
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

### 健康与同步验证

进行全面的节点健康检查：

```bash
# 检查节点同步状态。若节点已同步则返回 false。
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>

# 验证节点连接的对等点数量（应大于 0）
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

最新且健康的节点应显示：
- `eth_blockNumber` 与可信参考（如公共 RPC 或区块浏览器）一致
- `eth_syncing` 返回 `false`（已完全同步）
- `net_peerCount` 大于 0（已连接对等点）

## WebSocket 支持

你的节点还支持用于实时事件订阅的 WebSocket 连接：

```bash
# WebSocket 端点
ws://localhost:8546  # Besu
ws://localhost:8446  # Geth
```

### WebSocket 连接

### 订阅示例

```json
// 订阅新区块头
{"jsonrpc":"2.0","method":"eth_subscribe","params":["newHeads"],"id":1}

// 订阅匹配过滤器的日志
{"jsonrpc":"2.0","method":"eth_subscribe","params":["logs",{"address":"0x..."}],"id":1}

// 取消订阅
{"jsonrpc":"2.0","method":"eth_unsubscribe","params":["0x..."],"id":1}
```

## 高级功能

### 批量请求

你的节点支持批量 JSON-RPC 请求以提高效率：

- **默认批量上限**：每批 1,024 个请求
- **配置**：可通过 `--rpc-http-max-batch-size` 调整（设为 `1` 表示无限制）
- **最大请求大小**：5 MB（默认 `--rpc-http-max-request-content-length`）

### 资源密集型方法

注意以下方法可能需要较长响应时间：

| 方法 | 响应时间 | 说明 |
|--------|---------------|-------|
| `eth_getLogs`（大范围） | 200ms 至数秒 | 使用有界范围和 bloom 过滤器 |
| `eth_estimateGas` | 200ms 至数秒 | 高负载或复杂合约下可能更慢 |

:::tip 性能提示
生产环境中，建议从数千级读 RPS 起步，并根据具体工作负载和硬件测试水平扩展。
:::

## 故障排除

### 常见问题

1. **端口已被占用**
   ```bash
   # 检查占用 8545（Besu）或 8445（Geth）端口的进程
   lsof -i :8545
   lsof -i :8445
   
   # 如需要可终止进程
   kill -9 <PID>
   ```

2. **Docker 容器问题**
   ```bash
   # 检查运行中的容器
   docker ps
   
   # 查看容器日志
   docker compose logs -f
   
   # 重启容器
   docker compose restart
   ```

3. **节点未同步**
   - 检查网络连接
   - 确认磁盘空间充足
   - 查看 Docker 容器日志：`docker compose logs`
   - 确保系统满足最低要求

4. **RPC 端点无响应**
   - 确认容器在运行：`docker ps`
   - 检查防火墙设置
   - 确保 RPC 端口（8545、8445）可访问
   - 查看容器日志中的错误

### 监控你的节点

```bash
# 检查 Docker 容器状态
docker compose ps

# 监控容器日志
docker compose logs -f

# 监控磁盘使用
df -h

# 检查网络连接
netstat -tulpn | grep :8545
netstat -tulpn | grep :8445
```

## 存储规划

### 磁盘空间要求

根据增长规划存储容量：

- 初始大小：约 200 GB（6 个月后，约 1200 万笔交易，2 秒出块）
- 增长率：中等，取决于网络活动
- 推荐：2 TB Gen4 NVMe 以留有余量

:::warning 为增长做规划
始终预留超出当前需求的额外存储容量，以确保持续运行。
:::

## 安全注意事项

运行自有 RPC 节点时：

1. **防火墙配置**：仅开放必要端口（8545、8445）
2. **访问控制**：生产环境考虑实施身份验证
3. **网络隔离**：避免将 RPC 端点直接暴露到互联网
4. **定期更新**：保持节点软件和 Docker 镜像更新
5. **备份**：定期备份节点配置（数据可在需要时重新同步）
6. **速率限制**：若向多用户开放，实施速率限制

:::caution 生产部署
生产环境中，避免依赖公共 RPC 端点，因其有速率限制。运行自有私有 RPC 节点可提供更好的可靠性和性能。
:::

## 性能优化

优化 RPC 节点性能：

1. **SSD 存储**：使用 Gen4 NVMe 存储以获得更好的 I/O 性能
2. **充足内存**：确保足够的缓存内存（推荐 32–48 GB）
3. **网络带宽**：稳定的 1+ Gbps 连接用于同步和对等通信
4. **CPU 资源**：足够的处理能力用于交易验证（推荐 8–12 核）
5. **水平扩展**：高流量应用可在负载均衡器后运行多个节点

## 支持

如遇问题：

- 查看 [官方 README](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md) 获取最新更新
- 查阅我们的[网络详情](/overview/general-info/network-details)及整体文档
- 加入我们的 [Telegram 社区](https://t.me/statusl2) 获取支持

## 更多资源

- [Status Network RPC Tools 仓库](https://github.com/status-im/status-l2-rpc-tools) - 含设置指南和脚本的官方仓库
- [Status Network 文档](https://docs.status.network/) - 官方文档
- [Status Network 区块浏览器](https://sepoliascan.status.network) - Sepolia 测试网浏览器
