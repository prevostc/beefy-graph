import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: string; output: string; }
  BigInt: { input: string; output: string; }
  DateTime: { input: Date | string; output: Date | string; }
  HexString: { input: string; output: string; }
  URL: { input: string; output: string; }
};

export type AirdropPromo = {
  __typename?: 'AirdropPromo';
  campaign: PromoCampaign;
  endTime: Scalars['DateTime']['output'];
  /** ${slug} */
  id: Scalars['ID']['output'];
  pool: Contract;
  products: PaginatedProduct;
  slug: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
  status?: Maybe<PromoStatus>;
  title: Scalars['String']['output'];
};


export type AirdropPromoProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};

export type ApyBreakdown = {
  __typename?: 'ApyBreakdown';
  totalApr: Scalars['Float']['output'];
  totalDailyYield: Scalars['Float']['output'];
  tradingFeesApr?: Maybe<Scalars['Float']['output']>;
  tradingFeesDailyYield: Scalars['Float']['output'];
  vaultApr: Scalars['Float']['output'];
  vaultDailyYield: Scalars['Float']['output'];
};

export type ApyBreakdownFilter = {
  days: Scalars['Int']['input'];
};

export type BigDecimalDataPoint = {
  __typename?: 'BigDecimalDataPoint';
  x: Scalars['DateTime']['output'];
  y: Scalars['BigDecimal']['output'];
};

export type BigIntDataPoint = {
  __typename?: 'BigIntDataPoint';
  x: Scalars['DateTime']['output'];
  y: Scalars['BigInt']['output'];
};

export type Chain = {
  __typename?: 'Chain';
  historicalState: ChainHistory;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  networkId: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  status: ChainStatus;
  tokens: PaginatedToken;
  totalTvlUSD: Scalars['Float']['output'];
};


export type ChainHistoricalStateArgs = {
  options: TimeseriesOptions;
};


export type ChainTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenFilter>;
};

export type ChainFilter = {
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  networkId_eq?: InputMaybe<Scalars['Int']['input']>;
  slug_eq?: InputMaybe<Scalars['String']['input']>;
  status_eq?: InputMaybe<ChainStatus>;
};

export type ChainHistory = {
  __typename?: 'ChainHistory';
  tvlUSD: Array<FloatDataPoint>;
};

export enum ChainOrderBy {
  Id = 'id',
  Slug = 'slug'
}

export enum ChainStatus {
  Active = 'Active',
  Eol = 'Eol'
}

export type ClassicVault = {
  __typename?: 'ClassicVault';
  apy: ApyBreakdown;
  chain: Chain;
  eolLegacyBoosts: Array<LegacyBoost>;
  eolRewardPools: Array<RewardPool>;
  historicalState: ClassicVaultHistory;
  id: Scalars['ID']['output'];
  lastHarvest: Scalars['DateTime']['output'];
  lifecycle: ProductLifecycle;
  name: Scalars['String']['output'];
  /** True if the product is pinned to the home page */
  pinned: Scalars['Boolean']['output'];
  /** Promos for the product */
  promos: PaginatedPromo;
  rewardPool?: Maybe<RewardPool>;
  sharePrice: Scalars['BigDecimal']['output'];
  shareToken: TokenErc20;
  slug: Scalars['String']['output'];
  strategyContract: Contract;
  tvl: ProductTvlBreakdown;
  underlyingProduct: PlatformProduct;
  underlyingToken: TokenErc20;
  vaultContract: Contract;
};


export type ClassicVaultApyArgs = {
  breakdown?: InputMaybe<ApyBreakdownFilter>;
};


export type ClassicVaultHistoricalStateArgs = {
  options: TimeseriesOptions;
};


export type ClassicVaultPromosArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromoOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromoFilter>;
};

export type ClassicVaultHistory = {
  __typename?: 'ClassicVaultHistory';
  apy: Array<FloatDataPoint>;
  sharePrice: Array<BigDecimalDataPoint>;
  tvlUSD: Array<FloatDataPoint>;
};

/** A bundle is a collection of products that are related to each other. */
export type ClmBundle = {
  __typename?: 'ClmBundle';
  apy: ApyBreakdown;
  chain: Chain;
  clmManager: ClmManager;
  clmManagerRewardPool?: Maybe<RewardPool>;
  eolLegacyBoosts: Array<LegacyBoost>;
  eolVaultRewardPools: Array<RewardPool>;
  /** ${slug} */
  id: Scalars['ID']['output'];
  sharePrice: Scalars['BigDecimal']['output'];
  slug: Scalars['String']['output'];
  vault?: Maybe<ClassicVault>;
  vaultRewardPool?: Maybe<RewardPool>;
};


/** A bundle is a collection of products that are related to each other. */
export type ClmBundleApyArgs = {
  breakdown?: InputMaybe<ApyBreakdownFilter>;
};

export type ClmManager = {
  __typename?: 'ClmManager';
  apy: ApyBreakdown;
  chain: Chain;
  eolLegacyBoosts: Array<LegacyBoost>;
  eolRewardPools: Array<RewardPool>;
  historicalState: ClmManagerHistory;
  id: Scalars['ID']['output'];
  lastHarvest: Scalars['DateTime']['output'];
  lifecycle: ProductLifecycle;
  name: Scalars['String']['output'];
  /** True if the product is pinned to the home page */
  pinned: Scalars['Boolean']['output'];
  /** Promos for the product */
  promos: PaginatedPromo;
  rewardPool?: Maybe<RewardPool>;
  sharePrice: Scalars['BigDecimal']['output'];
  shareToken: TokenErc20;
  slug: Scalars['String']['output'];
  strategyContract: Contract;
  tvl: ProductTvlBreakdown;
  underlyingProduct: PlatformProduct;
  underlyingTokens: Array<TokenErc20>;
  vault?: Maybe<ClassicVault>;
  vaultContract: Contract;
};


export type ClmManagerApyArgs = {
  breakdown?: InputMaybe<ApyBreakdownFilter>;
};


export type ClmManagerHistoricalStateArgs = {
  options: TimeseriesOptions;
};


export type ClmManagerPromosArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromoOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromoFilter>;
};

export type ClmManagerHistory = {
  __typename?: 'ClmManagerHistory';
  apy: Array<FloatDataPoint>;
  sharePrice: Array<BigDecimalDataPoint>;
  tvlUSD: Array<FloatDataPoint>;
};

export type Contract = {
  __typename?: 'Contract';
  address: Scalars['HexString']['output'];
  chain: Chain;
  createdAtBlock: Scalars['Int']['output'];
  createdAtTimestamp: Scalars['DateTime']['output'];
  /** ${chain.id}:${address} */
  id: Scalars['ID']['output'];
};

export type FloatDataPoint = {
  __typename?: 'FloatDataPoint';
  x: Scalars['DateTime']['output'];
  y: Scalars['Float']['output'];
};

/** The global stats for the beefy protocol. */
export type Global = {
  __typename?: 'Global';
  historicalState: GlobalHistory;
  monthlyRevenueUSD: Scalars['Float']['output'];
  monthlyYieldUSD: Scalars['Float']['output'];
  /** The total TVL of the beefy protocol in USD */
  totalTvlUSD: Scalars['Float']['output'];
  weeklyMooBifiBuybackAmount: Scalars['Float']['output'];
  weeklyMooBifiBuybackUSD: Scalars['Float']['output'];
  weeklyRevenueUSD: Scalars['Float']['output'];
  weeklyYieldUSD: Scalars['Float']['output'];
};


/** The global stats for the beefy protocol. */
export type GlobalHistoricalStateArgs = {
  options: TimeseriesOptions;
};

export type GlobalHistory = {
  __typename?: 'GlobalHistory';
  monthlyRevenueUSD: Array<FloatDataPoint>;
  monthlyYieldUSD: Array<FloatDataPoint>;
  tvlUSD: Array<FloatDataPoint>;
  weeklyMooBifiBuybackAmount: Array<FloatDataPoint>;
  weeklyMooBifiBuybackUSD: Array<FloatDataPoint>;
  weeklyRevenueUSD: Array<FloatDataPoint>;
  weeklyYieldUSD: Array<FloatDataPoint>;
};

export type GovBundle = {
  __typename?: 'GovBundle';
  apy: ApyBreakdown;
  chain: Chain;
  compoundingVault?: Maybe<ClassicVault>;
  govVault: GovVault;
  /** ${slug} */
  id: Scalars['ID']['output'];
  sharePrice: Scalars['BigDecimal']['output'];
  slug: Scalars['String']['output'];
};


export type GovBundleApyArgs = {
  breakdown?: InputMaybe<ApyBreakdownFilter>;
};

