import zod from "zod";
import { match } from "ts-pattern";

const buildModeSchema = zod.enum(["workshop", "school"]);

const buildMode = buildModeSchema.parse(process.env.REACT_APP_BUILD_VARIANT);

export type AppConfig = {
  font: string
}

export const APP_CONFIG: AppConfig = match(buildMode)
  .with("workshop", (): AppConfig => ({
    font: "Rubik",
  }))
  .with("school", (): AppConfig => ({
    font: "ABeeZee",
  }))
  .exhaustive();