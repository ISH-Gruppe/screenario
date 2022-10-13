import BaseWindow from "../BaseWindow/BaseWindow";
import React, { Component } from "react";
import {
  Group,
  Rect,
  Stage,
  Layer,
  Text,
  Image,
  Line,
  Transformer,
} from "react-konva";

// Material UI
import { useConfirm } from "material-ui-confirm";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// Icons
import GridOnIcon from "@mui/icons-material/GridOn";
import GridOffIcon from "@mui/icons-material/GridOff";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import GridGoldenratioIcon from "@mui/icons-material/GridGoldenratio";
import PostAddIcon from "@mui/icons-material/PostAdd";

// Custom Components
import ImageCarousel from "./ImageCarousel";
import LoadedImage from "./LoadedImage";
import { EditableText } from "./EditableText";
import Grid from "./Grid";
// CSS
import "./Gallery.scss";

// Constants
const defaultImages = [
  "/assets/images/gallery/pixabay_1.jpg",
  "/assets/images/gallery/pixabay_2.jpg",
  "/assets/images/gallery/pixabay_3.jpg",
  "/assets/images/gallery/pixabay_4.jpg",
  "/assets/images/gallery/pixabay_5.jpg",
  "/assets/images/gallery/pixabay_6.jpg",
  "/assets/images/gallery/pixabay_7.jpg",
  "/assets/images/gallery/pixabay_8.jpg",
  "/assets/images/gallery/pixabay_9.jpg",
  "/assets/images/gallery/unsplash_1.jpg",
  "/assets/images/gallery/unsplash_2.jpg",
  "/assets/images/gallery/unsplash_3.jpg",
  "/assets/images/gallery/unsplash_4.jpg",
];

