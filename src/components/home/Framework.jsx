import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaProjectDiagram } from 'react-icons/fa';

export default function Framework() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      letter: "D", 
      title: "Detect Early Signal", 
      desc: "Deteksi isu sebelum viral melalui sistem monitoring real-time.",
      detail: "Menggunakan algoritma pemantauan untuk menangkap percikan percakapan negatif sebelum mencapai titik ledak publik.",
      // Gambar: Pusat Komando / Pemantauan Data
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      letter: "I", 
      title: "Identify Source", 
      desc: "Identifikasi apakah organik atau serangan terstruktur.",
      detail: "Analisis mendalam terhadap aktor di balik narasi untuk menentukan strategi respons yang tepat.",
      // Gambar: Kode/Jaringan Digital
      bgImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      letter: "G", 
      title: "Gauge Impact", 
      desc: "Mengukur potensi eskalasi dan dampak reputasi.",
      detail: "Pemetaan risiko sistemik untuk memprediksi seberapa jauh isu ini akan menyebar di berbagai kanal media.",
      // Gambar: Analisis Grafik/Chart
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      letter: "I", 
      title: "Immediate Response", 
      desc: "Respons awal yang cepat dan terukur.",
      detail: "Penerbitan holding statement strategis untuk mengunci narasi sementara.",
      bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    { 
      letter: "T", 
      title: "Tactical Distribution", 
      desc: "Distribusi narasi di kanal yang tepat.",
      detail: "Menentukan platform prioritas (Twitter, Instagram, Media Massa) untuk menyebarkan narasi penyeimbang.",
      bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
    },
    { 
      letter: "A", 
      title: "Algorithm Strategy", 
      desc: "Strategi distribusi berbasis algoritma platform.",
      detail: "Mengoptimalkan teknik distribusi agar narasi positif mendapatkan visibilitas lebih tinggi.",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    { 
      letter: "L", 
      title: "Long-term Recovery", 
      desc: "Pemulihan reputasi jangka panjang.",
      detail: "Rekonstruksi citra dan pemulihan kepercayaan melalui kampanye berkelanjutan pasca-krisis.",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-[#080808] transition-colors duration-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          {/* <h4 className="text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 flex items-center gap-2">
            <FaProjectDiagram /> Alur_Metodologi
          </h4> */}
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-none">
            D.I.G.I.T.A.L <span className="text-red-600">Framework</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,450px] gap-12 items-start">
          
          <div className="flex flex-wrap lg:flex-nowrap justify-start items-center gap-3 md:gap-4 relative">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center">
                  <motion.button
                    onClick={() => setActiveStep(i)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-lg md:text-2xl font-black transition-all duration-300 border-2 relative z-10
                      ${activeStep === i 
                        ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/20' 
                        : 'bg-white dark:bg-white/5 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-white/10 lg:hover:border-red-600/50'
                      }`}
                  >
                    {step.letter}
                  </motion.button>
                  <motion.div 
                    animate={{ width: activeStep === i ? '100%' : '0%' }}
                    className="h-1 bg-red-600 mt-2 rounded-full transition-all"
                  />
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex items-center text-slate-300 dark:text-slate-800">
                    <FaChevronRight size={12} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-white dark:bg-slate-900 p-8 md:p-10 border-l-4 border-red-600 shadow-2xl shadow-black/10 min-h-[350px] flex flex-col justify-center overflow-hidden"
            >
              {/* BACKGROUND IMAGE WITH UPDATED OVERLAY */}
              <div 
                className="absolute inset-0 z-0 transition-transform duration-1000 ease-out scale-110"
                style={{ 
                  backgroundImage: `url(${steps[activeStep].bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay: Opacity dikurangi pada mode light (white/80) agar gambar lebih terlihat */}
                <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/90 backdrop-blur-[1px]"></div>
              </div>

              <div className="relative z-10">
                {/* <span className="font-mono text-red-600 text-[10px] font-bold tracking-[0.3em] mb-3 uppercase flex items-center gap-2">
                  <span className="w-4 h-[1px] bg-red-600"></span>
                  Phase_0{activeStep + 1} // {steps[activeStep].letter}
                </span> */}
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-4 tracking-tight leading-none">
                  {steps[activeStep].title}
                </h3>
                <p className="text-[14px] text-slate-800 dark:text-slate-200 font-bold mb-6 leading-relaxed uppercase tracking-wide">
                  {steps[activeStep].desc}
                </p>
                <p className="text-[12px] text-slate-600 dark:text-slate-400 leading-relaxed uppercase tracking-widest border-t border-slate-200 dark:border-white/10 pt-6">
                  {steps[activeStep].detail}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        <div className="mt-12 text-left lg:hidden">
          <p className="text-[8px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em] animate-pulse">
            Select phase to initialize data_
          </p>
        </div>

      </div>
    </section>
  );
}