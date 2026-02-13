import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const docCards = [
  {
    title: 'Overview',
    description:
      'Learn about Status Network\'s architecture, gasless transactions, tokenomics, and the sustainable public funding model.',
    link: '/overview',
    linkText: 'Read More',
    iconClass: styles.cardIconOverview,
    icon: '🌐',
  },
  {
    title: 'Build for Karma',
    description:
      'Guides, tutorials, and references for deploying contracts, integrating Karma, and building gasless apps.',
    link: '/build-for-karma',
    linkText: 'Read More',
    iconClass: styles.cardIconBuild,
    icon: '🛠',
  },
  {
    title: 'Tools',
    description:
      'RPC endpoints, bridges, testnet faucets, block explorers, and infrastructure partners.',
    link: '/tools',
    linkText: 'Read More',
    iconClass: styles.cardIconTools,
    icon: '⚡',
  },
];

const communityLinks = [
  {
    title: 'Join our Telegram',
    description: 'Connect with other Status Network builders and get support.',
    href: 'https://t.me/statusl2',
  },
  {
    title: 'View on GitHub',
    description: 'Explore the source code and contribute to the ecosystem.',
    href: 'https://github.com/status-im',
  },
  {
    title: 'Official Links',
    description: 'Website, social channels, and all official resources in one place.',
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
        <p className={styles.heroSubtitle}>Welcome to</p>
        <h1 className={styles.heroTitle}>Status Network Documentation</h1>
        <p className={styles.heroDescription}>
          The first natively gasless Ethereum L2 — optimized for social apps and
          games, with sustainable public funding for builders.
        </p>
      </div>
    </header>
  );
}

function DocCards() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Navigate the Docs</h2>
      <p className={styles.sectionSubtitle}>
        Start developing on Status Network today.
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
          <h3>Ready to build?</h3>
          <p>
            Set up your wallet, grab testnet tokens, and deploy your first
            contract in minutes.
          </p>
        </div>
        <Link
          to="/overview/introduction/quick-start"
          className={styles.quickStartButton}
        >
          Quick Start →
        </Link>
      </div>
    </div>
  );
}

function Community() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Connect with us</h2>
      <p className={styles.sectionSubtitle}>
        Keep up to date with the latest from the Status Network community.
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
      title="Status Network Documentation"
      description="Documentation for Status Network — the first natively gasless Ethereum L2 with sustainable public funding for builders."
    >
      <Hero />
      <DocCards />
      <QuickStart />
      <Community />
    </Layout>
  );
}
