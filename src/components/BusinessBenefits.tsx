import { TrendingUp, DollarSign, Megaphone, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BusinessBenefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Reducen desperdicio',
      description: 'Convierte excedentes en oportunidades, evitando pérdidas.',
    },
    {
      icon: DollarSign,
      title: 'Ingresos extra',
      description: 'Genera ventas adicionales con comida que de otro modo se perdería.',
    },
    {
      icon: Megaphone,
      title: 'Mayor visibilidad',
      description: 'Atrae nuevos clientes y fideliza con tu compromiso sostenible.',
    },
    {
      icon: Award,
      title: 'Reputación sostenible',
      description: 'Destaca como un negocio responsable y eco-friendly.',
    },
  ];

  return (
    <section id="para-negocios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              ¿Tienes un negocio?
            </h2>
            <p className="text-lg mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Únete a FoodSaver y transforma tu excedente de comida en una oportunidad de negocio sostenible.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#DFF5E5' }}>
                      <Icon size={24} style={{ color: '#3BB273' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              onClick={() => {
                const element = document.getElementById('registrar-negocio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 px-8 py-4 rounded-full hover:opacity-90 transition-opacity" 
              style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Registrar mi negocio
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1650539688286-ae822d422d30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHJlc3RhdXJhbnQlMjBmb29kJTIwcGxhdGV8ZW58MXx8fHwxNzY0MDQ5NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Restaurant food"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3BB273' }}>
                  <Award size={24} color="white" />
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    Negocios registrados
                  </p>
                  <p className="text-2xl font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    500+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}