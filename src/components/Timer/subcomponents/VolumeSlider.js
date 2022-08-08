import * as React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import Popover from "@mui/material/Popover";

export default function VolumeSlider() {
  const [musicVolume, setMusicVolume] = React.useState(90);
  const [musicVolumeBeforeMute, setMusicVolumeBeforeMute] =
    React.useState(musicVolume);

  const handleVolumeChange = (event, newValue) => {
    setMusicVolume(newValue);
    setMusicVolumeBeforeMute(newValue);
  };

  function muteVolume() {
    setMusicVolume(0);
  }

  function unmuteVolume() {
    setMusicVolume(musicVolumeBeforeMute);
  }

  /* Popover related > */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  /* Popover related < */

  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }

  return (
    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      {musicVolume > 0 ? (
        <IconButton
          onClick={muteVolume}
          aria-label="Ton stummschalten"
          size="small"
          /* Popover related > */
          // aria-owns={open ? "mouse-over-popover" : undefined}
          // aria-haspopup="true"
          // onMouseEnter={handlePopoverOpen}
          // onMouseLeave={handlePopoverClose}
          /* Popover related < */
          /* Popover related < */
        >
          <VolumeUpIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={unmuteVolume}
          aria-label="Ton anschalten"
          size="small"
        >
          <VolumeOffIcon />
        </IconButton>
      )}

      <Slider
        variant="outlined"
        valueLabelDisplay="auto"
        defaultValue={musicVolume}
        value={musicVolume}
        onChange={handleVolumeChange}
        // step={10}
        // marks
        min={0}
        max={100}
      />

      {/* <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
          height: "100px !important"
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Slider
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: "slider-vertical",
            },
          }}
          orientation="vertical"
          defaultValue={30}
          aria-label="Temperature"
          valueLabelDisplay="auto"
          onKeyDown={preventHorizontalKeyboardNavigation}
        />
      </Popover> */}
    </Stack>
  );
}
