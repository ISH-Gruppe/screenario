import React, { useMemo, useState } from "react";

// UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// Components
import BaseWindow from "../BaseWindow/BaseWindow";

// CSS

export default function Notepad({
  id,
  title,
  visible,
  onHide,
  onChange,
  onSave,
  onLoad,
}) {

  function handleReset() {}

  function handleHide() {
    onHide(id);
  }


  return (
    <BaseWindow id={id} title={title} onReset={handleReset} onHide={handleHide}>
      <Box sx={{ width: "100%" }}>
       <iframe style={{width:"100%", height:"1000px", border:0}} src="https://app.schnaq.com/de/schnaq/e8f54922-0d88-4953-8f43-ddc819d7f201?hide-activations=true"></iframe>
      </Box>
    </BaseWindow>
  );
}
