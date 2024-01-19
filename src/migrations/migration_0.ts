import { MigrationManifest } from "redux-persist/es/types";
import { randomGeneratorWindowConfig } from "../components/RandomGenerator/RandomGenerator";
import { RandomGeneratorState } from "../components/RandomGenerator/RandomGeneratorState";
import { WindowManagementState } from "../components/WindowManager/window-management-slice";

export const migration_0: MigrationManifest[string] = (state: any) => {
  const initialRNGState = randomGeneratorWindowConfig.getInitialState(
    ""
  ) as RandomGeneratorState;
  const windowManagementState: WindowManagementState = state.windowManagement;
  return {
    ...state,
    windowManagement: {
      windows: windowManagementState.windows.map((window) => {
        if (window.state.type === "random-generator") {
          return {
            ...window,
            state: {
              ...window.state,
              wordPicker: {
                words: window.state.namePicker?.names ?? [],
              },
              spinWheel: initialRNGState.spinWheel,
            },
          };
        }
        return window;
      }),
    },
  };
};
