import { AppState, getWindowByIdOrFail, WindowType } from "../../app-state";
import { ActionReducerMapBuilder, createAction } from "@reduxjs/toolkit";

export type QrCodeWindowState = {
  type: WindowType.QrCode;
  value: string;
};

export const setQrCodeValue = createAction<{ id: string; value: string }>(
  "qrCode/setValue"
);

export const buildQrCodeReducer = (
  builder: ActionReducerMapBuilder<AppState>
) => {
  builder.addCase(setQrCodeValue, (state, { payload }) => {
    const windowState = getWindowByIdOrFail(state, payload.id)
      .state as QrCodeWindowState;
    windowState.value = payload.value;
  });
};
