import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-700 border-b border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* BAGIAN KIRI: GAMBAR RELEVAN */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Dekorasi Bingkai Teknis */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-red-600 z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-slate-200 dark:border-white/10 z-10"></div>
            
            {/* Image Container */}
            <div className="relative aspect-video lg:aspect-square overflow-hidden bg-slate-900 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Crisis War Room" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 ease-in-out"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              
              {/* Label Floating
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-[10px] font-mono text-red-500 uppercase tracking-[0.4em] mb-1">Status: Monitoring</p>
                <p className="text-white font-black text-xl uppercase tracking-tighter italic">Intelligence Command Center</p>
              </div> */}
            </div>
          </motion.div>

          {/* BAGIAN KANAN: TEKS FILOSOFI */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeIn}
            className="space-y-8"
          >
            <div>
              <h4 className="text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4">
                Tentang Kami
              </h4>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter uppercase">
                Crisis Management Berbasis Narasi & Kecepatan Respons
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              <p className="text-base md:text-lg italic border-l-4 border-red-600 pl-6 py-2 bg-slate-50 dark:bg-white/5">
                "Di era digital, krisis bukan lagi sekadar persoalan fakta — tetapi persoalan persepsi, distribusi informasi, dan kontrol narasi."
              </p>
              
              <p className="text-sm md:text-base">
                Satu potongan video, satu framing negatif, atau satu isu viral dapat mengubah reputasi publik dalam hitungan jam. Kami hadir sebagai benteng pertahanan digital yang membantu klien mendeteksi ancaman sebelum meledak, mengendalikan arah percakapan publik, dan memulihkan citra secara terukur.
              </p>
              
              {/* <div className="pt-6 grid grid-cols-2 gap-8 border-t border-slate-100 dark:border-white/5">
                <div>
                  <h5 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-widest mb-2">Proteksi 24/7</h5>
                  <p className="text-[10px] uppercase leading-relaxed opacity-70">Pemantauan algoritma tanpa henti untuk menjaga stabilitas reputasi.</p>
                </div>
                <div>
                  <h5 className="text-slate-900 dark:text-white font-black uppercase text-xs tracking-widest mb-2">Operasi Senyap</h5>
                  <p className="text-[10px] uppercase leading-relaxed opacity-70">Manajemen krisis dilakukan dengan diskresi tinggi dan kerahasiaan penuh.</p>
                </div>
              </div> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}