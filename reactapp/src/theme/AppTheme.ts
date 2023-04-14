import { createTheme } from '@mui/material/styles';
import { green, deepPurple } from '@mui/material/colors';

export const AppTheme = createTheme({
    palette: {
      primary: {
        main: deepPurple[900]
      },
      secondary: {
        main: green[500]
      }
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true
        }
      }
    }
});