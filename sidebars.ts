import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  homeSidebar: [
    {
      type: 'category',
      label: 'INTRODUCTION',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'overview/index',
          label: '🌴 Home',
        },
        {
          type: 'doc',
          id: 'overview/introduction/quick-start',
          label: '⚡ Quick Start',
        },
      ],
    },
    {
      type: 'category',
      label: 'TOKENOMICS',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'overview/tokenomics/economic-model',
          label: '🤝 Economic Model',
        },
        {
          type: 'doc',
          id: 'overview/tokenomics/public-funding',
          label: '💰 Public Funding',
        },
        {
          type: 'doc',
          id: 'overview/tokenomics/karmic-tokenomics',
          label: '🐉 Karmic Tokenomics',
        },
        {
          type: 'doc',
          id: 'overview/tokenomics/snt-staking',
          label: '💎 SNT Staking',
        },
        {
          type: 'doc',
          id: 'overview/tokenomics/pre-deposits',
          label: '💰 Pre-Deposits',
        },
      ],
    },
    {
      type: 'category',
      label: 'GENERAL INFO',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'overview/general-info/network-details',
          label: '🌐 Network Details',
        },
        {
          type: 'doc',
          id: 'overview/general-info/gasless-transactions',
          label: '⛽ Gasless Transactions',
        },
        {
          type: 'doc',
          id: 'overview/general-info/add-status-network',
          label: '➕ Add Status Network',
        },
        {
          type: 'category',
          label: '🏡 Contract Addresses',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'overview/general-info/contract-addresses/tokens',
              label: '🪙 Tokens',
            },
            {
              type: 'doc',
              id: 'overview/general-info/contract-addresses/testnet-contracts',
              label: '🧪 Testnet Contracts',
            },
            {
              type: 'doc',
              id: 'overview/general-info/contract-addresses/pre-deposit',
              label: '💰 Pre-Deposit Vault Contracts',
            },
          ],
        },
        {
          type: 'category',
          label: '🌉 Bridge',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'overview/general-info/bridge/bridging-testnet',
              label: '🧪 Bridging Testnet',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'OTHER DOCS',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'overview/other/official-links',
          label: '🔗 Official Links',
        },
      ],
    },
  ],
  buildForKarmaSidebar: [
    {
      type: 'category',
      label: 'BUILD FOR KARMA',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'build-for-karma/build-for-karma-index',
      },
      items: [
        {
          type: 'doc',
          id: 'build-for-karma/why-status-network',
          label: '🌟 Why Status Network',
        },
        {
          type: 'doc',
          id: 'build-for-karma/what-to-build',
          label: '💡 What to Build',
        },
      ],
    },
    {
      type: 'category',
      label: 'USING KARMA',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'build-for-karma/guides/index',
      },
      items: [
        {
          type: 'doc',
          id: 'build-for-karma/guides/gasless-integration',
          label: '⛽ Gasless Integration',
        },
        {
          type: 'doc',
          id: 'build-for-karma/guides/reputation-integration',
          label: '🔰 Reputation Integration',
        },
      ],
    },
    {
      type: 'category',
      label: 'DEPLOYING CONTRACTS',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'build-for-karma/deploying-contracts/deploying-contracts-index',
      },
      items: [
        {
          type: 'doc',
          id: 'build-for-karma/deploying-contracts/using-hardhat',
          label: '🎩 Using Hardhat',
        },
        {
          type: 'doc',
          id: 'build-for-karma/deploying-contracts/using-foundry',
          label: '⚒️ Using Foundry',
        },
        {
          type: 'doc',
          id: 'build-for-karma/deploying-contracts/using-remix',
          label: '🎛️ Using Remix',
        },
        {
          type: 'doc',
          id: 'build-for-karma/deploying-contracts/using-se2',
          label: '🏗 Using Scaffold-ETH 2',
        },
      ],
    },
  ],
  toolsSidebar: [
    {
      type: 'category',
      label: 'TOOLS',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'tools/tools-index',
      },
      items: [
        {
          type: 'category',
          label: 'CORE INFRASTRUCTURE',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'tools/core-infrastructure/rpc-endpoints',
              label: '📡 RPC Endpoints',
            },
            {
              type: 'doc',
              id: 'tools/core-infrastructure/bridge',
              label: '🌉 Bridge',
            },
            {
              type: 'doc',
              id: 'tools/core-infrastructure/testnet-faucets',
              label: '🚰 Testnet Faucets',
            },
            {
              type: 'doc',
              id: 'tools/core-infrastructure/block-explorers',
              label: '🔎 Block Explorers',
            },
          ],
        },
        {
          type: 'category',
          label: 'RPC',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'tools/rpc/json-rpc',
              label: '🔌 JSON-RPC API',
            },
            {
              type: 'doc',
              id: 'tools/rpc/running-an-rpc',
              label: '🌐 Running an RPC Node',
            },
          ],
        },
        {
          type: 'category',
          label: 'ETHEREUM COMPATIBILITY',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'tools/ethereum-compatibility/ethereum-differences',
              label: '🔀 Ethereum Differences',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'PARTNERS',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'tools/infrastructure',
          label: '🤝 Infrastructure Partners',
        },
      ],
    },
  ],
};

export default sidebars;
