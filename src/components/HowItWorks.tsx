import { Search, ShoppingBag, MapPin } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            ¿Cómo funciona?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Rescatar comida es tan fácil como 1, 2, 3
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Step 1 */}
          <div className="text-center">
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DFF5E5' }}>
                <Search size={40} style={{ color: '#3BB273' }} />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                1
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Explora opciones
            </h3>
            <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Descubre restaurantes, cafeterías y panaderías cerca de ti con comida disponible para rescatar.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DFF5E5' }}>
                <ShoppingBag size={40} style={{ color: '#3BB273' }} />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                2
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Compra tu comida
            </h3>
            <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Selecciona tu pack sorpresa o plato del día a precio reducido y realiza tu pedido en segundos.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DFF5E5' }}>
                <MapPin size={40} style={{ color: '#3BB273' }} />
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                3
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Recoge tu pedido
            </h3>
            <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Ve al local en el horario indicado, muestra tu código y disfruta de tu comida deliciosa.
            </p>
          </div>
        </div>

        {/* Visual Arrow Connections for Desktop */}
        <div className="hidden md:block relative mt-8">
          <div className="flex justify-center items-center gap-4 text-4xl" style={{ color: '#DFF5E5' }}>
            <span>→</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
