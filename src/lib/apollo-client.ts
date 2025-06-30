// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: "https://uat-api.vmodel.app/pebbles/graphql/"
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
