import React from "react";
import QRCodeSVG from "qrcode.react";
import TextField from "@mui/material/TextField";
import BaseWindow from "../BaseWindow/BaseWindow";

import "./QrcodeGenerator.scss";

export default function QrcodeGenerator(props) {
  const [qrcodeValue, setQrcodeValue] = React.useState("https://ish-gruppe.de");

  function handleTextChange(event) {
    setQrcodeValue(event.target.value);
  }

  function handleReset() {}

  function handleHide() {
    props.onHide(props.id);
  }

  return (
    <BaseWindow
      id="qrcode-generator"
      title="QR-Code Generator"
      onReset={handleReset}
      onHide={handleHide}
    >
      <div className="qrcode-generator-container">
        <TextField
          id="filled-basic"
          type="text"
          placeholder="Hier Text eingeben"
          label="Eingabe"
          variant="filled"
          value={qrcodeValue}
          onChange={handleTextChange}
        />

        <div className="qrcode">
          <QRCodeSVG value={qrcodeValue} size={300} />
        </div>
      </div>
    </BaseWindow>
  );
}
