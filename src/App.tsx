import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PageHeader } from "./components/page-header/PageHeader";
import { AppRoutes } from "./routes/routes";
import { theme } from "./themes/theme";
import { Sidebar } from "./components/sidebar/Sidebar";

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
