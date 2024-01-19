import React from "react";
import "./WordPicker.scss";
import TextareaWordlist from "../TextareaWordlist";
import RandomPicker from "./RandomPicker/RandomPicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useDispatch } from "react-redux";
import { useWindowState } from "../../WindowManager/window-management-slice";
import {
  RandomGeneratorState,
  setRandomGeneratorWordPickerList,
} from "../RandomGeneratorState";

export default function WordPicker({ windowId }: { windowId: string }) {
  const windowState = useWindowState(windowId) as RandomGeneratorState;
  const dispatch = useDispatch();
  const wordList = windowState.wordPicker.words;
  const [availableWordsToDraw, setAvailableWordsToDraw] =
    React.useState(wordList);

  const [rememberChosen, setRememberChosen] = React.useState(true);

  function handleRememberChosenChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.checked) {
      resetAvailableWordsToDraw(wordList);
    }

    setRememberChosen(event.target.checked);
  }

  function handleWordlistChange(updatedList: string[]) {
    // console.log("handleWordlistChange ", updatedList);
    // console.log(updatedList);
    resetAvailableWordsToDraw(updatedList);
    dispatch(
      setRandomGeneratorWordPickerList({
        id: windowId,
        words: updatedList,
      })
    );
  }

  function handleChoiceChange(selectedWord: string) {
    // console.log("selectedWord ", selectedWord);

    if (rememberChosen) {
      // Remove choice from array
      // Reset the array if it's empty after removal

      setAvailableWordsToDraw((prevAvailableWordsToDraw) => {
        // const leftWordsToDraw = [...prevAvailableWordsToDraw];
        const leftWordsToDraw = prevAvailableWordsToDraw.filter(
          (word) => selectedWord !== word
        );

        // console.log("leftWordsToDraw ", leftWordsToDraw);

        if (leftWordsToDraw.length > 0) {
          return leftWordsToDraw;
        } else {
          return wordList;
        }
      });
    }
  }

  function resetAvailableWordsToDraw(newWordList: string[]) {
    setAvailableWordsToDraw(newWordList);
  }

  return (
    <>
      <RandomPicker
        items={availableWordsToDraw}
        onChoiceChange={handleChoiceChange}
      />

      <div className="checkbox-container">
        <FormControlLabel
          label="Jeden Begriff nur ein Mal auslosen"
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
        valueAsList={wordList}
        handleWordlistChange={handleWordlistChange}
        minRows="8"
        placeholder="Hier einen Begriff pro Zeile einfügen "
        ariaLabel="Begriffsfeld für zufällige Auslosung von Begriffen"
      />
    </>
  );
}
