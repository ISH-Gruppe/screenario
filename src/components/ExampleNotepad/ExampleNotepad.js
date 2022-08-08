import React from "react";

import BaseWindow from "../BaseWindow/BaseWindow";

export default function ExampleNotepad({
  content,
  id,
  visible,
  onHide,
  onChange,
}) {
  function handleChange(event) {
    onChange(id, { text: event.target.value });
  }
  function handleReset() {
    // reset notepad
  }

  function handleHide() {
    onHide(id);
  }

  return (
    <BaseWindow
      id="example-notepad"
      title="Notepad"
      visible={visible}
      onReset={handleReset}
      onHide={onHide}
    >
      <input type="textarea" value={content.text} onChange={handleChange} />
    </BaseWindow>
  );
}
