# RPC 엔드포인트

Status Network는 네트워크와 상호작용할 수 있는 공개 RPC(Remote Procedure Call) 엔드포인트를 제공합니다.

## 공개 RPC URL

```
https://public.sepolia.rpc.status.network
```

## RPC 사용하기

### MetaMask에 추가하기
이 RPC를 사용하여 Status Network를 지갑에 추가하는 방법은 [네트워크 추가 가이드](/overview/general-info/add-status-network)를 참조하세요.

### Web3 라이브러리 설정

```javascript
// Web3.js
const web3 = new Web3('https://public.sepolia.rpc.status.network');

// Ethers.js v5
const provider = new ethers.providers.JsonRpcProvider('https://public.sepolia.rpc.status.network');
```

## 사용 가능한 메소드

RPC 엔드포인트는 다음을 포함한 표준 Ethereum JSON-RPC 메소드를 지원합니다:

- `eth_blockNumber`: 최신 블록 번호 가져오기
- `eth_getBalance`: 계정 잔액 가져오기
- `eth_sendRawTransaction`: 서명된 트랜잭션 전송
- `eth_call`: 트랜잭션을 생성하지 않고 호출 실행
- `eth_getLogs`: 이벤트 로그 가져오기
- `eth_getTransactionByHash`: 트랜잭션 세부정보 가져오기
- `eth_getBlockByNumber`: 블록 정보 가져오기

지원되는 RPC 메소드의 전체 목록과 자세한 사양은 Status Network가 Linea 기술을 기반으로 하므로 [Linea API 참조](https://docs.linea.build/api/reference)를 참조하세요.

## 속도 제한

공개 RPC 엔드포인트는 공정한 사용을 위해 다음과 같은 속도 제한이 있습니다:
- IP당 초당 10개의 요청
- IP당 하루 100,000개의 요청

더 높은 제한이 필요한 경우 텔레그램으로 문의하세요.

## 지원

RPC 엔드포인트에 문제가 발생한 경우:
- 지원을 받으려면 [텔레그램 커뮤니티](https://t.me/statusl2)에 참여
- 애플리케이션에 대체 RPC 전략 구현 고려
