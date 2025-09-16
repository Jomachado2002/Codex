import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#151931]">
      <Header />
      
      {/* Hero Section - Ajustado el padding-top para el header fijo */}
      <main className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              Creamos Experiencias
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] to-[#BBF84C]">
                Digitales Increíbles
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Somos Pixxels, la agencia de marketing digital que transforma tu visión en realidad digital.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home;