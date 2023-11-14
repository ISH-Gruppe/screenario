import React, { ChangeEvent } from "react";
import QRCodeSVG from "qrcode.react";
import TextField from "@mui/material/TextField";
import BaseWindow from "../BaseWindow/BaseWindow";

import "./QrcodeGenerator.scss";
import { useDispatch } from "react-redux";
import { QrCodeWindowState, setQrCodeValue } from "./QrCodeGeneratorState";
import {
  useWindowState,
  WindowConfig,
  windowManagementActions,
  WindowType,
} from "../WindowManager/window-management-slice";

export default function QrcodeGenerator({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const state = useWindowState(id);
  const dispatch = useDispatch();

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(setQrCodeValue({ id, value: event.target.value }));
  }

  function handleReset() {}

  function handleHide() {
    dispatch(windowManagementActions.closeWindow(id));
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

export const qrCodeWindowConfig: WindowConfig = {
  Component: ({ id }) => <QrcodeGenerator id={id} title="QR-Code-Generator" />,
  getInitialState: (id: string): QrCodeWindowState => ({
    type: WindowType.QrCode,
    value: "https://ish-gruppe.de",
  }),
  defaultLayout: {
    xs: {
      w: 3,
      h: 4,
      x: 0,
      y: 24,
      minW: 3,
      moved: false,
      static: false,
    },
    sm: {
      w: 2,
      h: 11,
      x: 0,
      y: 47,
      minW: 3,
      moved: false,
      static: false,
    },
    md: {
      w: 7,
      h: 6,
      x: 6,
      y: 16,
      minW: 6,
      minH: 5,
      moved: false,
      static: false,
    },
    lg: {
      w: 8,
      h: 6,
      x: 20,
      y: 8,
      minW: 8,
      minH: 5,
      moved: false,
      static: false,
    },
  },
};