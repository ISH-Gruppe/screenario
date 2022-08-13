import { ImageGroup, Image } from "react-fullscreen-image";
import BaseWindow from "../BaseWindow/BaseWindow";
import "./WorkPhase.css";

const images = [
  "/assets/images/einzelarbeit.jpg",
  "/assets/images/feierabend.jpg",
  "/assets/images/grosse-pause.jpg",
  "/assets/images/gruppenarbeit.jpg",
  "/assets/images/kaffeepause.jpg",
  "/assets/images/kurze-pause.jpg",
  "/assets/images/mittagspause.jpg",
  "/assets/images/pair.jpg",
  "/assets/images/partnerarbeit.jpg",
  "/assets/images/share.jpg",
  "/assets/images/stundenende.jpg",
  "/assets/images/think.jpg",
];

export default function WorkPhase({ id, visible, onHide, onChange }) {
  function handleReset() {}

  function handleHide() {
    onHide(id);
  }

  return (
    <BaseWindow
      id="work-phase"
      title="Arbeits- und Pausenphasen"
      onReset={handleReset}
      onHide={handleHide}
    >
      <ImageGroup>
        <ul className="images">
          {images.map((i) => (
            <li key={i}>
              <Image src={i} alt="nature" />
              <p> "Test" </p>
            </li>
          ))}
        </ul>
      </ImageGroup>
    </BaseWindow>
  );
}
