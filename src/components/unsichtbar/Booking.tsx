import React from 'react';
import { Calendar, Clock, Info } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="termin" className="px-6 md:px-12 lg:px-24 py-24 bg-gray-50/50">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-[#2d2d2d] flex items-center gap-4">
          <span className="h-[2px] w-12 bg-[#31e9e9]"></span> Termin buchen
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Kostenloses Orientierungsgespräch</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              In einem unverbindlichen 15-minütigen Gespräch analysieren wir Ihre aktuelle Situation und zeigen Ihnen erste Lösungswege für Ihre Unternehmensnachfolge auf.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#2d2d2d]">
                <Clock size={20} className="text-[#31e9e9]" />
                <span className="font-medium">Dauer: 15 Minuten</span>
              </div>
              <div className="flex items-center gap-3 text-[#2d2d2d]">
                <Calendar size={20} className="text-[#31e9e9]" />
                <span className="font-medium">Flexibel buchbar</span>
              </div>
              <div className="flex items-center gap-3 text-[#2d2d2d]">
                <Info size={20} className="text-[#31e9e9]" />
                <span className="font-medium">Kostenlos & Unverbindlich</span>
              </div>
            </div>
          </div>

          {/* Hier ist nun dein echtes Calendly-Widget eingebunden */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden" style={{ minWidth: '320px', height: '700px' }}>
            <iframe
              src="https://calendly.com/haefele-ellen-modern-its/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Booking"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;