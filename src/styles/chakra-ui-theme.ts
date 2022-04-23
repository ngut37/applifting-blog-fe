import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import { screens } from './screens';

const breakpoints = createBreakpoints({
  sm: `${screens.md.toString()}px`,
  md: `${screens.md.toString()}px`,
  lg: `${screens.lg.toString()}px`,
  xl: `${screens.xl.toString()}px`,
  '2xl': `${screens.xxl.toString()}px`,
});

const fonts = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
};

export const theme = extendTheme({
  breakpoints,
  fonts,
});
