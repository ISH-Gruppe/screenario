import React from "react";
import QRCodeSVG from "qrcode.react";
import TextField from "@mui/material/TextField";
import BaseWindow from "../BaseWindow/BaseWindow";

import "./QrcodeGenerator.scss";
import { useWindowState } from "../../app-state";
import { useDispatch } from "react-redux";
import { setQrCodeValue } from "./QrCodeGeneratorState";

export default function QrcodeGenerator({ id, title, onHide }) {
  const state = useWindowState(id);
  const dispatch = useDispatch();

  function handleTextChange(event) {
    dispatch(setQrCodeValue({ id, value: event.target.value }));
  }

  function handleReset() {}

  function handleHide() {
    onHide(id);
  }

  return (
    <BaseWindow id={id} title={title} onReset={handleReset} onHide={handleHide}>
      <div className="qrcode-generator-container">
        <TextField
          id="filled-basic"
          type="text"
          placeholder="Hier Text eingeben"
          label="Eingabe"
          variant="filled"
          value={state.value}
          onChange={handleTextChange}
        />

        <div className="qrcode">
          <QRCodeSVG value={state.value} size={300} />
        </div>
      </div>
    </BaseWindow>
  );
}
