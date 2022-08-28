import BaseWindow from "../BaseWindow/BaseWindow";
import React, { Component } from "react";
import {
  Stage,
  Layer,
  Rect,
  Text,
  Image,
  Line,
  Transformer,
} from "react-konva";
import useImage from "use-image"; // Konva-specific image hook

// UI

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal";

// CSS
import "./Whiteboard.scss";

function Rectangle({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  isDraggable,
}) {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable={isDraggable}
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
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
          ref={trRef}
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

const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: "red",
    id: "rect1",
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    fill: "green",
    id: "rect2",
  },
];

// function TestImage({ url }) {
//   const [image] = useImage(url);
//   return <Image image={image} />;
// }

function UserImage({
  imageProps,
  isSelected,
  onSelect,
  onChange,
  isDraggable,
}) {
  const imageRef = React.useRef();
  const imgTransformerRef = React.useRef();
  const [image] = useImage(imageProps.url);

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      imgTransformerRef.current.nodes([imageRef.current]);
      imgTransformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);
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
          // transformer is changing scale of the node
          // and NOT its width or height
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

const initialImages = [
  {
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    url: "https://konvajs.org/assets/lion.png",
    id: "lion",
  },
];

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

  const [rectangles, setRectangles] = React.useState(initialRectangles);
  const [selectedId, selectShape] = React.useState(null);

  const [images, setImages] = React.useState(initialImages);
  const [selectedImageId, selectImage] = React.useState(null);

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

    console.log(images);
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
    // no drawing - skipping
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
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
      selectImage(null);
    }
  };

  const onImageChange = (e) => {
    const [file] = e.target.files;
    const url = URL.createObjectURL(file);
    setImages([
      ...images,
      { id: url.toString(), url: url, x: 100, y: 100, width: 150, height: 150 },
    ]);
    console.log(images);
  };

  return (
    <BaseWindow id={id} title={title} onReset={handleReset} onHide={handleHide}>
      <div id="stage-parent">
        <select
          value={tool}
          onChange={(e) => {
            setTool(e.target.value);
          }}
        >
          <option value="select">Select</option>
          <option value="draw">Pen</option>
          <option value="erase">Eraser</option>
        </select>
      </div>

      <div>
        <input type="file" onChange={onImageChange} />
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
        <Layer id="rectangles">
          {rectangles.map((rect, i) => {
            return (
              <Rectangle
                key={i}
                shapeProps={rect}
                isDraggable={tool == "select"}
                isSelected={tool == "select" && rect.id === selectedId}
                onSelect={() => {
                  tool == "select" ? selectShape(rect.id) : false;
                }}
                onChange={(newAttrs) => {
                  const rects = rectangles.slice();
                  rects[i] = newAttrs;
                  setRectangles(rects);
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
              stroke="#df4b26"
              strokeWidth={5}
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
