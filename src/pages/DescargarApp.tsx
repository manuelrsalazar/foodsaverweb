import { Smartphone, Apple, Download, Star, Shield, Zap, Users, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function DescargarApp() {
  const features = [
    {
      icon: Zap,
      title: 'Súper rápida',
      description: 'Encuentra y reserva comida en segundos',
    },
    {
      icon: Shield,
      title: '100% segura',
      description: 'Pagos protegidos y datos encriptados',
    },
    {
      icon: Users,
      title: 'Comunidad activa',
      description: 'Miles de usuarios salvando comida cada día',
    },
    {
      icon: Star,
      title: 'Mejor valorada',
      description: '4.8 estrellas de calificación promedio',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Descarga la app',
      description: 'Disponible gratis en App Store y Google Play',
    },
    {
      number: '2',
      title: 'Crea tu cuenta',
      description: 'Regístrate en menos de 1 minuto',
    },
    {
      number: '3',
      title: 'Explora ofertas',
      description: 'Descubre restaurantes cerca de ti',
    },
    {
      number: '4',
      title: 'Reserva y recoge',
      description: 'Paga en la app y recoge tu comida',
    },
  ];

  const testimonials = [
    {
      name: 'María González',
      rating: 5,
      comment: 'La mejor app para ahorrar dinero y ayudar al planeta. La uso todos los días.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      name: 'Carlos Ruiz',
      rating: 5,
      comment: 'Increíble variedad de restaurantes. He descubierto lugares nuevos que me encantan.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    {
      name: 'Laura Martín',
      rating: 5,
      comment: 'Fácil de usar y super conveniente. ¡Recomendada al 100%!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#3BB273', color: 'white' }}>
                <p className="text-sm font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  ✨ Descarga gratis
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Salva comida desde tu móvil
              </h1>
              <p className="text-lg sm:text-xl mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Descarga la app de FoodSaver y empieza a disfrutar de comida deliciosa a precios increíbles mientras ayudas al planeta.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors">
                  <Apple size={28} />
                  <div className="text-left">
                    <p className="text-xs">Descargar en</p>
                    <p className="text-lg font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>App Store</p>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors">
                  <Download size={28} />
                  <div className="text-left">
                    <p className="text-xs">Disponible en</p>
                    <p className="text-lg font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Google Play</p>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                <div className="flex items-center gap-2">
                  <Star size={20} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                  <span className="font-bold" style={{ color: '#333333' }}>4.8</span>
                  <span>(12k reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download size={20} style={{ color: '#3BB273' }} />
                  <span className="font-bold" style={{ color: '#333333' }}>50k+</span>
                  <span>descargas</span>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBmb29kfGVufDF8fHx8MTc2NDA1MDM3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="FoodSaver App"
                  className="w-full max-w-md rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              ¿Por qué descargar FoodSaver?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              La app más completa para salvar comida y ahorrar dinero
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F7F3E9' }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#3BB273' }}>
                    <Icon size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Comienza en 4 pasos
            </h2>
            <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Es súper fácil empezar a salvar comida
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Lo que dicen nuestros usuarios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#F7F3E9' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} style={{ color: '#F59E0B', fill: '#F59E0B' }} />
                  ))}
                </div>
                <p className="text-lg mb-6" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-3">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: '#3BB273' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smartphone size={60} className="mx-auto mb-6 text-white" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            ¿Listo para empezar a salvar comida?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
            Descarga FoodSaver ahora y únete a la revolución contra el desperdicio alimentario
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition-colors">
              <Apple size={28} />
              <div className="text-left">
                <p className="text-xs">Descargar en</p>
                <p className="text-lg font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>App Store</p>
              </div>
            </button>
            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white rounded-2xl hover:bg-gray-50 transition-colors" style={{ color: '#333333' }}>
              <Download size={28} />
              <div className="text-left">
                <p className="text-xs">Disponible en</p>
                <p className="text-lg font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
