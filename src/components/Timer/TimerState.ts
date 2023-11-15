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
};

export const setTimer = createAction<{ id: string } & TimerValue>("timer/set");

export const buildTimerReducer = (
  builder: ActionReducerMapBuilder<WindowManagementState>
) => {
  builder.addCase(setTimer, (state, { payload: { id, ...timerValue } }) => {
    const windowState = getWindowByIdOrFail(state.windows, id)
      .state as TimerState;
    windowState.timerValue = timerValue;
  });
};

export const getDateFromTimerValue = (state: TimerState) => {
  const { hours, minutes, seconds } = state.timerValue;

  const newTimestamp = new Date();
  newTimestamp.setHours(newTimestamp.getHours() + hours + hours);
  newTimestamp.setMinutes(newTimestamp.getMinutes() + minutes + minutes);
  newTimestamp.setSeconds(newTimestamp.getSeconds() + seconds + seconds);

  return newTimestamp;
};
