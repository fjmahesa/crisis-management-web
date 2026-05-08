import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-24 md:py-40 px-6 relative overflow-hidden transition-colors duration-700 bg-white dark:bg-[#050505]">
      
      {/* BACKGROUND DECORATIVE ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Merah: Disesuaikan opasitasnya agar tidak terlalu menusuk di mode terang */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/[0.07] dark:bg-red-600/10 blur-[150px] rounded-full" />
        
        {/* Grid Pattern: Menggunakan currentColor agar adaptif */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]" style={{ 
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-slate-200 dark:border-red-600/30 bg-slate-50/50 dark:bg-red-600/[0.02] backdrop-blur-md p-8 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-slate-200 dark:shadow-none"
        >
          {/* Corner Accents (Futuristic Frame) */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-600" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-600" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-red-600 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8 block font-bold">
              Status: Menunggu Inisialisasi
            </span>
            
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-[#0F172A] dark:text-white transition-colors duration-500 uppercase italic">
              SIAP MENGHADAPI <br />
              <span className="text-red-600">KRISIS BERIKUTNYA?</span>
            </h2>

            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-14 text-xs md:text-sm leading-relaxed tracking-[0.2em] uppercase font-mono italic font-medium">
              "Jangan menunggu kehancuran untuk mulai membangun pertahanan. Aktifkan protokol manajemen krisis Anda sekarang."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(220, 38, 38, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-red-600 text-white px-12 py-5 font-black text-xs uppercase tracking-[0.3em] transition-all duration-300 relative z-10"
              >
                Hubungi Pusat Kendali
              </motion.button>

              <button className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-white transition-all uppercase border-b border-slate-200 dark:border-red-600/30 pb-2">
                Unduh Company Profile (.PDF)
              </button>
            </div>
          </motion.div>

          {/* Decorative Scanner Line */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30"
          />
        </motion.div>
      </div>
    </section>
  );
}