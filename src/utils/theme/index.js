import * as text from './text';
import * as color from './color';
import * as button from './button';

export const theme = {
  text,
  color,
  button,
};

export const blueTheme = {
  ...theme,
  color: { ...theme.color, primary: theme.color.blue },
};

export const orangeTheme = {
  ...theme,
  color: { ...theme.color, primary: theme.color.orange },
};

export const greenTheme = {
  ...theme,
  color: { ...theme.color, primary: theme.color.green },
};

export const purpleTheme = {
  ...theme,
  color: { ...theme.color, primary: theme.color.purple },
};
