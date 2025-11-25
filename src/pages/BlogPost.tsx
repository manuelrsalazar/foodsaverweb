import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface BlogPostProps {
  onNavigate?: (page: string) => void;
  postId?: number;
}

const blogPostsData = [
  {
    id: 1,
    title: 'El impacto real del desperdicio de alimentos en el planeta',
    author: 'María González',
    date: '15 de noviembre, 2025',
    readTime: '5 min lectura',
    category: 'Sostenibilidad',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    content: `
      <p>Cada año se desperdician aproximadamente 1.3 mil millones de toneladas de comida en todo el mundo. Esta cifra alarmante no solo representa una pérdida económica masiva, sino que también tiene un impacto devastador en nuestro planeta.</p>
      
      <h2>El costo ambiental del desperdicio</h2>
      <p>Cuando los alimentos terminan en vertederos, se descomponen y producen metano, un gas de efecto invernadero 25 veces más potente que el dióxido de carbono. Si el desperdicio de alimentos fuera un país, sería el tercer mayor emisor de gases de efecto invernadero del mundo, solo superado por Estados Unidos y China.</p>
      
      <h2>Recursos desperdiciados</h2>
      <p>Detrás de cada alimento desperdiciado hay un uso innecesario de:</p>
      <ul>
        <li>Agua: Se estima que se desperdician 250 km³ de agua anualmente</li>
        <li>Tierra: 1.4 mil millones de hectáreas de tierra agrícola</li>
        <li>Energía: Desde la producción hasta el transporte</li>
        <li>Trabajo humano: Miles de horas de labor agrícola</li>
      </ul>
      
      <h2>Cómo podemos hacer la diferencia</h2>
      <p>Como consumidores individuales, tenemos el poder de cambiar esta situación. Pequeñas acciones como comprar solo lo necesario, almacenar correctamente los alimentos, y aprovechar plataformas como FoodSaver para rescatar comida que de otro modo se desperdiciaría, pueden generar un impacto significativo.</p>
      
      <p>Cada comida rescatada es un paso hacia un futuro más sostenible. Juntos, podemos reducir el desperdicio, proteger nuestro planeta y crear un sistema alimentario más justo para todos.</p>
    `,
  },
  {
    id: 2,
    title: 'Cómo ahorrar dinero mientras cuidas el medio ambiente',
    author: 'Carlos Ramírez',
    date: '10 de noviembre, 2025',
    readTime: '4 min lectura',
    category: 'Ahorro',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    content: `
      <p>La sostenibilidad y el ahorro económico van de la mano. Comprar comida del día no solo reduce el desperdicio alimentario, sino que también puede ayudarte a ahorrar hasta un 50% en tus gastos mensuales de alimentación.</p>
      
      <h2>El poder del ahorro inteligente</h2>
      <p>Una familia promedio puede gastar entre S/ 800 y S/ 1,200 mensuales en alimentos. Al utilizar plataformas como FoodSaver, este gasto puede reducirse significativamente sin sacrificar calidad ni variedad.</p>
      
      <h2>Estrategias para maximizar tu ahorro</h2>
      <ul>
        <li><strong>Planifica tus comidas:</strong> Revisa las ofertas disponibles y planifica tu menú semanal</li>
        <li><strong>Sé flexible:</strong> Estar abierto a diferentes opciones te permite aprovechar las mejores ofertas</li>
        <li><strong>Recoge a tiempo:</strong> Aprovecha las franjas horarias para obtener los mejores precios</li>
        <li><strong>Comparte con amigos:</strong> Algunas porciones son ideales para compartir y dividir costos</li>
      </ul>
      
      <h2>Más allá del ahorro económico</h2>
      <p>Los beneficios van más allá del dinero. Al comprar comida del día, estás:</p>
      <ul>
        <li>Reduciendo tu huella de carbono</li>
        <li>Apoyando a negocios locales</li>
        <li>Contribuyendo a una economía circular</li>
        <li>Siendo parte de una comunidad consciente</li>
      </ul>
      
      <p>El ahorro consciente es una victoria triple: para tu bolsillo, para el planeta y para la comunidad.</p>
    `,
  },
  {
    id: 3,
    title: '5 restaurantes en Trujillo liderando la lucha contra el desperdicio',
    author: 'Laura Flores',
    date: '5 de noviembre, 2025',
    readTime: '6 min lectura',
    category: 'Comunidad',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    content: `
      <p>En Trujillo, varios restaurantes están liderando el cambio hacia un sistema alimentario más sostenible. Conoce a estos negocios que están marcando la diferencia en nuestra ciudad.</p>
      
      <h2>1. El Jardín Verde</h2>
      <p>Este restaurante vegetariano ha reducido su desperdicio en un 70% desde que se unió a FoodSaver. "Es increíble ver cómo la comunidad valora nuestros esfuerzos", comenta la propietaria.</p>
      
      <h2>2. Marisquería La Costa</h2>
      <p>Especializado en pescados y mariscos frescos, este negocio ha encontrado en FoodSaver la forma perfecta de ofrecer sus excedentes del día sin perder calidad.</p>
      
      <h2>3. Panadería Artesanal San Martín</h2>
      <p>Con más de 30 años de tradición, esta panadería ahora ofrece su pan del día a precios reducidos, garantizando que cada pieza encuentre un hogar.</p>
      
      <h2>4. Café Literario</h2>
      <p>Este acogedor café ha integrado la sostenibilidad en su modelo de negocio, ofreciendo pasteles y sándwiches del día que de otro modo se desperdiciarían.</p>
      
      <h2>5. Restaurante Fusión Perú-Nikkei</h2>
      <p>Con platos de alta cocina, este restaurante demuestra que la sostenibilidad y la gastronomía de primer nivel pueden ir de la mano.</p>
      
      <h2>Cómo puedes apoyarlos</h2>
      <p>Cada vez que compras a través de FoodSaver, estás apoyando a estos negocios locales y su compromiso con la sostenibilidad. Además, estás disfrutando de comida deliciosa a precios increíbles.</p>
    `,
  },
];

