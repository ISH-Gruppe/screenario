import { find } from "lodash";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {
  buildQrCodeReducer,
  QrCodeWindowState,
} from "./components/QrcodeGenerator/QrCodeGeneratorState";
import { persistReducer, PersistState, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

export enum WindowType {
  QrCode = "qr-code",
}

type WindowState = QrCodeWindowState;

type ScreenarioWindow = {
  id: string;
  isOpen: boolean;
  position: unknown;
  state: WindowState;
};

export type AppState = {
  _persist: PersistState;
  windows: ScreenarioWindow[];
};
export const openWindow = createAction<string>("windowmanagement/openWindow");
export const closeWindow = createAction<string>("windowmanagement/closeWindow");

export const createWindow = createAction<WindowState>(
  "windowmanagement/createWindow"
);
export const getWindowById = (state: AppState, id: string) =>
  find(state.windows, { id });

export const getWindowByIdOrFail = (state: AppState, id: string) => {
  const window = getWindowById(state, id);
  if (!window) {
    throw new Error(`Window with ID ${id} not found in state`);
  }
  return window;
};

export const store = configureStore<AppState>({
  devTools: true,
  reducer: persistReducer(
    {
      key: "screenario-app-state",
      storage: storage,
    },
    createReducer(
      {
        windows: [
          {
            id: crypto.randomUUID(),
            isOpen: true,
            position: 0,
            state: {
              type: WindowType.QrCode,
              value: "https://ish-gruppe.de",
            } satisfies QrCodeWindowState,
          },
        ],
      } as AppState,
      (builder) => {
        builder
          .addCase(openWindow, (state, { payload: id }) => {
            const window = getWindowById(state, id);
            if (window) {
              window.isOpen = true;
            }
          })
          .addCase(closeWindow, (state, { payload: id }) => {
            const window = getWindowById(state, id);
            if (window) {
              window.isOpen = false;
            }
          })
          .addCase(createWindow, (state, { payload: windowState }) => {
            state.windows.push({
              id: crypto.randomUUID(),
              isOpen: true,
              position: 1,
              state: windowState,
            });
          });
        buildQrCodeReducer(builder);
      }
    )
  ),
});

export const persistor = persistStore(store);

export const useWindowState = <StateType extends WindowState>(id: string) => {
  return useSelector(
    (state: AppState) => getWindowByIdOrFail(state, id).state as StateType
  );
};
