import Button from "@mui/material/Button";
const Datenschutz = () => {
  return (
    <div className="legal-text">
      <Button href="/"> </Button>
      <h1>Datenschutz</h1>
      <h2>In Kürze</h2>
      <ul>
        <li>
          <a href="https://screenar.io">Screenario</a>
          speichert oder verarbeitet keinerlei persönliche Daten, weder im
          Browserspeicher (Local Storage bzw Cookies), noch auf unseren Servern.
        </li>
        <li>Es werden keine Analytics- oder Trackingwerkzeuge verwendet</li>
        <li>
          Es werden keine IP-Adressen gespeichert oder verarbeitet und es gibt
          keine Zugriffslogs.
        </li>
      </ul>
      Es ist möglich, dass unser Hosting-Partner{" "}
      <a href="https://www.netlify.com/"> Netlify</a> technische Daten wie
      IP-Adressen für kurze Zeit verarbeitet, wenn dies für die Bereitstellung
      der Website zwingend notwendig ist.
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
        <a href="https://www.bfdi.bund.de/DE/Service/Anschriften/anschriften_table.html">
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
      Aktuell speichert screenar.io keinerlei Daten im lokalen Browserspeicher
      oder in Cookies, welche über mehrere Sitzungen verfügbar bleiben.
    </div>
  );
};
export default Datenschutz;
