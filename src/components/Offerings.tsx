
import React from 'react';
import { FileText, Search, Briefcase, PlusCircle } from 'lucide-react';

const Offerings: React.FC = () => {
  const offers = [
    {
      icon: <FileText size={28} />,
      title: 'Anleitung zum Unternehmensverkauf PDF',
      price: '1.000€',
      description: 'Aufbereitung der Unternehmensdaten für einen strukturierten Prozess.'
    },
    {
      icon: <Search size={28} />,
      title: 'Listing & Akquise',
      price: '6.000€',
      description: 'Einholen der Informationen und professionelles Listing in allen relevanten Portalen.'
    },
    {
      icon: <Briefcase size={28} />,
      title: 'Verkaufsbegleitung',
      price: '12.000€',
      description: 'Begleitung bis zum Abschluss des Kaufvertrags (Due-Diligence erfolgt eigenverantwortlich).'
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-[#2d2d2d] flex items-center gap-4">
          <span className="h-[2px] w-12 bg-[#31e9e9]"></span> Unser Angebot
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, idx) => (
            <div key={idx} className="flex flex-col border border-gray-100 p-8 hover:shadow-xl hover:shadow-gray-100 transition-all bg-white relative">
              <div className="text-[#31e9e9] mb-6">{offer.icon}</div>
              <h3 className="text-xl font-bold mb-2 pr-12">{offer.title}</h3>
              <p className="text-[#31e9e9] font-bold text-2xl mb-4">{offer.price}</p>
              <p className="text-gray-500 leading-relaxed text-sm">{offer.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#2d2d2d] text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-[#31e9e9]/10 rounded-full text-[#31e9e9]">
              <PlusCircle size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold">Zusatzoption</h4>
              <p className="text-gray-400">Begleitung bei der Due-Diligence</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[#31e9e9] text-3xl font-bold">190€</span>
            <span className="text-gray-400 text-lg ml-2">/ Stunde</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
