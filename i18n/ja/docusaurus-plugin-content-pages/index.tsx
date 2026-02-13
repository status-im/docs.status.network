import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/pages/index.module.css';

const docCards = [
  {
    title: '概要',
    description:
      'Status Network のアーキテクチャ、ガスレス取引、トークノミクス、持続可能な公的資金モデルについて。',
    link: '/overview',
    linkText: '詳細を見る',
    iconClass: styles.cardIconOverview,
    icon: '🌐',
  },
  {
    title: 'Build for Karma',
    description:
      'コントラクトのデプロイ、Karma の統合、ガスレスアプリの構築に関するガイド、チュートリアル、リファレンス。',
    link: '/build-for-karma',
    linkText: '詳細を見る',
    iconClass: styles.cardIconBuild,
    icon: '🛠',
  },
  {
    title: 'ツール',
    description:
      'RPC エンドポイント、ブリッジ、テストネットフォーセット、ブロックエクスプローラー、インフラパートナー。',
    link: '/tools',
    linkText: '詳細を見る',
    iconClass: styles.cardIconTools,
    icon: '⚡',
  },
];

const communityLinks = [
  {
    title: 'Telegram に参加',
    description: '他の Status Network ビルダーと交流し、サポートを受けましょう。',
    href: 'https://t.me/statusl2',
  },
  {
    title: 'GitHub で見る',
    description: 'ソースコードを確認し、エコシステムに貢献しましょう。',
    href: 'https://github.com/status-im',
  },
  {
    title: '公式リンク',
    description: 'ウェブサイト、ソーシャルチャンネル、すべての公式リソースを一か所に。',
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
        <p className={styles.heroSubtitle}>ようこそ</p>
        <h1 className={styles.heroTitle}>Status Network ドキュメント</h1>
        <p className={styles.heroDescription}>
          初のネイティブガスレス Ethereum L2 — ソーシャルアプリやゲームに最適化され、
          ビルダーに持続可能な公的資金を提供します。
        </p>
      </div>
    </header>
  );
}

function DocCards() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>ドキュメントを探す</h2>
      <p className={styles.sectionSubtitle}>
        今すぐ Status Network での開発を始めましょう。
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
          <h3>ビルドの準備はできましたか？</h3>
          <p>
            ウォレットを設定し、テストネットトークンを取得して、数分で最初のコントラクトをデプロイしましょう。
          </p>
        </div>
        <Link
          to="/overview/introduction/quick-start"
          className={styles.quickStartButton}
        >
          クイックスタート →
        </Link>
      </div>
    </div>
  );
}

function Community() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>コミュニティ</h2>
      <p className={styles.sectionSubtitle}>
        Status Network コミュニティの最新情報をチェックしましょう。
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
      title="Status Network ドキュメント"
      description="Status Network ドキュメント — 初のネイティブガスレス Ethereum L2、ビルダーに持続可能な公的資金を提供。"
    >
      <Hero />
      <DocCards />
      <QuickStart />
      <Community />
    </Layout>
  );
}
