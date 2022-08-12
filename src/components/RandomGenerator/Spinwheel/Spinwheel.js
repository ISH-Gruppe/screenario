import React from "react";
import "./Spinwheel.scss";
import { Wheel } from "react-custom-roulette";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";

export default function Spinwheel() {
  const listNumbers = {
    name: "NUMBERS",
    data: [
      { option: "1", style: { backgroundColor: "red", textColor: "white" } },
      { option: "2", style: { backgroundColor: "green", textColor: "white" } },
      { option: "3", style: { backgroundColor: "blue", textColor: "white" } },
      { option: "4", style: { backgroundColor: "pink", textColor: "white" } },
      { option: "5", style: { backgroundColor: "orange", textColor: "white" } },
      { option: "6", style: { backgroundColor: "gray", textColor: "white" } },
      { option: "7", style: { backgroundColor: "black", textColor: "white" } },
      { option: "8", style: { backgroundColor: "orange", textColor: "white" } },
    ],
  };

  const listMovements = {
    name: "MOVEMENTS",
    data: [
      {
        option: "Kniebeugen",
        style: { backgroundColor: "green", textColor: "white" },
      },
      {
        option: "Hampelmann",
        style: { backgroundColor: "red", textColor: "white" },
      },
      {
        option: "Hand zu Fuß",
        style: { backgroundColor: "blue", textColor: "white" },
      },
      {
        option: "Strecken",
        style: { backgroundColor: "pink", textColor: "white" },
      },
      {
        option: "Hüpfen",
        style: { backgroundColor: "orange", textColor: "white" },
      },
      {
        option: "Rennen",
        style: { backgroundColor: "gray", textColor: "white" },
      },
      {
        option: "Klatschen",
        style: { backgroundColor: "black", textColor: "white" },
      },
      {
        option: "Liegestützen",
        style: { backgroundColor: "orange", textColor: "white" },
      },
    ],
  };

  const listCustomWords = {
    name: "CUSTOM_WORDS",
    data: [
      { option: "", style: { backgroundColor: "red", textColor: "white" } },
      { option: "", style: { backgroundColor: "green", textColor: "white" } },
      { option: "", style: { backgroundColor: "blue", textColor: "white" } },
      { option: "", style: { backgroundColor: "pink", textColor: "white" } },
      { option: "", style: { backgroundColor: "orange", textColor: "white" } },
      { option: "", style: { backgroundColor: "gray", textColor: "white" } },
      { option: "", style: { backgroundColor: "black", textColor: "white" } },
      { option: "", style: { backgroundColor: "orange", textColor: "white" } },
    ],
  };

  const [activeSpinlist, setActiveSpinlist] = React.useState(listMovements);
  const [activeSpinlistAsString, setActiveSpinlistAsString] = React.useState(
    getStringFromPassedSpinlist(activeSpinlist)
  );
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [isSpinning, setIsSpinning] = React.useState(false);

  function handleSpinlistChange(selectedList) {
    setActiveSpinlist(selectedList);
    setActiveSpinlistAsString(getStringFromPassedSpinlist(selectedList));
  }

  function handleSpinClick() {
    setPrizeNumber(getRandomNumberFromActiveSpinlist());
    setIsSpinning(true);
  }

  function getRandomNumberFromActiveSpinlist() {
    return Math.floor(Math.random() * activeSpinlist.data.length);
  }

  function getStringFromPassedSpinlist(passedList) {
    let listAsAString = "";

    passedList.data.forEach((listEntry) => {
      listAsAString += listEntry.option + "\n";
    });

    return listAsAString;
  }

  return (
    <div className="spinwheel-wrapper">
      <Stack spacing={2} direction="row" sx={{ marginBottom: "1.5rem" }}>
        <Button
          onClick={() => handleSpinlistChange(listMovements)}
          className={
            activeSpinlist.name === listMovements.name ? "activeButton" : ""
          }
          size="small"
          variant="outlined"
        >
          Bewegungen
        </Button>
        <Button
          onClick={() => handleSpinlistChange(listNumbers)}
          className={
            activeSpinlist.name === listNumbers.name ? "activeButton" : ""
          }
          size="small"
          variant="outlined"
        >
          Zahlen 1-8
        </Button>
        <Button
          onClick={() => handleSpinlistChange(listCustomWords)}
          className={
            activeSpinlist.name === listCustomWords.name ? "activeButton" : ""
          }
          size="small"
          variant="outlined"
        >
          Eigenbegriffe
        </Button>
      </Stack>

      <Stack direction="row">
        <div>
          <TextareaAutosize
            value={activeSpinlistAsString}
            aria-label="Begriffe für das Glücksrad"
            minRows={8}
            placeholder="Es gelten die 8 letzten Begriffe"
          />
          <small>Hinweis: Es gelten die 8 letzten Begriffe</small>
        </div>

        <div className="wheel">
          <Wheel
            mustStartSpinning={isSpinning}
            prizeNumber={prizeNumber}
            data={activeSpinlist.data}
            backgroundColors={["#3e3e3e", "#df3428"]}
            textColors={["#ffffff"]}
            onStopSpinning={() => {
              setIsSpinning(false);
            }}
          />
        </div>
      </Stack>
      <button onClick={handleSpinClick}>Drehen</button>
    </div>
  );
}
