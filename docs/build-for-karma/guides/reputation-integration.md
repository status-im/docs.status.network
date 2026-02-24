---
title: Reputation Integration Guide
description: How to read Karma tiers, gate features by reputation, and build Karma-aware smart contracts and frontends on Status Network.
keywords: [Karma, integration, smart contract, soulbound token, reputation, tiers, gasless, Status Network, developer guide]
slug: /build-for-karma/guides/reputation-integration
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Karma is Status Network's soulbound reputation token. Every address earns Karma through genuine network participation such as staking SNT, bridging assets, providing liquidity, using apps, or paying premium gas fees. Karma cannot be bought, sold, or transferred.

This guide covers how to read Karma data and build apps that respond to a user's reputation tier.

## Reading Karma On-Chain

Karma state is split across two contracts:

- **Karma** — the soulbound ERC-20 token. `balanceOf` returns the net balance after any slashing. Transfers and approvals always revert.
- **KarmaTiers** — maps balances to tiers. Call `getTierIdByKarmaBalance(balance)` then `getTierById(tierId)` to resolve a user's tier and its `txPerEpoch` quota.

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

// Read a user's Karma balance and resolve their tier
const balance = await karma.balanceOf(userAddress);
const tierId  = await karmaTiers.getTierIdByKarmaBalance(balance);
const tier    = await karmaTiers.getTierById(tierId);

console.log(`Karma balance:      ${ethers.formatEther(balance)} KARMA`);
console.log(`Tier:               ${tier.name} (ID ${tierId})`);
console.log(`Tx quota per epoch: ${tier.txPerEpoch}`);
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

// Two sequential reads: balance → tier ID → tier details
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

console.log(`Tier:               ${tier.name} (ID ${tierId})`);
console.log(`Tx quota per epoch: ${tier.txPerEpoch}`);
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

:::note Contract Addresses
Karma and KarmaTiers contract addresses for testnet are published on the [Contract Addresses](/overview/general-info/contract-addresses/testnet-contracts) page.
:::

## Common Integration Patterns

### Feature Gating

Unlock features based on Karma tier. The `onlyTier` modifier from the [Reading Karma On-Chain](#reading-karma-on-chain) section enforces access at the contract level:

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
// Resolve tier from Karma balance, then gate UI features
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

### Dynamic Pricing

Offer discounts or better rates to high-Karma users:

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
// Compute the discounted fee client-side from the user's current tier
const balance  = await karma.balanceOf(userAddress);
const tierId   = await karmaTiers.getTierIdByKarmaBalance(balance);

const discount = BigInt(tierId) * 5n;                        // 5% per tier
const fee      = baseAmount * (100n - discount) / 100n;

console.log(`Tier ${tierId}: ${discount}% discount → fee = ${fee}`);
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

const discount = BigInt(tierId) * 5n;                        // 5% per tier
const fee      = baseAmount * (100n - discount) / 100n;

console.log(`Tier ${tierId}: ${discount}% discount → fee = ${fee}`);
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### Reputation Display

Show Karma tier as a trust signal in your UI by reading the name directly from the `KarmaTiers` contract:

<!-- markdownlint-disable MD033 -->
<Tabs groupId="karma-display">
  <TabItem value="ethers" label="ethers.js">

```js
// Fetch tier name on-chain — no hardcoded array needed
const balance = await karma.balanceOf(userAddress);
const tierId  = await karmaTiers.getTierIdByKarmaBalance(balance);
const tier    = await karmaTiers.getTierById(tierId);

function KarmaBadge({ tierName }) {
  return <span className="karma-badge">{tierName}</span>;
}

// Usage
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

// Usage
<KarmaBadge tierName={tier.name} />
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### Weighted Governance

Use Karma for vote weighting in your app's governance:

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
// Read the user's Karma balance as their vote weight, then submit
const weight = await karma.balanceOf(userAddress);
console.log(`Voting with weight: ${ethers.formatEther(weight)} KARMA`);

// Call your governance contract
const tx = await governanceContract.vote(proposalId, support);
await tx.wait();
```

  </TabItem>
  <TabItem value="viem" label="viem">

```ts
import { formatEther, parseAbi } from 'viem';

// Read vote weight from Karma balance
const weight = await client.readContract({
  address: KARMA_ADDRESS,
  abi:     karmaAbi,
  functionName: 'balanceOf',
  args: [userAddress],
});
console.log(`Voting with weight: ${formatEther(weight)} KARMA`);

// Submit vote via your governance contract
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

## Next Steps

- Refer to [Gasless Integration](/build-for-karma/guides/gasless-integration) to integrate Karma in making gasless transaction
- Check out [Karmic Tokenomics](/overview/tokenomics/karmic-tokenomics) to see a breakdown of how Karma is earned and used
- Go to [Gasless Transactions](/overview/general-info/gasless-transactions) to understand the technical details of the RLN-based gasless system
