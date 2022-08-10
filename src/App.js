import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { appTheme } from "./theme/theme";
import "./theme/font.css";

// Components
import WindowManager from "./components/WindowManager/WindowManager";

// CSS
import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <WindowManager />
    </ThemeProvider>
  );
}
