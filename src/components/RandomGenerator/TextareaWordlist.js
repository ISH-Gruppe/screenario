import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function TextareaWordlist(props) {
  const [textString, setTextString] = React.useState(createStringFromList([]));

  function handleSpinlistInTextareaChange(textArea) {
    setTextString(textArea.target.value);
    props.handleWordlistChange(createListFromString(textArea.target.value));
  }

  function createStringFromList(passedList) {
    let listAsAString = "";

    passedList.forEach((listEntry) => {
      listAsAString += listEntry + "\n";
    });

    return listAsAString;
  }

  function createListFromString(passedString) {
    const stringAsList = passedString
      .split("\n")
      .filter((n) => n)
      .slice(-8);

    const requiredNumberOfItems = 8;
    const missingNumberOfItems = requiredNumberOfItems - stringAsList.length;

    if (missingNumberOfItems !== 0 && missingNumberOfItems > 0) {
      for (let index = 0; index < missingNumberOfItems; index++) {
        stringAsList.push("");
      }
    }

    return stringAsList;
  }

  return (
    <TextareaAutosize
      value={textString}
      onChange={handleSpinlistInTextareaChange}
      aria-label={props.ariaLabel}
      minRows={props.minRows}
      placeholder={props.placeholder}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
