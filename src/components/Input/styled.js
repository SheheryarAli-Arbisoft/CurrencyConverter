import styled from 'styled-components';

export const StyledInput = styled.TextInput`
  width: 100%;
  padding: 8px;
  font-size: ${({ theme }) => theme.text.getTextSize('normal')};
  background-color: ${({ theme, editable }) =>
    editable ? theme.color.light : theme.color.disabled};
  color: ${({ theme }) => theme.color.black};
`;
