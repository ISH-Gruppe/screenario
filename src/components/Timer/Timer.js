import React from "react";
import { useTimer } from "react-timer-hook";

import BaseWindow from "../BaseWindow/BaseWindow";

import "./Timer.css";

export default function Timer({ id, title, visible, onReset, onHide }) {
  const initialTimerValue = new Date();
  initialTimerValue.setSeconds(initialTimerValue.getSeconds() + 600);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    initialTimerValue,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <BaseWindow
      id="timer"
      title="Timer"
      visible={true}
      onReset={onReset}
      onHide={onHide}
    >
      <div className="cd-body" style={{ textAlign: "center" }}>
        <h1>react-timer-hook </h1>
        <p>Timer Demo</p>

        <div className="cd-display">
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>

        <p>{isRunning ? "Running" : "Not running"}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
        >
          Restart
        </button>
      </div>
    </BaseWindow>
  );
}
