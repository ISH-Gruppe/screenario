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

import "./Toolbar.css";

export default function ToggleButtonsMultiple({
  onWindowShow,
  onWindowHide,
  windows,
}) {
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  function handleChange(event, value) {
    windows[value].open ? onWindowHide(value) : onWindowShow(value);
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
        value="work-phase"
        selected={windows["work-phase"].open}
        onClick={handleChange}
      >
        <SchoolIcon />
        <span class="toolbar-text"> Arbeits- und Pausenphasen </span>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value="timer"
        selected={windows["timer"].open}
        onClick={handleChange}
      >
        <HourglassTopIcon />
        <span class="toolbar-text">Timer</span>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value="random-generator"
        selected={windows["random-generator"].open}
        onClick={handleChange}
      >
        <ShuffleIcon />
        <span class="toolbar-text">Zufallsgenerator</span>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value="notepad"
        selected={windows["notepad"].open}
        onClick={handleChange}
      >
        <PostAddIcon />
        <span class="toolbar-text">Textfeld </span>
      </ToggleButton>

      <ToggleButton
        color="primary"
        value="soundboard"
        selected={windows["soundboard"].open}
        onClick={handleChange}
      >
        <LyricsIcon />
        <span class="toolbar-text">Soundboard </span>
      </ToggleButton>

      <ToggleButton
        color="primary"
        value="whiteboard"
        selected={windows["whiteboard"].open}
        onClick={handleChange}
      >
        <BorderColorIcon />
        <span class="toolbar-text">Whiteboard </span>
      </ToggleButton>

      <ToggleButton
        color="primary"
        value="gallery"
        selected={windows["gallery"].open}
        onClick={handleChange}
      >
        <BorderColorIcon />
        <span class="toolbar-text">Positionskarten</span>
      </ToggleButton>

      <ToggleButton
        color="primary"
        value="qrcode-generator"
        selected={windows["qrcode-generator"].open}
        onClick={handleChange}
      >
        <QrCodeIcon />
        <span class="toolbar-text">QR-Code-Generator </span>
      </ToggleButton>
      <ToggleButton
        color="primary"
        value="stuhlkreis"
        selected={windows["stuhlkreis"].open}
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
