import { createTheme } from "@mui/material/styles";

import "./font.css";
import { APP_CONFIG } from "../app-config";

const font = APP_CONFIG.font

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#ff705f",
      light: "#ffd4cf",
      dark: "#ff5343",
    },
    secondary: {
      main: "#66ccc7",
      // light: "#ffd4cf",
      // dark: "#ff5343",
    },
    warning: {
      main: "#ab2b2b",
      light: "#e6bfbf",
      dark: "#ab2b2b",
    },
  },
  components: {
    // A demonstration how styles are applied and overriden
    MuiButton: {
      styleOverrides: {
        contained: {
          // backgroundImage: "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
          color: "white",
        },
        outlined: {
          // backgroundImage: "linear-gradient(to top, #d299c2 0%, #fef9d7 100%)",
          // color: "green",
        },
      },
    },
  },
  typography: {
    fontFamily: `${font}`,
    h1: {
      fontFamily: `"${font}"`,
    },
    h3: {
      fontFamily: `"${font}"`,
    },
    h2: {
      fontFamily: `"${font}"`,
    },
    button: {
      fontFamily: `"${font}"`,
    },
  },
});
