import { useState } from 'react';
import { Play, CheckCircle, Upload, Image as ImageIcon, DollarSign, Bell, BarChart3, Settings } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface DemoNegociosProps {
  onNavigate?: (page: string) => void;
}

export function DemoNegocios({ onNavigate }: DemoNegociosProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'publicar' | 'pedidos' | 'estadisticas'>('dashboard');

  const features = [
    {
      icon: Upload,
      title: 'Publicación rápida',
      description: 'Publica tu comida disponible en menos de 2 minutos',
    },
    {
      icon: Bell,
      title: 'Notificaciones en tiempo real',
      description: 'Recibe alertas instantáneas de nuevos pedidos',
    },
    {
      icon: BarChart3,
      title: 'Análisis de ventas',
      description: 'Visualiza tus estadísticas y rendimiento',
    },
    {
      icon: DollarSign,
      title: 'Pagos automáticos',
      description: 'Recibe tus ingresos directamente en tu cuenta',
    },
  ];

  const mockProducts = [
    { name: 'Pack de sushi variado', price: 'S/ 25', original: 'S/ 45', status: 'Disponible' },
    { name: 'Menú ejecutivo del día', price: 'S/ 12', original: 'S/ 20', status: 'Reservado' },
    { name: 'Pan artesanal (5 unidades)', price: 'S/ 8', original: 'S/ 15', status: 'Disponible' },
  ];

  const mockOrders = [
    { id: '1234', user: 'Valeria García', product: 'Pack de sushi', time: 'Hace 5 min', status: 'Pendiente' },
    { id: '1235', user: 'Carlos López', product: 'Pan artesanal', time: 'Hace 15 min', status: 'Confirmado' },
    { id: '1236', user: 'María Torres', product: 'Menú ejecutivo', time: 'Hace 30 min', status: 'Completado' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Demo de la Plataforma para Negocios
            </h1>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Explora cómo funciona nuestra plataforma y descubre todas las herramientas que ponemos a tu disposición para gestionar tu negocio de forma simple y eficiente.
            </p>
          </div>

          {/* Video Demo Placeholder */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#3BB273' }}>
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 hover:bg-white/30 transition-colors cursor-pointer">
                    <Play size={40} color="white" fill="white" />
                  </div>
                  <p className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Video Demo de la Plataforma
                  </p>
                  <p className="text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Duración: 3:45 minutos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Funcionalidades principales
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F7F3E9' }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#3BB273' }}>
                    <Icon size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20" style={{ backgroundColor: '#F7F3E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Explora la interfaz
            </h2>
            <p className="text-lg" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Haz clic en las diferentes secciones para ver cómo funciona
            </p>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-t-3xl shadow-xl overflow-hidden">
            <div className="flex border-b border-gray-200 overflow-x-auto">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-6 py-4 transition-colors whitespace-nowrap ${activeTab === 'dashboard' ? 'border-b-2' : ''}`}
                style={{ 
                  borderColor: activeTab === 'dashboard' ? '#3BB273' : 'transparent',
                  color: activeTab === 'dashboard' ? '#3BB273' : '#777777',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: activeTab === 'dashboard' ? 600 : 400
                }}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('publicar')}
                className={`px-6 py-4 transition-colors whitespace-nowrap ${activeTab === 'publicar' ? 'border-b-2' : ''}`}
                style={{ 
                  borderColor: activeTab === 'publicar' ? '#3BB273' : 'transparent',
                  color: activeTab === 'publicar' ? '#3BB273' : '#777777',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: activeTab === 'publicar' ? 600 : 400
                }}
              >
                Publicar comida
              </button>
              <button
                onClick={() => setActiveTab('pedidos')}
                className={`px-6 py-4 transition-colors whitespace-nowrap ${activeTab === 'pedidos' ? 'border-b-2' : ''}`}
                style={{ 
                  borderColor: activeTab === 'pedidos' ? '#3BB273' : 'transparent',
                  color: activeTab === 'pedidos' ? '#3BB273' : '#777777',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: activeTab === 'pedidos' ? 600 : 400
                }}
              >
                Pedidos
              </button>
              <button
                onClick={() => setActiveTab('estadisticas')}
                className={`px-6 py-4 transition-colors whitespace-nowrap ${activeTab === 'estadisticas' ? 'border-b-2' : ''}`}
                style={{ 
                  borderColor: activeTab === 'estadisticas' ? '#3BB273' : 'transparent',
                  color: activeTab === 'estadisticas' ? '#3BB273' : '#777777',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: activeTab === 'estadisticas' ? 600 : 400
                }}
              >
                Estadísticas
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8 min-h-[400px]">
              {activeTab === 'dashboard' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    Panel Principal
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                      <p className="text-sm mb-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Ventas hoy</p>
                      <p className="text-3xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>S/ 245</p>
                    </div>
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                      <p className="text-sm mb-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Pedidos activos</p>
                      <p className="text-3xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>12</p>
                    </div>
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                      <p className="text-sm mb-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Productos activos</p>
                      <p className="text-3xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>8</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>Productos publicados</h4>
                    <div className="space-y-3">
                      {mockProducts.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#F7F3E9' }}>
                          <div>
                            <p className="font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>{product.name}</p>
                            <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                              <span style={{ color: '#3BB273', fontWeight: 600 }}>{product.price}</span>
                              <span className="line-through ml-2">{product.original}</span>
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm`} style={{ 
                            backgroundColor: product.status === 'Disponible' ? '#DFF5E5' : '#FFF3E0',
                            color: product.status === 'Disponible' ? '#3BB273' : '#F57C00',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600
                          }}>
                            {product.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'publicar' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    Publicar nueva comida
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 font-bold" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>Nombre del producto</label>
                      <input 
                        type="text" 
                        placeholder="Ej: Pack de sushi variado"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 font-bold" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>Precio original</label>
                        <input 
                          type="text" 
                          placeholder="S/ 45"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                      <div>
                        <label className="block mb-2 font-bold" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>Precio reducido</label>
                        <input 
                          type="text" 
                          placeholder="S/ 25"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2 font-bold" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>Descripción</label>
                      <textarea 
                        rows={4}
                        placeholder="Describe el producto..."
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 resize-none"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-bold" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>Foto del producto</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-[#3BB273] transition-colors cursor-pointer">
                        <ImageIcon size={48} style={{ color: '#3BB273' }} className="mx-auto mb-4" />
                        <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Haz clic o arrastra una imagen aquí</p>
                      </div>
                    </div>
                    <button className="w-full px-8 py-4 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                      Publicar producto
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'pedidos' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    Pedidos recientes
                  </h3>
                  <div className="space-y-3">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="p-6 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                              Pedido #{order.id}
                            </p>
                            <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                              {order.user} • {order.time}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm`} style={{ 
                            backgroundColor: order.status === 'Completado' ? '#DFF5E5' : order.status === 'Confirmado' ? '#E3F2FD' : '#FFF3E0',
                            color: order.status === 'Completado' ? '#3BB273' : order.status === 'Confirmado' ? '#1976D2' : '#F57C00',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600
                          }}>
                            {order.status}
                          </span>
                        </div>
                        <p style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>{order.product}</p>
                        {order.status === 'Pendiente' && (
                          <div className="flex gap-3 mt-4">
                            <button className="flex-1 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                              Confirmar
                            </button>
                            <button className="flex-1 px-4 py-2 rounded-lg border-2 hover:bg-gray-50 transition-colors" style={{ borderColor: '#E0E0E0', color: '#777777', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                              Rechazar
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'estadisticas' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    Resumen del mes
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                      <p className="text-sm mb-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Ingresos totales</p>
                      <p className="text-4xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>S/ 3,245</p>
                      <p className="text-sm" style={{ color: '#3BB273', fontFamily: 'Inter, sans-serif' }}>↑ 15% vs mes anterior</p>
                    </div>
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                      <p className="text-sm mb-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Pedidos completados</p>
                      <p className="text-4xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>156</p>
                      <p className="text-sm" style={{ color: '#3BB273', fontFamily: 'Inter, sans-serif' }}>↑ 23% vs mes anterior</p>
                    </div>
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                      <p className="text-sm mb-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Comida rescatada</p>
                      <p className="text-4xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>87 kg</p>
                      <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Equivale a 174 comidas</p>
                    </div>
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                      <p className="text-sm mb-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>CO₂ evitado</p>
                      <p className="text-4xl font-bold mb-4" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>261 kg</p>
                      <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Tu impacto ambiental</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            ¿Listo para empezar?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Únete ahora y empieza a reducir el desperdicio mientras generas ingresos extra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate?.('registrar-negocio')}
              className="px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Registrar mi negocio
            </button>
            <button
              onClick={() => onNavigate?.('contacto')}
              className="px-8 py-4 rounded-full border-2 hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#3BB273', color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Contactar con ventas
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}