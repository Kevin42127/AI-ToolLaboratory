'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#424242',
      light: '#616161',
      dark: '#212121',
      contrastText: '#ffffff',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 4px 8px rgba(0,0,0,0.1)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 12px 24px rgba(0,0,0,0.1)',
    '0px 16px 32px rgba(0,0,0,0.1)',
    '0px 20px 40px rgba(0,0,0,0.1)',
    '0px 24px 48px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 2px 4px rgba(0,0,0,0.1)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#ffffff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#1976d2',
        },
      },
    },
  },
});

export default theme;

