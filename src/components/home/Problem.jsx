import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaMicrophoneAltSlash, FaUserShield, FaShareAlt, FaNetworkWired } from 'react-icons/fa';

export default function Problem() {
  // State untuk melacak kartu yang aktif di mobile
  const [activeCard, setActiveCard] = useState(null);

  const problems = [
    {
      title: "Old Content Resurfacing",
      desc: "Video atau pernyataan lama yang muncul kembali secara sengaja menjelang momentum politik penting.",
      icon: <FaMicrophoneAltSlash />
    },
    {
      title: "Disinformasi Terstruktur",
      desc: "Serangan buzzer terorganisir, framing lawan, dan distribusi narasi negatif secara masif.",
      icon: <FaNetworkWired />
    },
    {
      title: "Viral Negative Issue",
      desc: "Potongan video tanpa konteks yang dipicu secara algoritma untuk memancing emosi publik.",
      icon: <FaShareAlt />
    },
    {
      title: "Internal Leak",
      desc: "Kebocoran chat pribadi, dokumen rahasia, atau rekaman internal yang tersebar ke ruang publik.",
      icon: <FaUserShield />
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-slate-50 dark:bg-[#080808] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left md:text-center mb-12 md:mb-20"
        >
          {/* <h4 className="text-red-600 font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold mb-4 flex md:justify-center items-center gap-2">
            <FaExclamationTriangle className="animate-pulse" /> Ancaman_RealTime
          </h4> */}
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
            Krisis Politik Digital Bergerak Real-Time
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
            Isu digital yang tidak tertangani akan bereskalasi menjadi krisis media mainstream.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {problems.map((prob, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // Trigger state aktif saat di-tap (Mobile)
              onClick={() => setActiveCard(i)}
              className={`relative p-6 md:p-8 border transition-all duration-300 cursor-pointer group overflow-hidden
                ${activeCard === i 
                  ? 'bg-red-600/[0.07] border-red-600/50 shadow-lg shadow-red-600/5' 
                  : 'bg-white dark:bg-white/[0.03] border-slate-200 dark:border-white/5 lg:hover:border-red-600/30 lg:hover:bg-red-600/[0.02]'
                }`}
            >
              {/* Dekorasi Glow saat Aktif */}
              {activeCard === i && (
                <motion.div 
                  layoutId="problemGlow"
                  className="absolute -inset-1 bg-gradient-to-br from-red-600/10 via-transparent to-transparent -z-10"
                />
              )}

              <div className={`text-xl md:text-2xl mb-4 md:mb-6 transition-transform duration-500 
                ${activeCard === i ? 'text-red-600 scale-110' : 'text-red-600/70 lg:group-hover:text-red-600 lg:group-hover:scale-110'}`}>
                {prob.icon}
              </div>

              <h3 className={`text-xs md:text-sm font-black uppercase tracking-wider mb-3 md:mb-4 transition-colors
                ${activeCard === i ? 'text-red-600 dark:text-red-500' : 'text-slate-900 dark:text-white'}`}>
                {prob.title}
              </h3>

              <p className={`text-[10px] md:text-[11px] leading-relaxed uppercase tracking-tight transition-colors
                ${activeCard === i ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-500'}`}>
                {prob.desc}
              </p>
              
              {/* Indikator Status Aktif di Pojok (Mobile) */}
              <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-red-600 transition-opacity lg:hidden
                ${activeCard === i ? 'opacity-100 animate-pulse' : 'opacity-0'}`}>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center lg:hidden">
          <p className="text-[8px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">
            Tap pada kartu untuk memfokuskan_ancaman
          </p>
        </div>
      </div>
    </section>
  );
}