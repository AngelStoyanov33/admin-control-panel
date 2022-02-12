import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "linear-gradient(45deg, #bdc3c7, #2c3e50)",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
