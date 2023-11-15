import React from "react";

import "./GroupMaker.scss";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import EntryView from "./EntryView";
import ResultView from "./ResultView";
import { useDispatch } from "react-redux";
import { useWindowState } from "../../WindowManager/window-management-slice";
import {
  GroupMakerStep,
  setAndViewRandomGeneratorGroups,
  setRandomGeneratorGroupMakerActiveStep,
} from "../RandomGeneratorState";

export default function GroupMaker({ windowId }) {
  /**
   * @type {import("../RandomGeneratorState").RandomGeneratorState}
   */
  const windowState = useWindowState(windowId);
  const dispatch = useDispatch();
  const activeStep = windowState.groupGenerator.activeStep;
  const groups = windowState.groupGenerator.groups;

  function handleGroupChange(newGroups) {
    dispatch(
      setAndViewRandomGeneratorGroups({
        id: windowId,
        groups: newGroups,
      })
    );
  }

  function onStepBackRequest() {
    dispatch(
      setRandomGeneratorGroupMakerActiveStep({
        id: windowId,
        activeStep: GroupMakerStep.DataEntry,
      })
    );
  }

  function onRecreateGroupsRequest() {
    // TODO: Maybe later haha
  }

  return (
    <>
      <Stepper activeStep={activeStep}>
        <Step onClick={onStepBackRequest}>
          <StepLabel>Namensliste</StepLabel>
        </Step>
        <Step>
          <StepLabel>Gruppenverteilung</StepLabel>
        </Step>
      </Stepper>

      <div className="stepper-content">
        {activeStep === GroupMakerStep.DataEntry && (
          <EntryView
            windowId={windowId}
            groups={groups}
            onGroupChange={handleGroupChange}
          />
        )}
        {activeStep === GroupMakerStep.ResultView && (
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
