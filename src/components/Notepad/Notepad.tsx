import React from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// UI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Components
import BaseWindow from "../BaseWindow/BaseWindow";

import {
  useWindowState,
  WindowConfig,
  WindowType,
} from "../WindowManager/window-management-slice";
import { useDispatch } from "react-redux";

// CSS
import "./Notepad.css";
import {
  deleteCurrentNote,
  NotepadState,
  selectNoteAndCreateIfNeeded,
  updateCurrentNote,
} from "./NodepadState";

export default function Notepad({ id, title }: { id: string; title: string }) {
  const windowState = useWindowState(id) as NotepadState;
  const dispatch = useDispatch();
  const currentTab = windowState.currentNoteIndex;
  const notes = windowState.notes;

  const changeTabOrCreateNewNote = (event: unknown, selectedTab: number) => {
    dispatch(
      selectNoteAndCreateIfNeeded({
        windowId: id,
        noteIndex: selectedTab,
      })
    );
  };

  function deleteNote() {
    dispatch(
      deleteCurrentNote({
        windowId: id,
      })
    );
  }

  function handleQuillChange(editorContent: string) {
    dispatch(
      updateCurrentNote({
        windowId: id,
        note: editorContent,
      })
    );
  }

  const tabsWithCreateTab = [...notes, "+"];

  const tabs = tabsWithCreateTab.map((note, index) => {
    note = note.toString();
    note = note.replace(/(<([^>]+)>)/gi, "");

    return (
      <Tab
        key={index}
        label={note ? note.slice(0, 10) : "Notiz " + (index + 1)}
      />
    );
  });

  const tabPanels = tabsWithCreateTab.map((note, index) => {
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
            value={note}
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
    <BaseWindow id={id} title={title}>
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

export const notepadWindowConfig: WindowConfig = {
  getInitialState: () => ({
    type: WindowType.Notepad,
    currentNoteIndex: 0,
    notes: [""],
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
