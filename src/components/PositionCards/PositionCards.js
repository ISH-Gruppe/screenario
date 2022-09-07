import BaseWindow from "../BaseWindow/BaseWindow";
import React, { Component } from "react";
import { Stage, Layer, Text, Image, Line, Transformer } from "react-konva";

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
import "./PositionCards.scss";

export default function PositionCards({
  id,
  title,
  visible,
  onHide,
  onChange,
  onSave,
  onLoad,
}) {
  const [userImages, setUserImages] = React.useState([]);
  const [selectedImageId, selectImage] = React.useState(null);

  const standardImages = [
    "/assets/images/einzelarbeit.jpg",
    "/assets/images/partnerarbeit.jpg",
  ];

  const fileInput = React.useRef();
  const confirm = useConfirm();

  // runs on mount
  React.useEffect(() => {}, []);

  // Base Window functions
  function handleReset() {}
  function handleHide() {
    onHide(id);
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

  const generateGrid = () => {
    const lines = [];

    for (let i = 0; i < 8; i++) {
      lines.push(
        <Line
          x={0}
          y={i * 50}
          points={[0, 0, 500, 0]}
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth={1}
        />,
        <Line
          x={i * 50}
          y={0}
          points={[0, 0, 0, 500]}
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth={1}
        />
      );
    }

    return lines;
  };

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
        <Stage
          width={window.innerWidth * 0.5}
          height={window.innerHeight * 0.9}
        >
          <Layer id="grid">{generateGrid()}</Layer>
        </Stage>
      </div>
    </BaseWindow>
  );
}
