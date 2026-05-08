import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center px-4 md:px-6 pt-12 md:pt-0 transition-colors duration-700">
      
      {/* LAPISAN LATAR BELAKANG JARINGAN */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Grid Line: Berubah dari putih (dark) ke slate (light) */}
        <div 
          className="absolute inset-0 opacity-[0.05] md:opacity-[0.07] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: 'clamp(40px, 8vw, 80px) clamp(40px, 8vw, 80px)' 
          }}
        ></div>

        {/* Dots Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.1] md:opacity-[0.15] dark:opacity-[0.1]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: 'clamp(40px, 8vw, 80px) clamp(40px, 8vw, 80px)',
            backgroundPosition: '-0.5px -0.5px'
          }}
        ></div>

        {/* Scanner Effect */}
        <motion.div 
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-[20vh] bg-gradient-to-b from-transparent via-red-500/10 dark:via-red-500/5 to-transparent z-0"
        />

        {/* Vignette: Menyesuaikan dengan warna background Home.jsx */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8F9FA] dark:to-[#050505]"></div>
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
          {/* Badge Status */}
          <motion.div 
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-3 py-1 mb-4 md:mb-8 border border-red-500/30 bg-red-500/5 dark:bg-red-500/10 rounded-full backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-red-600"></span>
            </span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 dark:text-red-500 font-mono">
              Sistem Aktif // Titik_01
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-3 md:mb-6 tracking-tighter leading-tight md:leading-none text-[#0F172A] dark:text-white"
          >
            MENGHUBUNGKAN <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-white/40">
              TITIK KRITIS
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="text-slate-500 dark:text-slate-400 max-w-xs md:max-w-xl mx-auto mb-8 md:mb-12 text-[9px] md:text-[11px] leading-relaxed tracking-[0.15em] md:tracking-[0.3em] uppercase font-mono px-4"
          >
            Resiliensi Terintegrasi Untuk Dunia Yang Kompleks.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 px-6">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-red-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-none font-black text-[10px] uppercase tracking-[0.2em] transition-all"
            >
              Inisialisasi Protokol
            </motion.button>
            
            <motion.button 
              className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 text-[10px] font-black uppercase tracking-[0.2em] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              Peta Jaringan
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}