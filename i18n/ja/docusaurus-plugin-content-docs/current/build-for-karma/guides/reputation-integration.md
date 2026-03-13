---
title: レピュテーション統合ガイド
description: Status NetworkでKarmaティアを読み取り、レピュテーションで機能をゲーティングし、Karma対応のスマートコントラクトとフロントエンドを構築する方法。
keywords: [Karma, integration, smart contract, soulbound token, reputation, tiers, gasless, Status Network, developer guide]
slug: /build-for-karma/guides/reputation-integration
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

KarmaはStatus Networkのソウルバウンドレピュテーショントークンです。すべてのアドレスは、SNTステーキング、アセットのブリッジ、流動性提供、アプリの使用、プレミアムガス手数料の支払いなど、ネットワークへの真正な参加を通じてKarmaを獲得します。Karmaは購入、売却、転送することができません。

このガイドでは、Karmaデータの読み取り方法と、ユーザーのレピュテーションティアに応じたアプリの構築方法を説明します。

## オンチェーンでのKarma読み取り

Karmaの状態は2つのコントラクトに分かれています:

- **Karma** — ソウルバウンドERC-20トークン。`balanceOf`はスラッシング後の純残高を返します。転送と承認は常にリバートします。
- **KarmaTiers** — 残高をティアにマッピングします。`getTierIdByKarmaBalance(balance)`を呼び出してから`getTierById(tierId)`を呼び出し、ユーザーのティアとその`txPerEpoch`クォータを解決します。

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

// ユーザーのKarma残高を読み取り、ティアを解決
const balance = await karma.balanceOf(userAddress);
const tierId  = await karmaTiers.getTierIdByKarmaBalance(balance);
const tier    = await karmaTiers.getTierById(tierId);

console.log(`Karma残高:          ${ethers.formatEther(balance)} KARMA`);
console.log(`ティア:             ${tier.name} (ID ${tierId})`);
console.log(`エポックあたりのTx: ${tier.txPerEpoch}`);
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

// 2回の順次読み取り: 残高 → ティアID → ティア詳細
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

console.log(`ティア:             ${tier.name} (ID ${tierId})`);
console.log(`エポックあたりのTx: ${tier.txPerEpoch}`);
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

:::note コントラクトアドレス
KarmaとKarmaTiersのテストネットコントラクトアドレスは[コントラクトアドレス](/overview/general-info/contract-addresses/testnet-contracts)ページに掲載されています。
:::

## 考えられる統合パターン

### 機能ゲーティング

Karmaティアに基づいて機能をアンロックします。[オンチェーンでのKarma読み取り](#オンチェーンでのkarma読み取り)セクションの`onlyTier`モディファイアがコントラクトレベルでアクセスを制御します:

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
// Karma残高からティアを解決し、UI機能をゲーティング
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

### ダイナミックプライシング

高Karmaユーザーに割引やより良いレートを提供します:

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
// ユーザーの現在のティアからクライアント側で割引手数料を計算
const balance  = await karma.balanceOf(userAddress);
const tierId   = await karmaTiers.getTierIdByKarmaBalance(balance);

const discount = BigInt(tierId) * 5n;                        // ティアごとに5%割引
const fee      = baseAmount * (100n - discount) / 100n;

console.log(`ティア ${tierId}: ${discount}% 割引 → 手数料 = ${fee}`);
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

const discount = BigInt(tierId) * 5n;                        // ティアごとに5%割引
const fee      = baseAmount * (100n - discount) / 100n;

console.log(`ティア ${tierId}: ${discount}% 割引 → 手数料 = ${fee}`);
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### レピュテーション表示

`KarmaTiers`コントラクトから直接名前を読み取って、UIにKarmaティアを信頼シグナルとして表示します:

<!-- markdownlint-disable MD033 -->
<Tabs groupId="karma-display">
  <TabItem value="ethers" label="ethers.js">

```js
// オンチェーンでティア名を取得 — ハードコードされた配列は不要
const balance = await karma.balanceOf(userAddress);
const tierId  = await karmaTiers.getTierIdByKarmaBalance(balance);
const tier    = await karmaTiers.getTierById(tierId);

function KarmaBadge({ tierName }) {
  return <span className="karma-badge">{tierName}</span>;
}

// 使用方法
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

// 使用方法
<KarmaBadge tierName={tier.name} />
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### 加重ガバナンス

アプリのガバナンスでKarmaを投票の重み付けに使用します:

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
// ユーザーのKarma残高を投票の重みとして読み取り、送信
const weight = await karma.balanceOf(userAddress);
console.log(`投票の重み: ${ethers.formatEther(weight)} KARMA`);

// ガバナンスコントラクトを呼び出し
const tx = await governanceContract.vote(proposalId, support);
await tx.wait();
```

  </TabItem>
  <TabItem value="viem" label="viem">

```ts
import { formatEther, parseAbi } from 'viem';

// Karma残高から投票の重みを読み取り
const weight = await client.readContract({
  address: KARMA_ADDRESS,
  abi:     karmaAbi,
  functionName: 'balanceOf',
  args: [userAddress],
});
console.log(`投票の重み: ${formatEther(weight)} KARMA`);

// ガバナンスコントラクトを通じて投票を送信
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

## 次のステップ

- [ガスレス統合](/build-for-karma/guides/gasless-integration)を参照して、ガスレストランザクションにKarmaを統合する方法を学ぶ
- [カルミックトークノミクス](/overview/tokenomics/karmic-tokenomics)でKarmaの獲得と使用の仕組みを確認する
- [ガスレストランザクション](/overview/general-info/gasless-transactions)でRLNベースのガスレスシステムの技術的詳細を理解する
