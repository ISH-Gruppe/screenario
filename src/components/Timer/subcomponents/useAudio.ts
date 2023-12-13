import { useCallback, useEffect, useState } from "react";

export const useAudio = (url: string) => {
  // Provide unique audio elements per usage while
  // avoiding constant audio element creation and destruction.
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);

  const play = useCallback(
    () =>
      audio?.play() ??
      Promise.reject(new Error("Audio element has not yet been initialized!")),
    [audio]
  );

  const pause = useCallback(() => audio?.pause(), [audio]);

  return {
    audio,
    play,
    pause,
  };
};
