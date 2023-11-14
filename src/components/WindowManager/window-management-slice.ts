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
import { Layout, Layouts } from "react-grid-layout";
import {
  GalleryConfig,
  positioningWindowConfig,
} from "../Positioning/Positioning";
import {
  StuhlkreisState,
  stuhlkreisWindowConfig,
} from "../DigitalerStuhlkreisWrapper/DigitalerStuhlkreisWrapper";
import { timerWindowConfig } from "../Timer/Timer";

export enum WindowType {
  QrCode = "qr-code",
  WorkPhase = "work-phase",
  Timer = "timer",
  RandomGenerator = "random-generator",
  Notepad = "notepad",
  Soundboard = "soundboard",
  Whiteboard = "whiteboard",
  Positioning = "gallery",
  Stuhlkreis = "stuhlkreis",
}

// TODO: move to corresponding files once ready
type WhiteboardState = {
  type: WindowType.Whiteboard;
};
type WorkPhaseState = {
  type: WindowType.WorkPhase;
};
type TimerState = {
  type: WindowType.Timer;
};
type RandomGeneratorState = {
  type: WindowType.RandomGenerator;
};
type NotepadState = {
  type: WindowType.Notepad;
};

type WindowState =
  | QrCodeWindowState
  | SoundboardState
  | GalleryConfig
  | StuhlkreisState
  | WhiteboardState
  | WorkPhaseState
  | TimerState
  | RandomGeneratorState
  | NotepadState;

type WindowBreakpoint = "xs" | "sm" | "md" | "lg";
type LayoutDefinitions = Record<WindowBreakpoint, Omit<Layout, "i">>;

export type WindowConfig = {
  defaultLayout: LayoutDefinitions;
  getInitialState: (id: string) => WindowState;
  Component: React.FC<{
    id: string;
  }>;
};

export const windowConfigs: Record<WindowType, WindowConfig> = {
  [WindowType.QrCode]: qrCodeWindowConfig,
  [WindowType.Soundboard]: soundboardWindowConfig,
  [WindowType.Positioning]: positioningWindowConfig,
  [WindowType.Stuhlkreis]: stuhlkreisWindowConfig,
  [WindowType.Timer]: timerWindowConfig,
} as any; // TODO: remove any

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

export type WindowManagementState = {
  windows: ScreenarioWindow[];
};

export const windowManagementSlice = createSlice({
  name: "window-management",
  initialState: (): WindowManagementState => ({
    windows: Object.values(windowConfigs).map((config): ScreenarioWindow => {
      const id = crypto.randomUUID();
      return {
        id,
        isOpen: true,
        layouts: config.defaultLayout,
        state: config.getInitialState(id),
      };
    }),
  }),
  reducers: {
    openWindow: (state, { payload: id }: PayloadAction<string>) => {
      const window = getWindowById(state.windows, id);
      if (window) {
        window.isOpen = true;
      }
    },
    closeWindow: (state, { payload: id }: PayloadAction<string>) => {
      const window = getWindowById(state.windows, id);
      if (window) {
        window.isOpen = false;
      }
    },
    createWindow: (
      state,
      { payload: windowState }: PayloadAction<WindowState>
    ) => {
      const newWindow = {
        id: crypto.randomUUID(),
        isOpen: true,
        // TODO: remove `!`
        layouts: windowConfigs[windowState.type]!.defaultLayout,
        state: windowState,
      };
      state.windows.push(newWindow);
    },
    toggleWindowType: (
      state,
      { payload: windowType }: PayloadAction<WindowType>
    ) => {
      state.windows.forEach((window) => {
        if (window.state.type === windowType) {
          window.isOpen = !window.isOpen;
        }
      });
    },
    setLayouts: (state, { payload: layouts }: PayloadAction<Layouts>) => {
      (Object.entries(layouts) as [WindowBreakpoint, Layout[]][]).forEach(
        ([breakpoint, layouts]) => {
          layouts.forEach((layout) => {
            const window = getWindowById(state.windows, layout.i);
            if (window?.isOpen) {
              window.layouts[breakpoint] = layout;
            }
          });
        }
      );
    },
    // TODO: possibly implement reset function?
  },
  extraReducers: (builder) => {
    buildQrCodeReducer(builder);
  },
});

export const windowManagementActions = windowManagementSlice.actions;

export const useWindowState = <StateType extends WindowState>(id: string) => {
  return useSelector(
    (state: AppState) =>
      getWindowByIdOrFail(state.windowManagement.windows, id).state as StateType
  );
};
