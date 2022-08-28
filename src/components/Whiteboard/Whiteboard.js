import BaseWindow from "../BaseWindow/BaseWindow";
import React, { Component } from "react";
import { Stage, Layer, Rect, Text, Image, Line } from "react-konva";

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

  // rectangle
  let history = [
    {
      x: 20,
      y: 20,
    },
  ];

  let historyStep = 0;

  const [position, setPosition] = React.useState(history[0]);
  function handleReset() {}
  function handleHide() {
    onHide(id);
  }

  const handleUndo = () => {
    if (historyStep === 0) {
      return;
    }
    historyStep -= 1;
    const previous = history[historyStep];
    setPosition({
      previous,
    });
  };

  const handleRedo = () => {
    if (historyStep === history.length - 1) {
      return;
    }
    historyStep += 1;
    const next = history[historyStep];
    setPosition({ next });
  };

  const handleDragEnd = (e) => {
    history = history.slice(0, historyStep + 1);
    const pos = {
      x: e.target.x(),
      y: e.target.y(),
    };
    history = history.concat([pos]);
    historyStep += 1;
    setPosition({ pos });
  };

  const handleMouseDown = (e) => {
    console.log("tool", tool);
    if (tool == "draw" || tool == "erase") {
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { tool, points: [pos.x, pos.y] }]);
      console.log("lines", lines);
    }
  };

  const handleMouseMove = (e) => {
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

  const handleMouseUp = () => {
    isDrawing.current = false;
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

      <IconButton onClick={handleUndo}>
        <UndoIcon />
      </IconButton>
      <IconButton onClick={handleRedo}>
        <RedoIcon />
      </IconButton>

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer id="images">
          <Rect
            x={position.x}
            y={position.y}
            width={50}
            height={50}
            fill="black"
            draggable={tool == "select" ? true : false}
            onDragEnd={handleDragEnd}
          />
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
