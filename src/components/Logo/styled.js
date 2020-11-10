import styled from 'styled-components';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const StyledContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledBackgroundImage = styled.Image`
  width: ${({ small }) => (small ? `${width * 0.35}` : `${width * 0.5}`)}px;
  height: ${({ small }) => (small ? `${height * 0.2}` : `${height * 0.25}`)}px;
`;

export const StyledLogoImage = styled.Image`
  position: absolute;
  width: ${({ small }) => (small ? `${width * 0.2}` : `${width * 0.3}`)}px;
`;
