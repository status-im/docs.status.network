---
title: Why Build on Status Network
description: The case for building on Status Network — gasless transactions, Karma reputation, sustainable public funding, and how it compares to other L2s.
keywords: [Status Network, why build, L2 comparison, gasless, Karma, public funding, developer advantages, Linea zkEVM]
sidebar_position: 2
---

There are dozens of L2s to choose from. Here's why Status Network is worth your attention.

<div className="comparison-grid">
  <a className="comparison-row-link" href="#sustainable-public-funding">
    <div className="comparison-row">
      <div className="comparison-label">Dev Funding</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>Continuous revenue pool that scales with your app's traction</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">Typical L2</div>
          <p>One-time grants you re-apply for every few months</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#gasless-by-default">
    <div className="comparison-row">
      <div className="comparison-label">Gas for Users</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>Free with Karma — no paymaster, no relayer, no account abstraction setup</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">Typical L2</div>
          <p>Users pay gas, or devs run paymaster + relayer infrastructure</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#built-in-reputation-with-karma">
    <div className="comparison-row">
      <div className="comparison-label">User Reputation</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>Network-wide reputation system through Karma — spam resistance, trust signals, feature gating</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">Typical L2</div>
          <p>None — build your own or integrate third-party solutions</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#privacy-focused-civil-goods">
    <div className="comparison-row">
      <div className="comparison-label">Privacy</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>Native ZK-based tooling —  Rate Limiting Nullifiers and more</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">Typical L2</div>
          <p>Third-party integrations</p>
        </div>
      </div>
    </div>
  </a>
</div>

## Sustainable Public Funding

Status Network doesn't rely on one-time grants or foundation treasuries. Instead, it has a continuous public funding pool fed by:

- **Native yield** from bridged yield-bearing assets (initially ETH and stablecoins)
- **DEX fees** from the native decentralized exchange
- **Premium gas fees** from deny-listed users
- **Future native app fees** (lending, NFT, launchpad, etc.)

Read more → [Economic Model](/overview/tokenomics/economic-model)

Karma holders vote on how this public funding pool is distributed to apps and builders. The more your app contributes to the network by generating activity and transaction volume, the more Karma you and your users earn, and the more influence you have over future allocations.

**What this means for builders:**

- Not just a one-time grant you have to re-apply for every few months, but a recurring revenue stream
- Funding scales with your app's traction — more users, more Karma, more incentives for you
- Community-governed allocation, no foundation gatekeeping

Read more → [Public Funding](/overview/tokenomics/public-funding)

## Gasless by Default

On most chains, "gasless" means setting up a paymaster, running a relayer, or integrating an account abstraction SDK. On Status Network, gasless is the default behavior.

Every address with a positive Karma balance gets a free transaction quota. No paymasters. No relayers. No special wallet configuration. Your app just works without gas fees for eligible users.

**What this means for builders:**

- No UX friction from gas. Your onboarding funnel doesn't lose users at the "bridge some ETH for gas" step
- No need to integrate ERC-4337, meta-transactions, or gas relay patterns
- No infrastructure cost for sponsoring gas on behalf of users

The gasless system is enforced at the sequencer level via [Rate Limiting Nullifiers (RLN)](/overview/general-info/gasless-transactions/#rln), a zero-knowledge spam prevention mechanism.

## Built-in Reputation with Karma

Karma is a soulbound (non-transferable) token that every user earns through genuine network participation such as staking, bridging, providing liquidity, using apps, or paying premium gas. It cannot be bought or transferred.

**What this means for builders:**

- **Trust signal**: High-Karma users are verified active participants, not airdrop farmers or sybils
- **Feature gating**: Builders could gate their features such as premium features, priority access, or better rates based on user Karma tiers
- **Spam resistance**: The network itself is gating spams with RLN mechanism and Karma tiers directly control gasless transaction quotas, meaning high-Karma users are inherently less likely to spam
- **No cold start problem**: Your app benefits from reputation built network-wide in the ecosystem

Read more → [Karmic Tokenomics](/overview/tokenomics/karmic-tokenomics)

## Privacy Focused Civil Goods

Status Network is built with technology from the [Institute of Free Technology (IFT)](https://free.technology). Most notably, the gasless transaction system uses [RLN (Rate Limiting Nullifiers)](https://vac.dev/rln), a zero-knowledge spam prevention mechanism developed by [Vac](https://vac.dev), an IFT research division.

We align with IFT's vision in technology to build public goods to safegauard civil liberties in the digital age. Status Network will add on privacy focused modules leveraging our gaslessness.

Read more → [Status Network and Privacy](/overview/general-info/privacy)

## Full EVM Equivalence

Status Network is built on the [Linea zkEVM](https://linea.build) stack. This means builders can:

- Deploy existing Solidity contracts without modification
- Use standard Ethereum tooling like Hardhat, Foundry, ethers.js, viem, etc.
- use standard JSON-RPC methods (except for some methods related to gas fee. Refer to [JSON-RPC API](/build-for-karma/rpc/json-rpc/) for more information.)
- Zero-knowledge proof-based security inherited from Linea's rollup architecture

No custom VM. No non-standard opcodes. No rewriting your contracts or backends.
