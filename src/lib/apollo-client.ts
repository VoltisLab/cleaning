// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

// Use environment variable or fallback to local development endpoint
const GRAPHQL_URI = process.env.NEXT_PUBLIC_GRAPHQL_URI || "http://localhost:4000/pebble/web/graphql";

const httpLink = new HttpLink({
  uri: GRAPHQL_URI
});

const authLink = new ApolloLink((operation, forward) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation);
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
