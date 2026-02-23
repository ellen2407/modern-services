
import React from 'react';
import { CheckCircle, Shield, Code, Cpu, User } from 'lucide-react';

const About: React.FC = () => {
  const certificates = [
    { icon: <CheckCircle className="text-[#31e9e9]" size={20} />, text: 'IHK-zertifizierte Berater für Unternehmensnachfolge' },
    { icon: <Shield className="text-[#31e9e9]" size={20} />, text: 'Projektmanagement klassisch, agil & hybrid' },
    { icon: <Cpu className="text-[#31e9e9]" size={20} />, text: 'Prozessanalyse & -automatisierung: UIPath certified RPA Developer' },
    { icon: <Code className="text-[#31e9e9]" size={20} />, text: 'ISTQB Certified Advanced Level Testmanager' },
  ];

  const teamMembers = [
    { name: 'Heinz Rabauer', role: 'Master of Science in BWL, Finanzexperte und Berater für Unternehmensnachfolge' },
    { name: 'Ellen Häfele', role: 'Bachelor of Arts Sozialwirtschaft, Berater für Unternehmensnachfolge' },
    { name: 'Maximilian Rabauer', role: 'B.Sc. Wirtschaftsinformatik, Projektmanager & Softwaretester' },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50/50">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-[#2d2d2d] flex items-center gap-4">
          <span className="h-[2px] w-12 bg-[#31e9e9]"></span> Über uns
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-[#2d2d2d]">
              Die Modern IT Services UG (haftungsbeschränkt) ist ein bayerisches Familienunternehmen mit Sitz in Straßlach-Dingharting. Seit unserer Gründung im Jahr 2022 haben wir es uns zur Herzensaufgabe gemacht, die über Jahrzehnte aufgebauten Lebenswerke von Unternehmern zu bewahren.
            </p>
            <p className="text-lg leading-relaxed text-[#2d2d2d]">
              Wir verstehen, dass eine Unternehmensnachfolge mehr ist als nur ein geschäftlicher Prozess – es ist die Übergabe eines Vermächtnisses. Besonders dort, wo die familiäre Nachfolge fehlt, schlagen wir mit Empathie und Fachkompetenz die Brücke zwischen den Generationen, um Ihr Unternehmen erfolgreich in die Zukunft zu führen.
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-100 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Zertifikate</h3>
            <ul className="space-y-5">
              {certificates.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-1">{cert.icon}</span>
                  <span className="text-[#2d2d2d] font-medium leading-snug">{cert.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-[#2d2d2d] flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#31e9e9]"></span> Unser Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="p-8 border border-gray-100 hover:border-[#52e3fe] transition-all bg-white flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#31e9e9]">
                  <User size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">{member.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
