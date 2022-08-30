import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export default function BrushPicker({ brushes, onClick, selectedBrush }) {
  return (
    <Box
      sx={{
        "display": "flex",
        "flexWrap": "wrap",
        "& > :not(style)": {
          m: "2px",
        },
      }}
    >
      {brushes.map((brush, index) => {
        const isSelected = brush.id == selectedBrush.id;

        return (
          <Box
            key={index}
            sx={{
              "height": "34px",
              "width": brush.size * 2 + 6,
              "cursor": "pointer",
              "padding": "none",
              "opacity": isSelected ? "1" : "0.3",
              "&:hover": { opacity: isSelected ? "1" : "0.6" },
            }}
            onClick={() => onClick(brush)}
          >
            <Paper
              elevation={isSelected ? 5 : 0}
              sx={{
                backgroundColor: "black",
                cursor: "pointer",
                borderRadius: "50%",
                width: brush.size * 1.5,
                height: brush.size * 1.5,
                position: "relative",
                opacity: 1,
                marginTop: `${(34 - brush.size * 1.5) / 2}px`,
              }}
              onClick={() => onClick(brush)}
              key={index}
            />
          </Box>
        );
      })}
    </Box>
  );
}
