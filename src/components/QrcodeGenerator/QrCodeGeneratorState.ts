import { ActionReducerMapBuilder, createAction } from "@reduxjs/toolkit";
import {
  getWindowByIdOrFail,
  WindowManagementState,
} from "../WindowManager/window-management-slice";
import { WindowType } from "../WindowManager/window-type";

export type QrCodeWindowState = {
  type: WindowType.QrCode;
  value: string;
};

export const setQrCodeValue = createAction<{ id: string; value: string }>(
  "qrCode/setValue"
);

export const buildQrCodeReducer = (
  builder: ActionReducerMapBuilder<WindowManagementState>
) => {
  builder.addCase(setQrCodeValue, (state, { payload }) => {
    const windowState = getWindowByIdOrFail(state.windows, payload.id)
      .state as QrCodeWindowState;
    windowState.value = payload.value;
  });
};
