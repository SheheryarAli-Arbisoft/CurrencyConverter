import { AppRegistry } from 'react-native';
import { LOAD_STORYBOOK } from '@env';
import App from './src/App';
import Storybook from './storybook';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () =>
  LOAD_STORYBOOK === 'true' ? Storybook : App
);
