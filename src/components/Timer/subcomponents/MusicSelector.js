import React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import * as Playlists from "./Playlists";

export default function MusicSelector(props) {
  const directoryPrefix = "/assets/music";
  const [audio, setAudio] = React.useState(new Audio(""));
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);

  const [selectedPlaylistGenre, setSelectedPlaylistGenre] = React.useState(
    PlaylistsEnum.TEST
  );
  const [activeShuffledPlaylist, setActiveShuffledPlaylist] = React.useState(
    createShuffledPlaylist(PlaylistsEnum.TEST)
  );
  const [currentIndexInPlaylist, setCurrentIndexInPlaylist] = React.useState(0);

  React.useEffect(() => {
    if (props.isTimerRunning) {
      startMusic();
    } else {
      stopMusic();
    }
  }, [props.isTimerRunning, currentIndexInPlaylist]);

  // React to volume changes
  React.useEffect(() => {
    audio.volume = props.musicVolume;
  }, [props.musicVolume]);

  /*
   * Reacting to playlist changes happens in two stages:
   * 1. Update selectedPlaylist state
   * 2. Update audio state
   */
  function handlePlaylistChange(event) {
    // console.log("handlePlaylistChange ", event.target.value);

    setSelectedPlaylistGenre(event.target.value);

    if (event.target.value !== PlaylistsEnum.NO_MUSIC) {
      // 1. Reshuffle playlist & update state
      const newPlaylist = createShuffledPlaylist(event.target.value);
      setActiveShuffledPlaylist(newPlaylist);
      setCurrentIndexInPlaylist(0);

      // 2. Update audio state -> will be undefined if NO_MUSIC is selected
      const newTrackUrl = directoryPrefix + newPlaylist[0].link;
      audio.src = newTrackUrl;
      audio.load();

      if (props.isTimerRunning) {
        startMusic();
      }
    } else {
      audio.src = "";
      audio.load();
      audio.pause();
    }
  }

  function stopMusic() {
    if (audio) {
      audio.pause();
      setIsMusicPlaying(false);
    }
  }

  function startMusic() {
    // console.log("activeShuffledPlaylist ", activeShuffledPlaylist);
    // console.log("audio ", directoryPrefix + audio.src);

    if (props.isTimerRunning) {
      audio.play();
      setIsMusicPlaying(true);

      audio.onended = () => {
        let nextIndexInPlaylist = currentIndexInPlaylist + 1;

        // Simple if instead of ternary operator -> Improved readability
        if (nextIndexInPlaylist >= activeShuffledPlaylist.length) {
          nextIndexInPlaylist = 0;
        }
        setCurrentIndexInPlaylist(nextIndexInPlaylist);

        // Load next song
        const nextTitleInPlaylist = activeShuffledPlaylist[nextIndexInPlaylist];
        audio.src = directoryPrefix + nextTitleInPlaylist.link;
        audio.load();

        // console.log("currentIndexInPlaylist ", currentIndexInPlaylist);
        // console.log("nextIndexInPlaylist ", nextIndexInPlaylist);
        // console.log("activeShuffledPlaylist ", activeShuffledPlaylist);
      };
    }
  }

  /*
   * Match selected playlist genre
   * Read/ get appropriate list of available songs for this genre
   * Create and return a new, shuffled playlist
   *
   * It might return an empty array though if music is not wished for!
   */
  function createShuffledPlaylist(selectedGenre) {
    let selectedPlaylist;

    switch (selectedGenre) {
      case PlaylistsEnum.RELAXATION:
        selectedPlaylist = Playlists.PLAYLIST_PIANO;
        break;

      case PlaylistsEnum.AMBIENT:
        selectedPlaylist = Playlists.PLAYLIST_AMBIENT;
        break;

      case PlaylistsEnum.PIANO:
        selectedPlaylist = Playlists.PLAYLIST_PIANO;
        break;

      case PlaylistsEnum.SYNTHWAVE:
        selectedPlaylist = Playlists.PLAYLIST_SYNTHWAVE;
        break;

      case PlaylistsEnum.GAMING:
        selectedPlaylist = Playlists.PLAYLIST_GAMING;
        break;
      case PlaylistsEnum.TEST:
        selectedPlaylist = Playlists.PLAYLIST_TEST;
        break;

      default:
        break;
    }

    if (!selectedPlaylist) {
      return [];
    }

    const shuffledPlaylist = [...selectedPlaylist.tracks];
    shuffleArray(shuffledPlaylist);

    // console.log("shuffle playlist");
    return shuffledPlaylist;
  }

  // Courtesy of https://stackoverflow.com/a/12646864/11515036
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <Box>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label">Musik</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedPlaylistGenre}
          label="Musik"
          onChange={handlePlaylistChange}
        >
          <MenuItem value={PlaylistsEnum.NO_MUSIC}>
            {PlaylistsEnum.NO_MUSIC}
          </MenuItem>
          <MenuItem value={PlaylistsEnum.AMBIENT}>
            {PlaylistsEnum.AMBIENT}
          </MenuItem>
          <MenuItem value={PlaylistsEnum.PIANO}>{PlaylistsEnum.PIANO}</MenuItem>
          <MenuItem value={PlaylistsEnum.SYNTHWAVE}>
            {PlaylistsEnum.SYNTHWAVE}
          </MenuItem>
          <MenuItem value={PlaylistsEnum.GAMING}>
            {PlaylistsEnum.GAMING}
          </MenuItem>
          <MenuItem value={PlaylistsEnum.TEST}>{PlaylistsEnum.TEST}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

// Explicitly naming the object "Enum" to differentiate between "the other" Playlists file
// "the other" Playlists file -> /music/Playlists.js contains actual tracks
export const PlaylistsEnum = {
  NO_MUSIC: "Keine Musik",
  RELAXATION: "Entspannung",
  PIANO: "Piano",
  SYNTHWAVE: "Synthwave",
  GAMING: "Spielmusik",
  AMBIENT: "Ambient",
  TEST: "Test",
};
