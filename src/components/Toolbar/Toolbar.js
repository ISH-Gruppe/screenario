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

export default function ToggleButtonsMultiple() {
  const dispatch = useDispatch();
  const openWindowTypes = useSelector((state) =>
    state.windows.reduce(
      (openTypes, window) =>
        window.isOpen ? openTypes.add(window.state.type) : openTypes,
      new Set()
    )
  );
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  function handleChange(event, value) {
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
      <ToggleButton
        color="primary"
        value={WindowType.WorkPhase}
        selected={openWindowTypes.has(WindowType.WorkPhase)}
        onClick={handleChange}
      >
        <SchoolIcon />
        <span class="toolbar-text"> Arbeits- und Pausenphasen </span>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value={WindowType.Timer}
        selected={openWindowTypes.has(WindowType.Timer)}
        onClick={handleChange}
      >
        <HourglassTopIcon />
        <span class="toolbar-text">Timer</span>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value={WindowType.RandomGenerator}
        selected={openWindowTypes.has(WindowType.RandomGenerator)}
        onClick={handleChange}
      >
        <ShuffleIcon />
        <span class="toolbar-text">Zufallsgenerator</span>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value={WindowType.Notepad}
        selected={openWindowTypes.has(WindowType.Notepad)}
        onClick={handleChange}
      >
        <PostAddIcon />
        <span class="toolbar-text">Textfeld </span>
      </ToggleButton>

      <ToggleButton
        color="primary"
        value={WindowType.Soundboard}
        selected={openWindowTypes.has(WindowType.Soundboard)}
        onClick={handleChange}
      >
        <LyricsIcon />
        <span class="toolbar-text">Soundboard </span>
      </ToggleButton>

      <ToggleButton
        color="primary"
        value={WindowType.Whiteboard}
        selected={openWindowTypes.has(WindowType.Whiteboard)}
        onClick={handleChange}
      >
        <BorderColorIcon />
        <span class="toolbar-text">Whiteboard </span>
      </ToggleButton>

      <ToggleButton
        color="primary"
        value={WindowType.Gallery}
        selected={openWindowTypes.has(WindowType.Gallery)}
        onClick={handleChange}
      >
        <GridOnIcon />
        <span class="toolbar-text">Positionierung</span>
      </ToggleButton>

      <ToggleButton
        color="primary"
        value={WindowType.QrCode}
        selected={openWindowTypes.has(WindowType.QrCode)}
        onClick={handleChange}
      >
        <QrCodeIcon />
        <span class="toolbar-text">QR-Code-Generator </span>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value={WindowType.Stuhlkreis}
        selected={openWindowTypes.has(WindowType.Stuhlkreis)}
        onClick={handleChange}
      >
        <ChairAltIcon />
        <span class="toolbar-text">Digitaler Stuhlkreis </span>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

// <ToggleButton
//   color="primary"
//   value="whiteboard"
//   selected={windows["whiteboard"].open}
//   onClick={handleChange}
// >
//   <BorderColorIcon />
//   <span class="toolbar-text">Whiteboard </span>
// </ToggleButton>
