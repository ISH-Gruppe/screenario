import React from "react";
import "./NamePicker.scss";
import TextareaWordlist from "../TextareaWordlist";
import RandomPicker from "./RandomPicker/RandomPicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function NamePicker() {
  const initialNamesList = [
    "Marcelo",
    "Lizzette",
    "Pauline",
    "Fumiko",
    "Tomasa",
    "Bertha",
    "Antoinette",
    "Tianna",
    "Ammie",
    "Victorina",
    "Marlon",
    "Jules",
    "Arletha",
    "Ellyn",
    "Karol",
    "Corrin",
    "Josephine",
  ];
  const [nameList, setNameList] = React.useState(initialNamesList);
  const [availableNamesToDraw, setNameAvailableNamesToDraw] =
    React.useState(nameList);

  const [rememberChosen, setRememberChosen] = React.useState(true);

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
        valueAsList={initialNamesList}
        handleWordlistChange={handleWordlistChange}
        minRows="8"
        placeholder="Hier einen Namen pro Zeile einfügen "
        ariaLabel="Namensfeld für zufällige Auslosung von Namen"
      />
    </>
  );
}
