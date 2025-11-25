import { useState } from 'react';
import { Search, MapPin, Clock, Heart, ShoppingBag, User, LogOut, Star, Filter, X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface DashboardUsuarioProps {
  onNavigate?: (page: string) => void;
}

export function DashboardUsuario({ onNavigate }: DashboardUsuarioProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'explorar' | 'reservas' | 'favoritos' | 'perfil'>('explorar');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const categories = ['Todos', 'Restaurantes', 'Panaderías', 'Cafeterías', 'Postres'];

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    onNavigate?.('inicio');
  };

  const foodPacks = [
    {
      id: 1,
      businessName: 'Restaurante El Sabor',
      image: 'https://images.unsplash.com/photo-1600555379885-08a02224726d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMG1lYWx8ZW58MXx8fHwxNzY0MDU0NjkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pack Sorpresa - Comida del Día',
      originalPrice: 45,
      discountPrice: 15,
      distance: '0.8 km',
      pickupTime: '18:00 - 20:00',
      rating: 4.8,
      reviews: 142,
      available: 3,
      category: 'Restaurantes',
    },
    {
      id: 2,
      businessName: 'Panadería Artesanal',
      image: 'https://images.unsplash.com/photo-1696721497670-d57754966c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cmllc3xlbnwxfHx8fDE3NjQwNDE1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bolsa de Pan y Pasteles',
      originalPrice: 30,
      discountPrice: 10,
      distance: '1.2 km',
      pickupTime: '19:00 - 21:00',
      rating: 4.9,
      reviews: 256,
      available: 5,
      category: 'Panaderías',
    },
    {
      id: 3,
      businessName: 'Pizzería Napolitana',
      image: 'https://images.unsplash.com/photo-1563245738-9169ff58eccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY0MDA0MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pizza del Día - Tamaño Familiar',
      originalPrice: 55,
      discountPrice: 20,
      distance: '2.1 km',
      pickupTime: '20:00 - 22:00',
      rating: 4.7,
      reviews: 89,
      available: 2,
      category: 'Restaurantes',
    },
    {
      id: 4,
      businessName: 'Sushi Bar Nikkei',
      image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NjM5NzgyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pack Sushi Variado',
      originalPrice: 65,
      discountPrice: 25,
      distance: '1.5 km',
      pickupTime: '21:00 - 22:30',
      rating: 4.9,
      reviews: 178,
      available: 4,
      category: 'Restaurantes',
    },
    {
      id: 5,
      businessName: 'Cevichería Mar Azul',
      image: 'https://images.unsplash.com/photo-1611262359546-64e2822b2ab5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJ1dmlhbiUyMGZvb2QlMjBjZXZpY2hlfGVufDF8fHx8MTc2Mzk1ODA3OXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pack Marino del Día',
      originalPrice: 48,
      discountPrice: 18,
      distance: '1.8 km',
      pickupTime: '13:00 - 15:00',
      rating: 4.8,
      reviews: 203,
      available: 6,
      category: 'Restaurantes',
    },
    {
      id: 6,
      businessName: 'Burger House',
      image: 'https://images.unsplash.com/photo-1722125680299-783f98369451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50JTIwZm9vZHxlbnwxfHx8fDE3NjQwNDQ3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Combo Burger + Papas',
      originalPrice: 38,
      discountPrice: 14,
      distance: '0.5 km',
      pickupTime: '19:30 - 21:30',
      rating: 4.6,
      reviews: 134,
      available: 4,
      category: 'Restaurantes',
    },
    {
      id: 7,
      businessName: 'Trattoria Italiana',
      image: 'https://images.unsplash.com/photo-1680405229153-a753d043c4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW4lMjByZXN0YXVyYW50fGVufDF8fHx8MTc2NDAyNDIyMXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pasta del Chef',
      originalPrice: 42,
      discountPrice: 16,
      distance: '1.9 km',
      pickupTime: '20:00 - 21:30',
      rating: 4.9,
      reviews: 167,
      available: 3,
      category: 'Restaurantes',
    },
    {
      id: 8,
      businessName: 'Panadería La Espiga',
      image: 'https://images.unsplash.com/photo-1568471382005-99e347e2aef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBiYWtlcnl8ZW58MXx8fHwxNzYzOTkxOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pack de Croissants y Bollería',
      originalPrice: 25,
      discountPrice: 8,
      distance: '0.9 km',
      pickupTime: '18:30 - 20:00',
      rating: 4.7,
      reviews: 189,
      available: 7,
      category: 'Panaderías',
    },
    {
      id: 9,
      businessName: 'Panadería Don Pepe',
      image: 'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGFydGlzYW4lMjBiYWtlcnl8ZW58MXx8fHwxNzY0MDU1MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pan Artesanal del Día',
      originalPrice: 28,
      discountPrice: 9,
      distance: '1.4 km',
      pickupTime: '19:00 - 21:00',
      rating: 4.8,
      reviews: 221,
      available: 5,
      category: 'Panaderías',
    },
    {
      id: 10,
      businessName: 'Café Latte Art',
      image: 'https://images.unsplash.com/photo-1631079727235-3ccfb0745c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGNhZmV8ZW58MXx8fHwxNzY0MDU1MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pack Café + Snacks',
      originalPrice: 20,
      discountPrice: 7,
      distance: '0.6 km',
      pickupTime: '17:00 - 19:00',
      rating: 4.9,
      reviews: 312,
      available: 4,
      category: 'Cafeterías',
    },
    {
      id: 11,
      businessName: 'Café Brunch & Co',
      image: 'https://images.unsplash.com/photo-1614822658430-554a10e4fed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBjYWZlJTIwYnJ1bmNofGVufDF8fHx8MTc2NDA1NTExOHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Brunch Sorpresa',
      originalPrice: 35,
      discountPrice: 12,
      distance: '1.1 km',
      pickupTime: '15:00 - 17:00',
      rating: 4.8,
      reviews: 156,
      available: 3,
      category: 'Cafeterías',
    },
    {
      id: 12,
      businessName: 'Pastelería Dulce Sabor',
      image: 'https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NjQwMzE5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tortas y Postres Variados',
      originalPrice: 32,
      discountPrice: 11,
      distance: '1.3 km',
      pickupTime: '18:00 - 20:00',
      rating: 4.9,
      reviews: 278,
      available: 5,
      category: 'Postres',
    },
    {
      id: 13,
      businessName: 'Cupcakery Delicious',
      image: 'https://images.unsplash.com/photo-1572978577765-462b91a7f9e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMHBhc3RyeXxlbnwxfHx8fDE3NjQwNTUxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Box de Cupcakes (6 unidades)',
      originalPrice: 24,
      discountPrice: 8,
      distance: '0.7 km',
      pickupTime: '19:00 - 21:00',
      rating: 4.7,
      reviews: 145,
      available: 6,
      category: 'Postres',
    },
    {
      id: 14,
      businessName: 'Heladería Artesanal',
      image: 'https://images.unsplash.com/photo-1673551494246-0ea345ddbf86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGRlc3NlcnR8ZW58MXx8fHwxNzY0MDMwNjE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pack Helado Premium (1L)',
      originalPrice: 28,
      discountPrice: 10,
      distance: '1.6 km',
      pickupTime: '20:00 - 22:00',
      rating: 4.8,
      reviews: 192,
      available: 4,
      category: 'Postres',
    },
    {
      id: 15,
      businessName: 'Donutería Sweet Ring',
      image: 'https://images.unsplash.com/photo-1618427012521-6a6d79af2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb251dHMlMjBiYWtlcnklMjBzd2VldHxlbnwxfHx8fDE3NjQwNTUxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Caja de Donuts Surtidos (12 unid)',
      originalPrice: 36,
      discountPrice: 13,
      distance: '0.4 km',
      pickupTime: '18:30 - 20:30',
      rating: 4.6,
      reviews: 167,
      available: 3,
      category: 'Postres',
    },
    {
      id: 16,
      businessName: 'Deli & Sandwiches',
      image: 'https://images.unsplash.com/photo-1666819604716-7b60a604bb76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGRlbGklMjBjYWZlfGVufDF8fHx8MTc2NDA1NTEyMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pack Sandwich + Bebida',
      originalPrice: 22,
      discountPrice: 8,
      distance: '1.0 km',
      pickupTime: '17:30 - 19:30',
      rating: 4.5,
      reviews: 98,
      available: 5,
      category: 'Cafeterías',
    },
    {
      id: 17,
      businessName: 'Panadería La Tradición',
      image: 'https://images.unsplash.com/photo-1696721497670-d57754966c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cmllc3xlbnwxfHx8fDE3NjQwNDE1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bolsa Mixta Pan Dulce y Salado',
      originalPrice: 26,
      discountPrice: 9,
      distance: '1.7 km',
      pickupTime: '20:00 - 21:30',
      rating: 4.9,
      reviews: 234,
      available: 4,
      category: 'Panaderías',
    },
    {
      id: 18,
      businessName: 'Café Espresso Bar',
      image: 'https://images.unsplash.com/photo-1631079727235-3ccfb0745c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZSUyMGNhZmV8ZW58MXx8fHwxNzY0MDU1MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pack Café Gourmet + Pastel',
      originalPrice: 18,
      discountPrice: 6,
      distance: '0.8 km',
      pickupTime: '16:00 - 18:00',
      rating: 4.7,
      reviews: 176,
      available: 6,
      category: 'Cafeterías',
    },
  ];

  const myReservations = [
    {
      id: 1,
      businessName: 'Café Verde',
      title: 'Pack de Café y Postres',
      pickupTime: 'Hoy, 18:00 - 20:00',
      price: 12,
      status: 'confirmado',
      image: 'https://images.unsplash.com/photo-1696721497670-d57754966c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cmllc3xlbnwxfHx8fDE3NjQwNDE1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredPacks = foodPacks.filter(pack => {
    const matchesCategory = selectedCategory === 'Todos' || pack.category === selectedCategory;
    const matchesSearch = pack.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pack.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const favoritePacks = foodPacks.filter(pack => favorites.includes(pack.id));

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
                  FoodSaver
                </h1>
                <p className="text-xs flex items-center gap-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  <MapPin size={12} />
                  Trujillo, Perú
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
            ¡Hola, Usuario! 👋
          </h2>
          <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Descubre ofertas increíbles cerca de ti
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setActiveTab('explorar')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'explorar' ? '#3BB273' : 'white',
                color: activeTab === 'explorar' ? 'white' : '#777777',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: activeTab === 'explorar' ? 600 : 500,
              }}
            >
              <Search size={18} />
              Explorar
            </button>
            <button
              onClick={() => setActiveTab('reservas')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'reservas' ? '#3BB273' : 'white',
                color: activeTab === 'reservas' ? 'white' : '#777777',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: activeTab === 'reservas' ? 600 : 500,
              }}
            >
              <ShoppingBag size={18} />
              Mis Reservas
              {myReservations.length > 0 && (
                <span className="px-2 py-0.5 rounded-full text-xs" style={{ backgroundColor: activeTab === 'reservas' ? 'white' : '#3BB273', color: activeTab === 'reservas' ? '#3BB273' : 'white' }}>
                  {myReservations.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('favoritos')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'favoritos' ? '#3BB273' : 'white',
                color: activeTab === 'favoritos' ? 'white' : '#777777',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: activeTab === 'favoritos' ? 600 : 500,
              }}
            >
              <Heart size={18} />
              Favoritos
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
              <User size={18} />
              Perfil
            </button>
          </div>
        </div>

        {/* Explorar Tab */}
        {activeTab === 'explorar' && (
          <>
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2" style={{ color: '#777777' }} />
                <input
                  type="text"
                  placeholder="Buscar restaurantes o comidas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#3BB273] focus:outline-none bg-white"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex gap-3 min-w-max">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="px-5 py-2 rounded-full transition-all whitespace-nowrap"
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

            {/* Food Packs Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPacks.map(pack => (
                <div key={pack.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <ImageWithFallback
                      src={pack.image}
                      alt={pack.title}
                      className="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(pack.id)}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                    >
                      <Heart
                        size={20}
                        fill={favorites.includes(pack.id) ? '#3BB273' : 'none'}
                        style={{ color: favorites.includes(pack.id) ? '#3BB273' : '#777777' }}
                      />
                    </button>
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Inter, sans-serif' }}>
                      {pack.available} disponibles
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      {pack.businessName}
                    </p>
                    <h3 className="font-bold mb-2 line-clamp-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                      {pack.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={14} fill="#FFA500" style={{ color: '#FFA500' }} />
                        <span className="text-sm font-medium" style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}>
                          {pack.rating}
                        </span>
                      </div>
                      <span className="text-xs" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                        ({pack.reviews})
                      </span>
                      <span className="text-xs" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                        • {pack.distance}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      <Clock size={14} />
                      <span>{pack.pickupTime}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-sm line-through mr-2" style={{ color: '#999999', fontFamily: 'Inter, sans-serif' }}>
                          S/ {pack.originalPrice}
                        </span>
                        <span className="text-2xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                          S/ {pack.discountPrice}
                        </span>
                      </div>
                    </div>

                    <button
                      className="w-full py-3 rounded-xl font-medium text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#3BB273', fontFamily: 'Poppins, sans-serif' }}
                    >
                      Reservar ahora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Reservas Tab */}
        {activeTab === 'reservas' && (
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Mis Reservas Activas
            </h3>
            {myReservations.length > 0 ? (
              <div className="space-y-4">
                {myReservations.map(reservation => (
                  <div key={reservation.id} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4">
                    <ImageWithFallback
                      src={reservation.image}
                      alt={reservation.title}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                        {reservation.businessName}
                      </p>
                      <h4 className="font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                        {reservation.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm mb-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                        <Clock size={14} />
                        <span>{reservation.pickupTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                          S/ {reservation.price}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Inter, sans-serif' }}>
                          ✓ Confirmado
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center">
                <ShoppingBag size={64} className="mx-auto mb-4" style={{ color: '#E5E5E5' }} />
                <p className="text-lg mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  No tienes reservas activas
                </p>
                <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Explora las ofertas disponibles y haz tu primera reserva
                </p>
              </div>
            )}
          </div>
        )}

        {/* Favoritos Tab */}
        {activeTab === 'favoritos' && (
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Mis Favoritos
            </h3>
            {favoritePacks.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favoritePacks.map(pack => (
                  <div key={pack.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <ImageWithFallback
                        src={pack.image}
                        alt={pack.title}
                        className="w-full h-48 object-cover"
                      />
                      <button
                        onClick={() => toggleFavorite(pack.id)}
                        className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                      >
                        <Heart size={20} fill="#3BB273" style={{ color: '#3BB273' }} />
                      </button>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                        {pack.businessName}
                      </p>
                      <h3 className="font-bold mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                        {pack.title}
                      </h3>
                      <span className="text-2xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                        S/ {pack.discountPrice}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center">
                <Heart size={64} className="mx-auto mb-4" style={{ color: '#E5E5E5' }} />
                <p className="text-lg mb-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  No tienes favoritos aún
                </p>
                <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  Guarda tus packs favoritos para encontrarlos fácilmente
                </p>
              </div>
            )}
          </div>
        )}

        {/* Perfil Tab */}
        {activeTab === 'perfil' && (
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Mi Perfil
            </h3>
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl" style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                  U
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-1" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    Usuario Demo
                  </h4>
                  <p style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    usuario@foodsaver.com
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                  <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    Comidas salvadas
                  </p>
                  <p className="text-3xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                    12
                  </p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                  <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    Dinero ahorrado
                  </p>
                  <p className="text-3xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                    S/ 360
                  </p>
                </div>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F7F3E9' }}>
                  <p className="text-sm mb-1" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    CO₂ evitado
                  </p>
                  <p className="text-3xl font-bold" style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif' }}>
                    24 kg
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full py-4 rounded-xl font-medium hover:opacity-90 transition-opacity" 
              style={{ backgroundColor: '#FF4444', color: 'white', fontFamily: 'Poppins, sans-serif' }}
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              ¿Estás seguro de que quieres cerrar sesión?
            </h4>
            <p className="text-sm mb-6" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Esta acción cerrará tu sesión actual.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#E5E5E5', color: '#333333', fontFamily: 'Poppins, sans-serif' }}
              >
                Cancelar
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#FF4444', color: 'white', fontFamily: 'Poppins, sans-serif' }}
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