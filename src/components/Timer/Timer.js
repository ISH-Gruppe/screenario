import React from "react";
import { useTimer } from "react-timer-hook";

import "./Timer.scss";
import useTimerRinging from "./subcomponents/useTimerRinging";
import TimerView from "./subcomponents/TimerView";
import MusicSelector from "./subcomponents/MusicSelector";
import VolumeSlider from "./subcomponents/VolumeSlider";

import Grid from "@mui/material/Grid";
import BaseWindow from "../BaseWindow/BaseWindow";

export default function Timer({ id, title, onHide, onChange }) {
  /*
   * Explicitly providing an undefined state since passing a valid TimeStamp from WindowManager
   * doesn't seem to trigger anything in the useTimer hook.
   * Let's assume that having 00:00:00 is a desired initial state
   *
   * Another option might be to just create a new Date stamp so that our IDE will know that the expected type is a Date
   **/
  const [initialTimerValue, setInitialTimerValue] = React.useState(undefined);
  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
      initialTimerValue,
      autoStart: false,
      onExpire: handleTimerCompletion,
    });

  const [ringTimer] = useTimerRinging();

  function updateAndRestartTimer(
    secondsValue = 0,
    minutesValue = 0,
    hoursValue = 0
  ) {
    const newTimestamp = new Date();
    newTimestamp.setHours(newTimestamp.getHours() + hours + hoursValue);
    newTimestamp.setMinutes(newTimestamp.getMinutes() + minutes + minutesValue);
    newTimestamp.setSeconds(newTimestamp.getSeconds() + seconds + secondsValue);

    setInitialTimerValue(newTimestamp);
    restart(newTimestamp, isRunning ? true : false);
  }

  function startTimer() {
    resume();
  }

  function stopTimer() {
    pause();
  }

  function handleTimerCompletion() {
    ringTimer();
    setInitialTimerValue(initialTimerValue);
  }

  const [musicVolume, setMusicVolume] = React.useState(0.9);
  const [musicVolumeBeforeMute, setMusicVolumeBeforeMute] =
    React.useState(musicVolume);

  const handleVolumeChange = (event, newValue) => {
    setMusicVolume(newValue);
    setMusicVolumeBeforeMute(newValue);
  };

  function muteVolume() {
    setMusicVolume(0);
  }

  function unmuteVolume() {
    setMusicVolume(musicVolumeBeforeMute);
  }

  function handleReset() {}

  function handleHide() {
    onHide(id);
  }

  return (
    <BaseWindow id={id} title={title} onReset={handleReset} onHide={handleHide}>
      <Grid container spacing={2} style={{ textAlign: "center" }}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <TimerView
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            startTimer={startTimer}
            stopTimer={stopTimer}
            onTimerUpdate={updateAndRestartTimer}
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
