import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/cf18d622b7071f09b5f30162053d11a2eae18730.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => handleNavigation('inicio')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src={logo} 
              alt="FoodSaver Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold leading-none" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>FoodSaver</span>
              <span className="text-xs mt-0.5" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>ahorra, disfruta y cuida el planeta</span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavigation('inicio')} 
              className="hover:opacity-70 transition-opacity" 
              style={{ 
                color: currentPage === 'inicio' ? '#3BB273' : '#777777', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: currentPage === 'inicio' ? 600 : 400
              }}
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavigation('para-negocios')} 
              className="hover:opacity-70 transition-opacity" 
              style={{ 
                color: currentPage === 'para-negocios' ? '#3BB273' : '#777777', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: currentPage === 'para-negocios' ? 600 : 400
              }}
            >
              Para Negocios
            </button>
            <button 
              onClick={() => handleNavigation('impacto')} 
              className="hover:opacity-70 transition-opacity" 
              style={{ 
                color: currentPage === 'impacto' ? '#3BB273' : '#777777', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: currentPage === 'impacto' ? 600 : 400
              }}
            >
              Impacto
            </button>
            <button 
              onClick={() => handleNavigation('login')} 
              className="hover:opacity-70 transition-opacity" 
              style={{ 
                color: currentPage === 'login' ? '#3BB273' : '#777777', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: currentPage === 'login' ? 600 : 400
              }}
            >
              Iniciar sesión
            </button>
            <button 
              onClick={() => handleNavigation('descargar')}
              className="px-6 py-2 rounded-full hover:opacity-90 transition-opacity" 
              style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Descargar App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} color="#333333" /> : <Menu size={24} color="#333333" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => handleNavigation('inicio')} 
              className="block w-full text-left py-2 hover:opacity-70" 
              style={{ 
                color: currentPage === 'inicio' ? '#3BB273' : '#777777', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: currentPage === 'inicio' ? 600 : 400
              }}
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavigation('para-negocios')} 
              className="block w-full text-left py-2 hover:opacity-70" 
              style={{ 
                color: currentPage === 'para-negocios' ? '#3BB273' : '#777777', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: currentPage === 'para-negocios' ? 600 : 400
              }}
            >
              Para Negocios
            </button>
            <button 
              onClick={() => handleNavigation('impacto')} 
              className="block w-full text-left py-2 hover:opacity-70" 
              style={{ 
                color: currentPage === 'impacto' ? '#3BB273' : '#777777', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: currentPage === 'impacto' ? 600 : 400
              }}
            >
              Impacto
            </button>
            <button 
              onClick={() => handleNavigation('login')} 
              className="block w-full text-left py-2 hover:opacity-70" 
              style={{ 
                color: currentPage === 'login' ? '#3BB273' : '#777777', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: currentPage === 'login' ? 600 : 400
              }}
            >
              Iniciar sesión
            </button>
            <button 
              onClick={() => handleNavigation('descargar')}
              className="w-full px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-center" 
              style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Descargar App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}