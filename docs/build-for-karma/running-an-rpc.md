---
title: Running Your Own RPC Node
description: Complete guide to setting up and running your own RPC node for Status Network using the official RPC tools. Learn about node setup, configuration, and maintenance.
keywords: [RPC node, Status Network RPC, blockchain node, WebSocket, wss, self-hosted RPC, network infrastructure, Status L2 RPC tools]
---

# Running Your Own RPC Node

This tutorial will guide you through the process of setting up and running your own Remote Procedure Call (RPC) node for Status Network. By running your own RPC node, you can gain greater control over your interactions with the Status Network, enhance privacy, and reduce reliance on third-party services.

## Getting Started

The [Status Network RPC Tools repository](https://github.com/status-im/status-l2-rpc-tools) provides all the necessary tooling, genesis files, and setup scripts to run your own RPC node.

### Complete Setup Guide
For detailed setup instructions, prerequisites, system requirements, and step-by-step guidance, please refer to the [**official README**](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md) in the repository.

## Node Options

The setup script provides two node implementations to choose from:

- **Besu Node**: Runs on port `8545` (http://localhost:8545)
- **Geth Node**: Runs on port `8445` (http://localhost:8445)

You can run either one or both simultaneously depending on your needs.

## Verifying Your Node
In the examples below, replace `<YOUR_CLIENT_PORT>` with `8545` if using Besu, or `8445` if using Geth.

### Basic Verification

Once your node is running, verify it's working correctly:

```bash
# You should receive a response with the current block number.
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

### Health & Sync Verification

For comprehensive node health checks:

```bash
# Check your node's syncing status. Returns false if the node is in sync.
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>

# Verify your node's number of connected peers (should be > 0)
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}' \
  http://localhost:<YOUR_CLIENT_PORT>
```

An up-to-date and healthy node should show:
- `eth_blockNumber` matches a trusted reference (like the public RPC or block explorer)
- `eth_syncing` returns `false` (fully synced)
- `net_peerCount` is greater than 0 (connected to peers)

## WebSocket Support

Your node also supports WebSocket connections for real-time event subscriptions:

```bash
# WebSocket endpoint
ws://localhost:8546  # Besu
ws://localhost:8446  # Geth
```

### WebSocket Connection

### Example Subscriptions

```json
// Subscribe to new block headers
{"jsonrpc":"2.0","method":"eth_subscribe","params":["newHeads"],"id":1}

// Subscribe to logs matching a filter
{"jsonrpc":"2.0","method":"eth_subscribe","params":["logs",{"address":"0x..."}],"id":1}

// Unsubscribe
{"jsonrpc":"2.0","method":"eth_unsubscribe","params":["0x..."],"id":1}
```


## Advanced Features

### Batch Requests

Your node supports batch JSON-RPC requests for improved efficiency:

- **Default batch cap**: 1,024 requests per batch
- **Configuration**: Tunable via `--rpc-http-max-batch-size` (set to `1` for unlimited)
- **Max request size**: 5 MB (default `--rpc-http-max-request-content-length`)

### Resource-Intensive Methods

Be aware of methods that may require longer response times:

| Method | Response Time | Notes |
|--------|---------------|-------|
| `eth_getLogs` (large ranges) | 200ms to several seconds | Use bounded ranges and bloom filters |
| `eth_estimateGas` | 200ms to several seconds | May be slower under load or with complex contracts |

:::tip Performance Tip
For production use, start with low-thousands read RPS and scale horizontally based on your specific workload and hardware tests.
:::

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Check what's using port 8545 (Besu) or 8445 (Geth)
   lsof -i :8545
   lsof -i :8445
   
   # Kill the process if needed
   kill -9 <PID>
   ```

2. **Docker Container Issues**
   ```bash
   # Check running containers
   docker ps
   
   # View container logs
   docker compose logs -f
   
   # Restart containers
   docker compose restart
   ```

3. **Node Not Syncing**
   - Check your internet connection
   - Verify you have sufficient disk space
   - Check the Docker container logs: `docker compose logs`
   - Ensure your system meets the minimum requirements

4. **RPC Endpoint Not Responding**
   - Verify containers are running: `docker ps`
   - Check firewall settings
   - Ensure the RPC ports (8545, 8445) are accessible
   - Review container logs for errors

### Monitoring Your Node

```bash
# Check Docker containers status
docker compose ps

# Monitor container logs
docker compose logs -f

# Monitor disk usage
df -h

# Check network connections
netstat -tulpn | grep :8545
netstat -tulpn | grep :8445
```

## Storage Planning

### Disk Space Requirements

Plan your storage capacity based on growth:

- Initial size: ~200 GB (after 6 months, ~12M transactions with 2s blocks)
- Growth rate: Moderate, depends on network activity
- Recommended: 2 TB Gen4 NVMe for headroom

:::warning Plan for Growth
Always provision extra storage capacity beyond the current requirement to ensure continued operation.
:::

## Security Considerations

When running your own RPC node:

1. **Firewall Configuration**: Only expose necessary ports (8545, 8445)
2. **Access Control**: Consider implementing authentication for production use
3. **Network Isolation**: Avoid exposing RPC endpoints directly to the internet
4. **Regular Updates**: Keep your node software and Docker images updated
5. **Backup**: Regularly backup your node configuration (data can be re-synced if needed)
6. **Rate Limiting**: Implement rate limiting if exposing to multiple users

:::caution Production Deployment
For production use, avoid relying on public RPC endpoints due to rate limits. Running your own private RPC node provides better reliability and performance.
:::

## Performance Optimization

To optimize your RPC node performance:

1. **SSD Storage**: Use Gen4 NVMe storage for better I/O performance
2. **Sufficient RAM**: Ensure adequate memory for caching (32–48 GB recommended)
3. **Network Bandwidth**: Stable 1+ Gbps connection for syncing and peer communication
4. **CPU Resources**: Adequate processing power for transaction validation (8–12 cores recommended)
5. **Horizontal Scaling**: For high-traffic applications, run multiple nodes behind a load balancer

## Support

If you encounter any issues:

- Check the [official README](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md) for the latest updates
- Review our [Network Details](/home/general-info/network-details) and docs in general
- Join our [Telegram Community](https://t.me/statusl2) for support

## Additional Resources

- [Status Network RPC Tools Repository](https://github.com/status-im/status-l2-rpc-tools) - Official repository with setup guide and scripts
- [Status Network Documentation](https://docs.status.network/) - Official docs
- [Status Network Block Explorer](https://sepoliascan.status.network) - Sepolia testnet explorer
