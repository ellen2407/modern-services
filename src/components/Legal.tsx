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
              Angaben gemäß § 5 TMG
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
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-2">Vertreten durch</h2>
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
              Modern Services<br />
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
                <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">1. Datenschutz auf einen Blick</h2>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">2. Hosting</h2>
                <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                <h3 className="font-bold mt-4">Hostinger</h3>
                <p>Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern. Details entnehmen Sie der Datenschutzerklärung von Hostinger: https://www.hostinger.de/datenschutz.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">3. Verantwortliche Stelle</h2>
                <p className="mt-2">
                  Modern IT Services UG (haftungsbeschränkt)<br />
                  Gewerbestr. 13<br />
                  82064 Straßlach-Dingharting<br />
                  E-Mail: admin@modern-its.de
                </p>
                <h3 className="font-bold mt-6 text-[#2d2d2d]">Datenschutzbeauftragter</h3>
                <p className="mt-2">
                  Maximilian Rabauer<br />
                  E-Mail: admin@modern-its.de
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#2d2d2d] mb-3 border-b border-[#31e9e9] inline-block">4. Datenerfassung & Rechte</h2>
                <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
              </div>
            </div>
          </div>
          {/* --- ENDE DATENSCHUTZ --- */}
      </div>
    </section>
  );
};


export default Legal;