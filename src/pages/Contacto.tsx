import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from 'lucide-react';

interface ContactoProps {
  onNavigate?: (page: string) => void;
}

export function Contacto({ onNavigate }: ContactoProps) {
  return (
    <div style={{ backgroundColor: '#F7F3E9' }}>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Contáctanos
          </h1>
          <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#DFF5E5' }}
              >
                <Mail size={28} style={{ color: '#3BB273' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Email
              </h3>
              <p className="text-sm mb-4" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Escríbenos tus dudas o comentarios
              </p>
              <a
                href="mailto:contacto@foodsaver.com"
                className="hover:opacity-70 transition-opacity"
                style={{ color: '#3BB273', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                contacto@foodsaver.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#DFF5E5' }}
              >
                <Phone size={28} style={{ color: '#3BB273' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Teléfono
              </h3>
              <p className="text-sm mb-4" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Llámanos de lunes a viernes
              </p>
              <a
                href="tel:+51944123456"
                className="hover:opacity-70 transition-opacity"
                style={{ color: '#3BB273', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                +51 944 123 456
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#DFF5E5' }}
              >
                <MapPin size={28} style={{ color: '#3BB273' }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Ubicación
              </h3>
              <p className="text-sm mb-4" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Visítanos en nuestra oficina
              </p>
              <p className="hover:opacity-70 transition-opacity" style={{ color: '#3BB273', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                Trujillo, Perú
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#DFF5E5' }}
                >
                  <MessageSquare size={24} style={{ color: '#3BB273' }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  Envíanos un mensaje
                </h2>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-green-500"
                    style={{ borderColor: '#E5E5E5', fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-green-500"
                    style={{ borderColor: '#E5E5E5', fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Asunto
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-green-500"
                    style={{ borderColor: '#E5E5E5', fontFamily: 'Inter, sans-serif', color: '#777777' }}
                  >
                    <option>Consulta general</option>
                    <option>Problema con reserva</option>
                    <option>Problema con pago</option>
                    <option>Sugerencia</option>
                    <option>Quiero unir mi negocio</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Mensaje
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-green-500 resize-none"
                    style={{ borderColor: '#E5E5E5', fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  <Send size={20} />
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* Hours Card */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: '#DFF5E5' }}
                  >
                    <Clock size={24} style={{ color: '#3BB273' }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    Horario de atención
                  </h3>
                </div>
                <div className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex justify-between">
                    <span style={{ color: '#777777' }}>Lunes - Viernes</span>
                    <span className="font-medium" style={{ color: '#333333' }}>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#777777' }}>Sábado</span>
                    <span className="font-medium" style={{ color: '#333333' }}>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#777777' }}>Domingo</span>
                    <span className="font-medium" style={{ color: '#333333' }}>Cerrado</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm" style={{ color: '#777777' }}>
                      * Tiempo de respuesta promedio: 2-4 horas en días hábiles
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  ¿Necesitas ayuda inmediata?
                </h3>
                <p className="mb-6" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Visita nuestro centro de ayuda o preguntas frecuentes para encontrar respuestas rápidas
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => onNavigate && onNavigate('centro-ayuda')}
                    className="w-full px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                  >
                    Centro de ayuda
                  </button>
                  <button
                    onClick={() => onNavigate && onNavigate('faq')}
                    className="w-full px-6 py-3 rounded-xl hover:opacity-90 transition-opacity border-2"
                    style={{ borderColor: '#3BB273', color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600, backgroundColor: 'white' }}
                  >
                    Preguntas frecuentes
                  </button>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  Síguenos en redes
                </h3>
                <p className="mb-6" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Mantente actualizado con noticias, consejos y promociones
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 rounded-xl hover:opacity-90 transition-opacity text-center"
                    style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/food_saver_oficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 rounded-xl hover:opacity-90 transition-opacity text-center"
                    style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 rounded-xl hover:opacity-90 transition-opacity text-center"
                    style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 rounded-xl hover:opacity-90 transition-opacity text-center"
                    style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}