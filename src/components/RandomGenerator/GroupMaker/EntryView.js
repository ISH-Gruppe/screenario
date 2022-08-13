import React from "react";

import "./EntryView.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TextareaWordlist from "../TextareaWordlist";

export default function NameView(props) {
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
  const [numberOfGroups, setNumberOfGroups] = React.useState(2);
  const [numberOfPeoplePerGroup, setNumberOfPeoplePerGroup] = React.useState();

  React.useEffect(() => {
    calculateNumberOfPeoplePerGroup();
  }, [numberOfGroups]);

  React.useEffect(() => {
    if (nameList.length >= 1) {
      setNumberOfGroups(1);
    }
    if (nameList.length === 0) {
      setNumberOfGroups(0);
    }

    calculateNumberOfPeoplePerGroup();
  }, [nameList]);

  function handleNamelistChange(updatedList) {
    setNameList(updatedList);
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
    const namesShuffled = shuffle(nameList);

    // Create groups based on the requested _quantity of groups_
    return chunkify(namesShuffled, numberOfGroups, true);
  }

  function submitCreatedGroups() {
    const newGroups = createNewGroups();
    props.onGroupChange(newGroups);
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
    while (currentIndex != 0) {
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
        <div
          style={{
            maxWidth: "50%",
            width: "30%",
            height: "100%",
          }}
        >
          <span className="action-caption">Folgende Personen</span>
          <TextareaWordlist
            valueAsList={nameList}
            handleWordlistChange={handleNamelistChange}
            minRows="8"
            placeholder="Hier einen Namen pro Zeile einfügen "
            ariaLabel="Namensfeld für zufällige Auslosung von Namen"
          />
        </div>

        <div className="arrow-right-icon">
          <ArrowRightIcon />
        </div>

        <Stack className="vertical-stack" direction="column" spacing={2}>
          <span className="action-caption">verteilen auf</span>
          <IconButton
            onClick={incrementNumberGroups}
            disabled={numberOfGroups === nameList.length}
            aria-label="Timer um eine Stunde erweitern"
            size="small"
          >
            <AddIcon />
          </IconButton>

          <div>
            <span className="action-caption">{numberOfGroups} Gruppen</span>
          </div>

          <IconButton
            onClick={decrementNumberOfGroups}
            disabled={numberOfGroups <= 1}
            aria-label="Timer um eine Stunde reduzieren"
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </Stack>

        <div className="arrow-right-icon">
          <ArrowRightIcon />
        </div>

        <Stack className="vertical-stack" spacing={2}>
          <span className="action-caption">mit je</span>

          <div>
            <span className="action-caption">
              {numberOfPeoplePerGroup} Teilnehmenden
            </span>
          </div>
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
    </>
  );
}
