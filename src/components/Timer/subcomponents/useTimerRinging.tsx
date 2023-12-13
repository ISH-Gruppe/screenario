import { useState, useEffect } from "react";
import ringingSound from "./call-to-attention-123107.mp3";

/* Huge thank you to https://stackoverflow.com/a/47686478/11515036 */
// Sound taken from https://pixabay.com/sound-effects/call-to-attention-123107/
export default function useTimerRinging() {
  const [audio] = useState(new Audio(ringingSound));
  const [isPlaying, setIsPlaying] = useState(false);

  const ringTimer = () => setIsPlaying(true);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  // No reason to expose isPlaying for now
  return [ringTimer];
}
