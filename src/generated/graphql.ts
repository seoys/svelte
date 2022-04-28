import type { OperationStore } from '@urql/svelte';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AgeGroup = {
  __typename?: 'AgeGroup';
  /** 20대이하 */
  G20?: Maybe<Scalars['Int']>;
  /** 30대 */
  G30?: Maybe<Scalars['Int']>;
  /** 40대 */
  G40?: Maybe<Scalars['Int']>;
  /** 50대 이상 */
  G50?: Maybe<Scalars['Int']>;
};

export type Brand = {
  __typename?: 'Brand';
  brndId?: Maybe<Scalars['String']>;
  brndKorFlterNm?: Maybe<Scalars['String']>;
  brndNm?: Maybe<Scalars['String']>;
  brndStoryIntrcnCont?: Maybe<Scalars['String']>;
  dspCtgryNo?: Maybe<Scalars['String']>;
  equalRegDt?: Maybe<Scalars['String']>;
  equalYn?: Maybe<Scalars['String']>;
  godList?: Maybe<Array<Maybe<GodList>>>;
  lang?: Maybe<Scalars['String']>;
  mallId?: Maybe<Scalars['String']>;
  moBrndImgFileUrl?: Maybe<Scalars['String']>;
  pcBrndImgFileUrl?: Maybe<Scalars['String']>;
};

export type BrandInput = {
  brndId?: InputMaybe<Scalars['String']>;
  brndKorFlterNm?: InputMaybe<Scalars['String']>;
  brndNm?: InputMaybe<Scalars['String']>;
  brndStoryIntrcnCont?: InputMaybe<Scalars['String']>;
  dspCtgryNo?: InputMaybe<Scalars['String']>;
  equalRegDt?: InputMaybe<Scalars['String']>;
  equalYn?: InputMaybe<Scalars['String']>;
  godList?: InputMaybe<Array<InputMaybe<GodListInput>>>;
  lang?: InputMaybe<Scalars['String']>;
  mallId?: InputMaybe<Scalars['String']>;
  moBrndImgFileUrl?: InputMaybe<Scalars['String']>;
  pcBrndImgFileUrl?: InputMaybe<Scalars['String']>;
};

export type BrandPage = {
  __typename?: 'BrandPage';
  pages?: Maybe<BrandSubPage>;
  totalPage?: Maybe<Scalars['Int']>;
};

export type BrandSubPage = {
  __typename?: 'BrandSubPage';
  page?: Maybe<Array<Maybe<Brand>>>;
};

export type Content = {
  __typename?: 'Content';
  chk_category: Array<Maybe<Scalars['String']>>;
  chk_idKind?: Maybe<Scalars['String']>;
  chk_kind?: Maybe<Array<Maybe<Scalars['String']>>>;
  chk_persona: Array<Maybe<Scalars['String']>>;
  images?: Maybe<Array<Maybe<File>>>;
  rad_color?: Maybe<Scalars['String']>;
  rad_isUse: Scalars['Boolean'];
  rel_contents?: Maybe<Array<Maybe<Rel_Contents>>>;
  rel_products?: Maybe<Array<Maybe<Rel_Products>>>;
  sel_link?: Maybe<Scalars['String']>;
  sel_sort?: Maybe<Scalars['String']>;
  sel_textTypeLink?: Maybe<Array<Maybe<Scalars['String']>>>;
  txt_contentsTypeTitle?: Maybe<Scalars['String']>;
  txt_ctitle?: Maybe<Scalars['String']>;
  txt_endDT?: Maybe<Scalars['String']>;
  txt_endTime?: Maybe<Scalars['String']>;
  txt_fixsort?: Maybe<Sort>;
  txt_link?: Maybe<Scalars['String']>;
  txt_nSort?: Maybe<Sort>;
  txt_prodTypeTitle?: Maybe<Scalars['String']>;
  txt_ptitle?: Maybe<Scalars['String']>;
  txt_sort?: Maybe<Scalars['Int']>;
  txt_startDT?: Maybe<Scalars['String']>;
  txt_startTime?: Maybe<Scalars['String']>;
  txt_tag?: Maybe<Scalars['String']>;
  txt_textTypeLink?: Maybe<Array<Maybe<Scalars['String']>>>;
  txt_textTypeText?: Maybe<Array<Maybe<Scalars['String']>>>;
  txt_title?: Maybe<Scalars['String']>;
  txta_description?: Maybe<Scalars['String']>;
};