export function BlogPost({ onNavigate, postId = 1 }: BlogPostProps) {
  const post = blogPostsData.find(p => p.id === postId) || blogPostsData[0];

  const handleShare = (platform: string) => {
    // Simulación de compartir en redes sociales
    alert(`¡Artículo compartido en ${platform}!`);
  };

  return (
    <div className="pt-16 min-h-screen" style={{ backgroundColor: '#F7F3E9' }}>
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate?.('blog')}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          style={{ color: '#3BB273', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
        >
          <ArrowLeft size={20} />
          Volver al blog
        </button>
      </div>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          {/* Category Badge */}
          <div
            className="inline-block px-4 py-2 rounded-full text-sm mb-6"
            style={{ backgroundColor: '#DFF5E5', color: '#3BB273', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
          >
            {post.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif', lineHeight: '1.2' }}>
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              <User size={18} style={{ color: '#3BB273' }} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              <Calendar size={18} style={{ color: '#3BB273' }} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              <Clock size={18} style={{ color: '#3BB273' }} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none"
            style={{ fontFamily: 'Inter, sans-serif', color: '#333333', lineHeight: '1.8' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="mb-4 flex items-center gap-2" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              <Share2 size={20} style={{ color: '#3BB273' }} />
              Compartir este artículo
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleShare('Facebook')}
                className="p-3 rounded-full hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#1877F2' }}
              >
                <Facebook size={20} color="white" />
              </button>
              <button
                onClick={() => handleShare('Twitter')}
                className="p-3 rounded-full hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#1DA1F2' }}
              >
                <Twitter size={20} color="white" />
              </button>
              <button
                onClick={() => handleShare('LinkedIn')}
                className="p-3 rounded-full hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#0A66C2' }}
              >
                <Linkedin size={20} color="white" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-white rounded-3xl p-8 text-center shadow-lg" style={{ backgroundColor: '#DFF5E5' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#333333', fontFamily: 'Poppins, sans-serif' }}>
            ¿Listo para empezar a rescatar comida?
          </h3>
          <p className="mb-6" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
            Descarga la app y únete a la comunidad de FoodSaver
          </p>
          <button
            onClick={() => onNavigate?.('descargar')}
            className="px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#3BB273', color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
          >
            Descargar App
          </button>
        </div>
      </article>
    </div>
  );
}