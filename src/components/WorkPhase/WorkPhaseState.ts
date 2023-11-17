import { WindowType } from "../WindowManager/window-management-slice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type WorkPhaseState = {
  type: WindowType.WorkPhase;
};

export type CustomImageDefinition = {
  id: string;
};

const getLocalStorageKey = (id: string) =>
  `screenario/workPhase-global/customImages/${id}`;

export const saveImage = createAsyncThunk<string, { imageContent: string }>(
  "workPhase-global/saveImage",
  async ({ imageContent }) => {
    const imageId = crypto.randomUUID();
    localStorage.setItem(getLocalStorageKey(imageId), imageContent);
    return imageId;
  }
);

export const deleteImage = createAsyncThunk<string, string>(
  "workPhase-global/deleteImage",
  async (imageId) => {
    localStorage.removeItem(getLocalStorageKey(imageId));
    return imageId;
  }
);

export const getCustomWorkPhaseImage = (id: string) => {
  const content = localStorage.getItem(getLocalStorageKey(id));

  if (content === null) {
    throw new Error(`No image found for ID ${id}`);
  }

  return content;
};

export const workPhaseSlice = createSlice({
  name: "workPhase-global",
  initialState: () => ({
    customImages: [] as CustomImageDefinition[],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveImage.fulfilled, (state, { payload: newImageId }) => {
        state.customImages.push({
          id: newImageId,
        });
      })
      .addCase(deleteImage.fulfilled, (state, { payload: deletedId }) => {
        state.customImages = state.customImages.filter(
          ({ id }) => id !== deletedId
        );
      });
  },
});
