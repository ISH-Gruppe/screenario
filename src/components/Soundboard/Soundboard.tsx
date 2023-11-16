import React, { useState } from "react";

import "./Soundboard.scss";
import BaseWindow from "../BaseWindow/BaseWindow";

import Button from "@mui/material/Button";
import {
  WindowConfig,
  WindowType,
} from "../WindowManager/window-management-slice";

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
      path: "/assets/sounds/great.mp3",
    },
    {
      description: "❎ Leider falsch!",
      path: "/assets/sounds/tooBad.mp3",
    },
    {
      description: "🏁 Gleich gehts los!",
      path: "/assets/sounds/countdown.mp3",
    },
    {
      description: "⏳️ Bitte etwas Geduld",
      path: "/assets/sounds/waiting.mp3",
    },
    {
      description: "⏰ Pausenglocke",
      path: "/assets/sounds/School Bell-SoundBible.com-449398625.mp3",
    },
    {
      description: "📣 Honk Honk!",
      path: "/assets/sounds/Bike Horn-SoundBible.com-602544869.mp3",
    },
    {
      description: "🎉 Yay!",
      path: "/assets/sounds/1_person_cheering-Jett_Rifkin-1851518140.mp3",
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
