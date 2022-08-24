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

/*
 * This component is an Angular project that is provided as a WebComponent
 * We do have to import a bunch of files that are not bundled as a single file
 * and whose name is thus subject to change, because of new hash values.
 *
 * This wrapper is a mere convenience function to remove the bunch of imports from the WindowManager.
 *
 * You can find the original project at https://digitaler-stuhlkreis.de
 */
export default function DigitalerStuhlkreisWrapper({
  id,
  title,
  onHide,
  onChange,
}) {
  return (
    <Card className="StuhlkreisCard">
      <div id="DigitalerStuhlkreisWrapper" className="">
        <div className="dragable-bar drag-handle">
          <IconButton
            className="hideButton"
            onClick={() => onHide(id)}
            aria-label="delete"
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </div>
        <digitaler-stuhlkreis />
      </div>
    </Card>
  );
}
