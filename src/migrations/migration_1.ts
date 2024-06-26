import { MigrationManifest } from "redux-persist/es/types";
import { WindowManagementState } from "../components/WindowManager/window-management-slice";
import { WindowType } from "../components/WindowManager/window-type";

export const migration_1: MigrationManifest[string] = (state: any) => {
  const windowManagementState: WindowManagementState = state.windowManagement;
  return {
    ...state,
    windowManagement: {
      ...windowManagementState,
      windows: windowManagementState.windows.map((window) =>
        window.state.type === WindowType.Soundboard
          ? {
              ...window,
              state: {
                ...window.state,
                favorites: {
                  sounds: [],
                  videos: [],
                },
              },
            }
          : window
      ),
    },
  };
};
