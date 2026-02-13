import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/pages/index.module.css';

const docCards = [
  {
    title: '概览',
    description:
      '了解 Status Network 的架构、免 Gas 交易、代币经济学以及可持续的公共资助模式。',
    link: '/overview',
    linkText: '了解更多',
    iconClass: styles.cardIconOverview,
    icon: '🌐',
  },
  {
    title: 'Build for Karma',
    description:
      '部署合约、集成 Karma 和构建免 Gas 应用的指南、教程和参考文档。',
    link: '/build-for-karma',
    linkText: '了解更多',
    iconClass: styles.cardIconBuild,
    icon: '🛠',
  },
  {
    title: '工具',
    description:
      'RPC 端点、跨链桥、测试网水龙头、区块浏览器和基础设施合作伙伴。',
    link: '/tools',
    linkText: '了解更多',
    iconClass: styles.cardIconTools,
    icon: '⚡',
  },
];

const communityLinks = [
  {
    title: '加入我们的 Telegram',
    description: '与其他 Status Network 开发者交流并获取支持。',
    href: 'https://t.me/statusl2',
  },
  {
    title: '在 GitHub 上查看',
    description: '探索源代码并为生态系统做贡献。',
    href: 'https://github.com/status-im',
  },
  {
    title: '官方链接',
    description: '网站、社交频道和所有官方资源汇总。',
    href: '/overview/other/official-links',
  },
];

function Hero() {
  const logoSrc = useBaseUrl('/img/sn_logo.svg');
  return (
    <header className={styles.hero}>
      <div className={styles.heroContent}>
        <img
          src={logoSrc}
          alt="Status Network"
          className={styles.heroLogo}
          width={72}
          height={72}
        />
        <p className={styles.heroSubtitle}>欢迎来到</p>
        <h1 className={styles.heroTitle}>Status Network 文档</h1>
        <p className={styles.heroDescription}>
          首个原生免 Gas 的以太坊 L2 — 专为社交应用和游戏优化，为开发者提供可持续的公共资助。
        </p>
      </div>
    </header>
  );
}

function DocCards() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>浏览文档</h2>
      <p className={styles.sectionSubtitle}>
        立即开始在 Status Network 上开发。
      </p>
      <div className={styles.cardGrid}>
        {docCards.map((card) => (
          <Link key={card.title} to={card.link} className={styles.card}>
            <div className={card.iconClass}>{card.icon}</div>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardDescription}>{card.description}</div>
            <span className={styles.cardLink}>
              {card.linkText}{' '}
              <span className={styles.cardLinkArrow}>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <div className={styles.quickStart}>
      <div className={styles.quickStartInner}>
        <div className={styles.quickStartText}>
          <h3>准备开始构建？</h3>
          <p>
            设置钱包，获取测试网代币，几分钟内部署您的第一个合约。
          </p>
        </div>
        <Link
          to="/overview/introduction/quick-start"
          className={styles.quickStartButton}
        >
          快速开始 →
        </Link>
      </div>
    </div>
  );
}

function Community() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>与我们联系</h2>
      <p className={styles.sectionSubtitle}>
        了解 Status Network 社区的最新动态。
      </p>
      <div className={styles.communityGrid}>
        {communityLinks.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className={styles.communityCard}
          >
            <div className={styles.communityCardTitle}>{item.title}</div>
            <div className={styles.communityCardDescription}>
              {item.description}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Status Network 文档"
      description="Status Network 文档 — 首个原生免 Gas 的以太坊 L2，为开发者提供可持续的公共资助。"
    >
      <Hero />
      <DocCards />
      <QuickStart />
      <Community />
    </Layout>
  );
}
