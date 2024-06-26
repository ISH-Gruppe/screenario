import React from "react";

import Card from "@mui/material/Card";

import "./digitalerstuhlkreis/main-es2015";
import "./digitalerstuhlkreis/main-es5";
import "./digitalerstuhlkreis/polyfills-es2015";
import "./digitalerstuhlkreis/polyfills-es5";
import "./digitalerstuhlkreis/runtime-es2015";
import "./digitalerstuhlkreis/runtime-es5";
import "./digitalerstuhlkreis/styles.css";
import "./DigitalerStuhlkreisWrapper.scss";

import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  WindowConfig,
  windowManagementActions,
} from "../WindowManager/window-management-slice";
import { WindowType } from "../WindowManager/window-type";

/*
 * This component is an Angular project that is provided as a WebComponent
 * We do have to import a bunch of files that are not bundled as a single file
 * and whose name is thus subject to change, because of new hash values.
 *
 * This wrapper is a mere convenience function to remove the bunch of imports from the WindowManager.
 *
 * You can find the original project at https://digitaler-stuhlkreis.de
 */
export default function DigitalerStuhlkreisWrapper({ id }: { id: string }) {
  const dispatch = useDispatch();
  return (
    <Card className="StuhlkreisCard">
      <div id="DigitalerStuhlkreisWrapper" className="">
        <div className="dragable-bar drag-handle">
          <IconButton
            className="hideButton"
            onClick={() => dispatch(windowManagementActions.hideWindow(id))}
            aria-label="delete"
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </div>
        {/* @ts-ignore */}
        <digitaler-stuhlkreis />
      </div>
    </Card>
  );
}

export type StuhlkreisState = {
  type: WindowType.Stuhlkreis;
};

export const stuhlkreisWindowConfig: WindowConfig = {
  getInitialState: () => ({
    type: WindowType.Stuhlkreis,
  }),
  Component: ({ id }) => <DigitalerStuhlkreisWrapper id={id} />,
  getDefaultLayout: () => ({
    xs: {
      w: 4,
      h: 4,
      x: 0,
      y: 7,
      minW: 4,
      minH: 4,
    },
    sm: {
      w: 2,
      h: 9,
      x: 0,
      y: 12,
      minW: 4,
      minH: 4,
    },
    md: {
      w: 14,
      h: 8,
      x: 10,
      y: 8,
      minW: 14,
      minH: 8,
    },
    lg: {
      w: 16,
      h: 9,
      x: 32,
      y: 0,
      minW: 10,
      minH: 8,
    },
  }),
};
