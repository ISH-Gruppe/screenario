import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const toggle = () => setIsMusicPlaying(!isMusicPlaying);

  useEffect(() => {
    isMusicPlaying ? audio.play() : audio.pause();
  }, [isMusicPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setIsMusicPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsMusicPlaying(false));
    };
  }, []);

  return [isMusicPlaying, toggle];
};
