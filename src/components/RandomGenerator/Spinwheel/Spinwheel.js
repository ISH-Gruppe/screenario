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
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [isSpinning, setIsSpinning] = React.useState(false);

  function handleSpinClick() {
    setPrizeNumber(getRandomNumberFromActiveSpinlist());
    setIsSpinning(true);
  }

  function getRandomNumberFromActiveSpinlist() {
    return Math.floor(Math.random() * activeSpinlist.data.length);
  }

  return (
    <div className="spinwheel-wrapper">
      <Stack spacing={2} direction="row" sx={{ marginBottom: "1.5rem" }}>
        <Button
          onClick={() => setActiveSpinlist(listMovements)}
          className={
            activeSpinlist.name === listMovements.name ? "activeButton" : ""
          }
          size="small"
          variant="outlined"
        >
          Bewegungen
        </Button>
        <Button
          onClick={() => setActiveSpinlist(listNumbers)}
          className={
            activeSpinlist.name === listNumbers.name ? "activeButton" : ""
          }
          size="small"
          variant="outlined"
        >
          Zahlen 1-8
        </Button>
        <Button
          onClick={() => setActiveSpinlist(listCustomWords)}
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
        <TextareaAutosize
          aria-label="minimum height"
          minRows={8}
          placeholder="Minimum 3 rows"
          // style={{ width: 200 }}
        />

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
