import { MigrationManifest } from "redux-persist/es/types";
import { migration_0 } from "./migration_0";
import { migration_1 } from "./migration_1";

export const migrations: MigrationManifest = {
  0: migration_0,
  1: migration_1,
};
