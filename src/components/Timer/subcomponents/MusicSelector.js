import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MusicSelector() {
  const [activePlaylist, setActivePlaylist] = React.useState(
    PlaylistsEnum.NO_MUSIC
  );

  const handlePlaylistChange = (event) => {
    setActivePlaylist(event.target.value);
  };

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
