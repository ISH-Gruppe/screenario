import React from "react";

import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import "./RandomGenerator.scss";
import BaseWindow from "../BaseWindow/BaseWindow";
import GroupMaker from "./GroupMaker/GroupMaker";
import Spinwheel from "./Spinwheel/Spinwheel";
import NamePicker from "./NamePicker/NamePicker";

export default function RandomGenerator({ id, title, onHide }) {
  const [activeTab, setActiveTab] = React.useState("0");

  function handleReset() {}

  function handleHide() {
    onHide(id);
  }

  const updateActiveTab = (event, newValue) => {
    setActiveTab(newValue);
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
              <GroupMaker onLoad={props.onLoad} onSave={props.onSave} />
            </TabPanel>
            <TabPanel
              key={tabsEnum.SPINWHEEL.key}
              value={tabsEnum.SPINWHEEL.tabIndex}
            >
              <Spinwheel onLoad={props.onLoad} onSave={props.onSave} />
            </TabPanel>
            <TabPanel
              key={tabsEnum.NAME_PICKER.key}
              value={tabsEnum.NAME_PICKER.tabIndex}
            >
              <NamePicker onLoad={props.onLoad} onSave={props.onSave} />
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
