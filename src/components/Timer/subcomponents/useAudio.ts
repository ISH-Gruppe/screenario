import { useEffect, useState } from "react";

export default function useAudio(url: string) {
  const [audio, setAudio] = useState(new Audio(url));
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

  return [isMusicPlaying, toggle, audio, setAudio];
}
