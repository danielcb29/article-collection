import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const SPACE = publicRuntimeConfig.CONTENTFUL_SPACE_ID;
const ENVIRONMENT = publicRuntimeConfig.CONTENTFUL_ENVIRONMENT;
const TOKEN = publicRuntimeConfig.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`;

const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: CONTENTFUL_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`,
    'Content-Language': 'en-us',
  },
});

export default withApollo(
  // You can get headers and ctx (context) from the callback params
  // e.g. ({ headers, ctx, initialState })
  ({ initialState }) =>
    new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache()
        // Rehydrates the cache using the initial data passed from the server:
        .restore(initialState || {}),
    }),
);
