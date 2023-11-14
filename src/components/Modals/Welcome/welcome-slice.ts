import { Action, createSlice } from "@reduxjs/toolkit";

export const welcomeSlice = createSlice({
  name: "welcome",
  initialState: {
    isOpen: true,
  },
  reducers: {
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const welcomeActions = welcomeSlice.actions;
