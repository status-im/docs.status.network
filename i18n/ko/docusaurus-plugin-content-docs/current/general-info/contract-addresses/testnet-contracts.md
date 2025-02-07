# 테스트넷 컨트랙트

이 페이지는 Status Network 테스트넷 인프라의 모든 중요한 컨트랙트 주소를 나열합니다.

## 레이어 1 컨트랙트 (Sepolia)

이 컨트랙트들은 Sepolia 테스트넷에 배포되어 있습니다. [Sepolia Etherscan](https://sepolia.etherscan.io)에서 확인할 수 있습니다.

### 브리지 컨트랙트
- **L1 토큰 브리지 프록시**
  - 주소: [`0x01b44C5Ea321f921D93476cf54Aa8460db17a548`](https://sepolia.etherscan.io/address/0x01b44C5Ea321f921D93476cf54Aa8460db17a548)
  - 목적: L1에서의 토큰 브리징 작업 관리

### 코어 인프라
- **L1 포스트맨**
  - 주소: [`0xB15725119b917d348FfEB365B43bCDeEbfb65C5d`](https://sepolia.etherscan.io/address/0xB15725119b917d348FfEB365B43bCDeEbfb65C5d)
  - 목적: L1과 L2 사이의 메시지 전달 처리

- **L1 데이터 제출**
  - 주소: [`0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d`](https://sepolia.etherscan.io/address/0x263d8f55BAc71a42d0A822F46b1eC62Cd4183a8d)
  - 목적: L2에서 L1로의 데이터 제출 관리

- **L1 최종화**
  - 주소: [`0xb91CB39b3b9F015b0aC88616A463B35568052AEF`](https://sepolia.etherscan.io/address/0xb91CB39b3b9F015b0aC88616A463B35568052AEF)
  - 목적: L1에서 L2 블록의 최종화 처리

## 레이어 2 컨트랙트 (Status Network 테스트넷)

이 컨트랙트들은 Status Network 테스트넷에 배포되어 있습니다. [Status Network Explorer](https://sepoliascan.status.network)에서 확인할 수 있습니다.

### 브리지 컨트랙트
- **L2 토큰 브리지 프록시**
  - 주소: [`0xbC7f9571152a8e21942b2aEa4831a27f1149af19`](https://sepoliascan.status.network/address/0xbC7f9571152a8e21942b2aEa4831a27f1149af19)
  - 목적: L2에서의 토큰 브리징 작업 관리

### 인프라 컨트랙트
- **L2 수도꼭지**
  - 주소: [`0x06338B70F1eAbc60d7A82C083e605C07F78bb878`](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)
  - 목적: 사용자들에게 테스트넷 토큰 배포

- **L2 앵커링**
  - 주소: [`0x24B5eD2763129D6cBDEfE32e08558D2095132560`](https://sepoliascan.status.network/address/0x24B5eD2763129D6cBDEfE32e08558D2095132560)
  - 목적: L1과 L2 사이의 상태 앵커링 관리
