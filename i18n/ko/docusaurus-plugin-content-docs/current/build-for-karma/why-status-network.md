---
title: Status Network에서 구축해야 하는 이유
description: Status Network에서 구축해야 하는 이유 — 가스리스 트랜잭션, Karma 평판, 지속 가능한 공공 자금 조달, 그리고 다른 L2와의 비교.
keywords: [Status Network, why build, L2 comparison, gasless, Karma, public funding, developer advantages, Linea zkEVM]
sidebar_position: 2
---

여러분이 선택할 수 있는 수십 개의 L2들 중에서 스테이터스 네트워크를 주목할 만한 이유를 소개합니다.

<div className="comparison-grid">
  <a className="comparison-row-link" href="#sustainable-public-funding">
    <div className="comparison-row">
      <div className="comparison-label">개발자 자금</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>앱의 성과에 따라 확장되는 지속적인 수익 풀</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">일반적인 L2</div>
          <p>몇 달마다 재신청해야하는 일회성 보조금</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#gasless-by-default">
    <div className="comparison-row">
      <div className="comparison-label">사용자 가스</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>카르마로 완전히 무료 — 페이마스터, 릴레이어, 계정 추상화 등 설정 불필요</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">일반적인 L2</div>
          <p>사용자가 가스를 지불하거나, 개발자가 페이마스터 + 릴레이어 인프라 운영</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#built-in-reputation-with-karma">
    <div className="comparison-row">
      <div className="comparison-label">사용자 평판</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>카르마를 통한 네트워크 전역 평판 시스템 — 스팸 방지, 신뢰 신호, 기능 제한 등 활용 가능</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">일반적인 L2</div>
          <p>없음 — 직접 구축하거나 서드파티 솔루션 사용</p>
        </div>
      </div>
    </div>
  </a>
  <a className="comparison-row-link" href="#privacy-focused-civil-goods">
    <div className="comparison-row">
      <div className="comparison-label">프라이버시</div>
      <div className="comparison-cards">
        <div className="comparison-card comparison-card--us">
          <div className="comparison-card-heading">Status Network</div>
          <p>네이티브 ZK 기반 도구 — Rate Limiting Nullifiers 등</p>
        </div>
        <div className="comparison-card comparison-card--them">
          <div className="comparison-card-heading">일반적인 L2</div>
          <p>서드파티</p>
        </div>
      </div>
    </div>
  </a>
</div>

## 지속 가능한 공공 자금 조달

스테이터스 네트워크는 일회성 보조금이나 재단 자금에 의존하지 않습니다. 대신 다음으로 공급되는 지속적인 공공 자금 풀이 있습니다:

- 브릿지된 수익 자산(ETH, 스테이블코인 등)으로부터 나오는 **네이티브 수익**
- 네이티브 탈중앙화 거래소의 **DEX 수수료**
- 거부 목록 사용자의 **프리미엄 가스 수수료**
- 향후 출시될 추가적인 **네이티브 앱들의 수수료**(대출, NFT, 런치패드 등)

자세히 보기 → [Economic Model](/overview/tokenomics/economic-model)

카르마 보유자는 이 공공 자금 풀이 앱과 빌더에게 어떻게 분배될지 투표로 결정합니다. 앱이 활동과 트랜잭션 볼륨을 생성하며 네트워크에 더 많이 기여할수록 앱 사용자와 함께 더 많은 카르마를 획득하고, 향후 배분에 대한 영향력을 키울 수 있습니다.

**빌더에게 의미하는 바:**

- 몇 달마다 재신청해야 하는 일회성 보조금이 아니라 반복 수익 스트림에 자동 가입
- 앱의 성과에 따라 자금이 확장됨. 사용자가 증가 -> 카르마 증가 -> 더 많은 인센티브
- 커뮤니티 거버넌스 배분, 재단 리스크 없음

자세히 보기 → [Public Funding](/overview/tokenomics/public-funding)

## 가스리스를 디폴트로

