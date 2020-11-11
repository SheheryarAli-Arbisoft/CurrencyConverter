import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  blueTheme,
  orangeTheme,
  greenTheme,
  purpleTheme,
} from '../utils/theme';

export const MultipleThemesContext = createContext();

export const MultipleThemesContextProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState('blue');
  const [theme, setTheme] = useState(blueTheme);

  return (
    <MultipleThemesContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MultipleThemesContext.Provider>
  );
};
