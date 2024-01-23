import React, { useEffect, useState } from "react";

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
import { match } from "ts-pattern";
import { z } from "zod";

const parseTimeValue = (value: string) =>
  match(parseInt(value, 10))
    .when(
      (x) => x > 59,
      () => 59
    )
    .when(
      (x) => x >= 0,
      (x) => x
    )
    .otherwise(() => 0);

export default function TimerView(props: {
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
  onToggleAnalogTimer: () => void;
}) {
  const windowState = useWindowState(props.windowId) as TimerState;
  const [minutesInput, setMinutesInput] = useState(
    props.minutes.toString().padStart(2, "0")
  );
  const [secondsInput, setSecondsInput] = useState(
    props.seconds.toString().padStart(2, "0")
  );

  useEffect(() => {
    const seconds = parseTimeValue(secondsInput);
    const minutes = parseTimeValue(minutesInput);
    const deltaSeconds = seconds - props.seconds;
    const deltaMinutes = minutes - props.minutes;

    if (deltaSeconds !== 0 || deltaMinutes !== 0) {
      props.onTimerUpdate(0, deltaMinutes, deltaSeconds);
    }
  }, [minutesInput, secondsInput]);

  const resetSeconds = () => {
    setSecondsInput(props.seconds.toString().padStart(2, "0"));
  };

  const resetMinutes = () => {
    setMinutesInput(props.minutes.toString().padStart(2, "0"));
  };

  useEffect(() => {
    if (props.seconds !== parseTimeValue(secondsInput)) {
      resetSeconds();
    }
    if (props.minutes !== parseTimeValue(minutesInput)) {
      resetMinutes();
    }
  }, [props.seconds, props.minutes]);

  return (
    <div className="timer-view">
      <Stack direction="row" spacing={2} sx={{ flexGrow: "1" }}>
        <Stack className="stack" direction="column" spacing={2}>
          <div className="button-container-digits">
            <IconButton
              onClick={() => props.onTimerUpdate(0, 1)}
              aria-label="Timer um eine Minute reduzieren"
              size="small"
              disabled={props.minutes === 59}
            >
              <AddIcon />
            </IconButton>
          </div>

          <div>
            <input
              type="number"
              className="timer-digits"
              value={minutesInput}
              onBlur={resetMinutes}
              onChange={(e) => setMinutesInput(e.target.value)}
              min={0}
              max={59}
            />
          </div>

          <div className="button-container-digits">
            <IconButton
              onClick={() => props.onTimerUpdate(0, -1)}
              aria-label="Timer um eine Minute reduzieren"
              disabled={props.minutes === 0}
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
              disabled={props.minutes === 59 && props.seconds === 59}
            >
              <AddIcon />
            </IconButton>
          </div>

          <div>
            <input
              type="number"
              className="timer-digits"
              value={secondsInput}
              onBlur={resetSeconds}
              onChange={(e) => setSecondsInput(e.target.value)}
              min={0}
              max={59}
            />
          </div>

          <div className="button-container-digits">
            <IconButton
              onClick={() => props.onTimerUpdate(-1)}
              aria-label="Timer um eine Sekunde reduzieren"
              disabled={props.minutes === 0 && props.seconds === 0}
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
                onClick={props.onToggleAnalogTimer}
              />
            }
            label="Analog"
          />
        </Stack>
      </Stack>
    </div>
  );
}
