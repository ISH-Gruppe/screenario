import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function TextareaWordlist(props) {
  const [textString, setTextString] = React.useState(createStringFromList([]));

  React.useEffect(() => {
    setTextString(createStringFromList(props.valueAsList));
  }, [JSON.stringify(props.valueAsList)]);

  function handleTextareaChange(textArea) {
    // console.log("TextareaWordlist change", textArea);

    setTextString(textArea.target.value);
    props.handleWordlistChange(createListFromString(textArea.target.value));
  }

  function createListFromString(passedString) {
    const requiredNumberOfItems = props.maxNumberOfItemsPerList
      ? props.maxNumberOfItemsPerList
      : 0;

    const stringAsList = passedString
      .split("\n")
      .filter((n) => n)
      .slice(-requiredNumberOfItems);

    const missingNumberOfItems = requiredNumberOfItems - stringAsList.length;

    if (missingNumberOfItems !== 0 && missingNumberOfItems > 0) {
      for (let index = 0; index < missingNumberOfItems; index++) {
        stringAsList.push("");
      }
    }

    return stringAsList;
  }

  function createStringFromList(passedList) {
    let listAsAString = "";

    passedList.forEach((listEntry) => {
      listAsAString += listEntry + "\n";
    });

    return listAsAString;
  }

  // SyntheticEvents/ ClipboardEvent such as copy, paste, cut are not handled by onChange
  function handleCut(event) {
    setTextString((prevTextString) => {
      const filteredString = prevTextString.replace(event.target.value, "");
      // console.log("you cut text!", filteredString);

      props.handleWordlistChange(createListFromString(filteredString));
      return filteredString;
    });
  }

  return (
    <TextareaAutosize
      defaultValue={textString}
      onChange={handleTextareaChange}
      onCut={handleCut}
      aria-label={props.ariaLabel}
      minRows={props.minRows}
      placeholder={props.placeholder}
      style={{
        width: "100%",
        height: "100%",
        minWidth: "100%",
        maxWidth: "100%",
        resize: "none",
        fontSize: "1rem",
      }}
    />
  );
}
