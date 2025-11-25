import { Mail, Lock, Eye, EyeOff, User, Apple, Chrome } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface RegistroProps {
  onNavigate: (page: string) => void;
}

export function Registro({ onNavigate }: RegistroProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de registro
    console.log('Registration attempt:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F7F3E9' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Registration Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <div className="mb-8">
              <button 
                onClick={() => onNavigate('inicio')} 
                className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3BB273' }}>
                  <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>FS</span>
                </div>
                <span className="text-2xl font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>FoodSaver</span>
              </button>
              
              <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Únete a FoodSaver
              </h1>
              <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Crea tu cuenta gratis y empieza a salvar comida
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block mb-2 font-medium" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Nombre completo
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <User size={20} style={{ color: '#777777' }} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Juan Pérez"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block mb-2 font-medium" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Correo electrónico
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Mail size={20} style={{ color: '#777777' }} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block mb-2 font-medium" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Contraseña
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Lock size={20} style={{ color: '#777777' }} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    placeholder="Mínimo 8 caracteres"
                    className="w-full pl-12 pr-12 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity"
                  >
                    {showPassword ? <EyeOff size={20} style={{ color: '#777777' }} /> : <Eye size={20} style={{ color: '#777777' }} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 font-medium" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Lock size={20} style={{ color: '#777777' }} />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    placeholder="Repite tu contraseña"
                    className="w-full pl-12 pr-12 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:opacity-70 transition-opacity"
                  >
                    {showConfirmPassword ? <EyeOff size={20} style={{ color: '#777777' }} /> : <Eye size={20} style={{ color: '#777777' }} />}
                  </button>
                </div>
              </div>

              {/* Terms & Conditions */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-2 border-gray-300 text-[#3BB273] focus:ring-[#3BB273] mt-0.5"
                  required
                />
                <span className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Acepto los{' '}
                  <button type="button" className="font-medium hover:opacity-70" style={{ color: '#3BB273' }}>
                    Términos y Condiciones
                  </button>
                  {' '}y la{' '}
                  <button type="button" className="font-medium hover:opacity-70" style={{ color: '#3BB273' }}>
                    Política de Privacidad
                  </button>
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-lg text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#3BB273', fontFamily: 'Poppins, sans-serif' }}
              >
                Crear cuenta
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                O regístrate con
              </span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="flex items-center justify-center gap-3 py-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <Chrome size={24} />
                <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <Apple size={24} />
                <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Apple</span>
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              ¿Ya tienes cuenta?{' '}
              <button
                type="button"
                onClick={() => onNavigate('login')}
                className="font-bold hover:opacity-70 transition-opacity"
                style={{ color: '#3BB273' }}
              >
                Inicia sesión
              </button>
            </p>
          </div>

          {/* Right Side - Benefits */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                ¿Por qué unirte a FoodSaver?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#3BB273' }}>
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      Ahorra dinero
                    </h3>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Consigue comida de calidad hasta 70% más barata
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#3BB273' }}>
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      Impacto positivo
                    </h3>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Ayuda a reducir el desperdicio alimentario y las emisiones de CO₂
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#3BB273' }}>
                    <span className="text-2xl">🍽️</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      Descubre lugares nuevos
                    </h3>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Encuentra restaurantes increíbles cerca de ti
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#3BB273' }}>
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      Súper fácil
                    </h3>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Reserva en segundos y recoge cuando quieras
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBlb3BsZSUyMGZvb2R8ZW58MXx8fHwxNzY0MDUwODcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Happy people enjoying food"
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
