import styled from 'styled-components';

export const StyledText = styled.Text`
  font-size: ${({ theme, variant }) => theme.text.getTextSize(variant)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme, colorWhite }) =>
    colorWhite ? theme.color.white : theme.color.primaryText};
`;
