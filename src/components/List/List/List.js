import React from 'react';
import { StyledList } from './styled';
import { propTypes, defaultProps } from './props';
import { ListItem } from '../ListItem';
import { ListItemSeparator } from '../ListItemSeparator';

export const List = ({ data, ...rest }) => {
  return (
    <StyledList
      data={data}
      renderItem={({ item }) => (
        <ListItem text={item.text} onPress={item.onPress} />
      )}
      keyExtractor={item => `${item.id}`}
      ItemSeparatorComponent={ListItemSeparator}
      {...rest}
    />
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
