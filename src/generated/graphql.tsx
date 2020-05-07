import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import React from "react";
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Object representing a file */
export type GqlFile = {
   __typename?: 'File';
  id: Scalars['String'];
  name: Scalars['String'];
  text: Scalars['String'];
};

/** Type of item */
export enum GqlItem_Type {
  File = 'FILE',
  Folder = 'FOLDER'
}

/** Object representing an item in hierarchy list */
export type GqlListItem = {
   __typename?: 'ListItem';
  id: Scalars['String'];
  name: Scalars['String'];
  type: GqlItem_Type;
};

export type GqlQuery = {
   __typename?: 'Query';
  /** Get list of ListItem */
  getList: Array<GqlListItem>;
  /** Get File */
  getFile: GqlFile;
};


export type GqlQueryGetListArgs = {
  id?: Maybe<Scalars['String']>;
};


export type GqlQueryGetFileArgs = {
  id: Scalars['String'];
};

export type GqlGetListQueryVariables = {
  id?: Maybe<Scalars['String']>;
};


export type GqlGetListQuery = (
  { __typename?: 'Query' }
  & { getList: Array<(
    { __typename?: 'ListItem' }
    & Pick<GqlListItem, 'id' | 'name' | 'type'>
  )> }
);


export const GetListDocument = gql`
    query GetList($id: String) {
  getList(id: $id) {
    id
    name
    type
  }
}
    `;
export type GetListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GqlGetListQuery, GqlGetListQueryVariables>, 'query'>;

    export const GetListComponent = (props: GetListComponentProps) => (
      <ApolloReactComponents.Query<GqlGetListQuery, GqlGetListQueryVariables> query={GetListDocument} {...props} />
    );
    

/**
 * __useGetListQuery__
 *
 * To run a query within a React component, call `useGetListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GqlGetListQuery, GqlGetListQueryVariables>) {
        return ApolloReactHooks.useQuery<GqlGetListQuery, GqlGetListQueryVariables>(GetListDocument, baseOptions);
      }
export function useGetListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GqlGetListQuery, GqlGetListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GqlGetListQuery, GqlGetListQueryVariables>(GetListDocument, baseOptions);
        }
export type GetListQueryHookResult = ReturnType<typeof useGetListQuery>;
export type GetListLazyQueryHookResult = ReturnType<typeof useGetListLazyQuery>;
export type GetListQueryResult = ApolloReactCommon.QueryResult<GqlGetListQuery, GqlGetListQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

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

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GqlResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  File: ResolverTypeWrapper<GqlFile>,
  ITEM_TYPE: GqlItem_Type,
  ListItem: ResolverTypeWrapper<GqlListItem>,
  Query: ResolverTypeWrapper<{}>,
};

/** Mapping between all available schema types and the resolvers parents */
export type GqlResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  File: GqlFile,
  ITEM_TYPE: GqlItem_Type,
  ListItem: GqlListItem,
  Query: {},
};

export type GqlFileResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['File'] = GqlResolversParentTypes['File']> = {
  id?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>,
  text?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GqlListItemResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['ListItem'] = GqlResolversParentTypes['ListItem']> = {
  id?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<GqlResolversTypes['ITEM_TYPE'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GqlQueryResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Query'] = GqlResolversParentTypes['Query']> = {
  getList?: Resolver<Array<GqlResolversTypes['ListItem']>, ParentType, ContextType, RequireFields<GqlQueryGetListArgs, never>>,
  getFile?: Resolver<GqlResolversTypes['File'], ParentType, ContextType, RequireFields<GqlQueryGetFileArgs, 'id'>>,
};

export type GqlResolvers<ContextType = any> = {
  File?: GqlFileResolvers<ContextType>,
  ListItem?: GqlListItemResolvers<ContextType>,
  Query?: GqlQueryResolvers<ContextType>,
};


