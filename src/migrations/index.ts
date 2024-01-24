import { MigrationManifest } from "redux-persist/es/types";
import { migration_1 } from "./migration_1";
import { migration_2 } from "./migration_2";

export const migrations: MigrationManifest = {
  1: migration_1,
  2: migration_2,
};
