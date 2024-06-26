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
} from "../WindowManager/window-management-slice";
import { WindowType } from "../WindowManager/window-type";

export default function QrcodeGenerator({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const state = useWindowState<QrCodeWindowState>(id);
  const dispatch = useDispatch();

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(setQrCodeValue({ id, value: event.target.value }));
  }

  return (
    <BaseWindow id={id} title={title}>
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
  getDefaultLayout: () => ({
    xs: {
      w: 3,
      h: 4,
      x: 0,
      y: 24,
      minW: 3,
    },
    sm: {
      w: 2,
      h: 11,
      x: 0,
      y: 47,
      minW: 3,
    },
    md: {
      w: 7,
      h: 6,
      x: 6,
      y: 16,
      minW: 6,
      minH: 5,
    },
    lg: {
      w: 8,
      h: 6,
      x: 20,
      y: 8,
      minW: 8,
      minH: 5,
    },
  }),
};