export type GovVault = {
  __typename?: 'GovVault';
  apy: ApyBreakdown;
  chain: Chain;
  historicalState: GovVaultHistory;
  id: Scalars['ID']['output'];
  lastDistribution: Scalars['DateTime']['output'];
  lifecycle: ProductLifecycle;
  name: Scalars['String']['output'];
  /** True if the product is pinned to the home page */
  pinned: Scalars['Boolean']['output'];
  /** Promos for the product */
  promos: PaginatedPromo;
  sharePrice: Scalars['BigDecimal']['output'];
  shareToken: TokenErc20;
  strategyContract: Contract;
  tvl: ProductTvlBreakdown;
  underlyingProduct: PlatformProduct;
  underlyingToken: TokenErc20;
  vaultContract: Contract;
};


export type GovVaultApyArgs = {
  breakdown?: InputMaybe<ApyBreakdownFilter>;
};


export type GovVaultHistoricalStateArgs = {
  options: TimeseriesOptions;
};


export type GovVaultPromosArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromoOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromoFilter>;
};

export type GovVaultHistory = {
  __typename?: 'GovVaultHistory';
  apy: Array<FloatDataPoint>;
  buyback: Array<FloatDataPoint>;
  sharePrice: Array<BigDecimalDataPoint>;
  totalBuyback: Array<FloatDataPoint>;
  tvlUSD: Array<FloatDataPoint>;
};

export type LegacyBoost = {
  __typename?: 'LegacyBoost';
  chain: Chain;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  strategyContract: Contract;
  underlyingProduct: Product;
  vaultContract: Contract;
};

/** Links a legacy boost to a promo campaign. */
export type LegacyBoostPromo = {
  __typename?: 'LegacyBoostPromo';
  boost: LegacyBoost;
  campaign: PromoCampaign;
  endTime: Scalars['DateTime']['output'];
  /** ${slug}:${version} */
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
  status?: Maybe<PromoStatus>;
  title: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

/** Mostly beS */
export type LstVault = {
  __typename?: 'LstVault';
  apy: ApyBreakdown;
  chain: Chain;
  historicalState: LstVaultHistory;
  id: Scalars['ID']['output'];
  lastHarvest: Scalars['DateTime']['output'];
  lifecycle: ProductLifecycle;
  name: Scalars['String']['output'];
  /** True if the product is pinned to the home page */
  pinned: Scalars['Boolean']['output'];
  /** Promos for the product */
  promos: PaginatedPromo;
  sharePrice: Scalars['BigDecimal']['output'];
  shareToken: TokenErc20;
  slug: Scalars['String']['output'];
  strategyContract: Contract;
  tvl: ProductTvlBreakdown;
  underlyingProduct: PlatformProduct;
  underlyingToken: TokenErc20;
  vaultContract: Contract;
};


/** Mostly beS */
export type LstVaultApyArgs = {
  breakdown?: InputMaybe<ApyBreakdownFilter>;
};


/** Mostly beS */
export type LstVaultHistoricalStateArgs = {
  options: TimeseriesOptions;
};


/** Mostly beS */
export type LstVaultPromosArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromoOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PromoFilter>;
};

export type LstVaultHistory = {
  __typename?: 'LstVaultHistory';
  apy: Array<FloatDataPoint>;
  sharePrice: Array<BigDecimalDataPoint>;
  tvlUSD: Array<FloatDataPoint>;
};

export type OffChainPromo = {
  __typename?: 'OffChainPromo';
  campaign: PromoCampaign;
  endTime: Scalars['DateTime']['output'];
  /** ${slug}:${version} */
  id: Scalars['ID']['output'];
  products: PaginatedProduct;
  slug: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
  status?: Maybe<PromoStatus>;
  title: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};


export type OffChainPromoProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};

export enum OrderDirection {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  count: Scalars['Int']['output'];
  countTotal: Scalars['Int']['output'];
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
};

export type PaginatedChain = {
  __typename?: 'PaginatedChain';
  items: Array<Chain>;
  pageInfo: PageInfo;
};

export type PaginatedPartner = {
  __typename?: 'PaginatedPartner';
  items: Array<Partner>;
  pageInfo: PageInfo;
};

export type PaginatedPlatform = {
  __typename?: 'PaginatedPlatform';
  items: Array<Platform>;
  pageInfo: PageInfo;
};

export type PaginatedProduct = {
  __typename?: 'PaginatedProduct';
  items: Array<Product>;
  pageInfo: PageInfo;
};

export type PaginatedPromo = {
  __typename?: 'PaginatedPromo';
  items: Array<Promo>;
  pageInfo: PageInfo;
};

export type PaginatedToken = {
  __typename?: 'PaginatedToken';
  items: Array<Token>;
  pageInfo: PageInfo;
};

export type PaginatedUser = {
  __typename?: 'PaginatedUser';
  items: Array<User>;
  pageInfo: PageInfo;
};

export type Partner = {
  __typename?: 'Partner';
  /** ${slug} */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  socials: Socials;
};

export type PartnerFilter = {
  slug_eq?: InputMaybe<Scalars['String']['input']>;
};

export enum PartnerOrderBy {
  Id = 'id',
  Name = 'name',
  Slug = 'slug'
}

export type Platform = {
  __typename?: 'Platform';
  description: Scalars['String']['output'];
  /** ${slug} */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  socials: Socials;
};

export type PlatformFilter = {
  slug_eq?: InputMaybe<Scalars['String']['input']>;
};

export enum PlatformOrderBy {
  Id = 'id',
  Name = 'name',
  Slug = 'slug'
}

/** The type of product defines how to interact with the product. */
export type PlatformProduct = {
  __typename?: 'PlatformProduct';
  /** ${product.slug} */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  platform: Platform;
  products: PaginatedProduct;
  slug: Scalars['String']['output'];
};


/** The type of product defines how to interact with the product. */
export type PlatformProductProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};

export type PointsPromo = {
  __typename?: 'PointsPromo';
  campaign: PromoCampaign;
  endTime: Scalars['DateTime']['output'];
  /** ${slug}:${version} */
  id: Scalars['ID']['output'];
  products: PaginatedProduct;
  slug: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
  status?: Maybe<PromoStatus>;
  title: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};


export type PointsPromoProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};

export type Product = ClassicVault | ClmBundle | ClmManager | GovBundle | GovVault | LegacyBoost | LstVault | RewardPool;

export type ProductFilter = {
  chain?: InputMaybe<ChainFilter>;
  lifecycle?: InputMaybe<ProductLifecycleFilter>;
  shareToken?: InputMaybe<TokenFilter>;
  type?: InputMaybe<ProductType>;
  underlyingToken?: InputMaybe<TokenFilter>;
};

export type ProductLifecycle = {
  __typename?: 'ProductLifecycle';
  pauseReason?: Maybe<Scalars['String']['output']>;
  pausedAt?: Maybe<Scalars['DateTime']['output']>;
  retireReason?: Maybe<Scalars['String']['output']>;
  retiredAt?: Maybe<Scalars['DateTime']['output']>;
  status: ProductStatus;
};

export type ProductLifecycleFilter = {
  status_eq?: InputMaybe<ProductStatus>;
};

export enum ProductOrderBy {
  Chain = 'chain',
  Id = 'id',
  Status = 'status'
}

export enum ProductStatus {
  Active = 'Active',
  Eol = 'Eol',
  Paused = 'Paused'
}

export type ProductTvlBreakdown = {
  __typename?: 'ProductTvlBreakdown';
  /** The percentage of the total TVL that this product contributes to the underlying pool's total TVL. Number between 0.0 and 1.0 */
  shareOfPool: Scalars['Float']['output'];
  underlyingPoolTvlUSD: Scalars['Float']['output'];
  vaultTvlUSD: Scalars['Float']['output'];
};

export enum ProductType {
  ClassicVault = 'CLASSIC_VAULT',
  ClmBundle = 'CLM_BUNDLE',
  ClmManager = 'CLM_MANAGER',
  GovBundle = 'GOV_BUNDLE',
  GovVault = 'GOV_VAULT',
  LegacyBoost = 'LEGACY_BOOST',
  LstVault = 'LST_VAULT',
  RewardPool = 'REWARD_POOL'
}

export type Promo = AirdropPromo | LegacyBoostPromo | OffChainPromo | PointsPromo | RewardPoolPromo | UnderlyingPoolPromo;

export type PromoCampaign = {
  __typename?: 'PromoCampaign';
  description: Scalars['String']['output'];
  /** ${slug} */
  id: Scalars['ID']['output'];
  learnMoreURL: Scalars['URL']['output'];
  partners: Array<Partner>;
  slug: Scalars['String']['output'];
  socials: Socials;
  title: Scalars['String']['output'];
};

export type PromoCampaignFilter = {
  slug_eq?: InputMaybe<Scalars['String']['input']>;
};

export type PromoFilter = {
  campaign_eq?: InputMaybe<PromoCampaignFilter>;
  endTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  slug_eq?: InputMaybe<Scalars['String']['input']>;
  startTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  status_eq?: InputMaybe<PromoStatus>;
  type_eq?: InputMaybe<PromoType>;
  version_eq?: InputMaybe<Scalars['Int']['input']>;
};

export enum PromoOrderBy {
  EndTime = 'endTime',
  Id = 'id',
  Slug = 'slug',
  StartTime = 'startTime',
  Status = 'status',
  Title = 'title',
  Version = 'version'
}

