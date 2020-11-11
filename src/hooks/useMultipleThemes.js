import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

export const useMultipleThemes = () => {
  const MultipleThemesContainer = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  return { MultipleThemesContainer };
};
