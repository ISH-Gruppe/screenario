import {
  getWindowByIdOrFail,
  WindowManagementState,
  WindowType,
} from "../WindowManager/window-management-slice";
import { ActionReducerMapBuilder, createAction } from "@reduxjs/toolkit";

export const tabsEnum = {
  GROUP_MAKER: {
    key: "group-maker",
    label: "Gruppengenerator",
    tabIndex: "0",
  },
  SPINWHEEL: {
    key: "spinwheel",
    label: "Glücksrad",
    tabIndex: "1",
  },
  WORD_PICKER: {
    key: "word-picker",
    label: "Begriffe auslosen",
    tabIndex: "2",
  },
} as const;

export enum GroupMakerStep {
  DataEntry,
  ResultView,
}

export type ActiveTab = (typeof tabsEnum)[keyof typeof tabsEnum]["tabIndex"];

export type SpinwheelState = {
  movements: string[];
  numbers: string[];
  words: string[];
};

export type RandomGeneratorState = {
  type: WindowType.RandomGenerator;
  activeTab: ActiveTab;
  groupGenerator: {
    activeStep: GroupMakerStep;
    names: string[];
    groups: string[][];
    numberOfGroups: number;
  };
  wordPicker: {
    words: string[];
  };
  spinWheel: SpinwheelState;
  /**
   * @deprecated Renamed to `wordPicker` in state v-1 -> v0
   */
  namePicker?: {
    /**
     * @deprecated Moved to `wordPicker.words` in state v-1 -> v0
     */
    names: string[];
  };
};

export const setRandomGeneratorActiveTab = createAction<{
  id: string;
  activeTab: ActiveTab;
}>("randomGenerator/setActiveTab");

export const setRandomGeneratorGroupMakerActiveStep = createAction<{
  id: string;
  activeStep: GroupMakerStep;
}>("randomGenerator/setGroupMakerActiveStep");
export const setAndViewRandomGeneratorGroups = createAction<{
  id: string;
  groups: string[][];
}>("randomGenerator/setAndViewRandomGeneratorGroups");
export const setRandomGeneratorGroupMakerWordList = createAction<{
  id: string;
  words: string[];
}>("randomGenerator/setRandomGeneratorGroupMakerWordList");
export const setRandomGeneratorNumberOfGroups = createAction<{
  id: string;
  numberOfGroups: number;
}>("randomGenerator/setRandomGeneratorNumberOfGroups");

export const setRandomGeneratorWordPickerList = createAction<{
  id: string;
  words: string[];
}>("randomGenerator/setRandomGeneratorWordPickerList");

export const setSpinwheelList = createAction<{
  id: string;
  listName: keyof SpinwheelState;
  list: string[];
}>("randomGenerator/setSpinwheelList");

export const buildRandomGeneratorReducer = (
  builder: ActionReducerMapBuilder<WindowManagementState>
) => {
  builder
    .addCase(
      setRandomGeneratorActiveTab,
      (state, { payload: { id, activeTab } }) => {
        const windowState = getWindowByIdOrFail(state.windows, id)
          .state as RandomGeneratorState;
        windowState.activeTab = activeTab;
      }
    )
    .addCase(
      setRandomGeneratorGroupMakerActiveStep,
      (state, { payload: { id, activeStep } }) => {
        const windowState = getWindowByIdOrFail(state.windows, id)
          .state as RandomGeneratorState;
        windowState.groupGenerator.activeStep = activeStep;
      }
    )
    .addCase(
      setAndViewRandomGeneratorGroups,
      (state, { payload: { id, groups } }) => {
        const windowState = getWindowByIdOrFail(state.windows, id)
          .state as RandomGeneratorState;
        windowState.groupGenerator.groups = groups;
        windowState.groupGenerator.activeStep = GroupMakerStep.ResultView;
      }
    )
    .addCase(
      setRandomGeneratorGroupMakerWordList,
      (state, { payload: { id, words } }) => {
        const windowState = getWindowByIdOrFail(state.windows, id)
          .state as RandomGeneratorState;
        windowState.groupGenerator.names = words;

        // Enforce minimum of 1, unless there are no names
        if (words.length === 0) {
          windowState.groupGenerator.numberOfGroups = 0;
        } else if (windowState.groupGenerator.numberOfGroups < 1) {
          windowState.groupGenerator.numberOfGroups = 1;
        }

        // Enforce maximum of name list length
        if (windowState.groupGenerator.numberOfGroups > words.length) {
          windowState.groupGenerator.numberOfGroups = words.length;
        }
      }
    )
    .addCase(
      setRandomGeneratorNumberOfGroups,
      (state, { payload: { id, numberOfGroups } }) => {
        const windowState = getWindowByIdOrFail(state.windows, id)
          .state as RandomGeneratorState;
        windowState.groupGenerator.numberOfGroups = numberOfGroups;
      }
    )
    .addCase(setSpinwheelList, (state, { payload: { id, list, listName } }) => {
      const windowState = getWindowByIdOrFail(state.windows, id)
        .state as RandomGeneratorState;
      windowState.spinWheel[listName] = list;
    });

  builder.addCase(
    setRandomGeneratorWordPickerList,
    (state, { payload: { id, words } }) => {
      const windowState = getWindowByIdOrFail(state.windows, id)
        .state as RandomGeneratorState;
      windowState.wordPicker.words = words;
    }
  );
};
