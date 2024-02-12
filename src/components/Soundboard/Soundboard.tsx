import React, { useState } from "react";

import "./Soundboard.scss";
import BaseWindow from "../BaseWindow/BaseWindow";

import Button from "@mui/material/Button";
import {
  useWindowState,
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
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch } from "react-redux";
import { saveFile, SoundboardState, toggleFavorite } from "./SoundboardState";
import { TabContext, TabList } from "@mui/lab";
import Tab from "@mui/material/Tab";
import { useCustomSoundboardFiles } from "./useCustomSoundboardFiles";
import { toDataUrl } from "../../utils/fileToDataUrl";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";

const sounds = [
  {
    id: "great_sound",
    description: "✅ Das war toll!",
    path: GreatSound,
  },
  {
    id: "too_bad_sound",
    description: "❎ Leider falsch!",
    path: TooBadSound,
  },
  {
    id: "countdown_sound",
    description: "🏁 Gleich gehts los!",
    path: CountdownSound,
  },
  {
    id: "waiting_sound",
    description: "⏳️ Bitte etwas Geduld",
    path: WaitingSound,
  },
  {
    id: "school_bell_sound",
    description: "⏰ Pausenglocke",
    path: SchoolBellSound,
  },
  {
    id: "honk_sound",
    description: "📣 Honk Honk!",
    path: HonkSound,
  },
  {
    id: "yay_sound",
    description: "🎉 Yay!",
    path: YaySound,
  },
];

const videos = [
  {
    id: "hurra_video",
    description: "🎥 Geschafft!",
    path: HurraVideo,
  },
  {
    id: "birthday_video",
    description: "🎥 Geburtstag",
    path: BirthdayVideo,
  },
  {
    id: "break_video",
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
  const [activeTab, setActiveTab] = useState<"all" | "favorites">("all");
  const dispatch = useDispatch();
  const windowState = useWindowState(id) as SoundboardState;
  const customSoundboardFiles = useCustomSoundboardFiles();

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

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files === null) {
      throw new Error("No file added");
    }
    const [file] = files;
    try {
      const fileContent = await toDataUrl(file);
      (dispatch as ThunkDispatch<unknown, unknown, AnyAction>)(
        saveFile({
          name: file.name,
          fileContent: fileContent,
        })
      );
    } catch (e) {
      console.error(e);
    }
  };

  const soundButtons = sounds.map((sound) => {
    const isFavorite = windowState.favorites.sounds.includes(sound.id);
    return activeTab !== "favorites" || isFavorite ? (
      <ButtonGroup
        key={sound.id}
        variant={soundPlaying == sound.path ? "contained" : "outlined"}
      >
        <Button
          className="sound-button"
          onClick={() => playOrStopSound(sound.path)}
        >
          {sound.description}
        </Button>
        <Button
          onClick={() =>
            dispatch(
              toggleFavorite({
                id: sound.id,
                type: "sounds",
                windowId: id,
              })
            )
          }
        >
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </Button>
      </ButtonGroup>
    ) : null;
  });

  const customFileButtons = customSoundboardFiles.map((sound) => {
    const isFavorite = windowState.favorites.customFiles.includes(sound.id);
    const isSound = sound.content.startsWith("data:audio");
    const playPauseFunction = isSound ? playOrStopSound : playOrStopVideo;

    return activeTab !== "favorites" || isFavorite ? (
      <ButtonGroup
        key={sound.id}
        variant={soundPlaying === sound.content ? "contained" : "outlined"}
      >
        <Button
          className="sound-button"
          onClick={() => playPauseFunction(sound.content)}
        >
          {sound.name}
        </Button>
        <Button
          onClick={() =>
            dispatch(
              toggleFavorite({
                id: sound.id,
                type: "customFiles",
                windowId: id,
              })
            )
          }
        >
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </Button>
      </ButtonGroup>
    ) : null;
  });

  const videoButtons = videos.flatMap((video, index) => {
    const isFavorite = windowState.favorites.videos.includes(video.id);
    return activeTab !== "favorites" || isFavorite
      ? [
          <ButtonGroup
            key={video.id}
            variant={videoPlaying == video.path ? "contained" : "outlined"}
          >
            <Button
              className="video-button"
              onClick={() => playOrStopVideo(video.path)}
            >
              {video.description}
            </Button>
            <Button
              onClick={() =>
                dispatch(
                  toggleFavorite({
                    id: video.id,
                    type: "videos",
                    windowId: id,
                  })
                )
              }
            >
              {isFavorite ? <Favorite /> : <FavoriteBorder />}
            </Button>
          </ButtonGroup>,
        ]
      : [];
  });

  return (
    <div className="base-window-soundboard">
      <BaseWindow id={id} title={title}>
        <TabContext value={activeTab}>
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
              <TabList
                className={"tab-list"}
                onChange={(_, newValue) => setActiveTab(newValue)}
              >
                <Tab key="all" label="Alle" value="all" />
                <Tab key="favorites" label="Favoriten" value="favorites" />
              </TabList>
              <div id="soundboardButtonWrapper">{soundButtons}</div>
              {videoButtons.length > 0 ? (
                <>
                  <h2>Videos</h2>
                  <div id="soundboardButtonWrapper">{videoButtons}</div>
                </>
              ) : null}
              <h2>Eigene</h2>
              <div id="soundboardButtonWrapper">
                {customFileButtons}
                <Button
                  component="label"
                  variant="outlined"
                  className="add-file-button"
                >
                  + Neue Datei
                  <input
                    hidden
                    type="file"
                    accept="audio/*, video/*"
                    onChange={handleFileSelect}
                  />
                </Button>
              </div>
            </>
          )}
        </TabContext>
      </BaseWindow>
    </div>
  );
}

export const soundboardWindowConfig: WindowConfig = {
  Component: ({ id }) => <SoundBoard id={id} title="Soundboard" />,
  getInitialState: () => ({
    type: WindowType.Soundboard,
    favorites: {
      sounds: [],
      videos: [],
      customFiles: [],
    },
  }),
  getDefaultLayout: () => ({
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
  }),
};
