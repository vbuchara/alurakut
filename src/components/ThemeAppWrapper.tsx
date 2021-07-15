import { AppProps } from 'next/app';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import { GlobalStyle } from '../styles/global';

export function ThemeAppWrapper({ Component, pageProps }: AppProps){
  const { theme } = useContext(ThemeContext);

  return(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
    </ThemeProvider>
  );
}