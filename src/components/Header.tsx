import React, { useState, useRef } from 'react';
import { Menu, X, MessageCircle, ChevronDown, ArrowRight, Globe, Palette, Share2, Target } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('web');
  const [expandedMobileService, setExpandedMobileService] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const servicios = {
    web: {
      title: 'Servicios Web',
      icon: Globe,
      gradient: 'from-cyan-400 to-blue-500',
      items: [
        { name: 'E-commerce', desc: 'Tiendas online que convierten visitantes en ventas', color: '#00FFCC', features: ['Pasarela de pagos', 'Gestión de inventario', 'Analytics avanzado'] },
        { name: 'Landing Pages', desc: 'Páginas optimizadas para máxima conversión', color: '#BBF84C', features: ['A/B Testing', 'Formularios inteligentes', 'SEO optimizado'] },
        { name: 'Apps Web', desc: 'Aplicaciones web escalables y modernas', color: '#5285E8', features: ['PWA', 'Responsive design', 'API integrations'] }
      ]
    },
    creativos: {
      title: 'Creativos',
      icon: Palette,
      gradient: 'from-pink-400 to-purple-500',
      items: [
        { name: 'Videos', desc: 'Contenido audiovisual que conecta y convierte', color: '#FF6B6B', features: ['Motion graphics', 'Edición profesional', 'Storytelling'] },
        { name: 'Diseño Gráfico', desc: 'Identidad visual que marca la diferencia', color: '#4ECDC4', features: ['Branding', 'Diseño editorial', 'Packaging'] },
        { name: 'Fotografía', desc: 'Imágenes que cuentan tu historia', color: '#45B7D1', features: ['Fotografía de producto', 'Retratos corporativos', 'Eventos'] }
      ]
    },
    social: {
      title: 'Redes Sociales',
      icon: Share2,
      gradient: 'from-green-400 to-blue-500',
      items: [
        { name: 'Instagram', desc: 'Estrategia visual que genera engagement real', color: '#E1306C', features: ['Content strategy', 'Stories & Reels', 'Influencer marketing'] },
        { name: 'Facebook', desc: 'Construcción de comunidad y conversiones', color: '#1877F2', features: ['Community management', 'Facebook Ads', 'Lead generation'] },
        { name: 'TikTok', desc: 'Contenido viral que impulsa tu marca', color: '#000000', features: ['Trend analysis', 'Video viral', 'Creator partnerships'] }
      ]
    },
    ads: {
      title: 'Publicidad Digital',
      icon: Target,
      gradient: 'from-orange-400 to-red-500',
      items: [
        { name: 'Facebook Ads', desc: 'Campañas con ROI comprobado y escalable', color: '#1877F2', features: ['Pixel optimization', 'Lookalike audiences', 'Retargeting'] },
        { name: 'Google Ads', desc: 'Domina los resultados de búsqueda', color: '#4285F4', features: ['Keyword research', 'Quality Score', 'Shopping ads'] },
        { name: 'Campañas 360°', desc: 'Estrategia integral multicanal', color: '#FF9500', features: ['Cross-platform', 'Attribution modeling', 'Marketing automation'] }
      ]
    }
  };

  const handleDropdownEnter = () => {
    setActiveDropdown('servicios');
  };

  const handleDropdownLeave = (e: React.MouseEvent) => {
    const rect = menuRef.current?.getBoundingClientRect();
    if (rect && (e.clientY < rect.top - 20 || e.clientY > rect.bottom + 20 || e.clientX < rect.left - 20 || e.clientX > rect.right + 20)) {
      setActiveDropdown(null);
    }
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        .header {
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
          width: calc(100% - 40px); max-width: 1400px; z-index: 1000;
          background: linear-gradient(135deg, #151931 0%, #1e2951 100%);
          border-radius: 25px; border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
        }
        
        .header::before {
          content: ''; position: absolute; inset: 0; border-radius: 25px;
          background: linear-gradient(135deg, rgba(0,255,204,0.1) 0%, rgba(187,248,76,0.1) 100%);
          opacity: 0; transition: opacity 0.3s;
        }
        
        .header:hover::before { opacity: 1; }
        
        .header-content {
          padding: 0 2rem; display: flex; justify-content: space-between; 
          align-items: center; height: 4.5rem; position: relative;
        }
        
        .logo { display: flex; align-items: center; gap: 0.75rem; }
        .logo-icon {
          width: 2.5rem; height: 2.5rem; background: linear-gradient(135deg, #00FFCC 0%, #BBF84C 100%);
          border-radius: 12px; display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 1.2rem; color: #151931; box-shadow: 0 4px 12px rgba(0,255,204,0.3);
        }
        
        .logo-text { color: white; font-size: 1.4rem; font-weight: 700; }
        .logo-sub { color: rgba(255,255,255,0.7); font-size: 0.7rem; font-weight: 500; }
        
        .nav { display: none; align-items: center; gap: 2.5rem; }
        @media (min-width: 1024px) { .nav { display: flex; } }
        
        .nav-link {
          color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 500;
          transition: all 0.3s; position: relative; font-size: 0.95rem;
        }
        
        .nav-link::after {
          content: ''; position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);
          width: 0; height: 2px; background: linear-gradient(90deg, #00FFCC, #BBF84C);
          transition: width 0.3s;
        }
        
        .nav-link:hover { color: #00FFCC; }
        .nav-link:hover::after { width: 100%; }
        
        .dropdown { position: relative; }
        .dropdown-btn {
          background: none; border: none; color: rgba(255,255,255,0.9); font-weight: 500;
          display: flex; align-items: center; gap: 0.5rem; cursor: pointer;
          transition: all 0.3s; font-size: 0.95rem; position: relative;
        }
        
        .dropdown-btn::after {
          content: ''; position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);
          width: 0; height: 2px; background: linear-gradient(90deg, #00FFCC, #BBF84C);
          transition: width 0.3s;
        }
        
        .dropdown-btn:hover { color: #00FFCC; }
        .dropdown-btn:hover::after { width: 100%; }
        
        .mega-menu {
          position: absolute; top: calc(100% + 15px); left: -200px; width: 900px;
          background: white; border-radius: 20px; overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1);
          display: flex; height: 420px; opacity: 0; transform: translateY(-10px);
          animation: slideIn 0.3s ease forwards;
        }
        
        @keyframes slideIn {
          to { opacity: 1; transform: translateY(0); }
        }
        
        .mega-sidebar {
          width: 240px; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 1.5rem 0; border-right: 1px solid #e2e8f0;
        }
        
        .mega-category {
          padding: 1rem 1.5rem; cursor: pointer; transition: all 0.3s;
          border-left: 3px solid transparent; position: relative; margin: 0.25rem 0;
        }
        
        .mega-category::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 0;
          background: linear-gradient(135deg, #00FFCC, #BBF84C); transition: width 0.3s;
        }
        
        .mega-category:hover::before { width: 3px; }
        .mega-category.active::before { width: 3px; }
        
        .mega-category:hover { background: rgba(0,255,204,0.05); }
        .mega-category.active { background: rgba(0,255,204,0.1); }
        
        .category-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
        .category-icon { color: #00FFCC; }
        .category-title { font-weight: 600; color: #1e293b; font-size: 0.95rem; }
        .category-desc { font-size: 0.8rem; color: #64748b; }
        
        .mega-content {
          flex: 1; padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;
          max-height: 420px; overflow-y: auto;
        }
        
        .mega-content::-webkit-scrollbar { width: 6px; }
        .mega-content::-webkit-scrollbar-track { background: #f1f5f9; }
        .mega-content::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
        
        .content-header { margin-bottom: 1rem; }
        .content-header h3 {
          font-size: 1.8rem; font-weight: 700; color: #1e293b; margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .content-header p { color: #64748b; font-size: 1rem; }
        
        .services-grid { display: grid; gap: 1.5rem; }
        
        .service-card {
          padding: 1.5rem; border-radius: 16px; border: 1px solid #e2e8f0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); cursor: pointer; 
          position: relative; overflow: hidden; background: white;
        }
        
        .service-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: var(--accent-color); transform: scaleX(0); transition: transform 0.3s;
        }
        
        .service-card:hover::before { transform: scaleX(1); }
        
        .service-card:hover {
          transform: translateY(-8px); 
          box-shadow: 0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px var(--accent-color);
        }
        
        .service-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
        .service-title { font-weight: 700; color: #1e293b; font-size: 1.1rem; }
        .service-badge { 
          padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.75rem; font-weight: 600;
          background: var(--accent-color); color: white; opacity: 0.9;
        }
        
        .service-desc { color: #64748b; font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.5; }
        
        .service-features { margin-bottom: 1rem; }
        .service-features ul { list-style: none; }
        .service-features li {
          font-size: 0.8rem; color: #64748b; margin-bottom: 0.25rem;
          position: relative; padding-left: 1rem;
        }
        .service-features li::before {
          content: '✓'; position: absolute; left: 0; color: var(--accent-color); font-weight: bold;
        }
        
        .service-cta {
          color: var(--accent-color); font-weight: 600; font-size: 0.9rem;
          display: flex; align-items: center; gap: 0.5rem; transition: gap 0.3s;
        }
        
        .service-card:hover .service-cta { gap: 0.75rem; }
        
        .whatsapp-btn {
          display: none; align-items: center; gap: 0.5rem;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); 
          color: white; padding: 0.75rem 1.5rem; border-radius: 15px; 
          text-decoration: none; font-weight: 600; transition: all 0.3s;
          box-shadow: 0 4px 12px rgba(37,211,102,0.3);
        }
        @media (min-width: 1024px) { .whatsapp-btn { display: flex; } }
        .whatsapp-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(37,211,102,0.4); }
        
        .mobile-btn {
          display: block; background: none; border: none; color: white; padding: 0.5rem;
          border-radius: 10px; transition: background 0.3s;
        }
        .mobile-btn:hover { background: rgba(255,255,255,0.1); }
        @media (min-width: 1024px) { .mobile-btn { display: none; } }
        
        .mobile-menu {
          position: fixed; inset: 0; z-index: 40; background: rgba(0,0,0,0.6);
          backdrop-filter: blur(5px);
        }
        
        .mobile-content {
          position: absolute; right: 0; top: 0; height: 100%; width: 22rem;
          background: linear-gradient(135deg, #151931 0%, #1e2951 100%);
          padding: 6rem 2rem 2rem; overflow-y: auto;
        }
        
        .mobile-header {
          text-align: center; margin-bottom: 2rem; padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        .mobile-header h2 { 
          color: white; font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem;
        }
        .mobile-header p { color: rgba(255,255,255,0.7); font-size: 0.9rem; }
        
        .mobile-nav { display: flex; flex-direction: column; gap: 0.5rem; }
        .mobile-link {
          color: white; text-decoration: none; padding: 1rem;
          font-weight: 500; transition: all 0.3s; border-radius: 12px;
        }
        .mobile-link:hover { background: rgba(255,255,255,0.1); color: #00FFCC; }
        
        .mobile-services { margin: 1rem 0; }
        .mobile-service-header {
          display: flex; justify-content: space-between; align-items: center;
          color: white; font-weight: 600; padding: 1rem; cursor: pointer;
          border-radius: 12px; background: rgba(255,255,255,0.05);
          transition: background 0.3s;
        }
        .mobile-service-header:hover { background: rgba(255,255,255,0.1); }
        
        .mobile-service-content {
          max-height: 0; overflow: hidden; transition: max-height 0.3s ease;
          background: rgba(255,255,255,0.02); border-radius: 0 0 12px 12px;
        }
        .mobile-service-content.expanded { max-height: 500px; }
        
        .mobile-category {
          padding: 0.75rem 1rem; border-left: 2px solid transparent;
          transition: border-color 0.3s; cursor: pointer;
        }
        .mobile-category:hover { border-left-color: #00FFCC; }
        
        .mobile-category-title { color: #00FFCC; font-weight: 600; margin-bottom: 0.5rem; }
        .mobile-service-item { 
          color: rgba(255,255,255,0.8); font-size: 0.85rem; 
          padding: 0.25rem 0; margin-left: 1rem;
        }
        
        .mobile-whatsapp {
          margin-top: 2rem; padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.2);
        }
        .mobile-whatsapp-btn {
          display: flex; align-items: center; justify-content: center; gap: 0.75rem;
          width: 100%; padding: 1rem; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: white; border-radius: 15px; text-decoration: none; font-weight: 600;
          box-shadow: 0 4px 12px rgba(37,211,102,0.3); transition: transform 0.3s;
        }
        .mobile-whatsapp-btn:hover { transform: translateY(-2px); }
        
        @media (max-width: 1023px) {
          .header { top: 10px; width: calc(100% - 20px); }
          .header-content { padding: 0 1rem; height: 4rem; }
          .logo-text { font-size: 1.2rem; }
        }
      `}</style>

      <header className="header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">P</div>
            <div>
              <div className="logo-text">Pixxels</div>
              <div className="logo-sub">DIGITAL AGENCY</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#home" className="nav-link">Inicio</a>
            <a href="#nosotros" className="nav-link">Nosotros</a>
            
            <div 
              className="dropdown"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              ref={menuRef}
            >
              <button className="dropdown-btn">
                Servicios <ChevronDown size={16} />
              </button>

              {activeDropdown === 'servicios' && (
                <div className="mega-menu">
                  <div className="mega-sidebar">
                    {Object.entries(servicios).map(([key, category]) => {
                      const IconComponent = category.icon;
                      return (
                        <div
                          key={key}
                          className={`mega-category ${activeCategory === key ? 'active' : ''}`}
                          onMouseEnter={() => setActiveCategory(key)}
                        >
                          <div className="category-header">
                            <IconComponent size={18} className="category-icon" />
                            <div className="category-title">{category.title}</div>
                          </div>
                          <div className="category-desc">Soluciones especializadas</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mega-content">
                    <div className="content-header">
                      <h3>{servicios[activeCategory]?.title}</h3>
                      <p>Descubre nuestras soluciones especializadas que transforman negocios</p>
                    </div>

                    <div className="services-grid">
                      {servicios[activeCategory]?.items.map((service, index) => (
                        <div 
                          key={index} 
                          className="service-card"
                          style={{'--accent-color': service.color} as React.CSSProperties}
                        >
                          <div className="service-header">
                            <div className="service-title">{service.name}</div>
                            <div className="service-badge">Premium</div>
                          </div>
                          <div className="service-desc">{service.desc}</div>
                          <div className="service-features">
                            <ul>
                              {service.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="service-cta">
                            Ver más <ArrowRight size={14} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#contactanos" className="nav-link">Contáctanos</a>
            <a href="#clientes" className="nav-link">Clientes</a>
          </nav>

          <a href="https://wa.me/595123456789" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            <MessageCircle size={18} />
            ¿Escribimos?
          </a>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-btn">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-content" onClick={e => e.stopPropagation()}>
            <div className="mobile-header">
              <h2>Pixxels</h2>
              <p>Digital Agency</p>
            </div>

            <nav className="mobile-nav">
              <a href="#home" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
              <a href="#nosotros" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>

              <div className="mobile-services">
                <div 
                  className="mobile-service-header"
                  onClick={() => setExpandedMobileService(expandedMobileService === 'servicios' ? null : 'servicios')}
                >
                  <span>Servicios</span>
                  <ChevronDown size={16} style={{transform: expandedMobileService === 'servicios' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s'}} />
                </div>
                <div className={`mobile-service-content ${expandedMobileService === 'servicios' ? 'expanded' : ''}`}>
                  {Object.entries(servicios).map(([key, category]) => (
                    <div key={key} className="mobile-category">
                      <div className="mobile-category-title">{category.title}</div>
                      {category.items.map((service, index) => (
                        <div key={index} className="mobile-service-item">{service.name}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <a href="#contactanos" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Contáctanos</a>
              <a href="#clientes" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Clientes</a>
            </nav>

            <div className="mobile-whatsapp">
              <a href="https://wa.me/595123456789" target="_blank" rel="noopener noreferrer" className="mobile-whatsapp-btn">
                <MessageCircle size={18} />
                ¿Escribimos?
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;