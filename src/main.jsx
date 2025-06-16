import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008000",
    },
    secondary: {
      main: "#FFA500",
    },
    customColors: {
      royalBlue: "#4169E1",
    },
  },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true },
    },
    styleOverrides: {
      outlined: ({ theme, ownerState }) => ({
        color: ownerState.size === "small" ? "red" : "#000",
        borderColor: ownerState.myCustomProp
          ? "red"
          : theme.palette.customColors.royalBlue,
      }),
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
