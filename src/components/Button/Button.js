import React from 'react';
import { StyledButton } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Button = ({ value, onPress, themeBackground, ...rest }) => {
  return (
    <StyledButton onPress={onPress} themeBackground={themeBackground} {...rest}>
      <Text colorWhite={themeBackground ? true : false} {...rest}>
        {value}
      </Text>
    </StyledButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
