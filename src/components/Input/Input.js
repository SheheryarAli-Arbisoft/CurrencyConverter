import React from 'react';
import { StyledInput } from './styled';
import { propTypes, defaultProps } from './props';

export const Input = ({ value, onChangeText, disabled, ...rest }) => {
  return (
    <StyledInput
      value={value}
      onChangeText={onChangeText}
      editable={!disabled}
      {...rest}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
