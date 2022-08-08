import React from "react";

import useTimerRinging from "./useTimerRinging";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function TimerView(props) {
  const [ringTimer] = useTimerRinging();

  return (
    <Stack direction="row" spacing={2}>
      <Stack direction="column" spacing={2}>
        <IconButton aria-label="add" size="small">
          <AddIcon />
        </IconButton>
        <span className="timer-digits">{props.hours}</span>
        <IconButton aria-label="delete" size="small">
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        <IconButton aria-label="add" size="small">
          <AddIcon />
        </IconButton>
        <span className="timer-digits">{props.minutes}</span>
        <IconButton aria-label="delete" size="small">
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        <IconButton aria-label="add" size="small">
          <AddIcon />
        </IconButton>
        <span className="timer-digits">{props.seconds}</span>
        <IconButton aria-label="delete" size="small">
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Stack
        direction="column"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button onClick={ringTimer} variant="contained" size="small">
          Start
        </Button>
        <Button variant="outlined" size="small">
          Stop
        </Button>
      </Stack>
    </Stack>
  );
}
