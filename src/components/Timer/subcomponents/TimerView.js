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
        <IconButton aria-label="Timer um eine Stunde erweitern" size="small">
          <AddIcon />
        </IconButton>

        <div>
          {props.hours < 10 && <span className="timer-digits">0</span>}
          <span className="timer-digits">{props.hours}</span>
        </div>

        <IconButton aria-label="Timer um eine Stunde reduzieren" size="small">
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        <IconButton aria-label="Timer um eine Minute reduzieren" size="small">
          <AddIcon />
        </IconButton>

        <div>
          {props.minutes < 10 && <span className="timer-digits">0</span>}
          <span className="timer-digits">{props.minutes}</span>
        </div>

        <IconButton aria-label="Timer um eine Minute reduzieren" size="small">
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        <IconButton aria-label="Timer um eine Sekunde erweitern" size="small">
          <AddIcon />
        </IconButton>

        <div>
          {props.seconds < 10 && <span className="timer-digits">0</span>}
          <span className="timer-digits">{props.seconds}</span>
        </div>

        <IconButton aria-label="Timer um eine Sekunde reduzieren" size="small">
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
