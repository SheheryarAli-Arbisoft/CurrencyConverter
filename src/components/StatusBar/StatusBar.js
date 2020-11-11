import React from 'react';
import { StyledStatusBar } from './styled';
import { propTypes, defaultProps } from './props';
import { useThemeContext } from '../../hooks';

export const StatusBar = ({ themeBackground, ...rest }) => {
  const { theme } = useThemeContext();

  return (
    <StyledStatusBar
      barStyle={`${themeBackground ? 'light' : 'dark'}-content`}
      backgroundColor={themeBackground ? theme.color.blue : theme.color.white}
      {...rest}
    />
  );
};

StatusBar.propTypes = propTypes;
StatusBar.defaultProps = defaultProps;
