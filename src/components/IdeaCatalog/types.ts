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

export type SecurityCriticality =
  (typeof SecurityCriticality)[keyof typeof SecurityCriticality];

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

export const categoryLabels = {
  [Category.reputation]: translate({id: 'ideaCatalog.category.reputation', message: 'Reputation'}),
  [Category.privacy]: translate({id: 'ideaCatalog.category.privacy', message: 'Privacy'}),
  [Category.social]: translate({id: 'ideaCatalog.category.social', message: 'Social'}),
  [Category.games]: translate({id: 'ideaCatalog.category.games', message: 'Games'}),
  [Category.defi]: translate({id: 'ideaCatalog.category.defi', message: 'DeFi'}),
} satisfies Record<Category, string>;

export const difficultyLabels = {
  [Difficulty.lowMed]: translate({id: 'ideaCatalog.difficulty.lowMed', message: 'Low-Med'}),
  [Difficulty.med]: translate({id: 'ideaCatalog.difficulty.med', message: 'Med'}),
  [Difficulty.medHigh]: translate({id: 'ideaCatalog.difficulty.medHigh', message: 'Med-High'}),
  [Difficulty.high]: translate({id: 'ideaCatalog.difficulty.high', message: 'High'}),
} satisfies Record<Difficulty, string>;

export const userSegmentLabels = {
  [UserSegment.consumer]: translate({id: 'ideaCatalog.userSegment.consumer', message: 'Consumer'}),
  [UserSegment.communityCreator]: translate({id: 'ideaCatalog.userSegment.communityCreator', message: 'Community/Creator'}),
  [UserSegment.daoOrgOps]: translate({id: 'ideaCatalog.userSegment.daoOrgOps', message: 'DAO/Org Ops'}),
  [UserSegment.traderDefi]: translate({id: 'ideaCatalog.userSegment.traderDefi', message: 'Trader/DeFi'}),
} satisfies Record<UserSegment, string>;

export const domainExpertiseLabels = {
  [DomainExpertise.communityDesign]: translate({id: 'ideaCatalog.domainExpertise.communityDesign', message: 'Community Design'}),
  [DomainExpertise.defiMechanisms]: translate({id: 'ideaCatalog.domainExpertise.defiMechanisms', message: 'DeFi Mechanisms'}),
  [DomainExpertise.privacy]: translate({id: 'ideaCatalog.domainExpertise.privacy', message: 'Privacy'}),
  [DomainExpertise.paymentsFinops]: translate({id: 'ideaCatalog.domainExpertise.paymentsFinops', message: 'Payments/FinOps'}),
  [DomainExpertise.consumerProduct]: translate({id: 'ideaCatalog.domainExpertise.consumerProduct', message: 'Consumer Product'}),
} satisfies Record<DomainExpertise, string>;

export const capitalReqLabels = {
  [CapitalReq.none]: translate({id: 'ideaCatalog.capitalReq.none', message: 'None'}),
  [CapitalReq.operatingTreasury]: translate({id: 'ideaCatalog.capitalReq.operatingTreasury', message: 'Operating Treasury'}),
  [CapitalReq.seedLiquidity]: translate({id: 'ideaCatalog.capitalReq.seedLiquidity', message: 'Seed Liquidity'}),
  [CapitalReq.deepLiquidity]: translate({id: 'ideaCatalog.capitalReq.deepLiquidity', message: 'Deep Liquidity'}),
} satisfies Record<CapitalReq, string>;

export const statusPrimitiveLabels = {
  [StatusPrimitive.gasless]: translate({id: 'ideaCatalog.statusPrimitive.gasless', message: 'Gasless UX'}),
  [StatusPrimitive.reputation]: translate({id: 'ideaCatalog.statusPrimitive.reputation', message: 'Reputation'}),
  [StatusPrimitive.privacy]: translate({id: 'ideaCatalog.statusPrimitive.privacy', message: 'Privacy Primitives'}),
} satisfies Record<StatusPrimitive, string>;

export const builderProfileLabels = {
  [BuilderProfile.frontendDev]: translate({id: 'ideaCatalog.builderProfile.frontendDev', message: 'Web / Mobile Dev'}),
  [BuilderProfile.contractDev]: translate({id: 'ideaCatalog.builderProfile.contractDev', message: 'Smart Contract Dev'}),
  [BuilderProfile.fullStack]: translate({id: 'ideaCatalog.builderProfile.fullStack', message: 'Full-Stack'}),
  [BuilderProfile.protocolDev]: translate({id: 'ideaCatalog.builderProfile.protocolDev', message: 'Protocol / Cryptography'}),
} satisfies Record<BuilderProfile, string>;

export const securityCriticalityLabels = {
  [SecurityCriticality.low]: translate({id: 'ideaCatalog.securityCriticality.low', message: 'Low'}),
  [SecurityCriticality.medium]: translate({id: 'ideaCatalog.securityCriticality.medium', message: 'Medium'}),
  [SecurityCriticality.high]: translate({id: 'ideaCatalog.securityCriticality.high', message: 'High'}),
  [SecurityCriticality.critical]: translate({id: 'ideaCatalog.securityCriticality.critical', message: 'Critical'}),
} satisfies Record<SecurityCriticality, string>;

export const opsBurdenLabels = {
  [OpsBurden.low]: translate({id: 'ideaCatalog.opsBurden.low', message: 'Low'}),
  [OpsBurden.medium]: translate({id: 'ideaCatalog.opsBurden.medium', message: 'Medium'}),
  [OpsBurden.high]: translate({id: 'ideaCatalog.opsBurden.high', message: 'High'}),
  [OpsBurden.veryHigh]: translate({id: 'ideaCatalog.opsBurden.veryHigh', message: 'Very High'}),
} satisfies Record<OpsBurden, string>;

export const difficultyColors = {
  [Difficulty.lowMed]: 'var(--status-green)',
  [Difficulty.med]: 'var(--status-blue)',
  [Difficulty.medHigh]: 'var(--status-orange)',
  [Difficulty.high]: 'var(--status-pink)',
} satisfies Record<Difficulty, string>;

export const categoryColors = {
  [Category.reputation]: 'var(--status-purple)',
  [Category.privacy]: 'var(--status-green)',
  [Category.social]: 'var(--status-blue)',
  [Category.games]: 'var(--status-orange)',
  [Category.defi]: 'var(--status-yellow)',
} satisfies Record<Category, string>;

export const statusPrimitiveColors = {
  [StatusPrimitive.gasless]: 'var(--status-blue)',
  [StatusPrimitive.reputation]: 'var(--status-purple)',
  [StatusPrimitive.privacy]: 'var(--status-green)',
} satisfies Record<StatusPrimitive, string>;
