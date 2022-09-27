import React from "react";
import "./ImageCarousel.scss";

import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import ToggleButton from "@mui/material/ToggleButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const ArrowLeft = ({ size = 30, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H6M12 5l-7 7 7 7" />
  </svg>
);

// ArrowRight
export const ArrowRight = ({ size = 30, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);

// export function usePosition(imageSelectorRef) {
//   const [prevElement, setPrevElement] = React.useState(null);
//   const [nextElement, setNextElement] = React.useState(null);
// }

export default function ImageCarousel({
  selectedImage,
  imagePaths,
  onImageSelect,
  onFileSelect,
  onImageDelete,
}) {
  const imageSelectorRef = React.useRef();
  // const position = usePosition(imageSelectorRef);

  const fileInput = React.useRef();

  function handleFileSelect(event) {
    onFileSelect(event);
    fileInput.current.value = "";
  }

  const defaultImages = imagePaths.defaultImages.map((imagePath) => (
    <img
      className={
        imagePath == selectedImage
          ? "selector-preview selected-image"
          : "selector-preview"
      }
      src={`${imagePath}`}
      srcSet={`${imagePath}`}
      loading="lazy"
      onClick={() => onImageSelect(imagePath)}
    />
  ));

  const userImages = imagePaths.userImages.map((imagePath) => (
    <div className="user-image-wrapper">
      <img
        className={
          imagePath == selectedImage
            ? "selector-preview selected-image"
            : "selector-preview"
        }
        src={`${imagePath}`}
        srcSet={`${imagePath}`}
        loading="lazy"
        onClick={() => onImageSelect(imagePath)}
      />
      <Tooltip title="Bild löschen">
        <ToggleButton
          onClick={onImageDelete}
          id="delete-image-button"
          value={`${imagePath}`}
          aria-label="Bild löschen"
        >
          <DeleteIcon />
        </ToggleButton>
      </Tooltip>
    </div>
  ));

  return (
    <>
      <div id="image-selector" ref={imageSelectorRef}>
        <div className="image-row">
          {defaultImages}
          {userImages}
          <ToggleButton
            id="add-image-button"
            value=""
            aria-label="Bild hochladen"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              ref={fileInput}
              onChange={handleFileSelect}
            />
            <AddIcon />
          </ToggleButton>
        </div>
      </div>
    </>
  );
}
// <div class="carousel-button left-carousel-button"></div>
// <div class="carousel-button right-carousel-button"></div>
