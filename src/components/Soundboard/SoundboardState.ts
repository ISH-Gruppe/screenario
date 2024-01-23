import { ActionReducerMapBuilder, createAction } from "@reduxjs/toolkit";
import {
  getWindowByIdOrFail,
  WindowManagementState,
  WindowType,
} from "../WindowManager/window-management-slice";

export type SoundboardState = {
  type: WindowType.Soundboard;
  favorites: {
    sounds: string[];
    videos: string[];
  };
};

export const toggleFavorite = createAction<{
  windowId: string;
  type: keyof SoundboardState["favorites"];
  id: string;
}>("soundboard/toggleFavorite");

export const buildSoundboardReducer = (
  builder: ActionReducerMapBuilder<WindowManagementState>
) => {
  builder.addCase(
    toggleFavorite,
    (state, { payload: { windowId, type, id } }) => {
      const windowState = getWindowByIdOrFail(state.windows, windowId)
        .state as SoundboardState;

      if (!windowState.favorites[type].includes(id)) {
        windowState.favorites[type].push(id);
      } else {
        windowState.favorites[type] = windowState.favorites[type].filter(
          (favorite) => favorite !== id
        );
      }
    }
  );
};
