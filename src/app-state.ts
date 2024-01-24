import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createMigrate, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { welcomeSlice } from "./components/Modals/Welcome/welcome-slice";
import { windowManagementSlice } from "./components/WindowManager/window-management-slice";
import { STORE_PERSISTOR_KEY } from "./app-config";
import { workPhaseSlice } from "./components/WorkPhase/WorkPhaseState";
import { backgroundImageSlice } from "./components/BackgroundImage/background-image-slice";
import { migrations } from "./migrations";
import { globalSoundboardSlice } from "./components/Soundboard/SoundboardState";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  devTools: true,
  reducer: persistReducer(
    {
      key: STORE_PERSISTOR_KEY,
      storage: storage,
      version: 2,
      migrate: createMigrate(migrations, { debug: true }),
    },
    combineReducers({
      windowManagement: windowManagementSlice.reducer,
      welcome: welcomeSlice.reducer,
      globalWorkPhase: workPhaseSlice.reducer,
      globalSoundboard: globalSoundboardSlice.reducer,
      backgroundImage: backgroundImageSlice.reducer,
    })
  ),

  // https://stackoverflow.com/a/77509978
  middleware: ((getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/REGISTER",
          "persist/REHYDRATE",
          "persist/PERSIST",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/FLUSH",
        ],
      },
    }).concat();
  }) as unknown as [],
});

export type AppState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
