import BaseWindow from "../BaseWindow/BaseWindow";
import React from "react";
import { Layer, Line, Stage } from "react-konva";

// UI
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useConfirm } from "material-ui-confirm";

import ColorPalette from "./ColorPalette";
import BrushPicker from "./BrushPicker";
import UserImage from "./UserImage";

// Icons
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

import PanToolAltIcon from "@mui/icons-material/PanToolAlt"; // Select
import BrushIcon from "@mui/icons-material/Brush"; // Brush
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal"; // Eraser
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"; // Upload Photo
import HideImageIcon from "@mui/icons-material/HideImage";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

// CSS
import "./Whiteboard.scss";
import { WindowType } from "../WindowManager/window-management-slice";

export default function Whiteboard({ id, title }) {
  const [tool, setTool] = React.useState("draw");
  const [lines, setLines] = React.useState([]);
  const [history, setHistory] = React.useState([]);
  const isDrawing = React.useRef(false);

  const [images, setImages] = React.useState([]);
  const [selectedImageId, selectImage] = React.useState(null);

  const [selectedColor, selectColor] = React.useState({
    id: "Schwarz",
    value: "black",
  });
  const [selectedBrush, selectBrush] = React.useState({
    id: "Mittel",
    size: 6,
  });

  const fileInput = React.useRef();
  const confirm = useConfirm();

  React.useEffect(() => {
    calculateCanvasSize();
  }, []);

  // Base Window functions
  function handleReset() {
    confirm({
      title: "Whiteboard zurücksetzen",
      description: "Soll der Inhalt wirklich gelöscht werden?",
      cancellationText: "Abbrechen",
    })
      .then(() => {
        setLines([]);
      })
      .catch(() => {});
  }

  // Basic handlers, used by all tools
  const handleMouseDown = (e) => {
    if (tool == "draw" || tool == "erase") {
      startDrawing(e);
    } else if (tool == "select") {
      checkDeselect(e);
    }
  };

  const handleMouseMove = (e) => {
    if (tool == "draw" || tool == "erase") {
      drawLine(e);
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  // Drawing & Erasing
  const startDrawing = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([
      ...lines,
      {
        tool,
        color: selectedColor.value,
        brush: selectedBrush.size,
        points: [pos.x, pos.y],
      },
    ]);
  };

  const drawLine = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];

    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  function setBrushColor(color) {
    selectColor(color);
  }

  function changeBrush(brush) {
    selectBrush(brush);
  }

  function undo() {
    const linesCopy = [...lines];

    if (linesCopy.length) {
      setHistory([...history, linesCopy.pop()]);
      setLines([...linesCopy]);
    }
  }

  function redo() {
    const historyCopy = [...history];

    if (history.length) {
      setLines([...lines, historyCopy.pop()]);
      setHistory([...historyCopy]);
    }
  }

  // Images
  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectImage(null);
    }
  };

  const onImageChange = (e) => {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    setImages([...images, { id: url.toString(), url: url, x: 50, y: 50 }]);
    fileInput.current.value = "";
    setTool(["select"]);
  };

  function handleStageWrapperKeyDown(event) {
    // keyCode 8 = Backspace
    // keyCode 46 = Delete
    if (event.keyCode === 8 || event.keyCode === 46) {
      deleteSelectedImage();
    } else {
      return;
    }
    event.preventDefault();
  }

  function deleteSelectedImage() {
    const imagesCopy = [...images];
    imagesCopy.map((image, index) => {
      image.id == selectedImageId ? imagesCopy.splice(index, 1) : true;
    });

    setImages(imagesCopy);
  }

  // Canvas

  const [canvasHeight, setCanvasHeight] = React.useState(window.innerHeight);
  const [canvasWidth, setCanvasWidth] = React.useState(window.innerWidth);

  function calculateCanvasSize() {
    const wrapper = document.getElementById("content-container-whiteboard");
    let width, height;

    if (wrapper) {
      height = wrapper.getBoundingClientRect().width;
      width = wrapper.getBoundingClientRect().height;
    } else {
      height = window.innerWidth;
      width = window.innerHeight;
    }

    setCanvasHeight(height);
    setCanvasWidth(width);
  }

  return (
    <BaseWindow id={id} title={title}>
      <div id="whiteboard-toolbar">
        <Tooltip title="Whiteboard zurücksetzen">
          <Button onClick={handleReset} color="primary" value="clear">
            <CancelPresentationIcon />
          </Button>
        </Tooltip>
        <div>
          <Tooltip title="Rückgängig">
            <ToggleButton
              onClick={undo}
              aria-label="Rückgängig"
              component="label"
              value=""
            >
              <UndoIcon />
            </ToggleButton>
          </Tooltip>
          <Tooltip title="Wiederholen">
            <ToggleButton
              onClick={redo}
              aria-label="Wiederholen"
              component="label"
              value=""
            >
              <RedoIcon />
            </ToggleButton>
          </Tooltip>
        </div>
        <ToggleButtonGroup
          id="left-side-tools"
          exclusive
          value={tool}
          onChange={(e, value) => {
            setTool(value);
          }}
        >
          <Tooltip title="Auswählen" value="select">
            <ToggleButton color="primary" value="select">
              <PanToolAltIcon />
            </ToggleButton>
          </Tooltip>

          <Tooltip title="Pinsel" value="draw">
            <ToggleButton color="primary" value="draw">
              <BrushIcon />
            </ToggleButton>
          </Tooltip>
          <Tooltip value="erase" title="Radiergummi">
            <ToggleButton color="primary" value="erase">
              <AutoFixNormalIcon />
            </ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
        <div>
          <ColorPalette
            onClick={setBrushColor}
            selectedColor={selectedColor}
            palette={[
              { id: "Schwarz", value: "black" },
              { id: "Grün", value: "green" },
              { id: "Rot", value: "firebrick" },
              { id: "Blau", value: "blue" },
              { id: "Gelb", value: "gold" },
            ]}
          />
        </div>
        <div>
          <BrushPicker
            onClick={changeBrush}
            selectedBrush={selectedBrush}
            brushes={[
              { id: "Klein", size: 5 },
              { id: "Mittel", size: 8 },
              { id: "Groß", size: 12 },
              { id: "Sehr groß", size: 20 },
            ]}
          />
        </div>
        <ButtonGroup
          id="right-side-tools"
          variant="text"
          size="large"
          color="primary"
          aria-label="primary button group"
        >
          <Tooltip title="Lokales Bild einfügen">
            <ToggleButton
              aria-label="upload picture"
              component="label"
              value=""
            >
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
        {/*
        <Tooltip title="Zeichnung herunterladen">
          <Button aria-label="Zeichnung herunterladen" component="label">
            <GetAppIcon />
          </Button>
        </Tooltip>
        */}
      </div>
      <div
        id="stage-wrapper"
        className={selectedBrush.size > 8 ? "large-brush" : "small-brush"}
        tabIndex={1}
        onKeyDown={handleStageWrapperKeyDown}
      >
        <Stage
          width={window.innerWidth * 0.95}
          height={window.innerHeight * 0.8}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
          onTouchStart={handleMouseDown}
        >
          <Layer id="images">
            {images.map((image, i) => {
              return (
                <UserImage
                  key={i}
                  imageProps={image}
                  maxWidth={300}
                  maxHeight={300}
                  isDraggable={tool == "select"}
                  isSelected={tool == "select" && image.id === selectedImageId}
                  onSelect={() => {
                    tool == "select" ? selectImage(image.id) : false;
                  }}
                  onChange={(newAttributes) => {
                    const imgs = images.slice();
                    imgs[i] = newAttributes;
                    setImages(imgs);
                  }}
                />
              );
            })}
          </Layer>
          <Layer id="drawing">
            {lines.map((line, i) => (
              <Line
                key={i}
                points={line.points}
                stroke={line.color}
                strokeWidth={line.tool == "erase" ? line.brush + 5 : line.brush}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                globalCompositeOperation={
                  line.tool === "erase" ? "destination-out" : "source-over"
                }
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </BaseWindow>
  );
}

/**
 * @type {import("../WindowManager/window-management-slice").WindowConfig}
 */
export const whiteboardWindowConfig = {
  getInitialState: () => ({
    type: WindowType.Whiteboard,
  }),
  Component: ({ id }) => <Whiteboard id={id} title="Whiteboard" />,
  defaultLayout: {
    xs: {
      w: 6,
      h: 8,
      x: 0,
      y: 15,
      minW: 6,
    },
    sm: {
      w: 4,
      h: 4,
      y: 0,
      x: 0,
      minW: 4,
    },
    md: {
      w: 16,
      h: 8,
      x: 0,
      y: 24,
      minW: 14,
      minH: 8,
    },
    lg: {
      w: 20,
      h: 8,
      x: 0,
      y: 16,
      minW: 18,
      minH: 8,
    },
  },
};
