import { AppProps } from 'next/app';

import { ThemeAppWrapper } from '../src/components/ThemeAppWrapper';
import { ThemeContextProvider } from '../src/contexts/ThemeContext';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <ThemeAppWrapper Component={Component} {...pageProps} />
      </ThemeContextProvider>
    </>
  )
}
