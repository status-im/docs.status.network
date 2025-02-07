# Hardhat을 사용하여 스마트 컨트랙트 배포하기

이 튜토리얼에서는 Hardhat, Hardhat Ignition 및 TypeScript를 사용하여 Status Network 테스트넷에 스마트 컨트랙트를 배포하는 과정을 안내합니다.

## 사전 요구사항

시작하기 전에 다음이 필요합니다:

- **Node.js와 npm**: [공식 Node.js 웹사이트](https://nodejs.org/)에서 다운로드 및 설치
- **이더리움 지갑**: Status Network 테스트넷용 개인키가 있는 MetaMask 또는 다른 지갑
- **테스트넷 ETH**: Status Network 테스트넷 ETH가 필요합니다
  - Status Network 테스트넷 ETH는 [수도꼭지](/tools/testnet-faucets)에서 받을 수 있습니다
- **기본 지식**: Solidity, Hardhat, 명령줄 사용 경험

## 달성 목표

- TypeScript 기반 Hardhat 프로젝트 초기화
- 기본 이더리움 스마트 컨트랙트 작성
- Status Network 테스트넷 배포를 위한 Hardhat 구성
- Hardhat Ignition을 사용하여 스마트 컨트랙트 배포

## 단계

### 1. Hardhat TypeScript 프로젝트 초기화

먼저 프로젝트를 생성하고 설정합니다:

```bash
mkdir my-hardhat-project && cd my-hardhat-project
npm init -y
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox dotenv
npx hardhat init
```

프롬프트가 표시되면 "Create a TypeScript project"를 선택하여 TypeScript 기반 Hardhat 프로젝트를 설정합니다.

환경 변수를 설정합니다:

```bash
# .env 파일 생성
touch .env

# 개인키 추가 (이 파일은 절대 커밋하지 마세요!)
echo "PRIVATE_KEY=your_private_key_here" >> .env
```

### 2. 스마트 컨트랙트 작성

`contracts/HelloWorld.sol`을 생성합니다:

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

### 3. Status Network를 위한 Hardhat 구성

`hardhat.config.ts`를 업데이트합니다:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    statusTestnet: {
      url: "https://public.sepolia.rpc.status.network",
      chainId: 1660990954,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
```

### 4. Ignition 배포 모듈 생성

`ignition/modules/HelloWorld.ts`를 생성합니다:

```typescript
import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HelloWorld", (m) => {
  const helloWorld = m.contract("HelloWorld");
  
  return { helloWorld };
});
```

### 5. 컨트랙트 배포

```bash
npx hardhat compile
npx hardhat ignition deploy ignition/modules/HelloWorld.ts --network statusTestnet
```

배포는 `ignition/deployments` 디렉토리에 배포 결과물과 이력을 생성합니다.

### 7. 컨트랙트와 상호작용

`scripts/interact.ts`를 생성합니다:

```typescript
import { ethers } from "hardhat";
import { HelloWorld } from "../typechain-types";

async function main() {
  const contractAddress = "0x0d8a93870494Fa21ec39602f31Aa67C9Fed5604f";
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const contract = HelloWorld.attach(contractAddress) as HelloWorld;

  // 현재 인사말 읽기
  const greeting = await contract.getGreet();
  console.log("Current greeting:", greeting);

  // 인사말 업데이트
  const tx = await contract.setGreet("Hello from Status Network!");
  await tx.wait();
  console.log("Greeting updated!");

  // 업데이트된 인사말 읽기
  const newGreeting = await contract.getGreet();
  console.log("New greeting:", newGreeting);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

상호작용 스크립트를 실행합니다:

```bash
npx hardhat run scripts/interact.ts --network statusTestnet
```

## 지원

문제가 발생한 경우:
- [텔레그램 커뮤니티](https://t.me/+k04A_OZbhIs1Mzc9)에 참여
- [네트워크 상태](https://health.status.network) 확인
- [네트워크 세부정보](/general-info/network-details) 참조
