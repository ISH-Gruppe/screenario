import React from "react";

import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import "./RandomGenerator.scss";
import BaseWindow from "../BaseWindow/BaseWindow";
import GroupMaker from "./GroupMaker/GroupMaker";
import Spinwheel from "./Spinwheel/Spinwheel";
import NamePicker from "./NamePicker/NamePicker";

export default function RandomGenerator() {
  const [activeTab, setActiveTab] = React.useState("0");

  function reset() {}

  const updateActiveTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div id="RandomGeneratorWrapper">
      <BaseWindow title="Zufallsgenerator">
        <div id="RandomGeneratorContent">
          <TabContext value={activeTab}>
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

            <TabPanel
              key={tabsEnum.GROUP_MAKER.key}
              value={tabsEnum.GROUP_MAKER.tabIndex}
            >
              <GroupMaker />
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
              <NamePicker />
            </TabPanel>
          </TabContext>
        </div>
      </BaseWindow>
    </div>
  );
}

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
};
