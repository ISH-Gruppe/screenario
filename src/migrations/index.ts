import { MigrationManifest } from "redux-persist/es/types";
import { migration_1 } from "./migration_1";

export const migrations: MigrationManifest = {
  1: migration_1,
};
