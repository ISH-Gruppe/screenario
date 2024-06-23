import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton() {
  function handleModeSwitch(event: any) {
    if (event.target.value === "school") {
      localStorage.setItem("buildMode", "school");
      window.location.reload();
    } else {
      localStorage.setItem("buildMode", "workshop");
      window.location.reload();
    }
  }

  return (
    <ToggleButtonGroup
      color="primary"
      sx={{ border: "none" }}
      value={localStorage.getItem("buildMode") || "workshop"}
      exclusive
      onChange={handleModeSwitch}
      aria-label="Mode Switch"
    >
      <ToggleButton
        sx={{ border: "1px solid rgba(255, 112, 95, 0.5)" }}
        value="workshop"
      >
        Tagung
      </ToggleButton>

      <ToggleButton
        sx={{ border: "1px solid rgba(255, 112, 95, 0.5)" }}
        value="school"
      >
        Schule
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
