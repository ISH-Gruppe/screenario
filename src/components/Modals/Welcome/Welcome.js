import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./Welcome.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function Welcome({ onSave, onLoad }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        className="welcome-modal"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Willkommen bei Screenario!
        </BootstrapDialogTitle>
        <DialogContent className="welcome-modal-content" dividers>
          <img
            id="welcome-modal-logo"
            src="/assets/logo/ISH_Bochum_Logo_Manufaktur_orange_sm.png"
          />
          <h2> Der Screen für jedes Szenario</h2>

          <p> Screenario ist ein ... </p>

          <ul>
            <li> browserbasiertes </li>
            <li> datenschutzkonformes </li>
            <li>
              <a href="https://github.com/ISH-Gruppe/screenario/blob/main/LICENSE.md">
                open-source
              </a>
            </li>
          </ul>
          <p>
            ... Tool der ISH Manufaktur. Die ISH Manufaktur ist Teil der ISH
            Gruppe. Nähere Infos zum ISH finden Sie unter{" "}
            <a
              href="https://ish-gruppe.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              ish-gruppe.de
            </a>
            .
          </p>
          <span class="modal-imprint-privacy">
            <a href="/impressum">Impressum</a> &{" "}
            <a href="/datenschutz">Datenschutz</a>,{" "}
            <a href="/lizenzen"> Lizenzen </a>
          </span>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleClose();
            }}
          >
            Schließen
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
