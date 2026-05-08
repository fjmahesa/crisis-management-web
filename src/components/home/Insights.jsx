import React from 'react';
import { motion } from 'framer-motion';

export default function Insights() {
  const articles = [
    {
      id: "01",
      kategori: "RISIKO GLOBAL",
      judul: "Ancaman Siber 2026: Bagaimana Infrastruktur Kritis Bertahan?",
      tanggal: "05 MEI 2026",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      kategori: "MANAJEMEN REPUTASI",
      judul: "Navigasi Krisis Komunikasi di Era Deepfake dan AI Generatif.",
      tanggal: "28 APR 2026",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 transition-colors duration-700 bg-white dark:bg-[#050505] border-t border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-left"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase text-[#0F172A] dark:text-white">
              LAPORAN <span className="text-red-600">INTELIJEN</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
              Analisis Mendalam Dinamika Krisis Global
            </p>
          </motion.div>
          
          <button className="text-red-600 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase border-b border-red-600/30 pb-2 hover:border-red-600 transition-all duration-300">
            Lihat Semua Arsip //
          </button>
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          {articles.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-video mb-8 border border-slate-100 dark:border-white/10 group-hover:border-red-600/50 transition-all duration-500 shadow-sm">
                {/* Overlay saat Hover */}
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                <img 
                  src={post.img} 
                  alt={post.judul}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                
                {/* ID Tag */}
                <div className="absolute top-5 left-5 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 z-20 border border-slate-200 dark:border-white/10">
                  <span className="text-red-600 font-mono text-[9px] md:text-[10px] font-bold">REP_{post.id}</span>
                </div>
              </div>

              <div className="space-y-4 px-1">
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-mono text-[10px] font-bold tracking-widest">{post.kategori}</span>
                  <span className="h-[1px] w-8 bg-slate-200 dark:bg-white/20"></span>
                  <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px]">{post.tanggal}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#0F172A] dark:text-white group-hover:text-red-600 transition-colors duration-300 leading-tight italic uppercase">
                  {post.judul}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium leading-relaxed line-clamp-2 transition-colors duration-500">
                  Menelaah bagaimana protokol keamanan strategis diadaptasi untuk menghadapi gelombang ancaman baru di era ketidakpastian global...
                </p>
                
                <div className="pt-6 flex items-center gap-3 text-[10px] font-mono font-bold text-[#0F172A] dark:text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                  <span>BACA LAPORAN LENGKAP</span>
                  <span className="text-red-600">---&gt;</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}