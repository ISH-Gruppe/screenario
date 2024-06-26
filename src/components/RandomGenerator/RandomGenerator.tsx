import React from "react";

import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import "./RandomGenerator.scss";
import BaseWindow from "../BaseWindow/BaseWindow";
import GroupMaker from "./GroupMaker/GroupMaker";
import Spinwheel from "./Spinwheel/Spinwheel";
import WordPicker from "./WordPicker/WordPicker";
import {
  useWindowState,
  WindowConfig,
} from "../WindowManager/window-management-slice";
import { WindowType } from "../WindowManager/window-type";
import { useDispatch } from "react-redux";
import {
  ActiveTab,
  GroupMakerStep,
  RandomGeneratorState,
  setRandomGeneratorActiveTab,
  tabsEnum,
} from "./RandomGeneratorState";

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

  const updateActiveTab = (event: unknown, newValue: string) => {
    dispatch(
      setRandomGeneratorActiveTab({ id, activeTab: newValue as ActiveTab })
    );
  };

  return (
    <div id="RandomGeneratorWrapper">
      <BaseWindow id={id} title={title}>
        <div id="RandomGeneratorContent">
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
                  key={tabsEnum.WORD_PICKER.key}
                  label={tabsEnum.WORD_PICKER.label}
                  value={tabsEnum.WORD_PICKER.tabIndex}
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
              <Spinwheel windowId={id} state={windowState.spinWheel} />
            </TabPanel>
            <TabPanel
              key={tabsEnum.WORD_PICKER.key}
              value={tabsEnum.WORD_PICKER.tabIndex}
            >
              <WordPicker windowId={id} />
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
    wordPicker: {
      words: [],
    },
    spinWheel: {
      movements: [
        "Kniebeugen",
        "Hampelmann",
        "Hand zu Fuß",
        "Strecken",
        "Hüpfen",
        "Rennen",
        "Klatschen",
        "Liegestützen",
      ],
      numbers: Array.from({ length: 8 }, (_, index) => (index + 1).toString()),
      words: [],
    },
  }),
  Component: ({ id }) => <RandomGenerator id={id} title="Zufallsgenerator" />,
  getDefaultLayout: () => ({
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
  }),
};
