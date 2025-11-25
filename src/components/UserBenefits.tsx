import { DollarSign, Shield, Eye, Leaf, Clock, Star } from 'lucide-react';

export function UserBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Ahorro hasta 60%',
      description: 'Comida de calidad a precios increíbles. Perfecto para tu bolsillo.',
    },
    {
      icon: Shield,
      title: 'Comida verificada',
      description: 'Todos los negocios cumplen estándares de higiene y seguridad alimentaria.',
    },
    {
      icon: Eye,
      title: 'Transparencia total',
      description: 'Ve la última revisión sanitaria y reseñas verificadas con fotos.',
    },
    {
      icon: Leaf,
      title: 'Impacto positivo',
      description: 'Cada compra ayuda a reducir el desperdicio de alimentos.',
    },
    {
      icon: Clock,
      title: 'Rápido y fácil',
      description: 'Reserva en segundos y recoge en el horario que más te convenga.',
    },
    {
      icon: Star,
      title: 'Reseñas reales',
      description: 'Opiniones verificadas de otros usuarios con fotos reales de la comida.',
    },
  ];

  return (
    <section id="beneficios" className="py-20" style={{ backgroundColor: '#DFF5E5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Beneficios para ti
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Una forma inteligente de comer bien, ahorrar dinero y cuidar el planeta
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#DFF5E5' }}>
                  <Icon size={24} style={{ color: '#3BB273' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
