# 빠른 시작

이 섹션에서는 10분 이내에 **Status Network 테스트넷**에 샘플 컨트랙트를 배포하는 방법을 알아보겠습니다.

간단하게 Remix IDE를 사용하여 Status Network에 스마트 컨트랙트를 배포하는 방법을 살펴보겠습니다.

## 준비하기

시작하기 전에:

1. **Status Network 테스트넷을 MetaMask에 추가**:

   [Status Network 추가 가이드](/general-info/add-status-network)의 단계별 지침에 따라 Status Network 테스트넷을 MetaMask에 추가하세요.

2. **테스트 ETH 받기**:

   Sepolia ETH와 Status Network ETH 모두 필요합니다:
   - 먼저 [Sepolia 수도꼭지](https://faucet.status.network)에서 Sepolia ETH를 받으세요
   - 그런 다음 [Status 브리지](https://bridge.status.network)를 사용하여 ETH를 Status Network로 브리징하세요
   - 또는 [테스트넷 수도꼭지](https://sepoliascan.status.network/address/0x06338B70F1eAbc60d7A82C083e605C07F78bb878)에서 직접 Status Network ETH를 받으세요

이제 시작할 준비가 되었습니다!

## Remix와 샘플 코드

**Remix**는 설정이 필요 없는 스마트 컨트랙트 개발 도구입니다. 쉽게 시작할 수 있으며, 간단한 배포 프로세스, 디버깅, 스마트 컨트랙트와의 상호작용 등이 가능합니다.

이 튜토리얼에서는 간단한 `SimpleStorage.sol` 컨트랙트를 배포할 것입니다:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 number;
    
    function store(uint256 num) public {
        number = num;
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}
```

> **참고:** 이 컨트랙트는 숫자를 저장하고 그 숫자를 읽을 수 있게 해줍니다.

## 배포 단계

1. **샘플 코드 복사**:

   - 샘플 코드를 복사하여 Remix에서 `SimpleStorage.sol`이라는 새 파일에 붙여넣기 하세요.

2. **스마트 컨트랙트 컴파일**:

   - **Solidity 컴파일러** 탭(왼쪽 사이드바)으로 이동하세요.
   - 컴파일러 버전이 0.8.0 이상인지 확인하세요.
   - **"SimpleStorage.sol 컴파일"**을 클릭하세요.
   - 컨트랙트 코드를 변경할 때마다 자동 컴파일을 원하면 **"자동 컴파일"**을 활성화할 수 있습니다.

3. **스마트 컨트랙트 배포**:

   - **배포 & 실행 트랜잭션** 탭으로 전환하세요.
   - **"환경"** 드롭다운 메뉴에서 **"Injected Provider - MetaMask"**를 선택하세요.
   - MetaMask가 Remix에 연결을 요청할 수 있습니다. 연결을 확인하세요.
   - MetaMask에서 **Status Network 테스트넷**이 선택되어 있는지 확인하세요.
   - **"컨트랙트"**에서 `SimpleStorage`가 선택되어 있는지 확인하세요.
   - **"배포"**를 클릭하세요.
   - MetaMask가 팝업되어 트랜잭션 확인을 요청합니다. 가스비는 ETH로 지불됩니다.
   - 트랜잭션 세부사항을 검토하고 **"확인"**을 클릭하세요.
   - 트랜잭션이 채굴될 때까지 기다리세요.

4. **배포 확인**:
   
   - 배포가 완료되면 Remix에서 컨트랙트 주소를 복사하세요
   - [Status Network 탐색기](https://sepoliascan.status.network)에서 확인하세요

**축하합니다!** Status Network에 첫 번째 스마트 컨트랙트를 배포하셨습니다.

## 배포된 스마트 컨트랙트와 상호작용하기

1. **배포된 컨트랙트 접근**:

   - Remix의 **"배포된 컨트랙트"** 섹션에서 배포된 `SimpleStorage` 컨트랙트를 확인할 수 있습니다.

2. **숫자 저장하기**:

   - 배포된 컨트랙트를 확장하여 함수들을 확인하세요.
   - **"store"** 함수 입력 필드에 숫자(예: `42`)를 입력하세요.
   - **"transact"**를 클릭하세요.
   - MetaMask가 트랜잭션 확인을 요청합니다. 가스비는 ETH로 지불됩니다.
   - 트랜잭션이 확인될 때까지 기다리세요.

3. **숫자 조회하기**:

   - **"retrieve"** 함수를 클릭하세요.
   - 버튼 아래에 저장된 숫자가 표시됩니다.
   - 이는 view 함수이므로 가스비가 필요하지 않습니다.

## 다음 단계

- **지원 받기**:
  - [텔레그램 커뮤니티](https://t.me/statusl2)에 참여하여 도움을 받으세요
  - [네트워크 세부정보](/general-info/network-details)에서 자세한 정보를 확인하세요
  - Status Network로의 [토큰 브리징](/general-info/bridge/bridging-testnet)에 대해 알아보세요

## 요약

성공적으로 다음을 수행하셨습니다:
- Status Network 테스트넷과 상호작용하기 위한 환경 설정
- 브리징 또는 수도꼭지를 통해 테스트넷 ETH 획득
- Remix IDE와 MetaMask를 사용하여 스마트 컨트랙트 배포
- 숫자 저장 및 조회를 통해 배포된 컨트랙트와 상호작용

더 고급 개발을 위해 다음 도구를 사용한 배포 가이드를 확인하세요:
- [Hardhat](/tutorials/deploying-contracts/using-hardhat)
- [Foundry](/tutorials/deploying-contracts/using-foundry)
