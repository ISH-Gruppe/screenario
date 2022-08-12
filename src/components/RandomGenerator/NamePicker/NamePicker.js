import React from "react";
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

  return (
    <>
      <RandomPicker items={nameList} />
    </>
  );
}
