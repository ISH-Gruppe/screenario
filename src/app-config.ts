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
};

export const APP_CONFIG: AppConfig = match(buildMode)
  .with(
    "workshop",
    (): AppConfig => ({
      font: "Rubik",
      hiddenWindowTypes: [],
    })
  )
  .with(
    "school",
    (): AppConfig => ({
      font: "ABeeZee",
      hiddenWindowTypes: [WindowType.Positioning, WindowType.QrCode],
    })
  )
  .exhaustive();

export const STORE_PERSISTOR_KEY = "screenario-app-state";
