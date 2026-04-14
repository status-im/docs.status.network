---
title: 'Status Network 브릿지'
description: 'Hoodi와 Status Network Hoodi 테스트넷 간 토큰 전송을 위한 Status Network 브릿지 사용 가이드.'
keywords:
  - 'Status Network 브릿지'
  - '토큰 브릿지'
  - '크로스체인 전송'
  - 'L1 L2 브릿지'
  - 'Hoodi 브릿지'
slug: '/tools/core-infrastructure/bridge'
---

# Status Network Hoodi 테스트넷 브릿지

Status Network Hoodi 테스트넷 브릿지를 사용하면 Hoodi (레이어 1)와 Status Network Hoodi 테스트넷 (레이어 2) 간에 토큰을 전송하고 메시지를 전달할 수 있습니다. 브릿지 인터페이스는 [bridge.status.network](https://bridge.status.network)에서 이용할 수 있습니다.

## 브릿지 컨트랙트

### 레이어 1 (Hoodi)
- **LineaRollup (proxy)**: [`0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5`](https://hoodi.etherscan.io/address/0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5)
- **토큰 브릿지**: [`0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6`](https://hoodi.etherscan.io/address/0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6)

### 레이어 2 (Status Network)
- **L2MessageService (proxy)**: [`0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D`](https://hoodiscan.status.network/address/0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D)
- **토큰 브릿지**: [`0x48845B2B3cAb9773a5BBA2519f64003316BA6678`](https://hoodiscan.status.network/address/0x48845B2B3cAb9773a5BBA2519f64003316BA6678)

## 기능

- **토큰 브릿징**: 네트워크 간 ERC-20 토큰 전송
- **ETH 브릿징**: Hoodi와 Status Network 간 ETH 브릿징
- **트랜잭션 추적**: 브릿지 트랜잭션 상태 모니터링
- **가스 예상**: 브릿징 전 예상 가스 비용 확인

## 지원 토큰

지원되는 토큰과 해당 컨트랙트 주소의 최신 목록은 [토큰 목록 레포지토리](https://github.com/status-im/status-network-token-list)를 참조하세요.

## 브릿지 사용하기

단계별 가이드와 중요한 보안 고려사항을 포함한 브릿지 사용 방법에 대한 자세한 내용은 [브릿징 가이드](/overview/general-info/bridge/bridging-testnet)를 참조하세요.

## 브릿지 트랜잭션 모니터링

브릿지 트랜잭션은 다음을 통해 모니터링할 수 있습니다:

- L2 트랜잭션은 [Status Network 탐색기](https://hoodiscan.status.network)
- L1 트랜잭션은 [Hoodi Etherscan](https://hoodi.etherscan.io)

## 지원

브릿지 사용 중 문제가 발생한 경우:

- 일반적인 해결책은 [브릿징 가이드](/overview/general-info/bridge/bridging-testnet) 확인
- 도움이 필요하면 [텔레그램 커뮤니티](https://t.me/statusl2)에서 문의하세요
