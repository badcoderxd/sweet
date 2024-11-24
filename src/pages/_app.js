import "@/styles/globals.css";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../theme/theme'
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
          <SnackbarProvider />
          <CssBaseline />
            <Component {...pageProps} />
      </ThemeProvider>
  </>)
}
