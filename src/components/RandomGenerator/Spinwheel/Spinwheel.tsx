import React, { useState } from "react";
import "./Spinwheel.scss";
import { Wheel } from "react-custom-roulette";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { useAudio } from "../../Timer/subcomponents/useAudio";
import endingSound from "./winfantasia-6912.mp3";
import { setSpinwheelList, SpinwheelState } from "../RandomGeneratorState";
import TextareaWordlist from "../TextareaWordlist";
import { useDispatch } from "react-redux";
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";

const spinWheelBackgroundColors = ["#ff705f", "#ffe08a", "#48c78e", "#66ccc7"];

export default function Spinwheel({
  state,
  windowId,
}: {
  state: SpinwheelState;
  windowId: string;
}) {
  const dispatch = useDispatch();
  const [activeListName, setActiveListName] =
    useState<keyof SpinwheelState>("movements");
  const activeSpinlist = state[activeListName];
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const { play: playWheelFinishedSound } = useAudio(endingSound);

  const getRandomNumberFromActiveSpinlist = () =>
    Math.floor(Math.random() * activeSpinlist.length);

  const handleSpinClick = () => {
    setPrizeNumber(getRandomNumberFromActiveSpinlist());
    setIsSpinning(true);
  };

  const onStopSpinning = () => {
    setIsSpinning(false);
    playWheelFinishedSound().catch(console.error);
  };

  const wheelData: WheelData[] = (
    activeSpinlist.length > 0 ? activeSpinlist : [""]
  ).map((option, index) => ({
    style: {
      backgroundColor:
        spinWheelBackgroundColors[index % spinWheelBackgroundColors.length],
      textColor: "#00364a",
    },
    option,
  }));

  return (
    <div className="spinwheel-wrapper">
      <Stack
        className="button-stack"
        spacing={2}
        direction="row"
        sx={{ marginBottom: "1.5rem" }}
      >
        <Button
          onClick={() => setActiveListName("movements")}
          className={activeListName === "movements" ? "activeButton" : ""}
          size="small"
          variant="outlined"
        >
          Bewegungen
        </Button>
        <Button
          onClick={() => setActiveListName("numbers")}
          className={activeListName === "numbers" ? "activeButton" : ""}
          size="small"
          variant="outlined"
        >
          Zahlen 1-8
        </Button>
        <Button
          onClick={() => setActiveListName("words")}
          className={activeListName === "words" ? "activeButton" : ""}
          size="small"
          variant="outlined"
        >
          Eigenbegriffe
        </Button>
      </Stack>

      <Stack direction="row">
        <Stack spacing={2} sx={{ marginTop: "1rem" }}>
          <div className="textarea-wrapper">
            <TextareaWordlist
              valueAsList={activeSpinlist}
              handleWordlistChange={(list) =>
                dispatch(
                  setSpinwheelList({
                    id: windowId,
                    list,
                    listName: activeListName,
                  })
                )
              }
              minRows={8}
              placeholder="Hier einen Begriff pro Zeile einfügen (genau 8 Zeilen)"
              ariaLabel="Begriffsfeld für zufällige Auslosung von Begriffen"
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
            data={wheelData}
            backgroundColors={["#3e3e3e", "#df3428"]}
            textColors={["#ffffff"]}
            spinDuration={0.17}
            onStopSpinning={onStopSpinning}
          />
        </div>
      </Stack>
    </div>
  );
}
