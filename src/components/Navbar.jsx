import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="relative bg-[#050505] border-b border-white/5 px-6 py-5 md:px-12 flex items-center justify-between z-[100]">
      {/* LOGO */}
      <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter text-white z-[110]">
        CRISIS<span className="text-red-600">MANAGEMENT</span>.ID
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-10 font-mono text-[10px] tracking-[0.2em] uppercase">
        <Link to="/layanan" className="text-white/60 hover:text-red-500 transition-colors">Layanan</Link>
        <Link to="/metodologi" className="text-white/60 hover:text-red-500 transition-colors">Metodologi</Link>
        <Link to="/tentang" className="text-white/60 hover:text-red-500 transition-colors">Tentang Kami</Link>
        <Link 
          to="/kontak" 
          className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition-all font-black"
        >
          Kontak Darurat
        </Link>
      </div>

      {/* HAMBURGER BUTTON (MOBILE) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 z-[110] p-2"
      >
        <motion.span 
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          className="w-6 h-[2px] bg-white block"
        ></motion.span>
        <motion.span 
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-[2px] bg-white block"
        ></motion.span>
        <motion.span 
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          className="w-6 h-[2px] bg-white block"
        ></motion.span>
      </button>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center gap-8 z-[100] md:hidden"
          >
            {/* Background Grid di dalam Menu Mobile */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ 
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}></div>

            <div className="flex flex-col items-center gap-8 font-mono tracking-[0.3em] uppercase relative z-10">
              <Link 
                onClick={() => setIsOpen(false)} 
                to="/layanan" 
                className="text-2xl font-black hover:text-red-600 transition-colors"
              >
                Layanan
              </Link>
              <Link 
                onClick={() => setIsOpen(false)} 
                to="/metodologi" 
                className="text-2xl font-black hover:text-red-600 transition-colors"
              >
                Metodologi
              </Link>
              <Link 
                onClick={() => setIsOpen(false)} 
                to="/tentang" 
                className="text-2xl font-black hover:text-red-600 transition-colors"
              >
                Tentang Kami
              </Link>
              <Link 
                onClick={() => setIsOpen(false)} 
                to="/kontak" 
                className="mt-4 bg-red-600 text-white px-10 py-4 font-black text-sm"
              >
                Kontak Darurat
              </Link>
            </div>

            {/* Footer Menu Mobile */}
            <div className="absolute bottom-10 text-[10px] font-mono opacity-30 tracking-widest uppercase">
              System Version 4.0.1 // Secured
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}