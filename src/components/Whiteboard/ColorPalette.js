import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";

export default function ColorPalette({ palette, onClick, selectedColor }) {
  return (
    <Box
      sx={{
        "display": "flex",
        "flexWrap": "wrap",
        "& > :not(style)": {
          m: "2px",
          width: 34,
          height: 34,
        },
      }}
    >
      {palette.map((color, index) => {
        const isSelected = color.id == selectedColor.id;
        return (
          <Paper
            key={index}
            elevation={isSelected ? 5 : 0}
            sx={{
              "backgroundColor": color.value,
              "cursor": "pointer",
              "boxSizing": "content-box",
              "opacity": isSelected ? "1" : "0.5",
              "&:hover": { opacity: isSelected ? "1" : "0.8" },
            }}
            onClick={() => onClick(color)}
          />
        );
      })}
    </Box>
  );
}
