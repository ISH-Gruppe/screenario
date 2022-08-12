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

  function handleWordlistChange(listAsAString) {
    console.log(listAsAString);
  }

  return (
    <>
      <RandomPicker items={nameList} />
      <TextareaWordlist handleWordlistChange={handleWordlistChange} minRows="8" placeholder="" ariaLabel="" />
    </>
  );
}
