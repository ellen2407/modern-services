import React from 'react';

const PferdeSammlerDatenschutz: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 bg-white min-h-screen">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-10 text-[#2d2d2d] tracking-tight">Datenschutzerklärung</h1>
        <p className="mb-8 text-gray-600 font-medium">App: PferdeSammler</p>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          {/* 1. Datenschutz auf einen Blick */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">
              1. Datenschutz auf einen Blick
            </h2>
            <p className="mt-2">
              Die Betreiber dieser App nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>
          
          {/* 2. Verantwortliche Stelle */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">2. Verantwortliche Stelle & Datenschutzbeauftragter</h2>
            <p>
              Modern IT Services UG (haftungsbeschränkt)<br />
              Gewerbestr. 13<br />
              82064 Straßlach-Dingharting
            </p>
            <p className="mt-2">
              <strong>Datenschutzbeauftragter:</strong> Maximilian Rabauer<br />
              <strong>E-Mail:</strong> admin@modern-its.de
            </p>
          </div>

          {/* 3. Datenerfassung */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">3. Datenerfassung in der App</h2>
            <p>Im Gegensatz zur Webseite verarbeitet eine mobile App Daten teilweise auf andere Weise:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Hosting:</strong> Die App kommuniziert mit Servern der Hostinger International Ltd. zur Datensynchronisation.</li>
              <li><strong>Berechtigungen:</strong> Zur Nutzung der Funktionen benötigt die App Zugriff auf Kamera/Galerie (für Pferdefotos), Speicher und Internet.</li>
              <li><strong>Log-Dateien:</strong> Technisch notwendige Daten (Gerätetyp, OS-Version) werden anonymisiert zur Stabilitätsverbesserung übertragen.</li>
            </ul>
          </div>

          {/* 4. Google Play Services */}
          <div>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">4. Google Play Services</h2>
            <p>
              Die App nutzt Dienste der Google Ireland Limited. Die Datenschutzerklärung von Google finden Sie unter:{' '}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#31e9e9] hover:underline"
              >
                https://policies.google.com/privacy
              </a>.
            </p>
          </div>

          {/* 5. Zweck & Rechte */}
          <div className="pb-12">
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">5. Zweck der Verarbeitung & Ihre Rechte</h2>
            <p>
              Ihre Daten dienen ausschließlich der Bereitstellung der App-Funktionen. Sie haben jederzeit das Recht auf unentgeltliche Auskunft sowie auf Berichtigung oder Löschung Ihrer gespeicherten Daten. Kontaktieren Sie uns hierzu bitte unter der oben genannten E-Mail-Adresse.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PferdeSammlerDatenschutz;