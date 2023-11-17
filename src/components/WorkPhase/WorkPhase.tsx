import React, { useState } from "react";
import BaseWindow from "../BaseWindow/BaseWindow";
import "./WorkPhase.css";

// UI
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  WindowConfig,
  WindowType,
} from "../WindowManager/window-management-slice";
import EinzelarbeitImage from "./images/einzelarbeit.jpg";
import PartnerarbeitImage from "./images/partnerarbeit.jpg";
import GruppenarbeitImage from "./images/gruppenarbeit.jpg";

// Pausenphasen
import KaffeepauseImage from "./images/kaffeepause.jpg";
import MittagspauseImage from "./images/mittagspause.jpg";
import FeierabendImage from "./images/feierabend.jpg";

// Pausenphasen (Schule)
import KurzePauseImage from "./images/kurze-pause.jpg";
import GrossePauseImage from "./images/grosse-pause.jpg";
import StundenendeImage from "./images/stundenende.jpg";

// Think, Pair, Share
import ThinkImage from "./images/think.jpg";
import PairImage from "./images/pair.jpg";
import ShareImage from "./images/share.jpg";

// Videokonferenzen
import HerzlichWillkommenImage from "./images/herzlich-willkommen.jpg";
import KameraAnschaltenImage from "./images/kamera-anschalten.jpg";
import FragenImChatImage from "./images/fragen-im-chat.jpg";
import ToggleButton from "@mui/material/ToggleButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Tooltip from "@mui/material/Tooltip";
import { deleteImage, saveImage } from "./WorkPhaseState";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useWorkPhaseCustomImages } from "./useWorkPhaseCustomImages";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export default function WorkPhase({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const workPhases = [
    {
      description: "Arbeitsphasen",
      images: [EinzelarbeitImage, PartnerarbeitImage, GruppenarbeitImage],
    },
    {
      description: "Pausenphasen",
      images: [KaffeepauseImage, MittagspauseImage, FeierabendImage],
    },
    {
      description: "Pausenphasen (Schule)",
      images: [KurzePauseImage, GrossePauseImage, StundenendeImage],
    },
    {
      description: "Think, Pair, Share",
      images: [ThinkImage, PairImage, ShareImage],
    },
    {
      description: "Videokonferenzen",
      images: [
        HerzlichWillkommenImage,
        KameraAnschaltenImage,
        FragenImChatImage,
      ],
    },
  ];

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(<></>);

  function openImage(image: string) {
    setPopupImage(<img className="popup-image" src={image} />);
    setOpen(true);
  }

  const galleries = workPhases.map((phase, index) => {
    return (
      <React.Fragment key={index}>
        <h3> {phase.description} </h3>
        <ImageList sx={{}} cols={3}>
          {phase.images.map((image) => {
            return (
              <ImageListItem
                className="gallery-image"
                onClick={() => openImage(image)}
                key={image}
              >
                <img src={image} />
              </ImageListItem>
            );
          })}
        </ImageList>
      </React.Fragment>
    );
  });

  const customImages = useWorkPhaseCustomImages();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files === null) {
      throw new Error("No file added");
    }
    const [file] = files;
    const url = URL.createObjectURL(file);
    (dispatch as ThunkDispatch<unknown, unknown, AnyAction>)(
      saveImage({
        imageContent: url,
      })
    );
  };

  const onDeleteImage = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    (dispatch as ThunkDispatch<unknown, unknown, AnyAction>)(deleteImage(id));
  };

  galleries.push(
    <React.Fragment key={"custom-images"}>
      <h3> Eigene Bilder </h3>
      <ImageList sx={{}} cols={3}>
        {customImages.map(({ id, content }) => {
          return (
            <ImageListItem
              className="gallery-image"
              onClick={() => openImage(content)}
              key={content}
            >
              <img src={content} />
              <IconButton
                onClick={(e) => onDeleteImage(e, id)}
                className="close-button"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            </ImageListItem>
          );
        })}
      </ImageList>
    </React.Fragment>
  );

  function hideOrShowGalleries() {
    if (open) {
      return { opacity: "0", pointerEvents: "none" } as const;
    } else {
      return { opacity: "1" } as const;
    }
  }

  return (
    <BaseWindow id={id} title={title}>
      <div
        id="image-popup"
        onClick={() => {
          setPopupImage(<> </>);
          setOpen(false);
        }}
      >
        {popupImage}
      </div>
      <div className="galleries" style={hideOrShowGalleries()}>
        {galleries}
      </div>
      <Tooltip title="Eigenes Bild hinzufügen">
        <ToggleButton value="" aria-label="Bild hochladen" component="label">
          <input
            hidden
            accept="image/*"
            type="file"
            // ref={fileInput}
            onChange={handleFileSelect}
          />
          <AddPhotoAlternateIcon />
        </ToggleButton>
      </Tooltip>
    </BaseWindow>
  );
}

export const workPhaseWindowConfig: WindowConfig = {
  getInitialState: () => ({
    type: WindowType.WorkPhase,
  }),
  Component: ({ id }) => (
    <WorkPhase id={id} title="Arbeits- und Pausenphasen" />
  ),
  defaultLayout: {
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
  },
};
