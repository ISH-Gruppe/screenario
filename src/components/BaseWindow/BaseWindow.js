import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function BaseWindow(props) {
  const id = props.id;
  const title = props.title;
  const reset = props.reset;
  const children = props.children;
  const visible = props.visible;

  function triggerMinimize() {}

  return (
    <Box
      className={"window window-" + title}
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "white",
        border: 1,
        boxShadow: 15,
        p: 2,
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div className="window-top-bar">
        <button className="resetButton" onClick={reset}>
          {" "}
          Reset{" "}
        </button>
        <span className="window-title"> {title} </span>
      </div>

      <Container className="window-content">{children}</Container>
    </Box>
  );
}
