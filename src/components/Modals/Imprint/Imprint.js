import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Imprint() {
  return (
    <div className="legal-text">
      <Button component={Link} to="/">
        {" "}
        Zurück{" "}
      </Button>
      <h1> Impressum & Kontakt </h1>

      <div className="div1">
        <h2> Anbieter </h2>
        <p> Institut für Schulentwicklung und Hochschuldidaktik GmbH </p>
        <p> Dennis Sawatzki </p>
        <p> Schadowstraße 34 </p>
        <p> 44799 Bochum </p>
      </div>
      <div className="div2">
        <h2> Kontakt </h2>
        <p>
          Website:{" "}
          <a href="https://ish-gruppe.de/" target="_blank">
            https://ish-gruppe.de/
          </a>
        </p>
        <p> E-Mail: office@ish-gruppe.de </p>
        <p style={{ textAlign: "justify" }}> Telefon: 02 34 / 54 57 41 11 </p>
      </div>
      <div className="div3">
        <h2> Technische Umsetzung </h2>
        <p className="contributor-name">
          {" "}
          Sergej Grilborzer:{" "}
          <a href="mailto:sergej@grilborzer.de"> sergej@grilborzer.de</a>
        </p>
        <p className="contributor-name">
          {" "}
          Liam Kranz: <a href="mailto:liam.ish@krnz.io">liam.ish@krnz.io</a>
        </p>
      </div>
      <div className="div4">
        <h2> Fachliche Umsetzung </h2>
        <p className="contributor-name"> Marcus Kuhn </p>
        <p className="contributor-contact">
          {" "}
          E-Mail: <a href="mailto:kuhn@ish-gruppe.de"> kuhn@ish-gruppe.de </a>
        </p>
      </div>
    </div>
  );
}
