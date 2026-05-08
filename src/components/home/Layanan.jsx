import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Layanan() {
  const [activeService, setActiveService] = useState(null);

  const layananData = [
    { 
      judul: "PRE-EMPTIVE", 
      desc: "Pemetaan risiko sistemik dan simulasi ancaman tingkat lanjut untuk mencegah krisis sebelum terjadi.",
      code: "01/ALPHA"
    },
    { 
      judul: "RESPONS AKTIF", 
      desc: "Penanganan insiden kritis secara real-time dan isolasi dampak untuk meminimalisir kerusakan aset.",
      code: "02/SIGMA"
    },
    { 
      judul: "PEMULIHAN", 
      desc: "Rekonstruksi reputasi korporat dan aset berbasis data pasca-insiden untuk resiliensi jangka panjang.",
      code: "03/OMEGA"
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 relative transition-colors duration-700 bg-white dark:bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 text-center"
        >
          <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-slate-400 dark:text-slate-600">
            Arsitektur Solusi
          </span>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter mt-4 text-slate-900 dark:text-white uppercase italic">
            Protokol <span className="text-red-600">Pertahanan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {layananData.map((item, i) => {
            const isActive = activeService === i;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveService(i)}
                onMouseEnter={() => window.innerWidth > 768 && setActiveService(i)}
                onMouseLeave={() => window.innerWidth > 768 && setActiveService(null)}
                className={`p-8 md:p-10 border transition-all duration-500 relative overflow-hidden cursor-pointer select-none
                  ${isActive 
                    ? 'border-red-600/50 bg-slate-50 dark:bg-red-600/[0.03] shadow-2xl shadow-red-600/5' 
                    : 'border-slate-200 dark:border-white/5 bg-transparent'}`}
              >
                {/* Kode Teknis di pojok kartu */}
                <div className={`absolute top-6 right-8 font-mono text-[9px] tracking-widest transition-colors duration-500 ${isActive ? 'text-red-600' : 'text-slate-300 dark:text-slate-700'}`}>
                  {item.code}
                </div>

                {/* Indikator Garis Samping */}
                <div className={`absolute top-0 left-0 w-[2px] h-full bg-red-600 transition-transform duration-700 origin-bottom ${isActive ? 'scale-y-100' : 'scale-y-0'}`}></div>

                <h3 className={`text-xl md:text-2xl font-black mb-4 tracking-tighter uppercase italic transition-all duration-500 ${isActive ? 'text-slate-900 dark:text-white translate-x-2' : 'text-red-600'}`}>
                  {item.judul}
                </h3>
                
                <p className={`text-xs md:text-[13px] leading-relaxed transition-colors duration-500 font-medium ${isActive ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400 dark:text-slate-500'}`}>
                  {item.desc}
                </p>

                {/* Animasi Garis Bawah yang meluas */}
                <div className="mt-10 relative">
                  <div className={`h-[1px] transition-all duration-1000 ${isActive ? 'w-full bg-red-600' : 'w-10 bg-slate-200 dark:bg-white/10'}`}></div>
                  {isActive && (
                    <motion.div 
                      layoutId="glow"
                      className="absolute -top-1 w-2 h-2 bg-red-600 rounded-full blur-[4px]"
                      animate={{ x: [0, 250, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}