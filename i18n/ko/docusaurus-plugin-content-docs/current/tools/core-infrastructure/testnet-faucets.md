---
title: '테스트넷 파우셋'
description: 'Status Network 개발을 위한 테스트넷 ETH 또는 STT를 받으세요. Status Network 파우셋 및 Hoodi 파우셋을 통한 테스트 토큰 획득에 대한 전체 가이드입니다.'
keywords:
  - 'Status Network 파우셋'
  - '테스트넷 ETH'
  - '테스트 토큰'
  - 'STT'
  - 'Hoodi 파우셋'
  - '블록체인 테스트'
  - '개발용 토큰'
slug: '/tools/core-infrastructure/testnet-faucets'
---

Status Network Hoodi 테스트넷을 시작하려면 테스트넷 ETH 또는 테스트 자산이 필요할 수 있습니다.

## Status Network Hoodi 테스트넷 ETH 파우셋

Status Network Hoodi 테스트넷 파우셋은 [faucet.status.network](https://eth.faucet.status.network)에서 이용할 수 있습니다.

### 세부사항

- **파우셋 컨트랙트**: [`0x2D2ce8a43D63B7708451fB2A88D2A1060D242e81`](https://hoodiscan.status.network/address/0x2D2ce8a43D63B7708451fB2A88D2A1060D242e81)
- **지급량**: 요청당 0.01 ETH
- **대기 시간**: 주소당 하루 1회 요청
- **조건**: 수신 주소는 메인넷에 최소 0.01 ETH를 보유하고 있어야 합니다

### 테스트넷 ETH 받는 방법

1. [faucet.status.network](https://eth.faucet.status.network) 방문
2. 지갑 주소 붙여넣기
3. "요청" 클릭
4. ETH가 지갑에 표시될 때까지 대기 (보통 몇 초 소요)

## Hoodi ETH (브릿지에 필요)

Status Network Hoodi 테스트넷으로 자산을 브릿징하려면 먼저 Hoodi ETH가 필요합니다. 다음에서 받을 수 있습니다:

1. [Alchemy Hoodi 파우셋](https://hoodi-eth.faucet.pk910.de/)
2. [Metamask Hoodi 파우셋](https://hoodi-eth.faucet.pk910.de/)

Hoodi ETH를 받은 후, [Status Network 브릿지](https://bridge.status.network)를 사용하여 Status Network Hoodi 테스트넷으로 브릿징할 수 있습니다.

## Status Network STT 파우셋

Status Test Token (STT)는 SNT의 테스트넷 대응 토큰입니다. Status Network Hoodi 테스트넷 생태계 내에서 테스트 자산으로 사용됩니다.

### 세부사항

- **파우셋 컨트랙트**: [`0x14c847ce7ab6c8002616176478b32C237fdF0cBb`](https://hoodiscan.status.network/address/0x14c847ce7ab6c8002616176478b32C237fdF0cBb)
- **지급량**: 요청당 10,000 STT
- **대기 시간**: 주소당 하루 1회 요청

### STT 받는 방법

1. [hub.status.network 스테이킹 페이지](https://hub.status.network/ko/stake) 방문
2. 지갑을 연결하고 로그인
3. "테스트넷 SNT (STT) 받기" 클릭
4. 지갑에서 트랜잭션 확인
5. STT가 지갑에 표시될 때까지 대기 (보통 몇 초 소요)

## 지원

파우셋 사용 중 문제가 발생한 경우:

- 지원을 받으려면 [텔레그램 커뮤니티](https://t.me/statusl2)에 참여하세요.
