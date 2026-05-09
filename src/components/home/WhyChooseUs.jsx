import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserSecret, FaChartLine, FaClock, FaMicrochip } from 'react-icons/fa';

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(null);

  const highlights = [
    {
      icon: <FaClock />,
      title: "Respons Cepat 24/7",
      desc: "Krisis tidak mengenal jam kerja. Tim kami siaga penuh untuk memitigasi isu sebelum menjadi berita utama.",
      // Hanya sedikit rotasi untuk kesan presisi jam
      hoverAnim: { rotate: 15, scale: 1.1 }
    },
    {
      icon: <FaUserSecret />,
      title: "Confidential & Discreet",
      desc: "Privasi adalah prioritas tertinggi. Seluruh operasi dilakukan dengan protokol kerahasiaan ketat.",
      // Geser sedikit ke atas untuk kesan 'menghilang/rahasia'
      hoverAnim: { y: -5, opacity: 0.8 }
    },
    {
      icon: <FaChartLine />,
      title: "Framework Berbasis Data",
      desc: "Kami menggunakan metrik digital untuk mengukur sentimen publik secara akurat.",
      // Skala halus tanpa looping yang mengganggu
      hoverAnim: { scale: 1.15, y: -2 }
    },
    {
      icon: <FaShieldAlt />,
      title: "Pengalaman Krisis Politik",
      desc: "Berpengalaman menangani dinamika politik digital yang agresif dan isu kebijakan publik.",
      // Sedikit rotasi pelindung
      hoverAnim: { rotate: -10, x: 2 }
    },
    {
      icon: <FaMicrochip />,
      title: "Teknologi Intelijen",
      desc: "Menggunakan tools monitoring canggih untuk mendeteksi pola serangan buzzer terstruktur.",
      // Skala minimalis
      hoverAnim: { scale: 1.1, rotate: 5 }
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            Dibangun untuk Era <br />
            <span className="text-red-600">Politik Digital</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          
          {highlights.map((item, index) => {
            const isLarge = index === 1;
            const isFocused = activeCard === index;

            return (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.01 }}
                onClick={() => setActiveCard(isFocused ? null : index)}
                className={`p-8 border transition-all duration-500 flex flex-col relative overflow-hidden cursor-pointer select-none
                  ${isLarge 
                    ? 'md:col-span-2 bg-slate-900 border-slate-800 shadow-xl' 
                    : 'bg-slate-50 dark:bg-[#0a0a0a] border-slate-200 dark:border-white/5 shadow-sm'
                  }
                  ${isFocused ? 'bg-slate-900 border-red-600/50 shadow-2xl' : 'group hover:bg-slate-900 hover:border-red-600/50'}
                `}
              >
                {/* --- BACKGROUND DECORATION ICON (Watermark) --- */}
                <div className={`absolute right-[-5%] bottom-[-10%] text-[160px] pointer-events-none transition-all duration-700 
                  ${isFocused ? 'opacity-10 scale-105 text-white' : 'opacity-[0.04] dark:opacity-[0.05] text-slate-900 dark:text-white group-hover:opacity-10 group-hover:scale-105 group-hover:text-white'}
                `}>
                  {item.icon}
                </div>

                {/* Ikon Utama - Animasi diselaraskan agar lebih subtle */}
                <motion.div 
                  className={`mb-auto text-2xl transition-colors duration-500 relative z-10
                    ${isLarge ? 'text-red-500' : (isFocused ? 'text-red-500' : 'text-red-600 group-hover:text-red-500')}`}
                  animate={isFocused ? item.hoverAnim : { scale: 1, rotate: 0, y: 0, x: 0, opacity: 1 }}
                  whileHover={item.hoverAnim}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item.icon}
                </motion.div>

                <div className="relative z-10">
                  <h3 className={`text-lg font-black uppercase mb-2 leading-none transition-colors duration-500
                    ${isLarge ? 'text-white' : (isFocused ? 'text-white' : 'text-slate-900 dark:text-white group-hover:text-white')}`}>
                    {item.title}
                  </h3>
                  <p className={`text-[10px] uppercase tracking-wider leading-relaxed transition-colors duration-500
                    ${isLarge ? 'text-slate-300' : (isFocused ? 'text-slate-300' : 'text-slate-500 dark:text-slate-500 group-hover:text-slate-300')}`}>
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Red Glow Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/[0.05] transition-opacity duration-500
                  ${isFocused ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}