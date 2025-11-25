import { Leaf, Droplets, Zap, Heart, TrendingDown, Users, Globe, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Impacto() {
  const stats = [
    {
      icon: TrendingDown,
      value: '50,000 kg',
      label: 'Comida salvada',
      description: 'Evitamos que miles de kilos de comida terminen en la basura',
    },
    {
      icon: Leaf,
      value: '125 ton',
      label: 'CO₂ reducido',
      description: 'Equivalente a plantar 5,000 árboles cada año',
    },
    {
      icon: Droplets,
      value: '2M litros',
      label: 'Agua ahorrada',
      description: 'Agua que se usó para producir esa comida',
    },
    {
      icon: Users,
      value: '30,000+',
      label: 'Usuarios activos',
      description: 'Personas comprometidas con el cambio',
    },
  ];

  const impacts = [
    {
      icon: Globe,
      title: 'Reducción de gases invernadero',
      description: 'Cada kilo de comida desperdiciada genera 2.5 kg de CO₂. Al rescatar alimentos, reducimos significativamente las emisiones de gases de efecto invernadero.',
      color: '#3BB273',
    },
    {
      icon: Droplets,
      title: 'Ahorro de agua',
      description: 'La producción de alimentos consume enormes cantidades de agua. Al evitar el desperdicio, conservamos este recurso vital para nuestro planeta.',
      color: '#60A5FA',
    },
    {
      icon: Zap,
      title: 'Ahorro energético',
      description: 'Se requiere mucha energía para producir, transportar y refrigerar alimentos. Salvarlos significa aprovechar toda esa energía invertida.',
      color: '#F59E0B',
    },
    {
      icon: Heart,
      title: 'Impacto social',
      description: 'Hacemos la comida de calidad accesible para más personas, promoviendo una alimentación sostenible y económica.',
      color: '#EF4444',
    },
  ];

  const timeline = [
    { year: '2024', event: 'Lanzamiento de FoodSaver', metric: '5,000 kg salvados' },
    { year: '2025', event: '500 negocios registrados', metric: '50,000 kg salvados' },
    { year: '2026', event: 'Expansión nacional', metric: 'Objetivo: 500,000 kg' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center" style={{ backgroundColor: '#3BB273' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Leaf size={80} className="mx-auto mb-6 text-white" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestro impacto ambiental
            </h1>
            <p className="text-lg sm:text-xl text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
              Juntos estamos creando un futuro más sostenible, una comida a la vez
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow" style={{ backgroundColor: '#F7F3E9' }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#3BB273' }}>
                    <Icon size={40} color="white" />
                  </div>
                  <p className="text-4xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {stat.value}
                  </p>
                  <p className="text-lg font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                    {stat.label}
                  </p>
                  <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Details */}
      <section className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              ¿Cómo hacemos la diferencia?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Cada acción cuenta, cada comida salvada tiene un impacto real
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: impact.color + '20' }}>
                    <Icon size={32} style={{ color: impact.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {impact.title}
                  </h3>
                  <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {impact.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                El problema del desperdicio alimentario
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#3BB273' }}></div>
                  <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    <strong>1/3 de los alimentos</strong> producidos en el mundo se desperdician
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#3BB273' }}></div>
                  <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    El desperdicio alimentario es responsable del <strong>8-10% de las emisiones globales</strong> de gases de efecto invernadero
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: '#3BB273' }}></div>
                  <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    En España se desperdician <strong>7.7 millones de toneladas</strong> de alimentos al año
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwd2FzdGUlMjBwbGFuZXR8ZW58MXx8fHwxNzY0MDUwMTcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Environmental impact"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Nuestro recorrido
            </h2>
            <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Crecemos cada día gracias a ti
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-center">
                <div className="flex-shrink-0 w-32 text-right">
                  <p className="text-3xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                    {item.year}
                  </p>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full" style={{ backgroundColor: '#3BB273' }}></div>
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {item.event}
                  </h3>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {item.metric}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award size={60} style={{ color: '#3BB273' }} className="mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Sé parte del cambio
          </h2>
          <p className="text-lg sm:text-xl mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Cada comida que salvas hace la diferencia. Únete a nuestra comunidad y crea un impacto real.
          </p>
          <button 
            className="px-10 py-5 rounded-full hover:opacity-90 transition-opacity text-lg font-bold text-white" 
            style={{ backgroundColor: '#3BB273', fontFamily: 'Poppins, sans-serif' }}
          >
            Únete a FoodSaver
          </button>
        </div>
      </section>
    </div>
  );
}
