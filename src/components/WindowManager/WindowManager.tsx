import React from "react";

import Welcome from "../Modals/Welcome/Welcome";
import Toolbar from "../Toolbar/Toolbar";

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
  const defaultLayout: Layouts = {};

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

  const [windows] = React.useState({});

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
