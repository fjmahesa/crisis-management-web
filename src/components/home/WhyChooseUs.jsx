import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserSecret, FaChartLine, FaClock, FaMicrochip } from 'react-icons/fa';

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: <FaClock />,
      title: "Respons Cepat 24/7",
      desc: "Krisis tidak mengenal jam kerja. Tim kami siaga penuh untuk memitigasi isu sebelum menjadi berita utama di pagi hari.",
    },
    {
      icon: <FaUserSecret />,
      title: "Confidential & Discreet",
      desc: "Privasi adalah prioritas tertinggi. Seluruh operasi dilakukan dengan protokol kerahasiaan ketat untuk menjaga nama baik klien.",
    },
    {
      icon: <FaChartLine />,
      title: "Framework Berbasis Data",
      desc: "Bukan sekadar asumsi. Kami menggunakan metrik digital untuk mengukur sentimen publik secara akurat.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Pengalaman Krisis Politik",
      desc: "Berpengalaman menangani dinamika politik digital yang agresif, dari momentum pemilu hingga isu kebijakan publik.",
    },
    {
      icon: <FaMicrochip />,
      title: "Teknologi Intelijen",
      desc: "Menggunakan tools monitoring canggih untuk mendeteksi pola serangan buzzer atau disinformasi terstruktur.",
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-[#080808] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          {/* <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4"
          >
            Core_Advantages
          </motion.h4> */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
          >
            Dibangun untuk Era <br />
            <span className="text-red-600">Politik Digital</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          
          {/* Card 1: Respons 24/7 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col justify-end group transition-all"
          >
            <div className="mb-auto text-2xl text-red-600 group-hover:scale-110 transition-transform origin-left">{highlights[0].icon}</div>
            <h3 className="text-lg font-black dark:text-white uppercase mb-2 leading-none">{highlights[0].title}</h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-relaxed">{highlights[0].desc}</p>
          </motion.div>

          {/* Card 2: Confidential (FIXED ICON COLOR FOR DARK MODE) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-1 p-8 bg-slate-900 dark:bg-red-600 border border-slate-800 dark:border-red-500 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute right-[-10%] bottom-[-10%] opacity-10 text-[180px] rotate-12 transition-transform group-hover:rotate-0 duration-700 text-white">
              <FaUserSecret />
            </div>
            <div className="relative z-10">
              {/* Ikon berubah ke putih di dark mode agar tidak menyatu dengan bg merah */}
              <div className="mb-6 text-3xl text-red-600 dark:text-white transition-colors duration-500">
                {highlights[1].icon}
              </div>
              <h3 className="text-2xl font-black text-white uppercase mb-3 leading-none">{highlights[1].title}</h3>
              <p className="text-xs text-slate-300 dark:text-red-50 uppercase tracking-widest leading-relaxed max-w-md">{highlights[1].desc}</p>
            </div>
          </motion.div>

          {/* Cards 3, 4, 5: Standard Cards */}
          {[2, 3, 4].map((index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col justify-end group"
            >
              <div className="mb-auto text-2xl text-red-600 group-hover:scale-110 transition-transform origin-left">{highlights[index].icon}</div>
              <h3 className="text-lg font-black dark:text-white uppercase mb-2 leading-none">{highlights[index].title}</h3>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-relaxed">{highlights[index].desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}