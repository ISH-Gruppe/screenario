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
  NAME_PICKER: {
    key: "name-picker",
    label: "Namen auslosen",
    tabIndex: "2",
  },
} as const;

export enum GroupMakerStep {
  DataEntry,
  ResultView,
}

export type ActiveTab = (typeof tabsEnum)[keyof typeof tabsEnum]["tabIndex"];

export type RandomGeneratorState = {
  type: WindowType.RandomGenerator;
  activeTab: ActiveTab;
  groupGenerator: {
    activeStep: GroupMakerStep;
    names: string[];
    groups: string[][];
  };
  namePicker: {
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
export const setRandomGeneratorGroupMakerNameList = createAction<{
  id: string;
  names: string[];
}>("randomGenerator/setRandomGeneratorGroupMakerNameList");
export const setRandomGeneratorNamePickerList = createAction<{
  id: string;
  names: string[];
}>("randomGenerator/setRandomGeneratorNamePickerList");

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
      }
    )
    .addCase(
      setRandomGeneratorGroupMakerNameList,
      (state, { payload: { id, names } }) => {
        const windowState = getWindowByIdOrFail(state.windows, id)
          .state as RandomGeneratorState;
        windowState.groupGenerator.names = names;
      }
    )
    .addCase(
      setRandomGeneratorNamePickerList,
      (state, { payload: { id, names } }) => {
        const windowState = getWindowByIdOrFail(state.windows, id)
          .state as RandomGeneratorState;
        windowState.namePicker.names = names;
      }
    );
};
