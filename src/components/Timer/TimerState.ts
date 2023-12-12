import {
  getWindowByIdOrFail,
  WindowManagementState,
  WindowType,
} from "../WindowManager/window-management-slice";
import { ActionReducerMapBuilder, createAction } from "@reduxjs/toolkit";

type TimerValue = {
  hours: number;
  minutes: number;
  seconds: number;
};
export type TimerState = {
  type: WindowType.Timer;
  timerValue: TimerValue;
  showAnalogTimer: boolean;
};

export const setTimer = createAction<{ id: string } & TimerValue>("timer/set");
export const toggleAnalogTimer = createAction<{ id: string }>(
  "timer/toggleAnalogTimer"
);

export const buildTimerReducer = (
  builder: ActionReducerMapBuilder<WindowManagementState>
) => {
  builder
    .addCase(setTimer, (state, { payload: { id, ...timerValue } }) => {
      const windowState = getWindowByIdOrFail(state.windows, id)
        .state as TimerState;
      windowState.timerValue = timerValue;
    })
    .addCase(toggleAnalogTimer, (state, { payload: { id } }) => {
      const windowState = getWindowByIdOrFail(state.windows, id)
        .state as TimerState;
      windowState.showAnalogTimer = !windowState.showAnalogTimer;

      if (windowState.showAnalogTimer && windowState.timerValue.hours > 0) {
        windowState.timerValue = {
          hours: 1,
          minutes: 0,
          seconds: 0,
        };
      }
    });
};

export const getDateFromTimerValue = (state: TimerState) => {
  const { hours, minutes, seconds } = state.timerValue;

  const newTimestamp = new Date();
  newTimestamp.setHours(newTimestamp.getHours() + hours);
  newTimestamp.setMinutes(newTimestamp.getMinutes() + minutes);
  newTimestamp.setSeconds(newTimestamp.getSeconds() + seconds);

  return newTimestamp;
};
