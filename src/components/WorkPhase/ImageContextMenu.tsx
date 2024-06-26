import React, { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import {
  deleteImage,
  getCustomWorkPhaseImageLocalStorageKey,
} from "./WorkPhaseState";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import AspectRatioOutlinedIcon from "@mui/icons-material/AspectRatioOutlined";
import ImageNotSupportedOutlinedIcon from "@mui/icons-material/ImageNotSupportedOutlined";
import "./ImageContextMenu.scss";
import { AppState } from "../../app-state";
import { backgroundImageActions } from "../BackgroundImage/background-image-slice";
import ToggleButton from "@mui/material/ToggleButton";
import Tooltip from "@mui/material/Tooltip";

export const ImageContextMenu = ({
  isCustomImage,
  imageId,
}: {
  isCustomImage: boolean;
  imageId: string;
}) => {
  const localStorageKey = getCustomWorkPhaseImageLocalStorageKey(imageId);
  const dispatch = useDispatch();
  const { src: backgroundImageSrc, type: backgroundImageType } = useSelector(
    (state: AppState) => state.backgroundImage
  );
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const currentlyIsBackgroundImage =
    (backgroundImageType === "workPhaseImage" &&
      backgroundImageSrc === imageId) ||
    (backgroundImageType === "localStorageKey" &&
      backgroundImageSrc === localStorageKey);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setAnchorElement(e.nativeEvent.target as HTMLElement);
  };

  const closeMenu = (e?: any) => {
    if (typeof e === "object" && typeof e.stopPropagation === "function") {
      e?.stopPropagation();
    }

    setAnchorElement(null);
  };

  const onDeleteImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    (dispatch as ThunkDispatch<unknown, unknown, AnyAction>)(
      deleteImage(imageId)
    );
    closeMenu();
  };

  const setAsBackgroundImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCustomImage) {
      dispatch(
        backgroundImageActions.setBackgroundImageFromLocalStorage(
          localStorageKey
        )
      );
    } else {
      dispatch(backgroundImageActions.setBackgroundImageFromWorkPhase(imageId));
    }
    closeMenu();
  };

  const clearBackgroundImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(backgroundImageActions.clearBackgroundImage());
    closeMenu();
  };

  return (
    <>
      <div className="menu-button-parent">
        {currentlyIsBackgroundImage ? (
          <Tooltip title="Von Hintergrund entfernen">
            <ToggleButton
              onClick={clearBackgroundImage}
              className="menu-button"
              aria-label="Von Hintergrund entfernen"
              value={imageId}
            >
              <ImageNotSupportedOutlinedIcon />
            </ToggleButton>
          </Tooltip>
        ) : (
          <Tooltip title="Als Hintergrund setzen">
            <ToggleButton
              onClick={setAsBackgroundImage}
              className="menu-button"
              aria-label="Als Hintergrund setzen"
              value={imageId}
            >
              <AspectRatioOutlinedIcon />
            </ToggleButton>
          </Tooltip>
        )}
        {isCustomImage && (
          <Tooltip title="Bild löschen">
            <ToggleButton
              onClick={onDeleteImage}
              className="menu-button"
              aria-label="Bild löschen"
              value={imageId}
            >
              <DeleteIcon />
            </ToggleButton>
          </Tooltip>
        )}
      </div>
    </>
  );
};
