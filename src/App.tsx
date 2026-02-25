import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Offerings from './components/Offerings';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Legal from './components/Legal';
import { Menu, X } from 'lucide-react';
import PferdeSammlerLegal from './components/pferdesammler/PferdeSammlerLegal';
import PferdeSammlerDatenschutz from './components/pferdesammler/PferdeSammlerDatenschutz';
import PferdeSammlerNutzungsbedingungen from './components/pferdesammler/PferdeSammlerNutzungsbedingungen';

// Hilfskomponente für die gesamte Logik
const AppContent: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Scrollt bei jedem Seitenwechsel nach oben
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavigation = (target: string) => {
    if (target === 'impressum' || target === 'legal') {
      navigate('/legal');
    } else if (target === 'agb') {
      navigate('/agb');
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row w-full overflow-x-hidden">
      
      {/* 1. MOBILE HEADER */}
      <header className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 w-full left-0 right-0">
        <div className="flex items-center justify-between px-6 py-4 w-full box-border">
          <div className="flex-1">
            <button 
              onClick={() => handleNavigation('home')} 
              className="font-bold text-xl tracking-tight text-[#2d2d2d] whitespace-nowrap"
            >
              Modern <span className="text-[#31e9e9]">Services</span>
            </button>
          </div>
          <button onClick={toggleMenu} className="p-2 text-[#2d2d2d] hover:bg-gray-50 rounded-lg flex-shrink-0">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* 2. SIDEBAR */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out border-r border-gray-100 lg:translate-x-0 lg:static lg:inset-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar closeMenu={() => setIsMobileMenuOpen(false)} onNavigate={() => handleNavigation('home')} />
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 w-full min-w-0 transition-all duration-300 flex flex-col">
        <Routes>
          {/* STARTSEITE */}
          <Route path="/" element={
            <div className="flex flex-col w-full">
              <section id="start"><Hero /></section>
              <section id="ueber-uns"><About /></section>
              <section id="angebot"><Offerings /></section>
              <section id="termin"><Booking /></section>
            </div>
          } />

          {/* STANDARTE SEITEN */}
          <Route path="/legal" element={
            <div className="w-full min-h-screen flex flex-col bg-white">
              <div className="flex-1"><Legal /></div>
              <div className="px-6 md:px-12 lg:px-24 pb-12">
                <button onClick={() => navigate('/')} className="text-[#31e9e9] font-bold hover:underline flex items-center gap-2">
                  ← Zurück zur Startseite
                </button>
              </div>
            </div>
          } />

          <Route path="/agb" element={
            <div className="w-full min-h-screen flex flex-col bg-white">
              <div className="p-10 md:p-24 text-center text-gray-500 flex-1">
                <h2 className="text-2xl font-bold mb-4 text-[#2d2d2d]">Allgemeine Geschäftsbedingungen</h2>
                <p>Hier folgen in Kürze Ihre AGB Texte...</p>
              </div>
              <div className="px-6 md:px-12 lg:px-24 pb-12">
                <button onClick={() => navigate('/')} className="text-[#31e9e9] font-bold hover:underline flex items-center gap-2">
                  ← Zurück zur Startseite
                </button>
              </div>
            </div>
          } />

          {/* PFERDESAMMLER APP SPEZIFISCH */}
          <Route path="/pferdesammler-legal" element={
            <div className="w-full min-h-screen flex flex-col bg-white">
              <div className="flex-1"><PferdeSammlerLegal /></div>
              <div className="px-6 md:px-12 lg:px-24 pb-12">
                <button onClick={() => navigate('/')} className="text-[#31e9e9] font-bold hover:underline flex items-center gap-2">
                  ← Zurück zur Startseite
                </button>
              </div>
            </div>
          } />

          <Route path="/pferdesammler-datenschutz" element={
            <div className="w-full min-h-screen flex flex-col bg-white">
              <div className="flex-1"><PferdeSammlerDatenschutz /></div>
              <div className="px-6 md:px-12 lg:px-24 pb-12">
                <button onClick={() => navigate('/')} className="text-[#31e9e9] font-bold hover:underline flex items-center gap-2">
                  ← Zurück zur Startseite
                </button>
              </div>
            </div>
          } />

          <Route path="/pferdesammler-agb" element={
            <div className="w-full min-h-screen flex flex-col bg-white">
              <div className="flex-1"><PferdeSammlerNutzungsbedingungen /></div>
              <div className="px-6 md:px-12 lg:px-24 pb-12">
                <button onClick={() => navigate('/')} className="text-[#31e9e9] font-bold hover:underline flex items-center gap-2">
                  ← Zurück zur Startseite
                </button>
              </div>
            </div>
          } />
        </Routes>
        
        <Footer onNavigate={handleNavigation} />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;