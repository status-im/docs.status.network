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
          editUrl: 'https://github.com/status-im/docs.status.network/tree/develop',
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: false,
        pages: false,
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
        content: 'Documentation for Status Network - The gasless network with sustainable funding for app builders. Launch and scale your social apps and games with truly free transactions.',
      },
      {
        name: 'keywords',
        content: 'status network, blockchain, web3, documentation, gasless transactions, social network, cryptocurrency',
      },
      {
        name: 'author',
        content: 'Status Network',
      },
      
      // OpenGraph tags
      {
        property: 'og:title',
        content: 'Status Network Documentation',
      },
      {
        property: 'og:description',
        content: 'Documentation for Status Network - The gasless network with sustainable funding for app builders. Launch and scale your social apps and games with truly free transactions.',
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
        content: 'Status Network Documentation',
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
        content: 'Status Network Documentation',
      },
      {
        name: 'twitter:description',
        content: 'Documentation for Status Network - The gasless network with sustainable funding for app builders. Launch and scale your social apps and games with truly free transactions.',
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
      ]
  ]
} satisfies Config;

export default config;