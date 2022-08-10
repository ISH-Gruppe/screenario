import React, { useState } from "react";

import Timer from "../Timer/Timer";
import Notepad from "../Notepad/Notepad";
import Toolbar from "../Toolbar/Toolbar";

import "./WindowManager.css";

import "../digitalerstuhlkreis/runtime-es2015.a4dadbc03350107420a4";
import "../digitalerstuhlkreis/runtime-es5.a4dadbc03350107420a4";
import "../digitalerstuhlkreis/polyfills-es2015.d9c8f3d13d7372708bac";
import "../digitalerstuhlkreis/polyfills-es5.dab0688ff17f3e0c4dfd";
import "../digitalerstuhlkreis/main-es2015.d43e95d8420d8bb39d2e";
import "../digitalerstuhlkreis/main-es5.d43e95d8420d8bb39d2e";
import "../digitalerstuhlkreis/styles.00f6a897faa5361a9828.css";

// 3rd party dependencies
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = readFromLocalStorage("layouts") || {};

export default class WindowManager extends React.PureComponent {
  static defaultLayout = {
    md: [
      { i: "work-phase", x: 0, y: 0, w: 3, h: 2, minW: 2 },
      {
        i: "example-notepad",
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        minW: 2,
      },
      { i: "timer", x: 0, y: 0, w: 2, h: 2 },
      {
        i: "random-generator",
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        minW: 2,
      },
      { i: "notepad", x: 0, y: 0, w: 2, h: 2, minW: 2 },
      { i: "whiteboard", x: 0, y: 0, w: 2, h: 2, minW: 2 },
      { i: "soundboard", x: 0, y: 0, w: 2, h: 2, minW: 2 },
      {
        i: "qrcode-generator",
        x: 3,
        y: 2,
        w: 4,
        h: 2,
        minW: 3,
      },
      { i: "stuhlkreis", x: 0, y: 0, w: 4, h: 20, minW: 4, minH: 10 },
    ],
  };

  constructor(props) {
    super(props);

    this.handleWindowHide = this.handleWindowHide.bind(this);
    this.handleWindowShow = this.handleWindowShow.bind(this);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      windows: {
        "stuhlkreis": {
          key: "stuhlkreis",
          open: true,
          content: <digitaler-stuhlkreis />,
        },
        "timer": {
          key: "timer",
          open: true,
          content: <Timer onHide={this.handleWindowHide} />,
        },
        "whiteboard": {
          key: "whiteboard",
          open: true,
          content: <div> whiteboard </div>,
        },
        "random-generator": {
          key: "random-generator",
          open: true,
          content: <div> random generator </div>,
        },
        "soundboard": {
          key: "soundboard",
          open: true,
          content: <div> soundboard </div>,
        },
        "qrcode-generator": {
          key: "qrcode-generator",
          open: true,
          content: <div> qrcode </div>,
        },
        "work-phase": {
          key: "work-phase",
          open: true,
          content: <div> work phase </div>,
        },
        "notepad": {
          key: "notepad",
          open: true,
          content: <div> notepad </div>,
        },
      },
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 150,
    };
  }

  resetLayout() {
    this.setState({ layouts: this.defaultLayout });
  }

  onLayoutChange(layout, layouts) {
    saveToLocalStorage("layouts", layouts);
    this.setState({ layouts });
  }

  handleWindowHide(windowId) {
    this.setState({
      windows: {
        ...this.state.windows,
        [windowId]: { ...this.state.windows[windowId], open: false },
      },
    });
  }
  handleWindowShow(windowId) {
    this.setState({
      windows: {
        ...this.state.windows,
        [windowId]: { ...this.state.windows[windowId], open: true },
      },
    });
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
        <Toolbar
          onWindowShow={this.handleWindowShow}
          onWindowHide={this.handleWindowHide}
          windows={this.state.windows}
        />

        <button onClick={() => this.resetLayout()}>Fenster ordnen</button>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={150}
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

function readFromLocalStorage(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLocalStorage(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      })
    );
  }
}
