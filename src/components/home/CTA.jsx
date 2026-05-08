import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaShieldAlt } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-900 dark:bg-red-600 transition-colors duration-700 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-red-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl">
              <FaShieldAlt />
            </div>
          </div>

          <h4 className="text-red-500 dark:text-red-200 font-mono text-[10px] tracking-[0.5em] uppercase font-bold mb-6 italic">
            // Secure_Communication_Initiated
          </h4>
          
          <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-8">
            Reputasi dibangun bertahun-tahun. <br />
            <span className="opacity-50">Krisis terjadi dalam hitungan menit.</span>
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-300 dark:text-red-50 uppercase tracking-widest leading-relaxed mb-12 font-medium">
            Jangan menunggu isu menjadi liar. Amankan kontrol narasi Anda sekarang melalui jalur konsultasi rahasia kami.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/yournumber"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-10 py-5 bg-white text-slate-900 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-2xl hover:bg-red-50 transition-colors"
            >
              <FaWhatsapp className="text-lg" /> Konsultasi Rahasia
            </motion.a>
            
            <motion.a
              href="mailto:contact@yourdomain.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-10 py-5 bg-transparent border border-white/30 text-white font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
            >
              <FaEnvelope className="text-lg" /> Kirim Briefing
            </motion.a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 opacity-30">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <span className="text-[8px] font-mono text-white uppercase tracking-[0.2em]">Encrypted Data</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <span className="text-[8px] font-mono text-white uppercase tracking-[0.2em]">Private Server</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <span className="text-[8px] font-mono text-white uppercase tracking-[0.2em]">Discreet Operation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}