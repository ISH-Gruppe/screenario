import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { AppState } from "../../app-state";
import { match, P } from "ts-pattern";
import { getWorkPhaseImageById } from "../WorkPhase/WorkPhaseState";

export type BackgroundImageState = {
  type: "none" | "workPhaseImage" | "localStorageKey";
  src: string;
};

export const backgroundImageSlice = createSlice({
  name: "background-image",
  initialState: (): BackgroundImageState => ({ type: "none", src: "" }),
  reducers: {
    clearBackgroundImage: (state) => {
      state.type = "none";
    },
    setBackgroundImageFromWorkPhase: (
      state,
      { payload: imageKey }: PayloadAction<string>
    ) => {
      state.type = "workPhaseImage";
      state.src = imageKey;
    },
    setBackgroundImageFromLocalStorage: (
      state,
      { payload: localStorageKey }: PayloadAction<string>
    ) => {
      state.type = "localStorageKey";
      state.src = localStorageKey;
    },
  },
});

export const backgroundImageActions = backgroundImageSlice.actions;

export const useBackgroundImage = () => {
  return useSelector(
    createSelector(
      (state: AppState) => state.backgroundImage,
      (backgroundImage): string | undefined =>
        match(backgroundImage)
          .with({ type: "none" }, () => undefined)
          .with(
            { type: "workPhaseImage", src: P.select() },
            (imageId) => getWorkPhaseImageById(imageId)?.src
          )
          .with(
            { type: "localStorageKey", src: P.select() },
            (storageKey) => localStorage.getItem(storageKey) ?? undefined
          )
          .exhaustive()
    )
  );
};
