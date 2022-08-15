import React, { useMemo, useState } from "react";

import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

// UI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Components
import BaseWindow from "../BaseWindow/BaseWindow";

// CSS
import "./Notepad.css";

export default function Notepad({ id, title, onHide, onChange }) {
  const [notes, setNotes] = React.useState([
    { id: 0, text: "" },
    { id: "add", text: "+" },
  ]);
  const [currentTab, setCurrentTab] = React.useState(0);

  function handleReset() {}

  function handleHide() {
    onHide(id);
  }

  const changeTabOrCreateNewNote = (event, selectedTab) => {
    setCurrentTab(selectedTab);

    if (notes[selectedTab].id == "add") {
      addNewNote(selectedTab);
    }
  };

  function addNewNote(selectedTab) {
    const newNotes = [...notes];
    newNotes[selectedTab] = { id: selectedTab, text: "" };
    console.log(newNotes[selectedTab]);
    setNotes([...newNotes, { id: "add", text: "+" }]);
  }

  function updateNote(noteId, editorContent) {
    const notesCopy = [...notes];
    notesCopy[noteId] = { id: noteId, text: editorContent };
    setNotes([...notesCopy]);
  }

  function deleteNote() {
    setCurrentTab(currentTab - 1);
    const notesCopy = [...notes];
    notesCopy.splice(currentTab, 1);
    setNotes([...notesCopy]);
  }

  function handleQuillChange(editorContent) {
    updateNote(currentTab, editorContent);
  }

  const tabs = notes.map((note, index) => {
    let noteText = note.text;

    noteText = noteText.toString();
    noteText = noteText.replace(/(<([^>]+)>)/gi, "");

    return (
      <Tab
        key={index}
        label={noteText ? noteText.slice(0, 10) : "Notiz " + (note.id + 1)}
      />
    );
  });

  const tabPanels = notes.map((note, index) => {
    return (
      <div
        key={index}
        className="tabpanel"
        role="tabpanel"
        hidden={currentTab !== index}
        id={`simple-tabpanel-${index}`}
      >
        {currentTab === index && (
          <ReactQuill
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                // ["video"],
              ],
            }}
            theme="snow"
            value={notes[index].text}
            onChange={handleQuillChange}
            placeholder="Hier eine Notiz erstellen..."
          />
        )}
        <Button
          onClick={deleteNote}
          style={{ position: "fixed", bottom: "10px" }}
        >
          Notiz löschen
        </Button>
      </div>
    );
  });

  return (
    <BaseWindow id={id} title={title} onReset={handleReset} onHide={handleHide}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            scrollButtons
            variant="scrollable"
            allowScrollButtonsMobile
            value={currentTab}
            onChange={changeTabOrCreateNewNote}
          >
            {tabs}
          </Tabs>
        </Box>
        {tabPanels}
      </Box>
    </BaseWindow>
  );
}
