import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center px-4 md:px-6 pt-12 md:pt-0">
      {/* LAPISAN LATAR BELAKANG JARINGAN */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.05] md:opacity-[0.07]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: 'clamp(40px, 8vw, 80px) clamp(40px, 8vw, 80px)' 
          }}
        ></div>

        <div 
          className="absolute inset-0 opacity-[0.1] md:opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: 'clamp(40px, 8vw, 80px) clamp(40px, 8vw, 80px)',
            backgroundPosition: '-0.5px -0.5px'
          }}
        ></div>

        <motion.div 
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[20vh] bg-gradient-to-b from-transparent via-red-500/10 to-transparent z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
      </div>

      {/* KONTEN UTAMA */}
      <div className="max-w-7xl mx-auto relative z-10 text-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div 
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-8 border border-red-500/30 bg-red-500/5 rounded-full backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-red-600"></span>
            </span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-red-500 font-mono">
              Sistem Aktif // Titik_01
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-3 md:mb-6 tracking-tighter leading-tight md:leading-none"
          >
            MENGHUBUNGKAN <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              TITIK KRITIS
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="text-slate-500 max-w-xs md:max-w-xl mx-auto mb-8 md:mb-12 text-[9px] md:text-[11px] leading-relaxed tracking-[0.15em] md:tracking-[0.3em] uppercase font-mono px-4"
          >
            Resiliensi Terintegrasi Untuk Dunia Yang Kompleks.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 px-6">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-red-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-none font-black text-[10px] uppercase tracking-[0.2em] transition-all"
            >
              Inisialisasi Protokol
            </motion.button>
            
            <motion.button 
              className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 hover:border-white/30 transition-all"
            >
              Peta Jaringan
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}