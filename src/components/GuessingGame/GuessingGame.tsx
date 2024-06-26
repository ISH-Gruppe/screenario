import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import BaseWindow from "../BaseWindow/BaseWindow";
import {
  WindowConfig,
  WindowType,
} from "../WindowManager/window-management-slice";

export type GuessingGameState = {
  type: WindowType.GuessingGame;
};

const imageNames: string[] = [
  "Zitronenfalter.webp",
  "Apfelbaum.webp",
  "Baumkuchen.webp",
  "Brillenschlange.webp",
  "Dampfhammer.webp",
  "Dampfmaschine.webp",
  "Eieruhr.webp",
  "Eisvogel.webp",
  "Federball.webp",
  "Flaschenpost.webp",
  "Fliegenpilz.webp",
  "Gänseblümchen.webp",
  "Goldfisch.webp",
  "Handtasche.webp",
  "Hausschuh.webp",
  "Herzblatt.webp",
  "Holzweg.webp",
  "Honigkuchen.webp",
  "Katze aus dem Sack.webp",
  "Kindergarten.webp",
  "Kohlkopf.webp",
  "Krokodilsträne.webp",
  "Kugellager.webp",
  "Lampenschirm.webp",
  "Löwenzahn.webp",
  "Marmorkuchen.webp",
  "Meeresfrüchte.webp",
  "Ohrensessel.webp",
  "Papiertiger.webp",
  "Perlen vor die Säue.webp",
  "Pfannkuchen.webp",
  "Sanduhr.webp",
  "Säulen nach Athen.webp",
  "Schlüsselblume.png",
  "Schneeeule.webp",
  "Schneemann.webp",
  "Schwimmbad.webp",
  "Spaßvogel.webp",
  "Steinpilz.webp",
  "Stockbrot.webp",
  "Teufel an die Wand.webp",
  "Tischbein.webp",
  "Wandervogel.webp",
  "Waschbär.webp",
  "Wasserglas.webp",
  "Wasserhahn.webp",
  "Wasserschloss.webp",
  "Wolkenkratzer.webp",
  "Zahnrad.png",
  "Zimtschnecke.webp",
  "Zimtstern.webp",
];

const GuessingGame = ({ id, title }: { id: string; title: string }) => {
  const [gameState, setGameState] = useState<"intro" | "playing" | "finished">(
    "intro"
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  const shuffleImages = () => {
    return [...imageNames].sort(() => Math.random() - 0.5);
  };

  const [shuffledImages, setShuffledImages] = useState<string[]>(
    shuffleImages()
  );

  const startGame = () => {
    setGameState("playing");
    setShuffledImages(shuffleImages());
    setCurrentImageIndex(0);
    setShowName(false);
  };

  const handleImageClick = () => {
    if (showName) {
      if (currentImageIndex < shuffledImages.length - 1) {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
        setShowName(false);
      } else {
        setGameState("finished");
      }
    } else {
      setShowName(true);
    }
  };

  const getCurrentImageName = () => {
    const fullName = shuffledImages[currentImageIndex];
    return fullName.split(".")[0];
  };

  return (
    <BaseWindow id={id} title={title}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "1rem",
          boxSizing: "border-box",
        }}
      >
        {gameState === "intro" && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Willkommen beim Bilderrätsel! Rate den Ausdruck oder die
              Redewendung, die zu jedem Bild passt und klicke auf das Bild, um
              die Lösung anzuzeigen.
            </Typography>
            <Button
              sx={{ marginTop: "10px" }}
              variant="contained"
              color="primary"
              onClick={startGame}
            >
              Start
            </Button>
          </Box>
        )}

        {gameState === "playing" && (
          <Box
            onClick={handleImageClick}
            sx={{
              position: "relative",
              cursor: "pointer",
              width: "100%",
              height: "calc(100% - 10px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={`/assets/images/guessing-game/${shuffledImages[currentImageIndex]}`}
              alt={getCurrentImageName()}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
            {showName && (
              <Typography
                variant="h4"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  textAlign: "center",
                  maxWidth: "90%",
                  wordWrap: "break-word",
                }}
              >
                {getCurrentImageName()}
              </Typography>
            )}
          </Box>
        )}

        {gameState === "finished" && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              Congratulations! You've seen all the images.
            </Typography>
            <Button variant="contained" color="primary" onClick={startGame}>
              Play Again
            </Button>
          </Box>
        )}

        {gameState === "playing" && (
          <Button
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              width: "10px",
              top: "10px",
              right: "10px",
            }}
            onClick={() => setGameState("intro")}
          >
            <ReplayIcon />
          </Button>
        )}
      </Box>
    </BaseWindow>
  );
};

export const GuessingGameWindowConfig: WindowConfig = {
  Component: ({ id }) => <GuessingGame id={id} title="Ratespiel" />,
  getInitialState: () => ({
    type: WindowType.GuessingGame,
  }),
  getDefaultLayout: () => ({
    xs: {
      w: 4,
      h: 4,
      x: 0,
      y: 11,
      minW: 4,
    },
    sm: {
      w: 4,
      h: 7,
      x: 0,
      y: 0,
      minW: 4,
    },
    md: {
      w: 12,
      h: 8,
      x: 0,
      y: 0,
      minW: 12,
      minH: 6,
    },
    lg: {
      w: 18,
      h: 8,
      x: 0,
      y: 0,
      minW: 12,
      minH: 6,
    },
  }),
};

export default GuessingGame;
