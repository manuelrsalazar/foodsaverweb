import { useState } from 'react';
import { Store, Mail, Phone, MapPin, User, FileText, CheckCircle } from 'lucide-react';

interface RegistrarNegocioProps {
  onNavigate?: (page: string) => void;
}

export function RegistrarNegocio({ onNavigate }: RegistrarNegocioProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#3BB273' }}>
              <CheckCircle size={48} color="white" />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              ¡Registro exitoso!
            </h2>
            <p className="text-lg mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Gracias por registrar tu negocio en FoodSaver. Nuestro equipo revisará tu solicitud y te contactaremos en las próximas 24-48 horas.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => onNavigate?.('inicio')}
                className="w-full px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Volver al inicio
              </button>
              <button
                onClick={() => onNavigate?.('para-negocios')}
                className="w-full px-8 py-4 rounded-full border-2 hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#3BB273', color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Ver más información
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: '#F7F3E9' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Registra tu negocio
          </h1>
          <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Únete a FoodSaver y empieza a generar ingresos reduciendo el desperdicio alimentario
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información del Negocio */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                <Store size={24} style={{ color: '#3BB273' }} />
                Información del Negocio
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="businessName" className="block mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Nombre del negocio *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Ej: Restaurante El Buen Sabor"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Tipo de negocio *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="cafeteria">Cafetería</option>
                    <option value="panaderia">Panadería</option>
                    <option value="supermercado">Supermercado</option>
                    <option value="hotel">Hotel</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Descripción del negocio
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Cuéntanos sobre tu negocio..."
                  />
                </div>
              </div>
            </div>

            {/* Información del Responsable */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                <User size={24} style={{ color: '#3BB273' }} />
                Información del Responsable
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="ownerName" className="block mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    required
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                      placeholder="+51 999 999 999"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Ubicación */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                <MapPin size={24} style={{ color: '#3BB273' }} />
                Ubicación
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Dirección *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Calle, número, distrito"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    placeholder="Ej: Trujillo"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Enviar solicitud
              </button>
              <p className="text-sm text-center mt-4" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Al registrarte, aceptas nuestros{' '}
                <button 
                  type="button"
                  onClick={() => onNavigate?.('terminos')}
                  className="underline hover:opacity-70"
                  style={{ color: '#3BB273' }}
                >
                  Términos y Condiciones
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
