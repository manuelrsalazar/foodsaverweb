import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Inicio } from './pages/Inicio';
import { ParaNegocios } from './pages/ParaNegocios';
import { Impacto } from './pages/Impacto';
import { DescargarApp } from './pages/DescargarApp';
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { TerminosCondiciones } from './pages/TerminosCondiciones';
import { PoliticaPrivacidad } from './pages/PoliticaPrivacidad';
import { Blog } from './pages/Blog';
import { CentroAyuda } from './pages/CentroAyuda';
import { PreguntasFrecuentes } from './pages/PreguntasFrecuentes';
import { Contacto } from './pages/Contacto';
import { RegistrarNegocio } from './pages/RegistrarNegocio';
import { DemoNegocios } from './pages/DemoNegocios';
import { BlogPost } from './pages/BlogPost';
import { DashboardUsuario } from './pages/DashboardUsuario';
import { DashboardNegocio } from './pages/DashboardNegocio';

export default function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio onNavigate={setCurrentPage} />;
      case 'para-negocios':
        return <ParaNegocios onNavigate={setCurrentPage} />;
      case 'impacto':
        return <Impacto />;
      case 'descargar':
        return <DescargarApp />;
      case 'login':
        return <Login onNavigate={setCurrentPage} />;
      case 'registro':
        return <Registro onNavigate={setCurrentPage} />;
      case 'terminos':
        return <TerminosCondiciones />;
      case 'privacidad':
        return <PoliticaPrivacidad />;
      case 'blog':
        return <Blog onNavigate={setCurrentPage} />;
      case 'centro-ayuda':
        return <CentroAyuda onNavigate={setCurrentPage} />;
      case 'faq':
        return <PreguntasFrecuentes onNavigate={setCurrentPage} />;
      case 'contacto':
        return <Contacto onNavigate={setCurrentPage} />;
      case 'registrar-negocio':
        return <RegistrarNegocio onNavigate={setCurrentPage} />;
      case 'demo-negocios':
        return <DemoNegocios onNavigate={setCurrentPage} />;
      case 'blog-post':
        return <BlogPost onNavigate={setCurrentPage} />;
      case 'dashboard-usuario':
        return <DashboardUsuario onNavigate={setCurrentPage} />;
      case 'dashboard-negocio':
        return <DashboardNegocio onNavigate={setCurrentPage} />;
      default:
        return <Inicio />;
    }
  };

  // Ocultar Navbar y Footer en los dashboards
  const hideChromePages = ['dashboard-usuario', 'dashboard-negocio'];
  const shouldShowChrome = !hideChromePages.includes(currentPage);

  return (
    <div className="min-h-screen bg-white">
      {shouldShowChrome && <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />}
      {renderPage()}
      {shouldShowChrome && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
}