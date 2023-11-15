import React from "react";
import "./NamePicker.scss";
import TextareaWordlist from "../TextareaWordlist";
import RandomPicker from "./RandomPicker/RandomPicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";
import { useWindowState } from "../../WindowManager/window-management-slice";
import {
  RandomGeneratorState,
  setRandomGeneratorNamePickerList,
} from "../RandomGeneratorState";

export default function NamePicker({ windowId }: { windowId: string }) {
  const windowState = useWindowState(windowId) as RandomGeneratorState;
  const dispatch = useDispatch();
  const nameList = windowState.namePicker.names;
  const [availableNamesToDraw, setNameAvailableNamesToDraw] =
    React.useState(nameList);

  const [rememberChosen, setRememberChosen] = React.useState(true);

  function handleRememberChosenChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.checked) {
      resetAvailableNamesToDraw(nameList);
    }

    setRememberChosen(event.target.checked);
  }

  function handleWordlistChange(updatedList: string[]) {
    // console.log("handleWordlistChange ", updatedList);
    // console.log(updatedList);
    resetAvailableNamesToDraw(updatedList);
    dispatch(
      setRandomGeneratorNamePickerList({
        id: windowId,
        names: updatedList,
      })
    );
  }

  function handleChoiceChange(selectedName: string) {
    // console.log("selectedName ", selectedName);

    if (rememberChosen) {
      // Remove choice from array
      // Reset the array if it's empty after removal

      setNameAvailableNamesToDraw((prevAvailableNamesToDraw) => {
        // const leftNamesToDraw = [...prevAvailableNamesToDraw];
        const leftNamesToDraw = prevAvailableNamesToDraw.filter(
          (name) => selectedName !== name
        );

        // console.log("leftNamesToDraw ", leftNamesToDraw);

        if (leftNamesToDraw.length > 0) {
          return leftNamesToDraw;
        } else {
          return nameList;
        }
      });
    }
  }

  function resetAvailableNamesToDraw(newNameList: string[]) {
    setNameAvailableNamesToDraw(newNameList);
  }

  return (
    <>
      <RandomPicker
        items={availableNamesToDraw}
        onChoiceChange={handleChoiceChange}
      />

      <div className="checkbox-container">
        <FormControlLabel
          label="Jeden Namen nur ein Mal auslosen"
          control={
            <Checkbox
              size="small"
              checked={rememberChosen}
              onChange={handleRememberChosenChange}
            />
          }
        />
      </div>

      <TextareaWordlist
        valueAsList={nameList}
        handleWordlistChange={handleWordlistChange}
        minRows="8"
        placeholder="Hier einen Namen pro Zeile einfügen "
        ariaLabel="Namensfeld für zufällige Auslosung von Namen"
      />
    </>
  );
}
