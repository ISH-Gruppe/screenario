import React, { useState } from "react";

import CountdownTimer from "../CountdownTimer";
import QrcodeGenerator from "../QrcodeGenerator/QrcodeGenerator";
import ExampleNotepad from "../ExampleNotepad/ExampleNotepad";

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

export default function WindowManager(props) {
  const defaultState = {
    "work-phase": { visible: false, content: {} },
    "example-notepad": { visible: true, content: { text: "Test" } },
    "timer": { visible: false, content: {} },
    "random-generator": { visible: false, content: {} },
    "notepad": { visible: false, content: {} },
    "whiteboard": { visible: false, content: {} },
    "soundboard": { visible: false, content: {} },
    "qrcode-generator": { visible: false, content: {} },
    "stuhlkreis": { visible: false, content: {} },
  };

  const [windows, setWindows] = useState(defaultState);

  function handleChange(windowId, content) {
    const currentVisibility = windows[windowId].visible;
    setWindows({
      ...windows,
      [windowId]: { visible: currentVisibility, content: content },
    });
  }

  function handleReset(windowId) {
    handleChange(windowId, defaultState[windowId].content);
  }

  function handleHide(windowId) {
    setWindows({
      ...windows,
      [windowId]: { visible: false, content: windows[windowId].content },
    });

    // we might need to add "content" here too
    console.log(windowId + " hidden");
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  // TODO: This needs further configuration!
  // Not sure if we benefit from user Gridlayout ResponsiveGridLayout.
  // The one thing we do need is a responsive width provider like "WidthProvider(Responsive)"
  const layout = [
    { i: "work-phase", x: 1, y: 0, w: 3, h: 2, minW: 4, maxH: 4 },
    { i: "example-notepad", x: 4, y: 2, w: 10, h: 2, minW: 8, maxH: 4 },
    { i: "timer", x: 0, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
    { i: "random-generator", x: 1, y: 0, w: 3, h: 2, minW: 4, maxH: 4 },
    { i: "notepad", x: 1, y: 0, w: 3, h: 2, minW: 4, maxH: 4 },
    { i: "whiteboard", x: 1, y: 0, w: 3, h: 2, minW: 4, maxH: 4 },
    { i: "soundboard", x: 1, y: 0, w: 3, h: 2, minW: 4, maxH: 4 },
    { i: "qrcode-generator", x: 1, y: 0, w: 3, h: 2, minW: 4, maxH: 4 },
    { i: "stuhlkreis", x: 1, y: 0, w: 3, h: 2, minW: 4, maxH: 4 },
  ];

  const ResponsiveGridLayout = WidthProvider(Responsive);
  return (
    <ResponsiveGridLayout
      className="layout"
      layout={layout}
      rowHeight={30}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key="timer">
        <CountdownTimer expiryTimestamp={time} />
      </div>
      <div key="qrcode-generator">
        <QrcodeGenerator />
      </div>
      <div key="stuhlkreis">
        <digitaler-stuhlkreis />
      </div>
      <div key="example-notepad">
        <ExampleNotepad
          id="example-notepad"
          visible={windows["example-notepad"].visible}
          content={windows["example-notepad"].content}
          onReset={handleReset}
          onHide={handleHide}
          onChange={handleChange}
        />
      </div>
    </ResponsiveGridLayout>
  );
}
