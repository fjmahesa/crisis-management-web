import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa'; // Import Ikon Person

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  const [activeTarget, setActiveTarget] = useState(null);

  const targets = [
    "Tokoh Politik", 
    "Kandidat Pemilu", 
    "Pejabat Publik", 
    "CEO & Public Figure", 
    "Organisasi Politik"
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-700 border-b border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter uppercase mb-6">
              Crisis Management Berbasis Narasi, Persepsi, dan Kecepatan Respons
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              <p className="text-base md:text-lg italic border-l-4 border-red-600 pl-6 py-2 bg-slate-50 dark:bg-white/5">
                "Di era digital, krisis bukan lagi sekadar persoalan fakta — tetapi persoalan persepsi, distribusi informasi, dan kontrol narasi."
              </p>
              <p className="text-sm md:text-base">
                Satu potongan video, satu framing negatif, atau satu isu viral dapat mengubah reputasi publik dalam hitungan jam. Kami membantu klien mendeteksi, mengendalikan, dan memulihkan krisis reputasi secara sistematis.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 md:p-8 bg-slate-900 text-white rounded-sm overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-[60px]"></div>
            <h3 className="font-mono text-[15px] tracking-[0.3em] uppercase mb-6 md:mb-8 opacity-90 italic">Service ini cocok untuk:</h3>
            
            <div className="flex flex-col gap-2">
              {targets.map((item, i) => (
                <motion.div 
                  key={i} 
                  onClick={() => setActiveTarget(i)}
                  className={`relative flex items-center gap-4 p-4 transition-all duration-300 cursor-pointer border-l-2 group
                    ${activeTarget === i 
                      ? 'bg-red-600/10 border-red-600' 
                      : 'bg-transparent border-white/10 lg:hover:bg-red-600/5 lg:hover:border-red-600/50'
                    }`}
                >
                  {/* Ikon Person Ganti Numbering */}
                  <div className={`transition-colors duration-300 ${
                    activeTarget === i ? 'text-red-500' : 'text-white/30 lg:group-hover:text-red-500/70'
                  }`}>
                    <FaUser size={14} />
                  </div>

                  {/* Teks Target */}
                  <span className={`text-[10px] md:text-sm font-bold tracking-widest uppercase transition-all duration-300 
                    ${activeTarget === i 
                      ? 'translate-x-2 text-white' 
                      : 'text-white/60 lg:group-hover:translate-x-1 lg:group-hover:text-white'
                    }`}>
                    {item}
                  </span>

                  {/* Shared Layout Glow */}
                  {activeTarget === i && (
                    <motion.div 
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-[8px] font-mono text-white/20 uppercase tracking-[0.3em] lg:hidden">
              Tap untuk fokus_
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}