import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
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

export type GqlFileViewQueryVariables = {
  fileId: Scalars['String'];
};


export type GqlFileViewQuery = (
  { __typename?: 'Query' }
  & { getFile: (
    { __typename?: 'File' }
    & Pick<GqlFile, 'id' | 'name' | 'text'>
  ) }
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
export const FileViewDocument = gql`
    query FileView($fileId: String!) {
  getFile(id: $fileId) {
    id
    name
    text
  }
}
    `;
export type FileViewComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GqlFileViewQuery, GqlFileViewQueryVariables>, 'query'> & ({ variables: GqlFileViewQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const FileViewComponent = (props: FileViewComponentProps) => (
      <ApolloReactComponents.Query<GqlFileViewQuery, GqlFileViewQueryVariables> query={FileViewDocument} {...props} />
    );
    

/**
 * __useFileViewQuery__
 *
 * To run a query within a React component, call `useFileViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useFileViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileViewQuery({
 *   variables: {
 *      fileId: // value for 'fileId'
 *   },
 * });
 */
export function useFileViewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GqlFileViewQuery, GqlFileViewQueryVariables>) {
        return ApolloReactHooks.useQuery<GqlFileViewQuery, GqlFileViewQueryVariables>(FileViewDocument, baseOptions);
      }
export function useFileViewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GqlFileViewQuery, GqlFileViewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GqlFileViewQuery, GqlFileViewQueryVariables>(FileViewDocument, baseOptions);
        }
export type FileViewQueryHookResult = ReturnType<typeof useFileViewQuery>;
export type FileViewLazyQueryHookResult = ReturnType<typeof useFileViewLazyQuery>;
export type FileViewQueryResult = ApolloReactCommon.QueryResult<GqlFileViewQuery, GqlFileViewQueryVariables>;