---
title: 运行自己的RPC节点
description: 使用官方RPC工具为Status Network设置和运行自己的RPC节点的完整指南。了解节点设置、配置和维护。
keywords: [RPC节点, Status Network RPC, 区块链节点, WebSocket, wss, 自托管RPC, 网络基础设施, Status L2 RPC工具]
---

# 运行自己的RPC节点

本教程将指导您完成为Status Network设置和运行自己的Remote Procedure Call (RPC)节点的过程。通过运行自己的RPC节点，您可以更好地控制与Status Network的交互，增强隐私性，并减少对第三方服务的依赖。

## 入门

[Status Network RPC Tools仓库](https://github.com/status-im/status-l2-rpc-tools)提供了运行自己的RPC节点所需的所有工具、创世文件和设置脚本。

### 完整设置指南
有关详细的设置说明、先决条件、系统要求和分步指导，请参阅仓库中的**[官方README](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md)**。

## 节点选项

设置脚本提供两种节点实现供选择：

- **Besu节点**: 在端口`8545`上运行 (http://localhost:8545)
- **Geth节点**: 在端口`8445`上运行 (http://localhost:8445)

根据需要，您可以运行其中一个或同时运行两个。

## 验证节点
在下面的示例中，如果使用Besu，请将`<YOUR_CLIENT_PORT>`替换为`8545`；如果使用Geth，则替换为`8445`。

### 基本验证

节点运行后，验证其正常工作：

```bash
# 您应该收到包含当前区块号的响应。
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

### 健康状态和同步验证

进行全面的节点健康检查：

```bash
# 检查节点的同步状态。如果节点已同步，则返回false。
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>

# 验证节点连接的对等节点数量（应该大于0）
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

最新且健康的节点应显示：
- `eth_blockNumber`与可信参考（如公共RPC或区块浏览器）匹配
- `eth_syncing`返回`false`（完全同步）
- `net_peerCount`大于0（已连接到对等节点）

## WebSocket支持

您的节点还支持WebSocket连接以进行实时事件订阅：

```bash
# WebSocket端点
ws://localhost:8546  # Besu
ws://localhost:8446  # Geth
```

### WebSocket连接

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

您的节点支持批量JSON-RPC请求以提高效率：

- **默认批量上限**: 每批1,024个请求
- **配置**: 可通过`--rpc-http-max-batch-size`调整（设置为`1`表示无限制）
- **最大请求大小**: 5 MB（默认`--rpc-http-max-request-content-length`）

### 资源密集型方法

注意可能需要较长响应时间的方法：

| 方法 | 响应时间 | 备注 |
|--------|---------------|-------|
| `eth_getLogs`（大范围） | 200毫秒至几秒 | 使用有界范围和布隆过滤器 |
| `eth_estimateGas` | 200毫秒至几秒 | 在负载下或使用复杂合约时可能较慢 |

:::tip 性能提示
对于生产使用，从低数千读取RPS开始，并根据您的特定工作负载和硬件测试进行水平扩展。
:::

## 故障排除

### 常见问题

1. **端口已被占用**
   ```bash
   # 检查什么正在使用端口8545（Besu）或8445（Geth）
   lsof -i :8545
   lsof -i :8445
   
   # 如需要，终止进程
   kill -9 <PID>
   ```

2. **Docker容器问题**
   ```bash
   # 检查运行中的容器
   docker ps
   
   # 查看容器日志
   docker compose logs -f
   
   # 重启容器
   docker compose restart
   ```

3. **节点未同步**
   - 检查您的互联网连接
   - 验证是否有足够的磁盘空间
   - 检查Docker容器日志：`docker compose logs`
   - 确保您的系统满足最低要求

4. **RPC端点无响应**
   - 验证容器正在运行：`docker ps`
   - 检查防火墙设置
   - 确保RPC端口（8545、8445）可访问
   - 查看容器日志中的错误

### 监控节点

```bash
# 检查Docker容器状态
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

- 初始大小：约200 GB（6个月后，2秒区块约12M笔交易）
- 增长率：中等，取决于网络活动
- 建议：2 TB Gen4 NVMe以留有余地

:::warning 规划增长
始终提供超出当前需求的额外存储容量以确保持续运行。
:::

## 安全考虑

运行自己的RPC节点时：

1. **防火墙配置**: 仅暴露必要的端口（8545、8445）
2. **访问控制**: 考虑为生产使用实施身份验证
3. **网络隔离**: 避免将RPC端点直接暴露到互联网
4. **定期更新**: 保持节点软件和Docker镜像更新
5. **备份**: 定期备份节点配置（数据可在需要时重新同步）
6. **速率限制**: 如果暴露给多个用户，实施速率限制

:::caution 生产部署
对于生产使用，由于速率限制，避免依赖公共RPC端点。运行自己的私有RPC节点可提供更好的可靠性和性能。
:::

## 性能优化

优化RPC节点性能：

1. **SSD存储**: 使用Gen4 NVMe存储以获得更好的I/O性能
2. **充足的RAM**: 确保有足够的内存用于缓存（建议32-48 GB）
3. **网络带宽**: 用于同步和对等通信的稳定1+ Gbps连接
4. **CPU资源**: 用于交易验证的充足处理能力（建议8-12核）
5. **水平扩展**: 对于高流量应用，在负载均衡器后运行多个节点

## 支持

如果遇到任何问题：

- 查看[官方README](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md)获取最新更新
- 查看我们的[网络详情](/general-info/network-details)和文档
- 加入我们的[Telegram社区](https://t.me/statusl2)寻求支持

## 其他资源

- [Status Network RPC Tools仓库](https://github.com/status-im/status-l2-rpc-tools) - 包含设置指南和脚本的官方仓库
- [Status Network文档](https://docs.status.network/) - 官方文档
- [Status Network区块浏览器](https://sepoliascan.status.network) - Sepolia测试网浏览器

