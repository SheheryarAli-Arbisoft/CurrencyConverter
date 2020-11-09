import styled from 'styled-components';

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')}
  align-items: ${({ centered }) => (centered ? 'center' : 'flex-start')}
  background-color: ${({ theme, themeBackground }) =>
    themeBackground ? theme.color.blue : theme.color.white}
  padding-top: ${({ insets }) => `${Math.max(insets.top, 16)}px`}
  padding-bottom: ${({ insets }) => `${Math.max(insets.bottom, 16)}px`}
  padding-left: ${({ insets }) => `${Math.max(insets.left, 16)}px`}
  padding-right: ${({ insets }) => `${Math.max(insets.right, 16)}px`}
`;
