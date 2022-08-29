import React from "react";
import "./NamePicker.scss";
import TextareaWordlist from "../TextareaWordlist";
import RandomPicker from "./RandomPicker/RandomPicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function NamePicker(props) {
  const [nameList, setNameList] = React.useState(loadState());
  const [availableNamesToDraw, setNameAvailableNamesToDraw] =
    React.useState(nameList);

  const [rememberChosen, setRememberChosen] = React.useState(true);

  function loadState() {
    const loadedGroup = props.onLoad("NAME_PICKER")
      ? props.onLoad("NAME_PICKER")
      : [];
    // console.log("loadedGroup ", loadedGroup);

    return loadedGroup;
  }

  function handleRememberChosenChange(event) {
    if (!event.target.checked) {
      resetAvailableNamesToDraw(nameList);
    }

    setRememberChosen(event.target.checked);
  }

  function handleWordlistChange(updatedList) {
    // console.log(updatedList);
    setNameList(updatedList);
    resetAvailableNamesToDraw(updatedList);
    props.onSave("NAME_PICKER", updatedList);
  }

  function handleChoiceChange(selectedName) {
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

  function resetAvailableNamesToDraw(newNameList) {
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
          label="Gewählte Namen merken"
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
