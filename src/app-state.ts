import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { welcomeSlice } from "./components/Modals/Welcome/welcome-slice";
import { windowManagementSlice } from "./components/WindowManager/window-management-slice";

export const store = configureStore({
  devTools: true,
  reducer: persistReducer(
    {
      key: "screenario-app-state",
      storage: storage,
    },
    combineReducers({
      windowManagement: windowManagementSlice.reducer,
      welcome: welcomeSlice.reducer,
    })
  ),
});

export type AppState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
