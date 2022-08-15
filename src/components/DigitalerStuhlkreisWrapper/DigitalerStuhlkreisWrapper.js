import React from "react";

import Card from "@mui/material/Card";

import "./digitalerstuhlkreis/runtime-es2015.a4dadbc03350107420a4";
import "./digitalerstuhlkreis/runtime-es5.a4dadbc03350107420a4";
import "./digitalerstuhlkreis/polyfills-es2015.d9c8f3d13d7372708bac";
import "./digitalerstuhlkreis/polyfills-es5.dab0688ff17f3e0c4dfd";
import "./digitalerstuhlkreis/main-es2015.4426b97beb1b7ce9561b";
import "./digitalerstuhlkreis/main-es5.4426b97beb1b7ce9561b";
import "./digitalerstuhlkreis/styles.0d4b2152c4844f943b6e.css";
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
