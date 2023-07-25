import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { PageHeader } from './components/page-header/PageHeader';
import { AppRoutes } from './routes/routes';
import { Sidebar } from './components/sidebar/Sidebar';
import { theme } from './themes';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Sidebar />
        <PageHeader />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
