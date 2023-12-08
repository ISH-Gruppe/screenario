import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
import {
  deleteImage,
  getCustomWorkPhaseImageLocalStorageKey,
} from "./WorkPhaseState";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";
import "./ImageContextMenu.scss";
import { AppState } from "../../app-state";
import { backgroundImageActions } from "../BackgroundImage/background-image-slice";

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
    <div className="menu-button-parent">
      <IconButton onClick={openMenu} className="menu-button">
        <MoreVertIcon />
      </IconButton>
      <Menu
        open={Boolean(anchorElement)}
        anchorEl={anchorElement}
        onClose={closeMenu}
      >
        {currentlyIsBackgroundImage ? (
          <MenuItem onClick={clearBackgroundImage}>
            Von Hintergrund entfernen
          </MenuItem>
        ) : (
          <MenuItem onClick={setAsBackgroundImage}>
            Als Hintergrund setzen
          </MenuItem>
        )}
        {isCustomImage && (
          <MenuItem
            onMouseUp={onDeleteImage}
            disabled={currentlyIsBackgroundImage}
          >
            <DeleteIcon color="error" />
            Löschen
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};
