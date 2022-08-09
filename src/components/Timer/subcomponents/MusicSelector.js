import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import useAudio from "./useAudio";
import testAudio from "../music/gaming/04 - NoBan Stream - Dummy Training.mp3";

export default function MusicSelector(props) {
  const [activePlaylist, setActivePlaylist] = React.useState(
    PlaylistsEnum.NO_MUSIC
  );

  const [isMusicPlaying, toggle, audio] = useAudio(testAudio);

  React.useEffect(() => {
    if (props.isTimerRunning || isMusicPlaying) {
      playSelectedMusic();
    }
  }, [props.isTimerRunning]);

  React.useEffect(() => {
    audio.volume = props.musicVolume;
  }, [props.musicVolume]);

  const handlePlaylistChange = (event) => {
    setActivePlaylist(event.target.value);
  };

  function playSelectedMusic() {
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
          <MenuItem value={PlaylistsEnum.NO_MUSIC}>
            {PlaylistsEnum.NO_MUSIC}
          </MenuItem>
          <MenuItem value={PlaylistsEnum.RELAXATION}>
            {PlaylistsEnum.RELAXATION}
          </MenuItem>
          <MenuItem value={PlaylistsEnum.PIANO}>{PlaylistsEnum.PIANO}</MenuItem>
          <MenuItem value={PlaylistsEnum.SYNTHWAVE}>
            {PlaylistsEnum.SYNTHWAVE}
          </MenuItem>
          <MenuItem value={PlaylistsEnum.GAMING}>
            {PlaylistsEnum.GAMING}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

// Explicitly naming the object "Enum" to differentiate between "the other" Playlists file
// "the other" Playlists file -> /music/Playlists.js contains actual tracks
export const PlaylistsEnum = {
  NO_MUSIC: "Keine Musik",
  RELAXATION: "Entspannung",
  PIANO: "Piano",
  SYNTHWAVE: "Synthwave",
  GAMING: "Spielmusik",
};