export enum PromoStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Prestake = 'PRESTAKE'
}

export enum PromoType {
  Airdrop = 'AIRDROP',
  Boost = 'BOOST',
  Offchain = 'OFFCHAIN',
  Pool = 'POOL'
}

export type Query = {
  __typename?: 'Query';
  chain: Chain;
  chains: PaginatedChain;
  global: Global;
  partner: Partner;
  partners: PaginatedPartner;
  platform: Platform;
  platforms: PaginatedPlatform;
  product: Product;
  products: PaginatedProduct;
  token: Token;
  tokens: PaginatedToken;
  user: User;
  users: PaginatedUser;
};


export type QueryChainArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChainsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ChainOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChainFilter>;
};


export type QueryPartnerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPartnersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PartnerOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PartnerFilter>;
};


export type QueryPlatformArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlatformsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PlatformOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PlatformFilter>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};


export type QueryTokenArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTokensArgs = {
  where?: InputMaybe<TokenFilter>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UserOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFilter>;
};

export type RewardPool = {
  __typename?: 'RewardPool';
  apy: ApyBreakdown;
  chain: Chain;
  historicalState: RewardPoolHistory;
  id: Scalars['ID']['output'];
  lifecycle: ProductLifecycle;
  name: Scalars['String']['output'];
  rewardTokens: Array<TokenErc20>;
  sharePrice: Scalars['BigDecimal']['output'];
  shareToken: TokenErc20;
  slug: Scalars['String']['output'];
  strategyContract: Contract;
  tvl: ProductTvlBreakdown;
  underlyingProduct: PlatformProduct;
  underlyingToken: TokenErc20;
  vaultContract: Contract;
};


export type RewardPoolApyArgs = {
  breakdown?: InputMaybe<ApyBreakdownFilter>;
};


export type RewardPoolHistoricalStateArgs = {
  options: TimeseriesOptions;
};

export type RewardPoolHistory = {
  __typename?: 'RewardPoolHistory';
  apy: Array<FloatDataPoint>;
  sharePrice: Array<BigDecimalDataPoint>;
  tvlUSD: Array<FloatDataPoint>;
};

