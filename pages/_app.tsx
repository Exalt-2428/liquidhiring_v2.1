import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function LiquidHiring({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LiquidHiring</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default LiquidHiring;