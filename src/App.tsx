import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Offerings from './components/Offerings';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Legal from './components/Legal';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [view, setView] = useState<'home' | 'impressum' | 'agb'>('home');

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Scrollt bei Ansichtswechsel nach oben
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row w-full overflow-x-hidden">
      
      {/* 1. MOBILE HEADER - Fixiert auf volle Breite */}
      <header className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 w-full">
        <div className="flex items-center justify-between px-6 py-4 w-full">
          <button 
            onClick={() => {
              setView('home');
              setIsMobileMenuOpen(false);
            }} 
            className="font-bold text-xl tracking-tight text-[#2d2d2d] whitespace-nowrap"
          >
            Modern <span className="text-[#31e9e9]">Services</span>
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="p-2 text-[#2d2d2d] hover:bg-gray-50 rounded-lg flex-shrink-0"
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* 2. SIDEBAR NAVIGATION */}
      {/* Overlay für Mobile: Schließt Menü bei Klick daneben */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out border-r border-gray-100
        lg:translate-x-0 lg:static lg:inset-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar 
          closeMenu={() => setIsMobileMenuOpen(false)} 
          onNavigate={(target) => {
            if (target === 'home' || target === 'impressum' || target === 'agb') {
              setView(target);
            } else {
              setView('home');
            }
            setIsMobileMenuOpen(false);
          }} 
        />
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 w-full min-w-0 transition-all duration-300 flex flex-col">
        {view === 'home' ? (
          <div className="flex flex-col w-full">
            <section id="start"><Hero /></section>
            <section id="ueber-uns"><About /></section>
            <section id="angebot"><Offerings /></section>
            <section id="termin"><Booking /></section>
          </div>
        ) : (
          <div className="w-full min-h-screen flex flex-col bg-gray-50/30">
            <div className="flex-1">
              {view === 'impressum' ? (
                <Legal />
              ) : (
                <div className="p-10 md:p-24 text-center text-gray-500">
                  <h2 className="text-2xl font-bold mb-4 text-[#2d2d2d]">Allgemeine Geschäftsbedingungen</h2>
                  <p>Hier folgen in Kürze Ihre AGB Texte...</p>
                </div>
              )}
            </div>
            
            <div className="px-6 md:px-12 lg:px-24 pb-12">
              <button 
                onClick={() => setView('home')}
                className="text-[#31e9e9] font-bold hover:underline flex items-center gap-2 transition-all"
              >
                ← Zurück zur Startseite
              </button>
            </div>
          </div>
        )}
        
        {/* Footer */}
        <Footer onNavigate={(target): any => setView(target)} />
      </main>
    </div>
  );
};

export default App;
