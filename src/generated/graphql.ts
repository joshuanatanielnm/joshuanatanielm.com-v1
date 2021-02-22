import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  project?: Maybe<Project>;
  projectCollection?: Maybe<ProjectCollection>;
  talks?: Maybe<Talks>;
  talksCollection?: Maybe<TalksCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ProjectFilter>;
  order?: Maybe<Array<Maybe<ProjectOrder>>>;
};


export type QueryTalksArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryTalksCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<TalksFilter>;
  order?: Maybe<Array<Maybe<TalksOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};


export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};



export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}


export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  projectCollection?: Maybe<ProjectCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsProjectCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type Entry = {
  sys: Sys;
};

export type ProjectCollection = {
  __typename?: 'ProjectCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Project>>;
};

/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type Project = Entry & {
  __typename?: 'Project';
  sys: Sys;
  linkedFrom?: Maybe<ProjectLinkingCollections>;
  image?: Maybe<Asset>;
  stack?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  linkWebsite?: Maybe<Scalars['String']>;
  linkRepo?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  longDescription?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectStackArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectLinkWebsiteArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectLinkRepoArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectLongDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectShortDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/project) */
export type ProjectCategoryArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProjectLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['String']>;
  publishedAt_not?: Maybe<Scalars['String']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedAt_contains?: Maybe<Scalars['String']>;
  publishedAt_not_contains?: Maybe<Scalars['String']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['String']>;
  firstPublishedAt_not?: Maybe<Scalars['String']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstPublishedAt_contains?: Maybe<Scalars['String']>;
  firstPublishedAt_not_contains?: Maybe<Scalars['String']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['String']>;
  publishedVersion_not?: Maybe<Scalars['String']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  publishedVersion_contains?: Maybe<Scalars['String']>;
  publishedVersion_not_contains?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type ProjectFilter = {
  sys?: Maybe<SysFilter>;
  image_exists?: Maybe<Scalars['Boolean']>;
  stack_exists?: Maybe<Scalars['Boolean']>;
  stack_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  stack_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  stack_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  linkWebsite_exists?: Maybe<Scalars['Boolean']>;
  linkWebsite?: Maybe<Scalars['String']>;
  linkWebsite_not?: Maybe<Scalars['String']>;
  linkWebsite_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkWebsite_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkWebsite_contains?: Maybe<Scalars['String']>;
  linkWebsite_not_contains?: Maybe<Scalars['String']>;
  linkRepo_exists?: Maybe<Scalars['Boolean']>;
  linkRepo?: Maybe<Scalars['String']>;
  linkRepo_not?: Maybe<Scalars['String']>;
  linkRepo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkRepo_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkRepo_contains?: Maybe<Scalars['String']>;
  linkRepo_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  longDescription_exists?: Maybe<Scalars['Boolean']>;
  longDescription?: Maybe<Scalars['String']>;
  longDescription_not?: Maybe<Scalars['String']>;
  longDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  longDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  longDescription_contains?: Maybe<Scalars['String']>;
  longDescription_not_contains?: Maybe<Scalars['String']>;
  shortDescription_exists?: Maybe<Scalars['Boolean']>;
  shortDescription?: Maybe<Scalars['String']>;
  shortDescription_not?: Maybe<Scalars['String']>;
  shortDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortDescription_contains?: Maybe<Scalars['String']>;
  shortDescription_not_contains?: Maybe<Scalars['String']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  category_not?: Maybe<Scalars['String']>;
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains?: Maybe<Scalars['String']>;
  category_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ProjectFilter>>>;
  AND?: Maybe<Array<Maybe<ProjectFilter>>>;
};

export enum ProjectOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  LinkWebsiteAsc = 'linkWebsite_ASC',
  LinkWebsiteDesc = 'linkWebsite_DESC',
  LinkRepoAsc = 'linkRepo_ASC',
  LinkRepoDesc = 'linkRepo_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  LongDescriptionAsc = 'longDescription_ASC',
  LongDescriptionDesc = 'longDescription_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/talks) */
export type Talks = Entry & {
  __typename?: 'Talks';
  sys: Sys;
  linkedFrom?: Maybe<TalksLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  links?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/talks) */
export type TalksLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/talks) */
export type TalksNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/talks) */
export type TalksLinksArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/talks) */
export type TalksDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/houvt9hwn2b5/content_types/talks) */
export type TalksDateArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type TalksLinkingCollections = {
  __typename?: 'TalksLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TalksLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type TalksFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  links_exists?: Maybe<Scalars['Boolean']>;
  links?: Maybe<Scalars['String']>;
  links_not?: Maybe<Scalars['String']>;
  links_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  links_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  links_contains?: Maybe<Scalars['String']>;
  links_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  date_not?: Maybe<Scalars['DateTime']>;
  date_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  date_gt?: Maybe<Scalars['DateTime']>;
  date_gte?: Maybe<Scalars['DateTime']>;
  date_lt?: Maybe<Scalars['DateTime']>;
  date_lte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<Maybe<TalksFilter>>>;
  AND?: Maybe<Array<Maybe<TalksFilter>>>;
};