export type RewardPoolPromo = {
  __typename?: 'RewardPoolPromo';
  campaign: PromoCampaign;
  endTime: Scalars['DateTime']['output'];
  /** ${slug}:${version} */
  id: Scalars['ID']['output'];
  rewardPool: RewardPool;
  slug: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
  status?: Maybe<PromoStatus>;
  title: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

export type Socials = {
  __typename?: 'Socials';
  discordURL?: Maybe<Scalars['URL']['output']>;
  docsURL?: Maybe<Scalars['URL']['output']>;
  githubURL?: Maybe<Scalars['URL']['output']>;
  telegramURL?: Maybe<Scalars['URL']['output']>;
  twitterURL?: Maybe<Scalars['URL']['output']>;
  websiteURL?: Maybe<Scalars['URL']['output']>;
};

export enum TimeseriesInterval {
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type TimeseriesOptions = {
  endTimestamp?: InputMaybe<Scalars['Int']['input']>;
  interval?: InputMaybe<TimeseriesInterval>;
  startTimestamp?: InputMaybe<Scalars['Int']['input']>;
};

export type Token = TokenErc20 | TokenNative;

export type TokenErc20 = {
  __typename?: 'TokenErc20';
  chain: Chain;
  contract: Contract;
  decimals: Scalars['Int']['output'];
  historicalState: TokenErc20History;
  /** ${chain.id}:${contract.address} */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: FloatDataPoint;
  priceChange24h: Scalars['Float']['output'];
  symbol: Scalars['String']['output'];
  underlyingTokens?: Maybe<Array<Token>>;
};


export type TokenErc20HistoricalStateArgs = {
  options: TimeseriesOptions;
};

export type TokenErc20History = {
  __typename?: 'TokenErc20History';
  price: Array<FloatDataPoint>;
};

export type TokenFilter = {
  chain?: InputMaybe<ChainFilter>;
  decimals_eq?: InputMaybe<Scalars['Int']['input']>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  symbol_eq?: InputMaybe<Scalars['String']['input']>;
};

export type TokenNative = {
  __typename?: 'TokenNative';
  chain: Chain;
  decimals: Scalars['Int']['output'];
  historicalState: TokenNativeHistory;
  /** ${chain.id}:0x0000000000000000000000000000000000000000 */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  priceChange24h: Scalars['Float']['output'];
  symbol: Scalars['String']['output'];
};


export type TokenNativeHistoricalStateArgs = {
  options: TimeseriesOptions;
};

export type TokenNativeHistory = {
  __typename?: 'TokenNativeHistory';
  price: Array<FloatDataPoint>;
};

export enum TokenOrderBy {
  Chain = 'chain',
  Decimals = 'decimals',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol'
}

export type UnderlyingPoolPromo = {
  __typename?: 'UnderlyingPoolPromo';
  campaign: PromoCampaign;
  endTime: Scalars['DateTime']['output'];
  /** ${slug}:${version} */
  id: Scalars['ID']['output'];
  pool: Contract;
  products: PaginatedProduct;
  slug: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
  status?: Maybe<PromoStatus>;
  title: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};


export type UnderlyingPoolPromoProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProductOrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductFilter>;
};

/**
 * An user is a unique address, regardless of the chain.
 * It may be a contract or an externally owned user (EOA) or both (EOA with eip7702 code set).
 */
export type User = {
  __typename?: 'User';
  address: Scalars['HexString']['output'];
  /** This user may have one contract per chain */
  contracts: Array<Contract>;
  /** ${address} */
  id: Scalars['ID']['output'];
};

export type UserFilter = {
  address_eq?: InputMaybe<Scalars['HexString']['input']>;
};

export enum UserOrderBy {
  Address = 'address',
  Id = 'id'
}

export type UserPosition = {
  __typename?: 'UserPosition';
  chain: Chain;
  createdAtTimestamp: Scalars['DateTime']['output'];
  /** ${product.id}:${user.id} */
  id: Scalars['ID']['output'];
  pnl: Scalars['Float']['output'];
  product: Product;
  shareQuantity: Scalars['Float']['output'];
  user: User;
  valueUSD: Scalars['Float']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  Product:
    | ( Omit<ClassicVault, 'chain' | 'eolLegacyBoosts' | 'eolRewardPools' | 'promos' | 'rewardPool' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: _RefType['Chain'], eolLegacyBoosts: Array<_RefType['LegacyBoost']>, eolRewardPools: Array<_RefType['RewardPool']>, promos: _RefType['PaginatedPromo'], rewardPool?: Maybe<_RefType['RewardPool']>, shareToken: _RefType['TokenErc20'], strategyContract: _RefType['Contract'], underlyingProduct: _RefType['PlatformProduct'], underlyingToken: _RefType['TokenErc20'], vaultContract: _RefType['Contract'] } )
    | ( Omit<ClmBundle, 'chain' | 'clmManager' | 'clmManagerRewardPool' | 'eolLegacyBoosts' | 'eolVaultRewardPools' | 'vault' | 'vaultRewardPool'> & { chain: _RefType['Chain'], clmManager: _RefType['ClmManager'], clmManagerRewardPool?: Maybe<_RefType['RewardPool']>, eolLegacyBoosts: Array<_RefType['LegacyBoost']>, eolVaultRewardPools: Array<_RefType['RewardPool']>, vault?: Maybe<_RefType['ClassicVault']>, vaultRewardPool?: Maybe<_RefType['RewardPool']> } )
    | ( Omit<ClmManager, 'chain' | 'eolLegacyBoosts' | 'eolRewardPools' | 'promos' | 'rewardPool' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingTokens' | 'vault' | 'vaultContract'> & { chain: _RefType['Chain'], eolLegacyBoosts: Array<_RefType['LegacyBoost']>, eolRewardPools: Array<_RefType['RewardPool']>, promos: _RefType['PaginatedPromo'], rewardPool?: Maybe<_RefType['RewardPool']>, shareToken: _RefType['TokenErc20'], strategyContract: _RefType['Contract'], underlyingProduct: _RefType['PlatformProduct'], underlyingTokens: Array<_RefType['TokenErc20']>, vault?: Maybe<_RefType['ClassicVault']>, vaultContract: _RefType['Contract'] } )
    | ( Omit<GovBundle, 'chain' | 'compoundingVault' | 'govVault'> & { chain: _RefType['Chain'], compoundingVault?: Maybe<_RefType['ClassicVault']>, govVault: _RefType['GovVault'] } )
    | ( Omit<GovVault, 'chain' | 'promos' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: _RefType['Chain'], promos: _RefType['PaginatedPromo'], shareToken: _RefType['TokenErc20'], strategyContract: _RefType['Contract'], underlyingProduct: _RefType['PlatformProduct'], underlyingToken: _RefType['TokenErc20'], vaultContract: _RefType['Contract'] } )
    | ( Omit<LegacyBoost, 'chain' | 'strategyContract' | 'underlyingProduct' | 'vaultContract'> & { chain: _RefType['Chain'], strategyContract: _RefType['Contract'], underlyingProduct: _RefType['Product'], vaultContract: _RefType['Contract'] } )
    | ( Omit<LstVault, 'chain' | 'promos' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: _RefType['Chain'], promos: _RefType['PaginatedPromo'], shareToken: _RefType['TokenErc20'], strategyContract: _RefType['Contract'], underlyingProduct: _RefType['PlatformProduct'], underlyingToken: _RefType['TokenErc20'], vaultContract: _RefType['Contract'] } )
    | ( Omit<RewardPool, 'chain' | 'rewardTokens' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: _RefType['Chain'], rewardTokens: Array<_RefType['TokenErc20']>, shareToken: _RefType['TokenErc20'], strategyContract: _RefType['Contract'], underlyingProduct: _RefType['PlatformProduct'], underlyingToken: _RefType['TokenErc20'], vaultContract: _RefType['Contract'] } )
  ;
  Promo:
    | ( Omit<AirdropPromo, 'pool' | 'products'> & { pool: _RefType['Contract'], products: _RefType['PaginatedProduct'] } )
    | ( Omit<LegacyBoostPromo, 'boost'> & { boost: _RefType['LegacyBoost'] } )
    | ( Omit<OffChainPromo, 'products'> & { products: _RefType['PaginatedProduct'] } )
    | ( Omit<PointsPromo, 'products'> & { products: _RefType['PaginatedProduct'] } )
    | ( Omit<RewardPoolPromo, 'rewardPool'> & { rewardPool: _RefType['RewardPool'] } )
    | ( Omit<UnderlyingPoolPromo, 'pool' | 'products'> & { pool: _RefType['Contract'], products: _RefType['PaginatedProduct'] } )
  ;
  Token:
    | ( Omit<TokenErc20, 'chain' | 'contract' | 'underlyingTokens'> & { chain: _RefType['Chain'], contract: _RefType['Contract'], underlyingTokens?: Maybe<Array<_RefType['Token']>> } )
    | ( Omit<TokenNative, 'chain'> & { chain: _RefType['Chain'] } )
  ;
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AirdropPromo: ResolverTypeWrapper<Omit<AirdropPromo, 'pool' | 'products'> & { pool: ResolversTypes['Contract'], products: ResolversTypes['PaginatedProduct'] }>;
  ApyBreakdown: ResolverTypeWrapper<ApyBreakdown>;
  ApyBreakdownFilter: ApyBreakdownFilter;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigDecimalDataPoint: ResolverTypeWrapper<BigDecimalDataPoint>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BigIntDataPoint: ResolverTypeWrapper<BigIntDataPoint>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Chain: ResolverTypeWrapper<Omit<Chain, 'tokens'> & { tokens: ResolversTypes['PaginatedToken'] }>;
  ChainFilter: ChainFilter;
  ChainHistory: ResolverTypeWrapper<ChainHistory>;
  ChainOrderBy: ChainOrderBy;
  ChainStatus: ChainStatus;
  ClassicVault: ResolverTypeWrapper<Omit<ClassicVault, 'chain' | 'eolLegacyBoosts' | 'eolRewardPools' | 'promos' | 'rewardPool' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: ResolversTypes['Chain'], eolLegacyBoosts: Array<ResolversTypes['LegacyBoost']>, eolRewardPools: Array<ResolversTypes['RewardPool']>, promos: ResolversTypes['PaginatedPromo'], rewardPool?: Maybe<ResolversTypes['RewardPool']>, shareToken: ResolversTypes['TokenErc20'], strategyContract: ResolversTypes['Contract'], underlyingProduct: ResolversTypes['PlatformProduct'], underlyingToken: ResolversTypes['TokenErc20'], vaultContract: ResolversTypes['Contract'] }>;
  ClassicVaultHistory: ResolverTypeWrapper<ClassicVaultHistory>;
  ClmBundle: ResolverTypeWrapper<Omit<ClmBundle, 'chain' | 'clmManager' | 'clmManagerRewardPool' | 'eolLegacyBoosts' | 'eolVaultRewardPools' | 'vault' | 'vaultRewardPool'> & { chain: ResolversTypes['Chain'], clmManager: ResolversTypes['ClmManager'], clmManagerRewardPool?: Maybe<ResolversTypes['RewardPool']>, eolLegacyBoosts: Array<ResolversTypes['LegacyBoost']>, eolVaultRewardPools: Array<ResolversTypes['RewardPool']>, vault?: Maybe<ResolversTypes['ClassicVault']>, vaultRewardPool?: Maybe<ResolversTypes['RewardPool']> }>;
  ClmManager: ResolverTypeWrapper<Omit<ClmManager, 'chain' | 'eolLegacyBoosts' | 'eolRewardPools' | 'promos' | 'rewardPool' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingTokens' | 'vault' | 'vaultContract'> & { chain: ResolversTypes['Chain'], eolLegacyBoosts: Array<ResolversTypes['LegacyBoost']>, eolRewardPools: Array<ResolversTypes['RewardPool']>, promos: ResolversTypes['PaginatedPromo'], rewardPool?: Maybe<ResolversTypes['RewardPool']>, shareToken: ResolversTypes['TokenErc20'], strategyContract: ResolversTypes['Contract'], underlyingProduct: ResolversTypes['PlatformProduct'], underlyingTokens: Array<ResolversTypes['TokenErc20']>, vault?: Maybe<ResolversTypes['ClassicVault']>, vaultContract: ResolversTypes['Contract'] }>;
  ClmManagerHistory: ResolverTypeWrapper<ClmManagerHistory>;
  Contract: ResolverTypeWrapper<Omit<Contract, 'chain'> & { chain: ResolversTypes['Chain'] }>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  FloatDataPoint: ResolverTypeWrapper<FloatDataPoint>;
  Global: ResolverTypeWrapper<Global>;
  GlobalHistory: ResolverTypeWrapper<GlobalHistory>;
  GovBundle: ResolverTypeWrapper<Omit<GovBundle, 'chain' | 'compoundingVault' | 'govVault'> & { chain: ResolversTypes['Chain'], compoundingVault?: Maybe<ResolversTypes['ClassicVault']>, govVault: ResolversTypes['GovVault'] }>;
  GovVault: ResolverTypeWrapper<Omit<GovVault, 'chain' | 'promos' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: ResolversTypes['Chain'], promos: ResolversTypes['PaginatedPromo'], shareToken: ResolversTypes['TokenErc20'], strategyContract: ResolversTypes['Contract'], underlyingProduct: ResolversTypes['PlatformProduct'], underlyingToken: ResolversTypes['TokenErc20'], vaultContract: ResolversTypes['Contract'] }>;
  GovVaultHistory: ResolverTypeWrapper<GovVaultHistory>;
  HexString: ResolverTypeWrapper<Scalars['HexString']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LegacyBoost: ResolverTypeWrapper<Omit<LegacyBoost, 'chain' | 'strategyContract' | 'underlyingProduct' | 'vaultContract'> & { chain: ResolversTypes['Chain'], strategyContract: ResolversTypes['Contract'], underlyingProduct: ResolversTypes['Product'], vaultContract: ResolversTypes['Contract'] }>;
  LegacyBoostPromo: ResolverTypeWrapper<Omit<LegacyBoostPromo, 'boost'> & { boost: ResolversTypes['LegacyBoost'] }>;
  LstVault: ResolverTypeWrapper<Omit<LstVault, 'chain' | 'promos' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: ResolversTypes['Chain'], promos: ResolversTypes['PaginatedPromo'], shareToken: ResolversTypes['TokenErc20'], strategyContract: ResolversTypes['Contract'], underlyingProduct: ResolversTypes['PlatformProduct'], underlyingToken: ResolversTypes['TokenErc20'], vaultContract: ResolversTypes['Contract'] }>;
  LstVaultHistory: ResolverTypeWrapper<LstVaultHistory>;
  OffChainPromo: ResolverTypeWrapper<Omit<OffChainPromo, 'products'> & { products: ResolversTypes['PaginatedProduct'] }>;
  OrderDirection: OrderDirection;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginatedChain: ResolverTypeWrapper<Omit<PaginatedChain, 'items'> & { items: Array<ResolversTypes['Chain']> }>;
  PaginatedPartner: ResolverTypeWrapper<PaginatedPartner>;
  PaginatedPlatform: ResolverTypeWrapper<Omit<PaginatedPlatform, 'items'> & { items: Array<ResolversTypes['Platform']> }>;
  PaginatedProduct: ResolverTypeWrapper<Omit<PaginatedProduct, 'items'> & { items: Array<ResolversTypes['Product']> }>;
  PaginatedPromo: ResolverTypeWrapper<Omit<PaginatedPromo, 'items'> & { items: Array<ResolversTypes['Promo']> }>;
  PaginatedToken: ResolverTypeWrapper<Omit<PaginatedToken, 'items'> & { items: Array<ResolversTypes['Token']> }>;
  PaginatedUser: ResolverTypeWrapper<Omit<PaginatedUser, 'items'> & { items: Array<ResolversTypes['User']> }>;
  Partner: ResolverTypeWrapper<Partner>;
  PartnerFilter: PartnerFilter;
  PartnerOrderBy: PartnerOrderBy;
  Platform: ResolverTypeWrapper<Platform>;
  PlatformFilter: PlatformFilter;
  PlatformOrderBy: PlatformOrderBy;
  PlatformProduct: ResolverTypeWrapper<Omit<PlatformProduct, 'platform' | 'products'> & { platform: ResolversTypes['Platform'], products: ResolversTypes['PaginatedProduct'] }>;
  PointsPromo: ResolverTypeWrapper<Omit<PointsPromo, 'products'> & { products: ResolversTypes['PaginatedProduct'] }>;
  Product: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Product']>;
  ProductFilter: ProductFilter;
  ProductLifecycle: ResolverTypeWrapper<ProductLifecycle>;
  ProductLifecycleFilter: ProductLifecycleFilter;
  ProductOrderBy: ProductOrderBy;
  ProductStatus: ProductStatus;
  ProductTvlBreakdown: ResolverTypeWrapper<ProductTvlBreakdown>;
  ProductType: ProductType;
  Promo: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Promo']>;
  PromoCampaign: ResolverTypeWrapper<PromoCampaign>;
  PromoCampaignFilter: PromoCampaignFilter;
  PromoFilter: PromoFilter;
  PromoOrderBy: PromoOrderBy;
  PromoStatus: PromoStatus;
  PromoType: PromoType;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  RewardPool: ResolverTypeWrapper<Omit<RewardPool, 'chain' | 'rewardTokens' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: ResolversTypes['Chain'], rewardTokens: Array<ResolversTypes['TokenErc20']>, shareToken: ResolversTypes['TokenErc20'], strategyContract: ResolversTypes['Contract'], underlyingProduct: ResolversTypes['PlatformProduct'], underlyingToken: ResolversTypes['TokenErc20'], vaultContract: ResolversTypes['Contract'] }>;
  RewardPoolHistory: ResolverTypeWrapper<RewardPoolHistory>;
  RewardPoolPromo: ResolverTypeWrapper<Omit<RewardPoolPromo, 'rewardPool'> & { rewardPool: ResolversTypes['RewardPool'] }>;
  Socials: ResolverTypeWrapper<Socials>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TimeseriesInterval: TimeseriesInterval;
  TimeseriesOptions: TimeseriesOptions;
  Token: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Token']>;
  TokenErc20: ResolverTypeWrapper<Omit<TokenErc20, 'chain' | 'contract' | 'underlyingTokens'> & { chain: ResolversTypes['Chain'], contract: ResolversTypes['Contract'], underlyingTokens?: Maybe<Array<ResolversTypes['Token']>> }>;
  TokenErc20History: ResolverTypeWrapper<TokenErc20History>;
  TokenFilter: TokenFilter;
  TokenNative: ResolverTypeWrapper<Omit<TokenNative, 'chain'> & { chain: ResolversTypes['Chain'] }>;
  TokenNativeHistory: ResolverTypeWrapper<TokenNativeHistory>;
  TokenOrderBy: TokenOrderBy;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  UnderlyingPoolPromo: ResolverTypeWrapper<Omit<UnderlyingPoolPromo, 'pool' | 'products'> & { pool: ResolversTypes['Contract'], products: ResolversTypes['PaginatedProduct'] }>;
  User: ResolverTypeWrapper<Omit<User, 'contracts'> & { contracts: Array<ResolversTypes['Contract']> }>;
  UserFilter: UserFilter;
  UserOrderBy: UserOrderBy;
  UserPosition: ResolverTypeWrapper<Omit<UserPosition, 'chain' | 'product' | 'user'> & { chain: ResolversTypes['Chain'], product: ResolversTypes['Product'], user: ResolversTypes['User'] }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AirdropPromo: Omit<AirdropPromo, 'pool' | 'products'> & { pool: ResolversParentTypes['Contract'], products: ResolversParentTypes['PaginatedProduct'] };
  ApyBreakdown: ApyBreakdown;
  ApyBreakdownFilter: ApyBreakdownFilter;
  BigDecimal: Scalars['BigDecimal']['output'];
  BigDecimalDataPoint: BigDecimalDataPoint;
  BigInt: Scalars['BigInt']['output'];
  BigIntDataPoint: BigIntDataPoint;
  Boolean: Scalars['Boolean']['output'];
  Chain: Omit<Chain, 'tokens'> & { tokens: ResolversParentTypes['PaginatedToken'] };
  ChainFilter: ChainFilter;
  ChainHistory: ChainHistory;
  ClassicVault: Omit<ClassicVault, 'chain' | 'eolLegacyBoosts' | 'eolRewardPools' | 'promos' | 'rewardPool' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: ResolversParentTypes['Chain'], eolLegacyBoosts: Array<ResolversParentTypes['LegacyBoost']>, eolRewardPools: Array<ResolversParentTypes['RewardPool']>, promos: ResolversParentTypes['PaginatedPromo'], rewardPool?: Maybe<ResolversParentTypes['RewardPool']>, shareToken: ResolversParentTypes['TokenErc20'], strategyContract: ResolversParentTypes['Contract'], underlyingProduct: ResolversParentTypes['PlatformProduct'], underlyingToken: ResolversParentTypes['TokenErc20'], vaultContract: ResolversParentTypes['Contract'] };
  ClassicVaultHistory: ClassicVaultHistory;
  ClmBundle: Omit<ClmBundle, 'chain' | 'clmManager' | 'clmManagerRewardPool' | 'eolLegacyBoosts' | 'eolVaultRewardPools' | 'vault' | 'vaultRewardPool'> & { chain: ResolversParentTypes['Chain'], clmManager: ResolversParentTypes['ClmManager'], clmManagerRewardPool?: Maybe<ResolversParentTypes['RewardPool']>, eolLegacyBoosts: Array<ResolversParentTypes['LegacyBoost']>, eolVaultRewardPools: Array<ResolversParentTypes['RewardPool']>, vault?: Maybe<ResolversParentTypes['ClassicVault']>, vaultRewardPool?: Maybe<ResolversParentTypes['RewardPool']> };
  ClmManager: Omit<ClmManager, 'chain' | 'eolLegacyBoosts' | 'eolRewardPools' | 'promos' | 'rewardPool' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingTokens' | 'vault' | 'vaultContract'> & { chain: ResolversParentTypes['Chain'], eolLegacyBoosts: Array<ResolversParentTypes['LegacyBoost']>, eolRewardPools: Array<ResolversParentTypes['RewardPool']>, promos: ResolversParentTypes['PaginatedPromo'], rewardPool?: Maybe<ResolversParentTypes['RewardPool']>, shareToken: ResolversParentTypes['TokenErc20'], strategyContract: ResolversParentTypes['Contract'], underlyingProduct: ResolversParentTypes['PlatformProduct'], underlyingTokens: Array<ResolversParentTypes['TokenErc20']>, vault?: Maybe<ResolversParentTypes['ClassicVault']>, vaultContract: ResolversParentTypes['Contract'] };
  ClmManagerHistory: ClmManagerHistory;
  Contract: Omit<Contract, 'chain'> & { chain: ResolversParentTypes['Chain'] };
  DateTime: Scalars['DateTime']['output'];
  Float: Scalars['Float']['output'];
  FloatDataPoint: FloatDataPoint;
  Global: Global;
  GlobalHistory: GlobalHistory;
  GovBundle: Omit<GovBundle, 'chain' | 'compoundingVault' | 'govVault'> & { chain: ResolversParentTypes['Chain'], compoundingVault?: Maybe<ResolversParentTypes['ClassicVault']>, govVault: ResolversParentTypes['GovVault'] };
  GovVault: Omit<GovVault, 'chain' | 'promos' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: ResolversParentTypes['Chain'], promos: ResolversParentTypes['PaginatedPromo'], shareToken: ResolversParentTypes['TokenErc20'], strategyContract: ResolversParentTypes['Contract'], underlyingProduct: ResolversParentTypes['PlatformProduct'], underlyingToken: ResolversParentTypes['TokenErc20'], vaultContract: ResolversParentTypes['Contract'] };
  GovVaultHistory: GovVaultHistory;
  HexString: Scalars['HexString']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LegacyBoost: Omit<LegacyBoost, 'chain' | 'strategyContract' | 'underlyingProduct' | 'vaultContract'> & { chain: ResolversParentTypes['Chain'], strategyContract: ResolversParentTypes['Contract'], underlyingProduct: ResolversParentTypes['Product'], vaultContract: ResolversParentTypes['Contract'] };
  LegacyBoostPromo: Omit<LegacyBoostPromo, 'boost'> & { boost: ResolversParentTypes['LegacyBoost'] };
  LstVault: Omit<LstVault, 'chain' | 'promos' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: ResolversParentTypes['Chain'], promos: ResolversParentTypes['PaginatedPromo'], shareToken: ResolversParentTypes['TokenErc20'], strategyContract: ResolversParentTypes['Contract'], underlyingProduct: ResolversParentTypes['PlatformProduct'], underlyingToken: ResolversParentTypes['TokenErc20'], vaultContract: ResolversParentTypes['Contract'] };
  LstVaultHistory: LstVaultHistory;
  OffChainPromo: Omit<OffChainPromo, 'products'> & { products: ResolversParentTypes['PaginatedProduct'] };
  PageInfo: PageInfo;
  PaginatedChain: Omit<PaginatedChain, 'items'> & { items: Array<ResolversParentTypes['Chain']> };
  PaginatedPartner: PaginatedPartner;
  PaginatedPlatform: Omit<PaginatedPlatform, 'items'> & { items: Array<ResolversParentTypes['Platform']> };
  PaginatedProduct: Omit<PaginatedProduct, 'items'> & { items: Array<ResolversParentTypes['Product']> };
  PaginatedPromo: Omit<PaginatedPromo, 'items'> & { items: Array<ResolversParentTypes['Promo']> };
  PaginatedToken: Omit<PaginatedToken, 'items'> & { items: Array<ResolversParentTypes['Token']> };
  PaginatedUser: Omit<PaginatedUser, 'items'> & { items: Array<ResolversParentTypes['User']> };
  Partner: Partner;
  PartnerFilter: PartnerFilter;
  Platform: Platform;
  PlatformFilter: PlatformFilter;
  PlatformProduct: Omit<PlatformProduct, 'platform' | 'products'> & { platform: ResolversParentTypes['Platform'], products: ResolversParentTypes['PaginatedProduct'] };
  PointsPromo: Omit<PointsPromo, 'products'> & { products: ResolversParentTypes['PaginatedProduct'] };
  Product: ResolversUnionTypes<ResolversParentTypes>['Product'];
  ProductFilter: ProductFilter;
  ProductLifecycle: ProductLifecycle;
  ProductLifecycleFilter: ProductLifecycleFilter;
  ProductTvlBreakdown: ProductTvlBreakdown;
  Promo: ResolversUnionTypes<ResolversParentTypes>['Promo'];
  PromoCampaign: PromoCampaign;
  PromoCampaignFilter: PromoCampaignFilter;
  PromoFilter: PromoFilter;
  Query: Record<PropertyKey, never>;
  RewardPool: Omit<RewardPool, 'chain' | 'rewardTokens' | 'shareToken' | 'strategyContract' | 'underlyingProduct' | 'underlyingToken' | 'vaultContract'> & { chain: ResolversParentTypes['Chain'], rewardTokens: Array<ResolversParentTypes['TokenErc20']>, shareToken: ResolversParentTypes['TokenErc20'], strategyContract: ResolversParentTypes['Contract'], underlyingProduct: ResolversParentTypes['PlatformProduct'], underlyingToken: ResolversParentTypes['TokenErc20'], vaultContract: ResolversParentTypes['Contract'] };
  RewardPoolHistory: RewardPoolHistory;
  RewardPoolPromo: Omit<RewardPoolPromo, 'rewardPool'> & { rewardPool: ResolversParentTypes['RewardPool'] };
  Socials: Socials;
  String: Scalars['String']['output'];
  TimeseriesOptions: TimeseriesOptions;
  Token: ResolversUnionTypes<ResolversParentTypes>['Token'];
  TokenErc20: Omit<TokenErc20, 'chain' | 'contract' | 'underlyingTokens'> & { chain: ResolversParentTypes['Chain'], contract: ResolversParentTypes['Contract'], underlyingTokens?: Maybe<Array<ResolversParentTypes['Token']>> };
  TokenErc20History: TokenErc20History;
  TokenFilter: TokenFilter;
  TokenNative: Omit<TokenNative, 'chain'> & { chain: ResolversParentTypes['Chain'] };
  TokenNativeHistory: TokenNativeHistory;
  URL: Scalars['URL']['output'];
  UnderlyingPoolPromo: Omit<UnderlyingPoolPromo, 'pool' | 'products'> & { pool: ResolversParentTypes['Contract'], products: ResolversParentTypes['PaginatedProduct'] };
  User: Omit<User, 'contracts'> & { contracts: Array<ResolversParentTypes['Contract']> };
  UserFilter: UserFilter;
  UserPosition: Omit<UserPosition, 'chain' | 'product' | 'user'> & { chain: ResolversParentTypes['Chain'], product: ResolversParentTypes['Product'], user: ResolversParentTypes['User'] };
};

