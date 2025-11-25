import { Leaf, Package, Users } from 'lucide-react';

export function EnvironmentalImpact() {
  const stats = [
    {
      icon: Package,
      value: '12,450',
      label: 'Comidas salvadas',
      color: '#3BB273',
    },
    {
      icon: Leaf,
      value: '8.7 Ton',
      label: 'CO₂ evitado',
      color: '#3BB273',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Aliados inscritos',
      color: '#3BB273',
    },
  ];

  return (
    <section id="impacto" className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Nuestro impacto ambiental
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            El desperdicio de alimentos genera aproximadamente el 10% de las emisiones globales de gases de efecto invernadero. 
            Con FoodSaver, estamos creando un cambio real.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DFF5E5' }}>
                  <Icon size={32} style={{ color: stat.color }} />
                </div>
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

        {/* Impact Details */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Cada compra cuenta
              </h3>
              <p className="mb-4" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Cuando rescatas comida a través de FoodSaver, no solo ahorras dinero, también ayudas a:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: '#3BB273' }}>
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    <strong style={{ color: '#333333' }}>Reducir emisiones de CO₂</strong> equivalentes a plantar árboles
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: '#3BB273' }}>
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    <strong style={{ color: '#333333' }}>Ahorrar agua y recursos</strong> utilizados en la producción de alimentos
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: '#3BB273' }}>
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    <strong style={{ color: '#333333' }}>Apoyar la economía local</strong> y los pequeños negocios
                  </p>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: '#DFF5E5' }}>
              <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#3BB273' }}>
                <Leaf size={48} color="white" />
              </div>
              <p className="text-lg font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Juntos hacemos la diferencia
              </p>
              <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Cada comida salvada es un paso hacia un futuro más sostenible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
