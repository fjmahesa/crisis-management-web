import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    opened: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <nav className="sticky top-0 w-full transition-colors duration-700 bg-white/80 dark:bg-[#050505]/100 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 px-6 py-3 md:px-12 flex items-center justify-between z-[100]">
      
      {/* LOGO AREA */}
      <Link to="/" className="z-[110] flex items-center">
        {/* Logika penukaran file berdasarkan theme */}
        <img 
          key={theme}
          src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'} 
          alt="Indonesia Crisis Management Logo" 
          className="h-10 md:h-16 w-auto object-contain transition-opacity duration-500"
          // Menambahkan sedikit transisi opacity agar pergantian gambar lebih halus
        />
      </Link>

      {/* RIGHT SIDE: DESKTOP MENU & THEME TOGGLE */}
      <div className="flex items-center gap-6 md:gap-10">
        
        {/* DESKTOP MENU LINKS */}
        <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
          <Link to="/layanan" className="text-slate-500 dark:text-white/60 hover:text-red-600 dark:hover:text-red-500 transition-colors">Layanan</Link>
          <Link to="/metodologi" className="text-slate-500 dark:text-white/60 hover:text-red-600 dark:hover:text-red-500 transition-colors">Metodologi</Link>
          <Link to="/tentang" className="text-slate-500 dark:text-white/60 hover:text-red-600 dark:hover:text-red-500 transition-colors">Tentang Kami</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* THEME TOGGLE BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 hover:border-red-600 dark:hover:border-red-600 hover:text-red-600 transition-all duration-300 z-[110]"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
          </motion.button>

          {/* KONTAK DARURAT (Desktop) */}
          <Link 
            to="/kontak" 
            className="hidden md:block bg-red-600 text-white px-6 py-2.5 hover:bg-red-700 transition-all font-black text-[10px] uppercase tracking-[0.1em] shadow-lg shadow-red-600/20"
          >
            Kontak Darurat
          </Link>

          {/* HAMBURGER BUTTON (MOBILE) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 z-[110] p-1"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className={`w-6 h-[2px] block transition-colors duration-500 ${isOpen || theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`}
            ></motion.span>
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-6 h-[2px] block transition-colors duration-500 ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`}
            ></motion.span>
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className={`w-6 h-[2px] block transition-colors duration-500 ${isOpen || theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`}
            ></motion.span>
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#fcfcfc] dark:bg-[#050505] flex flex-col items-center justify-center gap-8 z-[100] md:hidden"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
              backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}></div>

            {/* Logo in Mobile Menu dengan logika yang sama */}
            <img 
              src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'} 
              alt="Logo" 
              className="h-16 w-auto mb-8 opacity-20"
            />

            <div className="flex flex-col items-center gap-10 font-mono tracking-[0.3em] uppercase relative z-10">
              <Link onClick={() => setIsOpen(false)} to="/layanan" className="text-2xl font-black text-slate-900 dark:text-white hover:text-red-600 transition-colors italic">
                Layanan
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/metodologi" className="text-2xl font-black text-slate-900 dark:text-white hover:text-red-600 transition-colors italic">
                Metodologi
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/tentang" className="text-2xl font-black text-slate-900 dark:text-white hover:text-red-600 transition-colors italic">
                Tentang Kami
              </Link>
              <Link 
                onClick={() => setIsOpen(false)} 
                to="/kontak" 
                className="mt-6 bg-red-600 text-white px-12 py-5 font-black text-sm shadow-xl shadow-red-600/30"
              >
                Kontak Darurat
              </Link>
            </div>

            <div className="absolute bottom-10 text-[10px] font-mono text-slate-400 dark:text-slate-600 tracking-widest uppercase">
              System Version 4.0.1 // {theme.toUpperCase()}_MODE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}