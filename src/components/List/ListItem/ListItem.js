import React from 'react';
import {
  StyledListItem,
  StyledTextContainer,
  StyledIconContainer,
} from './styled';
import { propTypes, defaultProps } from './props';
import { Text } from '../../Text';

export const ListItem = ({ text, onPress, ...rest }) => {
  return (
    <StyledListItem onPress={onPress} {...rest}>
      <StyledTextContainer {...rest}>
        <Text>{text}</Text>
      </StyledTextContainer>
      <StyledIconContainer {...rest}></StyledIconContainer>
    </StyledListItem>
  );
};

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
