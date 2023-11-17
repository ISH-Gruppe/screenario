import { useSelector } from "react-redux";
import { AppState } from "../../app-state";
import { useMemo } from "react";
import {
  CustomImageDefinition,
  getCustomWorkPhaseImage,
} from "./WorkPhaseState";

export const useWorkPhaseCustomImages = () => {
  const imageIds: CustomImageDefinition[] = useSelector(
    (state: AppState) => state.globalWorkPhase.customImages
  );
  return useMemo(
    () =>
      imageIds.map(({ id }) => ({
        id,
        content: getCustomWorkPhaseImage(id),
      })),
    [imageIds]
  );
};
