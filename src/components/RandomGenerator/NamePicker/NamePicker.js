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
  const [checked, setChecked] = React.useState([true]);

  function handleWordlistChange(updatedList) {
    console.log(updatedList);
    setNameList(updatedList);
  }

  return (
    <>
      <RandomPicker items={nameList} />

      <div className="checkbox-container">
        <FormControlLabel
          label="Gewählte Namen merken"
          control={
            <Checkbox
              size="small"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
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
