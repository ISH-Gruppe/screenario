import React, { useState } from "react";

import "./Soundboard.scss";
import BaseWindow from "../BaseWindow/BaseWindow";

import Button from "@mui/material/Button";
import {
  WindowConfig,
  WindowType,
} from "../WindowManager/window-management-slice";

import GreatSound from "./sounds/great.mp3";
import TooBadSound from "./sounds/tooBad.mp3";
import CountdownSound from "./sounds/countdown.mp3";
import WaitingSound from "./sounds/waiting.mp3";
import SchoolBellSound from "./sounds/School Bell-SoundBible.com-449398625.mp3";
import HonkSound from "./sounds/Bike Horn-SoundBible.com-602544869.mp3";
import YaySound from "./sounds/1_person_cheering-Jett_Rifkin-1851518140.mp3";

export default function SoundBoard({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const sounds = [
    {
      description: "✅ Das war toll!",
      path: GreatSound,
    },
    {
      description: "❎ Leider falsch!",
      path: TooBadSound,
    },
    {
      description: "🏁 Gleich gehts los!",
      path: CountdownSound,
    },
    {
      description: "⏳️ Bitte etwas Geduld",
      path: WaitingSound,
    },
    {
      description: "⏰ Pausenglocke",
      path: SchoolBellSound,
    },
    {
      description: "📣 Honk Honk!",
      path: HonkSound,
    },
    {
      description: "🎉 Yay!",
      path: YaySound,
    },
  ];

  const [soundPlaying, setSoundPlaying] = useState("");
  const [audio, setAudio] = useState(new Audio(""));

  const soundButtons = sounds.map((sound, index) => {
    return (
      <Button
        key={index}
        className="sound-button"
        onClick={() => playOrStopSound(sound.path)}
        variant={soundPlaying == sound.path ? "contained" : "outlined"}
      >
        {sound.description}
      </Button>
    );
  });

  function playOrStopSound(soundpath: string) {
    console.log(soundpath);
    if (soundpath == soundPlaying) {
      stopSound();
      setSoundPlaying("");
    } else if (soundPlaying == "") {
      playSound(soundpath);
    } else {
      stopSound();
      playSound(soundpath);
    }
  }

  function playSound(soundpath: string) {
    audio.src = soundpath;
    audio.load();

    setSoundPlaying(soundpath);

    audio.play();

    audio.onended = () => {
      setSoundPlaying("");
    };
  }

  function stopSound() {
    audio.pause();

    setSoundPlaying("");
  }

  return (
    <div className="base-window-soundboard">
      <BaseWindow id={id} title={title}>
        <div id="soundboardButtonWrapper">{soundButtons}</div>
      </BaseWindow>
    </div>
  );
}

export type SoundboardState = {
  type: WindowType.Soundboard;
};

export const soundboardWindowConfig: WindowConfig = {
  Component: ({ id }) => <SoundBoard id={id} title="Soundboard" />,
  getInitialState: () => ({
    type: WindowType.Soundboard,
  }),
  defaultLayout: {
    xs: {
      w: 4,
      h: 3,
      x: 0,
      y: 21,
      minW: 2,
    },
    sm: {
      w: 2,
      h: 5,
      x: 0,
      y: 42,
      minW: 2,
    },
    md: {
      w: 6,
      h: 6,
      x: 0,
      y: 16,
      minW: 6,
      minH: 4,
    },
    lg: {
      w: 8,
      h: 6,
      x: 26,
      y: 8,
      minW: 8,
      minH: 4,
    },
  },
};
