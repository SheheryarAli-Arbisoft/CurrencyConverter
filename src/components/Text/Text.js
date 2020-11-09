import React from 'react';
import { StyledContainer, StyledText } from './styled';
import { propTypes, defaultProps } from './props';

export const Text = ({ children, ...rest }) => {
  return (
    <StyledContainer {...rest}>
      <StyledText {...rest}>{children}</StyledText>
    </StyledContainer>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
