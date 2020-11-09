import styled from 'styled-components';

export const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, themeBackground }) =>
    themeBackground ? theme.color.transparent : theme.color.white};
  padding: ${({ theme, variant }) => theme.button.getPadding(variant)};
`;

export const StyledIcon = styled.Image`
  margin-right: 10px;
  width: ${({ variant }) => (variant === 'normal' ? '24px' : '20px;')};
`;
