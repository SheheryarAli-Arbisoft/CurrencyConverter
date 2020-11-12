import styled from 'styled-components';

const getMarginBottom = (marginBottom, variant) => {
  if (marginBottom) {
    if (variant === 'large') {
      return '20px';
    }
    return '10px';
  }
  return 0;
};

export const StyledContainer = styled.View`
  margin-bottom: ${({ marginBottom, variant }) =>
    getMarginBottom(marginBottom, variant)};
`;

export const StyledText = styled.Text`
  font-size: ${({ theme, variant }) => theme.text.getTextSize(variant)};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ theme, colorWhite }) =>
    colorWhite ? theme.color.white : theme.color.black};
`;
