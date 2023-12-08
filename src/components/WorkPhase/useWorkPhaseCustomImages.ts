import { useSelector } from "react-redux";
import { AppState } from "../../app-state";
import { getCustomWorkPhaseImage } from "./WorkPhaseState";
import { createSelector } from "@reduxjs/toolkit";

export const useWorkPhaseCustomImages = () => {
  return useSelector(
    createSelector(
      (state: AppState) => state.globalWorkPhase.customImages,
      (customImages) =>
        customImages.map(({ id }) => ({
          id,
          content: getCustomWorkPhaseImage(id),
        }))
    )
  );
};
