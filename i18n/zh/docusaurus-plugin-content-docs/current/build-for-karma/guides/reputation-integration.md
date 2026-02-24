---
title: 声誉集成指南
description: 如何在 Status Network 上读取 Karma 层级、按声誉门控功能、以及构建 Karma 感知的智能合约和前端。
keywords: [Karma, integration, smart contract, soulbound token, reputation, tiers, gasless, Status Network, developer guide]
slug: /build-for-karma/guides/reputation-integration
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Karma 是 Status Network 的灵魂绑定声誉代币。每个地址通过真实的网络参与来赚取 Karma，例如质押 SNT、桥接资产、提供流动性、使用应用或支付高级 Gas 费用。Karma 不能被购买、出售或转让。

本指南介绍如何读取 Karma 数据以及构建响应用户声誉层级的应用。

## 链上读取 Karma

Karma 状态分布在两个合约中:

- **Karma** — 灵魂绑定 ERC-20 代币。`balanceOf` 返回扣除任何削减后的净余额。转账和授权始终会回退。
- **KarmaTiers** — 将余额映射到层级。调用 `getTierIdByKarmaBalance(balance)` 然后 `getTierById(tierId)` 来解析用户的层级及其 `txPerEpoch` 配额。

<!-- markdownlint-disable MD033 -->
<Tabs groupId="karma-reading">
  <TabItem value="solidity" label="Solidity">

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

/// @notice Minimal interface for the Karma soulbound token.
interface IKarma {
    /// @notice Net Karma balance of `account` after slashing.
    function balanceOf(address account) external view returns (uint256);

    /// @notice Total amount slashed from `account` across all distributors.
    function slashedAmountOf(address account) external view returns (uint256);
}

/// @notice Minimal interface for the KarmaTiers registry.
interface IKarmaTiers {
    struct Tier {
        uint256 minKarma;
        uint256 maxKarma;
        string  name;
        uint32  txPerEpoch; // gasless transactions allowed per epoch
    }

    /// @notice Returns the highest tier ID the given karma balance qualifies for.
    function getTierIdByKarmaBalance(uint256 karmaBalance) external view returns (uint8);

    /// @notice Returns the full Tier struct for a given tier ID.
    function getTierById(uint8 tierId) external view returns (Tier memory);

    /// @notice Returns the total number of configured tiers.
    function getTierCount() external view returns (uint256);
}

contract KarmaGated {
    IKarma      public karma;
    IKarmaTiers public karmaTiers;

    constructor(address _karmaContract, address _karmaTiersContract) {
        karma      = IKarma(_karmaContract);
        karmaTiers = IKarmaTiers(_karmaTiersContract);
    }

    /// @notice Resolves the tier ID for `user` from their current Karma balance.
    function tierIdOf(address user) public view returns (uint8) {
        return karmaTiers.getTierIdByKarmaBalance(karma.balanceOf(user));
    }

    modifier onlyTier(uint8 minTier) {
        require(tierIdOf(msg.sender) >= minTier, "Karma tier too low");
        _;
    }

    function premiumAction() external onlyTier(3) {
        // Only users at tier 3 or above can call this
    }

    function getDiscount(address user) external view returns (uint256) {
        uint8 tierId = tierIdOf(user);
        // Higher tiers get bigger discounts
        return uint256(tierId) * 5; // 0%, 5%, 10%, ...
    }
}
```

  </TabItem>
  <TabItem value="ethers" label="ethers.js">

```js
import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider(
  'https://public.sepolia.rpc.status.network'
);

const KARMA_ABI = [
  'function balanceOf(address account) view returns (uint256)',
  'function slashedAmountOf(address account) view returns (uint256)',
];

const KARMA_TIERS_ABI = [
  'function getTierIdByKarmaBalance(uint256 karmaBalance) view returns (uint8)',
  'function getTierById(uint8 tierId) view returns (tuple(uint256 minKarma, uint256 maxKarma, string name, uint32 txPerEpoch))',
  'function getTierCount() view returns (uint256)',
];

const karma      = new ethers.Contract(KARMA_ADDRESS,       KARMA_ABI,       provider);
const karmaTiers = new ethers.Contract(KARMA_TIERS_ADDRESS, KARMA_TIERS_ABI, provider);

// 读取用户的 Karma 余额并解析其层级
const balance = await karma.balanceOf(userAddress);
const tierId  = await karmaTiers.getTierIdByKarmaBalance(balance);
const tier    = await karmaTiers.getTierById(tierId);

