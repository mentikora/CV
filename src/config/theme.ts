import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#226689',
    },
    secondary: {
      main: '#ee7752',
    },
    text: {
      primary: '#226689',
      secondary: '#000000de',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    body1: {
      lineHeight: 1.375,
    },
    body2: {},
  },
  overrides: {
    MuiChip: {
      root: {},
      label: {
        textTransform: 'uppercase',
      }
    },
  }
});
