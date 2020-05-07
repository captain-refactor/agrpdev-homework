import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PropsWithChildren } from "react";
import React from "react";

export const GRAPHQL_CLIENT = new ApolloClient({
  uri: "https://react-test.atlasconsulting.cz/",
});

export function GraphqlProvider(props: PropsWithChildren<unknown>) {
  return (
    <ApolloProvider client={GRAPHQL_CLIENT}>{props.children}</ApolloProvider>
  );
}
