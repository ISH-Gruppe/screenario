import React from "react";

import "./digitalerstuhlkreis/runtime-es2015.a4dadbc03350107420a4";
import "./digitalerstuhlkreis/runtime-es5.a4dadbc03350107420a4";
import "./digitalerstuhlkreis/polyfills-es2015.d9c8f3d13d7372708bac";
import "./digitalerstuhlkreis/polyfills-es5.dab0688ff17f3e0c4dfd";
import "./digitalerstuhlkreis/main-es2015.d43e95d8420d8bb39d2e";
import "./digitalerstuhlkreis/main-es5.d43e95d8420d8bb39d2e";
import "./digitalerstuhlkreis/styles.00f6a897faa5361a9828.css";

/* 
 * This component is an Angular project that is provided as a WebComponent
 * We do have to import a bunch of files that are not bundled as a single file 
 * and whose name is thus subject to change, because of new hash values.
 * 
 * This wrapper is a mere convenience function to remove the bunch of imports from the WindowManager.
 * 
 * You can find the original project at https://digitaler-stuhlkreis.de
*/
export default function DigitalerStuhlkreisWrapper() {
  return <digitaler-stuhlkreis />;
}
