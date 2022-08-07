import React from "react";

import BaseWindow from "../BaseWindow/BaseWindow";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function Notepad() {
  const [notepads, setNotepads] = React.useState(["", "", ""]);
  const [value, setValue] = React.useState("0");

  function reset() {}

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function updateNote(text) {
    // Put the most recently-modified note at the top
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  const notepadTabs = notepads.map((notepadContent, index) => {
    return <Tab key={index} label={`Notiz ${index}`} value={`${index}`} />;
  });

  const notepadTabPanels = notepads.map((notepadContent, index) => {
    return (
      <TabPanel key={index} value={`${index}`}>
        <ReactQuill
          theme="snow"
          value={notepads[index]}
          onChange={updateNote}
        />
      </TabPanel>
    );
  });

  return (
    <TabContext value={value}>
      <TabList onChange={handleChange}>{notepadTabs}</TabList>

      {notepadTabPanels}
    </TabContext>
  );
}
