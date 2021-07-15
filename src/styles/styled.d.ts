import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string,
      secondaryText: string,
      background: string,
      header: string,
      headerSecondary: string,
      button: string,
      textButton: string,
      inputBackground: string
    };
  }
}