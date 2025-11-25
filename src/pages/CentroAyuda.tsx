import { Search, User, ShoppingBag, CreditCard, MapPin, Settings, HelpCircle, MessageCircle } from 'lucide-react';

interface CentroAyudaProps {
  onNavigate?: (page: string) => void;
}

const helpCategories = [
  {
    icon: User,
    title: 'Cuenta y Perfil',
    description: 'Gestión de cuenta, configuración y seguridad',
    articles: [
      'Cómo crear una cuenta',
      'Recuperar contraseña',
      'Actualizar información personal',
      'Eliminar mi cuenta',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Reservas y Pedidos',
    description: 'Todo sobre cómo hacer y gestionar tus reservas',
    articles: [
      'Cómo hacer una reserva',
      'Cancelar una reserva',
      'Modificar horario de recogida',
      '¿Qué son las packs sorpresa?',
    ],
  },
  {
    icon: CreditCard,
    title: 'Pagos y Reembolsos',
    description: 'Métodos de pago, facturas y devoluciones',
    articles: [
      'Métodos de pago aceptados',
      'Solicitar un reembolso',
      'Problemas con el pago',
      'Obtener factura',
    ],
  },
  {
    icon: MapPin,
    title: 'Ubicación y Negocios',
    description: 'Encontrar negocios y horarios de recogida',
    articles: [
      'Buscar negocios cerca de mí',
      'Horarios de recogida',
      'Reseñas y calificaciones',
      'Negocios favoritos',
    ],
  },
  {
    icon: Settings,
    title: 'Configuración',
    description: 'Notificaciones, privacidad y preferencias',
    articles: [
      'Configurar notificaciones',
      'Preferencias de privacidad',
      'Gestionar suscripciones',
      'Cambiar idioma',
    ],
  },
  {
    icon: HelpCircle,
    title: 'Problemas y Soluciones',
    description: 'Soluciones a problemas comunes',
    articles: [
      'La app no funciona correctamente',
      'No recibí mi pedido',
      'Problemas con el negocio',
      'Reportar un problema',
    ],
  },
];

export function CentroAyuda({ onNavigate }: CentroAyudaProps) {
  return (
    <div style={{ backgroundColor: '#F7F3E9' }}>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            ¿Cómo podemos ayudarte?
          </h1>
          <p className="text-lg mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Encuentra respuestas rápidas a tus preguntas
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2" size={20} style={{ color: '#777777' }} />
            <input
              type="text"
              placeholder="Buscar en el centro de ayuda..."
              className="w-full pl-14 pr-6 py-4 rounded-full border-2 focus:outline-none focus:border-green-500 shadow-sm"
              style={{ borderColor: '#E5E5E5', fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#DFF5E5' }}
                  >
                    <Icon size={28} style={{ color: '#3BB273' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {category.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <button
                          className="text-sm hover:opacity-70 transition-opacity text-left"
                          style={{ color: '#3BB273', fontFamily: 'Inter, sans-serif' }}
                        >
                          • {article}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                  250+
                </div>
                <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Artículos de ayuda
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                  95%
                </div>
                <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Problemas resueltos
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                  24/7
                </div>
                <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Disponibilidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-center shadow-sm">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#DFF5E5' }}
            >
              <MessageCircle size={32} style={{ color: '#3BB273' }} />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              ¿No encuentras lo que buscas?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Nuestro equipo de soporte está disponible para ayudarte con cualquier pregunta o problema
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate && onNavigate('contacto')}
                className="px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Contactar soporte
              </button>
              <button
                onClick={() => onNavigate && onNavigate('faq')}
                className="px-8 py-3 rounded-full hover:opacity-90 transition-opacity border-2"
                style={{ borderColor: '#3BB273', color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600, backgroundColor: 'white' }}
              >
                Ver preguntas frecuentes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}