import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';

// Komponen Counter Kecil untuk Angka Berjalan
function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export default function Statistik() {
  const stats = [
    { label: "INSIDEN TERTANGANI", value: 500, suffix: "+" },
    { label: "WAKTU RESPONS", value: 15, suffix: "m" },
    { label: "STAKEHOLDER", value: 200, suffix: "+" },
    { label: "TINGKAT KEBERHASILAN", value: 98, suffix: "%" }
  ];

  return (
    <section className="py-24 transition-colors duration-700 bg-slate-50 dark:bg-[#050505] border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      {/* Background Subtle Glow: Menyesuaikan opasitas dengan tema */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 dark:bg-red-600/[0.03] blur-[120px] pointer-events-none" />

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
                <span className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter transition-colors duration-500">
                  <Counter value={stat.value} />
                </span>
                <span className="text-xl md:text-2xl font-black text-red-600 mb-1 md:mb-2">
                  {stat.suffix}
                </span>
              </div>
              
              <p className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-slate-500 dark:text-slate-500 uppercase">
                {stat.label}
              </p>
              
              {/* Garis dekoratif yang lebih halus di mode terang */}
              <div className="mt-6 w-4 h-[1px] bg-red-600/20 dark:bg-red-600/30 mx-auto group-hover:w-16 group-hover:bg-red-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}