export type ContentInput = {
  chk_category?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  chk_idKind?: InputMaybe<Scalars['String']>;
  chk_kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  chk_persona?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images?: InputMaybe<Array<InputMaybe<FileInput>>>;
  rad_color?: InputMaybe<Scalars['String']>;
  rad_isUse?: InputMaybe<Scalars['Boolean']>;
  rel_contents?: InputMaybe<Array<InputMaybe<Rel_ContentsInput>>>;
  rel_products?: InputMaybe<Array<InputMaybe<Rel_ProductsInput>>>;
  sel_link?: InputMaybe<Scalars['String']>;
  sel_sort?: InputMaybe<Scalars['String']>;
  sel_textTypeLink?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  txt_contentsTypeTitle?: InputMaybe<Scalars['String']>;
  txt_ctitle?: InputMaybe<Scalars['String']>;
  txt_endDT?: InputMaybe<Scalars['String']>;
  txt_endTime?: InputMaybe<Scalars['String']>;
  txt_fixsort?: InputMaybe<SortInput>;
  txt_link?: InputMaybe<Scalars['String']>;
  txt_nSort?: InputMaybe<SortInput>;
  txt_prodTypeTitle?: InputMaybe<Scalars['String']>;
  txt_ptitle?: InputMaybe<Scalars['String']>;
  txt_sort?: InputMaybe<Scalars['Int']>;
  txt_startDT?: InputMaybe<Scalars['String']>;
  txt_startTime?: InputMaybe<Scalars['String']>;
  txt_tag?: InputMaybe<Scalars['String']>;
  txt_textTypeLink?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  txt_textTypeText?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  txt_title?: InputMaybe<Scalars['String']>;
  txta_description?: InputMaybe<Scalars['String']>;
};

export type ContentPage = {
  __typename?: 'ContentPage';
  pages?: Maybe<ContentSubPage>;
  totalPage?: Maybe<Scalars['Int']>;
};

export type ContentSubPage = {
  __typename?: 'ContentSubPage';
  page?: Maybe<Array<Maybe<FrontContent>>>;
};

