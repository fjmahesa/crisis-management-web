import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Protokol() {
  const [activeItem, setActiveItem] = useState(null);

  const protokolData = [
    { tahap: "01", judul: "DETEKSI DINI", isi: "Pemindaian algoritma pada media sosial dan portal berita untuk mendeteksi anomali reputasi sebelum menjadi krisis nasional." },
    { tahap: "02", judul: "ANALISIS RISIKO", isi: "Penentuan level urgensi dan identifikasi stakeholder utama yang terdampak menggunakan matriks probabilitas krisis." },
    { tahap: "03", judul: "EKSEKUSI TAKTIS", isi: "Penyusunan pernyataan publik, manajemen kanal komunikasi, dan koordinasi langkah hukum secara paralel dalam hitungan jam." },
    { tahap: "04", judul: "STABILISASI", isi: "Monitoring pasca-insiden untuk memastikan sentimen negatif telah terisolasi dan memulai proses pemulihan citra brand." }
  ];

  return (
    <section className="py-24 md:py-40 px-6 relative transition-colors duration-700 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-[#0F172A] dark:text-white uppercase italic">
            PROTOKOL <span className="text-red-600">RESPONS</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
            Siklus Kerja Manajemen Krisis Terpadu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-32 md:gap-y-0 relative">
          {/* Garis Tengah: Beradaptasi dengan tema */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-white/10 hidden md:block"></div>

          {protokolData.map((item, index) => {
            const isActive = activeItem === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveItem(index)}
                onMouseEnter={() => window.innerWidth > 768 && setActiveItem(index)}
                onMouseLeave={() => window.innerWidth > 768 && setActiveItem(null)}
                className={`relative flex flex-col cursor-pointer p-8 rounded-sm transition-all duration-500 
                  ${index % 2 !== 0 ? 'md:mt-32' : ''} 
                  ${isActive ? 'bg-slate-50 dark:bg-red-600/[0.03] shadow-sm' : 'bg-transparent'}`}
              >
                {/* Angka Latar - Tipografi yang lebih mature */}
                <div className={`text-8xl md:text-[11rem] font-black absolute -top-12 -left-6 md:-left-12 pointer-events-none font-mono transition-colors duration-700 leading-none
                  ${isActive ? 'text-red-600/[0.08] dark:text-red-600/10' : 'text-slate-100 dark:text-white/[0.03]'}`}>
                  {item.tahap}
                </div>
                
                {/* Konten Utama */}
                <div className={`relative z-10 pl-6 border-l-[3px] transition-all duration-500 ${isActive ? 'border-red-600' : 'border-slate-200 dark:border-red-600/20'}`}>
                  <h3 className={`text-xl md:text-2xl font-black mb-5 tracking-tight flex items-center gap-3 transition-colors duration-500 
                    ${isActive ? 'text-[#0F172A] dark:text-white' : 'text-slate-400 dark:text-white/60'}`}>
                    <span className={`font-mono text-base transition-all duration-500 ${isActive ? 'text-red-600 opacity-100' : 'opacity-40'}`}>
                      //
                    </span> 
                    {item.judul}
                  </h3>

                  <p className={`text-sm md:text-base leading-relaxed transition-colors duration-500 
                    ${isActive ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400 dark:text-slate-500'}`}>
                    {item.isi}
                  </p>
                  
                  {/* Progress Bar / Bar Scanner */}
                  <div className="mt-8 overflow-hidden h-[2px] w-full bg-slate-100 dark:bg-white/5">
                    <motion.div 
                      className="h-full bg-red-600"
                      initial={{ x: '-100%' }}
                      animate={{ x: isActive ? '0%' : '-100%' }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Overlay Dekoratif untuk mode terang */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 dark:hidden z-0 pointer-events-none" />
    </section>
  );
}