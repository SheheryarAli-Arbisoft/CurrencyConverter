import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyledContainer } from './styled';
import { propTypes, defaultProps } from './props';
import { useThemeContext } from '../../hooks';

export const Settings = ({ ...rest }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { theme } = useThemeContext();

  return (
    <StyledContainer insets={insets} {...rest}>
      <TouchableOpacity onPress={() => navigation.push('Options')}>
        <Icon name='cog' size={36} color={theme.color.white} />
      </TouchableOpacity>
    </StyledContainer>
  );
};

Settings.propTypes = propTypes;
Settings.defaultProps = defaultProps;
