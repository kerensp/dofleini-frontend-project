import { ThemeProvider } from '@emotion/react';
import { Button, CssBaseline } from '@mui/material';
import { theme } from './themes/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant='contained' color='secondary'>App</Button>
    </ThemeProvider>
  );
};
