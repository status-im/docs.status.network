import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'INTRODUCTION',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'index',
          label: '🌴 Home',
        },
        {
          type: 'doc',
          id: 'introduction/quick-start',
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
          id: 'tokenomics/economic-model',
          label: '🤝 Economic Model',
        },
        {
          type: 'doc',
          id: 'tokenomics/public-funding',
          label: '💰 Public Funding',
        },  
        {
          type: 'doc',
          id: 'tokenomics/karmic-tokenomics',
          label: '🐉 Karmic Tokenomics',
        },       
        {
          type: 'doc',
          id: 'tokenomics/snt-staking',
          label: '💎 SNT Staking',
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
          id: 'general-info/network-details',
          label: '🌐 Network Details',
        },
        {
          type: 'doc',
          id: 'general-info/gasless-transactions',
          label: '⛽ Gasless Transactions',
        },
        {
          type: 'doc',
          id: 'general-info/add-status-network',
          label: '➕ Add Status Network',
        },
        {
          type: 'category',
          label: '🏡 Contract Addresses',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'general-info/contract-addresses/tokens',
              label: '🪙 Tokens',
            },
            {
              type: 'doc',
              id: 'general-info/contract-addresses/testnet-contracts',
              label: '🧪 Testnet Contracts',
            },
            {
              type: 'doc',
              id: 'general-info/contract-addresses/predeposit',
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
              id: 'general-info/bridge/bridging-testnet',
              label: '🧪 Bridging Testnet',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'TOOLS',
      collapsed: false,
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
      label: 'TUTORIALS',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '🚀 Deploying a Smart Contract',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'tutorials/deploying-contracts/using-hardhat',
              label: '🎩 Using Hardhat',
            },
            {
              type: 'doc',
              id: 'tutorials/deploying-contracts/using-foundry',
              label: '⚒️ Using Foundry',
            },
            {
              type: 'doc',
              id: 'tutorials/deploying-contracts/using-remix',
              label: '🎛️ Using Remix',
            },
            {
              type: 'doc',
              id: 'tutorials/deploying-contracts/using-se2',
              label: '🏗 Using Scaffold-ETH 2',
            },
          ],
        },
        {
          type: 'doc',
          id: 'tutorials/running-an-rpc',
          label: '🌐 Running an RPC node',
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
          id: 'other/official-links',
          label: '🔗 Official Links',
        },
      ],
    },
  ],
};

export default sidebars;
