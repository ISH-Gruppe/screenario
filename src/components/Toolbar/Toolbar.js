import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SchoolIcon from "@mui/icons-material/School";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ShuffleIcon from "@mui/icons-material/Shuffle"; // generator
import PostAddIcon from "@mui/icons-material/PostAdd"; // notepad
import DescriptionIcon from "@mui/icons-material/Description"; // notepad
import BorderColorIcon from "@mui/icons-material/BorderColor"; //whiteboard
import LyricsIcon from "@mui/icons-material/Lyrics"; // soundboard
import QrCodeIcon from "@mui/icons-material/QrCode";
import ChairAltIcon from "@mui/icons-material/ChairAlt";

import "./Toolbar.css";

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      className="toolbar"
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
      fullWidth={true}
      size="small"
    >
      <ToggleButton color="primary" value="work-phase">
        <SchoolIcon />
        <span class="toolbar-text"> Arbeits- und Pausenphasen </span>
      </ToggleButton>
      <ToggleButton color="primary" value="timer">
        <HourglassTopIcon />
        <span class="toolbar-text">Timer</span>
      </ToggleButton>
      <ToggleButton color="primary" value="random-generator">
        <ShuffleIcon />
        <span class="toolbar-text">Zufallsgenerator</span>
      </ToggleButton>
      <ToggleButton color="primary" value="notepad">
        <PostAddIcon />
        <span class="toolbar-text">Textfeld </span>
      </ToggleButton>
      <ToggleButton color="primary" value="whiteboard">
        <BorderColorIcon />
        <span class="toolbar-text">Whiteboard </span>
      </ToggleButton>
      <ToggleButton color="primary" value="soundboard">
        <LyricsIcon />
        <span class="toolbar-text">Soundboard </span>
      </ToggleButton>
      <ToggleButton color="primary" value="qrcode-generator">
        <QrCodeIcon />
        <span class="toolbar-text">QR-Code-Generator </span>
      </ToggleButton>
      <ToggleButton color="primary" value="stuhlkreis">
        <ChairAltIcon />
        <span class="toolbar-text">Digitaler Stuhlkreis </span>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
