import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi scroll hanya untuk mengubah background, bukan ukuran
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownVariants = {
    closed: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2, ease: "easeInOut" } 
    },
    opened: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: "easeOut" } 
    }
  };

  const navLinks = [
    { name: 'Layanan', path: '/layanan' },
    { name: 'Metodologi', path: '/metodologi' },
    { name: 'Tentang Kami', path: '/tentang' },
  ];

  return (
    /* py-3 konsisten di semua kondisi */
    <nav className={`sticky top-0 w-full transition-all duration-500 z-[100] py-3 px-5 md:px-12 flex items-center justify-between
      ${isScrolled 
        ? 'bg-white/90 dark:bg-[#050505]/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-white/5' 
        : 'bg-white dark:bg-[#050505] border-b border-transparent'
      }`}>
      
      {/* LOGO AREA - Tinggi h-8 md:h-10 tetap konsisten */}
      <Link to="/" className="z-[110] flex items-center shrink-0" onClick={() => setIsOpen(false)}>
        <img 
          key={theme}
          src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'} 
          alt="Indonesia Crisis Management Logo" 
          className="h-8 md:h-12 w-auto object-contain transition-opacity duration-500"
        />
      </Link>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 md:gap-6">
        
        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[9px] tracking-[0.15em] uppercase font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-slate-500 dark:text-white/60 hover:text-red-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 hover:border-red-600 hover:text-red-600 transition-all z-[110]"
          >
            {theme === 'dark' ? <FaSun size={11} /> : <FaMoon size={11} />}
          </button>

          {/* KONTAK DARURAT */}
          <Link 
            to="/kontak" 
            className="hidden md:block bg-red-600 text-white px-4 py-1.5 hover:bg-red-700 transition-all font-black text-[9px] uppercase tracking-widest shadow-md shadow-red-600/10"
          >
            Kontak Darurat
          </Link>

          {/* HAMBURGER BUTTON */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-[110] relative"
          >
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 absolute ${isOpen ? 'rotate-45 text-red-600' : '-translate-y-1 text-slate-900 dark:text-white'}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 absolute ${isOpen ? 'opacity-0' : 'opacity-100 text-slate-900 dark:text-white'}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 absolute ${isOpen ? '-rotate-45 text-red-600' : 'translate-y-1 text-slate-900 dark:text-white'}`}></span>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="opened"
            exit="closed"
            variants={dropdownVariants}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/10 z-[90] lg:hidden shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`, backgroundSize: '25px 25px' }}></div>

            <div className="relative z-10 px-6 py-8 flex flex-col gap-5">
              <p className="text-[8px] font-mono tracking-[0.4em] text-slate-400 uppercase border-l-2 border-red-600 pl-3 mb-2">Menu_Navigasi</p>
              
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <Link 
                    key={link.name}
                    onClick={() => setIsOpen(false)} 
                    to={link.path} 
                    className="group py-3 text-lg font-bold text-slate-900 dark:text-white hover:text-red-600 transition-colors flex justify-between items-center border-b border-slate-50 dark:border-white/5"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-tighter">
                      {link.name}
                    </span>
                    <span className="text-[9px] font-mono opacity-20">0{i + 1}</span>
                  </Link>
                ))}
              </div>
              
              <Link 
                onClick={() => setIsOpen(false)} 
                to="/kontak" 
                className="mt-4 bg-red-600 text-white w-full py-4 text-center font-black text-[10px] tracking-[0.3em] shadow-lg shadow-red-600/20 uppercase"
              >
                Mulai Konsultasi
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}