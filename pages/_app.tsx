import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';

import { theme } from '../styles/theme';

import { DefaultSeo } from 'next-seo';
import defaultSEO from '../next-seo';

import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, user-scalable=no' />
      </Head>
      <DefaultSeo {...defaultSEO} />
      <ThemeProvider theme={theme}>
        <Navigation />
        <Component {...pageProps} />
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}
