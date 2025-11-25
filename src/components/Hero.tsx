import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadApp = () => {
    if (onNavigate) {
      onNavigate('descargar');
    } else {
      scrollToSection('descargar');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1650539688286-ae822d422d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHJlc3RhdXJhbnQlMjBmb29kJTIwcGxhdGV8ZW58MXx8fHwxNzY0MDQ5NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Delicious food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.2' }}>
            Comida deliciosa a precios reducidos sin desperdicio
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
            Conecta con restaurantes que ofrecen alimentos del día que no se vendieron, cuidando tu bolsillo y el planeta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleDownloadApp}
              className="px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg" 
              style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Descargar App
            </button>
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="px-8 py-4 rounded-full hover:opacity-90 transition-opacity" 
              style={{ backgroundColor: 'white', color: '#333333', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Conoce cómo funciona
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('que-es')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} color="white" />
      </button>
    </section>
  );
}