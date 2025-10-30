---
title: Running Your Own RPC Node
description: Complete guide to setting up and running your own RPC node for Status Network using the official RPC tools. Learn about node setup, configuration, and maintenance.
keywords: [RPC node, Status Network RPC, blockchain node, self-hosted RPC, network infrastructure, Status L2 RPC tools]
---

# Running Your Own RPC Node

This tutorial will guide you through the process of setting up and running your own Remote Procedure Call (RPC) node for Status Network. By running your own RPC node, you can gain greater control over your interactions with the Status Network, enhance privacy, and reduce reliance on third-party services.

## Getting Started

The [Status Network RPC Tools repository](https://github.com/status-im/status-l2-rpc-tools) provides all the necessary tooling, genesis files, and setup scripts to run your own RPC node.

### Complete Setup Guide
For detailed setup instructions, prerequisites, system requirements, and step-by-step guidance, please refer to the **[official README](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md)** in the repository.

## Node Options

The setup script provides two node implementations to choose from:

- **Besu Node**: Runs on port `8545` (http://localhost:8545)
- **Geth Node**: Runs on port `8645` (http://localhost:8645)

You can run either one or both simultaneously depending on your needs.

## Verifying Your Node

Once your node is running, verify it's working correctly:

```bash
# For Besu (port 8545)
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  http://localhost:8545

# For Geth (port 8645)
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
  http://localhost:8645
```

You should receive a response with the current block number if your node is running properly.

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Check what's using port 8545 (Besu) or 8645 (Geth)
   lsof -i :8545
   lsof -i :8645
   
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
   - Ensure the RPC ports (8545, 8645) are accessible
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
netstat -tulpn | grep :8645
```

## Security Considerations

When running your own RPC node:

1. **Firewall Configuration**: Only expose necessary ports
2. **Access Control**: Consider implementing authentication for production use
3. **Regular Updates**: Keep your node software updated
4. **Backup**: Regularly backup your node data and configuration

## Performance Optimization

To optimize your RPC node performance:

1. **SSD Storage**: Use SSD storage for better I/O performance
2. **Sufficient RAM**: Ensure adequate memory for caching
3. **Network Bandwidth**: Stable internet connection for syncing
4. **CPU Resources**: Adequate processing power for transaction validation

## Support

If you encounter any issues:

- Check the [official README](https://github.com/status-im/status-l2-rpc-tools/blob/master/README.md) for the latest updates
- Review our [Network Details](/general-info/network-details) and docs in general
- Join our [Telegram Community](https://t.me/statusl2) for support

## Additional Resources

- [Status Network RPC Tools Repository](https://github.com/status-im/status-l2-rpc-tools) - Official repository with setup guide and scripts
- [Status Network Documentation](https://docs.status.network/) - Official docs
- [Status Network Block Explorer](https://sepoliascan.status.network) - Sepolia testnet explorer
