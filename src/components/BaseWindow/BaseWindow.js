import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import "./BaseWindow.css";

export default function BaseWindow({ id, title, children, onReset, onHide }) {
  function handleHide() {
    onHide(id);
  }

  function handleReset() {
    onReset(id);
  }

  return (
    <Box
      className={"window window-" + title + " "}
      sx={{
        backgroundColor: "white",
        border: 1,
        boxShadow: 15,
        p: 2,
      }}
    >
      <div className="window-top-bar">
        <button className="resetButton" onClick={handleReset}>
          Reset
        </button>
        <button className="hideButton" onClick={handleHide}>
          hide
        </button>

        <span className="window-title"> {title} </span>
      </div>

      <Container className="window-content">{children}</Container>
    </Box>
  );
}
