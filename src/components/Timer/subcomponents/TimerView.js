import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function TimerView(props) {

  return (
    <Stack direction="row" spacing={2}>
      <Stack direction="column" spacing={2}>
        <IconButton
          onClick={() => props.onTimerUpdate(0, 0, 1)}
          aria-label="Timer um eine Stunde erweitern"
          size="small"
        >
          <AddIcon />
        </IconButton>

        <div>
          {props.hours < 10 && <span className="timer-digits">0</span>}
          <span className="timer-digits">{props.hours}</span>
        </div>

        <IconButton
          onClick={() => props.onTimerUpdate(0, 0, -1)}
          disabled={props.hours === 0}
          aria-label="Timer um eine Stunde reduzieren"
          size="small"
        >
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        <IconButton
          onClick={() => props.onTimerUpdate(0, 1)}
          aria-label="Timer um eine Minute reduzieren"
          size="small"
        >
          <AddIcon />
        </IconButton>

        <div>
          {props.minutes < 10 && <span className="timer-digits">0</span>}
          <span className="timer-digits">{props.minutes}</span>
        </div>

        <IconButton
          onClick={() => props.onTimerUpdate(0, -1)}
          aria-label="Timer um eine Minute reduzieren"
          disabled={props.hours === 0 && props.minutes === 0}
          size="small"
        >
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        <IconButton
          onClick={() => props.onTimerUpdate(1)}
          aria-label="Timer um eine Sekunde erweitern"
          size="small"
        >
          <AddIcon />
        </IconButton>

        <div>
          {props.seconds < 10 && <span className="timer-digits">0</span>}
          <span className="timer-digits">{props.seconds}</span>
        </div>

        <IconButton
          onClick={() => props.onTimerUpdate(-1)}
          aria-label="Timer um eine Sekunde reduzieren"
          disabled={props.hours === 0 && props.minutes === 0 && props.seconds === 0}
          size="small"
        >
          <RemoveIcon />
        </IconButton>
      </Stack>

      <Stack
        direction="column"
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Button onClick={props.startTimer} variant="contained" size="small">
          Start
        </Button>
        <Button onClick={props.stopTimer} variant="outlined" size="small">
          Stop
        </Button>
      </Stack>
    </Stack>
  );
}