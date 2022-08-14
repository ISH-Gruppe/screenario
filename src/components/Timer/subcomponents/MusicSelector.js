import React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import * as Playlists from "../music/Playlists";

import useAudio from "./useAudio";
import testAudio from "../music/gaming/04 - NoBan Stream - Dummy Training.mp3";
import testAudio2 from "../music/gaming/04 - NoBan Stream - Dummy Training.mp3";

export default function MusicSelector(props) {
  const [audio, setAudio] = React.useState(new Audio(testAudio));
  const [isMusicPlaying, setIsMusicPlaying] = React.useState(false);

  const [selectedPlaylistGenre, setSelectedPlaylistGenre] = React.useState(
    PlaylistsEnum.PIANO
  );
  const [activeShuffledPlaylist, setActiveShuffledPlaylist] = React.useState(
    []
  );
  const [currentIndexInPlaylist, setCurrentIndexInPlaylist] = React.useState(0);

  // React to isTimerRunning changes
  React.useEffect(() => {
    if (props.isTimerRunning || isMusicPlaying) {
      console.log("useEffect toggleMusicPlaying");
      toggleMusicPlaying();
    }
  }, [props.isTimerRunning]);

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
    console.log("handlePlaylistChange ", event.target.value);
    setSelectedPlaylistGenre(event.target.value);

    if (event.target.value !== PlaylistsEnum.NO_MUSIC) {
      // 1. Reshuffle playlist & update state
      const playlist = createShuffledPlaylist(event.target.value);
      setActiveShuffledPlaylist(playlist);
      setCurrentIndexInPlaylist(0);

      // 2. Update audio state -> will be undefined if NO_MUSIC is selected
      const newTrackUrl = "../music" + activeShuffledPlaylist[0].link;
      setAudio(newTrackUrl);

      // console.log("track: ", trackToPlay);
    } else {
      audio.pause();
      setAudio(undefined);
    }
  }

  /*
   *
   * This used to be a two piece:
   * 1. A toggle() function toggled the isMusicPlaying state
   * 2. A hook listened to these changes and called the appropriate audio function
   *
   * Those two are now merged in a single method (that hopefully doesn't add to the confusion)
   */
  function toggleMusicPlaying() {
    const inversionOfIsMusicPlaying = !isMusicPlaying;

    inversionOfIsMusicPlaying ? audio.play() : audio.pause();
    setIsMusicPlaying(inversionOfIsMusicPlaying);
    console.log("inversionOfIsMusicPlaying ", inversionOfIsMusicPlaying);

    if (inversionOfIsMusicPlaying) {
      audio.onended = () => {
        let nextIndexInPlaylist = currentIndexInPlaylist + 1;

        // Simple if instead of ternary operator -> Improved readability
        if (nextIndexInPlaylist >= activeShuffledPlaylist.length) {
          nextIndexInPlaylist = 0;
        }

        const nextTitleInPlaylist = activeShuffledPlaylist[nextIndexInPlaylist];

        console.log("currentIndexInPlaylist ", currentIndexInPlaylist);
        console.log("nextIndexInPlaylist ", nextIndexInPlaylist);

        setCurrentIndexInPlaylist(nextIndexInPlaylist);
        setAudio(nextTitleInPlaylist);
      };

      audio.onpause = () => {
        console.log("audio.onpause");
        const nextIndexInPlaylist =
          currentIndexInPlaylist + 1 < activeShuffledPlaylist.length
            ? currentIndexInPlaylist + 1
            : 0;
        const nextTitleInPlaylist = activeShuffledPlaylist[nextIndexInPlaylist];

        console.log("currentIndexInPlaylist ", currentIndexInPlaylist);
        console.log("nextIndexInPlaylist ", nextIndexInPlaylist);
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

      case PlaylistsEnum.PIANO:
        selectedPlaylist = Playlists.PLAYLIST_PIANO;
        break;

      case PlaylistsEnum.SYNTHWAVE:
        selectedPlaylist = Playlists.PLAYLIST_SYNTHWAVE;
        break;

      case PlaylistsEnum.GAMING:
        selectedPlaylist = Playlists.PLAYLIST_GAMING;
        break;

      default:
        break;
    }

    if (!selectedPlaylist) {
      return [];
    }

    const shuffledPlaylist = [...selectedPlaylist.tracks];
    shuffleArray(shuffledPlaylist);

    console.log("shuffle playlist");
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
          <MenuItem value={PlaylistsEnum.RELAXATION}>
            {PlaylistsEnum.RELAXATION}
          </MenuItem>
          <MenuItem value={PlaylistsEnum.PIANO}>{PlaylistsEnum.PIANO}</MenuItem>
          <MenuItem value={PlaylistsEnum.SYNTHWAVE}>
            {PlaylistsEnum.SYNTHWAVE}
          </MenuItem>
          <MenuItem value={PlaylistsEnum.GAMING}>
            {PlaylistsEnum.GAMING}
          </MenuItem>
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
};
