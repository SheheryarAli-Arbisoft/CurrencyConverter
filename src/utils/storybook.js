import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

export const storyDecorator = getStory => (
  <ThemeProvider theme={theme}>
    <SafeAreaProvider>{getStory()}</SafeAreaProvider>
  </ThemeProvider>
);
