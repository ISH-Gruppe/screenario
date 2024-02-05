import React, { useEffect, useState } from "react";
import "./Spinwheel.scss";
import { Wheel } from "react-custom-roulette";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { useAudio } from "../../Timer/subcomponents/useAudio";
import spinningSound from "./wheel.mp3";
import endingSound from "./winfantasia-6912.mp3";
import { setSpinwheelList, SpinwheelState } from "../RandomGeneratorState";
import TextareaWordlist from "../TextareaWordlist";
import { useDispatch } from "react-redux";
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

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
  const [rememberChosen, setRememberChosen] = useState(false);

  const activeSpinlist = state[activeListName];

  const [freshElements, setFreshElements] = useState(
    activeSpinlist.map((_, index) => index)
  );
  useEffect(() => {
    setFreshElements(activeSpinlist.map((_, index) => index));
  }, [activeSpinlist, rememberChosen]);

  const [prizeNumber, setPrizeNumber] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const { play: playSpinningSound, pause: pauseSpinningSound } =
    useAudio(spinningSound);
  const { play: playWheelFinishedSound } = useAudio(endingSound);

  const getRandomNumberFromFreshList = () => {
    const choices =
      freshElements.length > 0
        ? freshElements
        : activeSpinlist.map((_, index) => index);
    const randomIndex = Math.floor(Math.random() * choices.length);
    const result = choices[randomIndex] ?? 0;

    if (!rememberChosen) {
      return result;
    }

    if (rememberChosen) {
      setFreshElements(choices.filter((_, index) => index !== randomIndex));
    }

    return result;
  };

  const handleSpinClick = () => {
    setPrizeNumber(getRandomNumberFromFreshList());
    setIsSpinning(true);
    playSpinningSound().catch(console.error);
  };

  const onStopSpinning = () => {
    setIsSpinning(false);
    pauseSpinningSound();
    playWheelFinishedSound().catch(console.error);
  };

  const handleRememberChosenChange = (_: unknown, checked: boolean) => {
    setRememberChosen(checked);
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
          Zahlen
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
              placeholder="Hier einen Begriff pro Zeile einfügen"
              ariaLabel="Begriffsfeld für zufällige Auslosung von Begriffen"
            />
          </div>
          <small>
            Hinweis: Wir empfehlen für gute Lesbarkeit maximal 12 Einträge
          </small>

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

          <Button variant="contained" onClick={handleSpinClick}>
            Drehen{" "}
            {freshElements.length === 0 && rememberChosen
              ? "(neuer Durchlauf)"
              : ""}
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
