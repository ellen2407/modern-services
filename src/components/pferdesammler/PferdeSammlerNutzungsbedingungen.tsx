import React from 'react';

const PferdeSammlerNutzungsbedingungen: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 bg-white min-h-screen">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-10 text-[#2d2d2d] tracking-tight">
          Nutzungsbedingungen (AGB) - Pferdesammler-App
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
              Anbieter
            </h2>
            <p className="mt-2">
              Modern IT Services UG (haftungsbeschrankt)<br />
              Gewerbestr. 13<br />
              82064 Strasslach-Dingharting<br />
              Deutschland
            </p>
            <p className="mt-2">
              Vertreten durch die Geschaftsfuhrer: Maximilian Rabauer, Heinz Rabauer<br />
              Handelsregister: HRB 298879, Amtsgericht Munchen<br />
              Umsatzsteuer-Identifikationsnummer gemass § 27a UStG: DE350658306<br />
              Kontakt: pferdesammler@modern-its.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">1. Geltungsbereich</h2>
            <p className="mt-2">
              Diese Nutzungsbedingungen regeln die Nutzung der Android-App "Pferdesammler"
              (nachfolgend "App") der Modern IT Services UG (haftungsbeschrankt) (nachfolgend
              "Anbieter"). Mit der Nutzung der App - einschliesslich der Gast-Nutzung sowie der
              Registrierung eines Nutzerkontos - stimmst du diesen Nutzungsbedingungen zu.
            </p>
            <p className="mt-2">Abweichende Bedingungen des Nutzers werden nicht anerkannt.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">
              2. Mindestalter und Nutzungsberechtigung
            </h2>
            <p className="mt-2">
              Die App richtet sich an Nutzerinnen und Nutzer <strong>ab 16 Jahren</strong>.
            </p>
            <p className="mt-2">
              Personen unter 16 Jahren durfen die App - einschliesslich Gast-Nutzung,
              Kontoerstellung, KI-gestutzter Fotoanalyse, standortbezogener Funktionen und
              Premium-Abonnements - <strong>nur mit ausdrucklicher Zustimmung ihrer Erziehungsberechtigten</strong> nutzen.
            </p>
            <p className="mt-2">
              Bei der Registrierung musst du bestatigen, dass du mindestens 16 Jahre alt bist oder
              die erforderliche Zustimmung deiner Erziehungsberechtigten hast. Vor der ersten
              Nutzung der App (einschliesslich Gast-Modus) erfolgt eine einmalige Altersabfrage per
              Geburtsjahr; das Geburtsjahr wird nicht gespeichert. Wir sind berechtigt, Konten zu
              sperren oder zu loschen, wenn uns bekannt wird, dass diese Voraussetzung nicht
              erfullt ist.
            </p>
            <p className="mt-2">
              Weitere Informationen zur Datenverarbeitung bei Minderjahrigen findest du in unserer
              Datenschutzerklarung (Abschnitt 8).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">3. Leistungsbeschreibung</h2>
            <p>
              Die App ermoglicht es Nutzerinnen und Nutzern, Pferde mit ihrem Mobilgerat zu
              fotografieren bzw. Fotos aus der Galerie hochzuladen, deren Rasse mithilfe eines
              KI-Dienstes bestimmen zu lassen und die erkannten Pferde in einem digitalen
              Sammelalbum zu speichern. Erganzend stehen Statistiken (Insights), das Teilen von
              Sammlung und Erfolgen sowie eine Profilverwaltung zur Verfugung.
            </p>
            <p className="mt-2">
              Die App ist derzeit ausschliesslich fur das Betriebssystem Android uber den Google
              Play Store verfugbar. Ein Anspruch auf Verfugbarkeit auf weiteren Betriebssystemen
              oder Vertriebskanalen besteht nicht.
            </p>
            <p className="mt-2">Die Nutzung erfolgt in drei Nutzungstypen:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Gast-Nutzer:</strong> ohne Registrierung; stark eingeschrankter
                Funktionsumfang. Ergebnisse der KI-Analyse werden unscharf angezeigt, bis sich der
                Nutzer registriert.
              </li>
              <li>
                <strong>Free-Nutzer:</strong> registrierter Nutzer ohne Abo; eingeschrankter
                Funktionsumfang gemass den in der App ausgewiesenen Limits.
              </li>
              <li>
                <strong>Premium-Nutzer:</strong> registrierter Nutzer mit aktivem Premium-Status
                (uber Abo oder Aktionscode); Zugriff auf den vollen Funktionsumfang im Rahmen der
                in der App ausgewiesenen Limits.
              </li>
            </ul>
            <p className="mt-2">
              Der Anbieter ist berechtigt, die App und deren Funktionen zu andern, anzupassen oder
              Teile davon einzustellen, wenn hierfur ein triftiger Grund vorliegt. Ein solcher
              triftiger Grund liegt insbesondere vor, wenn die Anderung erforderlich ist, um (i) die
              App an eine neue technische Umgebung, veranderte Nutzerzahlen oder andere wichtige
              betriebliche Grunde anzupassen, (ii) neue oder verbesserte Funktionen bereitzustellen,
              (iii) Sicherheitsrisiken zu beheben, oder (iv) veranderte gesetzliche Vorschriften
              oder die Rechtsprechung umzusetzen.
            </p>
            <p className="mt-2">
              Dem Nutzer entstehen durch solche Anderungen keine zusatzlichen Kosten. Der Anbieter
              wird den Nutzer uber Anderungen, die die Zugriffsmoglichkeit oder die Nutzbarkeit der
              App fur den Nutzer mehr als nur geringfugig beeintrachtigen, rechtzeitig vorab in
              Textform (z. B. per E-Mail oder durch eine klare Mitteilung innerhalb der App)
              informieren.
            </p>
            <p className="mt-2">
              Fur die KI-gestutzte Rassebestimmung wird keine Gewahr fur inhaltliche Richtigkeit
              ubernommen. Die Ergebnisse stellen lediglich eine wahrscheinlichkeitsbasierte
              Einschatzung dar.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">4. Registrierung und Nutzerkonto</h2>
            <p>
              Die Nutzung von Free- und Premium-Funktionen setzt die Registrierung eines
              Nutzerkontos voraus. Die Registrierung erfolgt wahlweise per E-Mail-Adresse und
              Passwort oder uber einen Google-Login. Bei der Registrierung ist zusatzlich ein
              eindeutiger Username zu vergeben.
            </p>
            <p className="mt-2">Der Nutzer ist verpflichtet:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>bei der Registrierung wahrheitsgemasse Angaben zu machen,</li>
              <li>die Zugangsdaten geheim zu halten und vor Zugriff Dritter zu schutzen,</li>
              <li>nur ein Nutzerkonto pro Person anzulegen,</li>
              <li>
                bei berechtigtem Verdacht auf Missbrauch seines Kontos den Anbieter unverzuglich zu
                informieren.
              </li>
            </ul>
            <p className="mt-2">
              Der Anbieter ist berechtigt, Nutzerkonten zu sperren oder zu loschen, wenn der Nutzer
              gegen diese Nutzungsbedingungen, geltendes Recht oder die Rechte Dritter verstosst
              oder begrundete Anhaltspunkte fur eine missbrauchliche Nutzung bestehen.
            </p>
            <p className="mt-2">
              Eine Account-Loschung durch den Nutzer ist jederzeit uber die in der App vorgesehene
              Funktion moglich. Hinweise zur Datenverarbeitung im Rahmen der Account-Loschung finden
              sich in der Datenschutzerklarung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">5. Premium-Abonnements</h2>
            <p>
              Premium-Funktionen konnen kostenpflichtig als Abonnement erworben werden. Es stehen
              folgende Plane zur Auswahl:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Premium Monat:</strong> 3,99 EUR pro Monat
              </li>
              <li>
                <strong>Premium Jahr:</strong> 39,99 EUR pro Jahr
              </li>
            </ul>
            <p className="mt-2">
              Alle Preise sind Endpreise und beinhalten die jeweils geltende gesetzliche
              Umsatzsteuer.
            </p>
            <p className="mt-2">
              Der Vertragsschluss, die Zahlungsabwicklung und die Rechnungsstellung erfolgen
              ausschliesslich uber den Google Play Store nach den dort geltenden Bedingungen von
              Google. Mit Abschluss des Abonnements im Google Play Store kommt der Vertrag zwischen
              dem Nutzer und dem Anbieter uber die Nutzung der Premium-Funktionen zustande.
            </p>
            <p className="mt-2">
              Das Abonnement verlangert sich automatisch um den jeweils gewahlten Zeitraum, sofern
              es nicht rechtzeitig vor Ablauf gekundigt wird. <strong>Die Kundigung, Verwaltung, Anderung der Zahlungsmethode sowie die Reaktivierung des Abonnements erfolgen ausschliesslich uber den Google Play Store</strong> (Bereich "Abos"). Der Anbieter bietet keine eigene Abo-Verwaltung innerhalb der App.
            </p>
            <p className="mt-2">
              Nach wirksamer Kundigung bleibt der Premium-Status bis zum Ende des bereits bezahlten
              Zeitraums bestehen. Danach erfolgt automatisch eine Ruckstufung in den Free-Status.
              Bereits in der Sammlung gespeicherte Inhalte bleiben dabei erhalten; auf die
              Premium-Funktionen besteht ab diesem Zeitpunkt jedoch kein Zugriff mehr.
            </p>
            <p className="mt-2">
              Soweit es sich um einen Vertrag uber digitale Dienste mit Verbrauchern handelt, gelten
              die gesetzlichen Bestimmungen zum Widerrufsrecht. Hinweise zum Widerruf werden dem
              Nutzer im Rahmen des Bestellprozesses gesondert zur Verfugung gestellt.
            </p>
          </div>

          <div>
            <h3 className="font-bold mt-2 mb-2 text-[#2d2d2d]">5.1 Premium uber Aktionscode</h3>
            <p>
              Der Anbieter kann zeitlich begrenzte Aktionscodes ausgeben, mit denen ein
              Premium-Zugang fur die Dauer von <strong>einem Monat</strong> ohne Zahlungspflicht
              freigeschaltet werden kann.
            </p>
            <p className="mt-2">Fur die Premium-Nutzung uber einen Aktionscode gilt:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Die Einlosung erfolgt in der App und ist nur einmalig je Nutzerkonto moglich,
                sofern in der jeweiligen Aktion nicht ausdrucklich etwas anderes geregelt ist.
              </li>
              <li>
                Der uber einen Aktionscode gewahrte Premium-Status verlangert sich{" "}
                <strong>nicht automatisch</strong> und fuhrt zu <strong>keiner Zahlungspflicht</strong>.
              </li>
              <li>
                Nach Ablauf des Aktionszeitraums erfolgt automatisch eine Ruckstufung in den
                Free-Status. Bereits gesammelte Inhalte bleiben erhalten.
              </li>
              <li>
                Aktionscodes sind nicht ubertragbar, nicht in bar auszahlbar und nicht mit anderen
                Aktionen kombinierbar, sofern nicht ausdrucklich anders ausgewiesen.
              </li>
              <li>
                Der Anbieter ist berechtigt, Aktionscodes bei begrundetem Verdacht auf
                missbrauchliche, mehrfache oder gewerbliche Einlosung zu entwerten und den daruber
                gewahrten Premium-Status aufzuheben.
              </li>
              <li>
                Ein Rechtsanspruch auf die Ausgabe oder Verlangerung eines Aktionscodes besteht
                nicht.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">6. Pflichten der Nutzer</h2>
            <p>
              Der Nutzer verpflichtet sich, die App ausschliesslich im Rahmen ihres
              bestimmungsgemassen Zwecks zu nutzen. Insbesondere:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Es durfen nur Fotos von Pferden zur KI-Analyse hochgeladen werden. Das Hochladen
                von Bildern, auf denen identifizierbare Personen erkennbar sind, ist nicht
                gestattet, sofern hierfur keine Einwilligung der abgebildeten Person vorliegt.
              </li>
              <li>
                Es durfen keine rechtswidrigen, beleidigenden, jugendgefahrdenden,
                gewaltverherrlichenden oder die Rechte Dritter (insbesondere Urheber- und
                Personlichkeitsrechte) verletzenden Inhalte hochgeladen oder geteilt werden.
              </li>
              <li>
                Die App und ihre Funktionen durfen nicht zu Zwecken eingesetzt werden, die die
                technische Stabilitat, Sicherheit oder Verfugbarkeit der App oder der
                zugrundeliegenden Dienste beeintrachtigen, insbesondere nicht durch automatisierte
                Skripte, Reverse Engineering oder die Umgehung von Schutzmassnahmen.
              </li>
              <li>
                Eine Umgehung der in den Nutzungstypen vorgesehenen Beschrankungen, insbesondere
                der Scan-Limits, ist untersagt.
              </li>
            </ul>
            <p className="mt-2">
              Bei Verstossen ist der Anbieter berechtigt, die in Ziffer 4 genannten Massnahmen zu
              ergreifen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">7. Haftung</h2>
            <p>
              Der Anbieter haftet unbeschrankt fur Vorsatz und grobe Fahrlassigkeit sowie nach den
              Bestimmungen des Produkthaftungsgesetzes. Fur leichte Fahrlassigkeit haftet der
              Anbieter nur bei der Verletzung wesentlicher Vertragspflichten (Kardinalpflichten); in
              diesem Fall ist die Haftung der Hohe nach auf den vertragstypischen, vorhersehbaren
              Schaden begrenzt.
            </p>
            <p className="mt-2">
              Die Haftung fur Schaden aus der Verletzung des Lebens, des Korpers oder der Gesundheit
              sowie zwingende gesetzliche Haftungstatbestande bleiben unberuhrt.
            </p>
            <p className="mt-2">
              Der Nutzer erkennt an, dass es sich bei den KI-Ergebnissen um rein KI-generierte
              Wahrscheinlichkeitsschatzungen handelt, die fehlerbehaftet sein konnen. Das Vorliegen
              einer Fehlbestimmung stellt als solches keinen Mangel des digitalen Produkts dar,
              sofern die KI im Ubrigen den branchenublichen Standards entspricht. Die Ergebnisse der
              KI sind unverbindliche Einschatzungen und ersetzen keine sachkundige Beurteilung.
            </p>
            <p className="mt-2">
              Der Anbieter bemuht sich um eine bestmogliche Verfugbarkeit der App. Eine
              ununterbrochene Erreichbarkeit und Fehlerfreiheit der App und der zugrundeliegenden
              Dienste kann jedoch technisch nicht garantiert werden. Der Anbieter schuldet eine
              Verfugbarkeit der App-Infrastruktur von 98 % im Jahresmittel.
            </p>
            <p className="mt-2">Von dieser Verfugbarkeitszusage ausgenommen sind:</p>
            <p className="mt-2">
              (a) notwendige, planmassige Wartungsarbeiten, die dem Nutzer nach Moglichkeit vorab
              (z. B. durch einen Hinweis in der App) angekundigt werden;
            </p>
            <p className="mt-2">
              (b) Zeiten der Nichtverfugbarkeit aufgrund von hoherer Gewalt oder anderen vom
              Anbieter nicht verschuldeten und unvorhersehbaren Ereignissen (z. B. grossflachige
              Internet- oder Serverausfalle ausserhalb des Machtbereichs des Anbieters).
            </p>
            <p className="mt-2">
              Soweit die Nutzbarkeit der App durch unvorhersehbare Storungen von fur den Betrieb
              notwendigen Drittanbietern (wie z. B. Google Play Store, Cloud-Infrastruktur- oder
              KI-Dienstleistern) beeintrachtigt wird, gilt dies nicht als Pflichtverletzung des
              Anbieters, es sei denn, den Anbieter trifft ein eigenes Auswahl- oder
              Uberwachungsverschulden hinsichtlich dieser Dienstleister.
            </p>
          </div>

          <div className="pb-12">
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">8. Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
              Zwingende verbraucherschutzende Vorschriften des Staates, in dem der Nutzer seinen
              gewohnlichen Aufenthalt hat, bleiben unberuhrt.
            </p>
            <p className="mt-2">
              Die Europaische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit, abrufbar unter{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#31e9e9] hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>. Der Anbieter ist nicht verpflichtet und nicht bereit, an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p className="mt-2">
              Der Anbieter behalt sich vor, diese Nutzungsbedingungen jederzeit mit Wirkung fur die
              Zukunft zu andern, sofern dies aus triftigen Grunden (z. B. bei Gesetzesanderungen,
              Anderungen der Rechtsprechung, Anpassungen des Geschaftsmodells oder zur Erweiterung
              der App-Funktionen) erforderlich ist. Uber Anderungen werden registrierte Nutzer
              mindestens sechs Wochen vor deren geplantem Wirksamwerden in Textform (z. B. per
              E-Mail oder durch einen deutlichen Hinweis innerhalb der App) informiert.
            </p>
            <p className="mt-2">
              Fur Nutzer ohne kostenpflichtiges Premium-Abonnement (Free- und Gast-Nutzer) gilt:
              Die geanderten Bedingungen gelten als angenommen, wenn der Nutzer ihnen nicht innerhalb
              von sechs Wochen nach Zugang der Anderungsmitteilung in Textform widerspricht. Der
              Anbieter wird den Nutzer in der Anderungsmitteilung gesondert auf diese Frist und die
              rechtliche Bedeutung seines Schweigens hinweisen. Widerspricht der Nutzer, ist der
              Anbieter berechtigt, das Nutzungsverhaltnis mit einer Frist von zwei Wochen zu
              kundigen und das Nutzerkonto zu loschen.
            </p>
            <p className="mt-2">
              Fur Nutzer mit einem aktiven, kostenpflichtigen Premium-Abonnement gilt: Anderungen
              der Nutzungsbedingungen bedurfen der ausdrucklichen Zustimmung des Nutzers (z. B. durch
              Bestatigung per Klick innerhalb der App oder per E-Mail). Liegt die Zustimmung des
              Nutzers bis zum geplanten Wirksamwerden der Anderungen nicht vor, wird der Vertrag zu
              den bisherigen Bedingungen fortgefuhrt. Der Anbieter behalt sich fur diesen Fall das
              Recht vor, das Premium-Abonnement ordentlich zum Ende des laufenden und bereits
              bezahlten Abrechnungszeitraums zu kundigen.
            </p>
            <p className="mt-2">
              Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam oder
              undurchfuhrbar sein oder werden, bleibt die Wirksamkeit der ubrigen Bestimmungen davon
              unberuhrt.
            </p>
            <p className="mt-4 text-sm italic">Letzte Aktualisierung: Mai 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PferdeSammlerNutzungsbedingungen;
