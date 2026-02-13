import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '@site/src/pages/index.module.css';

const docCards = [
  {
    title: '개요',
    description:
      '스테이터스 네트워크의 아키텍처, 가스리스 트랜잭션, 토큰이코노믹스, 지속 가능한 공공 자금 모델에 대해 알아보세요.',
    link: '/overview',
    linkText: '자세히 보기',
    iconClass: styles.cardIconOverview,
    icon: '🌐',
  },
  {
    title: '카르마를 위해 개발하기',
    description:
      '컨트랙트 배포, Karma 적용 및 가스리스 앱 구축을 위한 가이드, 튜토리얼, 레퍼런스.',
    link: '/build-for-karma',
    linkText: '자세히 보기',
    iconClass: styles.cardIconBuild,
    icon: '🛠',
  },
  {
    title: '도구',
    description:
      'RPC 엔드포인트, 브릿지, 테스트넷 파우셋, 블록 익스플로러, 인프라 파트너.',
    link: '/tools',
    linkText: '자세히 보기',
    iconClass: styles.cardIconTools,
    icon: '⚡',
  },
];

const communityLinks = [
  {
    title: 'Telegram 참여',
    description: '다른 스테이터스 네트워크 빌더들과 교류하고 지원을 받으세요.',
    href: 'https://t.me/statusl2',
  },
  {
    title: 'GitHub 확인하기',
    description: '소스 코드를 탐색하고 생태계에 기여하세요.',
    href: 'https://github.com/status-im',
  },
  {
    title: '공식 링크',
    description: '웹사이트, 소셜 채널, 모든 공식 리소스를 한 곳에서 확인하세요.',
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
        <p className={styles.heroSubtitle}>환영합니다</p>
        <h1 className={styles.heroTitle}>Status Network 문서</h1>
        <p className={styles.heroDescription}>
          최초의 네이티브 가스리스 이더리움 L2 — 소셜 앱과 게임에 최적화되어
          빌더를 위한 지속 가능한 공공 자금을 제공합니다.
        </p>
      </div>
    </header>
  );
}

function DocCards() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>문서 탐색</h2>
      <p className={styles.sectionSubtitle}>
        지금 바로 스테이터스 네트워크에서 개발을 시작하세요.
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
          <h3>빌드할 준비가 되셨나요?</h3>
          <p>
            지갑을 설정하고 테스트넷 토큰을 받아 몇 분 만에 첫 번째 컨트랙트를
            배포하세요.
          </p>
        </div>
        <Link
          to="/overview/introduction/quick-start"
          className={styles.quickStartButton}
        >
          빠른 시작 →
        </Link>
      </div>
    </div>
  );
}

function Community() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>커뮤니티</h2>
      <p className={styles.sectionSubtitle}>
        스테이터스 네트워크 커뮤니티의 최신 소식을 확인하세요.
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
      title="Status Network 문서"
      description="Status Network 문서 — 최초의 네이티브 가스리스 이더리움 L2, 빌더를 위한 지속 가능한 공공 자금 제공."
    >
      <Hero />
      <DocCards />
      <QuickStart />
      <Community />
    </Layout>
  );
}
