import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PreguntasFrecuentesProps {
  onNavigate?: (page: string) => void;
}

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'General',
    question: '¿Qué es FoodSaver?',
    answer: 'FoodSaver es una plataforma que conecta a usuarios con restaurantes, cafeterías y negocios de alimentación que ofrecen comida del día a precios reducidos. Nuestro objetivo es reducir el desperdicio alimentario mientras ayudamos a las personas a acceder a comida de calidad a precios más bajos.',
  },
  {
    category: 'General',
    question: '¿Cómo funciona FoodSaver?',
    answer: 'Es muy simple: descarga la app, busca negocios cerca de ti que tengan packs sorpresa disponibles, reserva el que te interese, paga en la app y recoge tu comida en el horario indicado. Todo el proceso toma menos de 5 minutos.',
  },
  {
    category: 'General',
    question: '¿Qué es un pack sorpresa?',
    answer: 'Un pack sorpresa es una bolsa con comida del día que el negocio tiene disponible al final del día. El contenido es una sorpresa, pero siempre es comida fresca y de calidad que de otra forma se desperdiciaría. Puedes preguntar al negocio sobre alérgenos antes de recoger.',
  },
  {
    category: 'Reservas',
    question: '¿Puedo elegir qué comida recibo?',
    answer: 'No, los packs sorpresa contienen comida que el negocio tiene disponible ese día. Sin embargo, puedes verificar el tipo de comida del negocio (pizzería, panadería, restaurante, etc.) antes de reservar. Si tienes alergias o intolerancias, puedes preguntar al negocio directamente.',
  },
  {
    category: 'Reservas',
    question: '¿Cuándo puedo recoger mi pedido?',
    answer: 'Cada negocio establece su propio horario de recogida, generalmente al final del día. Verás el horario exacto al hacer la reserva. Es importante llegar puntual, ya que los negocios necesitan cerrar y no siempre pueden esperar.',
  },
  {
    category: 'Reservas',
    question: '¿Puedo cancelar una reserva?',
    answer: 'Sí, puedes cancelar hasta 2 horas antes del horario de recogida para obtener un reembolso completo. Después de ese período, no se realizarán reembolsos ya que el negocio ya ha apartado la comida para ti.',
  },
  {
    category: 'Reservas',
    question: '¿Qué pasa si no puedo recoger mi pedido?',
    answer: 'Si no cancelas y no recoges tu pedido, no recibirás reembolso y tu cuenta podría ser suspendida temporalmente. Esto nos ayuda a asegurar que los negocios no desperdicien comida apartada para reservas no recogidas.',
  },
  {
    category: 'Pagos',
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), así como pagos a través de PayPal y Yape. Todo el proceso de pago es seguro y encriptado.',
  },
  {
    category: 'Pagos',
    question: '¿Cuánto puedo ahorrar con FoodSaver?',
    answer: 'En promedio, los packs sorpresa cuestan entre 30% y 70% menos que su valor original. Algunos usuarios reportan ahorros de hasta 50% en sus gastos de alimentación mensuales usando FoodSaver regularmente.',
  },
  {
    category: 'Pagos',
    question: '¿Cómo solicito un reembolso?',
    answer: 'Si cancelas dentro del período permitido (2+ horas antes), el reembolso se procesa automáticamente en 5-7 días hábiles. Si hay un problema con tu pedido, contacta a nuestro soporte y lo resolveremos.',
  },
  {
    category: 'Cuenta',
    question: '¿Es gratis usar FoodSaver?',
    answer: 'Sí, crear una cuenta y usar la app es completamente gratis. Solo pagas por los packs sorpresa que reservas.',
  },
  {
    category: 'Cuenta',
    question: '¿Necesito una cuenta para usar FoodSaver?',
    answer: 'Sí, necesitas crear una cuenta para poder hacer reservas. Esto nos ayuda a mantener un registro de tus pedidos, preferencias y también a prevenir abusos del sistema.',
  },
  {
    category: 'Cuenta',
    question: '¿Mis datos están seguros?',
    answer: 'Absolutamente. Utilizamos encriptación SSL/TLS para proteger tus datos y cumplimos con todas las regulaciones de protección de datos. Nunca compartimos tu información personal con terceros sin tu consentimiento.',
  },
  {
    category: 'Negocios',
    question: '¿Cómo puedo unir mi negocio a FoodSaver?',
    answer: 'Visita nuestra sección "Para Negocios" y completa el formulario de registro. Nuestro equipo revisará tu solicitud y te contactará en 24-48 horas. Es completamente gratis empezar.',
  },
  {
    category: 'Negocios',
    question: '¿FoodSaver cobra comisión a los negocios?',
    answer: 'Sí, cobramos una pequeña comisión por cada venta para mantener la plataforma funcionando. Sin embargo, nuestros negocios asociados reportan que aún así obtienen ganancias adicionales que de otra forma se perderían.',
  },
  {
    category: 'Impacto',
    question: '¿Realmente ayudo al medio ambiente usando FoodSaver?',
    answer: '¡Absolutamente! Cada pack sorpresa que rescatas evita aproximadamente 1.2 kg de CO2 equivalente. Los usuarios activos de FoodSaver evitan el desperdicio de 25-50 kg de comida al año, lo que equivale a plantar 2-4 árboles.',
  },
  {
    category: 'Impacto',
    question: '¿Puedo ver mi impacto personal?',
    answer: 'Sí, en tu perfil puedes ver estadísticas detalladas de cuánta comida has rescatado, cuánto CO2 has evitado y cuánto dinero has ahorrado. También puedes compartir tu impacto en redes sociales.',
  },
  {
    category: 'Problemas',
    question: '¿Qué hago si la comida no está en buenas condiciones?',
    answer: 'Contacta inmediatamente a nuestro soporte con fotos del pedido. Investigaremos el caso y procesaremos un reembolso si corresponde. La calidad de la comida es nuestra prioridad.',
  },
  {
    category: 'Problemas',
    question: '¿Qué hago si el negocio está cerrado cuando llego?',
    answer: 'Primero verifica que estés en el horario correcto de recogida. Si el negocio está cerrado durante el horario indicado, contáctanos de inmediato y procesaremos un reembolso completo.',
  },
];

