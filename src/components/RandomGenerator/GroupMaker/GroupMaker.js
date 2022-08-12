import React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import HorizontalLinearStepper from "./Stepper";

const steps = ["Select master blaster campaign settings", "Create an ad group"];

export default function GroupMaker() {
  const [activeStep, setActiveStep] = React.useState("0");

  return (
    <>
    <HorizontalLinearStepper />
      <Box sx={{ width: "100%" }}>
        {/* <Stepper
          activeStep={activeStep}
          sx={{
            "& .MuiStepConnector-line": {
              borderTopWidth: "4px",
            },
            "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
              borderColor: "red",
            },
            "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
              borderColor: "green",
            },
          }}
        >
          <Step onClick={() => setActiveStep("0")} key="0">
            <StepLabel>1</StepLabel>
          </Step>
          <Step onClick={() => setActiveStep("1")} key="1">
            <StepLabel>2</StepLabel>
          </Step>
        </Stepper> */}
      </Box>
    </>
  );
}
