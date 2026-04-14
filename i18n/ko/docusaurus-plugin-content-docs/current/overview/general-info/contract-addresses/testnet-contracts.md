---
title: '테스트넷 컨트랙트'
description: '브릿지 컨트랙트, 핵심 인프라, L2 컨트랙트를 포함한 Status Network Hoodi 테스트넷 컨트랙트 주소의 포괄적인 목록과 각각의 목적 및 블록 탐색기 링크.'
keywords:
  - 'Status Network 컨트랙트'
  - '테스트넷 주소'
  - '스마트 컨트랙트'
  - '브릿지 컨트랙트'
  - 'L1 컨트랙트'
  - 'L2 컨트랙트'
  - '블록체인 인프라'
---

# 테스트넷 컨트랙트

이 페이지는 Status Network Hoodi 테스트넷 인프라의 모든 중요한 컨트랙트 주소를 나열합니다.

## 레이어 1 컨트랙트 (Hoodi)

이 컨트랙트들은 Hoodi 테스트넷에 배포되어 있습니다. [Hoodi Etherscan](https://hoodi.etherscan.io)에서 확인할 수 있습니다.

### 브릿지 컨트랙트
- **롤업 컨트랙트**
  - 주소: [`0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5`](https://hoodi.etherscan.io/address/0x24c1DE7F54EeC6eaA65649A535fcFf2129C0E5B5)
  - 목적: L2의 유효성, DA 및 L1에서 L2로의 메시징을 관리

- **L1 토큰 브릿지 프록시**
  - 주소: [`0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6`](https://hoodi.etherscan.io/address/0xE342066BBD2c46a04FA79d4C289410ae62Ccbda6)
  - 목적: L1에서 토큰 브릿지 작업을 관리

### 핵심 인프라
- **L1 포스트맨**
  - 주소: [`0xB15725119b917d348FfEB365B43bCDeEbfb65C5d`](https://hoodi.etherscan.io/address/0xB15725119b917d348FfEB365B43bCDeEbfb65C5d)
  - 목적: L1과 L2 간의 메시지 전달을 처리

- **L1 데이터 제출**
  - 주소: [`0xf28FffAA0BD329EcE4e85f3D7163267649eb6B80`](https://hoodi.etherscan.io/address/0xf28FffAA0BD329EcE4e85f3D7163267649eb6B80)
  - 목적: L2에서 L1로의 데이터 제출을 관리

- **L1 종료 확정**
  - 주소: [`0x74527db6DCa3E006c3ff76787E89eE8dD7963f43`](https://hoodi.etherscan.io/address/0x74527db6DCa3E006c3ff76787E89eE8dD7963f43)
  - 목적: L1에서 L2 블록의 최종화를 처리

## 레이어 2 컨트랙트 (Status Network Hoodi 테스트넷)

이 컨트랙트들은 Status Network Hoodi 테스트넷에 배포되어 있습니다. [Status Network Explorer](https://hoodiscan.status.network)에서 확인할 수 있습니다.

### 브릿지 컨트랙트
- **L2 메시지 서비스**
  - 주소: [`0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D`](https://hoodiscan.status.network/address/0x2CAf1658Bd9B40969E1Ac70b49EC835C7c9Bc68D)
  - 목적: L2에서 L1로의 메시징을 관리
  
- **L2 토큰 브릿지 프록시**
  - 주소: [`0x48845B2B3cAb9773a5BBA2519f64003316BA6678`](https://hoodiscan.status.network/address/0x48845B2B3cAb9773a5BBA2519f64003316BA6678)
  - 목적: L2에서 토큰 브릿지 작업을 관리

### 인프라 컨트랙트
- **L2 파우셋**
  - 주소: [`0x06338B70F1eAbc60d7A82C083e605C07F78bb878`](https://hoodiscan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)
  - 목적: 사용자에게 테스트넷 토큰을 배포

- **L2 앵커링**
  - 주소: [`0x24B5eD2763129D6cBDEfE32e08558D2095132560`](https://hoodiscan.status.network/address/0x24B5eD2763129D6cBDEfE32e08558D2095132560)
  - 목적: L1과 L2 간의 상태 앵커링을 관리

### Karma 컨트랙트
- **Karma**
  - 주소: [`0x0700be6f329cc48c38144f71c898b72795db6c1b`](https://hoodiscan.status.network/address/0x0700be6f329cc48c38144f71c898b72795db6c1b)
  - 목적: 양도 불가능한 ERC20 네이티브 평판 토큰

- **KarmaTiers**
  - 주소: [`0xb8039632e089dcefa6bbb1590948926b2463b691`](https://hoodiscan.status.network/address/0xb8039632e089dcefa6bbb1590948926b2463b691)
  - 목적: 가스리스 트랜잭션 티어 레벨

- **KarmaNFT**
  - 주소: [`0x420077c98880a9ebb45296cf7721ab7a5b56bd47`](https://hoodiscan.status.network/address/0x420077c98880a9ebb45296cf7721ab7a5b56bd47)
  - 목적: 소울바운드 Karma NFT

- **StakeManager**
  - 주소: [`0x2bc5b2a5f580064aab6fbc1ee30113cd808582ac`](https://hoodiscan.status.network/address/0x2bc5b2a5f580064aab6fbc1ee30113cd808582ac)
  - 목적: SNT 스테이킹 컨트랙트

- **VaultFactory**
  - 주소: [`0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14`](https://hoodiscan.status.network/address/0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14)
  - 목적: StakeManager에 연결되는 자체 보관 금고(self-custody vault)를 생성하는 팩토리

### 유틸리티 컨트랙트
- **Multicall3**
  - 주소: [`0xcA11bde05977b3631167028862bE2a173976CA11`](https://hoodiscan.status.network/address/0xcA11bde05977b3631167028862bE2a173976CA11)
  - 목적: 하나의 요청에서 체인에 대한 여러 호출을 일괄 처리
  
- **결정적 배포 프록시**
  - 주소: [`0x4e59b44847b379578588920cA78FbF26c0B4956C`](https://hoodiscan.status.network/address/0x4e59b44847b379578588920cA78FbF26c0B4956C)
  - 목적: Hardhat과 같은 인기 프레임워크에서 내부적으로 사용하는 CREATE2 유틸리티 컨트랙트
  
- **Safe 싱글톤 팩토리**
  - 주소: [`0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7`](https://hoodiscan.status.network/address/0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7)
  - 목적: Safe 관련 컨트랙트에서 사용하는 싱글톤 팩토리
