import {translate} from '@docusaurus/Translate';

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
  reputation: 'reputation',
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

const categoryLabels: Record<Category, string> = {
  reputation: translate({id: 'ideaCatalog.category.reputation', message: 'Reputation'}),
  privacy: translate({id: 'ideaCatalog.category.privacy', message: 'Privacy'}),
  social: translate({id: 'ideaCatalog.category.social', message: 'Social'}),
  games: translate({id: 'ideaCatalog.category.games', message: 'Games'}),
  defi: translate({id: 'ideaCatalog.category.defi', message: 'DeFi'}),
};

const difficultyLabels: Record<Difficulty, string> = {
  'Low-Med': translate({id: 'ideaCatalog.difficulty.lowMed', message: 'Low-Med'}),
  Med: translate({id: 'ideaCatalog.difficulty.med', message: 'Med'}),
  'Med-High': translate({id: 'ideaCatalog.difficulty.medHigh', message: 'Med-High'}),
  High: translate({id: 'ideaCatalog.difficulty.high', message: 'High'}),
};

const userSegmentLabels: Record<UserSegment, string> = {
  consumer: translate({id: 'ideaCatalog.userSegment.consumer', message: 'Consumer'}),
  'community-creator': translate({id: 'ideaCatalog.userSegment.communityCreator', message: 'Community/Creator'}),
  'dao-org-ops': translate({id: 'ideaCatalog.userSegment.daoOrgOps', message: 'DAO/Org Ops'}),
  'trader-defi': translate({id: 'ideaCatalog.userSegment.traderDefi', message: 'Trader/DeFi'}),
};

const domainExpertiseLabels: Record<DomainExpertise, string> = {
  'community-design': translate({id: 'ideaCatalog.domainExpertise.communityDesign', message: 'Community Design'}),
  'defi-mechanisms': translate({id: 'ideaCatalog.domainExpertise.defiMechanisms', message: 'DeFi Mechanisms'}),
  privacy: translate({id: 'ideaCatalog.domainExpertise.privacy', message: 'Privacy'}),
  'payments-finops': translate({id: 'ideaCatalog.domainExpertise.paymentsFinops', message: 'Payments/FinOps'}),
  'consumer-product': translate({id: 'ideaCatalog.domainExpertise.consumerProduct', message: 'Consumer Product'}),
};

const capitalReqLabels: Record<CapitalReq, string> = {
  none: translate({id: 'ideaCatalog.capitalReq.none', message: 'None'}),
  'operating-treasury': translate({id: 'ideaCatalog.capitalReq.operatingTreasury', message: 'Operating Treasury'}),
  'seed-liquidity': translate({id: 'ideaCatalog.capitalReq.seedLiquidity', message: 'Seed Liquidity'}),
  'deep-liquidity': translate({id: 'ideaCatalog.capitalReq.deepLiquidity', message: 'Deep Liquidity'}),
};

const statusPrimitiveLabels: Record<StatusPrimitive, string> = {
  gasless: translate({id: 'ideaCatalog.statusPrimitive.gasless', message: 'Gasless UX'}),
  reputation: translate({id: 'ideaCatalog.statusPrimitive.reputation', message: 'Reputation'}),
  privacy: translate({id: 'ideaCatalog.statusPrimitive.privacy', message: 'Privacy Primitives'}),
};

const builderProfileLabels: Record<BuilderProfile, string> = {
  'frontend-dev': translate({id: 'ideaCatalog.builderProfile.frontendDev', message: 'Frontend / App Dev'}),
  'contract-dev': translate({id: 'ideaCatalog.builderProfile.contractDev', message: 'Smart Contract Dev'}),
  'full-stack': translate({id: 'ideaCatalog.builderProfile.fullStack', message: 'Full-Stack'}),
  'protocol-dev': translate({id: 'ideaCatalog.builderProfile.protocolDev', message: 'Protocol / Cryptography'}),
};

export function getCategoryLabels(): Record<Category, string> {
  return categoryLabels;
}

export function getDifficultyLabels(): Record<Difficulty, string> {
  return difficultyLabels;
}

export function getUserSegmentLabels(): Record<UserSegment, string> {
  return userSegmentLabels;
}

export function getDomainExpertiseLabels(): Record<DomainExpertise, string> {
  return domainExpertiseLabels;
}

export function getCapitalReqLabels(): Record<CapitalReq, string> {
  return capitalReqLabels;
}

export function getStatusPrimitiveLabels(): Record<StatusPrimitive, string> {
  return statusPrimitiveLabels;
}

export function getBuilderProfileLabels(): Record<BuilderProfile, string> {
  return builderProfileLabels;
}

export const categoryColors: Record<Category, string> = {
  reputation: 'var(--status-purple)',
  privacy: 'var(--status-green)',
  social: 'var(--status-blue)',
  games: 'var(--status-orange)',
  defi: 'var(--status-yellow)',
};

export const statusPrimitiveColors: Record<StatusPrimitive, string> = {
  gasless: 'var(--status-blue)',
  reputation: 'var(--status-purple)',
  privacy: 'var(--status-green)',
};