export type AirdropPromoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AirdropPromo'] = ResolversParentTypes['AirdropPromo']> = {
  campaign?: Resolver<ResolversTypes['PromoCampaign'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['PaginatedProduct'], ParentType, ContextType, RequireFields<AirdropPromoProductsArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PromoStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApyBreakdownResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApyBreakdown'] = ResolversParentTypes['ApyBreakdown']> = {
  totalApr?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalDailyYield?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tradingFeesApr?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tradingFeesDailyYield?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  vaultApr?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  vaultDailyYield?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export type BigDecimalDataPointResolvers<ContextType = any, ParentType extends ResolversParentTypes['BigDecimalDataPoint'] = ResolversParentTypes['BigDecimalDataPoint']> = {
  x?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BigIntDataPointResolvers<ContextType = any, ParentType extends ResolversParentTypes['BigIntDataPoint'] = ResolversParentTypes['BigIntDataPoint']> = {
  x?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
};

export type ChainResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chain'] = ResolversParentTypes['Chain']> = {
  historicalState?: Resolver<ResolversTypes['ChainHistory'], ParentType, ContextType, RequireFields<ChainHistoricalStateArgs, 'options'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  networkId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ChainStatus'], ParentType, ContextType>;
  tokens?: Resolver<ResolversTypes['PaginatedToken'], ParentType, ContextType, RequireFields<ChainTokensArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  totalTvlUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type ChainHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChainHistory'] = ResolversParentTypes['ChainHistory']> = {
  tvlUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
};

export type ClassicVaultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClassicVault'] = ResolversParentTypes['ClassicVault']> = {
  apy?: Resolver<ResolversTypes['ApyBreakdown'], ParentType, ContextType, Partial<ClassicVaultApyArgs>>;
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  eolLegacyBoosts?: Resolver<Array<ResolversTypes['LegacyBoost']>, ParentType, ContextType>;
  eolRewardPools?: Resolver<Array<ResolversTypes['RewardPool']>, ParentType, ContextType>;
  historicalState?: Resolver<ResolversTypes['ClassicVaultHistory'], ParentType, ContextType, RequireFields<ClassicVaultHistoricalStateArgs, 'options'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastHarvest?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  lifecycle?: Resolver<ResolversTypes['ProductLifecycle'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pinned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  promos?: Resolver<ResolversTypes['PaginatedPromo'], ParentType, ContextType, RequireFields<ClassicVaultPromosArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  rewardPool?: Resolver<Maybe<ResolversTypes['RewardPool']>, ParentType, ContextType>;
  sharePrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shareToken?: Resolver<ResolversTypes['TokenErc20'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strategyContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['ProductTvlBreakdown'], ParentType, ContextType>;
  underlyingProduct?: Resolver<ResolversTypes['PlatformProduct'], ParentType, ContextType>;
  underlyingToken?: Resolver<ResolversTypes['TokenErc20'], ParentType, ContextType>;
  vaultContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClassicVaultHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClassicVaultHistory'] = ResolversParentTypes['ClassicVaultHistory']> = {
  apy?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  sharePrice?: Resolver<Array<ResolversTypes['BigDecimalDataPoint']>, ParentType, ContextType>;
  tvlUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
};

export type ClmBundleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClmBundle'] = ResolversParentTypes['ClmBundle']> = {
  apy?: Resolver<ResolversTypes['ApyBreakdown'], ParentType, ContextType, Partial<ClmBundleApyArgs>>;
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  clmManager?: Resolver<ResolversTypes['ClmManager'], ParentType, ContextType>;
  clmManagerRewardPool?: Resolver<Maybe<ResolversTypes['RewardPool']>, ParentType, ContextType>;
  eolLegacyBoosts?: Resolver<Array<ResolversTypes['LegacyBoost']>, ParentType, ContextType>;
  eolVaultRewardPools?: Resolver<Array<ResolversTypes['RewardPool']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sharePrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['ClassicVault']>, ParentType, ContextType>;
  vaultRewardPool?: Resolver<Maybe<ResolversTypes['RewardPool']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClmManagerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClmManager'] = ResolversParentTypes['ClmManager']> = {
  apy?: Resolver<ResolversTypes['ApyBreakdown'], ParentType, ContextType, Partial<ClmManagerApyArgs>>;
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  eolLegacyBoosts?: Resolver<Array<ResolversTypes['LegacyBoost']>, ParentType, ContextType>;
  eolRewardPools?: Resolver<Array<ResolversTypes['RewardPool']>, ParentType, ContextType>;
  historicalState?: Resolver<ResolversTypes['ClmManagerHistory'], ParentType, ContextType, RequireFields<ClmManagerHistoricalStateArgs, 'options'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastHarvest?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  lifecycle?: Resolver<ResolversTypes['ProductLifecycle'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pinned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  promos?: Resolver<ResolversTypes['PaginatedPromo'], ParentType, ContextType, RequireFields<ClmManagerPromosArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  rewardPool?: Resolver<Maybe<ResolversTypes['RewardPool']>, ParentType, ContextType>;
  sharePrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shareToken?: Resolver<ResolversTypes['TokenErc20'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strategyContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['ProductTvlBreakdown'], ParentType, ContextType>;
  underlyingProduct?: Resolver<ResolversTypes['PlatformProduct'], ParentType, ContextType>;
  underlyingTokens?: Resolver<Array<ResolversTypes['TokenErc20']>, ParentType, ContextType>;
  vault?: Resolver<Maybe<ResolversTypes['ClassicVault']>, ParentType, ContextType>;
  vaultContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClmManagerHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClmManagerHistory'] = ResolversParentTypes['ClmManagerHistory']> = {
  apy?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  sharePrice?: Resolver<Array<ResolversTypes['BigDecimalDataPoint']>, ParentType, ContextType>;
  tvlUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
};

export type ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> = {
  address?: Resolver<ResolversTypes['HexString'], ParentType, ContextType>;
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  createdAtBlock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FloatDataPointResolvers<ContextType = any, ParentType extends ResolversParentTypes['FloatDataPoint'] = ResolversParentTypes['FloatDataPoint']> = {
  x?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type GlobalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Global'] = ResolversParentTypes['Global']> = {
  historicalState?: Resolver<ResolversTypes['GlobalHistory'], ParentType, ContextType, RequireFields<GlobalHistoricalStateArgs, 'options'>>;
  monthlyRevenueUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  monthlyYieldUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalTvlUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weeklyMooBifiBuybackAmount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weeklyMooBifiBuybackUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weeklyRevenueUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weeklyYieldUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type GlobalHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['GlobalHistory'] = ResolversParentTypes['GlobalHistory']> = {
  monthlyRevenueUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  monthlyYieldUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  tvlUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  weeklyMooBifiBuybackAmount?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  weeklyMooBifiBuybackUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  weeklyRevenueUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  weeklyYieldUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
};

export type GovBundleResolvers<ContextType = any, ParentType extends ResolversParentTypes['GovBundle'] = ResolversParentTypes['GovBundle']> = {
  apy?: Resolver<ResolversTypes['ApyBreakdown'], ParentType, ContextType, Partial<GovBundleApyArgs>>;
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  compoundingVault?: Resolver<Maybe<ResolversTypes['ClassicVault']>, ParentType, ContextType>;
  govVault?: Resolver<ResolversTypes['GovVault'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sharePrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GovVaultResolvers<ContextType = any, ParentType extends ResolversParentTypes['GovVault'] = ResolversParentTypes['GovVault']> = {
  apy?: Resolver<ResolversTypes['ApyBreakdown'], ParentType, ContextType, Partial<GovVaultApyArgs>>;
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  historicalState?: Resolver<ResolversTypes['GovVaultHistory'], ParentType, ContextType, RequireFields<GovVaultHistoricalStateArgs, 'options'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastDistribution?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  lifecycle?: Resolver<ResolversTypes['ProductLifecycle'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pinned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  promos?: Resolver<ResolversTypes['PaginatedPromo'], ParentType, ContextType, RequireFields<GovVaultPromosArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  sharePrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shareToken?: Resolver<ResolversTypes['TokenErc20'], ParentType, ContextType>;
  strategyContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['ProductTvlBreakdown'], ParentType, ContextType>;
  underlyingProduct?: Resolver<ResolversTypes['PlatformProduct'], ParentType, ContextType>;
  underlyingToken?: Resolver<ResolversTypes['TokenErc20'], ParentType, ContextType>;
  vaultContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GovVaultHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['GovVaultHistory'] = ResolversParentTypes['GovVaultHistory']> = {
  apy?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  buyback?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  sharePrice?: Resolver<Array<ResolversTypes['BigDecimalDataPoint']>, ParentType, ContextType>;
  totalBuyback?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  tvlUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
};

export interface HexStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexString'], any> {
  name: 'HexString';
}

export type LegacyBoostResolvers<ContextType = any, ParentType extends ResolversParentTypes['LegacyBoost'] = ResolversParentTypes['LegacyBoost']> = {
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strategyContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  underlyingProduct?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  vaultContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LegacyBoostPromoResolvers<ContextType = any, ParentType extends ResolversParentTypes['LegacyBoostPromo'] = ResolversParentTypes['LegacyBoostPromo']> = {
  boost?: Resolver<ResolversTypes['LegacyBoost'], ParentType, ContextType>;
  campaign?: Resolver<ResolversTypes['PromoCampaign'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PromoStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LstVaultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LstVault'] = ResolversParentTypes['LstVault']> = {
  apy?: Resolver<ResolversTypes['ApyBreakdown'], ParentType, ContextType, Partial<LstVaultApyArgs>>;
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  historicalState?: Resolver<ResolversTypes['LstVaultHistory'], ParentType, ContextType, RequireFields<LstVaultHistoricalStateArgs, 'options'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastHarvest?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  lifecycle?: Resolver<ResolversTypes['ProductLifecycle'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pinned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  promos?: Resolver<ResolversTypes['PaginatedPromo'], ParentType, ContextType, RequireFields<LstVaultPromosArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  sharePrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shareToken?: Resolver<ResolversTypes['TokenErc20'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strategyContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['ProductTvlBreakdown'], ParentType, ContextType>;
  underlyingProduct?: Resolver<ResolversTypes['PlatformProduct'], ParentType, ContextType>;
  underlyingToken?: Resolver<ResolversTypes['TokenErc20'], ParentType, ContextType>;
  vaultContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LstVaultHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LstVaultHistory'] = ResolversParentTypes['LstVaultHistory']> = {
  apy?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  sharePrice?: Resolver<Array<ResolversTypes['BigDecimalDataPoint']>, ParentType, ContextType>;
  tvlUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
};

export type OffChainPromoResolvers<ContextType = any, ParentType extends ResolversParentTypes['OffChainPromo'] = ResolversParentTypes['OffChainPromo']> = {
  campaign?: Resolver<ResolversTypes['PromoCampaign'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['PaginatedProduct'], ParentType, ContextType, RequireFields<OffChainPromoProductsArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PromoStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type PaginatedChainResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedChain'] = ResolversParentTypes['PaginatedChain']> = {
  items?: Resolver<Array<ResolversTypes['Chain']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PaginatedPartnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedPartner'] = ResolversParentTypes['PaginatedPartner']> = {
  items?: Resolver<Array<ResolversTypes['Partner']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PaginatedPlatformResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedPlatform'] = ResolversParentTypes['PaginatedPlatform']> = {
  items?: Resolver<Array<ResolversTypes['Platform']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PaginatedProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedProduct'] = ResolversParentTypes['PaginatedProduct']> = {
  items?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PaginatedPromoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedPromo'] = ResolversParentTypes['PaginatedPromo']> = {
  items?: Resolver<Array<ResolversTypes['Promo']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PaginatedTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedToken'] = ResolversParentTypes['PaginatedToken']> = {
  items?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PaginatedUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedUser'] = ResolversParentTypes['PaginatedUser']> = {
  items?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export type PartnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Partner'] = ResolversParentTypes['Partner']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socials?: Resolver<ResolversTypes['Socials'], ParentType, ContextType>;
};

export type PlatformResolvers<ContextType = any, ParentType extends ResolversParentTypes['Platform'] = ResolversParentTypes['Platform']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socials?: Resolver<ResolversTypes['Socials'], ParentType, ContextType>;
};

export type PlatformProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlatformProduct'] = ResolversParentTypes['PlatformProduct']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['PaginatedProduct'], ParentType, ContextType, RequireFields<PlatformProductProductsArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PointsPromoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PointsPromo'] = ResolversParentTypes['PointsPromo']> = {
  campaign?: Resolver<ResolversTypes['PromoCampaign'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['PaginatedProduct'], ParentType, ContextType, RequireFields<PointsPromoProductsArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PromoStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  __resolveType: TypeResolveFn<'ClassicVault' | 'ClmBundle' | 'ClmManager' | 'GovBundle' | 'GovVault' | 'LegacyBoost' | 'LstVault' | 'RewardPool', ParentType, ContextType>;
};

export type ProductLifecycleResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductLifecycle'] = ResolversParentTypes['ProductLifecycle']> = {
  pauseReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pausedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  retireReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  retiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProductStatus'], ParentType, ContextType>;
};

export type ProductTvlBreakdownResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductTvlBreakdown'] = ResolversParentTypes['ProductTvlBreakdown']> = {
  shareOfPool?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  underlyingPoolTvlUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  vaultTvlUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type PromoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Promo'] = ResolversParentTypes['Promo']> = {
  __resolveType: TypeResolveFn<'AirdropPromo' | 'LegacyBoostPromo' | 'OffChainPromo' | 'PointsPromo' | 'RewardPoolPromo' | 'UnderlyingPoolPromo', ParentType, ContextType>;
};

export type PromoCampaignResolvers<ContextType = any, ParentType extends ResolversParentTypes['PromoCampaign'] = ResolversParentTypes['PromoCampaign']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  learnMoreURL?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  partners?: Resolver<Array<ResolversTypes['Partner']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  socials?: Resolver<ResolversTypes['Socials'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType, RequireFields<QueryChainArgs, 'id'>>;
  chains?: Resolver<ResolversTypes['PaginatedChain'], ParentType, ContextType, RequireFields<QueryChainsArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  global?: Resolver<ResolversTypes['Global'], ParentType, ContextType>;
  partner?: Resolver<ResolversTypes['Partner'], ParentType, ContextType, RequireFields<QueryPartnerArgs, 'id'>>;
  partners?: Resolver<ResolversTypes['PaginatedPartner'], ParentType, ContextType, RequireFields<QueryPartnersArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType, RequireFields<QueryPlatformArgs, 'id'>>;
  platforms?: Resolver<ResolversTypes['PaginatedPlatform'], ParentType, ContextType, RequireFields<QueryPlatformsArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  products?: Resolver<ResolversTypes['PaginatedProduct'], ParentType, ContextType, RequireFields<QueryProductsArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType, RequireFields<QueryTokenArgs, 'id'>>;
  tokens?: Resolver<ResolversTypes['PaginatedToken'], ParentType, ContextType, Partial<QueryTokensArgs>>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<ResolversTypes['PaginatedUser'], ParentType, ContextType, RequireFields<QueryUsersArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
};

export type RewardPoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['RewardPool'] = ResolversParentTypes['RewardPool']> = {
  apy?: Resolver<ResolversTypes['ApyBreakdown'], ParentType, ContextType, Partial<RewardPoolApyArgs>>;
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  historicalState?: Resolver<ResolversTypes['RewardPoolHistory'], ParentType, ContextType, RequireFields<RewardPoolHistoricalStateArgs, 'options'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lifecycle?: Resolver<ResolversTypes['ProductLifecycle'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rewardTokens?: Resolver<Array<ResolversTypes['TokenErc20']>, ParentType, ContextType>;
  sharePrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shareToken?: Resolver<ResolversTypes['TokenErc20'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  strategyContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['ProductTvlBreakdown'], ParentType, ContextType>;
  underlyingProduct?: Resolver<ResolversTypes['PlatformProduct'], ParentType, ContextType>;
  underlyingToken?: Resolver<ResolversTypes['TokenErc20'], ParentType, ContextType>;
  vaultContract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardPoolHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RewardPoolHistory'] = ResolversParentTypes['RewardPoolHistory']> = {
  apy?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
  sharePrice?: Resolver<Array<ResolversTypes['BigDecimalDataPoint']>, ParentType, ContextType>;
  tvlUSD?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
};

export type RewardPoolPromoResolvers<ContextType = any, ParentType extends ResolversParentTypes['RewardPoolPromo'] = ResolversParentTypes['RewardPoolPromo']> = {
  campaign?: Resolver<ResolversTypes['PromoCampaign'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rewardPool?: Resolver<ResolversTypes['RewardPool'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PromoStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SocialsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Socials'] = ResolversParentTypes['Socials']> = {
  discordURL?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  docsURL?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  githubURL?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  telegramURL?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  twitterURL?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  websiteURL?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  __resolveType: TypeResolveFn<'TokenErc20' | 'TokenNative', ParentType, ContextType>;
};

export type TokenErc20Resolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenErc20'] = ResolversParentTypes['TokenErc20']> = {
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  historicalState?: Resolver<ResolversTypes['TokenErc20History'], ParentType, ContextType, RequireFields<TokenErc20HistoricalStateArgs, 'options'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['FloatDataPoint'], ParentType, ContextType>;
  priceChange24h?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  underlyingTokens?: Resolver<Maybe<Array<ResolversTypes['Token']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenErc20HistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenErc20History'] = ResolversParentTypes['TokenErc20History']> = {
  price?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
};

export type TokenNativeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenNative'] = ResolversParentTypes['TokenNative']> = {
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  historicalState?: Resolver<ResolversTypes['TokenNativeHistory'], ParentType, ContextType, RequireFields<TokenNativeHistoricalStateArgs, 'options'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  priceChange24h?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenNativeHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenNativeHistory'] = ResolversParentTypes['TokenNativeHistory']> = {
  price?: Resolver<Array<ResolversTypes['FloatDataPoint']>, ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type UnderlyingPoolPromoResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnderlyingPoolPromo'] = ResolversParentTypes['UnderlyingPoolPromo']> = {
  campaign?: Resolver<ResolversTypes['PromoCampaign'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['PaginatedProduct'], ParentType, ContextType, RequireFields<UnderlyingPoolPromoProductsArgs, 'first' | 'orderBy' | 'orderDirection' | 'skip' | 'where'>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PromoStatus']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  address?: Resolver<ResolversTypes['HexString'], ParentType, ContextType>;
  contracts?: Resolver<Array<ResolversTypes['Contract']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type UserPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPosition'] = ResolversParentTypes['UserPosition']> = {
  chain?: Resolver<ResolversTypes['Chain'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pnl?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  shareQuantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  valueUSD?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AirdropPromo?: AirdropPromoResolvers<ContextType>;
  ApyBreakdown?: ApyBreakdownResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigDecimalDataPoint?: BigDecimalDataPointResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  BigIntDataPoint?: BigIntDataPointResolvers<ContextType>;
  Chain?: ChainResolvers<ContextType>;
  ChainHistory?: ChainHistoryResolvers<ContextType>;
  ClassicVault?: ClassicVaultResolvers<ContextType>;
  ClassicVaultHistory?: ClassicVaultHistoryResolvers<ContextType>;
  ClmBundle?: ClmBundleResolvers<ContextType>;
  ClmManager?: ClmManagerResolvers<ContextType>;
  ClmManagerHistory?: ClmManagerHistoryResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  FloatDataPoint?: FloatDataPointResolvers<ContextType>;
  Global?: GlobalResolvers<ContextType>;
  GlobalHistory?: GlobalHistoryResolvers<ContextType>;
  GovBundle?: GovBundleResolvers<ContextType>;
  GovVault?: GovVaultResolvers<ContextType>;
  GovVaultHistory?: GovVaultHistoryResolvers<ContextType>;
  HexString?: GraphQLScalarType;
  LegacyBoost?: LegacyBoostResolvers<ContextType>;
  LegacyBoostPromo?: LegacyBoostPromoResolvers<ContextType>;
  LstVault?: LstVaultResolvers<ContextType>;
  LstVaultHistory?: LstVaultHistoryResolvers<ContextType>;
  OffChainPromo?: OffChainPromoResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginatedChain?: PaginatedChainResolvers<ContextType>;
  PaginatedPartner?: PaginatedPartnerResolvers<ContextType>;
  PaginatedPlatform?: PaginatedPlatformResolvers<ContextType>;
  PaginatedProduct?: PaginatedProductResolvers<ContextType>;
  PaginatedPromo?: PaginatedPromoResolvers<ContextType>;
  PaginatedToken?: PaginatedTokenResolvers<ContextType>;
  PaginatedUser?: PaginatedUserResolvers<ContextType>;
  Partner?: PartnerResolvers<ContextType>;
  Platform?: PlatformResolvers<ContextType>;
  PlatformProduct?: PlatformProductResolvers<ContextType>;
  PointsPromo?: PointsPromoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductLifecycle?: ProductLifecycleResolvers<ContextType>;
  ProductTvlBreakdown?: ProductTvlBreakdownResolvers<ContextType>;
  Promo?: PromoResolvers<ContextType>;
  PromoCampaign?: PromoCampaignResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RewardPool?: RewardPoolResolvers<ContextType>;
  RewardPoolHistory?: RewardPoolHistoryResolvers<ContextType>;
  RewardPoolPromo?: RewardPoolPromoResolvers<ContextType>;
  Socials?: SocialsResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenErc20?: TokenErc20Resolvers<ContextType>;
  TokenErc20History?: TokenErc20HistoryResolvers<ContextType>;
  TokenNative?: TokenNativeResolvers<ContextType>;
  TokenNativeHistory?: TokenNativeHistoryResolvers<ContextType>;
  URL?: GraphQLScalarType;
  UnderlyingPoolPromo?: UnderlyingPoolPromoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPosition?: UserPositionResolvers<ContextType>;
};

