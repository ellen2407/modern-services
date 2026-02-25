import React from 'react';

const PferdeSammlerNutzungsbedingungen: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 bg-white min-h-screen">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-[#2d2d2d] tracking-tight">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-gray-500 mb-10 font-medium">App: PferdeSammler | Stand: 25. Februar 2026</p>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          {/* 1. Geltungsbereich */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
              1. Geltungsbereich und Anbieter
            </h2>
            <p className="mt-2">
              Diese AGB gelten für die Nutzung der mobilen Anwendung „Pferdesammler App“. Die App dient der KI-basierten Erkennung von Pferderassen anhand von Fotos.
            </p>
            <p className="mt-2">
              <strong>Anbieter (Vertragspartner):</strong> Modern IT Services UG (haftungsbeschränkt), Gewerbestr. 13, 82064 Straßlach-Dingharting, Deutschland.
            </p>
          </div>
          
          {/* 2. Leistungsbeschreibung */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2 font-semibold">2. Leistungsbeschreibung</h2>
            <p>Die Pferdesammler App bietet folgende Hauptfunktionen:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>KI-Scanner:</strong> Identifizierung von Pferderassen mittels künstlicher Intelligenz.</li>
              <li><strong>Sammlung:</strong> Speicherung und Verwaltung der erkannten Rassen in einer digitalen Kollektion.</li>
              <li><strong>Statistiken (Insights):</strong> Auswertungen zur eigenen Sammlung.</li>
            </ul>
            <p className="mt-2 text-sm italic">Es besteht kein Anspruch auf dauerhafte Verfügbarkeit oder bestimmte Funktionen.</p>
          </div>

          {/* 3. KI-Inhalte */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2 font-semibold text-[#2d2d2d]">3. Besondere Bedingungen für KI-Inhalte</h2>
            <p>Die Erkennung erfolgt über KI-Algorithmen:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2 font-medium text-gray-800">
              <li><strong>Unterhaltungscharakter:</strong> Ergebnisse dienen ausschließlich Informations- und Unterhaltungszwecken.</li>
              <li><strong>Keine Gewähr:</strong> Der Anbieter übernimmt keine Gewähr für die Richtigkeit der ermittelten Rassen.</li>
              <li><strong>Überprüfung:</strong> Ergebnisse sollten im Zweifel durch einen Fachmann (z.B. Tierarzt) überprüft werden.</li>
            </ul>
          </div>

          {/* 4. Registrierung */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">4. Registrierung und Vertragsschluss</h2>
            <p>Ein Nutzungsvertrag kommt durch Installation oder Nutzung der App zustande. Wer den AGB nicht zustimmt, darf die App nicht verwenden.</p>
          </div>

          {/* 5. Nutzungsrechte */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">5. Nutzungsrechte und Nutzerinhalte</h2>
            <p>
              Der Nutzer behält Rechte an seinen Fotos, räumt dem Anbieter jedoch ein einfaches Nutzungsrecht ein, um die App-Funktionen bereitzustellen und das KI-Modell zu verbessern. Der Nutzer versichert, die notwendigen Rechte an den Bildern zu besitzen.
            </p>
          </div>

          {/* 6. Verbote */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">6. Verbotene Nutzungen</h2>
            <p>Untersagt sind u.a. rechtswidrige Inhalte, kommerzielle Nutzung ohne Erlaubnis, Einsatz von Bots/Skripten sowie die Umgehung technischer Schutzmechanismen.</p>
          </div>

          {/* 7. Haftung */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">7. Haftung und Freistellung</h2>
            <p>
              Der Anbieter haftet für Vorsatz und grobe Fahrlässigkeit. <strong>Für Schäden aus fehlerhaften KI-Ergebnissen haftet der Anbieter nicht.</strong> Der Nutzer stellt den Anbieter von Ansprüchen Dritter bei Rechtsverletzungen (z.B. Urheberrecht bei Fotos) frei.
            </p>
          </div>

          {/* 8. Vertragsbeendigung */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">8. Vertragsbeendigung</h2>
            <p>Nutzer können den Vertrag jederzeit durch Deinstallation beenden. Der Anbieter kann bei Verstößen den Zugang sperren.</p>
          </div>

          {/* 9. Datenschutz */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">9. Datenschutz</h2>
            <p>Die Verarbeitung erfolgt gemäß unserer Datenschutzerklärung, über die Nutzer in der App oder auf der Webseite informiert werden.</p>
          </div>

          {/* 10. Änderungen */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">10. Änderungen der AGB</h2>
            <p>Der Anbieter behält sich Anpassungen vor. Über wesentliche Änderungen wird der Nutzer mindestens 30 Tage im Voraus informiert.</p>
          </div>

          {/* 11. Schlussbestimmungen */}
          <div className="pb-12 border-t border-gray-100 pt-6 mt-10">
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">11. Schlussbestimmungen</h2>
            <p>Es gilt deutsches Recht. Gerichtsstand ist München, sofern der Nutzer Kaufmann oder juristische Person des öffentlichen Rechts ist.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PferdeSammlerNutzungsbedingungen;