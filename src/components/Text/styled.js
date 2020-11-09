import styled from 'styled-components';

export const StyledContainer = styled.View`
  margin-bottom: ${({ marginBottom, variant }) =>
    marginBottom ? (variant === 'large' ? '20px' : '10px') : 0};
`;

export const StyledText = styled.Text`
  font-size: ${({ theme, variant }) => theme.text.getTextSize(variant)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme, colorWhite }) =>
    colorWhite ? theme.color.white : theme.color.black};
`;