export type Contents = {
  __typename?: 'Contents';
  _id?: Maybe<Scalars['ID']>;
  contents: Content;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  isUse: Scalars['Boolean'];
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

/** 상세 페이지 뷰 카운트  */
export type Details = {
  __typename?: 'Details';
  /** 클릭 수 */
  count?: Maybe<Scalars['Int']>;
  /** 디바이스 구분 > m:모바일, a:앱, w:웹  */
  devicekind?: Maybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  destination?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  mimetype?: Maybe<Scalars['String']>;
  originalname?: Maybe<Scalars['String']>;
};

export type FileInput = {
  destination?: InputMaybe<Scalars['String']>;
  encoding?: InputMaybe<Scalars['String']>;
  filename: Scalars['String'];
  mimetype?: InputMaybe<Scalars['String']>;
  originalname?: InputMaybe<Scalars['String']>;
};

export type FrontContent = {
  __typename?: 'FrontContent';
  _id?: Maybe<Scalars['ID']>;
  chk_category: Array<Maybe<Scalars['String']>>;
  chk_kind?: Maybe<Array<Maybe<Scalars['String']>>>;
  chk_persona: Array<Maybe<Scalars['String']>>;
  groupInfo?: Maybe<GroupInfo>;
  images?: Maybe<Array<Maybe<File>>>;
  pageSize?: Maybe<Scalars['Int']>;
  rad_color?: Maybe<Scalars['String']>;
  rad_isUse: Scalars['Boolean'];
  sel_link?: Maybe<Scalars['String']>;
  sel_sort?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
  txt_endDT?: Maybe<Scalars['String']>;
  txt_endTime?: Maybe<Scalars['String']>;
  txt_link?: Maybe<Scalars['String']>;
  txt_sort?: Maybe<Scalars['Int']>;
  txt_startDT?: Maybe<Scalars['String']>;
  txt_startTime?: Maybe<Scalars['String']>;
  txt_tag?: Maybe<Scalars['String']>;
  txt_title?: Maybe<Scalars['String']>;
  txta_description?: Maybe<Scalars['String']>;
};

export type FrontContentInput = {
  _id?: InputMaybe<Scalars['String']>;
  chk_category: Array<InputMaybe<Scalars['String']>>;
  chk_kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  chk_persona: Array<InputMaybe<Scalars['String']>>;
  groupInfo?: InputMaybe<GroupInfoInput>;
  images?: InputMaybe<Array<InputMaybe<FileInput>>>;
  pageSize?: InputMaybe<Scalars['Int']>;
  rad_color?: InputMaybe<Scalars['String']>;
  rad_isUse: Scalars['Boolean'];
  sel_link?: InputMaybe<Scalars['String']>;
  sel_sort?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
  txt_endDT?: InputMaybe<Scalars['String']>;
  txt_endTime?: InputMaybe<Scalars['String']>;
  txt_link?: InputMaybe<Scalars['String']>;
  txt_sort?: InputMaybe<Scalars['Int']>;
  txt_startDT?: InputMaybe<Scalars['String']>;
  txt_startTime?: InputMaybe<Scalars['String']>;
  txt_tag?: InputMaybe<Scalars['String']>;
  txt_title?: InputMaybe<Scalars['String']>;
  txta_description?: InputMaybe<Scalars['String']>;
};

export type Gender = {
  __typename?: 'Gender';
  /** 여 */
  female?: Maybe<Scalars['Int']>;
  /** 남 */
  male?: Maybe<Scalars['Int']>;
};

export type GodList = {
  __typename?: 'GodList';
  aplSalePrc?: Maybe<Scalars['Int']>;
  brndNm?: Maybe<Scalars['String']>;
  cpnIconNm?: Maybe<Scalars['String']>;
  dsgnGrpNo?: Maybe<Scalars['String']>;
  dspCtgryNm?: Maybe<Scalars['String']>;
  equalRegDt?: Maybe<Scalars['String']>;
  equalYn?: Maybe<Scalars['String']>;
  erpGodNo?: Maybe<Scalars['String']>;
  godDcRt?: Maybe<Scalars['String']>;
  godNm?: Maybe<Scalars['String']>;
  godNo?: Maybe<Scalars['String']>;
  iconNm?: Maybe<Scalars['String']>;
  imgUrl?: Maybe<Scalars['String']>;
  invQty?: Maybe<Scalars['Int']>;
  salePrc?: Maybe<Scalars['Int']>;
  vcIconNm?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GodListInput = {
  aplSalePrc?: InputMaybe<Scalars['Int']>;
  brndNm?: InputMaybe<Scalars['String']>;
  cpnIconNm?: InputMaybe<Scalars['String']>;
  dsgnGrpNo?: InputMaybe<Scalars['String']>;
  dspCtgryNm?: InputMaybe<Scalars['String']>;
  equalRegDt?: InputMaybe<Scalars['String']>;
  equalYn?: InputMaybe<Scalars['String']>;
  erpGodNo?: InputMaybe<Scalars['String']>;
  godDcRt?: InputMaybe<Scalars['String']>;
  godNm?: InputMaybe<Scalars['String']>;
  godNo?: InputMaybe<Scalars['String']>;
  iconNm?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imgUrl?: InputMaybe<Scalars['String']>;
  invQty?: InputMaybe<Scalars['Int']>;
  salePrc?: InputMaybe<Scalars['Int']>;
  vcIconNm?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type GodPage = {
  __typename?: 'GodPage';
  pages?: Maybe<GodSubPage>;
  totalPage?: Maybe<Scalars['Int']>;
};

export type GodSubPage = {
  __typename?: 'GodSubPage';
  page?: Maybe<Array<Maybe<GodList>>>;
};

export type Good = {
  __typename?: 'Good';
  beginIndex?: Maybe<Scalars['Int']>;
  endIndex?: Maybe<Scalars['Int']>;
  godList?: Maybe<Array<Maybe<GodList>>>;
  page?: Maybe<Page>;
};

export type GroupContent = {
  __typename?: 'GroupContent';
  chk_category?: Maybe<Array<Maybe<Scalars['String']>>>;
  chk_kind?: Maybe<Array<Maybe<Scalars['String']>>>;
  chk_persona?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<Array<Maybe<File>>>;
  rad_isUse: Scalars['Boolean'];
  sel_link?: Maybe<Scalars['String']>;
  sel_sort?: Maybe<Scalars['String']>;
  txt_endDT?: Maybe<Scalars['String']>;
  txt_endTime?: Maybe<Scalars['String']>;
  txt_link?: Maybe<Scalars['String']>;
  txt_sort?: Maybe<Scalars['Int']>;
  txt_startDT?: Maybe<Scalars['String']>;
  txt_startTime?: Maybe<Scalars['String']>;
  txt_tag?: Maybe<Scalars['String']>;
  txt_title?: Maybe<Array<Maybe<FrontContent>>>;
  txta_description?: Maybe<Scalars['String']>;
};

export type GroupInfo = {
  __typename?: 'GroupInfo';
  _id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<File>>>;
  txt_title?: Maybe<Scalars['String']>;
};

export type GroupInfoInput = {
  _id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<FileInput>>>;
  txt_title?: InputMaybe<Scalars['String']>;
};

export type GroupNames = {
  __typename?: 'GroupNames';
  _id?: Maybe<Scalars['String']>;
  txt_title?: Maybe<Scalars['String']>;
};

export type Join = {
  __typename?: 'Join';
  /** 앱 */
  app?: Maybe<Scalars['Int']>;
  /** 모바일 */
  mobile?: Maybe<Scalars['Int']>;
  /** 총합 */
  total?: Maybe<Scalars['Int']>;
};

export type Keyword = {
  __typename?: 'Keyword';
  code: Scalars['String'];
  group: Scalars['String'];
  keyword: Scalars['String'];
  kind: Scalars['String'];
  seq: Scalars['ID'];
  sequence: Scalars['Int'];
  thumbnail: Scalars['String'];
};

export type Keywords = {
  __typename?: 'Keywords';
  activity?: Maybe<Array<Maybe<SubKeyword>>>;
  city?: Maybe<Array<Maybe<SubKeyword>>>;
  cooking?: Maybe<Array<Maybe<SubKeyword>>>;
  design?: Maybe<Array<Maybe<SubKeyword>>>;
  icon?: Maybe<Array<Maybe<SubKeyword>>>;
  media?: Maybe<Array<Maybe<SubKeyword>>>;
  music?: Maybe<Array<Maybe<SubKeyword>>>;
  style?: Maybe<Array<Maybe<SubKeyword>>>;
  tpo?: Maybe<Array<Maybe<SubKeyword>>>;
};

/** 날짜별 통계(메인) */
export type MainDateStatistics = {
  __typename?: 'MainDateStatistics';
  /** 날짜 */
  date?: Maybe<Scalars['Date']>;
  /** 디바이스 상세정보 */
  details?: Maybe<Array<Maybe<Details>>>;
  /** 페이징처리를 위한 페이지 정보 */
  pageInfo?: Maybe<PageInfo>;
  /** 총 클릭 수 */
  totalCount?: Maybe<Scalars['Int']>;
};

export type MainStatistics = {
  __typename?: 'MainStatistics';
  details?: Maybe<Array<Maybe<Details>>>;
  endDT?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  pageInfo?: Maybe<PageInfo>;
  startDT?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createContents: Scalars['Boolean'];
  createCtsBanner: Scalars['Boolean'];
  createCtsGroups: Scalars['Boolean'];
  createKeyword: Keyword;
  createMainBanner: Scalars['Boolean'];
  createMainContents: Scalars['Boolean'];
  createPersonalizedProducts: Scalars['Boolean'];
  createPopup: Scalars['Boolean'];
  /** 통계정보 생성 */
  createStatistics: Scalars['Boolean'];
  createUser: User;
  deleteContents: Scalars['Boolean'];
  deleteCtsBanner: Scalars['Boolean'];
  deleteCtsGroups: Scalars['Boolean'];
  deleteMainBanner: Scalars['Boolean'];
  deleteMainContents: Scalars['Boolean'];
  deletePopup: Scalars['Boolean'];
  deleteUser?: Maybe<User>;
  login: Token;
  mutipleUpload: Array<Maybe<File>>;
  singleUpload: File;
  upSertUser?: Maybe<User>;
};


export type MutationCreateContentsArgs = {
  _id?: InputMaybe<Scalars['String']>;
  contents: ContentInput;
  isUse: Scalars['Boolean'];
  user: Scalars['String'];
};


export type MutationCreateCtsBannerArgs = {
  _id?: InputMaybe<Scalars['String']>;
  contents: ContentInput;
  isUse: Scalars['Boolean'];
  user: Scalars['String'];
};


export type MutationCreateCtsGroupsArgs = {
  _id?: InputMaybe<Scalars['String']>;
  contents: ContentInput;
  isUse: Scalars['Boolean'];
  user: Scalars['String'];
};


export type MutationCreateKeywordArgs = {
  code: Scalars['String'];
  group: Scalars['String'];
  keyword: Scalars['String'];
  kind: Scalars['String'];
  sequence: Scalars['Int'];
  thumbnail: Scalars['String'];
};


export type MutationCreateMainBannerArgs = {
  _id?: InputMaybe<Scalars['String']>;
  contents: ContentInput;
  isUse: Scalars['Boolean'];
  user: Scalars['String'];
};


export type MutationCreateMainContentsArgs = {
  _id?: InputMaybe<Scalars['String']>;
  contents: ContentInput;
  isUse: Scalars['Boolean'];
  user: Scalars['String'];
};


export type MutationCreatePersonalizedProductsArgs = {
  _id?: InputMaybe<Scalars['String']>;
  brands?: InputMaybe<Array<InputMaybe<BrandInput>>>;
  contents?: InputMaybe<Array<InputMaybe<FrontContentInput>>>;
  goods?: InputMaybe<Array<InputMaybe<GodListInput>>>;
  goodsCount?: InputMaybe<Scalars['Int']>;
  mbrNo: Scalars['String'];
};


export type MutationCreatePopupArgs = {
  _id?: InputMaybe<Scalars['String']>;
  contents: ContentInput;
  isUse: Scalars['Boolean'];
  user: Scalars['String'];
};


export type MutationCreateStatisticsArgs = {
  devicekind: Scalars['String'];
  id: Scalars['String'];
  kind: Scalars['String'];
  resource: Scalars['String'];
  txt_title?: InputMaybe<Scalars['String']>;
  useAgents?: InputMaybe<Rel_UseAgent>;
  userInfo?: InputMaybe<Rel_UseInfo>;
};


export type MutationCreateUserArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteContentsArgs = {
  _id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteCtsBannerArgs = {
  _id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteCtsGroupsArgs = {
  _id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteMainBannerArgs = {
  _id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteMainContentsArgs = {
  _id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};


export type MutationDeletePopupArgs = {
  _id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteUserArgs = {
  seq: Scalars['ID'];
};


export type MutationLoginArgs = {
  id: Scalars['String'];
  password: Scalars['String'];
};


export type MutationMutipleUploadArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
};


export type MutationSingleUploadArgs = {
  file?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpSertUserArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  seq: Scalars['ID'];
};

export type Page = {
  __typename?: 'Page';
  brndId?: Maybe<Scalars['String']>;
  brndSearchCnt?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
  dspCtgryNm?: Maybe<Scalars['String']>;
  godNoList?: Maybe<Array<Maybe<Scalars['String']>>>;
  mbrNo?: Maybe<Scalars['String']>;
  pageSize?: Maybe<Scalars['String']>;
  personas?: Maybe<Array<Maybe<Scalars['String']>>>;
  size?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

/** 페이징 정보 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** 현재 페이지 */
  currentPage?: Maybe<Scalars['Int']>;
  /** 제한 수의 따른 페이지 수 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 게시글 전체 수 */
  pageTotalCount?: Maybe<Scalars['Int']>;
};

export type Persona = {
  __typename?: 'Persona';
  _id?: Maybe<Scalars['ID']>;
  brandId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  initial?: Maybe<Scalars['String']>;
  isUse?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Keywords>;
  nameEng?: Maybe<Scalars['String']>;
  nameKor?: Maybe<Scalars['String']>;
};

/** 페르소나별 통계 */
export type PersonaGroupStatistics = {
  __typename?: 'PersonaGroupStatistics';
  pageInfo?: Maybe<PageInfo>;
  /** 페르소나별 리스트 */
  personaGroupList?: Maybe<Array<Maybe<PersonaGroupList>>>;
  /** 페르소나별 총계 */
  personaGroupTotal?: Maybe<PersonaGroup>;
};

export type PersonaList = {
  __typename?: 'PersonaList';
  /** 연령 */
  ageGroup?: Maybe<AgeGroup>;
  /** 날짜 */
  date?: Maybe<Scalars['Date']>;
  /** 성별 */
  gender?: Maybe<Gender>;
  /** 가입수 */
  join?: Maybe<Join>;
  /** 페이지 통계 */
  pageInfo?: Maybe<PageInfo>;
};

/** 페르소나 통계 */
export type PersonaStatistics = {
  __typename?: 'PersonaStatistics';
  personaList?: Maybe<Array<Maybe<PersonaList>>>;
  totalPerosna?: Maybe<TotalPerosna>;
};

export type PersonalizedProducts = {
  __typename?: 'PersonalizedProducts';
  _id?: Maybe<Scalars['ID']>;
  brands?: Maybe<BrandPage>;
  contents?: Maybe<ContentPage>;
  goods?: Maybe<GodPage>;
  mbrNo?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findContents: Array<Contents>;
  findCtsBanners: Array<Contents>;
  findCtsGroups: Array<Contents>;
  findMainBanners: Array<Contents>;
  findMainContents: Array<Contents>;
  findPersonas: Array<Persona>;
  findPopups: Array<Contents>;
  frontFindContents: Array<FrontContent>;
  /** 디스커버 배너 통계 */
  getDiscoverBannerStatistics?: Maybe<Array<Maybe<MainStatistics>>>;
  /** 디스커버 통계 */
  getDiscoverStatistics?: Maybe<Array<Maybe<MainStatistics>>>;
  getKeywords: Array<Keyword>;
  /** 메인 배너 통계 */
  getMainBannerStatistics?: Maybe<Array<Maybe<MainStatistics>>>;
  /** 메인 콘텐츠 통계 */
  getMainContentStatistics?: Maybe<Array<Maybe<MainStatistics>>>;
  /** 날짜별 메인 통계 */
  getMainDateStatistics?: Maybe<Array<Maybe<MainDateStatistics>>>;
  getPersonaForyouStatistics?: Maybe<PersonaGroupStatistics>;
  getPersonaGroupStatistics?: Maybe<PersonaGroupStatistics>;
  /** 페르소나 통계 */
  getPersonaStatistics?: Maybe<PersonaStatistics>;
  getPersonalizedProducts: Array<PersonalizedProducts>;
  /** 통계기본정보 */
  getStatistics?: Maybe<Array<Maybe<Statistics>>>;
  /** 각 통계의 합계 통계 */
  getTotalStatistics?: Maybe<TotalStatistics>;
  getUsers: Array<User>;
  keyword: Keyword;
  uploads?: Maybe<Array<Maybe<File>>>;
  useGroupInfoList?: Maybe<Array<Maybe<GroupInfo>>>;
  useGroupLists?: Maybe<Array<Maybe<GroupNames>>>;
  user: User;
  viewContents?: Maybe<Contents>;
  viewCtsBanner?: Maybe<Contents>;
  viewCtsGroups?: Maybe<Contents>;
  viewMainBanner?: Maybe<Contents>;
  viewMainContents?: Maybe<Contents>;
  viewPopup?: Maybe<Contents>;
};


export type QueryFindContentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryFindCtsBannersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryFindCtsGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryFindMainBannersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryFindMainContentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryFindPersonasArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryFindPopupsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  log?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryFrontFindContentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetDiscoverBannerStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetDiscoverStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetMainBannerStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetMainContentStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetMainDateStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetPersonaForyouStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetPersonaGroupStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetPersonaStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetPersonalizedProductsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryGetTotalStatisticsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryKeywordArgs = {
  keyword: Scalars['String'];
};


export type QueryUseGroupInfoListArgs = {
  title?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryViewContentsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryViewCtsBannerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryViewCtsGroupsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryViewMainBannerArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryViewMainContentsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryViewPopupArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type Rel_Contents = {
  __typename?: 'Rel_Contents';
  contents?: Maybe<Rel_ContentsOne>;
  id?: Maybe<Scalars['String']>;
};

export type Rel_ContentsInput = {
  contents?: InputMaybe<Rel_ContentsOneInput>;
  id?: InputMaybe<Scalars['String']>;
};

export type Rel_ContentsOne = {
  __typename?: 'Rel_ContentsOne';
  chk_category?: Maybe<Array<Maybe<Scalars['String']>>>;
  chk_kind?: Maybe<Array<Maybe<Scalars['String']>>>;
  chk_persona?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<Array<Maybe<File>>>;
  rad_isUse?: Maybe<Scalars['Boolean']>;
  sel_link?: Maybe<Scalars['String']>;
  sel_sort?: Maybe<Scalars['String']>;
  sel_textTypeLink?: Maybe<Array<Maybe<Scalars['String']>>>;
  txt_contentsTypeTitle?: Maybe<Scalars['String']>;
  txt_endDT?: Maybe<Scalars['String']>;
  txt_endTime?: Maybe<Scalars['String']>;
  txt_link?: Maybe<Scalars['String']>;
  txt_prodTypeTitle?: Maybe<Scalars['String']>;
  txt_sort?: Maybe<Scalars['Int']>;
  txt_startDT?: Maybe<Scalars['String']>;
  txt_startTime?: Maybe<Scalars['String']>;
  txt_tag?: Maybe<Scalars['String']>;
  txt_textTypeLink?: Maybe<Array<Maybe<Scalars['String']>>>;
  txt_textTypeText?: Maybe<Array<Maybe<Scalars['String']>>>;
  txt_title?: Maybe<Scalars['String']>;
  txta_description?: Maybe<Scalars['String']>;
};

export type Rel_ContentsOneInput = {
  chk_category?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  chk_kind?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  chk_persona?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images?: InputMaybe<Array<InputMaybe<FileInput>>>;
  rad_color?: InputMaybe<Scalars['String']>;
  rad_isUse?: InputMaybe<Scalars['Boolean']>;
  sel_link?: InputMaybe<Scalars['String']>;
  sel_sort?: InputMaybe<Scalars['String']>;
  sel_textTypeLink?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  txt_contentsTypeTitle?: InputMaybe<Scalars['String']>;
  txt_endDT?: InputMaybe<Scalars['String']>;
  txt_endTime?: InputMaybe<Scalars['String']>;
  txt_link?: InputMaybe<Scalars['String']>;
  txt_prodTypeTitle?: InputMaybe<Scalars['String']>;
  txt_sort?: InputMaybe<Scalars['Int']>;
  txt_startDT?: InputMaybe<Scalars['String']>;
  txt_startTime?: InputMaybe<Scalars['String']>;
  txt_tag?: InputMaybe<Scalars['String']>;
  txt_textTypeLink?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  txt_textTypeText?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  txt_title?: InputMaybe<Scalars['String']>;
  txta_description?: InputMaybe<Scalars['String']>;
};

export type Rel_Page = {
  brndId?: InputMaybe<Scalars['String']>;
  brndSearchCnt?: InputMaybe<Scalars['String']>;
  current?: InputMaybe<Scalars['String']>;
  dspCtgryNm?: InputMaybe<Scalars['String']>;
  godNoList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  mbrNo?: InputMaybe<Scalars['String']>;
  pageSize?: InputMaybe<Scalars['String']>;
  personas?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['Int']>;
};

export type Rel_Products = {
  __typename?: 'Rel_Products';
  autoBadge?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  discount_rate?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  normal_price?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  prodName?: Maybe<Scalars['String']>;
};

export type Rel_ProductsInput = {
  autoBadge?: InputMaybe<Scalars['String']>;
  brandName?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  discount_rate?: InputMaybe<Scalars['String']>;
  imagePath?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  normal_price?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  prodName?: InputMaybe<Scalars['String']>;
};

export type Rel_UseAgent = {
  browser?: InputMaybe<Scalars['String']>;
  browserVersion?: InputMaybe<Scalars['Float']>;
  deviceType?: InputMaybe<Scalars['String']>;
  deviceVendor?: InputMaybe<Scalars['String']>;
  engine?: InputMaybe<Scalars['String']>;
  engineVersion?: InputMaybe<Scalars['Float']>;
  isAndroid?: InputMaybe<Scalars['Boolean']>;
  isBot?: InputMaybe<Scalars['Boolean']>;
  isChrome?: InputMaybe<Scalars['Boolean']>;
  isChromeOS?: InputMaybe<Scalars['Boolean']>;
  isDesktop?: InputMaybe<Scalars['Boolean']>;
  isEdge?: InputMaybe<Scalars['Boolean']>;
  isFirefox?: InputMaybe<Scalars['Boolean']>;
  isIE?: InputMaybe<Scalars['Boolean']>;
  isIos?: InputMaybe<Scalars['Boolean']>;
  isIpad?: InputMaybe<Scalars['Boolean']>;
  isIphone?: InputMaybe<Scalars['Boolean']>;
  isMac?: InputMaybe<Scalars['Boolean']>;
  isMobile?: InputMaybe<Scalars['Boolean']>;
  isOpera?: InputMaybe<Scalars['Boolean']>;
  isSafari?: InputMaybe<Scalars['Boolean']>;
  isTablet?: InputMaybe<Scalars['Boolean']>;
  isWindows?: InputMaybe<Scalars['Boolean']>;
  os?: InputMaybe<Scalars['String']>;
  osVersion?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
};

export type Rel_UseInfo = {
  encMbrNo?: InputMaybe<Scalars['String']>;
  mbrNo?: InputMaybe<Scalars['String']>;
  myPageId?: InputMaybe<Scalars['String']>;
  myPageNknm?: InputMaybe<Scalars['String']>;
  myPagePrflIntrcnCont?: InputMaybe<Scalars['String']>;
  myPagePrflPhotoUrl?: InputMaybe<Scalars['String']>;
  onlneGrdCd?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Rel_User>;
};

export type Rel_User = {
  area?: InputMaybe<Scalars['String']>;
  birthYear?: InputMaybe<Scalars['Int']>;
  empty?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
};

export type Search = {
  __typename?: 'Search';
  sel_category?: Maybe<Scalars['String']>;
  sel_kind?: Maybe<Scalars['String']>;
  sel_presona?: Maybe<Scalars['String']>;
  sel_state?: Maybe<Scalars['String']>;
  txt_word?: Maybe<Scalars['String']>;
};

export type SearchInput = {
  sel_category?: InputMaybe<Scalars['String']>;
  sel_kind?: InputMaybe<Scalars['String']>;
  sel_presona?: InputMaybe<Scalars['String']>;
  sel_state?: InputMaybe<Scalars['String']>;
  txt_word?: InputMaybe<Scalars['String']>;
};

export type Sort = {
  __typename?: 'Sort';
  life?: Maybe<Scalars['Int']>;
  man?: Maybe<Scalars['Int']>;
  today?: Maybe<Scalars['Int']>;
  woman?: Maybe<Scalars['Int']>;
};

export type SortInput = {
  life?: InputMaybe<Scalars['Int']>;
  man?: InputMaybe<Scalars['Int']>;
  today?: InputMaybe<Scalars['Int']>;
  woman?: InputMaybe<Scalars['Int']>;
};

/** Description for the type */
export type Statistics = {
  __typename?: 'Statistics';
  /** 게시 고유번호 */
  _id?: Maybe<Scalars['ID']>;
  /** 생성일 */
  createdAt?: Maybe<Scalars['Date']>;
  /** 디바이스 구분(m:모바일, w:웹, a:앱) */
  devicekind?: Maybe<Scalars['String']>;
  /** 콘덴츠 고유번호, 상품 고유번호 */
  id?: Maybe<Scalars['String']>;
  /** 배너, 상품 구분(banner, goods) */
  kind: Scalars['String'];
  /** url 리소스 구분(main, equal, discover) */
  resource: Scalars['String'];
  /** 게시글 제목 */
  txt_title?: Maybe<Scalars['String']>;
  /** 수정일 */
  updatedAt?: Maybe<Scalars['Date']>;
  /** 사용자 브라우저 에이전트 */
  useAgents?: Maybe<UseAgent>;
};

export type SubKeyword = {
  __typename?: 'SubKeyword';
  code?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  keyword?: Maybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type TotalPerosna = {
  __typename?: 'TotalPerosna';
  /** 연령 */
  ageGroup?: Maybe<AgeGroup>;
  /** 성별 */
  gender?: Maybe<Gender>;
  /** 가입수 */
  join?: Maybe<Join>;
};

export type TotalStatistics = {
  __typename?: 'TotalStatistics';
  details?: Maybe<Array<Maybe<Details>>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UseAgent = {
  __typename?: 'UseAgent';
  /** 브라우저 */
  browser?: Maybe<Scalars['String']>;
  /** 브라우저버전 */
  browserVersion?: Maybe<Scalars['Float']>;
  /** 디바이스타입 */
  deviceType?: Maybe<Scalars['String']>;
  /** 디바이스벤더 */
  deviceVendor?: Maybe<Scalars['String']>;
  /** 엔진 */
  engine?: Maybe<Scalars['String']>;
  /** 엔진버전 */
  engineVersion?: Maybe<Scalars['Float']>;
  /** 안드로이드유무 */
  isAndroid?: Maybe<Scalars['Boolean']>;
  /** 봇유무 */
  isBot?: Maybe<Scalars['Boolean']>;
  /** 크롬유무 */
  isChrome?: Maybe<Scalars['Boolean']>;
  /** 크롬OS유무 */
  isChromeOS?: Maybe<Scalars['Boolean']>;
  /** 데스크탑유무 */
  isDesktop?: Maybe<Scalars['Boolean']>;
  /** 엣지유무 */
  isEdge?: Maybe<Scalars['Boolean']>;
  /** 파이어폭스유무 */
  isFirefox?: Maybe<Scalars['Boolean']>;
  /** IE유무 */
  isIE?: Maybe<Scalars['Boolean']>;
  /** IOS유무 */
  isIos?: Maybe<Scalars['Boolean']>;
  /** 아이패드유무 */
  isIpad?: Maybe<Scalars['Boolean']>;
  /** 아이폰유무 */
  isIphone?: Maybe<Scalars['Boolean']>;
  /** 맥유무 */
  isMac?: Maybe<Scalars['Boolean']>;
  /** 모바일유무 */
  isMobile?: Maybe<Scalars['Boolean']>;
  /** 오페라유무 */
  isOpera?: Maybe<Scalars['Boolean']>;
  /** 사파리유무 */
  isSafari?: Maybe<Scalars['Boolean']>;
  /** 테블릿유무 */
  isTablet?: Maybe<Scalars['Boolean']>;
  /** 윈도우유무 */
  isWindows?: Maybe<Scalars['Boolean']>;
  /** 운영체제 */
  os?: Maybe<Scalars['String']>;
  /** 운영체제 버전 */
  osVersion?: Maybe<Scalars['Float']>;
  /** 브라우저 소스 */
  source?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  /** 지역 */
  area?: Maybe<Scalars['String']>;
  /** 생년 */
  birthYear?: Maybe<Scalars['Int']>;
  empty?: Maybe<Scalars['String']>;
  /** 성별 */
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  seq: Scalars['ID'];
};

/** 페르소나별 구분 */
export type PersonaGroup = {
  __typename?: 'personaGroup';
  /** 아방가르드 */
  avantgarde?: Maybe<Scalars['Int']>;
  /** 보헤미안 */
  bohemian?: Maybe<Scalars['Int']>;
  /** 클래식 */
  classic?: Maybe<Scalars['Int']>;
  /** 프렌치 */
  french?: Maybe<Scalars['Int']>;
  /** 미니멀 */
  minimal?: Maybe<Scalars['Int']>;
  /** 뉴트로 */
  newtro?: Maybe<Scalars['Int']>;
  /** 펑크 */
  punk?: Maybe<Scalars['Int']>;
  /** 스포티 */
  sporty?: Maybe<Scalars['Int']>;
  /** 유스 */
  youth?: Maybe<Scalars['Int']>;
};

/** 페르소나별 구분 리스트 */
export type PersonaGroupList = {
  __typename?: 'personaGroupList';
  /** 날짜 */
  date?: Maybe<Scalars['Date']>;
  /** 페르소나 구분 */
  persona?: Maybe<PersonaGroup>;
};

export type UseInfo = {
  __typename?: 'useInfo';
  /** 고객 고유번호 */
  encMbrNo?: Maybe<Scalars['String']>;
  /** 고객 고유번호 */
  mbrNo?: Maybe<Scalars['String']>;
  /** 아이디 */
  myPageId?: Maybe<Scalars['String']>;
  /** 이름 */
  myPageNknm?: Maybe<Scalars['String']>;
  myPagePrflIntrcnCont?: Maybe<Scalars['String']>;
  /** 프로필 사진 */
  myPagePrflPhotoUrl?: Maybe<Scalars['String']>;
  onlneGrdCd?: Maybe<Scalars['String']>;
  /** 사용자 정보 */
  user?: Maybe<User>;
};

export type Find_Contents_BannerQueryVariables = Exact<{
  sort?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
}>;


export type Find_Contents_BannerQuery = { __typename?: 'Query', findMainBanners: Array<{ __typename: 'Contents', _id?: string | null, totalCount?: number | null, pageSize?: number | null, contents: { __typename?: 'Content', txt_title?: string | null, txta_description?: string | null, txt_startDT?: string | null, txt_startTime?: string | null, txt_endDT?: string | null, txt_endTime?: string | null, rad_isUse: boolean, rad_color?: string | null, txt_sort?: number | null, txt_link?: string | null, images?: Array<{ __typename?: 'File', filename: string } | null> | null } }> };

export type Get_ContentsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type Get_ContentsQuery = { __typename?: 'Query', viewMainBanner?: { __typename?: 'Contents', id: string, contents: { __typename?: 'Content', txt_title?: string | null, txta_description?: string | null, txt_startDT?: string | null, txt_startTime?: string | null, txt_endDT?: string | null, txt_endTime?: string | null, rad_isUse: boolean, sel_link?: string | null, txt_link?: string | null, sel_sort?: string | null, txt_sort?: number | null, images?: Array<{ __typename?: 'File', filename: string, mimetype?: string | null } | null> | null } } | null };


export const Find_Contents_BannerDocument = gql`
    query FIND_CONTENTS_BANNER($sort: String, $skip: Int, $limit: Int, $search: String) {
  findMainBanners(sort: $sort, skip: $skip, limit: $limit, search: $search) {
    _id
    __typename
    contents {
      txt_title
      txta_description
      txt_startDT
      txt_startTime
      txt_endDT
      txt_endTime
      rad_isUse
      rad_color
      txt_sort
      txt_link
      images {
        filename
      }
    }
    totalCount
    pageSize
  }
}
    `;
export const Get_ContentsDocument = gql`
    query GET_CONTENTS($id: String) {
  viewMainBanner(id: $id) {
    id
    contents {
      txt_title
      txta_description
      txt_startDT
      txt_startTime
      txt_endDT
      txt_endTime
      rad_isUse
      sel_link
      txt_link
      sel_sort
      txt_sort
      images {
        filename
        mimetype
      }
    }
  }
}
    `;
export type Find_Contents_BannerQueryStore = OperationStore<Find_Contents_BannerQuery, Find_Contents_BannerQueryVariables>;
export type Get_ContentsQueryStore = OperationStore<Get_ContentsQuery, Get_ContentsQueryVariables>;