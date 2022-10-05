import '/style.css';
import type { AppProps } from 'next/app';
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <link
        rel="stylesheet"
        href="https://egkoppel.github.io/product-sans/google-fonts.css"
      ></link>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
