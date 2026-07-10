
import React from 'react';
import { FileText, Search, Briefcase, Shield } from 'lucide-react';

const Offerings: React.FC = () => {
  const offers = [
    {
      icon: <Search size={28} />,
      title: 'Analyse der Übergabefähigkeit',
      description: 'Strategische Prüfung des Unternehmens auf Inhaberunabhängigkeit und die gezielte Vorbereitung auf eine erfolgreiche, wertstabile Platzierung am Markt.'
    },
    {
      icon: <FileText size={28} />,
      title: 'Vorbereitung & Begleitung der Unternehmensprüfung',
      description: 'Professionelle Aufbereitung aller betrieblichen Kennzahlen und Dokumente. Wir strukturieren Ihren digitalen Datenraum und begleiten Sie sicher durch die Prüfungsphase potenzieller Käufer.'
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Sicherung des Lebenswerks & Inhaberwechsel',
      description: 'Ganzheitliche Begleitung beim Generationen- und Führungswechsel. Wir moderieren den Übergang zwischen Übergeber und Nachfolger, um Ihr Familienvermächtnis zu bewahren und den Betrieb ohne Reibungsverluste fortzuführen.'
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-[#2d2d2d] flex items-center gap-4">
          <span className="h-[2px] w-12 bg-[#31e9e9]"></span> Unser Angebot
        </h2>

        <p className="text-lg leading-relaxed text-[#2d2d2d] mb-12">
          Eine erfolgreiche Unternehmensnachfolge ist so individuell wie das Lebenswerk selbst. Wir begleiten Sie und Ihre Mandanten strukturiert, fundiert und mit dem nötigen Fingerspitzengefühl – auch als koordinierende Schnittstelle zu Ihren rechtlichen und steuerlichen Beratern.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, idx) => (
            <div key={idx} className="flex flex-col border border-gray-100 p-8 hover:shadow-xl hover:shadow-gray-100 transition-all bg-white relative">
              <div className="text-[#31e9e9] mb-6">{offer.icon}</div>
              <h3 className="text-xl font-bold mb-2 pr-12">{offer.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{offer.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#2d2d2d] text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-[#31e9e9]/10 rounded-full text-[#31e9e9]">
              <Shield size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold">Erstellung von Notfallkonzepten</h4>
              <p className="text-gray-400">Absicherung des Unternehmens für unvorhergesehene Ereignisse (Notfallhandbuch, Vertretungsregelungen, operative Absicherung).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
