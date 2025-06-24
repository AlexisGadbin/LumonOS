import { DefaultTheme } from '@react-navigation/native';

const foreground = '#93EEF3';
const secondary = '#193F53';
const secondary2 = '#0C232F';

/**
 * Custom theme for React Navigation that always uses our app colors
 */
export const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: foreground,
    secondary: secondary,
    secondary2: secondary2,
    background: secondary,
  },
};

export default AppTheme;
