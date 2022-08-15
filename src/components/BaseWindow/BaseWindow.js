import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";

import "./BaseWindow.css";

export default function BaseWindow({
  id,
  title,
  children,
  onReset,
  onHide,
  resetName,
}) {
  function handleHide() {
    console.log("handleHide", id);
    onHide(id);
  }

  function handleReset() {
    onReset(id);
  }

  return (
    <Card className={"window window-" + id + " "} sx={{ minWidth: 275 }}>
      <Box
        className="drag-handle"
        sx={{
          "& button": { m: 1 },
          "display": "flex",
          "justifyContent": "space-between",
          "alignItems": "center",
        }}
      >
        {
          // <Button
          //   className="resetButton"
          //   onClick={handleReset}
          //   variant="outlined"
          //   size="small"
          // >
          //   {resetName ? resetName : "Reset"}
          // </Button>
        }
        <h3 className="window-title">{title}</h3>

        <IconButton
          className="hideButton"
          onClick={handleHide}
          aria-label="delete"
          size="small"
        >
          <RemoveIcon />
        </IconButton>
      </Box>

      <CardContent className="window-content">
        <Container
          disableGutters={true}
          className="content-container"
          id={`content-container-${id}`}
        >
          {children}
        </Container>
      </CardContent>
    </Card>
  );
}
