import React from 'react';
import { motion } from 'framer-motion';

export default function Statistik() {
  const stats = [
    { label: "INSIDEN TERTANGANI", value: "500", suffix: "+" },
    { label: "WAKTU RESPONS", value: "15", suffix: "m" },
    { label: "STAKEHOLDER", value: "200", suffix: "+" },
    { label: "TINGKAT KEBERHASILAN", value: "98", suffix: "%" }
  ];

  return (
    <section className="py-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center items-end gap-1 mb-2">
                <motion.span 
                  className="text-4xl md:text-6xl font-black text-white tracking-tighter"
                >
                  {stat.value}
                </motion.span>
                <span className="text-xl md:text-2xl font-black text-red-600 mb-1 md:mb-2">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-slate-500 uppercase">
                {stat.label}
              </p>
              
              {/* Decorative line under each stat */}
              <div className="mt-4 w-4 h-[1px] bg-red-600/30 mx-auto group-hover:w-12 group-hover:bg-red-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}