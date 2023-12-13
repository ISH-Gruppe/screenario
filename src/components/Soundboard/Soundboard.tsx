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

// https://stock.adobe.com/de/video/group-of-kids-team-hugging-a-jumping-and-rejoicing-outdoors-happy-family-teamwork-kid-sun-dream-concept-family-children-sisters-brothers-have-fun-hugging-in-the-park-in-nature/625177371
import HurraVideo from "./videos/hurra.mp4";

// https://stock.adobe.com/de/video/happy-children-run-with-schoolbags-racing-to-school-building-on-street/659119041
import BreakVideo from "./videos/pause.mp4";
// source: pixabay
// license: https://pixabay.com/service/license-summary/
import BirthdayVideo from "./videos/happy_birthday.mp4";

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

const videos = [
  {
    description: "🎥 Geschafft!",
    path: HurraVideo,
  },

  {
    description: "🎥 Geburtstag",
    path: BirthdayVideo,
  },
  {
    description: "🎥 Pause!",
    path: BreakVideo,
  },
];

export default function SoundBoard({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const [soundPlaying, setSoundPlaying] = useState("");
  const [videoPlaying, setVideoPlaying] = useState<undefined | string>(
    undefined
  );
  const [audio, setAudio] = useState(new Audio(""));

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

  const playOrStopVideo = (videopath: string) => {
    if (soundPlaying) {
      stopSound();
    }

    if (videoPlaying == videopath) {
      setVideoPlaying(undefined);
    } else {
      setVideoPlaying(videopath);
    }
  };

  const stopVideo = () => {
    setVideoPlaying(undefined);
  };

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

  const videoButtons = videos.map((video, index) => {
    return (
      <Button
        key={video.path}
        className="video-button"
        onClick={() => playOrStopVideo(video.path)}
        variant={videoPlaying == video.path ? "contained" : "outlined"}
      >
        {video.description}
      </Button>
    );
  });

  return (
    <div className="base-window-soundboard">
      <BaseWindow id={id} title={title}>
        {videoPlaying ? (
          <video
            className="soundboardVideo"
            src={videoPlaying}
            autoPlay
            muted
            playsInline
            onEnded={stopVideo}
            onClick={stopVideo}
          ></video>
        ) : (
          <>
            <div id="soundboardButtonWrapper">{soundButtons}</div>
            <h2>GIFs</h2>
            <div id="soundboardButtonWrapper">{videoButtons}</div>
          </>
        )}
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
