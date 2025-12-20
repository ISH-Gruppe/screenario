import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="legal-text">
      <Button component={Link} to="/">
        {" "}
        Zurück{" "}
      </Button>
      <h1>Datenschutz</h1>
      <h2>In Kürze</h2>
      <ul>
        <li>
          Die Webanwendung Screenario hinterlegt gewünschte Präferenzen und
          eingegebene Begriffe im "Local Storage" des Browsers. Eingegebene
          Daten bleiben so immer auf Ihrem Gerät und werden niemals an unsere
          Server übertragen.
        </li>
        <li>
          Es erfolgt keinerlei Tracking Ihrer Aktivitäten und auf den Einsatz
          von Cookies wird verzichtet.
        </li>
        <li>
          Wir sammeln anonymisierte Zugriffsdaten. Ihre IP-Adresse wird dabei
          gekürzt und ist Ihnen nicht zuordenbar. Wir erhalten grobe
          Informationen über Standort, Browser und Betriebssystem unserer
          Nutzer.
        </li>
      </ul>
      Es ist möglich, dass unser Hosting-Partner{" "}
      <a target="_blank" href="https://www.render.com/">
        Render
      </a>{" "}
      technische Daten wie IP-Adressen für kurze Zeit verarbeitet, wenn dies für
      die Bereitstellung der Website zwingend notwendig ist.
      <h2> Benennung der verantwortlichen Stelle </h2>
      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website
      ist:
      <p>
        Dennis Sawatzki <br />
        Schadowstraße 34 <br />
        44799 Bochum
      </p>
      Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen
      über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
      (z.B. Namen, Kontaktdaten o. Ä.).
      <h2> Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde </h2>
      <p>
        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
        Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist
        der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz
        unseres Unternehmens befindet. Der folgende Link stellt eine Liste der
        Datenschutzbeauftragten sowie deren Kontaktdaten bereit:{" "}
        <a
          target="_blank"
          href="https://www.bfdi.bund.de/DE/Service/Anschriften/anschriften_table.html"
        >
          Bundesbeauftragte für Datenschutz
        </a>
      </p>
      <h2> Widerruf Ihrer Einwilligung zur Datenverarbeitung </h2>
      <p>
        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
        Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
        Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
        formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
        erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.{" "}
      </p>
      <h2> Recht auf Datenübertragbarkeit </h2>
      <p>
        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
        Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten,
        an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt
        in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung
        der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
        soweit es technisch machbar ist.
      </p>
      <h2> Recht auf Auskunft, Berichtigung, Sperrung, Löschung </h2>
      <p>
        Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen
        das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
        personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den
        Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
        Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren
        Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über
        die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
      </p>
      <h2> SSL- bzw. TLS-Verschlüsselung </h2>
      <p>
        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
        Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website
        eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese
        Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine
        verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers
        und am Schloss-Symbol in der Browserzeile.{" "}
      </p>
      <h2> Datenspeicherung im lokalen Browserspeicher </h2>
      <p>
        Damit Ihre gewünschten Präferenzen und eingegeben Begriffe beim
        Verlassen oder Aktualisieren der Seite nicht verloren gehen, werden sie
        unverschlüsselt in Ihrem lokalen Browserspeicher, dem "Local Storage",
        hinterlegt. Es werden keine Daten an den Anbieter oder an Dritte
        übertragen. Die Daten verbleiben auf Ihrem System bis sie von Ihnen
        gelöscht werden. Sie können die Daten löschen indem Sie mittels der
        Browsereinstellungen den Browserchache leeren.
      </p>
      <p>
        Sie können das Speichern von lokalen Daten in Ihren Browsereinstellungen
        allgemein verbieten. In diesem Fall weisen wir auf mögliche
        Funktionseinschränkungen dieser Seite hin.
      </p>
      {/* <h2>Analyse-Tools und Werbung</h2>
      <h3>Matomo</h3>{" "}
      <p>Diese Website benutzt den Open Source Webanalysedienst Matomo.</p>{" "}
      <p>
        Mit Hilfe von Matomo sind wir in der Lage Daten &uuml;ber die Nutzung
        unserer Website durch die Websitebesucher zu erfassen und zu
        analysieren. Hierdurch k&ouml;nnen wir u.&nbsp;a. herausfinden, wann
        welche Seitenaufrufe get&auml;tigt wurden und aus welcher Region sie
        kommen. Au&szlig;erdem erfassen wir verschiedene Logdateien (z.&nbsp;B.
        IP-Adresse, Referrer, verwendete Browser und Betriebssysteme) und
        k&ouml;nnen messen, ob unsere Websitebesucher bestimmte Aktionen
        durchf&uuml;hren (z.&nbsp;B. Klicks, K&auml;ufe u. &Auml;.).
      </p>{" "}
      <p>
        Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1
        lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
        Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine
        Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt
        wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von
        Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die
        Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endger&auml;t des Nutzers (z.&nbsp;B.
        Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist
        jederzeit widerrufbar.
      </p>
      <h4>IP-Anonymisierung</h4>{" "}
      <p>
        Bei der Analyse mit Matomo setzen wir IP-Anonymisierung ein. Hierbei
        wird Ihre IP-Adresse vor der Analyse gek&uuml;rzt, sodass Sie Ihnen
        nicht mehr eindeutig zuordenbar ist.
      </p>
      <h4>Cookielose Analyse</h4>{" "}
      <p>
        Wir haben Matomo so konfiguriert, dass Matomo keine Cookies in Ihrem
        Browser speichert.
      </p>
      <h4>Hosting</h4>{" "}
      <p>
        Wir hosten Matomo ausschlie&szlig;lich auf unseren eigenen Servern,
        sodass alle Analysedaten bei uns verbleiben und nicht weitergegeben
        werden.
      </p>*/}
      <p>
        Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
    </div>
  );
};
export default Datenschutz;
