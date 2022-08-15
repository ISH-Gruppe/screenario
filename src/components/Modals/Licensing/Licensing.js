import Button from "@mui/material/Button";
const Licensing = () => {
  return (
    <div className="legal-text">
      <Button href="/"> Zurück </Button>

      <h1>Lizenzen</h1>

      <p>Verwendete Sounds: </p>

      <br />
      <p>
        Lizenz:{" "}
        <a href="https://creativecommons.org/licenses/by/3.0/">CC-BY 3.0 </a>
      </p>
      <p>
        <a href="https://soundbible.com/2103-1-Person-Cheering.html">
          1-Person-Cheering
        </a>
      </p>
      <br />

      <p>
        Lizenz:{" "}
        <a href="https://creativecommons.org/licenses/sampling+/1.0/">
          Sampling+ 1.0
        </a>
      </p>

      <p>
        <a href="https://soundbible.com/1423-School-Bell.html">
          1423-School-Bell
        </a>
      </p>

      <p>
        <a href="https://soundbible.com/1446-Bike-Horn.html"> Bike-Horn </a>
      </p>
    </div>
  );
};
export default Licensing;
