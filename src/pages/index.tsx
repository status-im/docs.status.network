import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function getDocCards() {
  return [
    {
      title: translate({
        id: 'homepage.docCards.overview.title',
        message: 'Overview',
        description: 'Homepage docs card title for Overview',
      }),
      description: translate({
        id: 'homepage.docCards.overview.description',
        message:
          "Learn about Status Network's architecture, gasless transactions, tokenomics, and the sustainable public funding model",
        description: 'Homepage docs card description for Overview',
      }),
      link: '/overview',
      linkText: translate({
        id: 'homepage.docCards.overview.linkText',
        message: 'Read More',
        description: 'Homepage docs card link text for Overview',
      }),
      iconClass: styles.cardIconOverview,
      icon: '🌐',
    },
    {
      title: translate({
        id: 'homepage.docCards.build.title',
        message: 'Build for Karma',
        description: 'Homepage docs card title for Build for Karma',
      }),
      description: translate({
        id: 'homepage.docCards.build.description',
        message:
          'Guides, tutorials, and references for deploying contracts, integrating Karma, and building gasless apps',
        description: 'Homepage docs card description for Build for Karma',
      }),
      link: '/build-for-karma',
      linkText: translate({
        id: 'homepage.docCards.build.linkText',
        message: 'Read More',
        description: 'Homepage docs card link text for Build for Karma',
      }),
      iconClass: styles.cardIconBuild,
      icon: '🛠',
    },
    {
      title: translate({
        id: 'homepage.docCards.tools.title',
        message: 'Tools',
        description: 'Homepage docs card title for Tools',
      }),
      description: translate({
        id: 'homepage.docCards.tools.description',
        message:
          'RPC endpoints, bridges, testnet faucets, block explorers, and infrastructure partners',
        description: 'Homepage docs card description for Tools',
      }),
      link: '/tools',
      linkText: translate({
        id: 'homepage.docCards.tools.linkText',
        message: 'Read More',
        description: 'Homepage docs card link text for Tools',
      }),
      iconClass: styles.cardIconTools,
      icon: '⚡',
    },
  ];
}

function getCommunityLinks() {
  return [
    {
      title: translate({
        id: 'homepage.community.telegram.title',
        message: 'Join our Telegram',
        description: 'Homepage community card title for Telegram',
      }),
      description: translate({
        id: 'homepage.community.telegram.description',
        message: 'Connect with other Status Network builders and get support',
        description: 'Homepage community card description for Telegram',
      }),
      href: 'https://t.me/statusl2',
    },
    {
      title: translate({
        id: 'homepage.community.github.title',
        message: 'View on GitHub',
        description: 'Homepage community card title for GitHub',
      }),
      description: translate({
        id: 'homepage.community.github.description',
        message: 'Explore the source code and contribute to the ecosystem',
        description: 'Homepage community card description for GitHub',
      }),
      href: 'https://github.com/status-im',
    },
    {
      title: translate({
        id: 'homepage.community.official.title',
        message: 'Official Links',
        description: 'Homepage community card title for official links',
      }),
      description: translate({
        id: 'homepage.community.official.description',
        message: 'Website, social channels, and all official resources in one place',
        description: 'Homepage community card description for official links',
      }),
      href: '/overview/other/official-links',
    },
  ];
}

