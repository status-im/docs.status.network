export const Category = {
  reputation: 'reputation',
  privacy: 'privacy',
  social: 'social',
  games: 'games',
  defi: 'defi',
} as const;
export type Category = (typeof Category)[keyof typeof Category];

export const StatusPrimitive = {
  gasless: 'gasless',
  karma: 'karma',
  privacy: 'privacy',
} as const;
export type StatusPrimitive = (typeof StatusPrimitive)[keyof typeof StatusPrimitive];

export const BuilderProfile = {
  frontendDev: 'frontend-dev',
  contractDev: 'contract-dev',
  fullStack: 'full-stack',
  protocolDev: 'protocol-dev',
} as const;
export type BuilderProfile = (typeof BuilderProfile)[keyof typeof BuilderProfile];

export const Difficulty = {
  lowMed: 'Low-Med',
  med: 'Med',
  medHigh: 'Med-High',
  high: 'High',
} as const;
export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];

export const UserSegment = {
  consumer: 'consumer',
  communityCreator: 'community-creator',
  daoOrgOps: 'dao-org-ops',
  traderDefi: 'trader-defi',
} as const;
export type UserSegment = (typeof UserSegment)[keyof typeof UserSegment];

export const DomainExpertise = {
  communityDesign: 'community-design',
  defiMechanisms: 'defi-mechanisms',
  privacy: 'privacy',
  paymentsFinops: 'payments-finops',
  consumerProduct: 'consumer-product',
} as const;
export type DomainExpertise = (typeof DomainExpertise)[keyof typeof DomainExpertise];

export const CapitalReq = {
  none: 'none',
  operatingTreasury: 'operating-treasury',
  seedLiquidity: 'seed-liquidity',
  deepLiquidity: 'deep-liquidity',
} as const;
export type CapitalReq = (typeof CapitalReq)[keyof typeof CapitalReq];

export const SecurityCriticality = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  critical: 'Critical',
} as const;
export type SecurityCriticality = (typeof SecurityCriticality)[keyof typeof SecurityCriticality];

export const OpsBurden = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  veryHigh: 'Very High',
} as const;
export type OpsBurden = (typeof OpsBurden)[keyof typeof OpsBurden];

export interface Idea {
  id: string;
  title: string;
  category: Category;
  superpowers: StatusPrimitive[];
  builderProfiles: BuilderProfile[];
  what: string;
  whyStatus: string;
  mvp: string;
  difficulty: Difficulty;
  userSegment: UserSegment;
  domainExpertise: DomainExpertise;
  capitalRequirement: CapitalReq;
  securityCriticality: SecurityCriticality;
  opsBurden: OpsBurden;
}

export const categoryLabels: Record<Category, string> = {
  reputation: 'Reputation',
  privacy: 'Privacy',
  social: 'Social',
  games: 'Games',
  defi: 'DeFi',
};

export const difficultyLabels: Record<Difficulty, string> = {
  'Low-Med': 'Low-Med',
  Med: 'Med',
  'Med-High': 'Med-High',
  High: 'High',
};

export const userSegmentLabels: Record<UserSegment, string> = {
  consumer: 'Consumer',
  'community-creator': 'Community/Creator',
  'dao-org-ops': 'DAO/Org Ops',
  'trader-defi': 'Trader/DeFi',
};

export const domainExpertiseLabels: Record<DomainExpertise, string> = {
  'community-design': 'Community Design',
  'defi-mechanisms': 'DeFi Mechanisms',
  privacy: 'Privacy',
  'payments-finops': 'Payments/FinOps',
  'consumer-product': 'Consumer Product',
};

export const capitalReqLabels: Record<CapitalReq, string> = {
  none: 'None',
  'operating-treasury': 'Operating Treasury',
  'seed-liquidity': 'Seed Liquidity',
  'deep-liquidity': 'Deep Liquidity',
};

export const statusPrimitiveLabels: Record<StatusPrimitive, string> = {
  gasless: 'Gasless UX',
  karma: 'Karma Reputation',
  privacy: 'Privacy Primitives',
};

export const builderProfileLabels: Record<BuilderProfile, string> = {
  'frontend-dev': 'Frontend / App Dev',
  'contract-dev': 'Smart Contract Dev',
  'full-stack': 'Full-Stack',
  'protocol-dev': 'Protocol / Cryptography',
};

export const categoryColors: Record<Category, string> = {
  reputation: 'var(--status-purple)',
  privacy: 'var(--status-green)',
  social: 'var(--status-blue)',
  games: 'var(--status-orange)',
  defi: 'var(--status-yellow)',
};

export const statusPrimitiveColors: Record<StatusPrimitive, string> = {
  gasless: 'var(--status-blue)',
  karma: 'var(--status-purple)',
  privacy: 'var(--status-green)',
};
