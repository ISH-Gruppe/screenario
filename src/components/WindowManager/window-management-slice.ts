import {
  buildQrCodeReducer,
  QrCodeWindowState,
} from "../QrcodeGenerator/QrCodeGeneratorState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { qrCodeWindowConfig } from "../QrcodeGenerator/QrcodeGenerator";
import { useSelector } from "react-redux";
import { find } from "lodash";
import { AppState } from "../../app-state";
import {
  SoundboardState,
  soundboardWindowConfig,
} from "../Soundboard/Soundboard";
import { Layout } from "react-grid-layout";

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

type WindowState = QrCodeWindowState | SoundboardState;

type WindowBreakpoint = "xs" | "sm" | "md" | "lg";
type LayoutDefinitions = Record<WindowBreakpoint, Omit<Layout, "i">>;

export type WindowConfig = {
  defaultLayout: LayoutDefinitions;
  getInitialState: (id: string) => WindowState;
  Component: React.FC<{
    id: string;
  }>;
};
// TODO: make not partial

export const windowConfigs: Partial<Record<WindowType, WindowConfig>> = {
  [WindowType.QrCode]: qrCodeWindowConfig,
  [WindowType.Soundboard]: soundboardWindowConfig,
};

export type ScreenarioWindow = {
  id: string;
  isOpen: boolean;
  layouts: LayoutDefinitions;
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

export const windowManagementSlice = createSlice({
  name: "window-management",
  initialState: () =>
    Object.values(windowConfigs).map((config): ScreenarioWindow => {
      const id = crypto.randomUUID();
      return {
        id,
        isOpen: true,
        layouts: config.defaultLayout,
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
        // TODO: remove `!`
        layouts: windowConfigs[windowState.type]!.defaultLayout,
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
