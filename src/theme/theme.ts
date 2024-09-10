import { createTheme } from '@mui/material/styles';
import { purple, pink, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: pink[500],
    },
    info: {
      main: blue[500],
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, 
          padding: '8px 16px',
        },
        textPrimary: {
          color: '#ffffff',
        },
      },
    },
  },
});

export default theme;
