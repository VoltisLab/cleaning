// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Use environment variable or fallback to UAT server
const GRAPHQL_URI = process.env.NEXT_PUBLIC_GRAPHQL_URI || "https://uat-api.vmodel.app/pebble/graphql/";

const httpLink = new HttpLink({
  uri: GRAPHQL_URI
});

const authLink = new ApolloLink((operation, forward) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("pebbleAdminToken") : null;

  operation.setContext({
    headers: {
      authorization: token ? `JWT ${token}` : "",
    },
  });

  return forward(operation);
});

// Error handling link
const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Operation: ${operation.operationName}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}, Operation: ${operation.operationName}`);
  }
});

export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});