console.log(`Karma 余额:       ${ethers.formatEther(balance)} KARMA`);
console.log(`层级:              ${tier.name} (ID ${tierId})`);
console.log(`每周期交易配额:     ${tier.txPerEpoch}`);
```

  </TabItem>
  <TabItem value="viem" label="viem">

```ts
import { createPublicClient, http } from 'viem';

const client = createPublicClient({
  transport: http('https://public.sepolia.rpc.status.network'),
});

const karmaAbi = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs:  [{ name: 'account', type: 'address' }],
    outputs: [{ name: '',        type: 'uint256' }],
  },
  {
    name: 'slashedAmountOf',
    type: 'function',
    stateMutability: 'view',
    inputs:  [{ name: 'account', type: 'address' }],
    outputs: [{ name: '',        type: 'uint256' }],
  },
] as const;

const karmaTiersAbi = [
  {
    name: 'getTierIdByKarmaBalance',
    type: 'function',
    stateMutability: 'view',
    inputs:  [{ name: 'karmaBalance', type: 'uint256' }],
    outputs: [{ name: '',             type: 'uint8'   }],
  },
  {
    name: 'getTierById',
    type: 'function',
    stateMutability: 'view',
    inputs:  [{ name: 'tierId', type: 'uint8' }],
    outputs: [{
      name: 'tier',
      type: 'tuple',
      components: [
        { name: 'minKarma',   type: 'uint256' },
        { name: 'maxKarma',   type: 'uint256' },
        { name: 'name',       type: 'string'  },
        { name: 'txPerEpoch', type: 'uint32'  },
      ],
    }],
  },
] as const;

// 两次顺序读取: 余额 → 层级 ID → 层级详情
const balance = await client.readContract({
  address: KARMA_ADDRESS,
  abi:     karmaAbi,
  functionName: 'balanceOf',
  args: [userAddress],
});

const tierId = await client.readContract({
  address: KARMA_TIERS_ADDRESS,
  abi:     karmaTiersAbi,
  functionName: 'getTierIdByKarmaBalance',
  args: [balance],
});

const tier = await client.readContract({
  address: KARMA_TIERS_ADDRESS,
  abi:     karmaTiersAbi,
  functionName: 'getTierById',
  args: [tierId],
});

console.log(`层级:              ${tier.name} (ID ${tierId})`);
console.log(`每周期交易配额:     ${tier.txPerEpoch}`);
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

:::note 合约地址
Karma 和 KarmaTiers 的测试网合约地址发布在[合约地址](/overview/general-info/contract-addresses/testnet-contracts)页面。
:::

## 可能的集成模式

### 功能门控

