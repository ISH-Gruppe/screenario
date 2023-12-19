import {
  getWindowByIdOrFail,
  WindowManagementState,
  WindowType,
} from "../WindowManager/window-management-slice";
import {
  ActionReducerMapBuilder,
  createAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import EinzelarbeitImage from "./images/einzelarbeit.jpg";
import PartnerarbeitImage from "./images/partnerarbeit.jpg";
import GruppenarbeitImage from "./images/gruppenarbeit.jpg";
import KaffeepauseImage from "./images/kaffeepause.jpg";
import MittagspauseImage from "./images/mittagspause.jpg";
import FeierabendImage from "./images/feierabend.jpg";
import KurzePauseImage from "./images/kurze-pause.jpg";
import GrossePauseImage from "./images/grosse-pause.jpg";
import StundenendeImage from "./images/stundenende.jpg";
import ThinkImage from "./images/think.jpg";
import PairImage from "./images/pair.jpg";
import ShareImage from "./images/share.jpg";
import HerzlichWillkommenImage from "./images/herzlich-willkommen.jpg";
import KameraAnschaltenImage from "./images/kamera-anschalten.jpg";
import FragenImChatImage from "./images/fragen-im-chat.jpg";

export type CustomImageDefinition = {
  id: string;
};

export const workPhaseTabs = {
  work: {
    name: "Arbeit",
    categories: [
      {
        name: "Arbeitsphasen",
        images: [
          {
            id: "soloWork",
            src: EinzelarbeitImage,
          },
          { id: "pairWork", src: PartnerarbeitImage },
          { id: "groupWork", src: GruppenarbeitImage },
        ],
      },
      {
        name: "Pausenphasen",
        images: [
          { id: "kaffeepause", src: KaffeepauseImage },
          { id: "mittagspause", src: MittagspauseImage },
          { id: "feierabend", src: FeierabendImage },
        ],
      },
      {
        name: "Pausenphasen (Schule)",
        images: [
          { id: "kurzePause", src: KurzePauseImage },
          { id: "grossePause", src: GrossePauseImage },
          { id: "stundenende", src: StundenendeImage },
        ],
      },
      {
        name: "Think, Pair, Share",
        images: [
          { id: "think", src: ThinkImage },
          { id: "pair", src: PairImage },
          { id: "share", src: ShareImage },
        ],
      },
      {
        name: "Videokonferenzen",
        images: [
          { id: "welcome", src: HerzlichWillkommenImage },
          { id: "camera", src: KameraAnschaltenImage },
          { id: "chatQuestions", src: FragenImChatImage },
        ],
      },
    ],
  },
};

export const getWorkPhaseImageById = (id: string) =>
  Object.values(workPhaseTabs)
    .flatMap((tab) => tab.categories.flatMap(({ images }) => images))
    .find(({ id: curr }) => curr === id);

export const CUSTOM_PICTOGRAM_TAB_ID = "pictograms";
export const CUSTOM_IMAGES_WORK_PHASE_TAB_ID = "custom-images";

export type WorkPhaseTabId =
  | keyof typeof workPhaseTabs
  | typeof CUSTOM_IMAGES_WORK_PHASE_TAB_ID
  | typeof CUSTOM_PICTOGRAM_TAB_ID;

export type WorkPhaseState = {
  type: WindowType.WorkPhase;
  currentTab: WorkPhaseTabId;
};

export const getCustomWorkPhaseImageLocalStorageKey = (id: string) =>
  `screenario/workPhase-global/customImages/${id}`;

export const saveImage = createAsyncThunk<string, { imageContent: string }>(
  "workPhase-global/saveImage",
  async ({ imageContent }) => {
    const imageId = crypto.randomUUID();
    localStorage.setItem(
      getCustomWorkPhaseImageLocalStorageKey(imageId),
      imageContent
    );
    return imageId;
  }
);

export const deleteImage = createAsyncThunk<string, string>(
  "workPhase-global/deleteImage",
  async (imageId) => {
    localStorage.removeItem(getCustomWorkPhaseImageLocalStorageKey(imageId));
    return imageId;
  }
);

export const getCustomWorkPhaseImage = (id: string) => {
  const content = localStorage.getItem(
    getCustomWorkPhaseImageLocalStorageKey(id)
  );

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

export const selectWorkPhaseTab = createAction<{
  windowId: string;
  tabId: WorkPhaseTabId;
}>("workPhase/selectWorkPhaseTab");

export const buildWorkPhaseReducer = (
  builder: ActionReducerMapBuilder<WindowManagementState>
) => {
  builder.addCase(
    selectWorkPhaseTab,
    (state, { payload: { windowId, tabId } }) => {
      const windowState = getWindowByIdOrFail(state.windows, windowId)
        .state as WorkPhaseState;
      windowState.currentTab = tabId;
    }
  );
};
