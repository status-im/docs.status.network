# 빠른 시작

이 섹션에서는 **Status Network 테스트넷**에서 10분 이내에 샘플 컨트랙트를 배포해 보겠습니다.

간단하게 하기 위해 Remix IDE를 사용하여 Status Network에서 스마트 컨트랙트를 배포하는 방법을 살펴보겠습니다.

## 준비하기

시작하기 전에:

- **MetaMask에 Status Network 테스트넷 추가하기**:

  MetaMask에 Status Network 테스트넷을 추가하는 단계별 지침은 [Status Network 문서](/general-info/add-status-network)를 참고하세요. 네트워크의 RPC URL, 체인 ID 및 기타 세부 정보가 필요합니다.

- **테스트넷 토큰 받기**:

  이 가이드는 Status Network에서 테스트넷 ETH를 얻었다고 가정합니다. 테스트 토큰을 요청하려면 [Status Network 테스트넷 파우셋](#)을 사용할 수 있습니다.

시작할 준비가 되었습니다!

## Remix 및 샘플 코드

**Remix**는 스마트 컨트랙트 개발을 위한 별도의 설정이 필요 없는 도구입니다. 간단한 배포 프로세스, 디버깅, 스마트 컨트랙트와의 상호 작용 등을 가능하게 하여 쉽게 시작할 수 있습니다. 빠른 변경 사항을 테스트하고 배포된 스마트 컨트랙트와 상호 작용하기에 훌륭한 도구입니다.

이 튜토리얼에서는 Remix에 예제로 제공되는 `SimpleStorage.sol` 스마트 컨트랙트를 배포하겠지만, 원하는 코드를 사용할 수 있습니다.

여기 샘플 코드가 있습니다:

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.24;

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

1. **샘플 코드 복사하기**:

   - 샘플 코드를 복사하여 Remix에서 `SimpleStorage.sol`이라는 새 파일에 붙여넣습니다.

2. **스마트 컨트랙트 컴파일하기**:

   - **Solidity Compiler** 탭으로 이동합니다 (왼쪽 사이드바).
   - 컴파일러 버전이 컨트랙트의 pragma 문(`0.8.24`)과 일치하는지 확인합니다.
   - **"Compile SimpleStorage.sol"**을 클릭합니다.
   - 컨트랙트 코드를 변경할 때마다 자동으로 컴파일되도록 **"Auto compile"**을 활성화할 수 있습니다.

3. **스마트 컨트랙트 배포하기**:

   - **Deploy & Run Transactions** 탭으로 전환합니다.
   - **"Environment"** 드롭다운 메뉴에서 **"Injected Provider - MetaMask"**를 선택합니다. 이것은 Remix를 MetaMask 지갑에 연결합니다.
   - MetaMask에서 Remix에 연결하라는 메시지가 표시될 수 있습니다. 연결을 확인하세요.
   - MetaMask에서 **Status Network 테스트넷**이 선택되어 있는지 확인합니다.
   - **"Contract"** 아래에서 `SimpleStorage`가 선택되어 있는지 확인합니다.
   - **"Deploy"**를 클릭합니다.
   - MetaMask가 나타나 트랜잭션 확인을 요청합니다.
   - 트랜잭션 세부 정보를 검토하고 **"Confirm"**을 클릭합니다.
   - 트랜잭션이 채굴될 때까지 기다립니다. Remix 또는 MetaMask에서 상태를 추적할 수 있습니다.

**축하합니다!** Status Network에 첫 스마트 컨트랙트를 배포하셨습니다.

## 배포한 스마트 컨트랙트와 상호 작용하기

1. **배포된 컨트랙트 접근하기**:

   - Remix에서 **"Deployed Contracts"** 섹션 아래에 배포된 `SimpleStorage` 컨트랙트가 표시됩니다.

2. **숫자 저장하기**:

   - 배포된 컨트랙트를 확장하여 함수들을 확인합니다.
   - **"store"** 함수 입력 필드에 숫자(예: `42`)를 입력합니다.
   - **"transact"**를 클릭합니다.
   - MetaMask에서 트랜잭션 확인을 요청합니다. **"Confirm"**을 클릭합니다.
   - 트랜잭션이 확인될 때까지 기다립니다.

3. **숫자 가져오기**:

   - **"retrieve"** 함수를 클릭합니다.
   - 저장된 숫자가 버튼 아래에 표시됩니다.

## 다음 단계

- **지원 받기**:

  - 문제가 발생하거나 질문이 있으시면, [Status Network 지원](https://status.app)을 방문하거나 커뮤니티 채널에 참여하여 도움을 받으세요.

## 요약

여러분은 성공적으로 다음을 수행하셨습니다:

- Status Network 테스트넷과 상호 작용하기 위한 환경을 설정했습니다.
- Remix IDE와 MetaMask를 사용하여 스마트 컨트랙트를 배포했습니다.
- 숫자를 저장하고 가져옴으로써 배포한 컨트랙트와 상호 작용했습니다.

---

더 깊이 들어가고 싶다면, 더 복잡한 스마트 컨트랙트를 탐구해 보세요. 추가 튜토리얼은 [여기](/tutorials/ethers-tutorial)에서 확인하세요.

**즐거운 코딩 되세요!**