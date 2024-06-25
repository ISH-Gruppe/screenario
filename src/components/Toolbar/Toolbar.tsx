import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SchoolIcon from "@mui/icons-material/School";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ShuffleIcon from "@mui/icons-material/Shuffle"; // generator
import PostAddIcon from "@mui/icons-material/PostAdd"; // notepad
import BorderColorIcon from "@mui/icons-material/BorderColor"; //whiteboard
import LyricsIcon from "@mui/icons-material/Lyrics"; // soundboard
import QrCodeIcon from "@mui/icons-material/QrCode";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import GridOnIcon from "@mui/icons-material/GridOn";

import "./Toolbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  windowManagementActions,
  WindowType,
} from "../WindowManager/window-management-slice";
import { AppState } from "../../app-state";
import { createSelector } from "@reduxjs/toolkit";
import { APP_CONFIG } from "../../app-config";
import { omit } from "lodash";

type WindowDescriptor = {
  icon: React.ReactNode;
  name: string;
};

const availableWindowDescriptors: Record<WindowType, WindowDescriptor> = {
  [WindowType.WorkPhase]: {
    icon: <SchoolIcon />,
    name: "Arbeits- und Pausenphasen",
  },
  [WindowType.Timer]: {
    icon: <HourglassTopIcon />,
    name: "Timer",
  },
  [WindowType.RandomGenerator]: {
    icon: <ShuffleIcon />,
    name: "Zufallsgenerator",
  },
  [WindowType.Notepad]: {
    icon: <PostAddIcon />,
    name: "Textfeld",
  },
  [WindowType.Soundboard]: {
    icon: <LyricsIcon />,
    name: "Soundboard",
  },
  [WindowType.Whiteboard]: {
    icon: <BorderColorIcon />,
    name: "Whiteboard",
  },
  [WindowType.Positioning]: {
    icon: <GridOnIcon />,
    name: "Positionierung",
  },
  [WindowType.GuessingGame]: {
    icon: <GridOnIcon />,
    name: "Ratespiel",
  },
  [WindowType.QrCode]: {
    icon: <QrCodeIcon />,
    name: "QR-Code-Generator",
  },
  [WindowType.Stuhlkreis]: {
    icon: <ChairAltIcon />,
    name: "Digitaler Stuhlkreis",
  },
};

const displayedWindowDescriptors = omit(
  availableWindowDescriptors,
  APP_CONFIG.hiddenWindowTypes
);

export default function ToggleButtonsMultiple() {
  const dispatch = useDispatch();
  const openWindowTypes = useSelector(
    createSelector(
      (state: AppState) => state.windowManagement.windows,
      (windows) =>
        windows.reduce(
          (openTypes, window) =>
            window.isOpen ? openTypes.add(window.state.type) : openTypes,
          new Set<WindowType>()
        )
    )
  );
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (_event: unknown, newFormats: string[]) => {
    setFormats(newFormats);
  };

  function handleChange(_event: unknown, value: WindowType) {
    dispatch(windowManagementActions.toggleWindowType(value));
  }

  return (
    <ToggleButtonGroup
      className="toolbar"
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
      fullWidth={true}
      size="small"
    >
      {(
        Object.entries(displayedWindowDescriptors) as [
          WindowType,
          WindowDescriptor
        ][]
      ).map(([type, descriptor]) => (
        <ToggleButton
          key={type}
          color="primary"
          value={type}
          selected={openWindowTypes.has(type)}
          onClick={handleChange}
        >
          {descriptor.icon}
          <span className="toolbar-text"> {descriptor.name} </span>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
