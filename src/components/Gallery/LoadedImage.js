import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

export default ({ stageWidth, stageHeight, imagePath }) => {
  const [image, status] = useImage(imagePath);

  if (image) {
    let width = image.naturalWidth;
    let height = image.naturalHeight;
    const ratio = width / height;

    if (ratio < 1) {
      height = stageHeight;
      width = height * ratio;
    } else {
      width = stageWidth;
      height = width / ratio;

      const heightDifference = height - stageHeight;

      height = height - heightDifference;
      width = height * ratio;
    }
    // "image" will be DOM image element or undefined
    return <Image image={image} width={width} height={height} />;
  }
};
