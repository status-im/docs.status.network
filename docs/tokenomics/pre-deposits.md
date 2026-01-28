---
title: Pre-Deposits
description: Technical overview of Status Network's pre-deposit vault architecture, including Aragon-based vaults for SNT, LINEA, and ETH, and Generic Protocol integration for stablecoin deposits.
keywords: [Status Network, pre-deposits, vaults, Aragon, Generic Protocol, Karma, GUSD, stablecoin, yield, ETH, SNT, LINEA, Lido, Morpho]
---

Status Network runs a pre-deposit campaign to bootstrap liquidity and early Karma distribution ahead of mainnet. Two distinct vault systems power the campaign:

| Asset(s)                 | Vault provider   | Receipt token | Network          |
|--------------------------|------------------|---------------|------------------|
| SNT, LINEA, ETH          | Aragon           | Yes           | Ethereum / Linea |
| USDT, USDC, USDS (→GUSD) | Generic Protocol | No            | Ethereum         |

This page explains the technical architecture behind each system.

## Aragon Vaults (SNT · LINEA · ETH)

### Overview

The SNT, LINEA, and ETH vaults are smart contracts developed by [Aragon](https://aragon.org/) specifically for Status Network. The source code is publicly available:

- Repository: [aragon/status-predeposit-vaults](https://github.com/aragon/status-predeposit-vaults)
- Core contract: [`PreDepositVault.sol`](https://github.com/aragon/status-predeposit-vaults/blob/development/src/PreDepositVault.sol)

Each vault is an implementation of [ERC-4626 interface](https://ethereum.org/developers/docs/standards/tokens/erc-4626) that:

1. Accepts deposits of a single underlying asset (SNT, LINEA, or WETH).
2. Mints a **vault share token** (svSNT, svLINEA, or svWETH) upon deposit, representing the depositor's pro-rata claim.
3. Holds deposited assets until mainnet launch, at which point admin bridges them to Status Network L2.

### Yield strategy (ETH)

Deposited ETH is staked via [Lido](https://lido.fi/) to earn staking yield. A portion of the generated yield seeds Status Network's native funding pool at launch.

### Deployed contracts

See [Pre-Deposit Vault Contracts](../general-info/contract-addresses/pre-deposit) for a full list of addresses and networks.

## Generic Protocol Vault (GUSD)

GUSD is a yield-generating meta-stablecoin fully backed by USDT, USDC, and USDS, built by [Generic Protocol](https://docs.generic.money/). The GUSD infrastructure is maintained by Generic Protocol, and Status Network integrates with it via its **DepositorHelper** contract.

### Yield strategy (stablecoins)

The GUSD vault implements a multi-layered yield strategy through [Steakhouse Financial](https://steakhouse.financial/) and [Morpho](https://morpho.org/):

1. Deposited stablecoins are routed to **Generic Protocol's asset-specific vaults** (e.g., [USDC Vault](https://etherscan.io/address/0x4825eFF24F9B7b76EEAFA2ecc6A1D5dFCb3c1c3f)).
2. The vault allocates assets to **Steakhouse Financial MetaMorpho vaults** (e.g., [steakUSDC](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)).
3. Steakhouse vaults supply assets to [**Morpho lending markets**](https://etherscan.io/address/0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb), earning lending yield.

A portion of the generated yield will seed Status Network's native funding pool upon mainnet launch.

:::note
The GUSD vault does **not** issue a receipt token. Your deposit is recorded in Generic Protocol's contracts; you can verify your position by connecting your wallet on [Hub](https://hub.status.network/pre-deposits) or directly on-chain.
:::

### DepositorHelper contract

Status Network pre-deposit interacts with Generic Protocol through the DepositorHelper:
[`0x79B4cDb14A31E8B0e21C0120C409Ac14Af35f919`](https://etherscan.io/address/0x79B4cDb14A31E8B0e21C0120C409Ac14Af35f919)

### Deposit flow (GUSD)

When a user deposits USDC, USDT or USDS, the following on-chain operations occur:

1. **Approve** the DepositorHelper to spend your stablecoin.
2. **Call [`depositAndPredeposit`](https://docs.generic.money/code-ref/protocol/periphery/GenericDepositor.sol/contract.GenericDepositor#depositandpredeposit)** on the DepositorHelper, specifying asset and amount.
3. The stablecoin is transferred to the DepositorHelper.
4. [**GenericUnit**](https://etherscan.io/address/0x8c307baDbd78bEa5A1cCF9677caa58e7A2172502) shares are minted to the DepositorHelper, representing the depositor's claim on the underlying stablecoin.
5. The DepositorHelper deposits the stablecoin into the corresponding **Generic Protocol asset vault** ([USDC Vault](https://etherscan.io/address/0x4825eFF24F9B7b76EEAFA2ecc6A1D5dFCb3c1c3f), [USDT Vault](https://etherscan.io/address/0xB8280955aE7b5207AF4CDbdCd775135Bd38157fE), or [USDS Vault](https://etherscan.io/address/0x6133dA4Cd25773Ebd38542a8aCEF8F94cA89892A)).
6. The asset vault allocates to **Steakhouse Financial MetaMorpho vaults**, which supply assets to **Morpho lending markets**.
7. The **Bridge Coordinator L1** emits a `Predeposited` event, recording the pre-deposit for Status Network mainnet.
8. At mainnet launch, your deposit entitles you to GUSD on Status Network plus Karma, SNT & LINEA incentives, Generic Protocol points and potential native app points.

For a full overview of the Generic Protocol structure (GUSD tokenomics, bridging infrastructure, etc.), see [Generic Protocol documentation](https://docs.generic.money/).

## Incentives and Karma

Pre-depositors earn:

- **Karma**: non-transferable governance token; grants gasless throughput and voting power (details in [Karmic Tokenomics](./karmic-tokenomics)).
- **Liquid incentives**: 15M SNT and 20M LINEA tokens distributed across vaults.
- **Generic protocol points** for stablecoin depositors: Generic Protocol points to be used when Generic Protocol launches on Status Network Mainnet.
- **Native app points**: to be confirmed as natives apps unveil their tokenomics.

Allocation depends on:

- Time in vault
- Vault TVL

Initial Karma distribution at mainnet launch:

| Vault       | % of initial Karma |
|-------------|--------------------|
| SNT         | 25%                |
| LINEA       | 10%                |
| ETH         | 20%                |
| GUSD        | 20%                |

Native apps receive 25% of the initial Karma at mainnet launch.

## Security

- **Aragon vaults**: audited; report available in the [repo's `audit/` folder](https://github.com/aragon/status-predeposit-vaults/tree/development/audit).
- **Generic Protocol**: audited; refer to its [documentation](https://docs.generic.money/resources/audits) on its security disclosures and report details.

## Risks and considerations

Depositing into any vault involves smart contract risk, bridging risk, market risk, and protocol risk associated with any underlying yield strategy. Only deposit amounts you can afford to lock for the duration of the campaign.

Before participating, please read the [Status Network Pre-Deposit Disclaimer](https://status.network/legal/status-network-pre-deposit-disclaimer).

This documentation is for informational purposes and does not constitute financial advice.

## Further reading

- [Pre-Deposit Vault Contracts](../general-info/contract-addresses/pre-deposit) — deployed addresses information
- [Karmic Tokenomics](./karmic-tokenomics) — how Karma is earned and used
- [Economic Model](./economic-model) — Status Network's sustainable revenue model
- [Aragon Documentation](https://docs.aragon.org/)
- [Generic Protocol Documentation](https://docs.generic.money/)
