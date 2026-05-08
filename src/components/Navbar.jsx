import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaShieldAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update Menu sesuai Dokumen Konsep
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Crisis Framework', path: '/framework' },
    { name: 'Insights', path: '/insights' },
  ];

  return (
    <nav className={`sticky top-0 w-full transition-all duration-500 z-[100] py-3 px-5 md:px-12 flex items-center justify-between
      ${isScrolled 
        ? 'bg-white/90 dark:bg-[#050505]/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-white/5' 
        : 'bg-white dark:bg-[#050505] border-b border-transparent'
      }`}>
      
      {/* LOGO AREA */}
      <Link to="/" className="z-[110] flex items-center gap-2" onClick={() => setIsOpen(false)}>
        <img 
          src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'} 
          alt="ICM Logo" 
          className="h-8 md:h-13 w-auto object-contain"
        />
      </Link>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 md:gap-8">
        
        {/* DESKTOP LINKS - Menggunakan font mono yang tegas */}
        <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] tracking-[0.15em] uppercase font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-slate-500 dark:text-white/60 hover:text-red-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-white/60 hover:border-red-600 hover:text-red-600 transition-all z-[110]"
          >
            {theme === 'dark' ? <FaSun size={12} /> : <FaMoon size={12} />}
          </button>

          {/* CTA: KONTAK DARURAT / KONSULTASI RAHASIA */}
          <Link 
            to="/contact" 
            className="hidden md:flex items-center gap-2 bg-red-600 text-white px-5 py-2 hover:bg-red-700 transition-all font-black text-[10px] uppercase tracking-widest shadow-lg shadow-red-600/20"
          >
            <FaShieldAlt className="text-[12px]" />
            Konsultasi Rahasia
          </Link>

          {/* HAMBURGER (Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-[110] relative"
          >
            <span className={`w-5 h-0.5 transition-all duration-300 absolute ${isOpen ? 'rotate-45 bg-red-600' : '-translate-y-1 bg-current'}`}></span>
            <span className={`w-5 h-0.5 transition-all duration-300 absolute ${isOpen ? 'opacity-0' : 'opacity-100 bg-current'}`}></span>
            <span className={`w-5 h-0.5 transition-all duration-300 absolute ${isOpen ? '-rotate-45 bg-red-600' : 'translate-y-1 bg-current'}`}></span>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#080808] border-b border-slate-200 dark:border-white/10 z-[90] lg:hidden shadow-2xl px-6 py-10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold uppercase tracking-tighter border-b border-slate-50 dark:border-white/5 py-3 hover:text-red-600"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-red-600 text-white w-full py-4 text-center font-black text-[11px] tracking-widest uppercase"
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