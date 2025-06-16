import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      //component name
      styleOverrides: {
        root: {
          // Rule name in component API
          color: "blue",
          bgcolor: "red",
          borderRadius: 20,
          width: "10rem",
          height: "5rem",
        },
      },
    },
  },
  // typography: {
  //   blueTextClass: {
  //     color: "blue",
  //     bgcolor: "red",
  //     borderReadius: 10,
  //   },
  // },
});

function GlobalTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default GlobalTheme;
