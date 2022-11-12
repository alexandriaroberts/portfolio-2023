import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../styles/theme';
import { DefaultSeo } from 'next-seo';
import defaultSEO from '../next-seo';
import { Navigation } from '../components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, user-scalable=no' />
        <link
          rel='icon'
          type='image/png'
          href='https://res.cloudinary.com/dv3lue3qa/image/upload/v1668069764/heart.svg'
        />
      </Head>
      <DefaultSeo {...defaultSEO} />
      <ThemeProvider theme={theme}>
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
