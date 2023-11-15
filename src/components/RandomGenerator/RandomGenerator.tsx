import React from "react";

import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import "./RandomGenerator.scss";
import BaseWindow from "../BaseWindow/BaseWindow";
import GroupMaker from "./GroupMaker/GroupMaker";
import Spinwheel from "./Spinwheel/Spinwheel";
import NamePicker from "./NamePicker/NamePicker";
import {
  useWindowState,
  WindowConfig,
  windowManagementActions,
  WindowType,
} from "../WindowManager/window-management-slice";
import { useDispatch } from "react-redux";
import {
  ActiveTab,
  GroupMakerStep,
  RandomGeneratorState,
  setRandomGeneratorActiveTab,
  tabsEnum,
} from "./RandomGeneratorState";
import { replaceState } from "../../redux-helpers";

export default function RandomGenerator({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const windowState = useWindowState(id) as RandomGeneratorState;
  const activeTab = windowState.activeTab;
  const dispatch = useDispatch();

  function handleReset() {}

  function handleHide() {
    dispatch(windowManagementActions.closeWindow(id));
  }

  const updateActiveTab = (event: unknown, newValue: string) => {
    dispatch(
      setRandomGeneratorActiveTab({ id, activeTab: newValue as ActiveTab })
    );
  };

  const test = () => {
    dispatch(
      replaceState({
        welcome: { isOpen: true },
      })
    );
  };

  return (
    <div id="RandomGeneratorWrapper">
      <BaseWindow
        id={id}
        title={title}
        onReset={handleReset}
        onHide={handleHide}
      >
        <div id="RandomGeneratorContent">
          <button onClick={test}>Test</button>
          <TabContext value={activeTab}>
            <div className="tabs">
              <TabList onChange={updateActiveTab}>
                <Tab
                  key={tabsEnum.GROUP_MAKER.key}
                  label={tabsEnum.GROUP_MAKER.label}
                  value={tabsEnum.GROUP_MAKER.tabIndex}
                />
                <Tab
                  key={tabsEnum.SPINWHEEL.key}
                  label={tabsEnum.SPINWHEEL.label}
                  value={tabsEnum.SPINWHEEL.tabIndex}
                />
                <Tab
                  key={tabsEnum.NAME_PICKER.key}
                  label={tabsEnum.NAME_PICKER.label}
                  value={tabsEnum.NAME_PICKER.tabIndex}
                />
              </TabList>
            </div>

            <TabPanel
              key={tabsEnum.GROUP_MAKER.key}
              value={tabsEnum.GROUP_MAKER.tabIndex}
            >
              <GroupMaker windowId={id} />
            </TabPanel>
            <TabPanel
              key={tabsEnum.SPINWHEEL.key}
              value={tabsEnum.SPINWHEEL.tabIndex}
            >
              <Spinwheel />
            </TabPanel>
            <TabPanel
              key={tabsEnum.NAME_PICKER.key}
              value={tabsEnum.NAME_PICKER.tabIndex}
            >
              <NamePicker windowId={id} />
            </TabPanel>
          </TabContext>
        </div>
      </BaseWindow>
    </div>
  );
}

export const randomGeneratorWindowConfig: WindowConfig = {
  getInitialState: () => ({
    type: WindowType.RandomGenerator,
    activeTab: "0",
    groupGenerator: {
      names: [],
      groups: [],
      activeStep: GroupMakerStep.DataEntry,
      numberOfGroups: 0,
    },
    namePicker: {
      names: [],
    },
  }),
  Component: ({ id }) => <RandomGenerator id={id} title="Zufallsgenerator" />,
  defaultLayout: {
    xs: {
      w: 4,
      h: 5,
      x: 0,
      y: 2,
      minW: 2,
    },
    sm: {
      w: 2,
      h: 8,
      x: 0,
      y: 21,
      minW: 2,
    },
    md: {
      w: 10,
      h: 8,
      x: 0,
      y: 8,
      minW: 10,
      minH: 8,
    },
    lg: {
      w: 16,
      h: 8,
      x: 0,
      y: 8,
      minW: 10,
      minH: 8,
    },
  },
};
