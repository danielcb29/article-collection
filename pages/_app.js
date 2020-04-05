import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';

import withApolloClient from '../apollo/client';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <>
        <Head>
          <title>Article Collection</title>
          <link
            href="https://fonts.googleapis.com/css?family=Artifika"
            rel="stylesheet"
          />
        </Head>
        <style jsx global>
          {`
            html {
              font-family: 'Artifika';
              font-size: 62.5%;
            }
          `}
        </style>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    );
  }
}

export default withApolloClient(MyApp);
