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
import { whiteboardWindowConfig } from "../Whiteboard/Whiteboard";
import { randomGeneratorWindowConfig } from "../RandomGenerator/RandomGenerator";
import { workPhaseWindowConfig } from "../WorkPhase/WorkPhase";
import { notepadWindowConfig } from "../Notepad/Notepad";
import { buildTimerReducer, TimerState } from "../Timer/TimerState";
import {
  buildRandomGeneratorReducer,
  RandomGeneratorState,
} from "../RandomGenerator/RandomGeneratorState";
import { buildNodepadReducer, NotepadState } from "../Notepad/NodepadState";
import { WorkPhaseState } from "../WorkPhase/WorkPhaseState";

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
  [WindowType.Whiteboard]: whiteboardWindowConfig,
  [WindowType.RandomGenerator]: randomGeneratorWindowConfig,
  [WindowType.WorkPhase]: workPhaseWindowConfig,
  [WindowType.Notepad]: notepadWindowConfig,
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

export type WindowManagementState = {
  windows: ScreenarioWindow[];
};

const createWindowByType = (windowType: WindowType): ScreenarioWindow => {
  const id = crypto.randomUUID();
  const windowConfig = windowConfigs[windowType];
  const windowState = windowConfig.getInitialState(id);
  return {
    id,
    isOpen: true,
    layouts: windowConfig.defaultLayout,
    state: windowState,
  };
};

export const windowManagementSlice = createSlice({
  name: "window-management",
  initialState: (): WindowManagementState => ({
    windows: Object.values(windowConfigs).map((config): ScreenarioWindow => {
      const id = crypto.randomUUID();
      return {
        id,
        isOpen: false,
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
    hideWindow: (state, { payload: id }: PayloadAction<string>) => {
      const window = getWindowById(state.windows, id);
      if (window) {
        window.isOpen = false;
      }
    },
    closeWindow: (state, { payload: id }: PayloadAction<string>) => {
      state.windows = state.windows.filter((window) => window.id !== id);
    },
    createWindow: (
      state,
      { payload: windowType }: PayloadAction<WindowType>
    ) => {
      state.windows.push(createWindowByType(windowType));
    },
    toggleWindowType: (
      state,
      { payload: windowType }: PayloadAction<WindowType>
    ) => {
      const [relevantWindows, areAllOpen] = state.windows.reduce(
        (acc, curr) => {
          if (curr.state.type === windowType) {
            return [[...acc[0], curr], curr.isOpen && acc[1]];
          }

          return acc;
        },
        [[], true] as [ScreenarioWindow[], boolean]
      );

      if (relevantWindows.length === 0) {
        state.windows.push(createWindowByType(windowType));
      } else {
        relevantWindows.forEach((window) => {
          window.isOpen = !areAllOpen;
        });
      }
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
    buildTimerReducer(builder);
    buildRandomGeneratorReducer(builder);
    buildNodepadReducer(builder);
  },
});

export const windowManagementActions = windowManagementSlice.actions;

export const useWindowState = <StateType extends WindowState>(id: string) => {
  return useSelector(
    (state: AppState) =>
      getWindowByIdOrFail(state.windowManagement.windows, id).state as StateType
  );
};
