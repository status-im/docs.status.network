import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Status Network Docs',
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
          editUrl: 'https://github.com/status-im/docs.status.network/tree/develop',
          routeBasePath: '/',
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],
 headTags: [
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Status Network Docs',
        url: 'https://docs.status.network',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://docs.status.network/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Status Network',
        url: 'https://docs.status.network',
        logo: 'https://docs.status.network/img/sn_logo.svg',
        sameAs: ['https://status.network'],
      }),
    },
  ],
  themeConfig: {
    image: 'img/sn-social-card.png',
    navbar: {
      title: 'Status Network Docs',
      logo: {
        alt: 'Status Network Logo',
        src: 'img/sn_logo.svg',
      },
      items: [
        {
          label: 'Overview',
          to: '/overview',
          activeBasePath: 'overview',
        },
        {
          label: 'Build for Karma',
          to: '/build-for-karma',
          activeBasePath: 'build-for-karma',
        },
        {
          label: 'Tools',
          to: '/tools',
          activeBasePath: 'tools',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          className: 'language-dropdown',
        },
      ],
    },

    metadata: [
      // General SEO
      {
        name: 'description',
        content:
          'Official Status Network docs for the gasless Ethereum L2. Learn about Karma reputation, RLN spam protection, and native yield for both humans and bots.',
      },
      {
        name: 'keywords',
        content:
          'status network, gasless ethereum, layer 2, L2, karma, RLN, reputation, web3 documentation, blockchain, gasless transactions, native yield',
      },
      {
        name: 'author',
        content: 'Status Network',
      },

      // OpenGraph tags
      {
        property: 'og:title',
        content: 'Status Network Docs: Gasless L2 & Reputation System',
      },
      {
        property: 'og:description',
        content:
          'Official Status Network docs for the gasless Ethereum L2. Learn about Karma reputation, RLN spam protection, and native yield for both humans and bots.',
      },
      {
        property: 'og:image',
        content: 'https://docs.status.network/img/sn-social-card.png',
      },
      {
        property: 'og:url',
        content: 'https://docs.status.network',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'Status Network Docs',
      },

      // Twitter Card tags
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@statusL2',
      },
      {
        name: 'twitter:title',
        content: 'Status Network Docs: Gasless L2 & Reputation System',
      },
      {
        name: 'twitter:description',
        content:
          'Official Status Network docs for the gasless Ethereum L2. Learn about Karma reputation, RLN spam protection, and native yield for both humans and bots.',
      },
      {
        name: 'twitter:image',
        content: 'https://docs.status.network/img/sn-social-card.png',
      },
    ],

    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },

    prism: {
      additionalLanguages: ['bash', 'solidity'],
    },

    footer: {
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of use',
              to: 'https://status.network/legal/terms-of-use',
            },
            {
              label: 'Privacy policy',
              to: 'https://status.network/legal/privacy-policy',
            },
            {
              label: 'Pre-Deposit Disclaimer',
              to: 'https://status.network/legal/status-network-pre-deposit-disclaimer',
            },
          ],
        },
      ],
    },
    algolia: {
      appId: 'M7J93TRPJ9',
      apiKey: '17befa84094fd9acddd40cbb64012976',
      indexName: 'status',
      contextualSearch: true,
    },
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
      [
        '@acid-info/docusaurus-umami',
        {
          websiteId: '21aa8b2b-6bcd-4a02-90d4-e0aa2f514995',
          scriptSrc: 'https://umami.bi.status.im/script.js',
          dataDomains: 'docs.status.network',
        },
      ],
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            // Old tutorials paths to build-for-karma
            {
              from: '/tutorials/deploying-contracts/using-se2',
              to: '/build-for-karma/deploying-contracts/using-se2',
            },
            {
              from: '/tutorials/deploying-contracts/using-remix',
              to: '/build-for-karma/deploying-contracts/using-remix',
            },
            {
              from: '/tutorials/deploying-contracts/using-hardhat',
              to: '/build-for-karma/deploying-contracts/using-hardhat',
            },
            {
              from: '/tutorials/deploying-contracts/using-foundry',
              to: '/build-for-karma/deploying-contracts/using-foundry',
            },
            // Old tutorials paths to tools
            {
              from: '/tutorials/running-an-rpc',
              to: '/tools/rpc/running-an-rpc',
            },
            // Old root-level paths to overview
            {
              from: '/introduction/quick-start',
              to: '/overview/introduction/quick-start',
            },
            {
              from: '/general-info/add-status-network',
              to: '/overview/general-info/add-status-network',
            },
            {
              from: '/general-info/network-details',
              to: '/overview/general-info/network-details',
            },
            {
              from: '/general-info/gasless-transactions',
              to: '/overview/general-info/gasless-transactions',
            },
            {
              from: '/general-info/bridge/bridging-testnet',
              to: '/overview/general-info/bridge/bridging-testnet',
            },
            {
              from: '/general-info/contract-addresses/tokens',
              to: '/overview/general-info/contract-addresses/tokens',
            },
            {
              from: '/general-info/contract-addresses/testnet-contracts',
              to: '/overview/general-info/contract-addresses/testnet-contracts',
            },
            {
              from: '/general-info/contract-addresses/pre-deposit',
              to: '/overview/general-info/contract-addresses/pre-deposit',
            },
            {
              from: '/tokenomics/economic-model',
              to: '/overview/tokenomics/economic-model',
            },
            {
              from: '/tokenomics/public-funding',
              to: '/overview/tokenomics/public-funding',
            },
            {
              from: '/tokenomics/karmic-tokenomics',
              to: '/overview/tokenomics/karmic-tokenomics',
            },
            {
              from: '/tokenomics/snt-staking',
              to: '/overview/tokenomics/snt-staking',
            },
            {
              from: '/tokenomics/pre-deposits',
              to: '/overview/tokenomics/pre-deposits',
            },
            {
              from: '/other/official-links',
              to: '/overview/other/official-links',
            },
          ],
        },
      ],
  ]
} satisfies Config;

export default config;
