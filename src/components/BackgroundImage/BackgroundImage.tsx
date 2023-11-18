import { useBackgroundImage } from "./background-image-slice";
import "./BackgroundImage.scss";

export const BackgroundImage = () => {
  const backgroundImageSrc = useBackgroundImage();

  return (
    <div
      className="app-background-image"
      style={{
        backgroundImage: `url("${backgroundImageSrc}")`,
      }}
    />
  );
};
