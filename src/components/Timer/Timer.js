import React from "react";
import { useTimer } from "react-timer-hook";

import "./Timer.scss";
import TimerView from "./subcomponents/TimerView";
import MusicSelector from "./subcomponents/MusicSelector";
import VolumeSlider from "./subcomponents/VolumeSlider";

import Grid from "@mui/material/Grid";

export default function Timer({ expiryTimestamp }) {
  const [initialTimerValue, setInitialTimerValue] =
    React.useState(expiryTimestamp);

  const { seconds, minutes, hours, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });

  function updateAndRestartTimer(
    secondsValue = 0,
    minutesValue = 0,
    hoursValue = 0
  ) {
    const newTimestamp = new Date();
    newTimestamp.setHours(newTimestamp.getHours() + hours + hoursValue);
    newTimestamp.setMinutes(newTimestamp.getMinutes() + minutes + minutesValue);
    newTimestamp.setSeconds(newTimestamp.getSeconds() + seconds + secondsValue);
    restart(newTimestamp);
  }

  // How to set audio volume:
  // audio.volume = 0.2;

  return (
    <Grid container spacing={2} style={{ textAlign: "center" }}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <TimerView hours={hours} minutes={minutes} seconds={seconds} onTimerUpdate={updateAndRestartTimer} />
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
