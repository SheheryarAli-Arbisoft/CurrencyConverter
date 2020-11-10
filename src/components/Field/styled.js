import styled from 'styled-components';

export const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledButtonContainer = styled.View`
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.color.border};
`;

export const StyledInputContainer = styled.View`
  flex: 1;
`;
