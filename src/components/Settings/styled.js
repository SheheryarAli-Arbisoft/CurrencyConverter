import styled from 'styled-components';

export const StyledContainer = styled.View`
  position: absolute;
  top: 0;
  padding-top: ${({ insets }) => `${insets.top + 10}`}px;
  width: 100%;
  align-items: flex-end;
`;
