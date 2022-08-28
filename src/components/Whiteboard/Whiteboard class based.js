import BaseWindow from "../BaseWindow/BaseWindow";
import React, { Component } from "react";
import { Stage, Layer, Rect, Text, Image } from "react-konva";

import "./Whiteboard.scss";

let history = [
  {
    x: 20,
    y: 20,
  },
];
let historyStep = 0;

export default class Whiteboard extends Component {
  constructor({ id, title, visible, onHide, onChange, onSave, onLoad }) {
    super(id, title, visible, onHide, onChange, onSave, onLoad);
    this.handleReset = this.handleReset.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.isDrawing = React.createRef(false);

    this.state = {
      position: history[0],
      tool: "pen",
      lines: [],
      isDrawing: this.isDrawing,
    };
  }

  handleReset() {}
  handleHide() {
    onHide(this.id);
  }

  handleUndo = () => {
    if (historyStep === 0) {
      return;
    }
    historyStep -= 1;
    const previous = history[historyStep];
    this.setState({
      position: previous,
    });
  };

  handleRedo = () => {
    if (historyStep === history.length - 1) {
      return;
    }
    historyStep += 1;
    const next = history[historyStep];
    this.setState({
      position: next,
    });
  };

  handleDragEnd = (e) => {
    history = history.slice(0, historyStep + 1);
    const pos = {
      x: e.target.x(),
      y: e.target.y(),
    };
    history = history.concat([pos]);
    historyStep += 1;
    this.setState({
      position: pos,
    });
  };

  setTool(tool) {
    this.setState({ tool: tool });
  }
  handleMouseDown = (e) => {
    this.isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  handleMouseMove = (e) => {
    // no drawing - skipping
    if (!this.isDrawing.current) {
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

  handleMouseUp = () => {
    this.isDrawing.current = false;
  };

  render() {
    return (
      <BaseWindow
        id={this.id}
        title={this.title}
        onReset={this.handleReset}
        onHide={this.handleHide}
      >
        <div id="stage-parent">
          <Stage
            width={window.innerWidth}
            height={window.innerHeight}
            onMouseDown={this.handleMouseDown}
            onMousemove={this.handleMouseMove}
            onMouseup={this.handleMouseUp}
          >
            <Layer>
              {this.state.lines.map((line, i) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke="#df4b26"
                  strokeWidth={5}
                  tension={0.5}
                  lineCap="round"
                  lineJoin="round"
                  globalCompositeOperation={
                    line.tool === "eraser" ? "destination-out" : "source-over"
                  }
                />
              ))}
            </Layer>
            <Layer>
              <Text text="undo" onClick={this.handleUndo} />
              <Text text="redo" x={40} onClick={this.handleRedo} />
              <Rect
                x={this.state.position.x}
                y={this.state.position.y}
                width={50}
                height={50}
                fill="black"
                draggable
                onDragEnd={this.handleDragEnd}
              />
            </Layer>
          </Stage>
          <select
            value={this.state.tool}
            onChange={(e) => {
              setTool(e.target.value);
            }}
          >
            <option value="pen">Pen</option>
            <option value="eraser">Eraser</option>
          </select>
        </div>
      </BaseWindow>
    );
  }
}
