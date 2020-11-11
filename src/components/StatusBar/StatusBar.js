import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledStatusBar } from './styled';
import { propTypes, defaultProps } from './props';

export const StatusBar = ({ themeBackground, ...rest }) => {
  const theme = useContext(ThemeContext);

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
