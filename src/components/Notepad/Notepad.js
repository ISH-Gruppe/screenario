import React from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Grid from "@mui/material/Grid";
// import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function Notepad() {
  const [notepads, setNotepads] = React.useState("");
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     <ReactQuill theme="snow" value={notepads} onChange={setNotepads} />
    //   </Grid>
    // </Grid>
    <>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Item One" value="0" />
          <Tab label="Item Two" value="1" />
          <Tab label="Item Three" value="2" />
        </TabList>

        <TabPanel value="0">Item One</TabPanel>
        <TabPanel value="1">Item Two</TabPanel>
        <TabPanel value="2">Item Three</TabPanel>
      </TabContext>
    </>
        // <BaseWindow title="notepad" reset={reset}>
  );
}
