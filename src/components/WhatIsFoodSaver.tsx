import { Leaf, Users, TrendingDown } from 'lucide-react';

export function WhatIsFoodSaver() {
  return (
    <section id="que-es" className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            ¿Qué es FoodSaver?
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Somos la plataforma que conecta a personas con restaurantes, cafeterías y panaderías 
            para rescatar comida de calidad que no se vendió durante el día, a precios reducidos de hasta 60%.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#DFF5E5' }}>
              <Leaf size={32} style={{ color: '#3BB273' }} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Reducimos el desperdicio
            </h3>
            <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Cada año se desperdician millones de toneladas de comida. Con FoodSaver, ayudas a reducir este impacto ambiental.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#DFF5E5' }}>
              <Users size={32} style={{ color: '#3BB273' }} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Apoyamos a los negocios
            </h3>
            <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Los restaurantes reducen pérdidas y ganan visibilidad, mientras mantienen sus estándares de calidad.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#DFF5E5' }}>
              <TrendingDown size={32} style={{ color: '#3BB273' }} />
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Precios accesibles
            </h3>
            <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Comida de calidad hasta 60% más barata. Perfecto para jóvenes que buscan comer bien sin gastar de más.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
