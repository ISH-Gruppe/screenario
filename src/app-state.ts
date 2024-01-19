import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createMigrate, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { welcomeSlice } from "./components/Modals/Welcome/welcome-slice";
import {
  windowManagementSlice,
  WindowManagementState,
} from "./components/WindowManager/window-management-slice";
import { STORE_PERSISTOR_KEY } from "./app-config";
import { workPhaseSlice } from "./components/WorkPhase/WorkPhaseState";
import { backgroundImageSlice } from "./components/BackgroundImage/background-image-slice";
import { randomGeneratorWindowConfig } from "./components/RandomGenerator/RandomGenerator";
import { RandomGeneratorState } from "./components/RandomGenerator/RandomGeneratorState";
import { migrations } from "./migrations";

const migrations = {
  // Migrates from v-1 to v0
  0: (state: any) => {
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
  },
};

export const store = configureStore({
  devTools: true,
  reducer: persistReducer(
    {
      key: STORE_PERSISTOR_KEY,
      storage: storage,
      version: 1,
      migrate: createMigrate(migrations, { debug: true }),
    },
    combineReducers({
      windowManagement: windowManagementSlice.reducer,
      welcome: welcomeSlice.reducer,
      globalWorkPhase: workPhaseSlice.reducer,
      backgroundImage: backgroundImageSlice.reducer,
    })
  ),

  // https://stackoverflow.com/a/77509978
  middleware: [],
});

export type AppState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
