import React from 'react';
import {
  StyledContainer,
  StyledBackgroundImage,
  StyledLogoImage,
} from './styled';
import { propTypes, defaultProps } from './props';
import backgroundImage from '../../assets/images/background.png';
import logoImage from '../../assets/images/logo.png';

export const Logo = ({ ...rest }) => {
  return (
    <StyledContainer {...rest}>
      <StyledBackgroundImage
        resizeMode='contain'
        source={backgroundImage}
        {...rest}
      />
      <StyledLogoImage resizeMode='contain' source={logoImage} {...rest} />
    </StyledContainer>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;
