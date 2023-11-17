import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../app-state";
import { replaceState } from "../redux-helpers";

export const ImportExportButtons = () => {
  const state = useSelector<AppState>(({ _persist, ...state }) => state);
  const dispatch = useDispatch();

  const exportState = () => {
    const json = JSON.stringify(state, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.style.display = "none";

    anchor.href = url;
    // format: YYYY-MM-DD_HH-MM-SS
    const timestamp = new Date()
      .toISOString()
      .split(".")[0]
      .replaceAll("T", "_")
      .replaceAll(":", "-");
    anchor.download = `screenario-${timestamp}`;

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  const onImportFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files?.[0]) {
      throw new Error("No files uploaded");
    }
    const file = files[0];
    const json = await file.text();
    const newState = JSON.parse(json);
    dispatch(replaceState(newState));
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<DownloadIcon />}
        onClick={exportState}
      >
        Exportieren
      </Button>

      <Button
        component="label"
        variant="outlined"
        color="primary"
        startIcon={<UploadIcon />}
      >
        Importieren
        <input
          hidden
          accept="application/json"
          type="file"
          onChange={onImportFileChange}
        />
      </Button>
    </>
  );
};