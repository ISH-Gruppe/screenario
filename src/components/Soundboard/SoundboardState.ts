import {
  ActionReducerMapBuilder,
  createAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  getWindowByIdOrFail,
  WindowManagementState,
  WindowType,
} from "../WindowManager/window-management-slice";

type CustomFileDefinition = {
  name: string;
  id: string;
};

const getCustomSoundboardFileLocalStorageKey = (id: string) =>
  `screenario/soundboard-global/custom-files/${id}`;

export const saveFile = createAsyncThunk<
  { id: string; name: string },
  { fileContent: string; name: string }
>("soundboard-global/saveFile", async ({ fileContent, name }) => {
  const imageId = crypto.randomUUID();
  localStorage.setItem(
    getCustomSoundboardFileLocalStorageKey(imageId),
    fileContent
  );
  return {
    id: imageId,
    name,
  };
});

export const deleteFile = createAsyncThunk<string, string>(
  "soundboard-global/deleteFile",
  async (imageId) => {
    localStorage.removeItem(getCustomSoundboardFileLocalStorageKey(imageId));
    return imageId;
  }
);

export const getCustomSoundboardFile = (id: string) => {
  const content = localStorage.getItem(
    getCustomSoundboardFileLocalStorageKey(id)
  );

  if (content === null) {
    throw new Error(`No image found for ID ${id}`);
  }

  return content;
};

export const globalSoundboardSlice = createSlice({
  name: "soundboard-global",
  initialState: () => ({
    customFiles: [] as CustomFileDefinition[],
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveFile.fulfilled, (state, { payload: fileDefinition }) => {
        state.customFiles.push(fileDefinition);
      })
      .addCase(deleteFile.fulfilled, (state, { payload: deletedId }) => {
        state.customFiles = state.customFiles.filter(
          ({ id }) => id !== deletedId
        );
      });
  },
});

export type SoundboardState = {
  type: WindowType.Soundboard;
  favorites: {
    sounds: string[];
    videos: string[];
    customFiles: string[];
  };
};

export const toggleFavorite = createAction<{
  windowId: string;
  type: keyof SoundboardState["favorites"];
  id: string;
}>("soundboard/toggleFavorite");

export const buildSoundboardReducer = (
  builder: ActionReducerMapBuilder<WindowManagementState>
) => {
  builder.addCase(
    toggleFavorite,
    (state, { payload: { windowId, type, id } }) => {
      const windowState = getWindowByIdOrFail(state.windows, windowId)
        .state as SoundboardState;

      if (!windowState.favorites[type].includes(id)) {
        windowState.favorites[type].push(id);
      } else {
        windowState.favorites[type] = windowState.favorites[type].filter(
          (favorite) => favorite !== id
        );
      }
    }
  );
};
