import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../app-state";
import { getCustomSoundboardFile } from "./SoundboardState";

export const useCustomSoundboardFiles = () => {
  return useSelector(
    createSelector(
      (state: AppState) => state.globalSoundboard.customFiles,
      (customFiles) =>
        customFiles.map(({ id, name }) => ({
          id,
          name,
          content: getCustomSoundboardFile(id),
        }))
    )
  );
};
