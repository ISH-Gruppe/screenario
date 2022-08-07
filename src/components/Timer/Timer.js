import React from "react";
import { useTimer } from "react-timer-hook";
import "./Timer.scss";
import MusicSelector from "./MusicSelector";

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

  return (
    <Grid container spacing={2} style={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <IconButton aria-label="delete" size="small">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <AddIcon />
        </IconButton>
      </Grid>

      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Stack direction="row" spacing={2}>
          {/* <Grid item xs={9} className="cd-display"> */}
          <div className="cd-display">
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
          {/* </Grid> */}
          {/* <Grid item xs={3}> */}
          <Stack direction="column" spacing={2}>
            <Button onClick={start} variant="contained" size="small">
              Start
            </Button>
            <Button onClick={pause} variant="outlined" size="small">
              Stop
            </Button>
          </Stack>
          {/* </Grid> */}
        </Stack>
      </Grid>

      <Grid item xs={12}>
        <IconButton aria-label="delete" size="small">
          <RemoveIcon />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <RemoveIcon />
        </IconButton>
      </Grid>

      <Grid item xs={12}>
        <MusicSelector />
      </Grid>
    </Grid>
  );
}
