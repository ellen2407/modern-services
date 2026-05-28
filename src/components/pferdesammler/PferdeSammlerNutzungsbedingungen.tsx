import React from 'react';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const PferdeSammlerNutzungsbedingungen: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 bg-white min-h-screen">
      <div className="max-w-3xl">

        {/* ── HAUPTÜBERSCHRIFT ─────────────────────────────────────────── */}
        <h1 className="text-4xl font-bold mb-2 text-[#2d2d2d] tracking-tight">
          Pferdesammler App
        </h1>
        <p className="text-[#31e9e9] font-bold text-xl mb-8 tracking-wide">
          AGB &amp; Datenschutz
        </p>

        {/* ── INHALTSVERZEICHNIS ───────────────────────────────────────── */}
        <div className="mb-12 p-6 border border-gray-100 rounded-xl bg-gray-50">
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Hier finden Sie die rechtlichen Informationen zur Pferdesammler-App –
            die Allgemeinen Geschäftsbedingungen sowie die Datenschutzerklärung.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollTo('agb')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#31e9e9] text-[#2d2d2d] font-semibold text-sm hover:bg-[#31e9e9]/10 transition-colors text-left"
            >
              <span className="text-[#31e9e9] font-bold">§</span>
              Allgemeine Geschäftsbedingungen (AGB)
            </button>
            <button
              onClick={() => scrollTo('datenschutz')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#31e9e9] text-[#2d2d2d] font-semibold text-sm hover:bg-[#31e9e9]/10 transition-colors text-left"
            >
              <span className="text-[#31e9e9] font-bold">🔒</span>
              Datenschutzerklärung
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* BLOCK 1: AGB                                                  */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <h2 id="agb" className="text-2xl font-bold mb-8 text-[#2d2d2d] tracking-tight scroll-mt-8">
          Nutzungsbedingungen (AGB)
        </h2>

        <div className="space-y-8 text-gray-700 leading-relaxed">

          {/* Anbieter */}
          <div>
            <h3 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
              Anbieter
            </h3>
            <p className="mt-2">
              Modern IT Services UG (haftungsbeschränkt)<br />
              Gewerbestr. 13<br />
              82064 Straßlach-Dingharting<br />
              Deutschland
            </p>
            <p className="mt-2">
              Vertreten durch die Geschäftsführer: Maximilian Rabauer, Heinz Rabauer<br />
              Handelsregister: HRB 298879, Amtsgericht München<br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE350658306<br />
              Kontakt: pferdesammler@modern-its.de
            </p>
          </div>

          {/* 1 */}
          <div>
            <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">1. Geltungsbereich</h3>
            <p className="mt-2">
              Diese Nutzungsbedingungen regeln die Nutzung der Android-App „Pferdesammler"
              (nachfolgend „App") der Modern IT Services UG (haftungsbeschränkt) (nachfolgend
              „Anbieter"). Mit der Nutzung der App – einschließlich der Gast-Nutzung sowie der
              Registrierung eines Nutzerkontos – stimmst du diesen Nutzungsbedingungen zu.
            </p>
            <p className="mt-2">Abweichende Bedingungen des Nutzers werden nicht anerkannt.</p>
          </div>

          {/* 2 */}
          <div>
            <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">
              2. Mindestalter und Nutzungsberechtigung
            </h3>
            <p className="mt-2">
              Die App richtet sich an Nutzerinnen und Nutzer <strong>ab 16 Jahren</strong>.
            </p>
            <p className="mt-2">
              Personen unter 16 Jahren dürfen die App – einschließlich Gast-Nutzung,
              Kontoerstellung, KI-gestützter Fotoanalyse, standortbezogener Funktionen und
              Premium-Abonnements – <strong>nur mit ausdrücklicher Zustimmung ihrer Erziehungsberechtigten</strong> nutzen.
            </p>
            <p className="mt-2">
              Bei der Registrierung musst du bestätigen, dass du mindestens 16 Jahre alt bist oder
              die erforderliche Zustimmung deiner Erziehungsberechtigten hast. Vor der ersten
              Nutzung der App (einschließlich Gast-Modus) erfolgt eine einmalige Altersabfrage per
              Geburtsjahr; das Geburtsjahr wird nicht gespeichert. Wir sind berechtigt, Konten zu
              sperren oder zu löschen, wenn uns bekannt wird, dass diese Voraussetzung nicht erfüllt ist.
            </p>
            <p className="mt-2">
              Weitere Informationen zur Datenverarbeitung bei Minderjährigen findest du in unserer
              Datenschutzerklärung (Abschnitt 8).
            </p>
          </div>

          {/* 3 */}
          <div>
            <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">3. Leistungsbeschreibung</h3>
            <p>
              Die App ermöglicht es Nutzerinnen und Nutzern, Pferde mit ihrem Mobilgerät zu
              fotografieren bzw. Fotos aus der Galerie hochzuladen, deren Rasse mithilfe eines
              KI-Dienstes bestimmen zu lassen und die erkannten Pferde in einem digitalen
              Sammelalbum zu speichern. Ergänzend stehen Statistiken (Insights), das Teilen von
              Sammlung und Erfolgen sowie eine Profilverwaltung zur Verfügung.
            </p>
            <p className="mt-2">
              Die App ist derzeit ausschließlich für das Betriebssystem Android über den Google
              Play Store verfügbar. Ein Anspruch auf Verfügbarkeit auf weiteren Betriebssystemen
              oder Vertriebskanälen besteht nicht.
            </p>
            <p className="mt-2">Die Nutzung erfolgt in drei Nutzungstypen:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Gast-Nutzer:</strong> ohne Registrierung; stark eingeschränkter
                Funktionsumfang. Ergebnisse der KI-Analyse werden unscharf angezeigt, bis sich der
                Nutzer registriert.
              </li>
              <li>
                <strong>Free-Nutzer:</strong> registrierter Nutzer ohne Abo; eingeschränkter
                Funktionsumfang gemäß den in der App ausgewiesenen Limits.
              </li>
              <li>
                <strong>Premium-Nutzer:</strong> registrierter Nutzer mit aktivem Premium-Status
                (über Abo oder Aktionscode); Zugriff auf den vollen Funktionsumfang im Rahmen der
                in der App ausgewiesenen Limits.
              </li>
            </ul>
            <p className="mt-2">
              Der Anbieter ist berechtigt, die App und deren Funktionen zu ändern, anzupassen oder
              Teile davon einzustellen, wenn hierfür ein triftiger Grund vorliegt. Ein solcher
              triftiger Grund liegt insbesondere vor, wenn die Änderung erforderlich ist, um (i) die
              App an eine neue technische Umgebung, veränderte Nutzerzahlen oder andere wichtige
              betriebliche Gründe anzupassen, (ii) neue oder verbesserte Funktionen bereitzustellen,
              (iii) Sicherheitsrisiken zu beheben, oder (iv) veränderte gesetzliche Vorschriften
              oder die Rechtsprechung umzusetzen.
            </p>
            <p className="mt-2">
              Dem Nutzer entstehen durch solche Änderungen keine zusätzlichen Kosten. Der Anbieter
              wird den Nutzer über Änderungen, die die Zugriffsmöglichkeit oder die Nutzbarkeit der
              App für den Nutzer mehr als nur geringfügig beeinträchtigen, rechtzeitig vorab in
              Textform (z. B. per E-Mail oder durch eine klare Mitteilung innerhalb der App)
              informieren.
            </p>
            <p className="mt-2">
              Für die KI-gestützte Rassebestimmung wird keine Gewähr für inhaltliche Richtigkeit
              übernommen. Die Ergebnisse stellen lediglich eine wahrscheinlichkeitsbasierte
              Einschätzung dar.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">4. Registrierung und Nutzerkonto</h3>
            <p>
              Die Nutzung von Free- und Premium-Funktionen setzt die Registrierung eines
              Nutzerkontos voraus. Die Registrierung erfolgt wahlweise per E-Mail-Adresse und
              Passwort oder über einen Google-Login. Bei der Registrierung ist zusätzlich ein
              eindeutiger Username zu vergeben.
            </p>
            <p className="mt-2">Der Nutzer ist verpflichtet:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>bei der Registrierung wahrheitsgemäße Angaben zu machen,</li>
              <li>die Zugangsdaten geheim zu halten und vor Zugriff Dritter zu schützen,</li>
              <li>nur ein Nutzerkonto pro Person anzulegen,</li>
              <li>
                bei berechtigtem Verdacht auf Missbrauch seines Kontos den Anbieter unverzüglich zu
                informieren.
              </li>
            </ul>
            <p className="mt-2">
              Der Anbieter ist berechtigt, Nutzerkonten zu sperren oder zu löschen, wenn der Nutzer
              gegen diese Nutzungsbedingungen, geltendes Recht oder die Rechte Dritter verstößt
              oder begründete Anhaltspunkte für eine missbräuchliche Nutzung bestehen.
            </p>
            <p className="mt-2">
              Eine Account-Löschung durch den Nutzer ist jederzeit über die in der App vorgesehene
              Funktion möglich. Hinweise zur Datenverarbeitung im Rahmen der Account-Löschung finden
              sich in der Datenschutzerklärung.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">5. Premium-Abonnements</h3>
            <p>
              Premium-Funktionen können kostenpflichtig als Abonnement erworben werden. Es stehen
              folgende Pläne zur Auswahl:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Premium Monat:</strong> 3,99 EUR pro Monat</li>
              <li><strong>Premium Jahr:</strong> 39,99 EUR pro Jahr</li>
            </ul>
            <p className="mt-2">
              Alle Preise sind Endpreise und beinhalten die jeweils geltende gesetzliche
              Umsatzsteuer.
            </p>
            <p className="mt-2">
              Der Vertragsschluss, die Zahlungsabwicklung und die Rechnungsstellung erfolgen
              ausschließlich über den Google Play Store nach den dort geltenden Bedingungen von
              Google. Mit Abschluss des Abonnements im Google Play Store kommt der Vertrag zwischen
              dem Nutzer und dem Anbieter über die Nutzung der Premium-Funktionen zustande.
            </p>
            <p className="mt-2">
              Das Abonnement verlängert sich automatisch um den jeweils gewählten Zeitraum, sofern
              es nicht rechtzeitig vor Ablauf gekündigt wird.{" "}
              <strong>
                Die Kündigung, Verwaltung, Änderung der Zahlungsmethode sowie die Reaktivierung des
                Abonnements erfolgen ausschließlich über den Google Play Store
              </strong>{" "}
              (Bereich „Abos"). Der Anbieter bietet keine eigene Abo-Verwaltung innerhalb der App.
            </p>
            <p className="mt-2">
              Nach wirksamer Kündigung bleibt der Premium-Status bis zum Ende des bereits bezahlten
              Zeitraums bestehen. Danach erfolgt automatisch eine Rückstufung in den Free-Status.
              Bereits in der Sammlung gespeicherte Inhalte bleiben dabei erhalten; auf die
              Premium-Funktionen besteht ab diesem Zeitpunkt jedoch kein Zugriff mehr.
            </p>
            <p className="mt-2">
              Soweit es sich um einen Vertrag über digitale Dienste mit Verbrauchern handelt, gelten
              die gesetzlichen Bestimmungen zum Widerrufsrecht. Hinweise zum Widerruf werden dem
              Nutzer im Rahmen des Bestellprozesses gesondert zur Verfügung gestellt.
            </p>
          </div>

          {/* 5.1 */}
          <div>
            <h4 className="font-bold mt-2 mb-2 text-[#2d2d2d]">5.1 Premium über Aktionscode</h4>
            <p>
              Der Anbieter kann zeitlich begrenzte Aktionscodes ausgeben, mit denen ein
              Premium-Zugang für die Dauer von <strong>einem Monat</strong> ohne Zahlungspflicht
              freigeschaltet werden kann.
            </p>
            <p className="mt-2">Für die Premium-Nutzung über einen Aktionscode gilt:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Die Einlösung erfolgt in der App und ist nur einmalig je Nutzerkonto möglich,
                sofern in der jeweiligen Aktion nicht ausdrücklich etwas anderes geregelt ist.
              </li>
              <li>
                Der über einen Aktionscode gewährte Premium-Status verlängert sich{" "}
                <strong>nicht automatisch</strong> und führt zu{" "}
                <strong>keiner Zahlungspflicht</strong>.
              </li>
              <li>
                Nach Ablauf des Aktionszeitraums erfolgt automatisch eine Rückstufung in den
                Free-Status. Bereits gesammelte Inhalte bleiben erhalten.
              </li>
              <li>
                Aktionscodes sind nicht übertragbar, nicht in bar auszahlbar und nicht mit anderen
                Aktionen kombinierbar, sofern nicht ausdrücklich anders ausgewiesen.
              </li>
              <li>
                Der Anbieter ist berechtigt, Aktionscodes bei begründetem Verdacht auf
                missbräuchliche, mehrfache oder gewerbliche Einlösung zu entwerten und den darüber
                gewährten Premium-Status aufzuheben.
              </li>
              <li>
                Ein Rechtsanspruch auf die Ausgabe oder Verlängerung eines Aktionscodes besteht
                nicht.
              </li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">6. Pflichten der Nutzer</h3>
            <p>
              Der Nutzer verpflichtet sich, die App ausschließlich im Rahmen ihres
              bestimmungsgemäßen Zwecks zu nutzen. Insbesondere:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Es dürfen nur Fotos von Pferden zur KI-Analyse hochgeladen werden. Das Hochladen
                von Bildern, auf denen identifizierbare Personen erkennbar sind, ist nicht
                gestattet, sofern hierfür keine Einwilligung der abgebildeten Person vorliegt.
              </li>
              <li>
                Es dürfen keine rechtswidrigen, beleidigenden, jugendgefährdenden,
                gewaltverherrlichenden oder die Rechte Dritter (insbesondere Urheber- und
                Persönlichkeitsrechte) verletzenden Inhalte hochgeladen oder geteilt werden.
              </li>
              <li>
                Die App und ihre Funktionen dürfen nicht zu Zwecken eingesetzt werden, die die
                technische Stabilität, Sicherheit oder Verfügbarkeit der App oder der
                zugrundeliegenden Dienste beeinträchtigen, insbesondere nicht durch automatisierte
                Skripte, Reverse Engineering oder die Umgehung von Schutzmaßnahmen.
              </li>
              <li>
                Eine Umgehung der in den Nutzungstypen vorgesehenen Beschränkungen, insbesondere
                der Scan-Limits, ist untersagt.
              </li>
            </ul>
            <p className="mt-2">
              Bei Verstößen ist der Anbieter berechtigt, die in Ziffer 4 genannten Maßnahmen zu
              ergreifen.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">7. Haftung</h3>
            <p>
              Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie nach den
              Bestimmungen des Produkthaftungsgesetzes. Für leichte Fahrlässigkeit haftet der
              Anbieter nur bei der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten); in
              diesem Fall ist die Haftung der Höhe nach auf den vertragstypischen, vorhersehbaren
              Schaden begrenzt.
            </p>
            <p className="mt-2">
              Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit
              sowie zwingende gesetzliche Haftungstatbestände bleiben unberührt.
            </p>
            <p className="mt-2">
              Der Nutzer erkennt an, dass es sich bei den KI-Ergebnissen um rein KI-generierte
              Wahrscheinlichkeitsschätzungen handelt, die fehlerbehaftet sein können. Das Vorliegen
              einer Fehlbestimmung stellt als solches keinen Mangel des digitalen Produkts dar,
              sofern die KI im Übrigen den branchenüblichen Standards entspricht. Die Ergebnisse der
              KI sind unverbindliche Einschätzungen und ersetzen keine sachkundige Beurteilung.
            </p>
            <p className="mt-2">
              Der Anbieter bemüht sich um eine bestmögliche Verfügbarkeit der App. Eine
              ununterbrochene Erreichbarkeit und Fehlerfreiheit der App und der zugrundeliegenden
              Dienste kann jedoch technisch nicht garantiert werden. Der Anbieter schuldet eine
              Verfügbarkeit der App-Infrastruktur von 98 % im Jahresmittel.
            </p>
            <p className="mt-2">Von dieser Verfügbarkeitszusage ausgenommen sind:</p>
            <p className="mt-2">
              (a) notwendige, planmäßige Wartungsarbeiten, die dem Nutzer nach Möglichkeit vorab
              (z. B. durch einen Hinweis in der App) angekündigt werden;
            </p>
            <p className="mt-2">
              (b) Zeiten der Nichtverfügbarkeit aufgrund von höherer Gewalt oder anderen vom
              Anbieter nicht verschuldeten und unvorhersehbaren Ereignissen (z. B. großflächige
              Internet- oder Serverausfälle außerhalb des Machtbereichs des Anbieters).
            </p>
            <p className="mt-2">
              Soweit die Nutzbarkeit der App durch unvorhersehbare Störungen von für den Betrieb
              notwendigen Drittanbietern (wie z. B. Google Play Store, Cloud-Infrastruktur- oder
              KI-Dienstleistern) beeinträchtigt wird, gilt dies nicht als Pflichtverletzung des
              Anbieters, es sei denn, den Anbieter trifft ein eigenes Auswahl- oder
              Überwachungsverschulden hinsichtlich dieser Dienstleister.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">8. Schlussbestimmungen</h3>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              Zwingende verbraucherschützende Vorschriften des Staates, in dem der Nutzer seinen
              gewöhnlichen Aufenthalt hat, bleiben unberührt.
            </p>
            <p className="mt-2">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit, abrufbar unter{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#31e9e9] hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Der Anbieter ist nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p className="mt-2">
              Der Anbieter behält sich vor, diese Nutzungsbedingungen jederzeit mit Wirkung für die
              Zukunft zu ändern, sofern dies aus triftigen Gründen (z. B. bei Gesetzesänderungen,
              Änderungen der Rechtsprechung, Anpassungen des Geschäftsmodells oder zur Erweiterung
              der App-Funktionen) erforderlich ist. Über Änderungen werden registrierte Nutzer
              mindestens sechs Wochen vor deren geplantem Wirksamwerden in Textform (z. B. per
              E-Mail oder durch einen deutlichen Hinweis innerhalb der App) informiert.
            </p>
            <p className="mt-2">
              Für Nutzer ohne kostenpflichtiges Premium-Abonnement (Free- und Gast-Nutzer) gilt:
              Die geänderten Bedingungen gelten als angenommen, wenn der Nutzer ihnen nicht innerhalb
              von sechs Wochen nach Zugang der Änderungsmitteilung in Textform widerspricht. Der
              Anbieter wird den Nutzer in der Änderungsmitteilung gesondert auf diese Frist und die
              rechtliche Bedeutung seines Schweigens hinweisen. Widerspricht der Nutzer, ist der
              Anbieter berechtigt, das Nutzungsverhältnis mit einer Frist von zwei Wochen zu
              kündigen und das Nutzerkonto zu löschen.
            </p>
            <p className="mt-2">
              Für Nutzer mit einem aktiven, kostenpflichtigen Premium-Abonnement gilt: Änderungen
              der Nutzungsbedingungen bedürfen der ausdrücklichen Zustimmung des Nutzers (z. B.
              durch Bestätigung per Klick innerhalb der App oder per E-Mail). Liegt die Zustimmung
              des Nutzers bis zum geplanten Wirksamwerden der Änderungen nicht vor, wird der Vertrag
              zu den bisherigen Bedingungen fortgeführt. Der Anbieter behält sich für diesen Fall
              das Recht vor, das Premium-Abonnement ordentlich zum Ende des laufenden und bereits
              bezahlten Abrechnungszeitraums zu kündigen.
            </p>
            <p className="mt-2">
              Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam oder undurchführbar
              sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
            </p>
            <p className="mt-4 text-sm italic">Letzte Aktualisierung: Mai 2026</p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════ */}
        {/* BLOCK 2: DATENSCHUTZ                                          */}
        {/* ══════════════════════════════════════════════════════════════ */}
        <div className="pt-16 mt-16 border-t-2 border-gray-100">
          <h2 id="datenschutz" className="text-2xl font-bold mb-8 text-[#2d2d2d] tracking-tight scroll-mt-8">
            Datenschutzerklärung
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            {/* 1 */}
            <div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
                1. Verantwortliche Stelle
              </h3>
              <p className="mt-2">
                Modern IT Services UG (haftungsbeschränkt)<br />
                Gewerbestr. 13<br />
                82064 Straßlach-Dingharting<br />
                Deutschland
              </p>
              <p className="mt-2">
                Telefon: 0172 3153329<br />
                E-Mail: pferdesammler@modern-its.de<br />
                Web: modern-its.de
              </p>
            </div>

            {/* 2 */}
            <div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">
                2. Überblick – was diese App tut
              </h3>
              <p>
                Pferdesammler ist eine Android-App, mit der Nutzerinnen und Nutzer Pferde
                fotografieren, deren Rasse per künstlicher Intelligenz bestimmen lassen und in einem
                digitalen Sammelalbum speichern können.
              </p>
              <p className="mt-2">
                Dabei werden verschiedene personenbezogene Daten erhoben und verarbeitet. Diese
                Erklärung informiert dich darüber, welche Daten wir erheben, zu welchem Zweck und
                an wen wir sie weitergeben.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">3. Welche Daten wir erheben</h3>

              <h4 className="font-bold mt-4 mb-2 text-[#2d2d2d]">3.1 Konto- und Anmeldedaten</h4>
              <p>Wenn du ein Konto erstellst (per E-Mail oder Google-Login), speichern wir:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>E-Mail-Adresse</li>
                <li>Benutzername (selbst gewählt)</li>
                <li>Zeitpunkt der Registrierung</li>
                <li>Authentifizierungsanbieter (E-Mail oder Google)</li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>Zweck:</strong> Bereitstellung des Nutzerkontos, Authentifizierung,
                Kontozuordnung der Sammlung.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
              </p>

              <h4 className="font-bold mt-6 mb-2 text-[#2d2d2d]">3.2 Sammlung und Scan-Daten</h4>
              <p>Wenn du ein Pferd scannst und die Rasse erkannt wird, speichern wir:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Erkannte Pferderasse (ID und Name)</li>
                <li>Zeitpunkt des Scans</li>
                <li>Optional: GPS-Koordinaten des Scan-Ortes (nur wenn Standortberechtigung erteilt)</li>
                <li>Optional: Manuell eingegebener Ortsname</li>
                <li>Lokal auf deinem Gerät: das aufgenommene Foto (nicht auf unseren Servern)</li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>Zweck:</strong> Aufbau und Pflege deines persönlichen Sammelalbums,
                Statistiken und Trophäen.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              </p>

              <h4 className="font-bold mt-6 mb-2 text-[#2d2d2d]">3.3 Foto-Analyse durch KI (Rassebestimmung)</h4>
              <p>
                Das von dir aufgenommene oder aus der Galerie gewählte Foto wird zur
                Rassebestimmung an unsere Backend-Infrastruktur übermittelt. Dort wird es an OpenAI
                (USA) zur KI-gestützten Analyse weitergeleitet. Das Foto wird ausschließlich zur
                Rassebestimmung verarbeitet und nicht dauerhaft bei OpenAI gespeichert.
              </p>
              <p className="mt-2">
                <strong>Wichtiger Hinweis:</strong> Die App ist ausschließlich für die Aufnahme von
                Pferden gedacht. Eine automatische Filterung von Gesichtern findet nicht statt.
                Bitte achte darauf, dass auf den Fotos keine Personen (Gesichter) zu erkennen sind.
              </p>
              <p className="mt-2">
                Die Übermittlung an OpenAI erfolgt auf Basis eines Auftragsverarbeitungsvertrages
                (AVV) inklusive EU-Standardvertragsklauseln (SCC) gemäß Art. 46 Abs. 2 lit. c
                DSGVO. Vertragspartner für Nutzer aus dem EWR ist OpenAI Ireland Ltd. OpenAI nutzt
                API-Daten laut Vertrag nicht zum Training eigener Modelle.
              </p>
              <p className="mt-2 text-sm">
                <strong>Zweck:</strong> Automatische Bestimmung der Pferderasse.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (ausdrückliche
                Einwilligung); Drittlandübertragung gemäß Art. 46 Abs. 2 lit. c DSGVO.
              </p>

              <h4 className="font-bold mt-6 mb-2 text-[#2d2d2d]">3.4 Standortdaten</h4>
              <p>
                Wenn du die Standortberechtigung erteilst, wird beim Scan dein ungefährer
                GPS-Standort gespeichert (Breiten- und Längengrad). Die Nutzung der
                Standortfunktion ist <strong>freiwillig</strong> und kann jederzeit in den
                App-Einstellungen deaktiviert werden. Eine genaue Adresse wird nicht gespeichert.
              </p>
              <p className="mt-2 text-sm">
                <strong>Zweck:</strong> Anzeige des Fundorts in deiner Sammlung; spätere
                Kartenansicht (geplant für Version 2).<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              </p>

              <h4 className="font-bold mt-6 mb-2 text-[#2d2d2d]">3.5 Nutzungsdaten und Absturzberichte</h4>
              <p>
                Wenn du uns hierzu deine ausdrückliche Einwilligung erteilt hast, senden wir bei
                App-Abstürzen Fehlerdaten an Sentry (USA), um die Stabilität unserer App
                kontinuierlich zu verbessern. Das Absturz-Reporting ist standardmäßig deaktiviert
                (Opt-in) und startet erst, wenn du der Aktivierung aktiv zustimmst.
              </p>
              <p className="mt-2">Folgende Daten werden im Falle eines Absturzes übermittelt:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Fehlermeldung und Stack Trace (technischer Fehlercode)</li>
                <li>App-Version und Betriebssystem (Android, OS-Version)</li>
                <li>Anonymisierte Nutzer-ID (erste 8 Zeichen der internen UUID, kein Klarname, keine E-Mail)</li>
                <li>Zeitstempel und die letzten technischen Screen-Namen</li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>Zweck:</strong> Fehlerbehebung und Verbesserung der App-Stabilität.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1
                TDDDG (ausdrückliche Einwilligung).
              </p>

              <h4 className="font-bold mt-6 mb-2 text-[#2d2d2d]">3.6 Abonnement- und Zahlungsdaten</h4>
              <p>
                Wenn du ein Premium-Abonnement abschließt, erfolgt die Zahlung ausschließlich über
                den <strong>Google Play Store</strong>. Wir erhalten von Google lediglich eine
                Bestätigung über den Abo-Status (aktiv/abgelaufen), keine Zahlungsdaten wie
                Kreditkartennummern.
              </p>
              <p className="mt-2">
                Die Abo-Verwaltung wird über <strong>RevenueCat</strong> (USA) abgewickelt. In
                unserer Datenbank speichern wir: Abo-Status, Abo-Ende, Abo-Typ und
                Verlängerungsstatus.
              </p>
              <p className="mt-2 text-sm">
                <strong>Zweck:</strong> Freischaltung und Verwaltung des Premium-Zugangs.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              </p>

              <h4 className="font-bold mt-6 mb-2 text-[#2d2d2d]">3.7 Gast-Nutzung (ohne Konto)</h4>
              <p>
                Du kannst die App ohne Registrierung als Gast nutzen – nach bestandener
                Altersabfrage beim ersten App-Start (siehe Abschnitt 8). Dabei wird eine anonyme
                temporäre Sitzung erstellt. Scan-Ergebnisse werden dabei{" "}
                <strong>maximal 24 Stunden</strong> gespeichert und danach automatisch gelöscht.
              </p>
              <p className="mt-2 text-sm">
                <strong>Zweck:</strong> Nutzung der App ohne Registrierungshürde.<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
              </p>
            </div>

            {/* 4 */}
            <div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">
                4. Drittanbieter und Datenübermittlung
              </h3>
              <p>
                Zur Bereitstellung der App-Funktionen arbeiten wir mit spezialisierten
                Drittanbietern zusammen. Eine Weitergabe deiner Daten erfolgt nur zu den
                nachfolgend genannten Zwecken:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-4">
                <li>
                  <strong>Supabase Inc.</strong> (EU-Region, Frankfurt am Main)<br />
                  Zweck: Datenbank, Nutzer-Authentifizierung, Backend.<br />
                  Kein Drittlandtransfer (Daten ausschließlich in der EU).<br />
                  <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#31e9e9] hover:underline">supabase.com/privacy</a>
                </li>
                <li>
                  <strong>OpenAI Ireland Ltd.</strong> (Irland / USA)<br />
                  Zweck: KI-gestützte Rassebestimmung.<br />
                  Transfer-Grundlage: AVV + EU-Standardvertragsklauseln (SCC) gemäß Art. 46 Abs. 2 lit. c DSGVO.<br />
                  <a href="https://openai.com/policies/eu-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#31e9e9] hover:underline">openai.com/policies/eu-privacy-policy</a>
                </li>
                <li>
                  <strong>RevenueCat, Inc.</strong> (USA)<br />
                  Zweck: Verwaltung von Premium-Abonnements.<br />
                  Transfer-Grundlage: AVV + EU-Standardvertragsklauseln (SCC).<br />
                  <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#31e9e9] hover:underline">revenuecat.com/privacy</a>
                </li>
                <li>
                  <strong>Functional Software, Inc. (Sentry)</strong> (USA)<br />
                  Zweck: Anonymisierte Absturzberichte (nur mit ausdrücklicher Einwilligung).<br />
                  Transfer-Grundlage: EU-US Data Privacy Framework (DPF) + SCC als Fallback.<br />
                  <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#31e9e9] hover:underline">sentry.io/privacy</a>
                </li>
                <li>
                  <strong>Plus Five Five, Inc. (Resend)</strong> (USA)<br />
                  Zweck: Technischer Versand von System-E-Mails.<br />
                  Transfer-Grundlage: AVV + EU-Standardvertragsklauseln (SCC).<br />
                  <a href="https://resend.com/security/gdpr" target="_blank" rel="noopener noreferrer" className="text-[#31e9e9] hover:underline">resend.com/security/gdpr</a>
                </li>
                <li>
                  <strong>Google LLC</strong> (USA)<br />
                  Zweck: Google-Login (OAuth) und Zahlungsabwicklung über Google Play Billing.<br />
                  Transfer-Grundlage: EU-US Data Privacy Framework (DPF).<br />
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#31e9e9] hover:underline">policies.google.com/privacy</a>
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">5. Speicherdauer</h3>
              <p>
                Wir speichern deine personenbezogenen Daten nur so lange, wie es für die Erreichung
                der genannten Zwecke erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen
                vorschreiben.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Konto- und Sammlungsdaten:</strong> bis zur vollständigen Löschung deines
                  Nutzerkontos (jederzeit unter Einstellungen möglich).
                </li>
                <li>
                  <strong>Scan-Daten (Gast-Nutzung):</strong> maximal 24 Stunden, danach
                  automatisch gelöscht.
                </li>
                <li>
                  <strong>Absturzberichte (Sentry):</strong> maximal 90 Tage.
                </li>
                <li>
                  <strong>Protokolle von System-E-Mails (Resend):</strong> 30 Tage.
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">6. Deine Rechte</h3>
              <p>Du hast folgende Rechte bezüglich deiner personenbezogenen Daten:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong>Auskunft</strong> (Art. 15 DSGVO)</li>
                <li><strong>Berichtigung</strong> (Art. 16 DSGVO)</li>
                <li>
                  <strong>Löschung</strong> (Art. 17 DSGVO): direkt in der App unter{" "}
                  <em>Profil → Account löschen</em>.
                </li>
                <li><strong>Einschränkung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Widerspruch</strong> (Art. 21 DSGVO)</li>
                <li>
                  <strong>Widerruf</strong> einer erteilten Einwilligung (z. B. Standort): jederzeit
                  in den App-Einstellungen.
                </li>
              </ul>
              <p className="mt-2">
                Zur Ausübung deiner Rechte wende dich an:{" "}
                <a href="mailto:pferdesammler@modern-its.de" className="text-[#31e9e9] hover:underline">
                  pferdesammler@modern-its.de
                </a>
              </p>
              <p className="mt-2">
                Du hast außerdem das Recht, dich bei einer Datenschutzaufsichtsbehörde zu
                beschweren. Zuständig ist in der Regel die Behörde deines Wohnorts.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">7. Datensicherheit</h3>
              <p>
                Alle Verbindungen zwischen der App und unseren Servern sind{" "}
                <strong>SSL/TLS-verschlüsselt</strong>. Authentifizierungstoken werden sicher auf
                deinem Gerät gespeichert (Android Keystore via <code>expo-secure-store</code>). Wir
                haben technische und organisatorische Maßnahmen getroffen, um deine Daten vor
                unbefugtem Zugriff zu schützen.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">
                8. Kinder und Jugendliche (Mindestalter)
              </h3>
              <p>
                Die Nutzung der App und die Registrierung eines Nutzerkontos ist ausschließlich
                Personen gestattet, die das 16. Lebensjahr vollendet haben.
              </p>
              <p className="mt-2">
                Personen unter 16 Jahren ist die Nutzung der App – einschließlich der Gast-Nutzung,
                der Registrierung eines Kontos, der KI-gestützten Fotoanalyse sowie der
                standortbezogenen Funktionen – nicht gestattet.
              </p>
              <p className="mt-2">
                Beim ersten App-Start erfolgt eine einmalige Abfrage des Geburtsjahres. Das
                Geburtsjahr wird nicht auf unseren Servern gespeichert, sondern dient rein lokal
                der Überprüfung des Mindestalters. Ergibt die Abfrage, dass der Nutzer unter 16
                Jahre alt ist, wird der Zugriff technisch blockiert.
              </p>
              <p className="mt-2">
                Falls wir erfahren, dass sich ein Nutzer unter 16 Jahren entgegen dieser Bestimmung
                registriert hat, werden wir das Nutzerkonto sowie alle zugehörigen Daten unverzüglich
                sperren und dauerhaft löschen. Kontakt:{" "}
                <a href="mailto:pferdesammler@modern-its.de" className="text-[#31e9e9] hover:underline">
                  pferdesammler@modern-its.de
                </a>
              </p>
            </div>

            {/* 9 */}
            <div>
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">
                9. Änderungen dieser Datenschutzerklärung
              </h3>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen (z. B. bei
                neuen App-Funktionen oder rechtlichen Änderungen). Die aktuelle Version ist stets
                unter der in der App verlinkten URL abrufbar. Über wesentliche Änderungen werden
                wir dich informieren.
              </p>
            </div>

            {/* 10 */}
            <div className="pb-12">
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">10. Kontakt Datenschutz</h3>
              <p>Bei Fragen zum Datenschutz in der Pferdesammler-App:</p>
              <p className="mt-2">
                Modern IT Services UG (haftungsbeschränkt)<br />
                E-Mail:{" "}
                <a href="mailto:pferdesammler@modern-its.de" className="text-[#31e9e9] hover:underline">
                  pferdesammler@modern-its.de
                </a><br />
                Gewerbestr. 13, 82064 Straßlach-Dingharting
              </p>
              <p className="mt-4 text-sm italic">Letzte Aktualisierung: Mai 2026</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PferdeSammlerNutzungsbedingungen;
