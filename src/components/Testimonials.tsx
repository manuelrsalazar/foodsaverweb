import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'María Fernández',
      age: 24,
      rating: 5,
      text: 'Increíble app! Como estudiante, me ayuda mucho a ahorrar en comida sin sacrificar calidad. He probado lugares que no conocía y todos deliciosos.',
      image: 'https://images.unsplash.com/photo-1614436201459-156d322d38c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzk3MzIzOXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Carlos Méndez',
      age: 28,
      rating: 5,
      text: 'Me encanta poder ayudar al planeta mientras ahorro dinero. La comida siempre está fresca y las reseñas con foto me dan mucha confianza.',
      image: 'https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM5OTI3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Martha Rodríguez',
      age: 22,
      rating: 5,
      text: 'Súper fácil de usar y los negocios siempre cumplen. He ahorrado más de $200 en el último mes. Totalmente recomendable!',
      image: 'https://images.unsplash.com/photo-1704054006064-2c5b922e7a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHlvdW5nJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwNTQyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="testimonios" className="py-20" style={{ backgroundColor: '#DFF5E5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Opiniones reales de jóvenes que ya están rescatando comida y ahorrando dinero
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} style={{ color: '#3BB273' }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#3BB273" style={{ color: '#3BB273' }} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 relative z-10" style={{ color: '#777777', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 border-t pt-4" style={{ borderColor: '#DFF5E5' }}>
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {testimonial.age} años
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-sm">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                4.8/5
              </p>
              <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Calificación promedio
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                5,200+
              </p>
              <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Reseñas verificadas
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                98%
              </p>
              <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Usuarios satisfechos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}