import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212121",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#2c3e50" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to left, #2c3e50,#000000)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to left,#2c3e50,#000000)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
          justifyContent: "center",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#2c3e50" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to right, #2c3e50, #2c3e50, #2c3e50)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right,#2c3e50, #2c3e50, #2c3e50);" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
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
