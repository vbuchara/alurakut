import { createGlobalStyle } from 'styled-components';

import { AlurakutStyles } from '../lib/AlurakutCommons';

export const GlobalStyle = createGlobalStyle`
  // Reset CSS
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px 'Rubik', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.background};
  }

  #_next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`