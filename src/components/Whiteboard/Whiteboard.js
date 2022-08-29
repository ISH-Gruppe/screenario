import BaseWindow from "../BaseWindow/BaseWindow";
import React, { Component } from "react";
import { Stage, Layer, Text, Image, Line, Transformer } from "react-konva";
import useImage from "use-image"; // Konva-specific image hook

// UI
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import DeleteIcon from "@mui/icons-material/Delete";

import PanToolAltIcon from "@mui/icons-material/PanToolAlt"; // Select
import BrushIcon from "@mui/icons-material/Brush"; // Brush
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal"; // Eraser

import ClearIcon from "@mui/icons-material/Clear"; // Clear Whiteboard
import GetAppIcon from "@mui/icons-material/GetApp"; // Download Canvas
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto"; // Upload Photo

// CSS
import "./Whiteboard.scss";

function UserImage({
  imageProps,
  isSelected,
  onSelect,
  onChange,
  isDraggable,
  maxWidth,
  maxHeight,
}) {
  const imageRef = React.useRef();
  const imgTransformerRef = React.useRef();
  const [image, status] = useImage(imageProps.url);

  setImageSize(); // Putting this here kinda doesn’t seem right?

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      imgTransformerRef.current.nodes([imageRef.current]);
      imgTransformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  function setImageSize() {
    if (status == "loaded") {
      const ratio = image.width / image.height;
      if (ratio > 1) {
        image.height = maxHeight;
        image.width = maxHeight * ratio;
      } else {
        image.width = maxWidth;
        image.height = maxWidth / ratio;
      }
    }
  }

  return (
    <React.Fragment>
      <Image
        image={image}
        onClick={onSelect}
        onTap={onSelect}
        {...imageProps}
        ref={imageRef}
        draggable={isDraggable}
        onDragEnd={(e) => {
          onChange({
            ...imageProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // Transformer is changing scale of the node and not its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = imageRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...imageProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={imgTransformerRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
}
//
// const initialImages = [
//   {
//     x: 100,
//     y: 100,
//     width: 200,
//     height: 200,
//     url: "https://konvajs.org/assets/lion.png",
//     id: "lion",
//   },
// ];

export default function Whiteboard({
  id,
  title,
  visible,
  onHide,
  onChange,
  onSave,
  onLoad,
}) {
  const [tool, setTool] = React.useState("draw");
  const [lines, setLines] = React.useState([]);
  const isDrawing = React.useRef(false);

  const [images, setImages] = React.useState([]);
  const [selectedImageId, selectImage] = React.useState(null);

  const fileInput = React.useRef();

  // Base Window functions
  function handleReset() {}
  function handleHide() {
    onHide(id);
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
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
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
  };

  return (
    <BaseWindow id={id} title={title} onReset={handleReset} onHide={handleHide}>
      <div id="whiteboard-toolbar">
        <ToggleButtonGroup
          id="left-side-tools"
          exclusive
          value={tool}
          onChange={(e, value) => {
            setTool(value);
          }}
        >
          <ToggleButton color="primary" value="select">
            <PanToolAltIcon />
          </ToggleButton>
          <ToggleButton color="primary" value="draw">
            <BrushIcon />
          </ToggleButton>
          <ToggleButton color="primary" value="erase">
            <AutoFixNormalIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <ButtonGroup
          id="right-side-tools"
          variant="text"
          color="primary"
          aria-label="primary button group"
        >
          <Button aria-label="upload picture" component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              ref={fileInput}
              onChange={onImageChange}
            />
            <InsertPhotoIcon />
          </Button>
          <Button aria-label="Canvas herunterladen" component="label">
            <GetAppIcon />
          </Button>
        </ButtonGroup>
      </div>

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
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
                  console.log();
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
              stroke="#000000"
              strokeWidth={6}
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
    </BaseWindow>
  );
}
