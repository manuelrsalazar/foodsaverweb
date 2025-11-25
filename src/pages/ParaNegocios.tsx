import { TrendingUp, DollarSign, Megaphone, Award, CheckCircle, Users, Clock, BarChart3, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ParaNegociosProps {
  onNavigate?: (page: string) => void;
}

export function ParaNegocios({ onNavigate }: ParaNegociosProps) {
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

  const steps = [
    {
      number: '1',
      title: 'Regístrate',
      description: 'Completa el formulario con los datos de tu negocio',
    },
    {
      number: '2',
      title: 'Publica tu comida',
      description: 'Sube fotos y describe lo que tienes disponible',
    },
    {
      number: '3',
      title: 'Recibe pedidos',
      description: 'Los usuarios compran y reservan en tiempo real',
    },
    {
      number: '4',
      title: 'Entrega y gana',
      description: 'Entrega la comida y recibe tu pago automáticamente',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Negocios activos' },
    { icon: BarChart3, value: '€50k+', label: 'Ingresos generados' },
    { icon: Clock, value: '24/7', label: 'Soporte disponible' },
  ];

  const businessTestimonials = [
    {
      businessName: 'Restaurante El Sabor',
      ownerName: 'Roberto Díaz',
      position: 'Chef Propietario',
      rating: 5,
      text: 'Desde que nos unimos a FoodSaver, hemos reducido nuestro desperdicio en un 65% y generamos S/ 3,500 adicionales cada mes. Es increíble ver cómo la comunidad valora nuestro compromiso.',
      image: 'https://images.unsplash.com/photo-1759521296047-89338c8e083d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwb3duZXIlMjBjaGVmJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MDU0MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      monthlyRevenue: 'S/ 3,500',
      wasteReduction: '65%',
    },
    {
      businessName: 'Panadería Artesanal La Tradición',
      ownerName: 'Carmen López',
      position: 'Propietaria',
      rating: 5,
      text: 'La plataforma es muy fácil de usar y el soporte es excelente. Ahora todo nuestro pan del día se vende, nada se desperdicia. Mis clientes están felices y yo también.',
      image: 'https://images.unsplash.com/photo-1644758843486-ba356c9dcab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBvd25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1NDM2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      monthlyRevenue: 'S/ 2,200',
      wasteReduction: '80%',
    },
    {
      businessName: 'Café Verde',
      ownerName: 'Luis Martínez',
      position: 'Gerente General',
      rating: 5,
      text: 'FoodSaver nos ha ayudado a atraer nuevos clientes que valoran la sostenibilidad. Muchos vuelven para consumir a precio normal porque descubrieron nuestro café a través de la app.',
      image: 'https://images.unsplash.com/photo-1753351055056-d612233d8036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwb3duZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc2NDAyMzE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      monthlyRevenue: 'S/ 1,800',
      wasteReduction: '70%',
    },
    {
      businessName: 'Cocina Fusión Nikkei',
      ownerName: 'Sofia Takahashi',
      position: 'Chef Ejecutiva',
      rating: 5,
      text: 'Una herramienta imprescindible para cualquier restaurante moderno. No solo ayudamos al planeta, sino que mejoramos nuestra reputación y ganamos visibilidad. Totalmente recomendado.',
      image: 'https://images.unsplash.com/photo-1594394206930-67339d922f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjaGVmJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjQwNTQzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      monthlyRevenue: 'S/ 4,100',
      wasteReduction: '55%',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Únete a la revolución contra el desperdicio alimentario
              </h1>
              <p className="text-lg sm:text-xl mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Transforma tu excedente de comida en ingresos adicionales mientras ayudas al planeta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate?.('registrar-negocio')}
                  className="px-8 py-4 rounded-full hover:opacity-90 transition-opacity" 
                  style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Registrar mi negocio
                </button>
                <button 
                  onClick={() => onNavigate?.('demo-negocios')}
                  className="px-8 py-4 rounded-full border-2 hover:bg-white/50 transition-colors" 
                  style={{ borderColor: '#3BB273', color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Ver demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGZvb2R8ZW58MXx8fHwxNzY0MDQ5OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Restaurant kitchen"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Beneficios para tu negocio
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Aumenta tus ingresos, reduce el desperdicio y mejora tu reputación
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F7F3E9' }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#3BB273' }}>
                    <Icon size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Cómo funciona
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Empieza a vender tu excedente en 4 simples pasos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#3BB273' }}>
                    <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5" style={{ backgroundColor: '#3BB273' }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-8 rounded-2xl" style={{ backgroundColor: '#F7F3E9' }}>
                  <Icon size={40} style={{ color: '#3BB273' }} className="mx-auto mb-4" />
                  <p className="text-4xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {stat.value}
                  </p>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Lo que dicen nuestros socios
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Testimonios reales de negocios que ya están transformando sus excedentes en oportunidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessTestimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote size={56} style={{ color: '#3BB273' }} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#3BB273" style={{ color: '#3BB273' }} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 relative z-10 text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
                  "{testimonial.text}"
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-2xl" style={{ backgroundColor: '#DFF5E5' }}>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                      {testimonial.monthlyRevenue}
                    </p>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Ingresos mensuales
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                      {testimonial.wasteReduction}
                    </p>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Menos desperdicio
                    </p>
                  </div>
                </div>

                {/* Business & Owner Info */}
                <div className="flex items-center gap-4 border-t pt-6" style={{ borderColor: '#DFF5E5' }}>
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.ownerName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      {testimonial.businessName}
                    </p>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      {testimonial.ownerName}
                    </p>
                    <p className="text-xs" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Stats */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                  4.9/5
                </p>
                <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Calificación promedio de negocios
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                  500+
                </p>
                <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Negocios satisfechos
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                  S/ 2.8M
                </p>
                <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Ingresos generados en total
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#3BB273' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            ¿Listo para empezar?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
            Únete a cientos de negocios que ya están reduciendo el desperdicio y generando ingresos extra
          </p>
          <button 
            onClick={() => onNavigate?.('registrar-negocio')}
            className="px-10 py-5 rounded-full bg-white hover:bg-gray-100 transition-colors text-lg font-bold" 
            style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}
          >
            Registrar mi negocio ahora
          </button>
        </div>
      </section>
    </div>
  );
}