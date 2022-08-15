import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
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
      <Router>
        <Routes>
          <Route path="/" element={<WindowManager />} />
          <Route path="/impressum" element={<Imprint />} />
          <Route path="/datenschutz" element={<Privacy />} />
          <Route path="/lizenzen" element={<Licensing />} />
        </Routes>
      </Router>
      <span class="imprint-privacy">
        <a href="/impressum">Impressum</a> &{" "}
        <a href="/datenschutz">Datenschutz</a>
      </span>
    </ThemeProvider>
  );
}
