import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ConfirmProvider } from "material-ui-confirm";
import { appTheme } from "./theme/theme";
import "./theme/font.css";

// Components
import WindowManager from "./components/WindowManager/WindowManager";
import Imprint from "./components/Modals/Imprint/Imprint";
import Privacy from "./components/Modals/Privacy/Privacy";
import Licensing from "./components/Modals/Licensing/Licensing";

// CSS
import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ConfirmProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WindowManager />} />
            <Route path="/impressum" element={<Imprint />} />
            <Route path="/datenschutz" element={<Privacy />} />
            <Route path="/lizenzen" element={<Licensing />} />
          </Routes>
        </Router>

        <a
          className="ish-logo"
          href="https://ish-gruppe.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/ish-gruppe-logo.png" />
        </a>
        <span class="imprint-privacy">
          <a href="/impressum">Impressum</a> &{" "}
          <a href="/datenschutz">Datenschutz</a>
        </span>
      </ConfirmProvider>
    </ThemeProvider>
  );
}
