import React from "react";

import "./EntryView.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TextareaWordlist from "../TextareaWordlist";
import { useWindowState } from "../../WindowManager/window-management-slice";
import { setRandomGeneratorGroupMakerNameList } from "../RandomGeneratorState";
import { useDispatch } from "react-redux";

export default function EntryView({ windowId, onGroupChange }) {
  /**
   * @type {import("../RandomGeneratorState").RandomGeneratorState}
   */
  const windowState = useWindowState(windowId);
  const dispatch = useDispatch();
  const nameList = windowState.groupGenerator.names;
  const [numberOfGroups, setNumberOfGroups] = React.useState(2);
  const [showHintNotEnoughGroups, setShowHintNotEnoughGroups] =
    React.useState(false);
  const [numberOfPeoplePerGroup, setNumberOfPeoplePerGroup] = React.useState();

  React.useEffect(() => {
    calculateNumberOfPeoplePerGroup();
  }, [numberOfGroups]);

  React.useEffect(() => {
    if (nameList.length >= 1) {
      setNumberOfGroups(1);
      setShowHintNotEnoughGroups(false);
    }
    if (nameList.length === 0) {
      setNumberOfGroups(0);
    }

    calculateNumberOfPeoplePerGroup();
  }, [nameList]);

  function handleNamelistChange(updatedList) {
    dispatch(
      setRandomGeneratorGroupMakerNameList({
        id: windowId,
        names: updatedList,
      })
    );
  }

  function incrementNumberGroups() {
    setNumberOfGroups((prevGroupSize) => {
      return prevGroupSize + 1;
    });
  }

  function decrementNumberOfGroups() {
    setNumberOfGroups((prevGroupSize) => {
      return prevGroupSize - 1;
    });
  }

  function createNewGroups() {
    const namesShuffled = shuffle([...nameList]);

    // Create groups based on the requested _quantity of groups_
    return chunkify(namesShuffled, numberOfGroups, true);
  }

  function submitCreatedGroups() {
    if (numberOfGroups > 0) {
      const newGroups = createNewGroups();
      onGroupChange(newGroups);
    } else {
      setShowHintNotEnoughGroups(true);
    }
  }

  function calculateNumberOfPeoplePerGroup() {
    const numberOfNames = nameList.length;
    let estimatedGroupSize;

    if (numberOfNames === numberOfGroups || numberOfNames < numberOfGroups) {
      estimatedGroupSize = 1 + "";
    } else {
      const division = numberOfNames / numberOfGroups;

      if (Number.isInteger(division)) {
        estimatedGroupSize = division + "";
      } else {
        const downRoundedDivision = division | 0;
        estimatedGroupSize =
          downRoundedDivision + "-" + (downRoundedDivision + 1);
      }
    }

    if (numberOfNames === 0 || numberOfGroups === 0) {
      estimatedGroupSize = 0 + "";
    }

    setNumberOfPeoplePerGroup(estimatedGroupSize);
  }

  /* Thanks to https://stackoverflow.com/a/8189268/11515036 */
  function chunkify(a, n, balanced) {
    if (n < 2) return [a];

    var len = a.length,
      out = [],
      i = 0,
      size;

    if (len % n === 0) {
      size = Math.floor(len / n);
      while (i < len) {
        out.push(a.slice(i, (i += size)));
      }
    } else if (balanced) {
      while (i < len) {
        size = Math.ceil((len - i) / n--);
        out.push(a.slice(i, (i += size)));
      }
    } else {
      n--;
      size = Math.floor(len / n);
      if (len % size === 0) size--;
      while (i < size * n) {
        out.push(a.slice(i, (i += size)));
      }
      out.push(a.slice(size * n));
    }

    return out;
  }

  /* Thanks to https://stackoverflow.com/a/2450976/11515036 */
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Stack className="vertical-stack" spacing={2}>
          <div className="button-container">
            <IconButton
              onClick={incrementNumberGroups}
              disabled={numberOfGroups === nameList.length}
              aria-label="Timer um eine Stunde erweitern"
              size="small"
            >
              <AddIcon />
            </IconButton>
          </div>

          <p className="action-caption">
            <span className="group-numbers">{numberOfGroups}</span>
            <br />
            Gruppen
          </p>

          <div className="button-container">
            <IconButton
              onClick={decrementNumberOfGroups}
              disabled={numberOfGroups <= 1}
              aria-label="Timer um eine Stunde reduzieren"
              size="small"
            >
              <RemoveIcon />
            </IconButton>
          </div>
        </Stack>

        <div className="arrow-right-icon">
          <ArrowRightIcon fontSize="large" />
        </div>

        <Stack className="vertical-stack">
          <span className="action-caption">
            <span className="group-numbers">{numberOfPeoplePerGroup}</span>
            <br />
            Teilnehmende pro Gruppe
          </span>
        </Stack>
      </Stack>

      <div className="create-groups-button">
        <Button
          onClick={submitCreatedGroups}
          disabled={numberOfGroups === 0}
          variant="contained"
        >
          Gruppen bilden
        </Button>
      </div>

      <div className="create-groups-button error-hint">
        {showHintNotEnoughGroups && (
          <small>Nicht genügend Gruppen oder Personen</small>
        )}
      </div>

      <div className="name-list">
        <TextareaWordlist
          valueAsList={nameList}
          handleWordlistChange={handleNamelistChange}
          minRows="16"
          placeholder="Hier einen Namen pro Zeile einfügen "
          ariaLabel="Namensfeld für zufällige Auslosung von Namen"
        />
      </div>
    </>
  );
}
