import React from 'react';
import { motion } from 'framer-motion';

export default function Klien() {
  const klienLogos = [
    { nama: "FINANCE_CORP", logo: "FINANCE" },
    { nama: "GOV_SECTOR", logo: "GOVERNMENT" },
    { nama: "TECH_TITAN", logo: "TECH_INTEL" },
    { nama: "ENERGY_CO", logo: "ENERGY_SYS" },
    { nama: "LOGISTIC_ID", logo: "LOGISTIC" },
    { nama: "MEDIA_NET", logo: "MEDIA_HUB" },
  ];

  return (
    <section className="py-20 transition-colors duration-700 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[9px] md:text-[10px] font-mono tracking-[0.5em] text-slate-400 dark:text-slate-600 uppercase">
            Validasi Keamanan Lintas Sektor Strategis
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
          {klienLogos.map((klien, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex justify-center group cursor-default"
            >
              {/* Desain Logo Tipografi: Berubah warna border & text sesuai tema */}
              <div className="
                w-full text-center text-[10px] md:text-xs font-black tracking-[0.2em] uppercase 
                text-slate-400 dark:text-white/20 
                group-hover:text-red-600 dark:group-hover:text-red-600 
                transition-all duration-500 font-mono 
                border border-slate-200 dark:border-white/5 
                px-4 py-4 md:py-6
                group-hover:border-red-600/30 group-hover:bg-slate-50 dark:group-hover:bg-red-600/5
                relative
              ">
                {/* Aksesoris Sudut untuk kesan Blueprint/Teknis */}
                <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-transparent group-hover:border-red-600/50 transition-all"></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-transparent group-hover:border-red-600/50 transition-all"></div>
                
                {klien.logo}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Garis Dekoratif Bawah yang menyesuaikan tema */}
        <div className="mt-20 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent"></div>
      </div>
    </section>
  );
}