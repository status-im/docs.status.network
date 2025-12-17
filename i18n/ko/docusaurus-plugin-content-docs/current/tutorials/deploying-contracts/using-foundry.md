# Foundry를 사용하여 스마트 컨트랙트 배포하기

이 튜토리얼에서는 Foundry를 사용하여 Status Network 테스트넷에 스마트 컨트랙트를 배포하는 과정을 안내합니다.

## 사전 요구사항

시작하기 전에 다음이 필요합니다:

- **Foundry**: [공식 Foundry 문서](https://book.getfoundry.sh/getting-started/installation)에서 설치
- **이더리움 지갑**: Status Network 테스트넷용 개인키
- **테스트넷 ETH**: Status Network 테스트넷 ETH가 필요합니다
  - Status Network 테스트넷 ETH는 [파우셋](/tools/testnet-faucets)에서 받을 수 있습니다
- **기본 지식**: Solidity와 명령줄 사용 경험

## 달성 목표

- Foundry 프로젝트 초기화
- 기본 이더리움 스마트 컨트랙트 작성
- Status Network 테스트넷 배포를 위한 Foundry 구성
- 스마트 컨트랙트 배포

## 단계

### 1. Foundry 프로젝트 초기화

먼저 새로운 Foundry 프로젝트를 생성합니다:

```bash
# 새 프로젝트 생성
forge init hello_status
cd hello_status

# 개인키를 위한 .env 파일 생성
touch .env
echo "PRIVATE_KEY=your_private_key_here" >> .env
```

### 2. 스마트 컨트랙트 작성

`src/Counter.sol`을 `HelloWorld.sol`로 대체합니다:

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

### 3. Status Network를 위한 Foundry 구성

`foundry.toml`을 생성하거나 업데이트합니다:

```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
solc = "0.8.24"

[rpc_endpoints]
status_testnet = "https://public.sepolia.rpc.status.network"
```

### 4. 컨트랙트 배포

배포 스크립트 `script/Deploy.s.sol`을 생성합니다:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/HelloWorld.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);
        
        HelloWorld hello = new HelloWorld();
        console.log("HelloWorld deployed to:", address(hello));
        
        vm.stopBroadcast();
    }
}
```

forge를 사용하여 배포합니다:

```bash
# 환경 변수 로드
source .env

# Status Network 테스트넷에 배포
forge script script/Deploy.s.sol:DeployScript \
    --rpc-url https://public.sepolia.rpc.status.network \
    --broadcast \
```

### 5. 컨트랙트와 상호작용

컨트랙트와 상호작용하는 스크립트 `script/Interact.s.sol`을 생성합니다:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import "../src/HelloWorld.sol";

contract InteractScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address contractAddress = address(0x...); // 컨트랙트 주소로 교체하세요
        
        vm.startBroadcast(deployerPrivateKey);
        
        HelloWorld hello = HelloWorld(contractAddress);
        
        // 현재 인사말 읽기
        string memory currentGreeting = hello.getGreet();
        console.log("Current greeting:", currentGreeting);
        
        // 인사말 업데이트
        hello.setGreet("Hello from Foundry!");
        
        vm.stopBroadcast();
    }
}
```

상호작용 스크립트를 실행합니다:

```bash
forge script script/Interact.s.sol:InteractScript \
    --rpc-url https://public.sepolia.rpc.status.network \
    --broadcast
```

### 6. 빠른 상호작용을 위한 Cast 명령어

`cast`를 사용하여 컨트랙트와 상호작용할 수도 있습니다:

```bash
# 인사말 읽기
cast call <CONTRACT_ADDRESS> "getGreet()" \
    --rpc-url https://public.sepolia.rpc.status.network

# 새 인사말 설정
cast send <CONTRACT_ADDRESS> "setGreet(string)" "New greeting!" \
    --private-key $PRIVATE_KEY \
    --rpc-url https://public.sepolia.rpc.status.network
```

### 7. 테스트

테스트 파일 `test/HelloWorld.t.sol`을 생성합니다:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/HelloWorld.sol";

contract HelloWorldTest is Test {
    HelloWorld hello;

    function setUp() public {
        hello = new HelloWorld();
    }

    function testGreeting() public {
        assertEq(hello.getGreet(), "Hello, Status Network!");
        
        hello.setGreet("New greeting");
        assertEq(hello.getGreet(), "New greeting");
    }
}
```

테스트를 실행합니다:

```bash
forge test
```

## 지원

문제가 발생한 경우:
- [텔레그램 커뮤니티](https://t.me/statusl2)에 참여
- [네트워크 세부정보](/general-info/network-details) 참조

## 추가 리소스

- [Foundry 문서](https://book.getfoundry.sh/)
- [Status Network 탐색기](https://sepoliascan.status.network)