const categories = ['Todos', 'General', 'Reservas', 'Pagos', 'Cuenta', 'Negocios', 'Impacto', 'Problemas'];

export function PreguntasFrecuentes({ onNavigate }: PreguntasFrecuentesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredFaqs = selectedCategory === 'Todos' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ backgroundColor: '#F7F3E9' }}>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Preguntas Frecuentes
          </h1>
          <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Encuentra respuestas rápidas a las preguntas más comunes sobre FoodSaver
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2 rounded-full transition-all hover:opacity-90"
                style={{
                  backgroundColor: selectedCategory === category ? '#3BB273' : 'white',
                  color: selectedCategory === category ? 'white' : '#777777',
                  fontFamily: 'Inter, sans-serif',
                  border: selectedCategory === category ? 'none' : '1px solid #E5E5E5',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs mb-2"
                      style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Inter, sans-serif' }}
                    >
                      {faq.category}
                    </div>
                    <h3 className="font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {activeIndex === index ? (
                      <ChevronUp size={24} style={{ color: '#3BB273' }} />
                    ) : (
                      <ChevronDown size={24} style={{ color: '#777777' }} />
                    )}
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-6">
                    <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-center shadow-sm">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              ¿Aún tienes preguntas?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Nuestro equipo está aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
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
                onClick={() => onNavigate && onNavigate('centro-ayuda')}
                className="px-8 py-3 rounded-full hover:opacity-90 transition-opacity border-2"
                style={{ borderColor: '#3BB273', color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600, backgroundColor: 'white' }}
              >
                Centro de ayuda
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}