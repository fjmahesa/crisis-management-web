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
    return springValue.on("change", (latest) => {
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
  // Metrik diperbarui agar relevan dengan Crisis Management & Intelligence
  const stats = [
    { 
      label: "DATA POINTS MONITORED", 
      value: 1.2, 
      suffix: "M+", 
      sub: "Real-time social listening" 
    },
    { 
      label: "DETECTION VELOCITY", 
      value: 45, 
      suffix: "s", 
      sub: "Average alert speed" 
    },
    { 
      label: "REPUTATION RECOVERY", 
      value: 94, 
      suffix: "%", 
      sub: "Sentiment restoration rate" 
    },
    { 
      label: "CRITICAL INCIDENTS", 
      value: 250, 
      suffix: "+", 
      sub: "Successfully neutralized" 
    }
  ];

  return (
    <section className="py-20 transition-colors duration-700 bg-white dark:bg-[#050505] border-y border-slate-100 dark:border-white/5 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 dark:bg-red-600/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group cursor-default"
            >
              <div className="flex justify-center items-end gap-1 mb-1">
                <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter transition-colors duration-500">
                  <Counter value={stat.value} />
                </span>
                <span className="text-lg md:text-xl font-black text-red-600 mb-1 md:mb-1.5">
                  {stat.suffix}
                </span>
              </div>
              
              <p className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] text-slate-900 dark:text-white font-bold uppercase mb-1">
                {stat.label}
              </p>
              
              <p className="text-[8px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-widest italic">
                // {stat.sub}
              </p>
              
              {/* Garis dekoratif dinamis */}
              <div className="mt-6 w-6 h-[2px] bg-slate-200 dark:bg-white/10 mx-auto group-hover:w-12 group-hover:bg-red-600 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}