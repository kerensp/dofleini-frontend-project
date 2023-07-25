import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './themes/theme';
import { Sidebar } from './components/sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Sidebar />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
