import React from "react";
// import QRCode from "qrcode-react";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';

export default function QrcodeGenerator() {
  const [qrcodeValue, setQrcodeValue] = React.useState("https://ish-gruppe.de");

  function handleTextChange(event) {
    setQrcodeValue(event.target.value);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="filled-basic"
          type="text"
          placeholder="Hier Text eingeben"
          label="Eingabe"
          variant="filled"
          value={qrcodeValue}
          onChange={handleTextChange}
        />
      </Grid>
      
      <Grid item xs={12}>
        {/* <QRCode value={qrcodeValue} /> */}
      </Grid>
    </Grid>
  );
}
