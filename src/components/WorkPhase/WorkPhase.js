import React, { useState } from "react";
import BaseWindow from "../BaseWindow/BaseWindow";
import "./WorkPhase.css";

// UI
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function WorkPhase({ id, title, onHide, onChange }) {
  const workPhases = [
    {
      description: "Arbeitsphasen",
      images: [
        "/assets/images/einzelarbeit.jpg",
        "/assets/images/partnerarbeit.jpg",
        "/assets/images/gruppenarbeit.jpg",
      ],
    },
    {
      description: "Pausenphasen",
      images: [
        "/assets/images/kaffeepause.jpg",
        "/assets/images/mittagspause.jpg",
        "/assets/images/feierabend.jpg",
      ],
    },
    {
      description: "Pausenphasen (Schule)",
      images: [
        "/assets/images/kurze-pause.jpg",
        "/assets/images/grosse-pause.jpg",
        "/assets/images/stundenende.jpg",
      ],
    },
    {
      description: "Think, Pair, Share",
      images: [
        "/assets/images/pair.jpg",
        "/assets/images/share.jpg",
        "/assets/images/think.jpg",
      ],
    },
    {
      description: "Videokonferenzen",
      images: [
        "/assets/images/herzlich-willkommen.jpg",
        "/assets/images/kamera-anschalten.jpg",
        "/assets/images/fragen-im-chat.jpg",
      ],
    },
    { description: "Eigene Bilder", images: [] },
  ];

  function handleReset() {}

  function handleHide() {
    onHide(id);
  }

  const [open, setOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(<></>);

  function openImage(image) {
    setPopupImage(<img class="popup-image" src={image} />);
    setOpen(true);
  }

  const galleries = workPhases.map((phase) => {
    return (
      <>
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
      </>
    );
  });

  function hideOrShowGalleries() {
    if (open) {
      return { opacity: "0", pointerEvents: "none" };
    } else {
      return { opacity: "1" };
    }
  }

  return (
    <BaseWindow id={id} title={title} onReset={handleReset} onHide={handleHide}>
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
    </BaseWindow>
  );
}
