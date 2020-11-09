import styled from 'styled-components';

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme, themeBackground }) =>
    themeBackground ? theme.color.transparent : theme.color.white};
  padding: ${({ theme, variant }) => theme.button.getPadding(variant)};
`;
