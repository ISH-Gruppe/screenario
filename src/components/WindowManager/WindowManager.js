import React, { useState } from "react";

import Welcome from "../Modals/Welcome/Welcome";
import Timer from "../Timer/Timer";
import Toolbar from "../Toolbar/Toolbar";
import Notepad from "../Notepad/Notepad";
import WorkPhase from "../WorkPhase/WorkPhase";
import QrcodeGenerator from "../QrcodeGenerator/QrcodeGenerator";
import Soundboard from "../Soundboard/Soundboard";
import Whiteboard from "../Whiteboard/Whiteboard";
import Gallery from "../Gallery/Gallery";
import DigitalerStuhlkreisWrapper from "../DigitalerStuhlkreisWrapper/DigitalerStuhlkreisWrapper";

import "./WindowManager.css";

// 3rd party dependencies
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import RandomGenerator from "../RandomGenerator/RandomGenerator";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class WindowManager extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleWindowHide = this.handleWindowHide.bind(this);
    this.handleWindowShow = this.handleWindowShow.bind(this);

    this.defaultLayout = {
      xs: [
        {
          w: 4,
          h: 4,
          x: 0,
          y: 7,
          i: "stuhlkreis",
          minW: 4,
          minH: 4,
          moved: false,
          static: false,
        },
        {
          w: 2,
          h: 2,
          x: 0,
          y: 0,
          minW: 2,
          minH: 2,
          i: "timer",
          moved: false,
          static: false,
        },
        {
          w: 6,
          h: 8,
          x: 0,
          y: 15,
          i: "whiteboard",
          minW: 6,
          moved: false,
          static: false,
        },
        {
          w: 6,
          h: 8,
          x: 0,
          y: 24,
          i: "gallery",
          minW: 6,
          minH: 6,
          moved: false,
          static: false,
        },
        {
          w: 4,
          h: 5,
          x: 0,
          y: 2,
          i: "random-generator",
          minW: 2,
          moved: false,
          static: false,
        },
        {
          w: 4,
          h: 3,
          x: 0,
          y: 21,
          i: "soundboard",
          minW: 2,
          moved: false,
          static: false,
        },
        {
          w: 3,
          h: 4,
          x: 0,
          y: 24,
          i: "qrcode-generator",
          minW: 3,
          moved: false,
          static: false,
        },
        {
          w: 4,
          h: 4,
          x: 0,
          y: 11,
          i: "work-phase",
          minW: 2,
          moved: false,
          static: false,
        },
        {
          w: 4,
          h: 3,
          x: 0,
          y: 18,
          i: "notepad",
          minW: 2,
          moved: false,
          static: false,
        },
      ],
      sm: [
        {
          w: 2,
          h: 9,
          x: 0,
          y: 12,
          i: "stuhlkreis",
          minW: 4,
          minH: 4,
          moved: false,
          static: false,
        },
        { w: 2, h: 5, x: 0, y: 7, i: "timer", moved: false, static: false },
        {
          w: 4,
          h: 4,
          y: 0,
          x: 0,
          i: "whiteboard",
          minW: 4,
          moved: false,
          static: false,
        },
        {
          w: 4,
          h: 4,
          x: 0,
          y: 24,
          i: "gallery",
          minW: 2,
          minH: 8,
          moved: false,
          static: false,
        },
        {
          w: 2,
          h: 8,
          x: 0,
          y: 21,
          i: "random-generator",
          minW: 2,
          moved: false,
          static: false,
        },
        {
          w: 2,
          h: 5,
          x: 0,
          y: 42,
          i: "soundboard",
          minW: 2,
          moved: false,
          static: false,
        },
        {
          w: 2,
          h: 11,
          x: 0,
          y: 47,
          i: "qrcode-generator",
          minW: 3,
          moved: false,
          static: false,
        },
        {
          w: 2,
          h: 7,
          x: 0,
          y: 0,
          i: "work-phase",
          minW: 2,
          moved: false,
          static: false,
        },
        {
          w: 2,
          h: 5,
          x: 0,
          y: 29,
          i: "notepad",
          minW: 2,
          moved: false,
          static: false,
        },
      ],
      md: [
        {
          w: 14,
          h: 8,
          x: 10,
          y: 8,
          i: "stuhlkreis",
          minW: 14,
          minH: 8,
          moved: false,
          static: false,
        },
        {
          w: 12,
          h: 8,
          x: 12,
          y: 0,
          i: "timer",
          minW: 6,
          minH: 4,
          moved: false,
          static: false,
        },
        {
          w: 16,
          h: 8,
          x: 0,
          y: 24,
          i: "whiteboard",
          minW: 14,
          minH: 8,
          moved: false,
          static: false,
        },
        {
          w: 14,
          h: 7,
          x: 0,
          y: 24,
          i: "gallery",
          minW: 10,
          minH: 6,
          moved: false,
          static: false,
        },
        {
          w: 10,
          h: 8,
          x: 0,
          y: 8,
          i: "random-generator",
          minW: 10,
          minH: 8,
          moved: false,
          static: false,
        },
        {
          w: 6,
          h: 6,
          x: 0,
          y: 16,
          i: "soundboard",
          minW: 6,
          minH: 4,
          moved: false,
          static: false,
        },
        {
          w: 7,
          h: 6,
          x: 6,
          y: 16,
          i: "qrcode-generator",
          minW: 6,
          minH: 5,
          moved: false,
          static: false,
        },
        {
          w: 12,
          h: 8,
          x: 0,
          y: 0,
          i: "work-phase",
          minW: 12,
          minH: 6,
          moved: false,
          static: false,
        },
        {
          w: 10,
          h: 8,
          x: 14,
          y: 16,
          i: "notepad",
          minW: 6,
          minH: 4,
          moved: false,
          static: false,
        },
      ],
      lg: [
        {
          w: 16,
          h: 9,
          x: 32,
          y: 0,
          i: "stuhlkreis",
          minW: 10,
          minH: 8,
          moved: false,
          static: false,
        },
        {
          w: 14,
          h: 8,
          x: 18,
          y: 0,
          i: "timer",
          minW: 6,
          minH: 4,
          moved: false,
          static: false,
        },
        {
          w: 20,
          h: 8,
          x: 0,
          y: 16,
          i: "whiteboard",
          minW: 18,
          minH: 8,
          moved: false,
          static: false,
        },
        {
          w: 24,
          h: 8,
          x: 0,
          y: 24,
          i: "gallery",
          minW: 18,
          minH: 8,
          moved: false,
          static: false,
        },

        {
          w: 16,
          h: 8,
          x: 0,
          y: 8,
          i: "random-generator",
          minW: 10,
          minH: 8,
          moved: false,
          static: false,
        },
        {
          w: 8,
          h: 6,
          x: 26,
          y: 8,
          i: "soundboard",
          minW: 8,
          minH: 4,
          moved: false,
          static: false,
        },
        {
          w: 8,
          h: 6,
          x: 20,
          y: 8,
          i: "qrcode-generator",
          minW: 8,
          minH: 5,
          moved: false,
          static: false,
        },
        {
          w: 18,
          h: 8,
          x: 0,
          y: 0,
          i: "work-phase",
          minW: 12,
          minH: 6,
          moved: false,
          static: false,
        },
        {
          w: 16,
          h: 6,
          x: 32,
          y: 9,
          i: "notepad",
          minW: 8,
          minH: 4,
          moved: false,
          static: false,
        },
      ],
    };

    this.originalLayouts =
      readLayoutFromLocalStorage("layouts") || this.defaultLayout;

    this.state = {
      layouts: JSON.parse(JSON.stringify(this.originalLayouts)),
      windows: {
        "stuhlkreis": {
          key: "stuhlkreis",
          open: false,
          content: (
            <DigitalerStuhlkreisWrapper
              id="stuhlkreis"
              title="Digitaler Stuhlkreis"
              onHide={this.handleWindowHide}
            />
          ),
        },
        "timer": {
          key: "timer",
          open: false,
          content: (
            <Timer
              id="timer"
              title="Timer"
              onHide={this.handleWindowHide}
              onSave={this.saveToLocalStorage}
              onLoad={this.readFromLocalStorage}
            />
          ),
        },
        "whiteboard": {
          key: "whiteboard",
          open: false,
          content: (
            <Whiteboard
              id="whiteboard"
              title="Whiteboard"
              onHide={this.handleWindowHide}
              onSave={this.saveToLocalStorage}
              onLoad={this.readFromLocalStorage}
            />
          ),
        },
        "gallery": {
          key: "gallery",
          open: true,
          content: (
            <Gallery
              id="gallery"
              title="Galerie"
              onHide={this.handleWindowHide}
              onSave={this.saveToLocalStorage}
              onLoad={this.readFromLocalStorage}
            />
          ),
        },
        "random-generator": {
          key: "random-generator",
          open: false,
          content: (
            <RandomGenerator
              id="random-generator"
              title="Zufallsgenerator"
              onHide={this.handleWindowHide}
              onSave={this.saveToLocalStorage}
              onLoad={this.readFromLocalStorage}
            />
          ),
        },
        "soundboard": {
          key: "soundboard",
          open: false,
          content: (
            <Soundboard
              id="soundboard"
              title="Soundboard"
              onHide={this.handleWindowHide}
            />
          ),
        },
        "qrcode-generator": {
          key: "qrcode-generator",
          open: false,
          content: (
            <QrcodeGenerator
              id="qrcode-generator"
              title="QR-Code-Generator"
              onHide={this.handleWindowHide}
            />
          ),
        },
        "work-phase": {
          key: "work-phase",
          open: false,
          content: (
            <WorkPhase
              id="work-phase"
              title="Arbeits- und Pausenphasen"
              onHide={this.handleWindowHide}
            />
          ),
        },
        "notepad": {
          key: "notepad",
          open: false,
          content: (
            <Notepad
              id="notepad"
              title="Notepad"
              onHide={this.handleWindowHide}
              onSave={this.saveToLocalStorage}
              onLoad={this.readFromLocalStorage}
            />
          ),
        },
      },
    };
  }

  // static get defaultProps() {
  //   return {
  //     className: "layout",
  //     cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  //     rowHeight: 150,
  //   };
  // }

  resetLayout() {
    this.setState({ layouts: this.defaultLayout });
  }

  onLayoutChange(layout, layouts) {
    // TODO: Fix! Temporarily removed
    // saveLayoutToLocalStorage("layouts", layouts);
    this.setState({ layouts });
  }

  handleWindowHide(windowId) {
    // console.log("windowManager handleWindowHide", windowId);

    this.setState({
      windows: {
        ...this.state.windows,
        [windowId]: { ...this.state.windows[windowId], open: false },
      },
    });
  }
  handleWindowShow(windowId) {
    this.setState({
      layouts: this.originalLayouts,
      windows: {
        ...this.state.windows,
        [windowId]: { ...this.state.windows[windowId], open: true },
      },
    });
  }

  readFromLocalStorage(key) {
    let ls = {};
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem(key));
        // console.log("readFromLocalStorage", ls);
      } catch (e) {
        /*Ignore*/
      }
    }
    return ls;
  }

  saveToLocalStorage(key, value) {
    if (global.localStorage) {
      global.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  render() {
    const getOpenWindows = () => {
      let openWindowsArray = Object.values(this.state.windows)
        .filter((window) => window.open === true)
        .map((window) =>
          window.closed ? "" : <div key={window.key}> {window.content} </div>
        );

      return openWindowsArray;
    };

    return (
      <div>
        <Welcome
          onLoad={this.readFromLocalStorage}
          onSave={this.saveToLocalStorage}
        />

        <Toolbar
          onWindowShow={this.handleWindowShow}
          onWindowHide={this.handleWindowHide}
          windows={this.state.windows}
        />

        <ResponsiveReactGridLayout
          className="layout"
          draggableHandle=".drag-handle"
          breakpoints={{ lg: 1600, md: 1200, sm: 768 }}
          cols={{ lg: 48, md: 24, sm: 2 }}
          rowHeight={75}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          {getOpenWindows()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function readLayoutFromLocalStorage(key) {
  let ls = {};
  // if (global.localStorage) {
  try {
    ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
  } catch (e) {
    /*Ignore*/
  }
  // }
  return ls[key];
}

function saveLayoutToLocalStorage(key, value) {
  // if (global.localStorage) {
  global.localStorage.setItem(
    "rgl-8",
    JSON.stringify({
      [key]: value,
    })
  );
  // }
}
