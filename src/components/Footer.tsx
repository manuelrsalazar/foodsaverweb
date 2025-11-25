import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from 'figma:asset/cf18d622b7071f09b5f30162053d11a2eae18730.png';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
    }
  };

  const handleNavigateAndScroll = (page: string, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
      // Esperar a que la navegación se complete antes de hacer scroll a la sección
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="FoodSaver Logo" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold leading-none" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>FoodSaver</span>
                <span className="text-xs mt-0.5" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>ahorra, disfruta y cuida el planeta</span>
              </div>
            </div>
            <p className="text-sm mb-4" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Conectando personas con comida de calidad, reduciendo el desperdicio y cuidando el planeta.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#DFF5E5' }}
                aria-label="Facebook"
              >
                <Facebook size={18} style={{ color: '#3BB273' }} />
              </a>
              <a 
                href="https://www.instagram.com/food_saver_oficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#DFF5E5' }}
                aria-label="Instagram"
              >
                <Instagram size={18} style={{ color: '#3BB273' }} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#DFF5E5' }}
                aria-label="Twitter"
              >
                <Twitter size={18} style={{ color: '#3BB273' }} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#DFF5E5' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} style={{ color: '#3BB273' }} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Empresa
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigateAndScroll('inicio', 'que-es')} className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Qué es FoodSaver
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigateAndScroll('inicio', 'como-funciona')} className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Cómo funciona
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('impacto')} className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Nuestro impacto
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('blog')} className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Soporte
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigation('centro-ayuda')} className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Centro de ayuda
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('faq')} className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Preguntas frecuentes
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('contacto')} className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Contacto
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('para-negocios')} className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Para negocios
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} style={{ color: '#3BB273' }} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:contacto@foodsaver.com" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  contacto@foodsaver.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} style={{ color: '#3BB273' }} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+51944123456" className="text-sm hover:opacity-70 transition-opacity" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  +51 944 123 456
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} style={{ color: '#3BB273' }} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Trujillo, Perú
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            © 2025 FoodSaver. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <button 
              onClick={() => handleNavigation('terminos')} 
              className="text-sm hover:opacity-70 transition-opacity" 
              style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}
            >
              Términos y condiciones
            </button>
            <button 
              onClick={() => handleNavigation('privacidad')} 
              className="text-sm hover:opacity-70 transition-opacity" 
              style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}
            >
              Política de privacidad
            </button>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full hover:opacity-90 transition-opacity" 
            style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Volver arriba ↑
          </button>
        </div>
      </div>
    </footer>
  );
}