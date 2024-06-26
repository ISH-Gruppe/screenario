import React, { useState } from "react";
import BaseWindow from "../BaseWindow/BaseWindow";
import "./WorkPhase.css";

// UI
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  useWindowState,
  WindowConfig,
} from "../WindowManager/window-management-slice";
import { WindowType } from "../WindowManager/window-type";
import ToggleButton from "@mui/material/ToggleButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Tooltip from "@mui/material/Tooltip";
import {
  CUSTOM_IMAGES_WORK_PHASE_TAB_ID,
  CUSTOM_PICTOGRAM_TAB_ID,
  saveImage,
  selectWorkPhaseTab,
  WorkPhaseState,
  WorkPhaseTabId,
  workPhaseTabs,
} from "./WorkPhaseState";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useWorkPhaseCustomImages } from "./useWorkPhaseCustomImages";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tab from "@mui/material/Tab";
import { ImageContextMenu } from "./ImageContextMenu";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { toDataUrl } from "../../utils/fileToDataUrl";
import { PictogramSearch } from "./PictogramSearch";
import { APP_CONFIG } from "../../app-config";

const filteredWorkPhaseTabs = Object.fromEntries(
  Object.entries(workPhaseTabs).filter(
    ([key]) => !APP_CONFIG.hiddenWorkPhaseTabs.includes(key)
  )
);

export default function WorkPhase({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const windowState = useWindowState(id) as WorkPhaseState;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [popupImage, setPopupImage] = useState<ReactJSXElement | null>(null);
  const customImages = useWorkPhaseCustomImages();

  function openImage(image: string) {
    setPopupImage(<img className="popup-image" src={image} />);
    setOpen(true);
  }

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files === null) {
      throw new Error("No file added");
    }
    const [file] = files;
    const fileContent = await toDataUrl(file);
    (dispatch as ThunkDispatch<unknown, unknown, AnyAction>)(
      saveImage({
        imageContent: fileContent,
      })
    );
  };

  function hideOrShowGalleries() {
    if (open) {
      return { opacity: "0", pointerEvents: "none" } as const;
    } else {
      return { opacity: "1" } as const;
    }
  }

  const onSelectTab = (_event: unknown, tabId: string) => {
    dispatch(
      selectWorkPhaseTab({
        windowId: id,
        tabId: tabId as WorkPhaseTabId,
      })
    );
  };

  return (
    <BaseWindow id={id} title={title}>
      {popupImage ? (
        <div
          id="image-popup"
          onClick={() => {
            setPopupImage(null);
            setOpen(false);
          }}
        >
          {popupImage}
        </div>
      ) : (
        <div className="galleries" style={hideOrShowGalleries()}>
          <TabContext value={windowState.currentTab}>
            <TabList onChange={onSelectTab}>
              {Object.entries(filteredWorkPhaseTabs).map(
                ([tabId, { name }]) => (
                  <Tab key={tabId} value={tabId} label={name} />
                )
              )}
              {!APP_CONFIG.hiddenWorkPhaseTabs.includes(
                CUSTOM_PICTOGRAM_TAB_ID
              ) && (
                <Tab value={CUSTOM_PICTOGRAM_TAB_ID} label="Piktogrammsuche" />
              )}
              {!APP_CONFIG.hiddenWorkPhaseTabs.includes(
                CUSTOM_IMAGES_WORK_PHASE_TAB_ID
              ) && (
                <Tab
                  value={CUSTOM_IMAGES_WORK_PHASE_TAB_ID}
                  label="Eigene Bilder"
                />
              )}
            </TabList>
            {Object.entries(filteredWorkPhaseTabs).map(
              ([tabKey, { categories }]) => (
                <TabPanel key={tabKey} value={tabKey}>
                  {categories.map(({ name, images }) => (
                    <React.Fragment key={name}>
                      <h3> {name} </h3>
                      <ImageList sx={{}} cols={3}>
                        {images.map((image) => {
                          return (
                            <ImageListItem
                              className="gallery-image"
                              onClick={() => openImage(image.src)}
                              key={image.id}
                            >
                              <img src={image.src} />
                              <ImageContextMenu
                                isCustomImage={false}
                                imageId={image.id}
                              />
                            </ImageListItem>
                          );
                        })}
                      </ImageList>
                    </React.Fragment>
                  ))}
                </TabPanel>
              )
            )}
            <TabPanel value={CUSTOM_PICTOGRAM_TAB_ID}>
              <PictogramSearch />
            </TabPanel>
            <TabPanel value={CUSTOM_IMAGES_WORK_PHASE_TAB_ID}>
              <Tooltip title="Eigenes Bild hinzufügen">
                <ToggleButton
                  value=""
                  aria-label="Bild hochladen"
                  component="label"
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleFileSelect}
                  />
                  <AddPhotoAlternateIcon />
                </ToggleButton>
              </Tooltip>
              <ImageList sx={{}} cols={3}>
                {customImages.map(({ id, content }) => {
                  return (
                    <ImageListItem
                      className="gallery-image"
                      onClick={() => openImage(content)}
                      key={content}
                    >
                      <img src={content} />
                      <ImageContextMenu isCustomImage={true} imageId={id} />
                    </ImageListItem>
                  );
                })}
              </ImageList>
            </TabPanel>
          </TabContext>
        </div>
      )}
    </BaseWindow>
  );
}

export const workPhaseWindowConfig: WindowConfig = {
  getInitialState: () => ({
    type: WindowType.WorkPhase,
    currentTab: "work",
  }),
  Component: ({ id }) => (
    <WorkPhase id={id} title="Arbeits- und Pausenphasen" />
  ),
  getDefaultLayout: () => ({
    xs: {
      w: 4,
      h: 4,
      x: 0,
      y: 11,
      minW: 2,
    },
    sm: {
      w: 2,
      h: 7,
      x: 0,
      y: 0,
      minW: 2,
    },
    md: {
      w: 12,
      h: 8,
      x: 0,
      y: 0,
      minW: 12,
      minH: 6,
    },
    lg: {
      w: 18,
      h: 8,
      x: 0,
      y: 0,
      minW: 12,
      minH: 6,
    },
  }),
};
