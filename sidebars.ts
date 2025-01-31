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
          label: '🏠 Home',
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
          id: 'tokenomics/snt-token',
          label: '💎 SNT Token',
        },
        {
          type: 'doc',
          id: 'tokenomics/aura-token',
          label: '💠 Aura Token',
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
              label: '💰 Tokens',
            },
            {
              type: 'doc',
              id: 'general-info/contract-addresses/testnet-contracts',
              label: '🧪 Testnet Contracts',
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
              id: 'general-info/bridge/bridge-to-status',
              label: '➡️ Bridge to Status',
            },
            {
              type: 'doc',
              id: 'general-info/bridge/bridge-from-status',
              label: '⬅️ Bridge from Status',
            },
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
          type: 'doc',
          id: 'tutorials/ethers-tutorial',
          label: '📘 Ethers Tutorial',
        },
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
              id: 'tutorials/deploying-contracts/using-thirdweb',
              label: '🌐 Using Thirdweb',
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
          ],
        },
        {
          type: 'category',
          label: '🔍 Verifying Your Smart Contract',
          items: [
            {
              type: 'doc',
              id: 'tutorials/verifying-contracts/using-hardhat',
              label: '🎩 Using Hardhat',
            },
            {
              type: 'doc',
              id: 'tutorials/verifying-contracts/using-foundry',
              label: '⚒️ Using Foundry',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'SECURITY',
      items: [
        {
          type: 'doc',
          id: 'security/security-model',
          label: '🛡️ Security Model',
        },
        {
          type: 'doc',
          id: 'security/security-upgrades',
          label: '⬆️ Security Upgrades',
        },
      ],
    },
    {
      type: 'category',
      label: 'OTHER DOCS',
      items: [
        {
          type: 'doc',
          id: 'other/audits',
          label: '🔒 Audits',
        },
        {
          type: 'doc',
          id: 'other/official-links',
          label: '🔗 Official Links',
        },
        {
          type: 'doc',
          id: 'other/branding-guidelines',
          label: '🎨 Branding Guidelines',
        },
      ],
    },
  ],
};

export default sidebars;
