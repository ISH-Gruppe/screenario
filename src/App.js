import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ConfirmProvider } from "material-ui-confirm";
import { appTheme } from "./theme/theme";
import "./theme/font.css";

// Mui Components
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Components
import WindowManager from "./components/WindowManager/WindowManager";
import Imprint from "./components/Modals/Imprint/Imprint";
import Privacy from "./components/Modals/Privacy/Privacy";
import Licensing from "./components/Modals/Licensing/Licensing";
import DonationModal from "./components/Modals/Donation/DonationModal";

// CSS
import "./App.css";
import { APP_CONFIG } from "./app-config";
import { Provider } from "react-redux";
import { persistor, store } from "./app-state";
import { PersistGate } from "redux-persist/integration/react";
import { ImportExportButtons } from "./components/ImportExportButtons";
import { BackgroundImage } from "./components/BackgroundImage/BackgroundImage";

export default function App() {
  const [donationModalopen, setDonationModalOpen] = React.useState(false);

  useEffect(() => {
    document.body.classList.add(`text-${APP_CONFIG.font.toLowerCase()}`);
  });

  return (
    <ThemeProvider theme={appTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConfirmProvider>
            <BackgroundImage />

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

            <div className="donation-button">
              <Button
                variant="outlined"
                color="primary"
                startIcon={<FavoriteBorderIcon />}
                onClick={() => setDonationModalOpen(true)}
              >
                Spenden
              </Button>

              <ImportExportButtons />
            </div>

            <span className="imprint-privacy">
              <a href="/impressum">Impressum</a> &{" "}
              <a href="/datenschutz">Datenschutz</a>
            </span>

            <DonationModal
              open={donationModalopen}
              handleClose={() => setDonationModalOpen(false)}
            />
          </ConfirmProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
