import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      10: '#1A202C',
      20: '#667EEA',
      30: '#48BB78',
      40: '#F56565',
      50: '#E2E8F0',
      60: '#6B46C1',
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  radii: {
    xl: '16px',
  },
  space: {
    4: '16px',
  },
});

export default theme;
