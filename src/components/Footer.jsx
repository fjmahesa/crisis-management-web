import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import {
  FaLinkedinIn, FaSun, FaMoon, FaLock, FaGlobe,
  FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="transition-colors duration-700 bg-white dark:bg-[#050505] border-t border-slate-300 dark:border-white/5 pt-24 pb-12 px-6 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">

          {/* KOLOM 1: BRAND & MISSION (Span 5) */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="inline-block group">
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

          {/* KOLOM 2: STRATEGIC LINKS (Span 3) */}
          <div className="md:col-span-3 space-y-6">
            {/* <h4 className="text-slate-900 dark:text-white text-[10px] font-mono tracking-[0.5em] uppercase font-black">Navigasi</h4> */}
            <ul className="space-y-4 text-[10px] font-bold tracking-widest uppercase">
              <li><Link to="/" className="text-slate-400 hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link to="/layanan" className="text-slate-400 hover:text-red-600 transition-colors">About</Link></li>
              <li><Link to="/metodologi" className="text-slate-400 hover:text-red-600 transition-colors">Services</Link></li>
              <li><Link to="/insights" className="text-slate-400 hover:text-red-600 transition-colors">Crisis Framework</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-red-600 transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* KOLOM 3: DISCREET CONTACT (MINIMALIST DESIGN) */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-slate-900 dark:text-white text-[10px] font-mono tracking-[0.5em] uppercase font-black">Hubungi Kami</h4>

            <div className="flex flex-col gap-5">
              {/* KONTAK
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center border border-slate-100 dark:border-white/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <FaPhoneAlt size={12} />
                </div>
                <div>
                  <p className="text-[7px] text-slate-400 font-mono uppercase tracking-[0.2em] mb-0.5">Secure_Line</p>
                  <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors">+62 21 0900 888</p>
                </div>
              </div> */}

              {/* WHATSAPP */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center border border-slate-100 dark:border-white/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <FaWhatsapp size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em] mb-0.5">WhatsApp</p>
                  <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors">+62 822 2664 4882</p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center border border-slate-100 dark:border-white/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={12} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em] mb-0.5">E-Mail</p>
                  <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors">indonesia@crisismanagement.id</p>
                </div>
              </div>

              {/* INSTAGRAM */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center border border-slate-100 dark:border-white/5 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <FaInstagram size={14} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.2em] mb-0.5">Instagram</p>
                  <p className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors">@crisismanagement.id</p>
                </div>
              </div>
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

            {/* <div className="flex items-center gap-3">
              <FaLock className="text-red-600 text-[10px] animate-pulse" />
              <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-[0.4em] font-black">
                End-to-End Encryption Active
              </span>
            </div>
            <span className="text-[7px] font-mono text-slate-400 dark:text-slate-700 uppercase tracking-[0.3em]">
              Security_Node: Jakarta_Terminal_ID: {Math.floor(Math.random() * 10000)} // TLS_Verified
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}