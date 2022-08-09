import React, { useState } from "react";

import BaseWindow from "../BaseWindow/BaseWindow";

export default function ExampleNotepad({ id, visible, onHide, onChange }) {
  const [notepadContent, setNotepadContent] = useState("");

  function handleChange(event) {
    setNotepadContent(event.target.value);
  }
  function handleReset() {
    setNotepadContent("");
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
      <input type="textarea" value={notepadContent} onChange={handleChange} />
    </BaseWindow>
  );
}
