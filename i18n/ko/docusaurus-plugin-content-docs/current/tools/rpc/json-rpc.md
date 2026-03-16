---
title: JSON-RPC API
description: 빌더를 위한 Status Network JSON-RPC API 레퍼런스.
keywords:
  [
    Status Network,
    JSON-RPC,
    Linea,
    EIP-1559,
    eth_estimateGas,
    linea_estimateGas,
    Karma,
    gasless,
  ]
---

Status Network는 Linea zkEVM을 기반으로 하므로, **대부분의 JSON-RPC 메서드는 표준 EVM 노드와 동일하게 동작합니다**.

지원되는 표준 메서드와 전체 목록은 다음의 공식 문서를 참조하세요:

- **[이더리움 JSON-RPC API](https://ethereum.github.io/execution-apis/api-documented/)** — 표준 이더리움 RPC 메서드
- **[Linea JSON-RPC API 레퍼런스](https://docs.linea.build/api/reference)** — `linea_estimateGas`를 포함한 Linea 전용 메서드

## Status Network 확장

Status Network는 Linea의 표준 JSON-RPC에 카르마가 적용된 수수료 추정을 추가합니다:

### `linea_estimateGas`

Linea에서는 가스 추정을 위해 [`linea_estimateGas`](https://docs.linea.build/api/reference/linea-estimategas)를 사용하길 권장하고 있으며, 해당 단일 호출은 `gasLimit`, `baseFeePerGas`, `priorityFeePerGas`를 반환합니다.

Status Network는 `linea_estimateGas`에 카르마를 적용한 동작을 추가합니다:

- **가스리스 사용자**: 사용 가능한 Karma 할당량이 남아있는 사용자에 한해 `baseFeePerGas`와 `priorityFeePerGas`를 0으로 반환합니다
- **거부 목록 사용자**: 거부 목록에 있는 사용자의 경우 수수료 필드에 프리미엄 배수를 적용합니다

### Status Network RPC 차이점

Linea에서 `linea_estimateGas`는 이미 권장 메서드입니다. L1 검증 비용과 데이터 압축이 반영된 수수료 값을 반환하기 때문인데, 이는 `eth_estimateGas` 및 다른 `eth_` 네임스페이스 호출에서는 적용되지 않는 정보입니다.
Status Network의 포크는 `linea_estimateGas`를 더욱 확장하여 카르마를 적용하며, 다른 모든 JSON-RPC 메서드는 호환성을 위해 표준의 구현을 유지합니다.

이는 `eth_` 메서드를 사용하는 기존의 수수료 플로우(예: `eth_gasPrice`, `eth_maxPriorityFeePerGas`, `eth_feeHistory`)가 **부정확한 수수료** 제안으로 이어질 수 있음을 의미합니다. Linea의 L2 전용 가격 책정과 Status Network의 카르마 조정이 모두 누락되기 때문입니다.

Status Network에서는 `linea_estimateGas`를 `gasLimit`, `baseFeePerGas`, `priorityFeePerGas`의 단일 진실 공급원으로 사용하세요.

기존 Linea 동작은 [Linea의 가스비 가이드](https://docs.linea.build/network/how-to/gas-fees)와 [Linea의 `linea_estimateGas` 레퍼런스](https://docs.linea.build/api/reference/linea-estimategas)를 참조하세요.

:::info
코드 예제, 마이그레이션 단계, 자주 빠지는 함정을 포함한 상세한 구현 가이드는 [카르마 사용](/build-for-karma/guides) 가이드를 참조하세요.
:::

### 추가 리소스

- [Linea의 가스비 가이드](https://docs.linea.build/network/how-to/gas-fees)
- [Linea의 `linea_estimateGas` 레퍼런스](https://docs.linea.build/api/reference/linea-estimategas)
- [카르마 토크노믹스](/overview/tokenomics/karmic-tokenomics) — Karma가 가스비에 미치는 영향
- [가스리스 트랜잭션](/overview/general-info/gasless-transactions) — RLN 기반 가스리스 시스템의 기술적 세부사항
