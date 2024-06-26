import {
  buildQrCodeReducer,
  QrCodeWindowState,
} from "../QrcodeGenerator/QrCodeGeneratorState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { qrCodeWindowConfig } from "../QrcodeGenerator/QrcodeGenerator";
import { useSelector } from "react-redux";
import { find } from "lodash";
import { AppState } from "../../app-state";
import { soundboardWindowConfig } from "../Soundboard/Soundboard";
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
import {
  GuessingGameWindowConfig,
  GuessingGameState,
} from "../GuessingGame/GuessingGame";
import { buildTimerReducer, TimerState } from "../Timer/TimerState";
import {
  buildRandomGeneratorReducer,
  RandomGeneratorState,
} from "../RandomGenerator/RandomGeneratorState";
import { buildNodepadReducer, NotepadState } from "../Notepad/NotepadState";
import {
  buildWorkPhaseReducer,
  WorkPhaseState,
} from "../WorkPhase/WorkPhaseState";
import {
  buildSoundboardReducer,
  SoundboardState,
} from "../Soundboard/SoundboardState";
import { WindowType } from "./window-type";

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
  | NotepadState
  | GuessingGameState;

type WindowBreakpoint = "xs" | "sm" | "md" | "lg";
type LayoutDefinitions = Record<WindowBreakpoint, Omit<Layout, "i">>;

export type WindowConfig = {
  getDefaultLayout: () => LayoutDefinitions;
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
  [WindowType.GuessingGame]: GuessingGameWindowConfig,
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
    layouts: windowConfig.getDefaultLayout(),
    state: windowState,
  };
};

const moveOpenWindowsBelow = (
  prioritizedWindows: ScreenarioWindow[],
  allWindows: ScreenarioWindow[]
) => {
  // We can just move windows as low as we want,
  // they'll be moved back up by the layout engine.
  // Therefore, we only care about keeping old relative distances.

  // Compute how much each window has to be moved down per layout
  const deltas: Partial<Record<keyof LayoutDefinitions, number>> = {};
  for (const window of prioritizedWindows) {
    for (let layoutKey in window.layouts) {
      const asKey = layoutKey as keyof LayoutDefinitions;
      const layout = window.layouts[asKey];
      const oldDelta = deltas[asKey] ?? 0;
      deltas[asKey] = oldDelta + layout.y + layout.h;
    }
  }

  const prioritizedWindowIds = new Set(prioritizedWindows.map((w) => w.id));
  for (const window of allWindows) {
    if (window.isOpen && !prioritizedWindowIds.has(window.id)) {
      for (let layoutKey in window.layouts) {
        const layout = window.layouts[layoutKey as keyof LayoutDefinitions];
        layout.y += deltas[layoutKey as keyof LayoutDefinitions] ?? 0;
      }
    }
  }
};

const moveWindowIntoFreeSpot = (
  window: ScreenarioWindow,
  otherWindows: ScreenarioWindow[]
) => {
  for (const key in window.layouts) {
    const layoutKey = key as keyof LayoutDefinitions;
    const layout = window.layouts[layoutKey];
    const layoutsByXAsc = otherWindows
      // remove layouts that are above our window anyway
      .filter(
        (curr) =>
          curr.isOpen &&
          curr.layouts[layoutKey] !== undefined &&
          curr.layouts[layoutKey].y < layout.h
      )
      .map((w) => w.layouts[layoutKey])
      .toSorted((a, b) => a.x - b.x);

    for (let lastFreeX = 0, i = 0; i < layoutsByXAsc.length; i++) {
      const curr = layoutsByXAsc[i];
      if (lastFreeX + layout.w <= curr.x) {
        layout.x = lastFreeX;
        break;
      }
      lastFreeX = curr.x + curr.w;
      // this will make the window be added at the rightmost end of another window.
      // This position may well be off-screen, but the layout engine will move it
      // back up.
      layout.x = lastFreeX;
    }
  }
};

export const windowManagementSlice = createSlice({
  name: "window-management",
  initialState: (): WindowManagementState => ({
    windows: [],
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
      const newWindow = createWindowByType(windowType);
      for (let layoutsKey in newWindow.layouts) {
        newWindow.layouts[layoutsKey as keyof LayoutDefinitions].y = 0;
      }
      moveWindowIntoFreeSpot(newWindow, state.windows);
      moveOpenWindowsBelow([newWindow], state.windows);
      state.windows.push(newWindow);
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
        const newWindow = createWindowByType(windowType);
        moveWindowIntoFreeSpot(newWindow, state.windows);
        moveOpenWindowsBelow([newWindow], state.windows);
        state.windows.push(newWindow);
      } else {
        relevantWindows.forEach((window) => {
          window.isOpen = !areAllOpen;
          if (window.isOpen) {
            moveWindowIntoFreeSpot(
              window,
              state.windows.filter((w) => w.id !== window.id)
            );
          }
        });

        if (!areAllOpen) {
          moveOpenWindowsBelow(relevantWindows, state.windows);
        }
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
    buildWorkPhaseReducer(builder);
    buildSoundboardReducer(builder);
  },
});

export const windowManagementActions = windowManagementSlice.actions;

export const useWindowState = <StateType extends WindowState>(id: string) => {
  return useSelector(
    (state: AppState) =>
      getWindowByIdOrFail(state.windowManagement.windows, id).state as StateType
  );
};
