import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import useAudio from "./useAudio";
import audioClip from "../music/piano/03 - NoBan Stream - Green Leaf.m4a";
import ringingSound from "../music/WyxD-flipdish-ringer.mp3";
import heretic from "../music/Heretic [Instrumental].mp3"

export default function MusicSelector(props) {
  const [activePlaylist, setActivePlaylist] = React.useState(
    PlaylistsEnum.NO_MUSIC
  );

  const [isMusicPlaying, toggle] = useAudio(heretic);

  React.useEffect(() => {
    if (props.isTimerRunning || isMusicPlaying) {
      playSelectedMusic();
    }
  }, [props.isTimerRunning]);

  const handlePlaylistChange = (event) => {
    setActivePlaylist(event.target.value);
  };

  function playSelectedMusic() {
    console.log("playSelectedMusic!");
    toggle();
  }

  return (
    <Box sx={{ minWidth: 120, maxWidth: 800 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Musik</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={activePlaylist}
          label="Musik"
          onChange={handlePlaylistChange}
        >
          <MenuItem value={PlaylistsEnum.NO_MUSIC}>Keine Musik</MenuItem>
          <MenuItem value={PlaylistsEnum.PIANO}>Piano</MenuItem>
          <MenuItem value={PlaylistsEnum.RELAXATION}>Entspannung</MenuItem>
          <MenuItem value={PlaylistsEnum.SYNTHWAVE}>Synthwave</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

// Explicitly naming the object "Enum" to differentiate between "the other" Playlists file
// "the other" Playlists file -> /music/Playlists.js contains actual tracks
export const PlaylistsEnum = {
  NO_MUSIC: "Keine Musik",
  PIANO: "Piano",
  SYNTHWAVE: "Synthwave",
  RELAXATION: "Entspannung",
};
