import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';

export const Container = ({ children, ...rest }) => {
  const insets = useSafeAreaInsets();

  return (
    <StyledContainer insets={insets} {...rest}>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