function MergerBanner() {
  return (
    <div className={styles.mergerBanner}>
      <div className={styles.mergerBannerContent}>
        <span className={styles.mergerBannerTag}>
          <Translate id="homepage.merger.tag" description="Homepage merger banner tag/eyebrow">
            Important migration update
          </Translate>
        </span>
        <span className={styles.mergerBannerTitle}>
          <Translate id="homepage.merger.title" description="Homepage merger banner title">
            Status Network is merging into the Linea stack.
          </Translate>
        </span>
        <span className={styles.mergerBannerBreak} aria-hidden="true" />
        <span className={styles.mergerBannerItems}>
          <span className={styles.mergerBannerItem}>
            <Translate id="homepage.merger.testnet.heading" description="Homepage merger CTA heading for testnet ETH holders">
              If you have testnet ETH on Status Network Hoodi:
            </Translate>
            {' '}
            <Translate id="homepage.merger.testnet.body" description="Homepage merger CTA body for testnet ETH holders">
              Withdraw by May 15 by bridging L2 → L1 at bridge.status.network. Hoodi (chain ID 374) RPC and bridge shut down on May 15, and any L2 balance left after that is unrecoverable. The Hoodi snapshot is already taken, so withdrawing now does not affect SNT + LINEA reward eligibility.
            </Translate>
          </span>
          <span className={styles.mergerBannerBreak} aria-hidden="true" />
          <span className={styles.mergerBannerItem}>
            <Translate id="homepage.merger.predeposit.heading" description="Homepage merger CTA heading for pre-deposit vault holders">
              If you participated in pre-deposit vaults (ETH / GUSD / SNT / LINEA):
            </Translate>
            {' '}
            <Translate id="homepage.merger.predeposit.body" description="Homepage merger CTA body for pre-deposit vault holders">
              No action is needed yet. Vaults remain fully backed and safe. When withdrawals open, claim your deposits + accrued yield + liquid rewards from the 20M SNT + 20M LINEA pool on Linea Mainnet via the claim interface.
            </Translate>
          </span>
          <span className={styles.mergerBannerBreak} aria-hidden="true" />
          <span className={styles.mergerBannerBreak} aria-hidden="true" />
        </span>
        <span className={styles.mergerBannerLinks}>
          <Link
            to="https://status.network/blog/status-network-merges-with-linea-scaling-gasless-privacy-upstream"
            className={styles.mergerBannerLink}
          >
            <Translate id="homepage.merger.action.announcement" description="Homepage merger banner primary action label">
              Read announcement
            </Translate>{' '}→
          </Link>
          <Link to="https://bridge.status.network" className={styles.mergerBannerLink}>
            <Translate id="homepage.merger.action.bridge" description="Homepage merger banner secondary action label">
              Open bridge
            </Translate>{' '}→
          </Link>
        </span>
      </div>
    </div>
  );
}

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
        <p className={styles.heroSubtitle}>
          <Translate
            id="homepage.hero.subtitle"
            description="Homepage hero subtitle"
          >
            Welcome to
          </Translate>
        </p>
        <h1 className={styles.heroTitle}>
          <Translate id="homepage.hero.title" description="Homepage hero title">
            Status Network Documentation
          </Translate>
        </h1>
        <p className={styles.heroDescription}>
          <Translate
            id="homepage.hero.description"
            description="Homepage hero description"
          >
            Fully gasless Ethereum L2 with composable privacy and built-in spam protection for humans and bots
          </Translate>
        </p>
      </div>
    </header>
  );
}

function DocCards() {
  const docCards = getDocCards();

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <Translate
          id="homepage.docs.sectionTitle"
          description="Homepage docs section title"
        >
          Navigate the Docs
        </Translate>
      </h2>
      <p className={styles.sectionSubtitle}>
        <Translate
          id="homepage.docs.sectionSubtitle"
          description="Homepage docs section subtitle"
        >
          Start developing on Status Network today
        </Translate>
      </p>
      <div className={styles.cardGrid}>
        {docCards.map((card) => (
          <Link key={card.link} to={card.link} className={styles.card}>
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
          <h3>
            <Translate
              id="homepage.quickStart.title"
              description="Homepage quick start title"
            >
              Ready to build?
            </Translate>
          </h3>
          <p>
            <Translate
              id="homepage.quickStart.description"
              description="Homepage quick start description"
            >
              Set up your wallet, grab testnet tokens, and deploy your first
              contract in minutes
            </Translate>
          </p>
        </div>
        <Link
          to="/overview/introduction/quick-start"
          className={styles.quickStartButton}
        >
          <Translate
            id="homepage.quickStart.button"
            description="Homepage quick start button label"
          >
            Quick Start
          </Translate>{' '}
          →
        </Link>
      </div>
    </div>
  );
}

function Community() {
  const communityLinks = getCommunityLinks();

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <Translate
          id="homepage.community.sectionTitle"
          description="Homepage community section title"
        >
          Connect with us
        </Translate>
      </h2>
      <p className={styles.sectionSubtitle}>
        <Translate
          id="homepage.community.sectionSubtitle"
          description="Homepage community section subtitle"
        >
          Keep up to date with the latest from the Status Network community
        </Translate>
      </p>
      <div className={styles.communityGrid}>
        {communityLinks.map((item) => (
          <Link
            key={item.href}
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
      title={translate({
        id: 'homepage.layout.title',
        message: 'Status Network Docs: Gasless L2 & Reputation System',
        description: 'Homepage layout title',
      })}
      description={translate({
        id: 'homepage.layout.description',
        message:
          'Official Status Network docs for the gasless Ethereum L2. Learn about Karma reputation, RLN spam protection, and native yield for both humans and bots.',
        description: 'Homepage layout description',
      })}
    >
      <MergerBanner />
      <Hero />
      <DocCards />
      <QuickStart />
      <Community />
    </Layout>
  );
}
