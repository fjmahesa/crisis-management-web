import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Layanan() {
  const [activeService, setActiveService] = useState(null);

  const layananData = [
    {
      judul: "Crisis Monitoring",
      desc: "Monitoring percakapan digital secara real-time melalui social listening, tracking keyword, dan sentiment analysis untuk memetakan influencer & buzzer.",
      details: ["Social Listening", "Tracking Keyword", "Sentiment Analysis", "Mapping Influencer"]
    },
    {
      judul: "Rapid Response",
      desc: "Tim respons cepat untuk penyusunan holding statement, klarifikasi strategis, dan narrative stabilization guna melakukan damage control seketika.",
      details: ["Holding Statement", "Media Response", "Narrative Stabilization", "Damage Control"]
    },
    {
      judul: "Narrative Control",
      desc: "Strategi pengendalian arah percakapan publik melalui narrative reframing, counter framing, dan opinion shaping di berbagai platform.",
      details: ["Narrative Reframing", "Counter Framing", "Opinion Shaping", "Multi-platform Comm"]
    },
    {
      judul: "Reputation Recovery",
      desc: "Pemulihan reputasi jangka panjang melalui kampanye positif, leadership positioning, dan SEO reputation recovery untuk membangun kembali kepercayaan.",
      details: ["Positive Campaign", "Trust Rebuilding", "SEO Recovery", "Media Reinforcement"]
    },
    {
      judul: "Digital War Room",
      desc: "Layanan premium berupa pusat komando situasi, crisis dashboard, dan intelligence mapping untuk perlindungan penuh selama periode krusial.",
      details: ["Situation Room", "Crisis Dashboard", "Intelligence Mapping", "Election Protection"]
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 relative transition-colors duration-700 bg-slate-50 dark:bg-[#050505] border-b border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-left md:text-center"
        >
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
                    ? 'border-red-600 bg-slate-900 dark:bg-black shadow-2xl shadow-red-600/20 scale-[1.02] z-10'
                    : 'border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/50 lg:hover:border-red-600/50'}`}
              >
                {/* Indikator Garis Samping */}
                <div className={`absolute top-0 left-0 w-[3px] h-full bg-red-600 transition-transform duration-700 origin-bottom ${isActive ? 'scale-y-100' : 'scale-y-0'}`}></div>

                {/* Judul */}
                <h3 className={`text-xl font-black mb-4 tracking-tight uppercase italic transition-all duration-500 
                  ${isActive ? 'text-red-600 translate-x-2' : 'text-slate-900 dark:text-white'}`}>
                  {item.judul}
                </h3>

                {/* Deskripsi */}
                <p className={`text-[11px] leading-relaxed transition-colors duration-500 uppercase tracking-wide mb-8 
                  ${isActive ? 'text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                  {item.desc}
                </p>

                {/* Tags Detail - Perubahan Background & Teks saat Hover/Active */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {item.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className={`text-[9px] md:text-[10px] font-mono px-3 py-1.5 border transition-all duration-500 uppercase tracking-widest
                        ${isActive 
                          ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                          : 'bg-transparent border-red-600/30 text-red-600 dark:text-red-500'
                        }
                      `}
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