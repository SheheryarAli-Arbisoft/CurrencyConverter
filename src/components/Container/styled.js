import styled from 'styled-components';

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')}
  align-items: ${({ centered }) => (centered ? 'center' : 'flex-start')}
  background-color: ${({ theme, themeBackground }) =>
    themeBackground ? theme.color.blue : theme.color.white}
  padding-top: ${({ insets }) => insets.top}
  padding-bottom: ${({ insets }) => insets.bottom}
  padding-left: ${({ insets }) => insets.left}
  padding-right: ${({ insets }) => insets.right}
`;
