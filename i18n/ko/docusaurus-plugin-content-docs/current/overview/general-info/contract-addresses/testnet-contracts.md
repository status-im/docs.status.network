---
title: 테스트넷 컨트랙트
description: 브릿지 컨트랙트, 핵심 인프라, L2 컨트랙트를 포함한 Status Network 테스트넷 컨트랙트 주소의 포괄적인 목록과 각각의 목적 및 블록 탐색기 링크.
keywords: [Status Network 컨트랙트, 테스트넷 주소, 스마트 컨트랙트, 브릿지 컨트랙트, L1 컨트랙트, L2 컨트랙트, 블록체인 인프라]
---

# 테스트넷 컨트랙트

이 페이지는 Status Network 테스트넷 인프라의 모든 중요한 컨트랙트 주소를 나열합니다.

## 레이어 1 컨트랙트 (Sepolia)

이 컨트랙트들은 Sepolia 테스트넷에 배포되어 있습니다. [Sepolia Etherscan](https://sepolia.etherscan.io)에서 확인할 수 있습니다.

### 브릿지 컨트랙트
- **Rollup Contract**
  - 주소: [`0x0Bf464f24D867ff0B20aE8f9C353a589138D6836`](https://sepolia.etherscan.io/address/0x0bf464f24d867ff0b20ae8f9c353a589138d6836)
  - 목적: L2의 유효성, DA 및 L1에서 L2로의 메시징을 관리

- **L1 Token Bridge Proxy**
  - 주소: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)
  - 목적: L1에서 토큰 브릿지 작업을 관리

### 핵심 인프라
- **L1 Postman**
  - 주소: [`0xB15725119b917d348FfEB365B43bCDeEbfb65C5d`](https://sepolia.etherscan.io/address/0xB15725119b917d348FfEB365B43bCDeEbfb65C5d)
  - 목적: L1과 L2 간의 메시지 전달을 처리

- **L1 Data Submission**
  - 주소: [`0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d`](https://sepolia.etherscan.io/address/0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d)
  - 목적: L2에서 L1로의 데이터 제출을 관리

- **L1 Finalization**
  - 주소: [`0xb91CB39b3b9F015b0aC88616A463B35568052AEF`](https://sepolia.etherscan.io/address/0xb91CB39b3b9F015b0aC88616A463B35568052AEF)
  - 목적: L1에서 L2 블록의 최종화를 처리

## 레이어 2 컨트랙트 (Status Network 테스트넷)

이 컨트랙트들은 Status Network 테스트넷에 배포되어 있습니다. [Status Network Explorer](https://sepoliascan.status.network)에서 확인할 수 있습니다.

### 브릿지 컨트랙트
- **L2 Message Service**
  - 주소: [`0xe74Bd8db0440533F8915042D980AbAA86085821c`](https://sepoliascan.status.network/address/0xe74Bd8db0440533F8915042D980AbAA86085821c)
  - 목적: L2에서 L1로의 메시징을 관리
  
- **L2 Token Bridge Proxy**
  - 주소: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)
  - 목적: L2에서 토큰 브릿지 작업을 관리

### 인프라 컨트랙트
- **L2 Faucet**
  - 주소: [`0x06338B70F1eAbc60d7A82C083e605C07F78bb878`](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)
  - 목적: 사용자에게 테스트넷 토큰을 배포

- **L2 Anchoring**
  - 주소: [`0x24B5eD2763129D6cBDEfE32e08558D2095132560`](https://sepoliascan.status.network/address/0x24B5eD2763129D6cBDEfE32e08558D2095132560)
  - 목적: L1과 L2 간의 상태 앵커링을 관리

### Karma 컨트랙트
- **Karma**
  - 주소: [`0x7ec5Dc75D09fAbcD55e76077AFa5d4b77D112fde`](https://sepoliascan.status.network/address/0x7ec5Dc75D09fAbcD55e76077AFa5d4b77D112fde)
  - 목적: 양도 불가능한 ERC20 네이티브 평판 토큰

- **KarmaTiers**
  - 주소: [`0xc7fCD786a161f42bDaF66E18a67C767C23cFd30C`](https://sepoliascan.status.network/address/0xc7fCD786a161f42bDaF66E18a67C767C23cFd30C)
  - 목적: 가스리스 트랜잭션 티어 레벨

- **KarmaNFT**
  - 주소: [`0xf78d58742840C0ee00b17EE062855392d10a0305`](https://sepoliascan.status.network/address/0xf78d58742840C0ee00b17EE062855392d10a0305)
  - 목적: 소울바운드 Karma NFT

- **StakeManager**
  - 주소: [`0x5cDf1646E4c1D21eE94DED1DA8da3Ca450dc96D1`](https://sepoliascan.status.network/address/0x5cDf1646E4c1D21eE94DED1DA8da3Ca450dc96D1)
  - 목적: SNT 스테이킹 컨트랙트

- **VaultFactory**
  - 주소: [`0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14`](https://sepoliascan.status.network/address/0xddDcd43a0B0dA865decf3e4Ae71FbBE3e2DfFF14)
  - 목적: StakeManager에 연결되는 자체 보관 금고(self-custody vault)를 생성하는 팩토리

### 유틸리티 컨트랙트
- **Multicall3**
  - 주소: [`0xcA11bde05977b3631167028862bE2a173976CA11`](https://sepoliascan.status.network/address/0xcA11bde05977b3631167028862bE2a173976CA11)
  - 목적: 하나의 요청에서 체인에 대한 여러 호출을 일괄 처리
  
- **deterministic-deployment-proxy**
  - 주소: [`0x4e59b44847b379578588920cA78FbF26c0B4956C`](https://sepoliascan.status.network/address/0x4e59b44847b379578588920cA78FbF26c0B4956C)
  - 목적: Hardhat과 같은 인기 프레임워크에서 내부적으로 사용하는 CREATE2 유틸리티 컨트랙트
  
- **safe-singleton-factory**
  - 주소: [`0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7`](https://sepoliascan.status.network/address/0x914d7Fec6aaC8cd542e72Bca78B30650d45643d7)
  - 목적: Safe 관련 컨트랙트에서 사용하는 싱글톤 팩토리