function Gallery(
  { id, title, visible, onHide, onChange, onSave, onLoad, resizing },
  ref
) {
  // Base Window functions
  function handleReset() {}
  function handleHide() {
    onHide(id);
  }

  // State
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [userImages, setUserImages] = React.useState([]);
  const [selectedImagePath, selectImage] = React.useState(defaultImages[0]);
  const [stageSize, setStageSize] = React.useState({ w: 720, h: 405 });

  const [textboxes, setTextboxes] = React.useState([]);

  const grids = [
    {
      id: 0,
      verticalLineAmount: 0,
      horizontalLineAmount: 0,
    },
    {
      id: 1,
      verticalLineAmount: 6,
      horizontalLineAmount: 4,
    },
    {
      id: 2,
      verticalLineAmount: 7,
      horizontalLineAmount: 5,
    },
    {
      id: 3,
      verticalLineAmount: 10,
      horizontalLineAmount: 7,
    },
  ];

  const [selectedGrid, selectGrid] = React.useState(grids[0]);

  React.useEffect(() => {
    setCanvasSize();
  }, []);

  React.useImperativeHandle(ref, () => ({
    updateFromParent() {
      setCanvasSize();
    },
  }));

  function toggleEdit(boxId) {
    const newTextboxes = textboxes.map((box, index) => {
      if (index === boxId) {
        box.selected = !box.isEditing;
        box.isEditing = !box.isEditing;
      }
      return box;
    });

    setTextboxes([...newTextboxes]);
  }

  function toggleTransforming(boxId) {
    const newTextboxes = textboxes.map((box, index) => {
      if (index === boxId) {
        box.selected = !box.isTransforming;
        box.isTransforming = !box.isTransforming;
      } else {
        box.selected = false;
        box.isTransforming = false;
      }
      return box;
    });

    setTextboxes([...newTextboxes]);
  }

  function onTextResize(boxId, newWidth, newHeight) {
    const textboxesCopy = [...textboxes];
    const box = textboxes[boxId];

    textboxesCopy[boxId] = {
      ...box,
      width: newWidth,
      height: newHeight,
    };

    setTextboxes([...textboxesCopy]);
  }

  function onTextChange(boxId, value) {
    const textboxesCopy = [...textboxes];
    const box = textboxes[boxId];

    textboxesCopy[boxId] = {
      ...box,
      text: value,
    };

    setTextboxes([...textboxesCopy]);
  }

  function handleDragEnd(boxId, event) {
    const x = event.target.x();
    const y = event.target.y();

    const textboxesCopy = [...textboxes];
    const box = textboxes[boxId];

    textboxesCopy[boxId] = {
      ...box,
      x: x,
      y: y,
    };

    setTextboxes([...textboxesCopy]);
  }

  const shownTextboxes = textboxes.map((box, index) => {
    return (
      <EditableText
        id={index}
        key={index}
        x={box.x}
        y={box.y}
        text={box.text}
        width={box.width}
        height={box.height}
        selected={box.selected}
        isEditing={box.isEditing}
        isTransforming={box.isTransforming}
        onResize={(newWidth, newHeight) =>
          onTextResize(index, newWidth, newHeight)
        }
        onToggleEdit={() => toggleEdit(index)}
        onToggleTransform={() => toggleTransforming(index)}
        onChange={(value) => onTextChange(index, value)}
        onDragEnd={(event) => handleDragEnd(index, event)}
      />
    );
  });

  // Canvas Size
  function getGalleryWindowSize() {
    const galleryCanvas = document.querySelector(".window-gallery");
    const width = galleryCanvas.getBoundingClientRect().width;
    const height = galleryCanvas.getBoundingClientRect().height;

    return { w: width, h: height };
  }

  function setCanvasSize() {
    const width = getGalleryWindowSize().w - 140;
    const height = getGalleryWindowSize().h - 110 - 50 - 20; // imageCarousel, window top bar, card content padding, window resize handle
    setStageSize({ w: width, h: height });
  }

  // Image Carousel
  function handleImageSelect(imagePath) {
    selectImage(imagePath);
    setCanvasSize();
  }

  function nextGrid() {
    const currentGrid = selectedGrid.id;

    if (currentGrid < grids.length - 1) {
      selectGrid(grids[currentGrid + 1]);
    } else {
      selectGrid(grids[0]);
    }
  }

  function addUserImageFile(e) {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    setUserImages([...userImages, url.toString()]);
  }

  function deleteUserImage(event, value) {
    const imageToDelete = userImages.indexOf(value);
    switch (true) {
      case imageToDelete === -1:
        break;
      case imageToDelete === 0:
        handleImageSelect("/assets/images/gallery/Image 64.jpg");
      // this doesn’t work right now. god knows why.

      case imageToDelete > 0:
        handleImageSelect(userImages[imageToDelete - 1]);
    }
    const userImagesCopy = [...userImages];
    userImagesCopy.splice(imageToDelete, 1);
    setUserImages([...userImagesCopy]);
  }

  function addTextBox() {
    setTextboxes([
      ...textboxes,
      {
        isEditing: false,
        isTransforming: false,
        text: "Doppelklick: Bearbeiten, Enter: Bestätigen, Backspace: Löschen",
        width: 200,
        height: 100,
        selected: false,
        x: 50,
        y: 50,
      },
    ]);
  }

  function deleteSelectedTextBox() {
    const filteredTextboxes = textboxes.filter(
      (box) =>
        box.isEditing === true ||
        (box.isTransforming === false && box.selected === false)
    );

    setTextboxes([...filteredTextboxes]);
  }

  function handleKeyPressOnStageWrapper(event) {
    if (event.key === "Backspace") {
      deleteSelectedTextBox();
    }
  }

  return (
    <BaseWindow id={id} title={title} onReset={handleReset} onHide={handleHide}>
      <div
        id="gallery-stage-wrapper"
        onKeyDown={handleKeyPressOnStageWrapper}
        tabIndex={-1}
      >
        <Stage width={stageSize.w} height={stageSize.h}>
          <Layer id="k-image-layer">
            <LoadedImage
              imagePath={selectedImagePath}
              stageWidth={stageSize.w}
              stageHeight={stageSize.h}
            />
          </Layer>
          <Layer id="k-grid-layer">
            <Grid
              horizontalLineAmount={selectedGrid.horizontalLineAmount}
              verticalLineAmount={selectedGrid.verticalLineAmount}
              stageSize={stageSize}
            />
          </Layer>
          <Layer id="k-text-layer">{shownTextboxes}</Layer>
        </Stage>
        <div className="right-toolbar">
          <ButtonGroup
            variant="text"
            size="large"
            color="primary"
            aria-label="primary button group"
            orientation="vertical"
          >
            <Tooltip title="Raster wechseln">
              <ToggleButton
                aria-label="Raster"
                component="label"
                value=""
                onClick={nextGrid}
              >
                <GridOnIcon />
              </ToggleButton>
            </Tooltip>
            <Tooltip title="Textfeld hinzufügen">
              <ToggleButton
                aria-label="Textfeld"
                component="label"
                value=""
                onClick={addTextBox}
              >
                <PostAddIcon />
              </ToggleButton>
            </Tooltip>
          </ButtonGroup>
        </div>
      </div>

      <ImageCarousel
        selectedImage={selectedImagePath}
        imagePaths={{ defaultImages: defaultImages, userImages: userImages }}
        onImageSelect={handleImageSelect}
        onFileSelect={addUserImageFile}
        onImageDelete={deleteUserImage}
      />
    </BaseWindow>
  );
}

export default React.forwardRef(Gallery);
