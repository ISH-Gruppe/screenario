import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
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
}

export default function DonationModal({ open, handleClose }) {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Spenden Sie jetzt...
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            ... für das Tool und für den guten Zweck! Um unser Tool
            weiterentwickeln zu können, bitten wir um eine kleine Spende. 20 %
            des Betrags leiten wir an UNICEF weiter. 🙂{" "}
          </Typography>

          <Container sx={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              id="donation-button"
              variant="contained"
              disableElevation
              startIcon={<FavoriteBorderIcon />}
              href="https://www.paypal.com/paypalme/ishtools"
              target="_blank"
            >
              Weiter zu PayPal
            </Button>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Schließen
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
