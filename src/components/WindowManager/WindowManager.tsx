import React from "react";

import Welcome from "../Modals/Welcome/Welcome";
import Toolbar from "../Toolbar/Toolbar";
import Notepad from "../Notepad/Notepad";
import WorkPhase from "../WorkPhase/WorkPhase";

import "./WindowManager.css";

// 3rd party dependencies
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import { Layout, Layouts, Responsive, WidthProvider } from "react-grid-layout";
import { useDispatch, useSelector } from "react-redux";
import {
  windowConfigs,
  windowManagementActions,
} from "./window-management-slice";
import { AppState } from "../../app-state";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function WindowManager() {
  const appState = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const defaultLayout: Layouts = {
    xs: [
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

  // const originalLayouts =
  //   readLayoutFromLocalStorage("layouts") || defaultLayout;

  const layouts = appState.windowManagement.windows.reduce(
    (layouts, window) => {
      if (window.isOpen) {
        const baseLayout = {
          i: window.id,
        };
        layouts.xs.push({
          ...baseLayout,
          ...window.layouts.xs,
        });
        layouts.sm.push({
          ...baseLayout,
          ...window.layouts.sm,
        });
        layouts.md.push({
          ...baseLayout,
          ...window.layouts.md,
        });
        layouts.lg.push({
          ...baseLayout,
          ...window.layouts.lg,
        });
      }
      return layouts;
    },
    { xs: [], sm: [], md: [], lg: [] } as Layouts
  );

  console.log({ derivedLayouts: layouts });

  const [windows] = React.useState({
    "work-phase": {
      key: "work-phase",
      open: false,
      content: (
        <WorkPhase
          id="work-phase"
          title="Arbeits- und Pausenphasen"
          onHide={handleWindowHide}
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
          onHide={handleWindowHide}
          onSave={saveToLocalStorage}
          onLoad={readFromLocalStorage}
        />
      ),
    },
  });

  function handleResizeEnd() {}

  function handleResizeStart() {}

  function handleResize() {
    // TODO perhaps reflect in state
  }

  const onLayoutChange = (layout: Layout[], layouts: Layouts) => {
    // TODO: Fix! Temporarily removed
    // saveLayoutToLocalStorage("layouts", layouts);
    dispatch(windowManagementActions.setLayouts(layouts));
    // layoutChanged = layouts;
  };

  function handleWindowHide(windowId: string) {
    dispatch(windowManagementActions.closeWindow(windowId));
  }

  function readFromLocalStorage(key: string) {
    let ls = {};
    if (global.localStorage) {
      try {
        ls = JSON.parse(global.localStorage.getItem(key) ?? "undefined");
        // console.log("readFromLocalStorage", ls);
      } catch (e) {
        /*Ignore*/
      }
    }
    return ls;
  }

  function saveToLocalStorage(key: string, value: unknown) {
    if (global.localStorage) {
      global.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  const getOpenWindows = () => {
    let openWindowsArray = Object.values(windows).map((window) =>
      window.open ? <div key={window.key}> {window.content} </div> : null
    );

    return openWindowsArray;
  };

  return (
    <div>
      <Welcome />

      <Toolbar />

      <ResponsiveReactGridLayout
        className="layout"
        draggableHandle=".drag-handle"
        breakpoints={{ lg: 1600, md: 1200, sm: 768 }}
        cols={{ lg: 48, md: 24, sm: 2 }}
        rowHeight={75}
        layouts={layouts}
        onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
        onResizeStop={() => handleResizeEnd()}
        onResizeStart={() => handleResizeStart()}
        onResize={() => handleResize()}
      >
        {getOpenWindows()}
        {appState.windowManagement.windows.flatMap((window) => {
          const Component = windowConfigs[window.state.type].Component;
          return window.isOpen
            ? [
                <div key={window.id}>
                  <Component id={window.id} />
                </div>,
              ]
            : [];
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
}
