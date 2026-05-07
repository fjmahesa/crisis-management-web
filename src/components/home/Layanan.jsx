import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Layanan() {
  const [activeService, setActiveService] = useState(null);

  const layananData = [
    { judul: "PRE-EMPTIVE", desc: "Pemetaan risiko dan simulasi ancaman tingkat lanjut." },
    { judul: "RESPONS AKTIF", desc: "Penanganan insiden dan isolasi dampak secara real-time." },
    { judul: "PEMULIHAN", desc: "Rekonstruksi reputasi dan aset berbasis data." }
  ];

  return (
    <section className="py-10 md:py-24 px-6 relative bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          className="mb-8 md:mb-16 text-center"
        >
          <span className="text-[10px] font-mono tracking-[0.5em] uppercase">Layanan Utama</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {layananData.map((item, i) => {
            const isActive = activeService === i;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveService(i)}
                onMouseEnter={() => window.innerWidth > 768 && setActiveService(i)}
                onMouseLeave={() => window.innerWidth > 768 && setActiveService(null)}
                className={`p-5 md:p-8 border transition-all duration-500 backdrop-blur-xl group relative overflow-hidden cursor-pointer select-none touch-manipulation 
                  ${isActive ? 'border-red-600/50 bg-red-600/[0.05]' : 'border-white/5 bg-white/[0.02]'}`}
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-red-600 transition-transform duration-500 origin-top ${isActive ? 'scale-y-100' : 'scale-y-0'}`}></div>
                <h3 className={`text-base md:text-xl font-black mb-2 md:mb-4 tracking-tighter uppercase italic transition-colors duration-500 ${isActive ? 'text-white' : 'text-red-600'}`}>{item.judul}</h3>
                <p className={`text-[11px] md:text-sm leading-relaxed transition-colors duration-500 ${isActive ? 'text-slate-200' : 'text-slate-400'}`}>{item.desc}</p>
                <div className={`mt-6 h-[1px] transition-all duration-700 ${isActive ? 'w-full bg-red-600' : 'w-8 bg-white/10'}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}