import React, { useState } from "react";
import { useTimer } from "react-timer-hook";

import "./Timer.scss";
import useTimerRinging from "./subcomponents/useTimerRinging";
import TimerView from "./subcomponents/TimerView";
import MusicSelector from "./subcomponents/MusicSelector";
import VolumeSlider from "./subcomponents/VolumeSlider";

import Grid from "@mui/material/Grid";
import BaseWindow from "../BaseWindow/BaseWindow";
import {
  useWindowState,
  WindowConfig,
  WindowType,
} from "../WindowManager/window-management-slice";
import { useDispatch } from "react-redux";
import {
  getDateFromTimerValue,
  setTimer,
  TimerState,
  toggleAnalogTimer,
} from "./TimerState";
import { AnalogTimer } from "./subcomponents/AnalogTimer";

export default function Timer({ id, title }: { id: string; title: string }) {
  const dispatch = useDispatch();
  const windowState = useWindowState(id) as TimerState;
  /*
   * Explicitly providing an undefined state since passing a valid TimeStamp from WindowManager
   * doesn't seem to trigger anything in the useTimer hook.
   * Let's assume that having 00:00:00 is a desired initial state
   *
   * Another option might be to just create a new Date stamp so that our IDE will know that the expected type is a Date
   **/
  const [initialTimerValue, setInitialTimerValue] = useState(
    getDateFromTimerValue(windowState)
  );
  const {
    totalSeconds,
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    // initialTimerValue,
    expiryTimestamp: initialTimerValue,
    autoStart: false,
    onExpire: handleTimerCompletion,
  });

  const [ringTimer] = useTimerRinging();

  function updateAndRestartTimer(deltaSeconds = 0, deltaMinutes = 0) {
    const newTimestamp = new Date();
    newTimestamp.setMinutes(newTimestamp.getMinutes() + minutes + deltaMinutes);
    newTimestamp.setSeconds(newTimestamp.getSeconds() + seconds + deltaSeconds);

    dispatch(
      setTimer({
        id,
        minutes: minutes + deltaMinutes,
        seconds: seconds + deltaSeconds,
      })
    );
    restart(newTimestamp, isRunning);
  }

  const onToggleAnalogTimer = () => {
    dispatch(toggleAnalogTimer({ id }));
  };

  function startTimer() {
    resume();
  }

  function stopTimer() {
    pause();
  }

  function handleTimerCompletion() {
    ringTimer();
    setInitialTimerValue(getDateFromTimerValue(windowState));
  }

  const [musicVolume, setMusicVolume] = useState(0);
  const [musicVolumeBeforeMute, setMusicVolumeBeforeMute] = useState(0.9);

  const handleVolumeChange = (event: unknown, newValue: number) => {
    setMusicVolume(newValue);
    setMusicVolumeBeforeMute(newValue);
  };

  function muteVolume() {
    setMusicVolume(0);
  }

  function unmuteVolume() {
    setMusicVolume(musicVolumeBeforeMute);
  }

  return (
    <BaseWindow id={id} title={title}>
      <Grid container spacing={2} style={{ textAlign: "center" }}>
        {windowState.showAnalogTimer && (
          <div className="analog-timer">
            <AnalogTimer totalSeconds={totalSeconds} />
          </div>
        )}

        <Grid item xs={12} style={{ textAlign: "center" }}>
          <TimerView
            minutes={minutes}
            seconds={seconds}
            startTimer={startTimer}
            stopTimer={stopTimer}
            onTimerUpdate={updateAndRestartTimer}
            windowId={id}
            onToggleAnalogTimer={onToggleAnalogTimer}
          />
        </Grid>

        <div className="child-container">
          <MusicSelector isTimerRunning={isRunning} musicVolume={musicVolume} />
        </div>

        <div className="child-container volume-control">
          <VolumeSlider
            handleVolumeChange={handleVolumeChange}
            muteVolume={muteVolume}
            unmuteVolume={unmuteVolume}
            musicVolume={musicVolume}
          />
        </div>
      </Grid>
    </BaseWindow>
  );
}

export const timerWindowConfig: WindowConfig = {
  getInitialState: () => ({
    type: WindowType.Timer,
    timerValue: {
      minutes: 0,
      seconds: 0,
    },
    showAnalogTimer: false,
  }),
  Component: ({ id }) => <Timer id={id} title="Timer" />,
  defaultLayout: {
    xs: {
      w: 2,
      h: 2,
      x: 0,
      y: 0,
      minW: 2,
      minH: 2,
    },
    sm: { w: 2, h: 5, x: 0, y: 7 },
    md: {
      w: 12,
      h: 8,
      x: 12,
      y: 0,
      minW: 6,
      minH: 4,
    },
    lg: {
      w: 14,
      h: 8,
      x: 18,
      y: 0,
      minW: 6,
      minH: 4,
    },
  },
};
