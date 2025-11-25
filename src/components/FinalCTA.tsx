import { Smartphone, Store, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FinalCTAProps {
  onNavigate?: (page: string) => void;
}

export function FinalCTA({ onNavigate }: FinalCTAProps) {
  const handleDownloadApp = () => {
    if (onNavigate) {
      onNavigate('descargar');
    } else {
      alert('¡Pronto disponible en App Store y Google Play! 📱');
    }
  };

  const handleRegisterBusiness = () => {
    if (onNavigate) {
      onNavigate('registrar-negocio');
    } else {
      alert('¡Gracias por tu interés! Un miembro de nuestro equipo te contactará pronto. 🎉');
    }
  };

  return (
    <section id="descargar" className="py-20" style={{ backgroundColor: '#DFF5E5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif', lineHeight: '1.2' }}>
              Únete al movimiento de comida sin desperdicio
            </h2>
            <p className="text-lg mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Descarga la app y comienza a rescatar comida deliciosa hoy mismo. 
              O registra tu negocio y convierte tus excedentes en oportunidades.
            </p>

            <div className="space-y-4">
              {/* Download App Button */}
              <button 
                onClick={handleDownloadApp}
                className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg" 
                style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <Smartphone size={20} />
                <span>Descargar App</span>
                <ArrowRight size={20} />
              </button>

              {/* Register Business Button */}
              <button 
                id="registrar-negocio"
                onClick={handleRegisterBusiness}
                className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full hover:opacity-90 transition-opacity" 
                style={{ backgroundColor: 'white', color: '#333333', border: '2px solid #3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <Store size={20} />
                <span>Registrar mi negocio</span>
                <ArrowRight size={20} />
              </button>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div>
                  <p className="text-xs">Descarga en</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </div>

              <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div>
                  <p className="text-xs">Consíguelo en</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609405985534-c7455cde5d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBwaG9uZSUyMG1vY2t1cHxlbnwxfHx8fDE3NjM5Mzk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="FoodSaver App"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3BB273' }}>
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Ahorra hasta
                    </p>
                    <p className="text-lg font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      60%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}