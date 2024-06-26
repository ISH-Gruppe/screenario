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
  const windows = useSelector(
    (state: AppState) => state.windowManagement.windows
  );
  const dispatch = useDispatch();

  const layouts = windows.reduce(
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

  function handleResizeEnd() {}

  function handleResizeStart() {}

  function handleResize() {
    // TODO perhaps reflect in state
  }

  const onLayoutChange = (layout: Layout[], layouts: Layouts) => {
    // TODO: Fix! Temporarily removed
    dispatch(windowManagementActions.setLayouts(layouts));
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
        {windows.flatMap((window) => {
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
