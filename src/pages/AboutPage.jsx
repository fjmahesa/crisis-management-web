import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaShieldAlt, FaChartBar, FaBolt } from 'react-icons/fa';

export default function AboutPage() {
  const values = [
    { icon: <FaChartBar />, title: "Data Driven", desc: "Setiap langkah berdasarkan analisis sentimen dan audit digital." },
    { icon: <FaBolt />, title: "Rapid Action", desc: "Respons instan untuk memitigasi eskalasi sebelum menjadi viral." },
    { icon: <FaShieldAlt />, title: "Discrete", desc: "Privasi klien adalah integritas tertinggi dalam operasi kami." }
  ];

  return (
    <main className="pt-32 pb-24 bg-white dark:bg-[#050505] transition-colors duration-700 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION ABOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.95] uppercase tracking-tighter mb-8">
              Navigasi Reputasi di Era <span className="text-red-600">Disrupsi Informasi.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
              Kami adalah tim strategic crisis management yang berpengalaman dalam menangani komunikasi politik, pengendalian narasi digital, dan pemulihan reputasi publik.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800" 
                alt="Command Center" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* TRACK RECORD: ID & MY */}
        <div className="py-24 border-y border-slate-100 dark:border-white/5 mb-32 relative overflow-hidden">
          {/* PERBAIKAN: Font size responsif (text-6xl ke 9xl) dan penyesuaian posisi agar tidak terpotong di mobile */}
          <div className="absolute -top-4 -right-2 md:top-0 md:right-0 p-4 md:p-8 text-slate-200/50 dark:text-white/[0.03] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black pointer-events-none uppercase z-0 select-none tracking-tighter">
            History
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-4 flex items-center gap-4">
               <FaGlobeAmericas className="text-5xl text-red-600" />
               <div className="h-[1px] w-full bg-red-600/30"></div>
            </div>
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-6 tracking-tight italic">
                Rekam Jejak Internasional: Dari Jakarta Hingga Kuala Lumpur.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 uppercase tracking-widest text-xs leading-loose font-bold italic">
                Berpengalaman dalam dinamika politik Indonesia serta keterlibatan pada momentum Pemilihan Umum Raya Malaysia tahun 2018 dan 2022. Kami memahami bagaimana opini publik, framing media, dan distribusi digital dapat memengaruhi citra serta elektabilitas seorang tokoh publik.
              </p>
            </div>
          </div>
        </div>

        {/* MISSION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="space-y-8">
             <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic">Partner Strategis Dalam Tantangan Politik Modern.</h2>
             <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed uppercase tracking-wider">
                Kami bekerja bersama tokoh politik, kandidat pemilu, public figure, organisasi, dan tim strategis untuk:
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Mendeteksi potensi krisis", "Mengendalikan eskalasi isu", "Membangun strategi terukur", "Menjaga kepercayaan publik"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-200">{item}</span>
                  </div>
                ))}
             </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {values.map((val, i) => (
              <div key={i} className="group p-8 bg-slate-900 dark:bg-red-600 border border-slate-800 flex items-start gap-6 transition-all hover:scale-[1.02]">
                <div className="text-red-500 dark:text-white text-3xl">{val.icon}</div>
                <div>
                  <h5 className="text-white font-black uppercase text-sm mb-2">{val.title}</h5>
                  <p className="text-slate-400 dark:text-red-50 text-[10px] uppercase tracking-widest leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}