export enum TalksOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  LinksAsc = 'links_ASC',
  LinksDesc = 'links_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TalksCollection = {
  __typename?: 'TalksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Talks>>;
};

export type HomePageStaticPropsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageStaticPropsQuery = (
  { __typename?: 'Query' }
  & { projectCollection?: Maybe<(
    { __typename?: 'ProjectCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Project' }
      & Pick<Project, 'slug' | 'name' | 'shortDescription' | 'category'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ) }
    )>> }
  )>, talksCollection?: Maybe<(
    { __typename?: 'TalksCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Talks' }
      & Pick<Talks, 'name' | 'description' | 'date' | 'links'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ) }
    )>> }
  )> }
);

export type ProjectStaticPropsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectStaticPropsQuery = (
  { __typename?: 'Query' }
  & { projectCollection?: Maybe<(
    { __typename?: 'ProjectCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Project' }
      & Pick<Project, 'slug' | 'name' | 'shortDescription' | 'category'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ) }
    )>> }
  )> }
);

export type TalktStaticPropsQueryVariables = Exact<{ [key: string]: never; }>;


export type TalktStaticPropsQuery = (
  { __typename?: 'Query' }
  & { talksCollection?: Maybe<(
    { __typename?: 'TalksCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Talks' }
      & Pick<Talks, 'name' | 'description' | 'date' | 'links'>
      & { sys: (
        { __typename?: 'Sys' }
        & Pick<Sys, 'id'>
      ) }
    )>> }
  )> }
);

export type ProjectPageStaticPropsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ProjectPageStaticPropsQuery = (
  { __typename?: 'Query' }
  & { projectCollection?: Maybe<(
    { __typename?: 'ProjectCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Project' }
      & Pick<Project, 'name' | 'shortDescription' | 'longDescription' | 'stack' | 'linkRepo' | 'linkWebsite' | 'slug' | 'category'>
      & { image?: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'url' | 'width' | 'height'>
      )> }
    )>> }
  )> }
);

export type ProjectStaticPathQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectStaticPathQuery = (
  { __typename?: 'Query' }
  & { projectCollection?: Maybe<(
    { __typename?: 'ProjectCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Project' }
      & Pick<Project, 'slug'>
    )>> }
  )> }
);


export const HomePageStaticPropsDocument = gql`
    query homePageStaticProps {
  projectCollection(limit: 4) {
    items {
      sys {
        id
      }
      slug
      name
      shortDescription
      category
    }
  }
  talksCollection(limit: 4) {
    items {
      sys {
        id
      }
      name
      description
      date
      links
    }
  }
}
    `;
export const ProjectStaticPropsDocument = gql`
    query projectStaticProps {
  projectCollection {
    items {
      sys {
        id
      }
      slug
      name
      shortDescription
      category
    }
  }
}
    `;
export const TalktStaticPropsDocument = gql`
    query talktStaticProps {
  talksCollection {
    items {
      sys {
        id
      }
      name
      description
      date
      links
    }
  }
}
    `;
export const ProjectPageStaticPropsDocument = gql`
    query projectPageStaticProps($slug: String!) {
  projectCollection(limit: 1, where: {slug: $slug}) {
    items {
      name
      image {
        url
        width
        height
      }
      shortDescription
      longDescription
      stack
      linkRepo
      linkWebsite
      slug
      category
    }
  }
}
    `;
export const ProjectStaticPathDocument = gql`
    query projectStaticPath {
  projectCollection {
    items {
      slug
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    homePageStaticProps(variables?: HomePageStaticPropsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HomePageStaticPropsQuery> {
      return withWrapper(() => client.request<HomePageStaticPropsQuery>(print(HomePageStaticPropsDocument), variables, requestHeaders));
    },
    projectStaticProps(variables?: ProjectStaticPropsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectStaticPropsQuery> {
      return withWrapper(() => client.request<ProjectStaticPropsQuery>(print(ProjectStaticPropsDocument), variables, requestHeaders));
    },
    talktStaticProps(variables?: TalktStaticPropsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TalktStaticPropsQuery> {
      return withWrapper(() => client.request<TalktStaticPropsQuery>(print(TalktStaticPropsDocument), variables, requestHeaders));
    },
    projectPageStaticProps(variables: ProjectPageStaticPropsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectPageStaticPropsQuery> {
      return withWrapper(() => client.request<ProjectPageStaticPropsQuery>(print(ProjectPageStaticPropsDocument), variables, requestHeaders));
    },
    projectStaticPath(variables?: ProjectStaticPathQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectStaticPathQuery> {
      return withWrapper(() => client.request<ProjectStaticPathQuery>(print(ProjectStaticPathDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;