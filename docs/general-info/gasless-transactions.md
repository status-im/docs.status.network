---
sidebar_label: '⛽ Gasless Transactions'
title: Gasless Transactions on Status Network
description: Learn how Status Network implements gasless transactions using RLN (Rate Limiting Nullifier), and Karma tiers for spam prevention and fair usage.
keywords: [Status Network, Gasless Transactions, Linea, RLN, Rate Limiting Nullifier, Karma, Zero-Knowledge Proofs, ZKP, Soulbound Tokens, Blockchain, Layer 2, L2, Spam Prevention]
---

# Gasless Transactions in Status Network


Status Network aims to introduce gasless transactions at scale. The key component of this gasless approach is Vac's Rate Limiting Nullifier, which permits transaction rate limitation without the need for traditional gas fees. The document describes the architecture and integration elements needed to safely enable gasless transactions.

### 1.2 RLN

RLN is a zero-knowledge system designed to prevent spam without compromising user privacy unless a violation occurs. It replaces traditional gas fees with cryptographic rate limits enforced via ZKPs and Shamir's Secret Sharing.

RLN characteristics:

- **Zero-Knowledge Proofs:** Users generate ZKPs verifying their RLN group membership without revealing their identity. The group membership indicates the maximum gasless transaction throughput for each tier.
- **Shamir's Secret Sharing and Nullifiers:** Users hold a secret key used to generate unique nullifiers for transactions. If a user exceeds their transaction limit within an epoch (e.g., block or timestamp), their secret key becomes recoverable, exposing them.
- **Spam Detection:** Users exceeding limits effectively reveal their secret, leading to penalties like Deny List inclusion, higher future gas costs, or potential token slashing.

### 1.3. RLN Membership Management

RLN uses Sparse Merkle Trees to efficiently handle large-scale membership proofs. A benchmarking study determined that a tree height of 20, supporting 1 million accounts, provides optimal performance for proof generation and verification. For scalability beyond 1 million accounts, multiple SMTs can be used with a registry to direct users to the appropriate tree.

The Prover includes a Registrar Service that listens for events from the Karma Contract, where Karma is allocated to new addresses. Upon detecting such an event, the Registrar Service onboards the user to the RLN Membership Contract by generating and registering their RLN credentials (identitySecretHash and identityCommitment). The RLN Prover Service generates proofs for transactions, which are streamed via gRPC to the RLN Verifier in the Sequencer. The Verifier stores these proofs in memory and matches them with incoming transactions based on transaction hashes, as the process is asynchronous.

```mermaid
graph TD
    A[User Wallet] -->|First L2 Action via Whitelisted App| B(Karma Issued)
    A -->|Bridges into SN| B
    B -->|Soulbound Token| C{Tier Assignment}

    subgraph "Tier Limits"
        D[Basic]
        E[Active]
        F[Regular]
        G[Power User]
        H[High-Throughput]
        I[S-Tier]
    end

    C --> D
    C --> E
    C --> F
    C --> G
    C --> H
    C --> I

    %% RLN Flow
    A -->|Submits Gasless Tx| J[RPC Node]
    J -->|Forwards Tx Data| K[Prover]
    subgraph "Prover Services"
        K --> K1[Registrar Service]
        K --> K2[RLN Prover Service]
        K --> K3[Karma API Service]
        K1 -->|Listens for Karma Events| L[Karma Contract]
        K1 -->|Onboards User| M[RLN Membership Contract]
        K2 -->|Generates RLN Proof| N[gRPC Stream]
        K3 -->|Tracks Tx and Karma Tiers| O[Storage]
    end
    J -->|Sends Tx| P[Sequencer]
    N -->|Streams RLN Proof| P

    %% Sequencer Section
    subgraph "Sequencer Operations"
        P --> Q[RLN Verifier Plugin]
        Q -->|Subscribes to gRPC Stream| N
        Q -->|Stores Proofs In-Memory| R{Match Tx Hash}
        R -->|Validates RLN Proof| S{Quota Check}
        S -->|Within Limit| T[Add to Mempool]
        S -->|Exceeds Limit| U[Deny List]
        U -->|Flags Address| V[Premium Gas Required]
        Q -->|Spam Detected| W[Slash RLN Stake]
    end

    %% Gas Estimation Flow
    A -->|Requests Gas Estimate| X[Modified linea_estimateGas RPC]
    X -->|Queries| U
    U -->|Address Listed| Y[Apply Premium Gas Multiplier]
    Y -->|Pay Premium Gas| Z[Remove from Deny List]
    Z -->|Earn Karma| B
    U -->|Address Not Listed| AA[Standard Gas Estimate]

    %% Styling
    classDef wallet fill:#FFD700,stroke:#DAA520,color:#333
    classDef karma fill:#98FB98,stroke:#2E8B57,color:#333
    classDef tier fill:#87CEFA,stroke:#4682B4,color:#333
    classDef tierNode fill:#ADD8E6,stroke:#4682B4,color:#333
    classDef rln fill:#FFB6C1,stroke:#DB7093,color:#333
    classDef sequencer fill:#DDA0DD,stroke:#BA55D3,color:#333
    classDef gas fill:#FFA07A,stroke:#FF4500,color:#333

    class A wallet
    class B,L karma
    class C tier
    class D,E,F,G,H,I tierNode
    class J,K,K1,K2,K3,M,N,O rln
    class P,Q,R,S,T,U,V,W sequencer
    class X,Y,Z,AA gas
```

## 3. System Components

### 3.1 Prover

The Prover is a system comprising three services:

1. **Registrar Service**: Listens for Karma allocation events from the Karma Contract. When a new address receives Karma, it onboards the user to the RLN Membership Contract by generating RLN credentials and registering them.
2. **RLN Prover Service**: Generates RLN proofs for transactions using the Zerokit library. Proofs are streamed directly to the RLN Verifier in the Sequencer via a gRPC stream.
3. **Karma API Service**: Tracks transactions made by users within an epoch and maintains their Karma tier status. It stores transaction data in an internal database for efficient querying and tier management.

These services ensure secure credential management, proof generation, and transaction tracking, with gRPC enabling low-latency communication with the Sequencer.

### 3.2 RLN Verifier

The RLN Verifier is a besu plugin inside the sequencer, leveraging RLN's Zerokit Rust library via Java Native Interface. [A PoC verified JNI feasibility.](https://github.com/nadeemb53/verify-rln-proofs-java)
The Verifier:

- Subscribes to the gRPC stream from the RLN Prover Service to receive RLN proofs as they are generated.
- Stores proofs in memory and matches them with incoming transactions based on transaction hashes, accounting for the asynchronous arrival of transactions (via RPC Node) and proofs (via gRPC).
- Verifies proof authenticity, nullifier uniqueness, and user transaction quotas.

Transactions failing verification are rejected, and users may be temporarily added to the Deny List.

### 3.3 Deny List

The Deny List temporarily restricts users exceeding quotas or engaging in spam:

- Entries expire after a set duration (e.g., hours or days) based on the throughput tiers
- Users can bypass restrictions by paying premium gas fees
- Paying premium fees removes users from the list and earns additional Karma

### 3.4 `linea_estimateGas` RPC Modification

The linea_estimateGas method is customised to account for users on the Deny List:

- Checks user's Deny List status
- Adds premium gas multipliers if needed
- Provides transparency and accurate gas estimations to the users
