import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Licensing = () => {
  return (
    <div className="legal-text">
      <Button component={Link} to="/">
        {" "}
        Zurück{" "}
      </Button>

      <h1>Lizenzen</h1>

      <h2>Verwendete Sounds: </h2>
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

      <h2>Verwendete Lieder: </h2>

      <p>
        Music from{" "}
        <a
          href="https://noban.stream/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NoBan Stream
        </a>
      </p>

      <p>
        wish of being with you by Barradeen | https://soundcloud.com/barradeen
        Music promoted by https://www.free-stock-music.com Creative Commons
        Attribution-ShareAlike 3.0 Unported
        https://creativecommons.org/licenses/by-sa/3.0/deed.en_US
      </p>

      <p>
        TROPICAL CONTACT by Audionautix | http://audionautix.com Music promoted
        by https://www.free-stock-music.com Creative Commons
        Attribution-ShareAlike 3.0 Unported
        https://creativecommons.org/licenses/by-sa/3.0/deed.en_US
      </p>

      <p>
        Music from{" "}
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=77">
          Pixabay
        </a>
      </p>

      <p>
        Music by{" "}
        <a href="https://pixabay.com/users/ashot-danielyan-composer-27049680/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=115568">
          Ashot-Danielyan-Composer
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/music//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=115568">
          Pixabay
        </a>
      </p>

      <p>
        Music by{" "}
        <a href="https://pixabay.com/users/ashot-danielyan-composer-27049680/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=115568">
          Ashot-Danielyan-Composer
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com/music//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=115568">
          Pixabay
        </a>
      </p>

      <h2>Verwendete Videos: </h2>

      <p>
        Video from{" "}
        <a
          href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=video&amp;utm_content=happy_birthday"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixabay
        </a>{" "}
        (License:{" "}
        <a
          href="https://pixabay.com/service/license-summary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixabay License
        </a>
        )
      </p>

      <br />
    </div>
  );
};
export default Licensing;
