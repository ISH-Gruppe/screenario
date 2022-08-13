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
  const [groups, setGroups] = React.useState([]);
  const [numberOfGroups, setNumberOfGroups] = React.useState();
  const [numberOfPeoplePerGroup, setNumberOfPeoplePerGroup] = React.useState();

  function handleWordlistChange(updatedList) {
    // console.log(updatedList);
    setNameList(updatedList);
  }

  return (
    <>
      {" "}
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
            valueAsList={[]}
            handleWordlistChange={handleWordlistChange}
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
            onClick={() => props.onTimerUpdate(0, 0, 1)}
            aria-label="Timer um eine Stunde erweitern"
            size="small"
          >
            <AddIcon />
          </IconButton>

          <div>
            {/* {props.hours < 10 && <span className="action-caption">0</span>} */}
            <span className="action-caption">3 Gruppen</span>
          </div>

          <IconButton
            onClick={() => props.onTimerUpdate(0, 0, -1)}
            disabled={props.hours === 0}
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
          <IconButton
            onClick={() => props.onTimerUpdate(0, 1)}
            aria-label="Timer um eine Minute reduzieren"
            size="small"
          >
            <AddIcon />
          </IconButton>

          <div>
            {/* {props.hours < 10 && <span className="action-caption">0</span>} */}
            <span className="action-caption">2 Teilnehmenden</span>
          </div>

          <IconButton
            onClick={() => props.onTimerUpdate(0, -1)}
            aria-label="Timer um eine Minute reduzieren"
            disabled={props.hours === 0 && props.minutes === 0}
            size="small"
          >
            <RemoveIcon />
          </IconButton>
        </Stack>
      </Stack>

      <div className="create-groups-button">
        <Button variant="contained">Gruppen bilden</Button>
      </div>
    </>
  );
}
