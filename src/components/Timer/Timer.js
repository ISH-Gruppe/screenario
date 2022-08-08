import React from "react";
import { useTimer } from "react-timer-hook";

import "./Timer.scss";
import MusicSelector from "./subcomponents/MusicSelector";
import VolumeSlider from "./subcomponents/VolumeSlider";
import useTimerRinging from "./subcomponents/useAudio";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });
  const [isPlaying, toggle, ringTimer] = useTimerRinging();

  return (
    <Grid container spacing={2} style={{ textAlign: "center" }}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={2}>
            <IconButton aria-label="add" size="small">
              <AddIcon />
            </IconButton>
            <span className="timer-digits">{hours}</span>
            <IconButton aria-label="delete" size="small">
              <RemoveIcon />
            </IconButton>
          </Stack>

          <Stack direction="column" spacing={2}>
            <IconButton aria-label="add" size="small">
              <AddIcon />
            </IconButton>
            <span className="timer-digits">{minutes}</span>
            <IconButton aria-label="delete" size="small">
              <RemoveIcon />
            </IconButton>
          </Stack>

          <Stack direction="column" spacing={2}>
            <IconButton aria-label="add" size="small">
              <AddIcon />
            </IconButton>
            <span className="timer-digits">{seconds}</span>
            <IconButton aria-label="delete" size="small">
              <RemoveIcon />
            </IconButton>
          </Stack>

          <Stack direction="column" spacing={2}>
            <Button onClick={ringTimer} variant="contained" size="small">
              Start
            </Button>
            <Button onClick={pause} variant="outlined" size="small">
              Stop
            </Button>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <MusicSelector />
      </Grid>

      <Grid item sx={{ mt: -1 }} xs={12}>
        <VolumeSlider />
      </Grid>
    </Grid>
  );
}
