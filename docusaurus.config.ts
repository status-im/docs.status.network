import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Status Network Documentation',
  tagline: 'The Social Playground',
  url: 'https://docs.status.network',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'status-network',
  projectName: 'docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ko', 'ja'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      zh: {
        label: '中文',
        htmlLang: 'zh-CN',
      },
      ko: {
        label: '한국어',
        htmlLang: 'ko-KR',
      },
      ja: {
        label: '日本語',
        htmlLang: 'ja-JP',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/status-im/status-network-docs/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Status Network Docs',
      logo: {
        alt: 'Status Network Logo',
        src: 'img/sn_logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Tools',
          position: 'left',
          items: [
            {
              label: '🔌 RPC',
              to: '/tools/rpc',
            },
            {
              label: '👥 Multisig Wallets',
              to: '/tools/multisig-wallets',
            },
            {
              label: '🌉 Bridge',
              to: '/tools/bridge',
            },
            {
              label: '🚰 Testnet Faucets',
              to: '/tools/testnet-faucets',
            },
            {
              label: '🔎 Block Explorers',
              to: '/tools/block-explorers',
            },
            {
              label: '📊 Data Indexers',
              to: '/tools/data-indexers',
            },
            {
              label: '🔮 Oracles',
              to: '/tools/oracles',
            },
            {
              label: '🔗 Interoperability',
              to: '/tools/interoperability',
            },
            {
              label: '🎲 Randomness',
              to: '/tools/randomness',
            },
            {
              label: '🛠️ General Tooling',
              to: '/tools/general-tooling',
            },
            {
              label: '🖥️ Node Operators',
              to: '/tools/node-operators',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
          className: 'language-dropdown',
        },
        {
          href: 'https://hub.status.network',
          label: 'Hub',
          position: 'right',
          className: 'hub-button',
        },
      ],
    },
  },
} satisfies Config;

export default config;