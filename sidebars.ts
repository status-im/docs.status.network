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
      items: [
        {
          type: 'doc',
          id: 'build-for-karma/index',
          label: '🛠 Build for Karma',
        },
        {
          type: 'category',
          label: '🚀 Deploying a Smart Contract',
          collapsed: false,
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
        {
          type: 'doc',
          id: 'build-for-karma/running-an-rpc',
          label: '🌐 Running an RPC node',
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
          type: 'doc',
          id: 'tools/rpc',
          label: '🔌 RPC',
        },
        {
          type: 'doc',
          id: 'tools/bridge',
          label: '🌉 Bridge',
        },
        {
          type: 'doc',
          id: 'tools/testnet-faucets',
          label: '🚰 Testnet Faucets',
        },
        {
          type: 'doc',
          id: 'tools/block-explorers',
          label: '🔎 Block Explorers',
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
