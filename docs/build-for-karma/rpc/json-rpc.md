---
title: JSON-RPC API
description: Status Network JSON-RPC API notes for builders, including the Karma-aware linea_estimateGas method.
keywords:
  [
    Status Network,
    JSON-RPC,
    Linea,
    EIP-1559,
    eth_estimateGas,
    linea_estimateGas,
    Karma,
    gasless,
  ]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Status Network is based on Linea zkEVM, meaning **most JSON-RPC methods behave exactly like a standard EVM node**.
For the canonical list of supported methods and their standard semantics, refer to the [Linea JSON-RPC API reference](https://docs.linea.build/api/reference).

## The important difference: `linea_estimateGas`

Status Network customizes `linea_estimateGas` to make gas estimation incorporate our **Karma** system.
Status Network requires a fundamentally different approach to gas estimation than other EVM chains (including Linea) due to its gaslessness.
This is why we’ve customized how `linea_estimateGas` works and builders **must use `linea_estimateGas` instead of `eth_estimateGas`** when estimating fees for end-user transactions on Status Network.

:::info
For a detailed explanation of Karma and its impact on gas fees and transaction privileges, see the [Karmic Tokenomics](../../overview/tokenomics/karmic-tokenomics) page.

For the technical details of how our gasless system is implemented and enforced, refer to the [Gasless Transactions](../../overview/general-info/gasless-transactions) documentation.
:::

### Status Network changes to `linea_estimateGas`

Status Network extends `linea_estimateGas` with Karma-aware behavior so the estimate can depend on the sender address `from`'s Karma balance.

Concretely, Status Network’s `linea_estimateGas`:

- **Applies deny-list premium estimation**: if the sender is on the deny list, the node computes a normal estimate and then applies a premium multiplier to the gas estimation.
- **Returns gasless estimates for eligible users**: if the sender has available Karma quota, the method returns a “gasless” estimate (zero fee fields).

The above logic lives in our modified `LineaEstimateGas` implementation open-sourced around [this section in the Status Network monorepo](https://github.com/status-im/status-network-monorepo/blob/v1.0.1/besu-plugins/linea-sequencer/sequencer/src/main/java/net/consensys/linea/rpc/methods/LineaEstimateGas.java#L218).

### `linea_estimateGas` vs `eth_estimateGas`

In addition to Status Network’s Karma-aware behavior, `linea_estimateGas` differs from `eth_estimateGas` in the same way it does on Linea.
See [Linea’s reference](https://docs.linea.build/api/reference/linea-estimategas) for details on the differences.

If you keep using `eth_estimateGas` on Status Network, common failure modes include:

- Your app may display and request fees for a user who should be gasless.
- Your app may underestimate cost for a user who is temporarily forced into premium pricing, resulting in reverted transactions.

## `linea_estimateGas` request/response shape

### Request

`linea_estimateGas` takes the **same primary transaction call object** you pass to `eth_estimateGas`.

:::important
**Always include `from`.** Without it, the node can’t apply Karma/quota/deny-list logic.
:::

### Response

Unlike `eth_estimateGas` which returns a single hex quantity value of `gasLimit`, `linea_estimateGas` returns an object including:

- `gasLimit`: hex quantity (estimated gas limit to use)
- `baseFeePerGas`: hex quantity (base fee for the next block)
- `priorityFeePerGas`: hex quantity (suggested priority fee)

<!-- markdownlint-disable MD033 -->
<Tabs groupId="estimate-gas-response-shape">
  <TabItem value="eth" label="eth_estimateGas">

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x5208"
}
```

  </TabItem>
  <TabItem value="linea" label="linea_estimateGas">

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "gasLimit": "0x5208",
    "baseFeePerGas": "0x3b9aca00",
    "priorityFeePerGas": "0x59682f00"
  }
}
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

## Migration guide from EIP-1559 estimation flow to Status Network's gas estimation flow

This section shows how to migrate from the common “EIP‑1559 via `eth_` methods” flow to Status Network’s Karma-aware flow.

### Before: common EIP-1559 estimation flow on EVM chains using `eth_` namespaces

On many EVM chains, a typical EIP-1559 estimation flow looks like:

1. **Estimate gas limit** via `eth_estimateGas`
2. **Fetch `maxPriorityFeePerGas`** via `eth_maxPriorityFeePerGas` and/or `eth_feeHistory`
3. **Fetch `baseFeePerGas`** via `eth_getBlockByNumber`
4. Build an EIP-1559 transaction using:
   - `gas`
   - `maxPriorityFeePerGas`
   - `maxFeePerGas`, often $2 \cdot \mathrm{baseFeePerGas} + \mathrm{maxPriorityFeePerGas}$

<!-- markdownlint-disable MD033 -->
<Tabs groupId="eip1559-estimation-before">
  <TabItem value="curl" label="curl">

```bash
# 1) Gas limit (EVM execution)
curl -X POST -H "Content-Type: application/json" \
  --data '{
    "jsonrpc":"2.0",
    "id":1,
    "method":"eth_estimateGas",
    "params":[{
      "from":"0xYOUR_SENDER",
      "to":"0xCONTRACT_OR_RECIPIENT",
      "data":"0xYOUR_CALLDATA",
      "value":"0x0"
    }]
  }' \
  https://YOUR_RPC_URL

# 2) Fetch suggested tip amount
curl -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","id":2,"method":"eth_maxPriorityFeePerGas","params":[]}' \
  https://YOUR_RPC_URL

# 3) Fetch base fee
curl -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","id":3,"method":"eth_getBlockByNumber","params":["pending",false]}' \
  https://YOUR_RPC_URL
```

  </TabItem>
  <TabItem value="ethers" label="ethers.js">

```js
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://YOUR_RPC_URL');

const call = {
  from: '0xYOUR_SENDER',
  to: '0xCONTRACT_OR_RECIPIENT',
  data: '0xYOUR_CALLDATA',
  value: '0x0',
};

const gas = await provider.estimateGas(call);
const maxPriorityFeePerGas = await provider.send('eth_maxPriorityFeePerGas', []);
const pendingBlock = await provider.getBlock('pending');

const baseFeePerGas = pendingBlock?.baseFeePerGas ?? 0n;
const maxFeePerGas = 2n * baseFeePerGas + BigInt(maxPriorityFeePerGas);

console.log({
  gas: `0x${gas.toString(16)}`,
  maxPriorityFeePerGas,
  maxFeePerGas: `0x${maxFeePerGas.toString(16)}`,
});
```

  </TabItem>
  <TabItem value="viem" label="viem">

```js
import { createPublicClient, http } from 'viem';

const client = createPublicClient({
  transport: http('https://YOUR_RPC_URL'),
});

const call = {
  account: '0xYOUR_SENDER',
  to: '0xCONTRACT_OR_RECIPIENT',
  data: '0xYOUR_CALLDATA',
  value: 0n,
};

const gas = await client.estimateGas(call);
const maxPriorityFeePerGas = await client.getMaxPriorityFeePerGas();
const pendingBlock = await client.getBlock({ blockTag: 'pending' });

const baseFeePerGas = pendingBlock.baseFeePerGas ?? 0n;
const maxFeePerGas = 2n * baseFeePerGas + maxPriorityFeePerGas;

console.log({
  gas,
  maxPriorityFeePerGas,
  maxFeePerGas,
});
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### After: Status Network gas estimation flow using `linea_estimateGas`

On Status Network, you should **replace the above multiple RPC calls with a single call** to `linea_estimateGas`, because the correct estimate depends on Karma:

- accounts may be eligible for **gasless** transactions
- deny-listed accounts may need to pay a **premium gas fee**

<!-- markdownlint-disable MD033 -->
<Tabs groupId="linea-estimate-gas-request">
  <TabItem value="curl" label="curl">

```bash
curl -X POST -H "Content-Type: application/json" \
  --data '{
    "jsonrpc":"2.0",
    "id":1,
    "method":"linea_estimateGas",
    "params":[{
      "from":"0xYOUR_SENDER",
      "to":"0xCONTRACT_OR_RECIPIENT",
      "data":"0xYOUR_CALLDATA",
      "value":"0x0"
    }]
  }' \
  https://YOUR_STATUS_NETWORK_RPC_URL
```

  </TabItem>
  <TabItem value="ethers" label="ethers.js">

```js
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://YOUR_STATUS_NETWORK_RPC_URL');

const call = {
  from: '0xYOUR_SENDER',
  to: '0xCONTRACT_OR_RECIPIENT',
  data: '0xYOUR_CALLDATA',
  value: '0x0',
};

const { gasLimit, baseFeePerGas, priorityFeePerGas } = await provider.send(
  'linea_estimateGas',
  [call],
);

const maxFeePerGas =
  BigInt(baseFeePerGas) + BigInt(priorityFeePerGas);

console.log({
  gas: gasLimit,
  maxPriorityFeePerGas: priorityFeePerGas,
  maxFeePerGas: `0x${maxFeePerGas.toString(16)}`,
});
```

  </TabItem>
  <TabItem value="viem" label="viem">

```js
import { createPublicClient, http } from 'viem';

const client = createPublicClient({
  transport: http('https://YOUR_STATUS_NETWORK_RPC_URL'),
});

const call = {
  from: '0xYOUR_SENDER',
  to: '0xCONTRACT_OR_RECIPIENT',
  data: '0xYOUR_CALLDATA',
  value: '0x0',
};

const { gasLimit, baseFeePerGas, priorityFeePerGas } = await client.request({
  method: 'linea_estimateGas',
  params: [call],
});

const maxFeePerGas =
  BigInt(baseFeePerGas) + BigInt(priorityFeePerGas);

console.log({
  gas: gasLimit,
  maxPriorityFeePerGas: priorityFeePerGas,
  maxFeePerGas: `0x${maxFeePerGas.toString(16)}`,
});
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

:::tip Tooling integration
Many Ethereum libraries default to `eth_estimateGas` internally (for example, `provider.estimateGas(...)`). On Status Network, keep using those libraries for standard `eth_` methods, but **fetch estimates via `linea_estimateGas` explicitly** wherever you display fees or prefill EIP-1559 transaction fields for users.
:::
