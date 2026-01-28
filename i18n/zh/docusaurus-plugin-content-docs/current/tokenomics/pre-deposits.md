---
title: 预存款
description: Status Network 预存款金库架构的技术概述，包括用于 SNT、LINEA 和 ETH 的 Aragon 金库，以及用于稳定币存款的 Generic Protocol 集成。
keywords: [Status Network, 预存款, 金库, Aragon, Generic Protocol, Karma, GUSD, 稳定币, 收益, ETH, SNT, LINEA, Lido, Morpho]
---

Status Network 正在主网启动前进行预存款活动，以引导流动性和早期 Karma 分配。两个不同的金库系统支持该活动：

| 资产                     | 金库提供者       | 收据代币 | 网络             |
|--------------------------|------------------|----------|------------------|
| SNT, LINEA, ETH          | Aragon           | 是       | Ethereum / Linea |
| USDT, USDC, USDS (→GUSD) | Generic Protocol | 否       | Ethereum         |

本页面解释每个系统的技术架构。

## Aragon 金库 (SNT · LINEA · ETH)

### 概述

SNT、LINEA 和 ETH 金库是 [Aragon](https://aragon.org/) 专门为 Status Network 开发的智能合约。源代码已公开：

- 代码库：[aragon/status-predeposit-vaults](https://github.com/aragon/status-predeposit-vaults)
- 核心合约：[`PreDepositVault.sol`](https://github.com/aragon/status-predeposit-vaults/blob/development/src/PreDepositVault.sol)

每个金库都实现了 [ERC-4626 接口](https://ethereum.org/developers/docs/standards/tokens/erc-4626)：

1. 接受单一基础资产（SNT、LINEA 或 WETH）的存款。
2. 存款时铸造**金库份额代币**（svSNT、svLINEA 或 svWETH），代表存款人的按比例索取权。
3. 保管存入的资产直到主网启动，届时管理员将其桥接到 Status Network L2。

### 收益策略 (ETH)

存入的 ETH 通过 [Lido](https://lido.fi/) 进行质押以获得质押收益。产生的部分收益将在启动时注入 Status Network 的原生资金池。

### 已部署合约

完整的地址和网络列表请参阅[预存款金库合约](../general-info/contract-addresses/pre-deposit)。

## Generic Protocol 金库 (GUSD)

GUSD 是由 USDT、USDC 和 USDS 完全支持的收益型元稳定币，由 [Generic Protocol](https://docs.generic.money/) 构建。GUSD 基础设施由 Generic Protocol 维护，Status Network 通过其 **DepositorHelper** 合约进行集成。

### 收益策略 (稳定币)

GUSD 金库通过 [Steakhouse Financial](https://steakhouse.financial/) 和 [Morpho](https://morpho.org/) 实现多层收益策略：

1. 存入的稳定币被路由到 **Generic Protocol 的资产特定金库**（例如 [USDC Vault](https://etherscan.io/address/0x4825eFF24F9B7b76EEAFA2ecc6A1D5dFCb3c1c3f)）。
2. 金库将资产分配给 **Steakhouse Financial MetaMorpho 金库**（例如 [steakUSDC](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)）。
3. Steakhouse 金库向 [**Morpho 借贷市场**](https://etherscan.io/address/0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb) 供应资产，获得借贷收益。

产生的部分收益将在主网启动时注入 Status Network 的原生资金池。

:::note
GUSD 金库**不**发行收据代币。您的存款记录在 Generic Protocol 的合约中；您可以在 [Hub](https://hub.status.network/pre-deposits) 连接钱包或直接在链上验证您的仓位。
:::

### DepositorHelper 合约

Status Network 预存款通过 DepositorHelper 与 Generic Protocol 交互：
[`0x79B4cDb14A31E8B0e21C0120C409Ac14Af35f919`](https://etherscan.io/address/0x79B4cDb14A31E8B0e21C0120C409Ac14Af35f919)

### 存款流程 (GUSD)

当用户存入 USDC、USDT 或 USDS 时，将执行以下链上操作：

1. **授权** DepositorHelper 使用您的稳定币。
2. 在 DepositorHelper 上**调用 [`depositAndPredeposit`](https://docs.generic.money/code-ref/protocol/periphery/GenericDepositor.sol/contract.GenericDepositor#depositandpredeposit)**，指定资产和金额。
3. 稳定币被转移到 DepositorHelper。
4. [**GenericUnit**](https://etherscan.io/address/0x8c307baDbd78bEa5A1cCF9677caa58e7A2172502) 份额被铸造给 DepositorHelper，代表存款人对基础稳定币的索取权。
5. DepositorHelper 将稳定币存入相应的 **Generic Protocol 资产金库**（[USDC Vault](https://etherscan.io/address/0x4825eFF24F9B7b76EEAFA2ecc6A1D5dFCb3c1c3f)、[USDT Vault](https://etherscan.io/address/0xB8280955aE7b5207AF4CDbdCd775135Bd38157fE) 或 [USDS Vault](https://etherscan.io/address/0x6133dA4Cd25773Ebd38542a8aCEF8F94cA89892A)）。
6. 资产金库分配给 **Steakhouse Financial MetaMorpho 金库**，后者向 **Morpho 借贷市场** 供应资产。
7. **Bridge Coordinator L1** 发出 `Predeposited` 事件，为 Status Network 主网记录预存款。
8. 主网启动时，您的存款将使您有权在 Status Network 上获得 GUSD 以及 Karma、SNT 和 LINEA 激励、Generic Protocol 积分和潜在的原生应用积分。

有关 Generic Protocol 结构（GUSD 代币经济学、桥接基础设施等）的完整概述，请参阅 [Generic Protocol 文档](https://docs.generic.money/)。

## 激励和 Karma

预存款者可获得：

- **Karma**：不可转让的治理代币；授予免 Gas 吞吐量和投票权（详见 [Karmic 代币经济学](./karmic-tokenomics)）。
- **流动性激励**：在所有金库中分配 1500 万 SNT 和 2000 万 LINEA 代币。
- **稳定币存款者的 Generic Protocol 积分**：Generic Protocol 在 Status Network 主网启动时可使用的积分。
- **原生应用积分**：待原生应用公布其代币经济学后确认。

分配取决于：

- 在金库中的时间
- 金库 TVL

主网启动时的初始 Karma 分配：

| 金库        | 初始 Karma 百分比 |
|-------------|-------------------|
| SNT         | 25%               |
| LINEA       | 10%               |
| ETH         | 20%               |
| GUSD        | 20%               |

原生应用在主网启动时获得初始 Karma 的 25%。

## 安全性

- **Aragon 金库**：已审计；报告可在[代码库的 `audit/` 文件夹](https://github.com/aragon/status-predeposit-vaults/tree/development/audit)中查看。
- **Generic Protocol**：已审计；有关安全披露和报告详情，请参阅其[文档](https://docs.generic.money/resources/audits)。

## 风险和注意事项

存入任何金库都涉及智能合约风险、桥接风险、市场风险以及与底层收益策略相关的协议风险。请仅存入您能够在活动期间锁定的金额。

参与前，请阅读 [Status Network 预存款免责声明](https://status.network/legal/status-network-pre-deposit-disclaimer)。

本文档仅供参考，不构成财务建议。

## 延伸阅读

- [预存款金库合约](../general-info/contract-addresses/pre-deposit) — 已部署地址信息
- [Karmic 代币经济学](./karmic-tokenomics) — Karma 的获取和使用方式
- [经济模型](./economic-model) — Status Network 的可持续收入模型
- [Aragon 文档](https://docs.aragon.org/)
- [Generic Protocol 文档](https://docs.generic.money/)
