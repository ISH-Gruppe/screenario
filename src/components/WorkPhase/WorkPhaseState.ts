import {
  getWindowByIdOrFail,
  WindowManagementState,
} from "../WindowManager/window-management-slice";
import { WindowType } from "../WindowManager/window-type";
import {
  ActionReducerMapBuilder,
  createAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

//WorkImages
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

//SchoolImages
// Sitzordnung
import FreiePlatzwahlImage from "./images/school/Freie Platzwahl.jpg";
import AufDemBodenImage from "./images/school/Auf dem Boden.jpg";
import AufDemFlurImage from "./images/school/Auf dem Flur.jpg";
import KinositzImage from "./images/school/Kinositz.jpg";
import SitzsackImage from "./images/school/Sitzsack.jpg";
import GruppentischImage from "./images/school/Gruppentisch.jpg";

// Rollen
import SchreiberinImage from "./images/school/Schreiberin.jpg";
import VorleserinImage from "./images/school/Vorleserin.jpg";
import ZeitwaechterinImage from "./images/school/Zeitwaechterin.jpg";
import ModerationImage from "./images/school/Moderation.jpg";
import PartnerinnenarbeitImage from "./images/school/Partnerinnenarbeit.jpg";

// Dinge
import FedermappeImage from "./images/school/Federmappe.jpg";
import KleberImage from "./images/school/Kleber.jpg";
import StiftImage from "./images/school/Stift.jpg";
import LinealImage from "./images/school/Lineal.jpg";
import PapageiImage from "./images/school/Papagei.jpg";

// Arbeitsphase
import EinzelarbeitSchoolImage from "./images/school/Einzelarbeit.jpg";
import GruppenarbeitSchoolImage from "./images/school/Gruppenarbeit.jpg";
import KonferenzImage from "./images/school/Konferenz.jpg";
import CheckImage from "./images/school/Check.jpg";
import LautstaerkeImage from "./images/school/Lautstaerke.jpg";

// Pausenphase
import MittagspauseSchoolImage from "./images/school/Mittagspause.jpg";
import FeierabendMitTextImage from "./images/school/Feierabend mit Text.jpg";
import HerzlichWillkommenSchoolImage from "./images/school/Herzlich wilkommen.jpg";
import HaltestelleImage from "./images/school/Haltestelle.jpg";
import KurzePauseSchoolImage from "./images/school/Kurze Pause.jpg";

// Online
import BitteKameraEinschaltenImage from "./images/school/Bitte Kamera einschalten.jpg";
import FragenUeberDenChatImage from "./images/school/Fragen ueber den Chat.jpg";

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
  school: {
    name: "Schule",
    categories: [
      {
        name: "Sitzordnungen",
        images: [
          { id: "aufDemBoden", src: AufDemBodenImage },
          { id: "aufDemFlur", src: AufDemFlurImage },
          { id: "sitzsack", src: SitzsackImage },
          { id: "freiePlatzwahl", src: FreiePlatzwahlImage },
          { id: "kinositz", src: KinositzImage },
          { id: "gruppentisch", src: GruppentischImage },
        ],
      },
      {
        name: "Rollenkarten",
        images: [
          { id: "schreiberin", src: SchreiberinImage },
          { id: "vorleserin", src: VorleserinImage },
          { id: "zeitwaechterin", src: ZeitwaechterinImage },
        ],
      },
      {
        name: "Arbeitsmaterial",
        images: [
          { id: "federmappe", src: FedermappeImage },
          { id: "kleber", src: KleberImage },
          { id: "stift", src: StiftImage },
          { id: "lineal", src: LinealImage },
        ],
      },
      {
        name: "Arbeitsphasen",
        images: [
          { id: "einzelarbeitSchool", src: EinzelarbeitSchoolImage },
          { id: "gruppenarbeitSchool", src: GruppenarbeitSchoolImage },
          { id: "partnerinnenarbeit", src: PartnerinnenarbeitImage },
          { id: "moderation", src: ModerationImage },
          { id: "konferenz", src: KonferenzImage },
          { id: "haltestelle", src: HaltestelleImage },
        ],
      },
      {
        name: "Pausenphasen",
        images: [
          {
            id: "herzlichWillkommenSchool",
            src: HerzlichWillkommenSchoolImage,
          },
          { id: "kurzePauseSchool", src: KurzePauseSchoolImage },
          { id: "mittagspauseSchool", src: MittagspauseSchoolImage },
          { id: "feierabendMitText", src: FeierabendMitTextImage },
        ],
      },
      {
        name: "Online-Unterricht",
        images: [
          { id: "bitteKameraEinschalten", src: BitteKameraEinschaltenImage },
          { id: "fragenUeberDenChat", src: FragenUeberDenChatImage },
        ],
      },
      {
        name: "Anderes",
        images: [
          { id: "lautstaerke", src: LautstaerkeImage },
          { id: "check", src: CheckImage },
          { id: "papagei", src: PapageiImage },
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
