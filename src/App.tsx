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
  // Hier wurde 'agb' zum State hinzugefügt
  const [view, setView] = useState<'home' | 'impressum' | 'agb'>('home');

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-x-hidden">
      {/* Mobile Top Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 flex items-center justify-between px-6 py-4 w-full">
        <button 
          onClick={() => {
            setView('home');
            setIsMobileMenuOpen(false);
          }} 
          className="font-bold text-xl tracking-tight text-[#2d2d2d]"
        >
          Modern <span className="text-[#31e9e9]">Services</span>
        </button>
        <button onClick={toggleMenu} className="p-2 text-[#2d2d2d]">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <div className={`
        fixed inset-0 z-40 lg:z-auto lg:relative lg:block transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar 
          closeMenu={() => setIsMobileMenuOpen(false)} 
          onNavigate={() => {
            setView('home');
            setIsMobileMenuOpen(false);
          }} 
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full lg:ml-[250px] transition-all duration-300">
        {view === 'home' ? (
          <>
            <section id="start"><Hero /></section>
            <section id="ueber-uns"><About /></section>
            <section id="angebot"><Offerings /></section>
            <section id="termin"><Booking /></section>
          </>
        ) : (
          <div className="w-full min-h-screen">
            {/* Hier wird je nach Ansicht der Inhalt getauscht */}
            {view === 'impressum' ? <Legal /> : <div className="p-24 text-center">Hier folgen bald deine AGB Texte...</div>}
            
            <div className="px-6 md:px-12 lg:px-24 pb-20">
              <button 
                onClick={() => setView('home')}
                className="text-[#31e9e9] font-bold hover:underline flex items-center gap-2"
              >
                ← Zurück zur Startseite
              </button>
            </div>
          </div>
        )}
        
        {/* Footer ohne umschließendes div, damit die Buttons einzeln klicken können */}
        <Footer onNavigate={(target) => setView(target)} />
      </main>
    </div>
  );
};

export default App;