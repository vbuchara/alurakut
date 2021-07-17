import { AppProps } from 'next/app';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContextProvider, ThemeContext } from '../src/contexts/ThemeContext';
import { GlobalStyle } from '../src/styles/global';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeContextProvider>
        <ThemeAppWrapper Component={Component} pageProps={pageProps} {...pageProps}/>
      </ThemeContextProvider>
    </>
  )
}

function ThemeAppWrapper({ Component, pageProps }: AppProps){
  const { theme } = useContext(ThemeContext);

  return(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
    </ThemeProvider>
  );
}
