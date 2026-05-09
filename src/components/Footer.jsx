import React from 'react';
// Ganti import Link biasa menjadi NavHashLink
import { NavHashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  FaLinkedinIn, FaSun, FaMoon, FaLock, FaGlobe,
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  // Samakan navLinks dengan yang ada di Navbar
  const navLinks = [
    { name: 'Home', path: '/#' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/#services' },
    { name: 'Crisis Framework', path: '/#framework' },
    { name: 'Contact Us', path: '/#cta' },
  ];

  return (
    <footer className="transition-colors duration-700 bg-white dark:bg-[#050505] border-t border-slate-200 dark:border-white/5 pt-24 pb-12 px-6 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">

          {/* KOLOM 1: BRAND & MISSION */}
          <div className="md:col-span-5 space-y-8">
            <Link smooth to="/#" className="inline-block group">
              <img
                key={theme}
                src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
                alt="Logo"
                className="h-12 md:h-25 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-[10px] leading-relaxed tracking-[0.2em] uppercase font-mono max-w-sm border-l border-red-600/30 pl-6 italic">
              "Melindungi Reputasi Melalui Kontrol Narasi, Analisis Persepsi, dan Kecerdasan Strategis Real-Time."
            </p>
          </div>

          {/* KOLOM 2: STRATEGIC LINKS (Updated to HashLink) */}
          <div className="md:col-span-3 space-y-6">
            <ul className="space-y-4 text-[10px] font-bold tracking-widest uppercase">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    smooth 
                    to={link.path} 
                    className="text-slate-400 hover:text-red-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: DISCREET CONTACT */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-slate-900 dark:text-white text-[10px] font-mono tracking-[0.5em] uppercase font-black">Hubungi Kami</h4>

            <div className="flex flex-col gap-5">
              {/* WHATSAPP */}
              <a 
                href="https://wa.me/6282226644882" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-slate-100 dark:border-white/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <FaWhatsapp size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em] mb-0.5">WhatsApp</p>
                  <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors">+62 822 2664 4882</p>
                </div>
              </a>

              {/* EMAIL */}
              <a 
                href="mailto:indonesia@crisismanagement.id" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-slate-100 dark:border-white/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={12} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em] mb-0.5">E-Mail</p>
                  <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors">indonesia@crisismanagement.id</p>
                </div>
              </a>

              {/* INSTAGRAM */}
              <a 
                href="https://instagram.com/crisismanagement.id" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-slate-100 dark:border-white/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <FaInstagram size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em] mb-0.5">Instagram</p>
                  <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors">@crisismanagement.id</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM TERMINAL */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-300 dark:border-white/5 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-[9px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-widest italic">
              © {currentYear} CRISISMANAGEMENT.ID
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 group">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-4 py-2 bg-slate-900 dark:bg-red-600 rounded-sm hover:scale-105 transition-all shadow-xl"
            >
              <div className="text-white">
                {theme === 'dark' ? <FaSun size={10} /> : <FaMoon size={10} />}
              </div>
              <span className="text-[9px] font-mono text-white uppercase tracking-widest font-black">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}