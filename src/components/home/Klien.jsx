import React from 'react';
import { motion } from 'framer-motion';

export default function Klien() {
  // Gunakan placeholder logo atau teks bergaya logo jika belum ada aset
  const klienLogos = [
    { nama: "FINANCE_CORP", logo: "FINANCE" },
    { nama: "GOV_SECTOR", logo: "GOVERNMENT" },
    { nama: "TECH_TITAN", logo: "TECH_INTEL" },
    { nama: "ENERGY_CO", logo: "ENERGY_SYS" },
    { nama: "LOGISTIC_ID", logo: "LOGISTIC" },
    { nama: "MEDIA_NET", logo: "MEDIA_HUB" },
  ];

  return (
    <section className="py-16 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[9px] font-mono tracking-[0.5em] text-slate-500 uppercase">
            Terpercaya Di Berbagai Sektor Strategis
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center opacity-40">
          {klienLogos.map((klien, i) => (
            <motion.div 
              key={i}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="flex justify-center group cursor-pointer"
            >
              {/* Desain Logo Tipografi (Minimalis) */}
              <div className="text-sm md:text-base font-black tracking-tighter text-white/50 group-hover:text-white transition-all duration-300 font-sans border border-white/10 px-4 py-2 group-hover:border-red-600/50">
                <span className="group-hover:text-red-600 transition-colors mr-1">/</span>
                {klien.logo}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Garis Dekoratif Bawah */}
        <div className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </section>
  );
}