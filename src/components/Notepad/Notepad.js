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

import {
  windowManagementActions,
  WindowConfig,
  WindowType,
} from "../WindowManager/window-management-slice";
import { useDispatch } from "react-redux";

// CSS
import "./Notepad.css";

export default function Notepad({ id, title, onSave, onLoad }) {
  const dispatch = useDispatch();

  const [notes, setNotes] = React.useState(loadStateNotes());
  const [currentTab, setCurrentTab] = React.useState(loadStateCurrentTab);

  function loadStateNotes() {
    const savedNotes = onLoad("NOTEPAD_NOTES")
      ? onLoad("NOTEPAD_NOTES")
      : [
        { id: 0, text: "" },
        { id: "add", text: "+" },
      ];
    // console.log("loadedGroup ", loadedGroup);

    return savedNotes;
  }

  function loadStateCurrentTab() {
    const savedNotes = onLoad("NOTEPAD_TAB") ? onLoad("NOTEPAD_TAB") : 0;
    // console.log("loadedGroup ", loadedGroup);

    return savedNotes;
  }

  function handleReset() {}

  function handleHide() {
    dispatch(windowManagementActions.closeWindow(id));
  }

  const changeTabOrCreateNewNote = (event, selectedTab) => {
    setCurrentTab(selectedTab);
    onSave("NOTEPAD_TAB", selectedTab);

    if (notes[selectedTab].id == "add") {
      addNewNote(selectedTab);
    }
  };

  function addNewNote(selectedTab) {
    const newNotes = [...notes];
    newNotes[selectedTab] = { id: selectedTab, text: "" };
    // console.log(newNotes[selectedTab]);
    setNotes([...newNotes, { id: "add", text: "+" }]);
    onSave("NOTEPAD_NOTES", [...newNotes, { id: "add", text: "+" }]);
  }

  function updateNote(noteId, editorContent) {
    const notesCopy = [...notes];
    notesCopy[noteId] = { id: noteId, text: editorContent };
    setNotes([...notesCopy]);
    onSave("NOTEPAD_NOTES", [...notesCopy]);
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

/**
 * @type {import("../WindowManager/window-management-slice").WindowConfig}
 */
export const notepadWindowConfig = {
  getInitialState: () => ({
    type: WindowType.Notepad,
  }),
  Component: ({ id }) => <Notepad id={id} title="Notepad" />,
  defaultLayout: {
    xs: {
      w: 4,
      h: 3,
      x: 0,
      y: 18,
      minW: 2,
    },
    sm: {
      w: 2,
      h: 5,
      x: 0,
      y: 29,
      minW: 2,
    },
    md: {
      w: 10,
      h: 8,
      x: 14,
      y: 16,
      minW: 6,
      minH: 4,
    },
    lg: {
      w: 16,
      h: 6,
      x: 32,
      y: 9,
      minW: 8,
      minH: 4,
    },
  },
};
