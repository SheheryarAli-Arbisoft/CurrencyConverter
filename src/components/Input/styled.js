import styled from 'styled-components';

export const StyledInput = styled.TextInput`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 8px;
  font-size: ${({ theme }) => theme.text.getTextSize('normal')};
  background-color: ${({ theme, editable }) =>
    editable ? theme.color.light : theme.color.disabled};
`;
