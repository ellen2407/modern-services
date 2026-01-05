import React from 'react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'impressum' | 'agb') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="text-gray-500 text-sm">
          © 2024 Modern Services GmbH. Alle Rechte vorbehalten.
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <button 
            onClick={() => onNavigate?.('impressum')}
            className="text-gray-400 hover:text-[#31e9e9] text-sm transition-colors font-medium"
          >
            Impressum & Datenschutz
          </button>
          <button 
            onClick={() => onNavigate?.('agb')}
            className="text-gray-400 hover:text-[#31e9e9] text-sm transition-colors font-medium"
          >
            AGB
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;