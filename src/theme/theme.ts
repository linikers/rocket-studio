import { createTheme } from '@mui/material/styles';
import { purple, pink, blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: purple[300],  // Cor mais clara
      main: purple[500],   // Cor principal
      dark: purple[700],   // Cor mais escura
    },
    secondary: {
      light: pink[300],    // Cor mais clara
      main: pink[500],     // Cor principal
      dark: pink[700],     // Cor mais escura
    },
    info: {
      light: blue[300],    // Cor mais clara
      main: blue[500],     // Cor principal
      dark: blue[700],     // Cor mais escura
    },
    background: {
      default: '#ba68c8',  // Cor de fundo
    },
    text: {
      primary: '#000000',   // Cor principal do texto
      secondary: '#ffffff'  // Cor secundária do texto
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',  // Fonte padrão
    button: {
      fontWeight: 700,   // Negrito nos botões
    },
    h3: {
      fontFamily: '"Dancing Script", cursive',  // Fonte caligrafada para títulos
    }
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
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',  // Centraliza o conteúdo
          alignItems: 'center',      // Centraliza verticalmente
          height: '100vh',           // Ocupa toda a altura da viewport
          textAlign: 'center',       // Centraliza o texto
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,   // Dispositivos móveis pequenos
      sm: 600, // Dispositivos móveis maiores e tablets
      md: 960, // Tamanhos médios (tablets grandes, pequenos desktops)
      lg: 1280, // Laptops e desktops maiores
      xl: 1920, // Monitores muito grandes
    },
  },
});

export default theme;
