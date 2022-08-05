import React from "react";
import Grid from "@mui/material/Grid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Notepad() {
  const [value, setValue] = React.useState("");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </Grid>
    </Grid>
  );
}