基于 Karma 层级解锁功能。[链上读取 Karma](#链上读取-karma) 部分中的 `onlyTier` 修饰器在合约层面强制执行访问控制:

<!-- markdownlint-disable MD033 -->
<Tabs groupId="karma-gating">
  <TabItem value="solidity" label="Solidity">

```solidity
function accessPremiumContent() external onlyTier(3) {
    // Only users at tier 3 or above can call this
}
```

  </TabItem>
  <TabItem value="ethers" label="ethers.js">

```js
// 从 Karma 余额解析层级，然后门控 UI 功能
const balance = await karma.balanceOf(userAddress);
const tierId  = await karmaTiers.getTierIdByKarmaBalance(balance);

if (tierId >= 3) {
  showPremiumFeatures();
} else {
  showUpgradePrompt(tierId);
}
```

  </TabItem>
  <TabItem value="viem" label="viem">

```ts
const balance = await client.readContract({
  address: KARMA_ADDRESS,
  abi:     karmaAbi,
  functionName: 'balanceOf',
  args: [userAddress],
});

const tierId = await client.readContract({
  address: KARMA_TIERS_ADDRESS,
  abi:     karmaTiersAbi,
  functionName: 'getTierIdByKarmaBalance',
  args: [balance],
});

if (tierId >= 3) {
  showPremiumFeatures();
} else {
  showUpgradePrompt(tierId);
}
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### 动态定价

为高 Karma 用户提供折扣或更优惠的费率:

<!-- markdownlint-disable MD033 -->
<Tabs groupId="karma-pricing">
  <TabItem value="solidity" label="Solidity">

```solidity
function calculateFee(address user, uint256 baseAmount) public view returns (uint256) {
    uint8 tierId = karmaTiers.getTierIdByKarmaBalance(karma.balanceOf(user));
    // Each tier gives 5% discount
    uint256 discount = uint256(tierId) * 5;
    return baseAmount * (100 - discount) / 100;
}
```

  </TabItem>
  <TabItem value="ethers" label="ethers.js">

```js
// 从用户当前层级在客户端计算折扣费用
const balance  = await karma.balanceOf(userAddress);
const tierId   = await karmaTiers.getTierIdByKarmaBalance(balance);

const discount = BigInt(tierId) * 5n;                        // 每层 5% 折扣
const fee      = baseAmount * (100n - discount) / 100n;

console.log(`层级 ${tierId}: ${discount}% 折扣 → 费用 = ${fee}`);
```

  </TabItem>
  <TabItem value="viem" label="viem">

```ts
const balance = await client.readContract({
  address: KARMA_ADDRESS,
  abi:     karmaAbi,
  functionName: 'balanceOf',
  args: [userAddress],
});

const tierId = await client.readContract({
  address: KARMA_TIERS_ADDRESS,
  abi:     karmaTiersAbi,
  functionName: 'getTierIdByKarmaBalance',
  args: [balance],
});

const discount = BigInt(tierId) * 5n;                        // 每层 5% 折扣
const fee      = baseAmount * (100n - discount) / 100n;

console.log(`层级 ${tierId}: ${discount}% 折扣 → 费用 = ${fee}`);
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### 声誉展示

通过直接从 `KarmaTiers` 合约读取名称，在 UI 中将 Karma 层级显示为信任信号:

<!-- markdownlint-disable MD033 -->
<Tabs groupId="karma-display">
  <TabItem value="ethers" label="ethers.js">

```js
// 从链上获取层级名称 — 无需硬编码数组
const balance = await karma.balanceOf(userAddress);
const tierId  = await karmaTiers.getTierIdByKarmaBalance(balance);
const tier    = await karmaTiers.getTierById(tierId);

function KarmaBadge({ tierName }) {
  return <span className="karma-badge">{tierName}</span>;
}

// 使用
<KarmaBadge tierName={tier.name} />
```

  </TabItem>
  <TabItem value="viem" label="viem">

```ts
const balance = await client.readContract({
  address: KARMA_ADDRESS,
  abi:     karmaAbi,
  functionName: 'balanceOf',
  args: [userAddress],
});

const tierId = await client.readContract({
  address: KARMA_TIERS_ADDRESS,
  abi:     karmaTiersAbi,
  functionName: 'getTierIdByKarmaBalance',
  args: [balance],
});

const tier = await client.readContract({
  address: KARMA_TIERS_ADDRESS,
  abi:     karmaTiersAbi,
  functionName: 'getTierById',
  args: [tierId],
});

function KarmaBadge({ tierName }: { tierName: string }) {
  return <span className="karma-badge">{tierName}</span>;
}

// 使用
<KarmaBadge tierName={tier.name} />
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### 加权治理

在应用的治理中使用 Karma 进行投票加权:

<!-- markdownlint-disable MD033 -->
<Tabs groupId="karma-governance">
  <TabItem value="solidity" label="Solidity">

```solidity
function vote(uint256 proposalId, bool support) external {
    uint256 weight = karma.balanceOf(msg.sender);
    proposals[proposalId].votes += support ? int256(weight) : -int256(weight);
}
```

  </TabItem>
  <TabItem value="ethers" label="ethers.js">

```js
// 读取用户的 Karma 余额作为投票权重，然后提交
const weight = await karma.balanceOf(userAddress);
console.log(`投票权重: ${ethers.formatEther(weight)} KARMA`);

// 调用您的治理合约
const tx = await governanceContract.vote(proposalId, support);
await tx.wait();
```

  </TabItem>
  <TabItem value="viem" label="viem">

```ts
import { formatEther, parseAbi } from 'viem';

// 从 Karma 余额读取投票权重
const weight = await client.readContract({
  address: KARMA_ADDRESS,
  abi:     karmaAbi,
  functionName: 'balanceOf',
  args: [userAddress],
});
console.log(`投票权重: ${formatEther(weight)} KARMA`);

// 通过治理合约提交投票
const { request } = await client.simulateContract({
  address: GOVERNANCE_ADDRESS,
  abi:     parseAbi(['function vote(uint256 proposalId, bool support) external']),
  functionName: 'vote',
  args: [proposalId, support],
  account: userAddress,
});
await walletClient.writeContract(request);
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

## 下一步

- 参阅[无 Gas 集成](/build-for-karma/guides/gasless-integration)了解如何在无 Gas 交易中集成 Karma
- 查看[因果代币经济学](/overview/tokenomics/karmic-tokenomics)了解 Karma 的获取和使用机制
- 前往[无 Gas 交易](/overview/general-info/gasless-transactions)了解基于 RLN 的无 Gas 系统的技术细节
