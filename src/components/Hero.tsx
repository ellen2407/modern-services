
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleCta = () => {
    const element = document.getElementById('termin');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#52e3fe]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#2d2d2d] leading-tight mb-8">
          Ihr Lebenswerk in erfahrenen Händen.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed mb-12">
          Professionelle Begleitung bei der Unternehmensnachfolge - für Käufer und Verkäufer. Wir bewahren Werte und schaffen nachhaltige Übergänge.
        </p>
        <button
          onClick={handleCta}
          className="bg-gradient-to-r from-[#52e3fe] to-[#31e9e9] text-[#2d2d2d] font-semibold py-4 px-8 rounded-none flex items-center gap-3 hover:shadow-lg hover:shadow-[#52e3fe]/20 transition-all active:scale-95 whitespace-nowrap"
          style={{ padding: '16px 32px' }}
        >
          Jetzt kostenloses Orientierungsgespräch vereinbaren
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
