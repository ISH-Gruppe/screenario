import BaseWindow from "../BaseWindow/BaseWindow";
import React, { useEffect } from "react";
import { Layer, Stage } from "react-konva";

// Material UI
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import ToggleButton from "@mui/material/ToggleButton";
import Divider from "@mui/material/Divider";

// Icons
import GridOnIcon from "@mui/icons-material/GridOn";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"; // Upload Photo
// Custom Components
import ImageCarousel from "./ImageCarousel";
import LoadedImage from "./LoadedImage";
import { EditableText } from "./EditableText";
import Grid from "./Grid";

// CSS
import "./Positioning.scss";
import {
  getWindowByIdOrFail,
  WindowConfig,
  WindowType,
} from "../WindowManager/window-management-slice";
import { useSelector } from "react-redux";
import { AppState } from "../../app-state";

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
  "/assets/images/gallery/collection_1.jpg",
  "/assets/images/gallery/collection_2.jpg",
  "/assets/images/gallery/collection_3.jpg",
];

type Box = {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  selected: boolean;
  isEditing: boolean;
  isTransforming: boolean;
};

type DragEvent = {
  target: {
    x: () => number;
    y: () => number;
  };
};

export default function Positioning({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  // State
  const [userImages, setUserImages] = React.useState<string[]>([]);
  const [selectedImagePath, selectImage] = React.useState(defaultImages[0]);
  const fileInput = React.useRef<HTMLInputElement>(null);
  const imageRowRef = React.useRef<HTMLDivElement | null>(null);

  const [stageSize, setStageSize] = React.useState({ width: 720, height: 405 });

  const [currentImageSize, setCurrentImageSize] = React.useState({
    width: 720,
    height: 405,
  });

  const [textboxes, setTextboxes] = React.useState<Box[]>([]);

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

  const window = useSelector((state: AppState) =>
    getWindowByIdOrFail(state.windowManagement.windows, id)
  );

  useEffect(() => {
    setCanvasSize();
  }, [window.layouts]);

  function toggleEdit(boxId: number) {
    const newTextboxes = textboxes.map((box, index) => {
      if (index === boxId) {
        box.selected = !box.isEditing;
        box.isEditing = !box.isEditing;
      }
      return box;
    });

    setTextboxes([...newTextboxes]);
  }

  function toggleTransforming(boxId: number) {
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

  function onTextResize(boxId: number, newWidth: number, newHeight: number) {
    const textboxesCopy = [...textboxes];
    const box = textboxes[boxId];

    textboxesCopy[boxId] = {
      ...box,
      width: newWidth,
      height: newHeight,
    };

    setTextboxes([...textboxesCopy]);
  }

  function onTextChange(boxId: number, value: string) {
    const textboxesCopy = [...textboxes];
    const box = textboxes[boxId];

    textboxesCopy[boxId] = {
      ...box,
      text: value,
    };

    setTextboxes([...textboxesCopy]);
  }

  function handleDragEnd(boxId: number, event: DragEvent) {
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
        // TODO: check if possible to set
        // selected={box.selected}
        isEditing={box.isEditing}
        isTransforming={box.isTransforming}
        onResize={(newWidth: number, newHeight: number) =>
          onTextResize(index, newWidth, newHeight)
        }
        onToggleEdit={() => toggleEdit(index)}
        onToggleTransform={() => toggleTransforming(index)}
        onChange={(value: string) => onTextChange(index, value)}
        onDragEnd={(event: DragEvent) => handleDragEnd(index, event)}
      />
    );
  });

  // Canvas Size
  function getGalleryWindowSize() {
    const galleryCanvas = document.querySelector(`.window-${id}`);
    const width = galleryCanvas?.getBoundingClientRect().width ?? 0;
    const height = galleryCanvas?.getBoundingClientRect().height ?? 0;

    return { w: width, h: height };
  }

  function setCanvasSize() {
    const width = getGalleryWindowSize().w - 140;
    const height = getGalleryWindowSize().h - 110 - 50 - 20; // imageCarousel, window top bar, card content padding, window resize handle
    setStageSize({ width: width, height: height });
  }

  function setCalculatedImageSize(width: number, height: number) {
    if (currentImageSize.width != width || currentImageSize.height != height) {
      setCurrentImageSize({ width: width, height: height });
    }
  }

  // Image Carousel
  function handleImageSelect(imagePath: string) {
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

  function addUserImageFile(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files === null) {
      throw new Error("No file added");
    }
    const [file] = files;
    const url = URL.createObjectURL(file);
    setUserImages([...userImages, url.toString()]);
  }

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    addUserImageFile(event);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
    setTimeout(() => {
      if (imageRowRef.current) {
        imageRowRef.current.scrollLeft =
          // TODO: https://linear.app/ish/issue/SIO-71/gallery-uses-scrollleftmax
          // @ts-ignore
          imageRowRef.current.scrollLeftMax + 200;
      }
    }, 200);
  }

  function deleteUserImage(_event: unknown, value: string) {
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

  function handleKeyPressOnStageWrapper(event: React.KeyboardEvent) {
    if (event.key === "Backspace") {
      deleteSelectedTextBox();
    }
  }

  return (
    <BaseWindow id={id} title={title}>
      <div
        id="gallery-stage-wrapper"
        onKeyDown={handleKeyPressOnStageWrapper}
        tabIndex={-1}
      >
        <Stage width={stageSize.width} height={stageSize.height}>
          <Layer id="k-image-layer">
            <LoadedImage
              stageWidth={stageSize.width}
              stageHeight={stageSize.height}
              imagePath={selectedImagePath}
              onSizeCalculated={setCalculatedImageSize}
            />
          </Layer>
          <Layer id="k-grid-layer">
            <Grid
              horizontalLineAmount={selectedGrid.horizontalLineAmount}
              verticalLineAmount={selectedGrid.verticalLineAmount}
              stageSize={currentImageSize}
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
          <Divider flexItem orientation="horizontal" sx={{ mx: 0.5, my: 1 }} />

          <ButtonGroup>
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
                  ref={fileInput}
                  onChange={handleFileSelect}
                />
                <AddPhotoAlternateIcon />
              </ToggleButton>
            </Tooltip>
          </ButtonGroup>
        </div>
      </div>

      <ImageCarousel
        selectedImage={selectedImagePath}
        imagePaths={{ defaultImages: defaultImages, userImages: userImages }}
        onImageSelect={handleImageSelect}
        onImageDelete={deleteUserImage}
        imageRowRef={imageRowRef}
      />
    </BaseWindow>
  );
}

export type GalleryConfig = {
  type: WindowType.Positioning;
};

export const positioningWindowConfig: WindowConfig = {
  getInitialState: () => ({
    type: WindowType.Positioning,
  }),
  getDefaultLayout: () => ({
    xs: {
      w: 6,
      h: 8,
      x: 0,
      y: 24,
      minW: 6,
      minH: 6,
    },
    sm: {
      w: 4,
      h: 4,
      x: 0,
      y: 24,
      minW: 2,
      minH: 8,
    },
    md: {
      w: 14,
      h: 7,
      x: 0,
      y: 24,
      minW: 10,
      minH: 6,
    },
    lg: {
      w: 24,
      h: 8,
      x: 0,
      y: 24,
      minW: 18,
      minH: 8,
    },
  }),
  Component: ({ id }) => <Positioning id={id} title="Positionierung" />,
};
