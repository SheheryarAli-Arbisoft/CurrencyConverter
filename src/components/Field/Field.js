import React from 'react';
import {
  StyledContainer,
  StyledButtonContainer,
  StyledInputContainer,
} from './styled';
import { propTypes, defaultProps } from './props';
import { Button } from '../Button';
import { Input } from '../Input';

export const Field = ({
  currency,
  amount,
  disabled,
  onPress,
  onChangeText,
  ...rest
}) => {
  return (
    <StyledContainer {...rest}>
      <StyledButtonContainer {...rest}>
        <Button
          value={currency}
          onPress={onPress}
          borderRight
          style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
        />
      </StyledButtonContainer>
      <StyledInputContainer {...rest}>
        <Input
          value={amount}
          onChangeText={onChangeText}
          disabled={disabled}
          style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
        />
      </StyledInputContainer>
    </StyledContainer>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;
