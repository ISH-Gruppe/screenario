import { REHYDRATE, RehydrateAction } from "redux-persist";
import { STORE_PERSISTOR_KEY } from "./app-config";
import { AppState } from "./app-state";

export const replaceState = (
  state: Partial<Omit<AppState, "_persist">>
): RehydrateAction => ({
  type: REHYDRATE,
  key: STORE_PERSISTOR_KEY,
  payload: state,
});
