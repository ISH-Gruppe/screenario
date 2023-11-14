import {
  buildQrCodeReducer,
  QrCodeWindowState,
} from "../QrcodeGenerator/QrCodeGeneratorState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { qrCodeWindowConfig } from "../QrcodeGenerator/QrcodeGenerator";
import { useSelector } from "react-redux";
import { find } from "lodash";
import { AppState } from "../../app-state";

export enum WindowType {
  QrCode = "qr-code",
  WorkPhase = "work-phase",
  Timer = "timer",
  RandomGenerator = "random-generator",
  Notepad = "notepad",
  Soundboard = "soundboard",
  Whiteboard = "whiteboard",
  Gallery = "gallery",
  Stuhlkreis = "stuhlkreis",
}

type WindowState = QrCodeWindowState;

export type WindowConfig = {
  defaultLayout: Record<"xs" | "sm" | "md" | "lg", unknown>;
  getInitialState: (id: string) => WindowState;
  Component: React.FC<{
    id: string;
  }>;
};

// TODO: make not partial
export const windowConfigs: Partial<Record<WindowType, WindowConfig>> = {
  [WindowType.QrCode]: qrCodeWindowConfig,
};

export type ScreenarioWindow = {
  id: string;
  isOpen: boolean;
  position: unknown;
  state: WindowState;
};

export const getWindowById = (state: ScreenarioWindow[], id: string) =>
  find(state, { id });

export const getWindowByIdOrFail = (state: ScreenarioWindow[], id: string) => {
  const window = getWindowById(state, id);
  if (!window) {
    throw new Error(`Window with ID ${id} not found in state`);
  }
  return window;
};

const initialState = Object.values(windowConfigs).map(
  (config): ScreenarioWindow => {
    const id = crypto.randomUUID();
    return {
      id,
      isOpen: true,
      position: 1,
      state: config.getInitialState(id),
    };
  }
);

export const windowManagementSlice = createSlice({
  name: "window-management",
  initialState: () =>
    Object.values(windowConfigs).map((config): ScreenarioWindow => {
      const id = crypto.randomUUID();
      return {
        id,
        isOpen: true,
        position: 1,
        state: config.getInitialState(id),
      };
    }),
  reducers: {
    openWindow: (state, { payload: id }: PayloadAction<string>) => {
      const window = getWindowById(state, id);
      if (window) {
        window.isOpen = true;
      }
    },
    closeWindow: (state, { payload: id }: PayloadAction<string>) => {
      const window = getWindowById(state, id);
      if (window) {
        window.isOpen = false;
      }
    },
    createWindow: (
      state,
      { payload: windowState }: PayloadAction<WindowState>
    ) => {
      state.push({
        id: crypto.randomUUID(),
        isOpen: true,
        position: 1,
        state: windowState,
      });
    },
    toggleWindowType: (
      state,
      { payload: windowType }: PayloadAction<WindowType>
    ) => {
      state.forEach((window) => {
        if (window.state.type === windowType) {
          window.isOpen = !window.isOpen;
        }
      });
    },
  },
  extraReducers: (builder) => {
    buildQrCodeReducer(builder);
  },
});

export const windowManagementActions = windowManagementSlice.actions;

export const useWindowState = <StateType extends WindowState>(id: string) => {
  return useSelector(
    (state: AppState) =>
      getWindowByIdOrFail(state.windows, id).state as StateType
  );
};
