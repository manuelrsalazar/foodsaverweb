import { Mail, Lock, Eye, EyeOff, Apple, Chrome, User, Store } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface LoginProps {
  onNavigate: (page: string) => void;
}

export function Login({ onNavigate }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState<'user' | 'business'>('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirigir según el tipo de cuenta
    if (accountType === 'user') {
      onNavigate('dashboard-usuario');
    } else {
      onNavigate('dashboard-negocio');
    }
  };

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F7F3E9' }}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Login Form */}
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
                ¡Bienvenido de nuevo!
              </h1>
              <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                Inicia sesión para seguir salvando comida
              </p>
            </div>

            {/* Account Type Selection */}
            <div className="mb-8">
              <p className="text-sm mb-3 font-medium" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                Tipo de cuenta
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAccountType('user')}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all"
                  style={{
                    borderColor: accountType === 'user' ? '#3BB273' : '#E5E5E5',
                    backgroundColor: accountType === 'user' ? '#DFF5E5' : 'white',
                    color: accountType === 'user' ? '#3BB273' : '#777777',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: accountType === 'user' ? 600 : 500,
                  }}
                >
                  <User size={20} />
                  <span>Usuario</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('business')}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all"
                  style={{
                    borderColor: accountType === 'business' ? '#3BB273' : '#E5E5E5',
                    backgroundColor: accountType === 'business' ? '#DFF5E5' : 'white',
                    color: accountType === 'business' ? '#3BB273' : '#777777',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: accountType === 'business' ? 600 : 500,
                  }}
                >
                  <Store size={20} />
                  <span>Negocio</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    required
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-2 border-gray-300 text-[#3BB273] focus:ring-[#3BB273]"
                  />
                  <span className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    Recuérdame
                  </span>
                </label>
                <button
                  type="button"
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: '#3BB273', fontFamily: 'Inter, sans-serif' }}
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-lg text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#3BB273', fontFamily: 'Poppins, sans-serif' }}
              >
                Iniciar sesión
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                O continúa con
              </span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="flex items-center justify-center gap-3 py-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <Chrome size={24} />
                <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <Apple size={24} />
                <span className="font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Apple</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              ¿No tienes cuenta?{' '}
              <button
                type="button"
                onClick={() => onNavigate('registro')}
                className="font-bold hover:opacity-70 transition-opacity"
                style={{ color: '#3BB273' }}
              >
                Regístrate gratis
              </button>
            </p>
          </div>

          {/* Right Side - Image & Benefits */}
          <div className="hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaWNpb3VzfGVufDF8fHx8MTc2NDA1MDY3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Delicious food"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  🎉 Ahorra hasta 70%
                </h3>
                <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Compra comida deliciosa a precios increíbles todos los días
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  🌱 Ayuda al planeta
                </h3>
                <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Cada comida que salvas reduce el desperdicio y las emisiones de CO₂
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  ⭐ 30,000+ usuarios
                </h3>
                <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Únete a miles de personas comprometidas con la sostenibilidad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}