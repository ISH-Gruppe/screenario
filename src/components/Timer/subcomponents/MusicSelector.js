import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MusicSelector() {
  const [playlist, setPlaylist] = React.useState("");

  const handleChange = (event) => {
    setPlaylist(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 800 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Musik</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={playlist}
          label="Musik"
          onChange={handleChange}
        >
          <MenuItem value={0}>Keine Musik</MenuItem>
          <MenuItem value={10}>Piano</MenuItem>
          <MenuItem value={20}>Synthwave</MenuItem>
          <MenuItem value={30}>Entspannung</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
