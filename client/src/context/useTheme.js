import React, { createContext, useContext } from 'react';
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import { oneOfType, array, object } from 'prop-types';

import { useLocalStorage } from './useLocalStorage';

const propTypes = {
  children: oneOfType([array, object]),
};

const LightTheme = {
  color: '#000',
  backgroundColor: '#fff',
};

const DarkTheme = {
  color: '#fff',
  backgroundColor: '#222',
};

const GlobalStyles = createGlobalStyle`
  body {
    backgroundColor: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }
`;

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const prefersOSDarkTheme =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  const [theme, setTheme] = useLocalStorage(
    'theme',
    prefersOSDarkTheme ? 'light' : 'dark',
  );

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentsThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('You must useTheme within a <ThemeProvider />');
  return context;
};

ThemeProvider.propTypes = propTypes;
export { ThemeProvider, GlobalStyles, LightTheme, DarkTheme, useTheme };
