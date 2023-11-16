import React, { PropsWithChildren, ReactNode } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";

import "./BaseWindow.css";
import { useDispatch } from "react-redux";
import {
  useWindowState,
  windowManagementActions,
} from "../WindowManager/window-management-slice";

type BaseWindowProps = PropsWithChildren<{
  id: string;
  title: ReactNode;
  onReset: (id: string) => void;
  onHide?: (id: string) => void;
  resetName?: unknown;
}>;

export default function BaseWindow({
  id,
  title,
  children,
  onReset,
  // TODO: remove these
  onHide,
  resetName,
}: BaseWindowProps) {
  const dispatch = useDispatch();
  const windowState = useWindowState(id);

  function handleCreate() {
    dispatch(windowManagementActions.createWindow(windowState.type));
  }

  function handleHide() {
    dispatch(windowManagementActions.hideWindow(id));
  }

  function handleClose() {
    dispatch(windowManagementActions.closeWindow(id));
  }

  return (
    <Card className={"window window-" + id + " "} sx={{ minWidth: 275 }}>
      <Box
        sx={{
          "& button": { m: 1 },
          "display": "flex",
          "justifyContent": "space-between",
          "alignItems": "center",
        }}
      >
        <div className="window-header-background drag-handle" />
        {
          // <Button
          //   className="resetButton"
          //   onClick={handleReset}
          //   variant="outlined"
          //   size="small"
          // >
          //   {resetName ? resetName : "Reset"}
          // </Button>
        }

        <IconButton
          className="hideButton"
          onClick={handleCreate}
          aria-label="Neues Fenster erzeugen"
          size="small"
        >
          <ControlPointDuplicateIcon />
        </IconButton>

        <h3 className="window-title">{title}</h3>

        <IconButton
          className="hideButton"
          onClick={handleHide}
          aria-label="Fenster verbergen"
          size="small"
        >
          <RemoveIcon />
        </IconButton>

        <IconButton
          className="closeButton"
          onClick={handleClose}
          aria-label="Fenster schließen"
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <CardContent className="window-content">
        <Container
          disableGutters={true}
          className="content-container"
          id={`content-container-${id}`}
        >
          {children}
        </Container>
      </CardContent>
    </Card>
  );
}
