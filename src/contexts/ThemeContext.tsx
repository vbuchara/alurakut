import { createContext, ReactNode, useState } from 'react';
import { DefaultTheme } from 'styled-components';

import { lightTheme } from '../styles/themes/light';
import { darkTheme } from '../styles/themes/dark';

type ThemeContextType = {
  toggleTheme: () => void,
  theme: DefaultTheme
}

type ThemeContextProviderProps = {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps){
  const [ theme, setTheme ] = useState(lightTheme);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}