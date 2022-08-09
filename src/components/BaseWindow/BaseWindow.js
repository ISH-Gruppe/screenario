import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";

import "./BaseWindow.css";

export default function BaseWindow({ id, title, children, onReset, onHide }) {
  function handleHide() {
    onHide(id);
  }

  function handleReset() {
    onReset(id);
  }

  return (
    <Card
      className={"window window-" + title + " " + getVisibility()}
      sx={{ minWidth: 275 }}
    >
      <Box
        sx={{
          "& button": { m: 1 },
          "display": "flex",
          "justifyContent": "space-between",
          "alignItems": "center",
        }}
      >
        <Button
          className="resetButton"
          onClick={handleReset}
          variant="outlined"
          size="small"
        >
          Reset
        </Button>

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

      <CardContent>
        <Container className="window-content">{children}</Container>
      </CardContent>
    </Card>
  );
}
