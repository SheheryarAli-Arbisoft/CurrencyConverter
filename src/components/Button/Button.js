import React from 'react';
import { StyledButton, StyledIcon } from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../Text';

export const Button = ({ value, onPress, themeBackground, icon, ...rest }) => {
  return (
    <StyledButton onPress={onPress} themeBackground={themeBackground} {...rest}>
      {icon !== null && (
        <StyledIcon source={icon} resizeMode='contain' {...rest} />
      )}
      <Text colorWhite={themeBackground ? true : false} {...rest}>
        {value}
      </Text>
    </StyledButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
