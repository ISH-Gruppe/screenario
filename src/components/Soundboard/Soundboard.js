import React, { useState } from "react";
import BaseWindow from "../BaseWindow/BaseWindow";

// UI
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Styles
import "./Soundboard.css";

export default function SoundBoard({ id, title, onHide, onChange }) {
  function handleReset() {
    stopSound();
  }

  function handleHide() {
    onHide(id);
  }

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
      <>
        <Button
          key={index}
          className="sound-button"
          onClick={() => playOrStopSound(sound.path)}
          variant={soundPlaying == sound.path ? "contained" : "outlined"}
        >
          {sound.description}
        </Button>
      </>
    );
  });

  function playOrStopSound(soundpath) {
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

  function playSound(soundpath) {
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
    <BaseWindow
      id={id}
      title={title}
      onReset={handleReset}
      onHide={handleHide}
      resetName="Stop"
    >
      <div id="soundboardButtonWrapper">{soundButtons}</div>
    </BaseWindow>
  );
}
