import React from 'react';

const Legal: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 bg-white min-h-screen">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-10 text-[#2d2d2d] tracking-tight">Impressum</h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          {/* Firmenangaben */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-2">
              Modern IT Services UG (haftungsbeschränkt)<br />
              Gewerbestr. 13<br />
              82064 Straßlach-Dingharting
            </p>
            <p className="mt-2">
              <strong>Handelsregister:</strong> HRB 298879<br />
              <strong>Registergericht:</strong> Amtsgericht München
            </p>
          </div>
          
          {/* Vertretung */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">Vertreten durch die Geschäftsführer</h2>
            <p>Maximilian Rabauer, Heinz Rabauer</p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">Kontakt</h2>
            <p>
              Telefon: 0172 3153329<br />
              E-Mail: admin@modern-its.de
            </p>
          </div>

          {/* Umsatzsteuer */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <strong>DE350658306</strong>
            </p>
          </div>

          {/* Redaktion */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">Redaktionell verantwortlich</h2>
            <p>
              Modern IT Services UG (haftungsbeschränkt)<br />
              Vertreten durch die Geschäftsführer:<br />
              Maximilian Rabauer, Heinz Rabauer<br />
              Gewerbestr. 13<br />
              82064 Straßlach-Dingharting<br />
              Deutschland
            </p>
          </div>

          {/* EU-Streitschlichtung */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: {' '}
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#31e9e9] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>.
            </p>
            <p className="mt-2 text-sm italic">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
          </div>

          {/* Verbraucherstreitbeilegung */}
          <div className="pb-12">
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2 text-balance">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
        {/* --- START DATENSCHUTZ --- */}
        <div className="pt-16 mt-16 border-t-2 border-gray-100">
          <h1 className="text-4xl font-bold mb-10 text-[#2d2d2d] tracking-tight">Datenschutzerklärung</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-bold mt-2 mb-2 text-[#2d2d2d]">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz
                entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Datenerfassung auf dieser Website</h3>
              <h4 className="font-bold mt-3 mb-1 text-[#2d2d2d]">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h4>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung
                entnehmen.
              </p>
              <h4 className="font-bold mt-3 mb-1 text-[#2d2d2d]">Wie erfassen wir Ihre Daten?</h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B.
                um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach
                Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
                technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
              <h4 className="font-bold mt-3 mb-1 text-[#2d2d2d]">Wofür nutzen wir Ihre Daten?</h4>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <h4 className="font-bold mt-3 mb-1 text-[#2d2d2d]">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem das Recht, die Berichtigung
                oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
                haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das
                Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
              <h4 className="font-bold mt-3 mb-1 text-[#2d2d2d]">Analyse-Tools und Tools von Drittanbietern</h4>
              <p>
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor
                allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden
                Sie in der folgenden Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
                2. Hosting
              </h2>
              <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
              <p className="mt-3">
                <strong>HOSTINGER operations, UAB</strong>
                <br />
                Švitrigailos str. 34,
                <br />
                Vilnius 03230 Litauen
              </p>
              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Externes Hosting</h3>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
                werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
                IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p className="mt-2">
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
                effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1
                lit. f DSGVO).
              </p>
              <p className="mt-2">
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
                Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
                Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p className="mt-2">
                Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
                Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <h3 className="font-bold mt-2 mb-2 text-[#2d2d2d]">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>
              <p className="mt-2">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
                Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch,
                wie und zu welchem Zweck das geschieht.
              </p>
              <p className="mt-2">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                nicht möglich.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                <br />
                <br />
                Modern IT Services UG (haftungsbeschränkt)
                <br />
                Gewerbestr. 13
                <br />
                82064 Straßlach-Dingharting
                <br />
                Deutschland
                <br />
                <br />
                Telefon: 0172 3153329
                <br />
                E-Mail: admin@modern-its.de
              </p>
              <p className="mt-2">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen,
                E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">
                Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
              </h3>
              <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten
                auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
                Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
                in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf
                Grundlage von Art. 49 Abs. 1 lit. a DSGVO.
              </p>
              <p className="mt-2">
                Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät
                (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf
                Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern
                diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1
                lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach
                Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen
                wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">
                Hinweis zur Datenweitergabe in datenschutzrechtlich nicht sichere Drittstaaten sowie die Weitergabe
                an US-Unternehmen, die nicht DPF-zertifiziert sind
              </h3>
              <p>
                Wir verwenden unter anderem Tools von Unternehmen mit Sitz in datenschutzrechtlich nicht sicheren
                Drittstaaten sowie US-Tools, deren Anbieter nicht nach dem EU-US-Data Privacy Framework (DPF)
                zertifiziert sind. Wenn diese Tools aktiv sind, können Ihre personenbezogenen Daten in diese Staaten
                übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in datenschutzrechtlich unsicheren
                Drittstaaten kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann.
              </p>
              <p className="mt-2">
                Wir weisen darauf hin, dass die USA als sicherer Drittstaat grundsätzlich ein mit der EU vergleichbares
                Datenschutzniveau aufweisen. Eine Datenübertragung in die USA ist danach zulässig, wenn der Empfänger
                eine Zertifizierung unter dem „EU-US Data Privacy Framework“ (DPF) besitzt oder über geeignete
                zusätzliche Garantien verfügt. Informationen zu Übermittlungen an Drittstaaten einschließlich der
                Datenempfänger finden Sie in dieser Datenschutzerklärung.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Empfänger von personenbezogenen Daten</h3>
              <p>
                Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
                ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
                Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
                Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von
                Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der
                Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt.
              </p>
              <p className="mt-2">
                Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage
                eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird
                ein Vertrag über gemeinsame Verarbeitung geschlossen.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
                erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
              </h3>
              <p>
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie
                jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die
                Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese
                Bestimmungen gestütztes Profiling.
              </p>
              <p className="mt-2">
                Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht,
                jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
                derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung
                in Verbindung steht.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Auskunft, Berichtigung und Löschung</h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
                der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Recht auf Einschränkung der Verarbeitung</h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
                folgenden Fällen:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen
                  wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt
                  der Löschung die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                  oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die
                  Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
                  Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
                  überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                  verlangen.
                </li>
              </ul>
              <p className="mt-2">
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
                ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen
                Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines
                Mitgliedstaats verarbeitet werden.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                TLS-Verschlüsselung.
              </p>
              <p className="mt-2">
                Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf
                „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw.
                TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten
                mitgelesen werden.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
                4. Datenerfassung auf dieser Website
              </h2>
              <h3 className="font-bold mt-2 mb-2 text-[#2d2d2d]">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
                der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
                widerrufbar.
              </p>
              <p className="mt-2">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
                entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
                insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Einsatz von EmailJS</h3>
              <p>
                Für den zuverlässigen Versand von Kontaktanfragen nutzen wir den Dienst EmailJS (EmailJS.com). Hierbei
                werden die von Ihnen im Formular eingegebenen Daten an EmailJS übertragen, damit diese die Anfrage als
                E-Mail an uns weiterleiten können. Dies erfolgt auf Grundlage unseres berechtigten Interesses an einer
                effizienten Kundenkommunikation (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h3 className="font-bold mt-5 mb-2 text-[#2d2d2d]">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
                uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
                der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
                widerrufbar.
              </p>
              <p className="mt-2">
                Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung
                entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
                insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </div>
          </div>
        </div>
          {/* --- ENDE DATENSCHUTZ --- */}
      </div>
    </section>
  );
};


export default Legal;