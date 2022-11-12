import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='icon'
            type='image/png'
            href='https://res.cloudinary.com/dv3lue3qa/image/upload/v1668069764/heart.svg'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Lora:wght@500&family=Noto+Serif&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
