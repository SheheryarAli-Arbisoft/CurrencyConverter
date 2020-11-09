import styled from 'styled-components';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const StyledContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledBackgroundImage = styled.Image`
  width: ${({ small }) => (small ? `${width * 0.35}` : `${width * 0.5}`)}px;
`;

export const StyledLogoImage = styled.Image`
  position: absolute;
  width: ${({ small }) => (small ? `${width * 0.2}` : `${width * 0.3}`)}px;
`;
