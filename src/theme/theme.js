import { blue, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import "./font.css";

export const appTheme = createTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
  typography: {
    fontFamily: "Rubik",
    h1: {
      fontFamily: '"Rubik"',
    },
    h3: {
      fontFamily: '"Rubik"',
    },
    h2: {
      fontFamily: '"Rubik"',
    },
    button: {
      fontFamily: '"Rubik"',
    },
  },
});
