import React, { useState, useEffect } from "react";
import ringingSound from "../music/WyxD-flipdish-ringer.mp3";

/* Huge thank you to https://stackoverflow.com/a/47686478/11515036 */
/* Sound taken from https://codesandbox.io/s/reactplaysound-p47gk?file=/src/index.js:61-105 
 * TODO: Check sound license
*/
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
