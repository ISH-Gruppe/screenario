import React from "react";
import "./Spinwheel.scss";
import { Wheel } from "react-custom-roulette";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";

// TODO: Spinwheel doesn't yet use the generalized TextareaWordlist component
export default function Spinwheel() {
  const listNumbers = {
    name: "NUMBERS",
    data: [
      {
        option: "1",
        style: { backgroundColor: "#ff705f", textColor: "#00364a" },
      },
      {
        option: "2",
        style: { backgroundColor: "#ffe08a", textColor: "#00364a" },
      },
      {
        option: "3",
        style: { backgroundColor: "#48c78e", textColor: "#00364a" },
      },
      {
        option: "4",
        style: { backgroundColor: "#66ccc7", textColor: "#00364a" },
      },
      {
        option: "5",
        style: { backgroundColor: "#ff705f", textColor: "#00364a" },
      },
      {
        option: "6",
        style: { backgroundColor: "#ffe08a", textColor: "#00364a" },
      },
      {
        option: "7",
        style: { backgroundColor: "#48c78e", textColor: "#00364a" },
      },
      {
        option: "8",
        style: { backgroundColor: "#66ccc7", textColor: "#00364a" },
      },
    ],
  };

  const listMovements = {
    name: "MOVEMENTS",
    data: [
      {
        option: "Kniebeugen",
        style: { backgroundColor: "#ff705f", textColor: "#00364a" },
      },
      {
        option: "Hampelmann",
        style: { backgroundColor: "#ffe08a", textColor: "#00364a" },
      },
      {
        option: "Hand zu Fuß",
        style: { backgroundColor: "#48c78e", textColor: "#00364a" },
      },
      {
        option: "Strecken",
        style: { backgroundColor: "#66ccc7", textColor: "#00364a" },
      },
      {
        option: "Hüpfen",
        style: { backgroundColor: "#ff705f", textColor: "#00364a" },
      },
      {
        option: "Rennen",
        style: { backgroundColor: "#ffe08a", textColor: "#00364a" },
      },
      {
        option: "Klatschen",
        style: { backgroundColor: "#48c78e", textColor: "#00364a" },
      },
      {
        option: "Liegestützen",
        style: { backgroundColor: "#66ccc7", textColor: "#00364a" },
      },
    ],
  };

  const listCustomWords = {
    name: "CUSTOM_WORDS",
    data: [
      {
        option: "",
        style: { backgroundColor: "#ff705f", textColor: "#00364a" },
      },
      {
        option: "",
        style: { backgroundColor: "#ffe08a", textColor: "#00364a" },
      },
      {
        option: "",
        style: { backgroundColor: "#48c78e", textColor: "#00364a" },
      },
      {
        option: "",
        style: { backgroundColor: "#66ccc7", textColor: "#00364a" },
      },
      {
        option: "",
        style: { backgroundColor: "#ff705f", textColor: "#00364a" },
      },
      {
        option: "",
        style: { backgroundColor: "#ffe08a", textColor: "#00364a" },
      },
      {
        option: "",
        style: { backgroundColor: "#48c78e", textColor: "#00364a" },
      },
      {
        option: "",
        style: { backgroundColor: "#66ccc7", textColor: "#00364a" },
      },
    ],
  };

  const [activeSpinlist, setActiveSpinlist] = React.useState(listMovements);
  const [activeSpinlistAsString, setActiveSpinlistAsString] = React.useState(
    createStringFromList(activeSpinlist)
  );
  const [prizeNumber, setPrizeNumber] = React.useState(0);
  const [isSpinning, setIsSpinning] = React.useState(false);

  function handleSpinlistChange(selectedList) {
    setActiveSpinlist(selectedList);
    setActiveSpinlistAsString(createStringFromList(selectedList));
  }

  function handleSpinlistInTextareaChange(textArea) {
    const spinlistData = createListFromString(textArea.target.value);

    setActiveSpinlist((previousActiveSpinlist) => {
      const newSpinlist = {
        name: previousActiveSpinlist.name,
        data: [],
      };

      for (let index = 0; index < previousActiveSpinlist.data.length; index++) {
        newSpinlist.data.push({
          option: spinlistData[index],
          style: previousActiveSpinlist.data[index].style,
        });
      }

      return newSpinlist;
    });
    setActiveSpinlistAsString(textArea.target.value);
  }

  function handleSpinClick() {
    setPrizeNumber(getRandomNumberFromActiveSpinlist());
    setIsSpinning(true);
  }

  function getRandomNumberFromActiveSpinlist() {
    return Math.floor(Math.random() * activeSpinlist.data.length);
  }

  function createStringFromList(passedList) {
    let listAsAString = "";

    passedList.data.forEach((listEntry) => {
      listAsAString += listEntry.option + "\n";
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
    <div className="spinwheel-wrapper">
      <Stack
        className="button-stack"
        spacing={2}
        direction="row"
        sx={{ marginBottom: "1.5rem" }}
      >
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
        <Stack spacing={2} sx={{ marginTop: "1rem" }}>
          <div className="textarea-wrapper">
            <TextareaAutosize
              value={activeSpinlistAsString}
              onChange={handleSpinlistInTextareaChange}
              aria-label="Begriffe für das Glücksrad"
              minRows={8}
              placeholder="Es gelten die 8 letzten Begriffe"
            />
          </div>
          <small>Hinweis: Es gelten die 8 letzten Begriffe</small>

          <Button variant="contained" onClick={handleSpinClick}>
            Drehen
          </Button>
        </Stack>

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
    </div>
  );
}
