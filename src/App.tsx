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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-x-hidden">
      
      {/* 1. MOBILE HEADER (Oben am Handy) */}
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
        <button onClick={toggleMenu} className="p-2 text-[#2d2d2d] hover:bg-gray-50 rounded-lg">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* 2. SIDEBAR NAVIGATION */}
      {/* Dunkler Hintergrund wenn Menü offen (Mobile) */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar 
          closeMenu={() => setIsMobileMenuOpen(false)} 
          onNavigate={() => {
            setView('home');
            setIsMobileMenuOpen(false);
          }} 
        />
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 w-full min-w-0 transition-all duration-300">
        {view === 'home' ? (
          <div className="flex flex-col w-full">
            <section id="start"><Hero /></section>
            <section id="ueber-uns"><About /></section>
            <section id="angebot"><Offerings /></section>
            <section id="termin"><Booking /></section>
          </div>
        ) : (
          <div className="w-full min-h-screen flex flex-col">
            <div className="flex-1">
              {view === 'impressum' ? (
                <Legal />
              ) : (
                <div className="p-10 md:p-24 text-center text-gray-500">
                  <h2 className="text-2xl font-bold mb-4">AGB</h2>
                  <p>Hier folgen bald deine AGB Texte...</p>
                </div>
              )}
            </div>
            
            <div className="px-6 md:px-12 lg:px-24 pb-12">
              <button 
                onClick={() => setView('home')}
                className="text-[#31e9e9] font-bold hover:underline flex items-center gap-2"
              >
                ← Zurück zur Startseite
              </button>
            </div>
          </div>
        )}
        
        <Footer onNavigate={(target) => setView(target)} />
      </main>
    </div>
  );
};

export default App;