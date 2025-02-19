# Remix를 사용하여 스마트 컨트랙트 배포하기

이 튜토리얼에서는 Remix IDE를 사용하여 Status Network 테스트넷에 스마트 컨트랙트를 배포하는 과정을 안내합니다. Remix는 빠른 개발과 테스트에 적합한 브라우저 기반 IDE입니다.

## 사전 요구사항

시작하기 전에 다음이 필요합니다:

- **웹 브라우저**: Chrome이나 Firefox와 같은 최신 브라우저
- **MetaMask**: [MetaMask](https://metamask.io) 브라우저 확장 프로그램 설치
- **테스트넷 ETH**: Status Network 테스트넷 ETH가 필요합니다
  - Status Network 테스트넷 ETH는 [수도꼭지](/tools/testnet-faucets)에서 받을 수 있습니다
- **네트워크 구성**: [네트워크 추가 가이드](/general-info/add-status-network)에 따라 MetaMask에 Status Network 테스트넷 추가

## 단계

### 1. Remix IDE 열기

브라우저에서 [remix.ethereum.org](https://remix.ethereum.org)에 접속합니다.

### 2. 새 파일 만들기

1. "File Explorer" 아이콘(왼쪽 사이드바의 첫 번째 아이콘) 클릭
2. "+" 버튼을 클릭하여 새 파일 생성
3. `HelloWorld.sol`로 이름 지정

### 3. 스마트 컨트랙트 작성

다음 코드를 `HelloWorld.sol`에 복사하여 붙여넣기:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloWorld {
    string public greet = "Hello, Status Network!";

    function setGreet(string memory _greet) public {
        greet = _greet;
    }

    function getGreet() public view returns (string memory) {
        return greet;
    }
}
```

### 4. 컨트랙트 컴파일

1. "Solidity Compiler" 아이콘(왼쪽 사이드바의 두 번째 아이콘) 클릭
2. 컴파일러 버전 "0.8.24" 선택
3. "Compile HelloWorld.sol" 클릭
4. 컴파일이 성공했는지 확인(녹색 체크마크가 표시됨)

### 5. 컨트랙트 배포

1. "Deploy & Run Transactions" 아이콘(왼쪽 사이드바의 네 번째 아이콘) 클릭
2. "Environment" 드롭다운에서 "Injected Provider - MetaMask" 선택
3. MetaMask가 연결을 요청 - Status Network 테스트넷이 선택되어 있는지 확인
4. "Deploy" 클릭
5. MetaMask에서 트랜잭션 확인
6. 트랜잭션이 확인될 때까지 대기

### 6. 컨트랙트와 상호작용

배포가 완료되면 "Deployed Contracts" 아래에서 컨트랙트를 확인할 수 있습니다:

1. 컨트랙트 인터페이스 펼치기
2. 다음과 같은 작업이 가능합니다:
   - "greet"를 클릭하여 현재 인사말 읽기
   - "setGreet" 필드에 새로운 인사말을 입력하고 버튼을 클릭하여 업데이트
   - "getGreet"를 클릭하여 인사말 다시 읽기

## 문제 해결

### 일반적인 문제

1. **트랜잭션 실패**
   - Status Network 테스트넷에 연결되어 있는지 확인

2. **컨트랙트를 찾을 수 없음**
   - 탐색기가 컨트랙트를 인덱싱할 때까지 몇 분 대기
   - 컨트랙트 주소 다시 확인

3. **컴파일 오류**
   - 컴파일러 버전이 pragma 문과 일치하는지 확인
   - Remix에서 강조 표시된 구문 오류 확인

## 지원

문제가 발생한 경우:
- [텔레그램 커뮤니티](https://t.me/statusl2)에 참여
- [네트워크 세부정보](/general-info/network-details) 참조

## 추가 리소스

- [Remix 문서](https://remix-ide.readthedocs.io/)
- [Status Network 탐색기](https://sepoliascan.status.network)
