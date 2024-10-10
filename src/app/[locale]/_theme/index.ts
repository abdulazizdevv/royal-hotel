import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { Container } from './Container';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  components: {
    Container,
  },
  colors: {
    paper: {
      light: {
        100: '#F5F6FA',
        200: '#F2F4F7',
        300: '#F2F3F7',
        400: '#EEEEEE',
        500: '#F5F6FA',
        800: '#1A1A1A',
      },
      dark: {
        100: '#7676803D',
        200: '#636366',
        300: '#454545',
        400: '#333333',
        500: '#292929',
        800: '#222222',
      },
    },
    primary: {
      100: 'gray',
      200: '#F2E7FF',
      300: '#7E5FA6',
      400: '#7E5FA6',
      500: '#7E5FA6',
      600: '#745899',
      700: '#725796',
      800: '#6A508B',
      900: '#8667AE',
    },
    dark: {
      500: '#000000', // You can add more shades if needed
      600: '#333333',
      700: '#1a1a1a',
      800: '#0F1521',
    },
    secondary: {
      50: '#FFD300',
      100: '#FFD300',
      200: '#FFD300',
      300: '#FFD300',
      400: '#FFD300',
      500: '#FFD300',
      600: '#FFD300',
      700: '#FFD300',
      800: '#FFD300',
      900: '#000',
    },
    yellow: {
      400: '#FFD301',
      500: '#FFD301',
    },
    gray: {
      300: '#F4F5F7',
      400: '#666666',
      500: '#667085',
      600: '#475467',
      700: '#344054',
    },
    error: '#EC5962',
    success: '#3FD75B',
  },
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: mode('#A5A5A5', 'whiteAlpha.400')(props),
      },
      '*, *::before, &::after': {
        borderColor: mode('gray.200', 'whiteAlpha.300')(props),
        wordWrap: 'break-word',
      },
      ':root': {
        '--primary-100': 'gray',
        '--primary-200': '#F2E7FF',
        '--primary-300': '#7E5FA6',
        '--primary-400': '#7E5FA6',
        '--primary-500': '#7E5FA6',
        '--primary-600': '#745899',
        '--primary-700': '#725796',
        '--primary-800': '#6A508B',
        '--primary-900': '#8667AE',
      },
    }),
  },
  config,
});
