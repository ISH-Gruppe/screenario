import React, { useEffect, useRef, useState } from "react";

import "./TimerView.scss";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useWindowState } from "../../WindowManager/window-management-slice";
import { FormControlLabel, Switch } from "@mui/material";
import { TimerState } from "../TimerState";
import { match } from "ts-pattern";

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
  onTimerUpdate: (deltaSeconds?: number, deltaMinutes?: number) => void;
  startTimer: () => void;
  stopTimer: () => void;
  isTimerRunning: boolean;
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
  const secondsInputRef = useRef<HTMLInputElement>(null);
  const minutesInputRef = useRef<HTMLInputElement>(null);

  function setTimeFromInputs(
    secondsStr = secondsInput,
    minutesStr = minutesInput
  ) {
    const seconds = parseTimeValue(secondsStr);
    const minutes = parseTimeValue(minutesStr);
    const deltaSeconds = seconds - props.seconds;
    const deltaMinutes = minutes - props.minutes;

    if (deltaSeconds !== 0 || deltaMinutes !== 0) {
      props.onTimerUpdate(deltaSeconds, deltaMinutes);
    }
  }

  useEffect(() => setTimeFromInputs(), [minutesInput, secondsInput]);

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

  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutesInput(event.target.value);
    if (event.target.value.length === 2) {
      requestAnimationFrame(() => {
        setTimeFromInputs(secondsInput, event.target.value);
        secondsInputRef.current?.focus();
        secondsInputRef.current?.select();
      });
    }
  };

  const onMinutesKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowUp"
    ) {
      event.preventDefault();
      secondsInputRef.current?.focus();
      secondsInputRef.current?.select();
    }
  };

  const onSecondsKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    ) {
      event.preventDefault();
      minutesInputRef.current?.focus();
      minutesInputRef.current?.select();
    } else if (event.key === "Backspace" && secondsInput.length === 0) {
      setTimeFromInputs("");
      minutesInputRef.current?.focus();
    } else if (event.key === "Enter") {
      props.startTimer();
      secondsInputRef.current?.blur();
    }
  };

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
              ref={minutesInputRef}
              type="number"
              className="timer-digits"
              disabled={props.isTimerRunning}
              value={minutesInput}
              onBlur={resetMinutes}
              onChange={onMinutesChange}
              onKeyDown={onMinutesKeyDown}
              onClick={(e) => e.currentTarget.select()}
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
              ref={secondsInputRef}
              type="number"
              className="timer-digits"
              disabled={props.isTimerRunning}
              value={secondsInput}
              onBlur={resetSeconds}
              onChange={(e) => setSecondsInput(e.target.value)}
              onClick={(e) => e.currentTarget.select()}
              onKeyDown={onSecondsKeyDown}
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
          <Button
            onClick={props.startTimer}
            variant="contained"
            size="small"
            disabled={props.isTimerRunning}
          >
            Start
          </Button>
          <Button
            onClick={props.stopTimer}
            variant="outlined"
            size="small"
            disabled={!props.isTimerRunning}
          >
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
