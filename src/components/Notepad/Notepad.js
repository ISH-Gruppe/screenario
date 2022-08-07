import React from "react";

import BaseWindow from "../BaseWindow/BaseWindow";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function Notepad() {
  const [notes, setNotes] = React.useState([
    { id: "0", text: "" },
    { id: "1", text: "" },
    { id: "2", text: "" },
  ]);
  const [activeTab, setActiveTab] = React.useState("0");

  function reset() {}

  const updateActiveTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  function updateNote(value, delta, source, editor, index) {
    console.log("index", index);
    // console.log("value", value);
    console.log("editor", editor.getText());
    // console.log("source", source);
    // console.log("delta", delta);

    // Should've worked, but didn't
    // setNotes((oldNotes) => {
    //   const newNotes = [...oldNotes];
    //   newNotes[activeTab] = editor.getText();
    //   console.log("newNotes ", newNotes);

    //   return newNotes;
    // });

    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === activeTab
          ? { ...oldNote, text: editor.getText() }
          : oldNote;
      })
    );
  }

  function findCurrentNote() {
    return notes.find(note => {
        return note.id === activeTab
    }) || notes[0]
}

  const notepadTabs = notes.map((notepadContent, index) => {
    return <Tab key={index} label={`Notiz ${index}`} value={`${index}`} />;
  });

  const notepadTabPanels = notes.map((notepadContent, index) => {
    return (
      <TabPanel key={index} value={`${index}`}>
        <ReactQuill
          theme="snow"
          value={findCurrentNote()}
          onChange={(value, delta, source, editor) =>
            updateNote(value, delta, source, editor, String(index))
          }
        />
      </TabPanel>
    );
  });

  return (
    <TabContext value={activeTab}>
      <TabList onChange={updateActiveTab}>{notepadTabs}</TabList>

      {notepadTabPanels}
    </TabContext>
  );
}
