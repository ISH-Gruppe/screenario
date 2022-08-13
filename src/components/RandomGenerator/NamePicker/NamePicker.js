import React from "react";
import TextareaWordlist from "../TextareaWordlist";
import RandomPicker from "./RandomPicker/RandomPicker";

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

  function handleWordlistChange(updatedList) {
    console.log(updatedList);
    setNameList(updatedList);
  }

  return (
    <>
      <RandomPicker items={nameList} />
      {/* TODO: Add a maxNumberOfItemsPerList (optional)
          Default: none/ as long as the list
      */}
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
