import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShoppingCart, Globe, Video, Camera, Instagram, Facebook, TrendingUp, Zap, Star, Target, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#151931]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#00FFCC]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-[#BBF84C]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5285E8]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-tight"
              >
                Lleva tu tienda al
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] via-[#BBF84C] to-[#5285E8]">
                  Siguiente Nivel
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-[#F2F2ED]/90 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
              >
                Utilizando todas las herramientas digitales a disposición. En Pixxels trabajamos con marketing digital al siguiente nivel: 
                <span className="text-[#00FFCC] font-bold"> páginas personalizables, e-commerce para generar ventas, gestión de redes sociales, creativos que impactan </span>
                y campañas publicitarias de alto ROI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              >
                <a
                  href="#servicios"
                  className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-[#00FFCC] to-[#BBF84C] text-[#151931] font-black rounded-2xl hover:shadow-2xl hover:shadow-[#00FFCC]/30 transition-all duration-500 transform hover:scale-105"
                >
                  <Zap size={24} />
                  <span className="text-lg">Cotizar Proyecto</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                
                <a
                  href="#portfolio"
                  className="group inline-flex items-center space-x-3 px-10 py-5 border-2 border-[#00FFCC]/30 text-white font-bold rounded-2xl hover:border-[#00FFCC] hover:bg-[#00FFCC]/10 transition-all duration-500"
                >
                  <Play size={24} />
                  <span className="text-lg">Ver Portfolio</span>
                </a>
              </motion.div>

              {/* Stats destacados */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {[
                  { number: "200%", label: "ROI Promedio", icon: TrendingUp },
                  { number: "150+", label: "Proyectos Exitosos", icon: Award },
                  { number: "98%", label: "Clientes Satisfechos", icon: Star },
                  { number: "24/7", label: "Soporte Premium", icon: Target }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <stat.icon className="w-8 h-8 text-[#00FFCC] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] to-[#BBF84C] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[#F2F2ED]/70 font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Web Section */}
      <section id="servicios-web" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A407E]/20 to-[#3850A0]/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Páginas Web que
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] to-[#BBF84C]">
                Convierten
              </span>
            </h2>
            <p className="text-xl text-[#F2F2ED]/80 max-w-3xl mx-auto">
              Desarrollo web profesional que transforma visitantes en clientes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* E-commerce Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFCC]/20 to-[#BBF84C]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-[#F2F2ED]/5 backdrop-blur-sm rounded-3xl p-8 border border-[#00FFCC]/20 hover:border-[#00FFCC]/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00FFCC] to-[#BBF84C] rounded-2xl flex items-center justify-center mr-4">
                    <ShoppingCart size={32} className="text-[#151931]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-1">E-commerce</h3>
                    <span className="text-[#00FFCC] font-semibold">Tiendas Online Premium</span>
                  </div>
                </div>
                <p className="text-[#F2F2ED]/80 text-lg mb-6 leading-relaxed">
                  Tiendas online que convierten visitantes en ventas. Sistema completo con pasarela de pagos, gestión de inventario y analytics avanzado para maximizar tus ganancias.
                </p>
                <div className="space-y-3 mb-8">
                  {['Pasarela de pagos segura', 'Gestión de inventario', 'Dashboard de ventas', 'SEO optimizado'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#BBF84C] rounded-full mr-3"></div>
                      <span className="text-[#F2F2ED]/70">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-[#00FFCC] to-[#BBF84C] text-[#151931] font-black rounded-xl hover:shadow-xl transition-all duration-300">
                  Cotizar E-commerce
                </button>
              </div>
            </motion.div>

            {/* Landing Pages Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5285E8]/20 to-[#3850A0]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-[#F2F2ED]/5 backdrop-blur-sm rounded-3xl p-8 border border-[#5285E8]/20 hover:border-[#5285E8]/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#5285E8] to-[#3850A0] rounded-2xl flex items-center justify-center mr-4">
                    <Globe size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white mb-1">Landing Pages</h3>
                    <span className="text-[#5285E8] font-semibold">Alta Conversión</span>
                  </div>
                </div>
                <p className="text-[#F2F2ED]/80 text-lg mb-6 leading-relaxed">
                  Páginas estáticas optimizadas para productos específicos o presentación empresarial. Diseño que convierte y comunica tu propuesta de valor efectivamente.
                </p>
                <div className="space-y-3 mb-8">
                  {['Diseño responsive', 'Optimización SEO', 'Formularios inteligentes', 'A/B Testing'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#5285E8] rounded-full mr-3"></div>
                      <span className="text-[#F2F2ED]/70">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-[#5285E8] to-[#3850A0] text-white font-black rounded-xl hover:shadow-xl transition-all duration-300">
                  Cotizar Landing Page
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creativos Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#151931] to-[#2A407E]/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Creativos que
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#BBF84C] to-[#00FFCC]">
                Impactan
              </span>
            </h2>
            <p className="text-xl text-[#F2F2ED]/80 max-w-3xl mx-auto">
              No pierdas tiempo editando. Cotiza con nosotros la mejor opción para tus contenidos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Videos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#BBF84C]/20 to-[#00FFCC]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-[#F2F2ED]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#BBF84C]/20 hover:border-[#BBF84C]/40 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <Video size={48} className="text-[#BBF84C] mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Videos Profesionales</h3>
                    <span className="text-[#BBF84C]">Motion Graphics & Edición</span>
                  </div>
                </div>
                <p className="text-[#F2F2ED]/80 mb-6">
                  Contenido audiovisual que conecta y convierte. Desde videos publicitarios hasta motion graphics que cuentan tu historia.
                </p>
                <button className="flex items-center space-x-2 text-[#BBF84C] font-semibold hover:space-x-4 transition-all duration-300">
                  <span>Ver más</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* Imágenes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFCC]/20 to-[#5285E8]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-[#F2F2ED]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#00FFCC]/20 hover:border-[#00FFCC]/40 transition-all duration-500">
                <div className="flex items-center mb-6">
                  <Camera size={48} className="text-[#00FFCC] mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Diseño Gráfico</h3>
                    <span className="text-[#00FFCC]">Identidad Visual Premium</span>
                  </div>
                </div>
                <p className="text-[#F2F2ED]/80 mb-6">
                  Imágenes que cuentan tu historia y generan ganancias. Desde fotografía de producto hasta branding completo.
                </p>
                <button className="flex items-center space-x-2 text-[#00FFCC] font-semibold hover:space-x-4 transition-all duration-300">
                  <span>Ver más</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redes Sociales Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3850A0]/20 to-[#151931]/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
              Redes Sociales con
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] via-[#BBF84C] to-[#5285E8]">
                ROI x200
              </span>
            </h2>
            <p className="text-2xl text-[#F2F2ED]/90 max-w-4xl mx-auto font-medium">
              Con cada <span className="text-[#BBF84C] font-bold">$1 USD</span> invertido, consigue hasta <span className="text-[#00FFCC] font-bold">$20 USD</span> de ganancia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Instagram, name: 'Instagram', color: '#E1306C', desc: 'Engagement real y ventas directas' },
              { icon: Facebook, name: 'Facebook', color: '#1877F2', desc: 'Comunidad y conversiones optimizadas' },
              { icon: TrendingUp, name: 'Campañas Ads', color: '#00FFCC', desc: 'ROI comprobado y escalable' }
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFCC]/10 to-[#BBF84C]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-[#F2F2ED]/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00FFCC]/30 transition-all duration-500 text-center group-hover:transform group-hover:scale-105">
                  <social.icon size={64} className="mx-auto mb-4" style={{ color: social.color }} />
                  <h3 className="text-2xl font-bold text-white mb-3">{social.name}</h3>
                  <p className="text-[#F2F2ED]/70">{social.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="https://wa.me/595123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 px-12 py-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-black text-xl rounded-2xl hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-500 transform hover:scale-105"
            >
              <span>Cotizar Campañas</span>
              <ArrowRight size={28} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FFCC]/10 via-[#BBF84C]/10 to-[#5285E8]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <Zap className="w-20 h-20 text-[#00FFCC] mx-auto mb-8" />
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
              ¿Listo para dominar el
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] to-[#BBF84C]">
                Marketing Digital?
              </span>
            </h2>
            <p className="text-2xl text-[#F2F2ED]/90 mb-12 font-medium">
              Conversemos sobre tu proyecto y descubre cómo multiplicar tus ventas
            </p>
            <a
              href="https://wa.me/595123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 px-12 py-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-black text-xl rounded-2xl hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-500 transform hover:scale-105"
            >
              <span>Hablemos por WhatsApp</span>
              <ArrowRight size={28} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;