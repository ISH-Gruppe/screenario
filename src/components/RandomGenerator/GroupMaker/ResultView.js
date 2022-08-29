import React from "react";

import "./ResultView.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function ResultView(props) {
  const groupBoxComponents = props.groups.map((group, index) => {
    return (
      <Box key={index} className="groupbox-window">
        <b>Gruppe {index + 1}</b>
        {group.map((element, i) => {
          return <p key={i}>{`${element}\n`} </p>;
        })}
      </Box>
    );
  });

  return (
    <div>
      <div className="groupbox-containter">{groupBoxComponents}</div>
      <div className="navigation-buttons-containter">
        <Button
          onClick={props.onStepBackRequest}
          variant="outlined"
          sx={{ marginRight: "0.5rem" }}
        >
          Zurück
        </Button>
        {/* <Button onClick={props.onStepBackRequest} variant="outlined">
          Neu verteilen
        </Button> */}
      </div>
    </div>
  );
}
