import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

  const updateTheme = () => {
    switch (themeColor) {
      case 'blue':
        return setTheme(blueTheme);
      case 'orange':
        return setTheme(orangeTheme);
      case 'green':
        return setTheme(greenTheme);
      case 'purple':
        return setTheme(purpleTheme);
      default:
        return null;
    }
  };

  const updateThemeColor = value => {
    AsyncStorage.setItem('theme-color', value).then(() => setThemeColor(value));
  };

  useEffect(() => {
    AsyncStorage.getItem('theme-color').then(value => {
      if (value) {
        setThemeColor(value);
      }
    });
  }, []);

  useEffect(() => {
    updateTheme();
  }, [themeColor]);

  const contextValues = {
    updateThemeColor,
  };

  return (
    <MultipleThemesContext.Provider value={contextValues}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MultipleThemesContext.Provider>
  );
};
