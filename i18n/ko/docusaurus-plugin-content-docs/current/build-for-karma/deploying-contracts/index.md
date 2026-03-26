---
id: 'deploying-contracts-index'
title: '첫 번째 컨트랙트 배포하기'
description: '선호하는 배포 도구를 선택하여 Status Network에 스마트 컨트랙트를 배포하세요. Hardhat, Foundry, Remix, Scaffold-ETH 2 가이드를 제공합니다.'
keywords:
  - '스마트 컨트랙트 배포'
  - 'Status Network'
  - 'Hardhat'
  - 'Foundry'
  - 'Remix'
  - 'Scaffold-ETH 2'
  - '블록체인 배포'
  - 'EVM'
slug: '/build-for-karma/deploying-contracts'
sidebar_position: 1
---

# 첫 번째 컨트랙트 배포하기

스테이터스 네트워크는 EVM 호환이므로 표준 이더리움 도구 체인을 사용하여 컨트랙트를 배포할 수 있습니다. 워크플로에 맞는 도구를 선택하고 단계별 가이드를 따라 테스트넷에 첫 번째 컨트랙트를 배포하세요.

:::tip 시작하기 전에
[지갑에 스테이터스 네트워크를 추가](/overview/general-info/add-status-network)하고 [테스트넷 ETH](/tools/core-infrastructure/testnet-faucets)를 받아두었는지 확인하세요.
:::

## 배포 도구 선택

<div className="deploy-card-grid">

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-hardhat">
  <div className="deploy-card-icon">🎩</div>
  <div className="deploy-card-content">
    <h3>Hardhat</h3>
    <p>Solidity 컨트랙트 컴파일, 테스트, 배포를 위한 업계 표준 개발 환경. Hardhat Ignition 및 TypeScript 지원 포함.</p>
    <span className="deploy-card-tag">TypeScript · 테스트 · Ignition</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-foundry">
  <div className="deploy-card-icon">⚒️</div>
  <div className="deploy-card-content">
    <h3>Foundry</h3>
    <p>스마트 컨트랙트 개발을 위한 Rust 기반 초고속 툴킷. Solidity로 테스트를 작성하고 Cast로 컨트랙트와 상호작용하세요.</p>
    <span className="deploy-card-tag">Solidity 테스트 · Cast · 빌드</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-remix">
  <div className="deploy-card-icon">🎛️</div>
  <div className="deploy-card-content">
    <h3>Remix IDE</h3>
    <p>설치 없이 브라우저에서 사용하는 IDE — 빠른 프로토타이핑, 학습, 로컬 도구 설치 없이 간단한 컨트랙트 배포에 완벽합니다.</p>
    <span className="deploy-card-tag">브라우저 · 설치 없음 · 초보자 친화</span>
  </div>
</a>

<a className="deploy-card" href="/build-for-karma/deploying-contracts/using-se2">
  <div className="deploy-card-icon">🏗️</div>
  <div className="deploy-card-content">
    <h3>Scaffold-ETH 2</h3>
    <p>스테이터스 네트워크 확장이 사전 구성된 풀스택 스타터 키트. NextJS 프론트엔드, 컨트랙트 핫 리로드, Hardhat 및 Foundry 지원 포함.</p>
    <span className="deploy-card-tag">풀스택 · NextJS · 핫 리로드</span>
  </div>
</a>

</div>

## 어떤 것을 선택할지 모르시겠어요?

| 도구 | 적합한 용도 | 필요한 설정 |
|---|---|---|
| **Hardhat** | 복잡한 테스트 및 배포 파이프라인이 있는 프로덕션 프로젝트 | Node.js + npm |
| **Foundry** | Solidity 네이티브 테스트와 빠른 컴파일을 선호하는 개발자 | Rust 툴체인 |
| **Remix** | 빠른 실험, 학습, 간단한 일회성 배포 | 없음(브라우저만) |
| **Scaffold-ETH 2** | 처음부터 프론트엔드가 필요한 풀스택 dApp | Node.js + npm |

## 배포 후

컨트랙트가 배포되면 다음 단계를 진행하세요:

- Karma를 통해 [가스리스 트랜잭션을 적용](/build-for-karma/guides/gasless-integration)하여 사용자가 가스비를 지불할 필요 없도록 하기
- Karma를 사용한 평판 인식 기능 구축을 위한 [평판 적용 가이드 읽기](/build-for-karma/guides/reputation-integration)
