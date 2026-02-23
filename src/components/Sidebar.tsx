import React from 'react';

interface SidebarProps {
  closeMenu: () => void;
  onNavigate: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeMenu, onNavigate }) => {
  const navItems = [
    { id: 'start', label: 'Start' },
    { id: 'ueber-uns', label: 'Über uns' },
    { id: 'angebot', label: 'Unser Angebot' },
    { id: 'termin', label: 'Termin buchen' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(); 
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    closeMenu();
  };

  return (
    <div className="h-full w-[250px] bg-white border-r border-gray-100 flex flex-col p-8 fixed">
      {/* Logo Sektion */}
      <div className="mb-16 hidden lg:block">
        <button 
          onClick={() => {
            onNavigate();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left hover:opacity-80 transition-opacity"
        >
          <h1 className="font-bold text-2xl tracking-tighter text-[#2d2d2d]">
            Modern <span className="text-[#31e9e9]">Services</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Unternehmensnachfolge</p>
        </button>
      </div>

      <nav className="flex-1 space-y-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="block w-full text-left py-2 px-0 text-gray-500 hover:text-[#31e9e9] transition-colors font-medium border-b border-transparent hover:border-[#52e3fe] transition-all"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="pt-8 border-t border-gray-50 text-[10px] text-gray-400">
        <p>© 2026 Modern IT Services UG (haftungsbeschränkt)</p>
        <p>Straßlach-Dingharting</p>
      </div>
    </div>
  );
};

export default Sidebar;