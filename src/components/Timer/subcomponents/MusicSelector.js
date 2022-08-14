import React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import * as Playlists from "../music/Playlists";

import useAudio from "./useAudio";
import testAudio from "../music/gaming/04 - NoBan Stream - Dummy Training.mp3";

export default function MusicSelector(props) {
  const [selectedPlaylistGenre, setSelectedPlaylistGenre] = React.useState(
    PlaylistsEnum.NO_MUSIC
  );

  const [activeShuffledPlaylist, setActiveShuffledPlaylist] = React.useState();

  const [isMusicPlaying, toggle, audio, setAudio] = useAudio(testAudio);

  React.useEffect(() => {
    if (props.isTimerRunning || isMusicPlaying) {
      playSelectedMusic();
    }
  }, [props.isTimerRunning]);

  React.useEffect(() => {
    audio.volume = props.musicVolume;
  }, [props.musicVolume]);

  const handlePlaylistChange = (event) => {
    setSelectedPlaylistGenre(event.target.value);

    // if(activeShuffledPlaylist === undefined) {
    const playlist = createShuffledPlaylist(event.target.value);
    setActiveShuffledPlaylist(playlist);
    const trackUrl = "../music" + activeShuffledPlaylist[0].link;
    setAudio(trackUrl);
    // console.log("track: ", trackToPlay);

    // }

    // Changing the playlist means shuffling it and changing the audio
    // -> createShuffledPlaylist()
  };

  function playSelectedMusic() {
    // createShuffledPlaylist(selectedPlaylistGenre);

    // setAudio(trackToPlay)
    // Play first song
    toggle();

    // TODO: How do we track completion of a song?
    // a.) Pass a function to be called in useAudio
    // b.) Pull useAudios listener up
  }

  /*
   * Check selected playlist genre
   * Read/ get appropriate song list from file
   * Create and return new shuffled playlist from song list
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
