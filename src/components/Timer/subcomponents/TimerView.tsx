import React from "react";

import "./TimerView.scss";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useWindowState } from "../../WindowManager/window-management-slice";
import { FormControlLabel, Switch } from "@mui/material";
import { TimerState, toggleAnalogTimer } from "../TimerState";
import { useDispatch } from "react-redux";

export default function TimerView(props: {
  hours: number;
  minutes: number;
  seconds: number;
  onTimerUpdate: (
    deltaHours?: number,
    deltaMinutes?: number,
    deltaSeconds?: number
  ) => void;
  startTimer: () => void;
  stopTimer: () => void;
  windowId: string;
}) {
  const windowState = useWindowState(props.windowId) as TimerState;
  const dispatch = useDispatch();

  return (
    <div className="timer-view">
      <Stack direction="row" spacing={2} sx={{ flexGrow: "1" }}>
        <Stack className="stack" direction="column" spacing={2}>
          <div className="button-container-digits">
            <IconButton
              onClick={() => props.onTimerUpdate(0, 0, 1)}
              aria-label="Timer um eine Stunde erweitern"
              size="small"
            >
              <AddIcon />
            </IconButton>
          </div>

          <div>
            {props.hours < 10 && <span className="timer-digits">0</span>}
            <span className="timer-digits">{props.hours}</span>
          </div>

          <div className="button-container-digits">
            <IconButton
              onClick={() => props.onTimerUpdate(0, 0, -1)}
              disabled={props.hours === 0}
              aria-label="Timer um eine Stunde reduzieren"
              size="small"
            >
              <RemoveIcon />
            </IconButton>
          </div>
        </Stack>

        <Stack className="stack" direction="column" spacing={2}>
          <div className="button-container-digits">
            <IconButton
              onClick={() => props.onTimerUpdate(0, 1)}
              aria-label="Timer um eine Minute reduzieren"
              size="small"
            >
              <AddIcon />
            </IconButton>
          </div>

          <div>
            {props.minutes < 10 && <span className="timer-digits">0</span>}
            <span className="timer-digits">{props.minutes}</span>
          </div>

          <div className="button-container-digits">
            <IconButton
              onClick={() => props.onTimerUpdate(0, -1)}
              aria-label="Timer um eine Minute reduzieren"
              disabled={props.hours === 0 && props.minutes === 0}
              size="small"
            >
              <RemoveIcon />
            </IconButton>
          </div>
        </Stack>

        <Stack className="stack" direction="column" spacing={2}>
          <div className="button-container-digits">
            <IconButton
              onClick={() => props.onTimerUpdate(1)}
              aria-label="Timer um eine Sekunde erweitern"
              size="small"
            >
              <AddIcon />
            </IconButton>
          </div>

          <div>
            {props.seconds < 10 && <span className="timer-digits">0</span>}
            <span className="timer-digits">{props.seconds}</span>
          </div>

          <div className="button-container-digits">
            <IconButton
              onClick={() => props.onTimerUpdate(-1)}
              aria-label="Timer um eine Sekunde reduzieren"
              disabled={
                props.hours === 0 && props.minutes === 0 && props.seconds === 0
              }
              size="small"
            >
              <RemoveIcon />
            </IconButton>
          </div>
        </Stack>

        <Stack
          className="stack buttons-container-start-stop"
          direction="column"
          spacing={2}
        >
          <Button onClick={props.startTimer} variant="contained" size="small">
            Start
          </Button>
          <Button onClick={props.stopTimer} variant="outlined" size="small">
            Stop
          </Button>
          <FormControlLabel
            control={
              <Switch
                checked={windowState.showAnalogTimer}
                onClick={() =>
                  dispatch(toggleAnalogTimer({ id: props.windowId }))
                }
              />
            }
            label="Analog"
          />
        </Stack>
      </Stack>
    </div>
  );
}
