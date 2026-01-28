---
title: 사전예치
description: SNT, LINEA, ETH를 위한 Aragon 기반 금고와 스테이블코인 예치를 위한 Generic Protocol 통합을 포함한 Status Network 사전예치 금고 아키텍처에 대한 기술 개요.
keywords: [Status Network, 사전예치, 금고, Aragon, Generic Protocol, Karma, GUSD, 스테이블코인, 수익률, ETH, SNT, LINEA, Lido, Morpho]
---

Status Network는 메인넷 출시 전에 유동성 확보와 초기 Karma 배포를 위한 사전예치 캠페인을 진행하고 있습니다. 두 가지 금고 시스템이 캠페인을 지원합니다:

| 자산                     | 금고 제공자      | 영수증 토큰 | 네트워크         |
|--------------------------|------------------|-------------|------------------|
| SNT, LINEA, ETH          | Aragon           | 예          | Ethereum / Linea |
| USDT, USDC, USDS (→GUSD) | Generic Protocol | 아니오      | Ethereum         |

이 페이지에서는 각 시스템의 기술 아키텍처를 설명합니다.

## Aragon 금고 (SNT · LINEA · ETH)

### 개요

SNT, LINEA, ETH 금고는 [Aragon](https://aragon.org/)이 Status Network를 위해 특별히 개발한 스마트 컨트랙트입니다. 소스 코드는 공개되어 있습니다:

- 레포지토리: [aragon/status-predeposit-vaults](https://github.com/aragon/status-predeposit-vaults)
- 핵심 컨트랙트: [`PreDepositVault.sol`](https://github.com/aragon/status-predeposit-vaults/blob/development/src/PreDepositVault.sol)

각 금고는 [ERC-4626 인터페이스](https://ethereum.org/developers/docs/standards/tokens/erc-4626)를 구현하며:

1. 금고 당 SNT, LINEA 또는 WETH의 예치를 수락합니다.
2. 예치자의 예치량에 비례하여 **금고 지분 토큰**(svSNT, svLINEA 또는 svWETH)을 발행합니다.
3. 메인넷 출시까지 예치된 자산을 보관하며, 이후 관리자가 해당 자산을 Status Network L2로 브릿지합니다.

### 수익 전략 (ETH)

예치된 ETH는 [Lido](https://lido.fi/)를 통해 스테이킹되어 스테이킹 수익을 얻습니다. 생성된 수익의 일부는 출시 시 Status Network의 네이티브 펀딩 풀에 배정됩니다.

### 배포된 컨트랙트

주소 및 네트워크 목록 상세는 [사전예치 금고 컨트랙트](../general-info/contract-addresses/pre-deposit)를 참조하세요.

## Generic Protocol 금고 (GUSD)

GUSD는 USDT, USDC, USDS를 기반하는 수익 창출 메타 스테이블코인으로, [Generic Protocol](https://docs.generic.money/)이 구축했습니다. GUSD 인프라는 Generic Protocol이 유지 관리하며, Status Network는 **DepositorHelper** 컨트랙트를 통해 그들의 시스템에 연결합니다.

### 수익 전략 (스테이블코인)

GUSD 금고는 [Steakhouse Financial](https://steakhouse.financial/)과 [Morpho](https://morpho.org/)를 통한 다층 수익 전략을 구현합니다:

1. 예치된 스테이블코인은 **Generic Protocol의 자산별 금고**로 라우팅됩니다 (예: [USDC Vault](https://etherscan.io/address/0x4825eFF24F9B7b76EEAFA2ecc6A1D5dFCb3c1c3f)).
2. 금고는 자산을 **Steakhouse Financial MetaMorpho 금고**에 할당합니다 (예: [steakUSDC](https://etherscan.io/address/0xBEEF01735c132Ada46AA9aA4c54623cAA92A64CB)).
3. Steakhouse 금고는 [**Morpho 대출 시장**](https://etherscan.io/address/0xBBBBBbbBBb9cC5e90e3b3Af64bdAF62C37EEFFCb)에 자산을 공급하여 대출 수익을 얻습니다.

생성된 수익의 일부는 메인넷 출시 시 Status Network의 네이티브 펀딩 풀에 배정됩니다.

:::note
GUSD 금고는 영수증 토큰을 발행하지 **않습니다**. 예치 내역은 Generic Protocol의 컨트랙트에 기록되며, [Hub](https://hub.status.network/pre-deposits)에서 지갑을 연결하거나 온체인에서 직접 확인할 수 있습니다.
:::

### DepositorHelper 컨트랙트

Status Network 사전예치는 DepositorHelper를 통해 Generic Protocol과 상호작용합니다:
[`0x79B4cDb14A31E8B0e21C0120C409Ac14Af35f919`](https://etherscan.io/address/0x79B4cDb14A31E8B0e21C0120C409Ac14Af35f919)

### 예치 흐름 (GUSD)

사용자가 USDC, USDT 또는 USDS를 예치하면 다음과 같은 온체인 작업이 수행됩니다:

1. DepositorHelper가 스테이블코인을 사용할 수 있도록 **승인**합니다.
2. DepositorHelper에서 자산과 금액을 지정하여 **[`depositAndPredeposit`](https://docs.generic.money/code-ref/protocol/periphery/GenericDepositor.sol/contract.GenericDepositor#depositandpredeposit)를 호출**합니다.
3. 스테이블코인이 DepositorHelper로 전송됩니다.
4. 예치자의 기초 스테이블코인 청구권을 나타내는 [**GenericUnit**](https://etherscan.io/address/0x8c307baDbd78bEa5A1cCF9677caa58e7A2172502) 지분이 DepositorHelper에 발행됩니다.
5. DepositorHelper가 스테이블코인을 해당 **Generic Protocol 자산 금고**에 예치합니다 ([USDC Vault](https://etherscan.io/address/0x4825eFF24F9B7b76EEAFA2ecc6A1D5dFCb3c1c3f), [USDT Vault](https://etherscan.io/address/0xB8280955aE7b5207AF4CDbdCd775135Bd38157fE) 또는 [USDS Vault](https://etherscan.io/address/0x6133dA4Cd25773Ebd38542a8aCEF8F94cA89892A)).
6. 각 자산 금고는 해당하는 **Steakhouse Financial MetaMorpho 금고**에 할당하고, 이어서 Steakhouse 금고는 **Morpho 대출 시장**에 자산을 공급합니다.
7. **Bridge Coordinator L1**이 `Predeposited` 이벤트를 발생시켜 Status Network 메인넷을 위한 사전예치를 기록합니다.
8. 메인넷 출시 시 예치 내역에 따라 Status Network에서 GUSD와 Karma, SNT & LINEA 인센티브, Generic Protocol 포인트 및 잠재적 네이티브 앱 포인트를 받을 수 있습니다.

Generic Protocol 구조(GUSD 토크노믹스, 브릿징 인프라 등)에 대한 전체 개요는 [Generic Protocol 문서](https://docs.generic.money/)를 참조하세요.

## 인센티브와 카르마

사전 예치자는 다음의 보상을 받게 됩니다:

- **Karma**: 양도 불가능한 거버넌스 토큰; 가스리스 처리량과 투표권 부여 (자세한 내용은 [카르마 토크노믹스](./karmic-tokenomics) 참조).
- **유동성 인센티브**: 모든 금고에 걸쳐 1,500만 SNT와 2,000만 LINEA 토큰 배포.
- 스테이블코인 예치자를 위한 **Generic Protocol 포인트**: Generic Protocol이 Status Network 메인넷에 출시될 때 사용할 수 있는 포인트.
- **네이티브 앱 포인트**: 네이티브 앱들이 토크노믹스를 공개하면 확정 예정.

할당량 다음의 요소들에 따라 결정됩니다:

- 금고 참여 시간
- 금고 TVL

메인넷 출시 시 초기 Karma 배포:

| 금고        | Karma 비율 |
|-------------|------------|
| SNT         | 25%        |
| LINEA       | 10%        |
| ETH         | 20%        |
| GUSD        | 20%        |

네이티브 앱들은 메인넷 출시 시 초기 Karma의 25%를 받습니다.

## 보안

- **Aragon 금고**: 감사 완료; 보고서는 [레포지토리의 `audit/` 폴더](https://github.com/aragon/status-predeposit-vaults/tree/development/audit)에서 확인 가능.
- **Generic Protocol**: 감사 완료; 보안 및 보고서 세부사항은 [문서](https://docs.generic.money/resources/audits) 참조.

## 위험 및 고려사항

금고에 예치하는 것은 스마트 컨트랙트 위험, 브릿징 위험, 시장 위험 및 기초 수익 전략과 관련된 프로토콜 위험을 수반합니다. 캠페인 기간 동안 잠글 수 있는 금액만을 예치하세요.

참여하기 전에 [Status Network 사전예치 면책 조항](https://status.network/legal/status-network-pre-deposit-disclaimer)을 확인하세요.

본 문서는 정보 제공 목적으로만 작성되었으며 어떠한 투자 조언도 구성하지 않습니다.

## 추가 정보

- [사전예치 금고 컨트랙트](../general-info/contract-addresses/pre-deposit) — 배포된 주소 정보
- [카르마 토크노믹스](./karmic-tokenomics) — Karma 획득 및 사용 방법
- [경제 모델](./economic-model) — Status Network의 지속 가능한 수익 모델
- [Aragon 문서](https://docs.aragon.org/)
- [Generic Protocol 문서](https://docs.generic.money/)
