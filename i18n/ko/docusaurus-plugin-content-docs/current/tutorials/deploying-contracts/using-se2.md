---
title: Status Network에서 Scaffold-ETH 2 사용하기
description: 사전 설정된 Scaffold-ETH 2 확장을 사용하여 Status Network에서 스마트 컨트랙트를 빠르게 배포하는 가이드입니다.
keywords: [Scaffold-ETH 2, 스마트 컨트랙트 배포, Status Network 개발, Foundry, Hardhat, NextJS, web3 개발]
---

# Scaffold-ETH 2를 사용한 스마트 컨트랙트 배포

[Status Network Scaffold-ETH 2 확장](https://github.com/status-im/status-network-scaffold-extension)은 Foundry와 Hardhat 지원, 그리고 NextJS 프론트엔드와 함께 Status Network에서 스마트 컨트랙트를 배포하기 위한 사전 구성된 설정을 제공합니다.

## 사전 요구사항

- **Yarn**: JavaScript 프로젝트용 패키지 매니저
- **Foundry** (선택사항): Foundry 워크플로우를 선택하는 경우
- **Ethereum 지갑** (선택사항): 테스트용 EVM 지갑 개인 키, 없어도 가능

> **참고**: Status Network는 가스 없는 트랜잭션을 지원하므로 테스트넷 ETH는 선택사항입니다. 여전히 테스트넷 ETH가 필요하다면 [Faucet](/tools/testnet-faucets)를 참고하세요.

## 빠른 시작

1. **확장 설치:**
   ```bash
   npx create-eth@latest -e status-im/status-network-scaffold-extension
   ```

2. **계정 구성:**
   ```bash
   yarn generate
   ```

3. **Status Network에 배포:**
   ```bash
   yarn deploy --network statusSepolia
   ```

4. **컨트랙트 검증:**
   ```bash
   # Hardhat
   yarn hardhat:hardhat-verify --network statusSepolia <YourDeployedContractAddress>
   # Foundry
   yarn status:verify --network statusSepolia
   ```

5. **프론트엔드 시작:**
   ```bash
   yarn start
   ```

## 주요 포인트

- **로컬 체인 불필요**: 테스트넷에 직접 배포
- **배포 및 검증**: 항상 `--network statusSepolia` 옵션 사용
- **Blockscout 검증**: Status Network는 Etherscan이 아닌 Blockscout 사용
- **사전 구성된 프론트엔드**: NextJS가 자동으로 Status Network에 연결

## 지원

자세한 구성 옵션, 문제 해결 및 사용법에 대해서는:
- 포괄적인 문서는 [확장 README](https://github.com/status-im/status-network-scaffold-extension)를 확인하세요
- [Telegram 커뮤니티](https://t.me/statusl2)에 참여하여 지원을 요청하세요
- [네트워크 세부사항](/general-info/network-details)을 확인하세요