대부분의 체인들은 "가스리스"를 위해서 페이마스터 설정, 릴레이어 운영, 또는 계정 추상화 SDK 적용 등 개발자의 추가적인 조치가 필요합니다. 스테이터스 네트워크에서는 가스리스가 기본 동작입니다.

Karma를 보유한 주소는 일정량의 무료 트랜잭션을 할당 받습니다. 페이마스터 X. 릴레이어 X. 특별한 지갑 설정 X. 자격이 있는 사용자에게 앱이 가스 수수료 없이 작동합니다.

**빌더에게 의미하는 바:**

- 가스로 인한 UX 마찰 없음. 온보딩 과정에서 "가스용 ETH 브릿지" 때문에 사용자를 잃지 않음
- ERC-4337, 메타 트랜잭션 또는 가스 릴레이 패턴 별도 적용 불필요
- 사용자 대신 가스 지불을 위한 인프라 비용 없음

가스리스 시스템은 [Rate Limiting Nullifiers (RLN)](/overview/general-info/gasless-transactions/#rln)라는 영지식 스팸 방지 메커니즘을 기반으로 시퀀서 레벨에서 적용됩니다.

## 내장된 카르마 평판 시스템

카르마는 스테이킹, 브릿징, 유동성 제공, 앱 사용 또는 프리미엄 가스 지불과 같은 진정한 네트워크 참여를 통해 모든 사용자가 획득하는 소울바운드(비양도) 토큰입니다. 구매하거나 전송할 수 없습니다.

**빌더에게 의미하는 바:**

- **신뢰 신호**: 높은 카르마 티어 사용자는 검증된 활발한 참여자임을 의미함
- **기능 제한**: 빌더는 사용자의 카르마 등급에 따라 프리미엄 기능, 우선 접근, 더 나은 이율 등 기능을 제한적으로 제공 수 있음
- **스팸 방지**: 네트워크 자체가 RLN 메커니즘으로 스팸을 방지하며, 카르마 등급이 가스리스 트랜잭션 할당량을 직접 제어하므로 높은 카르마 티어 사용자는 본질적으로 스팸 가능성이 낮음
- **콜드 스타트 문제 없음**: 앱은 생태계에서 네트워크 전역으로 구축된 평판의 혜택을 바로 적용할 수 있음. 처음부터 사용자 기반을 다져야 하는 문제 해소.

자세히 보기 → [Karmic Tokenomics](/overview/tokenomics/karmic-tokenomics)

## 프라이버시 중심적인 공공재

스테이터스 네트워크는 [Institute of Free Technology (IFT)](https://free.technology)의 기술로 구축되었습니다. 특히 가스리스 트랜잭션 시스템은 [Vac](https://vac.dev)(IFT 연구 부서)이 개발한 영지식 스팸 방지 메커니즘인 [RLN (Rate Limiting Nullifiers)](https://vac.dev/rln)를 사용합니다.

우리는 디지털 시대의 시민권을 보호하는 공공재를 구축하고자 하는 IFT의 기술 비전과 함께합니다. 스테이터스 네트워크는 가스리스 특성을 활용하여 프라이버시 중심 모듈을 추가할 예정입니다.

<!-- 자세히 보기 → [Status Network and Privacy](/overview/general-info/privacy) -->

## EVM 호환성

스테이터스 네트워크는 [Linea zkEVM](https://linea.build) 스택을 기반으로 구축되었습니다. 이는 빌더가 다음을 할 수 있음을 의미합니다:

- 기존 Solidity 컨트랙트 수정 없이 그대로 배포
- Hardhat, Foundry, ethers.js, viem 등 표준 이더리움 도구 사용
- 표준 JSON-RPC 메서드 사용(가스 수수료 관련 일부 메서드 제외. 자세한 내용은 [JSON-RPC API](/tools/rpc/json-rpc) 참조)
- Linea의 롤업 아키텍처에서 상속된 영지식 증명 기반 보안

커스텀 VM 없음. 비표준 opcode 없음. 컨트랙트나 백엔드 재작성 불필요.
