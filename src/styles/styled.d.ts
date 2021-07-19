import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string,
      secondaryText: string,
      background: string,
      secondaryBackground: string,
      header: string,
      headerSecondary: string,
      button: string,
      iconsText: string,
      inputBackground: string,
      strongText: string,
      bottomDivColor: string
    };
  }
}