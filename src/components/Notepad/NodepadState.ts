import {
  getWindowByIdOrFail,
  WindowManagementState,
  WindowType,
} from "../WindowManager/window-management-slice";
import { ActionReducerMapBuilder, createAction } from "@reduxjs/toolkit";

export type NotepadState = {
  type: WindowType.Notepad;
  currentNoteIndex: number;
  notes: string[];
};

export const selectNoteAndCreateIfNeeded = createAction<{
  windowId: string;
  noteIndex: number;
}>("notepad/selectAndCreateIfNeeded");

export const updateCurrentNote = createAction<{
  windowId: string;
  note: string;
}>("notepad/updateNote");

export const deleteCurrentNote = createAction<{
  windowId: string;
}>("notepad/deleteCurrentNote");

export const buildNodepadReducer = (
  builder: ActionReducerMapBuilder<WindowManagementState>
) => {
  builder
    .addCase(
      selectNoteAndCreateIfNeeded,
      (state, { payload: { windowId, noteIndex } }) => {
        const windowState = getWindowByIdOrFail(state.windows, windowId)
          .state as NotepadState;
        if (windowState.notes[noteIndex]) {
          windowState.currentNoteIndex = noteIndex;
        } else {
          windowState.currentNoteIndex = windowState.notes.length;
          windowState.notes.push("");
        }
      }
    )
    .addCase(updateCurrentNote, (state, { payload: { windowId, note } }) => {
      const windowState = getWindowByIdOrFail(state.windows, windowId)
        .state as NotepadState;
      windowState.notes[windowState.currentNoteIndex] = note;
    })
    .addCase(deleteCurrentNote, (state, { payload: { windowId } }) => {
      const windowState = getWindowByIdOrFail(state.windows, windowId)
        .state as NotepadState;
      windowState.notes.splice(windowState.currentNoteIndex, 1);
      windowState.currentNoteIndex--;
    });
};
