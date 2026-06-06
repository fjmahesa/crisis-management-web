import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRegBookmark } from 'react-icons/fa';

export default function Insights() {
  const [activeArticle, setActiveArticle] = useState(null);

  const articles = [
    {
      category: "Political Analysis",
      date: "Mei 2026",
      title: "Anatomi Serangan Buzzer: Bagaimana Mengidentifikasi Operasi Terstruktur",
      excerpt: "Memahami pola distribusi narasi dan koordinasi aktor di balik kampanye disinformasi digital.",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Crisis Protocol",
      date: "April 2026",
      title: "The Golden Hour: Mengapa 60 Menit Pertama Menentukan Nasib Reputasi Anda",
      excerpt: "Panduan taktis dalam mengambil keputusan krusial saat isu negatif mulai menyentuh algoritma viral.",
      image: "https://images.unsplash.com/photo-1508921334172-b68ed301dc82?auto=format&fit=crop&q=80&w=800"
    },
    {
      category: "Digital Strategy",
      date: "Maret 2026",
      title: "Narrative Reframing: Mengubah Serangan Menjadi Amunisi Komunikasi",
      excerpt: "Teknik mengubah sudut pandang publik melalui kontrol distribusi informasi yang cerdas.",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4"
            >
              Intelligence_Journal
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none"
            >
              Strategic <span className="text-red-600">Insights</span>
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ gap: '1.5rem' }}
            className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 hover:text-red-600 transition-all border-b border-slate-100 dark:border-white/10 pb-2"
          >
            Lihat Semua Analisis <FaArrowRight />
          </motion.button>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveArticle(i)}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-slate-100 dark:bg-white/5">
                <motion.img 
                  src={post.image} 
                  alt={post.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white dark:bg-slate-900 px-3 py-1 text-[9px] font-mono uppercase tracking-widest text-red-600 shadow-xl">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className={`transition-all duration-500 ${activeArticle === i ? 'pl-4 border-l-2 border-red-600' : 'pl-0 border-l-0'}`}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">{post.date}</span>
                  <div className="h-[1px] w-8 bg-slate-200 dark:bg-white/10"></div>
                  <FaRegBookmark className={`text-[10px] ${activeArticle === i ? 'text-red-600' : 'text-slate-300'}`} />
                </div>
                
                <h3 className={`text-lg font-black leading-tight uppercase mb-4 transition-colors duration-300 ${activeArticle === i ? 'text-red-600' : 'text-slate-900 dark:text-white'}`}>
                  {post.title}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-wide">
                  {post.excerpt}
                </p>

                <div className={`mt-6 overflow-hidden transition-all duration-500 ${activeArticle === i ? 'h-8 opacity-100' : 'h-0 opacity-0'}`}>
                   <span className="text-[9px] font-mono font-bold text-red-600 uppercase tracking-[0.3em] flex items-center gap-2">
                     Baca Selengkapnya <FaArrowRight />
                   </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}