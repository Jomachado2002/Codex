import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const services = {
    'Servicios Web': [
      { name: 'E-commerce', href: '#ecommerce' },
      { name: 'Landing Page', href: '#landing' }
    ],
    'Creativos': [
      { name: 'Videos', href: '#videos' },
      { name: 'Imágenes', href: '#imagenes' }
    ],
    'Redes Sociales': [
      { name: 'Instagram', href: '#instagram' },
      { name: 'Facebook', href: '#facebook' },
      { name: 'TikTok', href: '#tiktok' }
    ],
    'Campañas Publicitarias': [
      { name: 'Facebook Ads', href: '#facebook-ads' }
    ]
  };

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Header Desktop */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#151931] border-b border-white/10">
        <div className="w-full px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo - Izquierda */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#151931] font-bold text-2xl">P</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Pixxels</h1>
                <p className="text-white/70 text-xs">DIGITAL AGENCY</p>
              </div>
            </div>

            {/* Navegación Central - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white font-medium hover:text-[#00FFCC] transition-colors duration-300"
              >
                Inicio
              </a>
              
              <a
                href="#nosotros"
                className="text-white font-medium hover:text-[#00FFCC] transition-colors duration-300"
              >
                Nosotros
              </a>

              {/* Servicios con Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('servicios')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center space-x-1 text-white font-medium hover:text-[#00FFCC] transition-colors duration-300">
                  <span>Servicios</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeDropdown === 'servicios' ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown de Servicios */}
                <AnimatePresence>
                  {activeDropdown === 'servicios' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                    >
                      <div className="grid grid-cols-2 gap-4 px-4">
                        {Object.entries(services).map(([category, items]) => (
                          <div key={category} className="space-y-2">
                            <h3 className="font-semibold text-[#151931] text-sm border-b border-gray-200 pb-1">
                              {category}
                            </h3>
                            {items.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block text-gray-600 hover:text-[#00FFCC] transition-colors duration-200 text-sm py-1"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#contactanos"
                className="text-white font-medium hover:text-[#00FFCC] transition-colors duration-300"
              >
                Contáctanos
              </a>

              <a
                href="#clientes"
                className="text-white font-medium hover:text-[#00FFCC] transition-colors duration-300"
              >
                Clientes
              </a>
            </nav>

            {/* WhatsApp Button - Derecha Desktop */}
            <div className="hidden lg:block">
              <a
                href="https://wa.me/595123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#1ea952] transition-colors duration-300"
              >
                <MessageCircle size={18} />
                <span>¿Escribimos?</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-[#151931] border-l border-white/10"
            >
              <div className="pt-24 px-6">
                {/* Mobile Logo */}
                <div className="text-center mb-8 pb-6 border-b border-white/20">
                  <h2 className="text-2xl font-bold text-white mb-1">Pixxels</h2>
                  <p className="text-white/70 text-sm">DIGITAL AGENCY</p>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  <a
                    href="#home"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-white font-medium hover:text-[#00FFCC] transition-colors duration-300"
                  >
                    Inicio
                  </a>
                  
                  <a
                    href="#nosotros"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-white font-medium hover:text-[#00FFCC] transition-colors duration-300"
                  >
                    Nosotros
                  </a>

                  {/* Mobile Servicios */}
                  <div className="space-y-3">
                    <div className="py-3 text-white font-medium border-b border-white/20">
                      Servicios
                    </div>
                    
                    {Object.entries(services).map(([category, items]) => (
                      <div key={category} className="ml-4 space-y-2">
                        <h4 className="text-[#00FFCC] font-medium text-sm">{category}</h4>
                        {items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-white/80 hover:text-white transition-colors duration-300 text-sm ml-4 py-1"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contactanos"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-white font-medium hover:text-[#00FFCC] transition-colors duration-300"
                  >
                    Contáctanos
                  </a>

                  <a
                    href="#clientes"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-white font-medium hover:text-[#00FFCC] transition-colors duration-300"
                  >
                    Clientes
                  </a>
                </nav>

                {/* Mobile WhatsApp */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <a
                    href="https://wa.me/595123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 bg-[#25D366] text-white font-medium rounded-lg"
                  >
                    <MessageCircle size={18} />
                    <span>¿Escribimos?</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;