import React from "react";
import p5 from "p5";

// UI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";

//Icons
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

import BaseWindow from "../BaseWindow/BaseWindow";

import "./Whiteboard.css";

export default class Whiteboard extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.handleHide = this.handleHide.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = { update: 0 };
  }

  handleReset() {
    return true;
  }

  handleHide() {
    props.onHide(id);
  }

  Sketch = (p) => {
    const colorInput = document.getElementById("whiteboard-color");
    const weight = document.getElementById("whiteboard-weight");
    const clear = document.getElementById("whiteboard-reset");
    const download = document.getElementById("whiteboard-download");
    const undo = document.getElementById("whiteboard-undo");
    const redo = document.getElementById("whiteboard-redo");
    let paths = [];
    let currentPath = [];
    let history = [];

    p.setup = () => {
      let canvasWidth = document.getElementById("p5-container").clientWidth;
      let canvasHeight = document.getElementById("p5-container").clientHeight;

      const c = p.createCanvas(800, 600);
      p.background(255);
      c.mousePressed(handleMousePressed);

      download.addEventListener("click", () => {
        p.saveCanvas(c, "ScreenarioSkizze", "jpg");
      });
    };

    p.draw = () => {
      p.noFill();
      if (p.mouseIsPressed && p.mouseX >= 0 && p.mouseY >= 0) {
        const point = {
          x: p.mouseX,
          y: p.mouseY,
          color: colorInput.value,
          weight: weight.value,
        };
        currentPath.push(point);
      }

      paths.forEach((path) => {
        p.beginShape();
        path.forEach((point) => {
          p.stroke(point.color);
          p.strokeWeight(point.weight);
          p.vertex(point.x, point.y);
        });
        p.endShape();
      });
    };

    function handleMousePressed() {
      currentPath = [];
      paths.push(currentPath);
    }

    clear.addEventListener("click", () => {
      paths.splice(0);
      p.background(255);
      history = [];
    });

    undo.addEventListener("click", () => {
      const lastPath = paths[paths.length - 1];
      if (lastPath) {
        p.background(255);
        history.push(lastPath);
        paths.pop();
      }
    });

    redo.addEventListener("click", () => {
      const lastPath = history[history.length - 1];
      if (lastPath) {
        p.background(255);
        paths.push(lastPath);
        history.pop();
        console.log("redo. history & paths :");
      }
    });
  };

  componentDidMount() {
    // create a new p5 object on component mount, feed it
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      <BaseWindow
        id="whiteboard"
        title="Whiteboard"
        onReset={this.handleReset}
        onHide={this.handleHide}
      >
        <div id="whiteboard-wrapper">
          <div className="sidebar">
            <IconButton aria-label="undo" id="whiteboard-undo" color="primary">
              <UndoIcon />
            </IconButton>
            <IconButton aria-label="redo" id="whiteboard-redo" color="primary">
              <RedoIcon />
            </IconButton>

            <label htmlFor="color">Color:</label>
            <input type="color" id="whiteboard-color" />
            <label htmlFor="weight">Stroke:</label>
            <input
              type="range"
              id="whiteboard-weight"
              min="2"
              max="20"
              defaultValue="3"
            />

            <IconButton
              aria-label="download"
              id="whiteboard-download"
              color="primary"
            >
              <DownloadIcon />
            </IconButton>
          </div>

          <div id="p5-container" ref={this.myRef}></div>
        </div>
      </BaseWindow>
    );
  }
}
