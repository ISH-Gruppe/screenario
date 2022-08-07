import React from "react";

import BaseWindow from "../BaseWindow/BaseWindow";

function reset() {
  // empty notepad
}

export default function WelcomeDialog() {
  return (
    <BaseWindow title="notepad" reset={reset}>
      <input type="textarea" />
    </BaseWindow>
  );
}
