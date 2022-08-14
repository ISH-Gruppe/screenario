import { ImageGroup, Image } from "../react-fullscreen-image";
import BaseWindow from "../BaseWindow/BaseWindow";
import "./WorkPhase.css";

export default function WorkPhase({ id, visible, onHide, onChange }) {
  const workPhaseImages = {
    "workphase": {
      description: "Arbeitsphasen",
      images: [
        "/assets/images/einzelarbeit.jpg",
        "/assets/images/partnerarbeit.jpg",
        "/assets/images/gruppenarbeit.jpg",
      ],
    },
    "break-general": {
      description: "Pausenphasen",
      images: [
        "/assets/images/kaffeepause.jpg",
        "/assets/images/mittagspause.jpg",
        "/assets/images/feierabend.jpg",
      ],
    },
    "break-school": {
      description: "Pausenphasen (Schule)",
      images: [
        "/assets/images/kurze-pause.jpg",
        "/assets/images/grosse-pause.jpg",
        "/assets/images/stundenende.jpg",
      ],
    },
    "think-pair-share": {
      description: "Think, Pair, Share",
      images: [
        "/assets/images/pair.jpg",
        "/assets/images/share.jpg",
        "/assets/images/think.jpg",
      ],
    },
    "custom-images": { description: "Eigene Bilder", images: [] },
  };

  function handleReset() {}

  function handleHide() {
    onHide(id);
  }

  function createGallery() {
    console.log(workPhaseImages);
  }

  return (
    <BaseWindow
      id="work-phase"
      title="Arbeits- und Pausenphasen"
      onReset={handleReset}
      onHide={handleHide}
    >
      <h3> Arbeitsphasen </h3>
      <ImageGroup>
        <ul className="images">
          {workPhaseImages.workphase.images.map((i) => (
            <li key={i}>
              <Image src={i} />
            </li>
          ))}
        </ul>
      </ImageGroup>
      <h3> Pausenphasen </h3>
      <ImageGroup>
        <ul className="images">
          {workPhaseImages["break-general"].images.map((i) => (
            <li key={i}>
              <Image src={i} />
            </li>
          ))}
        </ul>
      </ImageGroup>

      <h3> Pausenphasen (Schule) </h3>
      <ImageGroup>
        <ul className="images">
          {workPhaseImages["break-school"].images.map((i) => (
            <li key={i}>
              <Image src={i} />
            </li>
          ))}
        </ul>
      </ImageGroup>

      <h3> Think, Pair, Share </h3>
      <ImageGroup>
        <ul className="images">
          {workPhaseImages["think-pair-share"].images.map((i) => (
            <li key={i}>
              <Image src={i} />
            </li>
          ))}
        </ul>
      </ImageGroup>
    </BaseWindow>
  );
}
