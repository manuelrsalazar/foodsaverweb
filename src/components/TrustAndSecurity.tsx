import { Shield, Eye, FileCheck, RefreshCw } from 'lucide-react';

export function TrustAndSecurity() {
  const features = [
    {
      icon: Eye,
      title: 'Transparencia del origen',
      description: 'Conoce exactamente de dónde viene tu comida y cuándo fue preparada.',
    },
    {
      icon: FileCheck,
      title: 'Reseñas verificadas',
      description: 'Opiniones reales con fotos de usuarios que compraron en el local.',
    },
    {
      icon: Shield,
      title: 'Revisiones sanitarias',
      description: 'Todos los negocios muestran su última inspección de salubridad.',
    },
    {
      icon: RefreshCw,
      title: 'Política de devolución',
      description: 'Tu dinero de vuelta si la comida no cumple con nuestros estándares.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: '#DFF5E5' }}>
            <Shield size={40} style={{ color: '#3BB273' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Confianza y Seguridad
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Tu tranquilidad es nuestra prioridad. Trabajamos con estándares estrictos de calidad e higiene.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl border-2 hover:shadow-lg transition-shadow"
                style={{ borderColor: '#DFF5E5' }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DFF5E5' }}>
                  <Icon size={28} style={{ color: '#3BB273' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#F7F3E9' }}>
          <div className="grid md:grid-cols-3 gap-8 items-center text-center">
            <div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#3BB273' }}>
                <span className="text-2xl text-white font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  ✓
                </span>
              </div>
              <p className="font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                100% Seguro
              </p>
              <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Pagos protegidos
              </p>
            </div>

            <div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#3BB273' }}>
                <span className="text-2xl text-white font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  ✓
                </span>
              </div>
              <p className="font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Negocios verificados
              </p>
              <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Todos revisados
              </p>
            </div>

            <div>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#3BB273' }}>
                <span className="text-2xl text-white font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  ✓
                </span>
              </div>
              <p className="font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Garantía de calidad
              </p>
              <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                O te devolvemos tu dinero
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
