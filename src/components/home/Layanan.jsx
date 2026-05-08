import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layanan() {
  const [activeService, setActiveService] = useState(null);

  const layananData = [
    {
      judul: "Crisis Monitoring",
      desc: "Monitoring percakapan digital secara real-time melalui social listening, tracking keyword, dan sentiment analysis untuk memetakan influencer & buzzer.",
      code: "PROTOCOL/01",
      details: ["Social Listening", "Tracking Keyword", "Sentiment Analysis", "Mapping Influencer"]
    },
    {
      judul: "Rapid Response",
      desc: "Tim respons cepat untuk penyusunan holding statement, klarifikasi strategis, dan narrative stabilization guna melakukan damage control seketika.",
      code: "PROTOCOL/02",
      details: ["Holding Statement", "Media Response", "Narrative Stabilization", "Damage Control"]
    },
    {
      judul: "Narrative Control",
      desc: "Strategi pengendalian arah percakapan publik melalui narrative reframing, counter framing, dan opinion shaping di berbagai platform.",
      code: "PROTOCOL/03",
      details: ["Narrative Reframing", "Counter Framing", "Opinion Shaping", "Multi-platform Comm"]
    },
    {
      judul: "Reputation Recovery",
      desc: "Pemulihan reputasi jangka panjang melalui kampanye positif, leadership positioning, dan SEO reputation recovery untuk membangun kembali kepercayaan.",
      code: "PROTOCOL/04",
      details: ["Positive Campaign", "Trust Rebuilding", "SEO Recovery", "Media Reinforcement"]
    },
    {
      judul: "Digital War Room",
      desc: "Layanan premium berupa pusat komando situasi, crisis dashboard, dan intelligence mapping untuk perlindungan penuh selama periode krusial.",
      code: "PROTOCOL/05",
      details: ["Situation Room", "Crisis Dashboard", "Intelligence Mapping", "Election Protection"]
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 relative transition-colors duration-700 bg-white dark:bg-[#050505] border-b border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-left md:text-center"
        >
          <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-red-600 font-bold">
            // Katalog_Solusi_Strategis
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mt-4 text-slate-900 dark:text-white uppercase italic">
            Strategic Political <span className="text-red-600">Crisis Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {layananData.map((item, i) => {
            const isActive = activeService === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveService(i)}
                onMouseEnter={() => window.innerWidth > 1024 && setActiveService(i)}
                onMouseLeave={() => window.innerWidth > 1024 && setActiveService(null)}
                className={`p-8 border transition-all duration-500 relative overflow-hidden cursor-pointer select-none group
                  ${isActive
                    ? 'border-red-600/50 bg-slate-50 dark:bg-red-600/[0.04] shadow-2xl shadow-red-600/5'
                    : 'border-slate-200 dark:border-white/5 bg-transparent lg:hover:border-red-600/30'}`}
              >
                {/* Kode Teknis */}
                <div className={`absolute top-6 right-8 font-mono text-[9px] tracking-widest transition-colors duration-500 ${isActive ? 'text-red-600' : 'text-slate-300 dark:text-slate-700'}`}>
                  {item.code}
                </div>

                {/* Indikator Garis Samping */}
                <div className={`absolute top-0 left-0 w-[2px] h-full bg-red-600 transition-transform duration-700 origin-bottom ${isActive ? 'scale-y-100' : 'scale-y-0'}`}></div>

                <h3 className={`text-xl font-black mb-4 tracking-tight uppercase italic transition-all duration-500 ${isActive ? 'text-red-600 translate-x-2' : 'text-slate-900 dark:text-white'}`}>
                  {item.judul}
                </h3>

                <p className={`text-[11px] leading-relaxed transition-colors duration-500 uppercase tracking-wide mb-6 ${isActive ? 'text-slate-600 dark:text-slate-300' : 'text-slate-500 dark:text-slate-500'}`}>
                  {item.desc}
                </p>

                {/* List Detail yang muncul saat Aktif - Diperbesar untuk keterbacaan */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {item.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] md:text-[11px] font-mono px-3 py-1.5 border transition-all duration-500 uppercase tracking-wider
        ${isActive
                          ? 'border-red-600/40 text-red-600 bg-red-600/5'
                          : 'border-transparent text-transparent'
                        }`}
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <div className="mt-8 relative">
                  <div className={`h-[1px] transition-all duration-1000 ${isActive ? 'w-full bg-red-600' : 'w-10 bg-slate-200 dark:bg-white/10'}`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center lg:hidden">
          <p className="text-[8px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">
            Tap layanan untuk detail protokol_
          </p>
        </div>
      </div>
    </section>
  );
}