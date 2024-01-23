import React from "react";

import "./GroupMaker.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import EntryView from "./EntryView";
import ResultView from "./ResultView";

export default function GroupMaker(props) {
  const [activeStep, setActiveStep] = React.useState(loadStateActiveStep());
  const [groups, setGroups] = React.useState(loadStateGroups());

  function loadStateActiveStep() {
    return props.onLoad("GROUP_GENERATOR_STEP")
      ? props.onLoad("GROUP_GENERATOR_STEP")
      : "0";
  }

  function loadStateGroups() {
    return props.onLoad("GROUP_GENERATOR_GROUPS")
      ? props.onLoad("GROUP_GENERATOR_GROUPS")
      : [];
  }

  function handleGroupChange(newGroups) {
    setGroups(newGroups);
    setActiveStep("1");

    props.onSave("GROUP_GENERATOR_STEP", "1");
    props.onSave("GROUP_GENERATOR_GROUPS", newGroups);
  }

  function onStepBackRequest() {
    setGroups(groups);
    setActiveStep("0");

    props.onSave("GROUP_GENERATOR_STEP", "0");
    props.onSave("GROUP_GENERATOR_GROUPS", groups);
  }

  function onRecreateGroupsRequest() {
    // TODO: Maybe later haha
  }

  return (
    <>
      <Stepper activeStep={Number(activeStep)}>
        <Step onClick={() => setActiveStep("0")}>
          <StepLabel>Namensliste</StepLabel>
        </Step>
        <Step>
          <StepLabel>Gruppenverteilung</StepLabel>
        </Step>
      </Stepper>

      <div className="stepper-content">
        {activeStep === "0" && (
          <EntryView
            groups={groups}
            onGroupChange={handleGroupChange}
            onLoad={props.onLoad}
            onSave={props.onSave}
          />
        )}
        {activeStep === "1" && (
          <ResultView
            groups={groups}
            onStepBackRequest={onStepBackRequest}
            onRecreateGroupsRequest={onRecreateGroupsRequest}
          />
        )}
      </div>
    </>
  );
}
