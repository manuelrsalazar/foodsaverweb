import { useState, useMemo } from 'react';
import { BarChart3, Package, ShoppingBag, TrendingUp, Plus, Edit2, Trash2, Clock, MapPin, LogOut, DollarSign, Users, X, Save } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface DashboardNegocioProps {
  onNavigate?: (page: string) => void;
}

interface Offer {
  id: number;
  title: string;
  originalPrice: number;
  discountPrice: number;
  available: number;
  total: number;
  pickupTime: string;
  image: string;
  status: 'active' | 'sold_out';
}

interface Order {
  id: string;
  customerName: string;
  item: string;
  price: number;
  pickupTime: string;
  status: 'pendiente' | 'completado';
  date: Date;
}

interface BusinessProfile {
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
}

export function DashboardNegocio({ onNavigate }: DashboardNegocioProps) {
  const [activeTab, setActiveTab] = useState<'resumen' | 'ofertas' | 'pedidos' | 'estadisticas' | 'perfil'>('resumen');
  const [showNewOfferModal, setShowNewOfferModal] = useState(false);
  const [showEditOfferModal, setShowEditOfferModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null);
  
  const [offers, setOffers] = useState<Offer[]>([
    {
      id: 1,
      title: 'Pack Sorpresa - Comida del Día',
      originalPrice: 45,
      discountPrice: 15,
      available: 3,
      total: 5,
      pickupTime: '18:00 - 20:00',
      image: 'https://images.unsplash.com/photo-1600555379885-08a02224726d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG1lYWx8ZW58MXx8fHwxNzY0MDU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'active',
    },
    {
      id: 2,
      title: 'Menú Ejecutivo del Día',
      originalPrice: 35,
      discountPrice: 12,
      available: 0,
      total: 4,
      pickupTime: '12:00 - 14:00',
      image: 'https://images.unsplash.com/photo-1600555379885-08a02224726d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG1lYWx8ZW58MXx8fHwxNzY0MDU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'sold_out',
    },
  ]);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: '#FS-1234',
      customerName: 'María González',
      item: 'Pack Sorpresa - Comida del Día',
      price: 15,
      pickupTime: 'Hoy, 18:30',
      status: 'pendiente',
      date: new Date(),
    },
    {
      id: '#FS-1233',
      customerName: 'Carlos Méndez',
      item: 'Menú Ejecutivo del Día',
      price: 12,
      pickupTime: 'Hoy, 13:00',
      status: 'completado',
      date: new Date(),
    },
    {
      id: '#FS-1232',
      customerName: 'Samantha López',
      item: 'Pack Sorpresa - Comida del Día',
      price: 15,
      pickupTime: 'Ayer, 19:00',
      status: 'completado',
      date: new Date(Date.now() - 86400000),
    },
  ]);

  const [businessProfile, setBusinessProfile] = useState<BusinessProfile>({
    name: 'Restaurante El Sabor',
    address: 'Av. España 1234, Trujillo',
    phone: '+51 944 123 456',
    email: 'contacto@elsabor.com',
    description: 'Restaurante peruano especializado en comida criolla y fusión. Comprometidos con la sostenibilidad y la reducción del desperdicio alimentario.',
  });

  // Form states
  const [newOfferForm, setNewOfferForm] = useState({
    title: '',
    originalPrice: '',
    discountPrice: '',
    quantity: '',
    pickupTimeStart: '',
    pickupTimeEnd: '',
    description: '',
  });

  const [editOfferForm, setEditOfferForm] = useState({
    title: '',
    originalPrice: '',
    discountPrice: '',
    quantity: '',
    pickupTimeStart: '',
    pickupTimeEnd: '',
  });

  // Calculate dynamic statistics
  const stats = useMemo(() => {
    const completedOrders = orders.filter(o => o.status === 'completado');
    const monthlyIncome = completedOrders.reduce((sum, order) => sum + order.price, 0);
    const activeOffers = offers.filter(o => o.status === 'active').length;
    const uniqueCustomers = new Set(orders.map(o => o.customerName)).size;
    
    return [
      {
        icon: DollarSign,
        label: 'Ingresos del mes',
        value: `S/ ${monthlyIncome}`,
        change: '+15%',
        positive: true,
      },
      {
        icon: ShoppingBag,
        label: 'Pedidos completados',
        value: completedOrders.length.toString(),
        change: `+${completedOrders.length}`,
        positive: true,
      },
      {
        icon: Package,
        label: 'Ofertas activas',
        value: activeOffers.toString(),
        change: `${offers.length} total`,
        positive: true,
      },
      {
        icon: Users,
        label: 'Clientes únicos',
        value: uniqueCustomers.toString(),
        change: '+12',
        positive: true,
      },
    ];
  }, [offers, orders]);

  // Calculate environmental impact
  const environmentalImpact = useMemo(() => {
    const completedCount = orders.filter(o => o.status === 'completado').length;
    const foodRescued = completedCount * 1.5; // kg per order
    const co2Avoided = foodRescued * 2; // kg CO2 per kg food
    
    return {
      foodRescued: Math.round(foodRescued),
      co2Avoided: Math.round(co2Avoided),
    };
  }, [orders]);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    onNavigate?.('inicio');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewOfferForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditOfferForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBusinessProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitOffer = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newOfferForm.title || !newOfferForm.originalPrice || !newOfferForm.discountPrice || 
        !newOfferForm.quantity || !newOfferForm.pickupTimeStart || !newOfferForm.pickupTimeEnd) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    const newOffer: Offer = {
      id: Math.max(...offers.map(o => o.id), 0) + 1,
      title: newOfferForm.title,
      originalPrice: parseFloat(newOfferForm.originalPrice),
      discountPrice: parseFloat(newOfferForm.discountPrice),
      available: parseInt(newOfferForm.quantity),
      total: parseInt(newOfferForm.quantity),
      pickupTime: `${newOfferForm.pickupTimeStart} - ${newOfferForm.pickupTimeEnd}`,
      image: 'https://images.unsplash.com/photo-1600555379885-08a02224726d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG1lYWx8ZW58MXx8fHwxNzY0MDU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      status: 'active',
    };

    setOffers(prev => [newOffer, ...prev]);
    setNewOfferForm({
      title: '',
      originalPrice: '',
      discountPrice: '',
      quantity: '',
      pickupTimeStart: '',
      pickupTimeEnd: '',
      description: '',
    });
    setShowNewOfferModal(false);
    setActiveTab('ofertas');
  };

  const handleEditOffer = (offer: Offer) => {
    setEditingOffer(offer);
    const [start, end] = offer.pickupTime.split(' - ');
    setEditOfferForm({
      title: offer.title,
      originalPrice: offer.originalPrice.toString(),
      discountPrice: offer.discountPrice.toString(),
      quantity: offer.available.toString(),
      pickupTimeStart: start,
      pickupTimeEnd: end,
    });
    setShowEditOfferModal(true);
  };

  const handleUpdateOffer = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingOffer) return;

    const updatedOffer: Offer = {
      ...editingOffer,
      title: editOfferForm.title,
      originalPrice: parseFloat(editOfferForm.originalPrice),
      discountPrice: parseFloat(editOfferForm.discountPrice),
      available: parseInt(editOfferForm.quantity),
      total: parseInt(editOfferForm.quantity),
      pickupTime: `${editOfferForm.pickupTimeStart} - ${editOfferForm.pickupTimeEnd}`,
      status: parseInt(editOfferForm.quantity) > 0 ? 'active' : 'sold_out',
    };

    setOffers(prev => prev.map(o => o.id === editingOffer.id ? updatedOffer : o));
    setShowEditOfferModal(false);
    setEditingOffer(null);
  };

  const handleDeleteOffer = (id: number) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta oferta?')) {
      setOffers(prev => prev.filter(offer => offer.id !== id));
    }
  };

  const handleCompleteOrder = (orderId: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: 'completado' as const } : order
    ));
  };

  const handleSaveProfile = () => {
    alert('Perfil actualizado correctamente');
  };

  const monthlyData = useMemo(() => {
    return ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'].map((month, index) => {
      const baseValue = 2000 + (index * 300);
      const currentMonthBonus = index === 5 ? orders.filter(o => o.status === 'completado').reduce((sum, o) => sum + o.price, 0) : 0;
      return {
        month,
        value: baseValue + currentMonthBonus,
        height: Math.min(((baseValue + currentMonthBonus) / 4000) * 100, 100),
      };
    });
  }, [orders]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F3E9' }}>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3BB273' }}>
                <span className="text-white font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>FS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  Panel de Negocio
                </h1>
                <p className="text-xs" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  {businessProfile.name}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors"
              style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}
            >
              <LogOut size={20} />
              <span className="hidden sm:inline">Cerrar sesión</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Bienvenido de nuevo 👋
          </h2>
          <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Aquí está el resumen de tu negocio hoy
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setActiveTab('resumen')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'resumen' ? '#3BB273' : 'white',
                color: activeTab === 'resumen' ? 'white' : '#777777',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: activeTab === 'resumen' ? 600 : 500,
              }}
            >
              <BarChart3 size={18} />
              Resumen
            </button>
            <button
              onClick={() => setActiveTab('ofertas')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'ofertas' ? '#3BB273' : 'white',
                color: activeTab === 'ofertas' ? 'white' : '#777777',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: activeTab === 'ofertas' ? 600 : 500,
              }}
            >
              <Package size={18} />
              Mis Ofertas
            </button>
            <button
              onClick={() => setActiveTab('pedidos')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'pedidos' ? '#3BB273' : 'white',
                color: activeTab === 'pedidos' ? 'white' : '#777777',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: activeTab === 'pedidos' ? 600 : 500,
              }}
            >
              <ShoppingBag size={18} />
              Pedidos
              {orders.filter(o => o.status === 'pendiente').length > 0 && (
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: activeTab === 'pedidos' ? 'white' : '#FF4444', color: activeTab === 'pedidos' ? '#3BB273' : 'white' }}>
                  {orders.filter(o => o.status === 'pendiente').length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('estadisticas')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'estadisticas' ? '#3BB273' : 'white',
                color: activeTab === 'estadisticas' ? 'white' : '#777777',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: activeTab === 'estadisticas' ? 600 : 500,
              }}
            >
              <TrendingUp size={18} />
              Estadísticas
            </button>
            <button
              onClick={() => setActiveTab('perfil')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'perfil' ? '#3BB273' : 'white',
                color: activeTab === 'perfil' ? 'white' : '#777777',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: activeTab === 'perfil' ? 600 : 500,
              }}
            >
              <MapPin size={18} />
              Mi Negocio
            </button>
          </div>
        </div>

        {/* Resumen Tab */}
        {activeTab === 'resumen' && (
          <>
            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#DFF5E5' }}>
                        <Icon size={24} style={{ color: '#3BB273' }} />
                      </div>
                      <span className="text-sm px-2 py-1 rounded-full" style={{ backgroundColor: stat.positive ? '#DFF5E5' : '#FFE5E5', color: stat.positive ? '#3BB273' : '#FF4444', fontFamily: 'Inter, sans-serif' }}>
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Acciones Rápidas
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  onClick={() => setShowNewOfferModal(true)}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#3BB273' }}>
                    <Plus size={24} color="white" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      Nueva Oferta
                    </p>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Publicar nuevo pack
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('pedidos')}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#DFF5E5' }}>
                    <ShoppingBag size={24} style={{ color: '#3BB273' }} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      Ver Pedidos
                    </p>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      {orders.filter(o => o.status === 'pendiente').length} pedido(s) pendiente(s)
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab('estadisticas')}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#DFF5E5' }}>
                    <BarChart3 size={24} style={{ color: '#3BB273' }} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      Ver Reportes
                    </p>
                    <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Análisis detallado
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Actividad Reciente
              </h3>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="space-y-4">
                  {orders.slice(0, 3).map(order => (
                    <div key={order.id} className="flex items-center justify-between py-3 border-b last:border-b-0" style={{ borderColor: '#F7F3E9' }}>
                      <div className="flex-1">
                        <p className="font-medium mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                          {order.customerName}
                        </p>
                        <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                          {order.item}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold mb-1" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                          S/ {order.price}
                        </p>
                        <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: order.status === 'pendiente' ? '#FFE5B4' : '#DFF5E5', color: order.status === 'pendiente' ? '#FF8C00' : '#3BB273', fontFamily: 'Inter, sans-serif' }}>
                          {order.status === 'pendiente' ? 'Pendiente' : 'Completado'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Ofertas Tab */}
        {activeTab === 'ofertas' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Mis Ofertas Activas
              </h3>
              <button
                onClick={() => setShowNewOfferModal(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                <Plus size={20} />
                Nueva Oferta
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {offers.map(offer => (
                <div key={offer.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="relative">
                    <ImageWithFallback
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: offer.status === 'active' ? '#3BB273' : '#FF4444', color: 'white', fontFamily: 'Inter, sans-serif' }}>
                      {offer.status === 'active' ? `${offer.available}/${offer.total} disponibles` : 'Agotado'}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold mb-3 text-lg" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      {offer.title}
                    </h4>
                    
                    <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      <Clock size={14} />
                      <span>{offer.pickupTime}</span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                          Precio original
                        </p>
                        <p className="font-bold line-through" style={{ color: '#999999', fontFamily: 'Poppins, sans-serif' }}>
                          S/ {offer.originalPrice}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                          Precio oferta
                        </p>
                        <p className="text-2xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                          S/ {offer.discountPrice}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEditOffer(offer)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border-2 hover:bg-gray-50 transition-colors" 
                        style={{ borderColor: '#E5E5E5', color: '#777777', fontFamily: 'Inter, sans-serif' }}
                      >
                        <Edit2 size={16} />
                        Editar
                      </button>
                      <button 
                        onClick={() => handleDeleteOffer(offer.id)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border-2 hover:bg-red-50 transition-colors" 
                        style={{ borderColor: '#FFE5E5', color: '#FF4444', fontFamily: 'Inter, sans-serif' }}
                      >
                        <Trash2 size={16} />
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {offers.length === 0 && (
              <div className="bg-white rounded-2xl p-12 text-center">
                <Package size={64} className="mx-auto mb-4" style={{ color: '#E5E5E5' }} />
                <p className="text-lg mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  No tienes ofertas activas
                </p>
                <p className="mb-6" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Crea tu primera oferta y empieza a vender
                </p>
                <button
                  onClick={() => setShowNewOfferModal(true)}
                  className="px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Crear Primera Oferta
                </button>
              </div>
            )}
          </>
        )}

        {/* Pedidos Tab */}
        {activeTab === 'pedidos' && (
          <>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Pedidos Recientes
            </h3>
            <div className="space-y-4">
              {orders.map(order => (
                <div key={order.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                        Pedido {order.id}
                      </p>
                      <p className="font-bold text-lg" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                        {order.customerName}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: order.status === 'pendiente' ? '#FFE5B4' : '#DFF5E5', color: order.status === 'pendiente' ? '#FF8C00' : '#3BB273', fontFamily: 'Inter, sans-serif' }}>
                      {order.status === 'pendiente' ? 'Pendiente' : 'Completado'}
                    </span>
                  </div>
                  
                  <p className="mb-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    {order.item}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#F7F3E9' }}>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      <Clock size={14} />
                      <span>{order.pickupTime}</span>
                    </div>
                    <p className="text-xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                      S/ {order.price}
                    </p>
                  </div>

                  {order.status === 'pendiente' && (
                    <button 
                      onClick={() => handleCompleteOrder(order.id)}
                      className="w-full mt-4 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity" 
                      style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif' }}
                    >
                      Marcar como completado
                    </button>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Estadísticas Tab */}
        {activeTab === 'estadisticas' && (
          <>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Estadísticas del Negocio
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  Rendimiento del Mes
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Ventas completadas</span>
                      <span className="font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                        {orders.filter(o => o.status === 'completado').length}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#F7F3E9' }}>
                      <div className="h-full rounded-full" style={{ backgroundColor: '#3BB273', width: `${Math.min((orders.filter(o => o.status === 'completado').length / 100) * 100, 100)}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>Tasa de recogida</span>
                      <span className="font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>95%</span>
                    </div>
                    <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#F7F3E9' }}>
                      <div className="h-full rounded-full" style={{ backgroundColor: '#3BB273', width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  Impacto Ambiental
                </h4>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl" style={{ backgroundColor: '#DFF5E5' }}>
                    <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      Comida rescatada
                    </p>
                    <p className="text-3xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                      {environmentalImpact.foodRescued} kg
                    </p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ backgroundColor: '#DFF5E5' }}>
                    <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      CO₂ evitado
                    </p>
                    <p className="text-3xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                      {environmentalImpact.co2Avoided} kg
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Ingresos Mensuales
              </h4>
              <div className="h-64 flex items-end justify-around gap-4">
                {monthlyData.map((data) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative group"
                      style={{ 
                        backgroundColor: '#3BB273',
                        height: `${data.height}%`,
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                        S/ {data.value}
                      </div>
                    </div>
                    <p className="mt-2 text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      {data.month}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Perfil Tab */}
        {activeTab === 'perfil' && (
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Información del Negocio
            </h3>
            <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Nombre del Negocio
                </label>
                <input
                  type="text"
                  name="name"
                  value={businessProfile.name}
                  onChange={handleProfileInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Dirección
                </label>
                <input
                  type="text"
                  name="address"
                  value={businessProfile.address}
                  onChange={handleProfileInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={businessProfile.phone}
                  onChange={handleProfileInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={businessProfile.email}
                  onChange={handleProfileInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Descripción
                </label>
                <textarea
                  name="description"
                  rows={4}
                  value={businessProfile.description}
                  onChange={handleProfileInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <button 
                onClick={handleSaveProfile}
                className="w-full py-4 rounded-xl font-medium text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2" 
                style={{ backgroundColor: '#3BB273', fontFamily: 'Poppins, sans-serif' }}
              >
                <Save size={20} />
                Guardar Cambios
              </button>
            </div>
          </div>
        )}
      </div>

      {/* New Offer Modal */}
      {showNewOfferModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowNewOfferModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Nueva Oferta
              </h3>
              <button onClick={() => setShowNewOfferModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} style={{ color: '#777777' }} />
              </button>
            </div>

            <form onSubmit={handleSubmitOffer} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Título de la oferta *
                </label>
                <input
                  type="text"
                  name="title"
                  value={newOfferForm.title}
                  onChange={handleInputChange}
                  placeholder="Ej: Pack Sorpresa del Día"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Precio original *
                  </label>
                  <input
                    type="number"
                    name="originalPrice"
                    value={newOfferForm.originalPrice}
                    onChange={handleInputChange}
                    placeholder="45"
                    step="0.01"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Precio con descuento *
                  </label>
                  <input
                    type="number"
                    name="discountPrice"
                    value={newOfferForm.discountPrice}
                    onChange={handleInputChange}
                    placeholder="15"
                    step="0.01"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Cantidad disponible *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={newOfferForm.quantity}
                  onChange={handleInputChange}
                  placeholder="5"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Hora inicio *
                  </label>
                  <input
                    type="time"
                    name="pickupTimeStart"
                    value={newOfferForm.pickupTimeStart}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Hora fin *
                  </label>
                  <input
                    type="time"
                    name="pickupTimeEnd"
                    value={newOfferForm.pickupTimeEnd}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Descripción (opcional)
                </label>
                <textarea
                  name="description"
                  value={newOfferForm.description}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe qué incluye tu pack..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowNewOfferModal(false)}
                  className="flex-1 py-3 rounded-xl font-medium border-2 hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#E5E5E5', color: '#777777', fontFamily: 'Poppins, sans-serif' }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#3BB273', fontFamily: 'Poppins, sans-serif' }}
                >
                  Crear Oferta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Offer Modal */}
      {showEditOfferModal && editingOffer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowEditOfferModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                Editar Oferta
              </h3>
              <button onClick={() => setShowEditOfferModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} style={{ color: '#777777' }} />
              </button>
            </div>

            <form onSubmit={handleUpdateOffer} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Título de la oferta *
                </label>
                <input
                  type="text"
                  name="title"
                  value={editOfferForm.title}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Precio original *
                  </label>
                  <input
                    type="number"
                    name="originalPrice"
                    value={editOfferForm.originalPrice}
                    onChange={handleEditInputChange}
                    step="0.01"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Precio con descuento *
                  </label>
                  <input
                    type="number"
                    name="discountPrice"
                    value={editOfferForm.discountPrice}
                    onChange={handleEditInputChange}
                    step="0.01"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                  Cantidad disponible *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={editOfferForm.quantity}
                  onChange={handleEditInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Hora inicio *
                  </label>
                  <input
                    type="time"
                    name="pickupTimeStart"
                    value={editOfferForm.pickupTimeStart}
                    onChange={handleEditInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                    Hora fin *
                  </label>
                  <input
                    type="time"
                    name="pickupTimeEnd"
                    value={editOfferForm.pickupTimeEnd}
                    onChange={handleEditInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditOfferModal(false)}
                  className="flex-1 py-3 rounded-xl font-medium border-2 hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#E5E5E5', color: '#777777', fontFamily: 'Poppins, sans-serif' }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#3BB273', fontFamily: 'Poppins, sans-serif' }}
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowLogoutModal(false)}>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              ¿Estás seguro de que quieres cerrar sesión?
            </h4>
            <p className="text-sm mb-6" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Esta acción cerrará tu sesión actual.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 py-3 rounded-xl font-medium border-2 hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#E5E5E5', color: '#777777', fontFamily: 'Poppins, sans-serif' }}
              >
                Cancelar
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 py-3 rounded-xl font-medium text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#FF4444', fontFamily: 'Poppins, sans-serif' }}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
