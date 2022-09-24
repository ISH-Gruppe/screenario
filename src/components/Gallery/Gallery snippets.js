import BaseWindow from "../BaseWindow/BaseWindow";
import React, { Component } from "react";
import { Stage, Layer, Text, Image, Line, Transformer } from "react-konva";
import useImage from "use-image";
// UI
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useConfirm } from "material-ui-confirm";

// Icons
import DeleteIcon from "@mui/icons-material/Delete";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"; // Upload Photo
import HideImageIcon from "@mui/icons-material/HideImage";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

// CSS
import "./Gallery.scss";

export default function Gallery({
  id,
  title,
  visible,
  onHide,
  onChange,
  onSave,
  onLoad,
}) {
  // Base Window functions
  function handleReset() {}
  function handleHide() {
    onHide(id);
  }

  // Setup & State
  const [userImages, setUserImages] = React.useState([]);
  const [selectedImageId, selectImage] = React.useState(null);

  const [stageSize, setStageSize] = React.useState({ w: 720, h: 480 });
  const defaultImages = [
    "/assets/images/positioncards/einzelarbeit.jpg",
    "/assets/images/positioncards/partnerarbeit.jpg",
  ];

  const fileInput = React.useRef();
  // const confirm = useConfirm();

  const grids = ["/assets/images/positioncards/5x4.png"];
  const selectedGrid = useImage("https://konvajs.github.io/assets/yoda.jpg");

  function GridImage({ width, height }) {
    const [image, status] = useImage(grids[0]);

    // "image" will be DOM image element or undefined

    return <Image image={image} width={width} height={height} />;
  }

  const onImageChange = (e) => {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    setUserImages([
      ...userImages,
      { id: url.toString(), url: url, x: 50, y: 50 },
    ]);
    fileInput.current.value = "";
  };

  function deleteSelectedImage() {
    const userImagesCopy = [...userImages];
    userImagesCopy.map((image, index) => {
      image.id == selectedImageId ? userImagesCopy.splice(index, 1) : true;
    });

    setUserImages(imagesCopy);
  }

  return (
    <BaseWindow id={id} title={title} onReset={handleReset} onHide={handleHide}>
      <ButtonGroup
        id="right-side-tools"
        variant="text"
        size="large"
        color="primary"
        aria-label="primary button group"
      >
        <Tooltip title="Lokales Bild einfügen">
          <ToggleButton aria-label="upload picture" component="label" value="">
            <input
              hidden
              accept="image/*"
              type="file"
              ref={fileInput}
              onChange={onImageChange}
            />
            <AddPhotoAlternateIcon />
          </ToggleButton>
        </Tooltip>
        <Tooltip title="Bild löschen">
          <ToggleButton
            aria-label="Bild löschen"
            component="label"
            onClick={deleteSelectedImage}
            value=""
          >
            <HideImageIcon />
          </ToggleButton>
        </Tooltip>
      </ButtonGroup>
      <div id="stage-wrapper" tabIndex={1}>
        <Stage width={stageSize.w} height={stageSize.h}>
          <Layer id="image"></Layer>
          <Layer id="grid">
            <GridImage width={stageSize.w} height={stageSize.h} />
          </Layer>
        </Stage>
      </div>
    </BaseWindow>
  );
}
