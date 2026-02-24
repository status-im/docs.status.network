---
title: 평판 적용 가이드
description: Status Network에서 카르마 티어를 읽고, 평판에 따라 기능을 제한하고, 카르마가 적용된 스마트 컨트랙트와 프론트엔드를 구축하는 방법.
keywords: [카르마, 적용, 스마트 컨트랙트, 소울바운드 토큰, 평판, 계층, 가스리스, 스테이터스 네트워크, 개발자 가이드]
slug: /build-for-karma/guides/reputation-integration
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

카르마는 Status Network의 소울바운드 평판 토큰입니다. 인간과 봇을 포함한 모든 이의 계정은 SNT 스테이킹, 자산 브릿징, 유동성 제공, 앱 사용, 프리미엄 가스비 지불 등 실제 네트워크 참여를 통해 카르마를 획득합니다. 카르마는 구매, 판매 또는 전송할 수 없습니다.

본 가이드는 카르마 정보를 읽고 사용자의 평판 티어에 따라 다르게 반응하는 앱을 구축하는 방법을 다룹니다.

## 온체인에서 카르마 읽기

카르마 상태는 두 개의 컨트랙트에 분산되어 있습니다:

- **Karma** — 소울바운드 ERC-20 토큰. `balanceOf`는 해당 계정의 슬래싱량이 제외된 순 잔액을 반환합니다. `transfer`나 `approve` 함수 호출은 모두 거절됩니다.
- **KarmaTiers** — 잔액에 해당하는 티어를 알려줍니다. `getTierIdByKarmaBalance(balance)`를 호출한 후 `getTierById(tierId)`를 호출하여 사용자의 티어와 `txPerEpoch` 할당량을 확인합니다.

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

// 사용자의 Karma 잔액을 읽고 티어를 확인
const balance = await karma.balanceOf(userAddress);
const tierId  = await karmaTiers.getTierIdByKarmaBalance(balance);
const tier    = await karmaTiers.getTierById(tierId);

console.log(`Karma 잔액:        ${ethers.formatEther(balance)} KARMA`);
console.log(`티어:              ${tier.name} (ID ${tierId})`);
console.log(`에폭당 Tx 할당량:   ${tier.txPerEpoch}`);
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

// 두 번의 순차 읽기: 잔액 → 티어 ID → 티어 상세
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

console.log(`티어:              ${tier.name} (ID ${tierId})`);
console.log(`에폭당 Tx 할당량:   ${tier.txPerEpoch}`);
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

:::note 컨트랙트 주소
Karma와 KarmaTiers의 테스트넷 컨트랙트 주소는 [컨트랙트 주소](/overview/general-info/contract-addresses/testnet-contracts) 페이지에 게시되어 있습니다.
:::

## 가능한 적용 패턴

### 기능 제한

앱 내 기능을 카르마 티어에 따라 잠금 해제합니다.
[온체인에서 카르마 읽기](#온체인에서-카르마-읽기) 섹션에서 확인할 수 있는 `onlyTier` modifier가 컨트랙트 레벨에서 접근을 제어합니다.
혹은 코드 내에서 `tierId`흫 활용하여 제어할 수도 있습니다:

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
// Karma 잔액에서 티어를 확인한 후 UI 기능을 제한한다
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

### 동적 가격 책정

높은 카르마 사용자에게 할인 요금을 제공합니다:

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
// 사용자의 현재 티어를 기반으로 할인율 계산
const balance  = await karma.balanceOf(userAddress);
const tierId   = await karmaTiers.getTierIdByKarmaBalance(balance);

const discount = BigInt(tierId) * 5n;                        // 티어당 5% 할인
const fee      = baseAmount * (100n - discount) / 100n;

console.log(`티어 ${tierId}: ${discount}% 할인 → 수수료 = ${fee}`);
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

const discount = BigInt(tierId) * 5n;                        // 티어당 5% 할인
const fee      = baseAmount * (100n - discount) / 100n;

console.log(`티어 ${tierId}: ${discount}% 할인 → 수수료 = ${fee}`);
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### 평판 표기

`KarmaTiers` 컨트랙트에서 직접 티어 이름을 읽어 UI에 카르마 티어를 표시, 신뢰 지표로 활용합니다:

<!-- markdownlint-disable MD033 -->
<Tabs groupId="karma-display">
  <TabItem value="ethers" label="ethers.js">

```js
// 온체인에서 티어 이름을 가져옴 — 하드코딩된 배열 불필요
const balance = await karma.balanceOf(userAddress);
const tierId  = await karmaTiers.getTierIdByKarmaBalance(balance);
const tier    = await karmaTiers.getTierById(tierId);

function KarmaBadge({ tierName }) {
  return <span className="karma-badge">{tierName}</span>;
}

// 사용
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

// 사용
<KarmaBadge tierName={tier.name} />
```

  </TabItem>
</Tabs>
<!-- markdownlint-enable MD033 -->

### 가중 거버넌스

앱의 거버넌스에서 카르마를 투표 가중치로 사용합니다:

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
// 사용자의 Karma 잔액을 투표 가중치로 읽은 후 제출
const weight = await karma.balanceOf(userAddress);
console.log(`투표 가중치: ${ethers.formatEther(weight)} KARMA`);

// 거버넌스 컨트랙트 호출
const tx = await governanceContract.vote(proposalId, support);
await tx.wait();
```

  </TabItem>
  <TabItem value="viem" label="viem">

```ts
import { formatEther, parseAbi } from 'viem';

// Karma 잔액에서 투표 가중치 읽기
const weight = await client.readContract({
  address: KARMA_ADDRESS,
  abi:     karmaAbi,
  functionName: 'balanceOf',
  args: [userAddress],
});
console.log(`투표 가중치: ${formatEther(weight)} KARMA`);

// 거버넌스 컨트랙트를 통해 투표 제출
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

## 다음 단계

- [가스리스 적용하기](/build-for-karma/guides/gasless-integration)을 참조하여 가스리스 트랜잭션에 카르마 적용하기
- [카르마 토크노믹스](/overview/tokenomics/karmic-tokenomics)에서 카르마가 어떻게 획득되고 사용되는지 확인하기
- [가스리스 트랜잭션](/overview/general-info/gasless-transactions)에서 RLN 기반 가스리스 시스템의 기술적 세부사항 알아보기
