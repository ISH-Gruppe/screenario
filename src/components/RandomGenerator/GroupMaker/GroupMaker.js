import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";

import HorizontalLinearStepper from "./Stepper";
import EntryView from "./EntryView";
import ResultView from "./ResultView";

const steps = ["Select master blaster campaign settings", "Create an ad group"];

export default function GroupMaker() {
  const [activeStep, setActiveStep] = React.useState("0");
  const [groups, setGroups] = React.useState([]);

  function handleGroupChange(newGroups) {
    console.log("handleGroupChange parent, ", newGroups);
    setGroups(newGroups);
  }

  return (
    <>
      <Stepper activeStep={activeStep}>
        <Step onClick={() => setActiveStep("0")}>
          <StepLabel>Namensliste</StepLabel>
        </Step>
        <Step onClick={() => setActiveStep("1")}>
          <StepLabel>Gruppenverteilung</StepLabel>
        </Step>
      </Stepper>

      {/* <HorizontalLinearStepper /> */}

      <div style={{ paddingTop: "1.5rem" }}>
        {activeStep === "0" && (
          <EntryView groups={groups} onGroupChange={handleGroupChange} />
        )}
        {activeStep === "1" && <ResultView groups={groups} />}
      </div>
    </>
  );
}
