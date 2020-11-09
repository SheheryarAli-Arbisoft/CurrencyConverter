import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  StyledListItem,
  StyledTextContainer,
  StyledIconContainer,
} from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../../Text';

export const ListItem = ({ text, icon, onPress, ...rest }) => {
  return (
    <StyledListItem onPress={onPress} {...rest}>
      <StyledTextContainer {...rest}>
        <Text>{text}</Text>
      </StyledTextContainer>
      <StyledIconContainer {...rest}>
        <Icon name={icon} size={32} />
      </StyledIconContainer>
    </StyledListItem>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
