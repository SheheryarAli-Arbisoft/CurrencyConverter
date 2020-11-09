import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

export const storyDecorator = getStory => (
  <ThemeProvider theme={theme}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#77b8e6',
      }}
    >
      {getStory()}
    </View>
  </ThemeProvider>
);
