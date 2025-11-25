import { useState } from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'El impacto real del desperdicio de alimentos en el planeta',
    excerpt: 'Cada año se desperdician 1.3 mil millones de toneladas de comida en el mundo. Descubre cómo pequeñas acciones pueden generar grandes cambios.',
    author: 'María González',
    date: '15 de noviembre, 2025',
    readTime: '5 min lectura',
    category: 'Sostenibilidad',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
  },
  {
    id: 2,
    title: 'Cómo ahorrar dinero mientras cuidas el medio ambiente',
    excerpt: 'Comprar comida del día no solo reduce el desperdicio, también puede ahorrarte hasta un 50% en tus gastos de alimentación mensuales.',
    author: 'Carlos Ramírez',
    date: '10 de noviembre, 2025',
    readTime: '4 min lectura',
    category: 'Ahorro',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
  },
  {
    id: 3,
    title: '5 restaurantes en Trujillo liderando la lucha contra el desperdicio',
    excerpt: 'Conoce a los negocios locales que están marcando la diferencia en nuestra ciudad y cómo puedes apoyarlos.',
    author: 'Laura Flores',
    date: '5 de noviembre, 2025',
    readTime: '6 min lectura',
    category: 'Comunidad',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
  {
    id: 4,
    title: 'La historia detrás de FoodSaver: De una idea a una comunidad',
    excerpt: 'Descubre cómo nació FoodSaver y cómo hemos crecido hasta conectar a miles de usuarios con negocios locales comprometidos.',
    author: 'Equipo FoodSaver',
    date: '1 de noviembre, 2025',
    readTime: '7 min lectura',
    category: 'Historia',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    id: 5,
    title: 'Consejos para conservar alimentos y reducir desperdicio en casa',
    excerpt: 'Tips prácticos para almacenar correctamente tus alimentos, extender su vida útil y evitar que terminen en la basura.',
    author: 'Laura Sánchez',
    date: '28 de octubre, 2025',
    readTime: '5 min lectura',
    category: 'Consejos',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80',
  },
  {
    id: 6,
    title: 'El papel de la tecnología en la sostenibilidad alimentaria',
    excerpt: 'Cómo las apps y plataformas digitales están revolucionando la forma en que consumimos y compartimos alimentos.',
    author: 'Pedro Martínez',
    date: '22 de octubre, 2025',
    readTime: '6 min lectura',
    category: 'Tecnología',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80',
  },
];

const categories = ['Todos', 'Sostenibilidad', 'Ahorro', 'Comunidad', 'Historia', 'Consejos', 'Tecnología'];

interface BlogProps {
  onNavigate?: (page: string) => void;
}

export function Blog({ onNavigate }: BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleReadPost = (postId: number) => {
    // En una aplicación real, pasaríamos el ID del post
    // Por ahora, navegamos a una página genérica de artículo
    if (onNavigate) {
      onNavigate('blog-post');
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts.slice(1) 
    : blogPosts.slice(1).filter(post => post.category === selectedCategory);

  return (
    <div style={{ backgroundColor: '#F7F3E9' }}>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            Blog de FoodSaver
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Historias, consejos y novedades sobre sostenibilidad alimentaria, ahorro y comunidad
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2 rounded-full transition-all hover:opacity-90"
                style={{
                  backgroundColor: category === selectedCategory ? '#3BB273' : 'white',
                  color: category === selectedCategory ? 'white' : '#777777',
                  fontFamily: 'Inter, sans-serif',
                  border: category === selectedCategory ? 'none' : '1px solid #E5E5E5',
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute top-4 left-4 px-4 py-1 rounded-full text-sm"
                  style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Inter, sans-serif' }}
                >
                  Destacado
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs mb-4 self-start"
                  style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Inter, sans-serif' }}
                >
                  {blogPosts[0].category}
                </div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                  {blogPosts[0].title}
                </h2>
                <p className="mb-6" style={{ color: '#777777', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                  <div className="flex items-center gap-2">
                    <User size={16} style={{ color: '#3BB273' }} />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} style={{ color: '#3BB273' }} />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} style={{ color: '#3BB273' }} />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleReadPost(blogPosts[0].id)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full self-start hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                >
                  Leer artículo
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs"
                    style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Inter, sans-serif' }}
                  >
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm" style={{ color: '#777777', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                    <div className="flex items-center gap-1">
                      <User size={14} style={{ color: '#3BB273' }} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} style={{ color: '#3BB273' }} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
                      {post.date}
                    </span>
                    <button
                      className="flex items-center gap-1 text-sm hover:gap-2 transition-all"
                      style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                      onClick={() => handleReadPost(post.id)}
                    >
                      Leer más
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-center shadow-sm">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
              Suscríbete a nuestro newsletter
            </h2>
            <p className="mb-8" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              Recibe las últimas novedades, consejos y artículos directamente en tu correo
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-3 rounded-full border-2 focus:outline-none focus:border-green-500"
                style={{ borderColor: '#E5E5E5', fontFamily: 'Inter, sans-serif' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="px-8 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
                onClick={handleSubscribe}
              >
                Suscribirme
              </button>
            </div>
            {subscribed && (
              <p className="mt-4 text-sm text-green-500" style={{ fontFamily: 'Inter, sans-serif' }}>
                ¡Gracias por suscribirte! Recibirás novedades pronto.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}