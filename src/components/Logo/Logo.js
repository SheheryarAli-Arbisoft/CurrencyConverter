import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions, Keyboard } from 'react-native';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';
import backgroundImage from '../../assets/images/background.png';
import logoImage from '../../assets/images/logo.png';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Background image dimensions
const BACKGROUND_WIDTH = width * 0.5;
const BACKGROUND_WIDTH_SMALL = width * 0.35;
const BACKGROUND_HEIGHT = height * 0.25;
const BACKGROUND_HEIGHT_SMALL = height * 0.2;

// Logo image dimensions
const LOGO_WIDTH = width * 0.3;
const LOGO_WIDTH_SMALL = width * 0.2;

export const Logo = ({ ...rest }) => {
  let small = false;
  const toggleSmall = () => {
    small = !small;
  };

  const backgroundWidth = useRef(new Animated.Value(BACKGROUND_WIDTH)).current;
  const backgroundHeight = useRef(new Animated.Value(BACKGROUND_HEIGHT))
    .current;
  const logoWidth = useRef(new Animated.Value(LOGO_WIDTH)).current;

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', e => {
      Animated.timing(backgroundWidth, {
        toValue: small ? BACKGROUND_WIDTH : BACKGROUND_WIDTH_SMALL,
        duration: e.duration,
        useNativeDriver: false,
      }).start();

      Animated.timing(logoWidth, {
        toValue: small ? LOGO_WIDTH : LOGO_WIDTH_SMALL,
        duration: e.duration,
        useNativeDriver: false,
      }).start();

      toggleSmall();
    });

    return () => {
      keyboardWillShowSub.remove();
    };
  }, []);

  return (
    <StyledContainer {...rest}>
      <Animated.Image
        resizeMode='contain'
        source={backgroundImage}
        style={{ width: backgroundWidth, height: backgroundHeight }}
        {...rest}
      />
      <Animated.Image
        resizeMode='contain'
        source={logoImage}
        style={{ position: 'absolute', width: logoWidth }}
        {...rest}
      />
    </StyledContainer>
  );
};

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;
