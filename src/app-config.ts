import zod from "zod";
import { match } from "ts-pattern";
import { WindowType } from "./components/WindowManager/window-management-slice";

const buildModeSchema = zod.enum(["workshop", "school"]);

const buildMode = buildModeSchema.parse(
  localStorage.getItem("buildMode") || "workshop"
);

export type AppConfig = {
  font: string;
  hiddenWindowTypes: WindowType[];
  notepadFontWhitelist: string[];
  hiddenWorkPhaseTabs: string[];
};

export const APP_CONFIG: AppConfig = match(buildMode)
  .with(
    "workshop",
    (): AppConfig => ({
      font: "Rubik",
      hiddenWindowTypes: [],
      notepadFontWhitelist: ["Rubik", "ComicRelief"],
      hiddenWorkPhaseTabs: ["school", "pictograms"],
    })
  )
  .with(
    "school",
    (): AppConfig => ({
      font: "ABeeZee",
      hiddenWindowTypes: [WindowType.QrCode, WindowType.GuessingGame],
      notepadFontWhitelist: [
        "Grundschrift",
        "Rubik",
        "Druckschrift95",
        "ComicRelief",
      ],
      hiddenWorkPhaseTabs: ["work"],
    })
  )
  .exhaustive();

export const STORE_PERSISTOR_KEY = "screenario-app-state";
