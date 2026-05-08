import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
// Import dua versi gambar
import headerDark from '../../assets/header-dark.webp';
import headerLight from '../../assets/header-light.webp';

const fadeIn = (direction = "up") => ({
  hidden: { 
    opacity: 0, 
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
});

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden transition-colors duration-700 bg-[#F8F9FA] dark:bg-[#050505]">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none text-slate-900 dark:text-white">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px' 
          }}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* KOLOM KIRI: TEKS & ACTION (Updated with Document Concepts) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="text-left"
        >
          {/* Badge Status */}
          {/* <motion.div 
            variants={fadeIn("up")}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-red-500/30 bg-red-500/5 rounded-full backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-600 dark:text-red-500 font-mono">
              Intelligence Room // Aktif
            </span>
          </motion.div> */}
          
          <motion.h1 
            variants={fadeIn("up")}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter leading-[0.95] text-[#0F172A] dark:text-white uppercase"
          >
            MENGENDALIKAN KRISIS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-red-900 dark:from-red-500 dark:to-white">
              MELINDUNGI REPUTASI. 
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeIn("up")}
            className="text-slate-500 dark:text-slate-400 max-w-lg mb-10 text-[10px] md:text-[12px] leading-relaxed tracking-[0.15em] md:tracking-[0.2em] uppercase font-mono"
          >
            Layanan crisis management strategis untuk tokoh politik, pejabat publik, kandidat pemilu, dan public figure di era digital. 
          </motion.p>

          <motion.div variants={fadeIn("up")} className="flex flex-wrap gap-4">
            <button className="bg-red-600 text-white px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
              Audit Risiko Digital
            </button>
            {/* <button className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
              Konsultasi Strategis
            </button> */}
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN: GAMBAR DENGAN LOGIKA TEMA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn("left")}
          className="relative group justify-self-center lg:justify-self-end"
        >
          <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-red-600 z-20 transition-all duration-500"></div>
          <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-red-600 z-20 transition-all duration-500"></div>

          <div 
            className="relative overflow-hidden shadow-2xl shadow-black/40 border border-white/5"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
          >
            <motion.img 
              key={theme}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={theme === 'dark' ? headerDark : headerLight} 
              alt="Strategic Political Crisis Agent" 
              className="w-full h-auto max-w-lg object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-8 right-12 font-mono text-[7px] text-white/50 tracking-[0.4em] uppercase hidden md:block">
              {theme === 'dark' ? 'POLITICAL_WAR_ROOM // ACTIVE' : 'STRATEGIC_MONITORING // ACTIVE'}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}