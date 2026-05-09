import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine,    
  FaBullseye,     
  FaComments,     
  FaShieldAlt     
} from "react-icons/fa";

export default function Layanan() {
  const [activeService, setActiveService] = useState(null);

  const layananData = [
    {
      judul: "Crisis Monitoring",
      icon: <FaChartLine size={20} />, 
      desc: "Monitoring percakapan digital secara real-time melalui social listening, tracking keyword, dan sentiment analysis untuk memetakan influencer & buzzer.",
      details: ["Social Listening", "Tracking Keyword", "Sentiment Analysis", "Mapping Influencer"]
    },
    {
      judul: "Rapid Response",
      icon: <FaBullseye size={20} />, 
      desc: "Tim respons cepat untuk penyusunan holding statement, klarifikasi strategis, dan narrative stabilization guna melakukan damage control seketika.",
      details: ["Holding Statement", "Media Response", "Narrative Stabilization", "Damage Control"]
    },
    {
      judul: "Narrative Control",
      icon: <FaComments size={20} />, 
      desc: "Strategi pengendalian arah percakapan publik melalui narrative reframing, counter framing, dan opinion shaping di berbagai platform.",
      details: ["Narrative Reframing", "Counter Framing", "Opinion Shaping", "Multi-platform Comm"]
    },
    {
      judul: "Reputation Recovery",
      icon: <FaShieldAlt size={20} />, 
      desc: "Pemulihan reputasi jangka panjang melalui kampanye positif, leadership positioning, dan SEO reputation recovery untuk membangun kembali kepercayaan.",
      details: ["Positive Campaign", "Trust Rebuilding", "SEO Recovery", "Media Reinforcement"]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-6 relative transition-colors duration-700 bg-slate-50 dark:bg-[#050505] border-b border-slate-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto"> {/* Mengurangi max-width agar grid 2x2 terlihat lebih compact */}
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

        {/* Layout disesuaikan menjadi grid-cols-2 untuk desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
                className={`p-10 border transition-all duration-500 relative overflow-hidden cursor-pointer select-none group flex flex-col min-h-[320px]
                  ${isActive
                    ? 'border-red-600 bg-slate-900 dark:bg-black shadow-2xl shadow-red-600/20 scale-[1.01] z-10'
                    : 'border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/50 lg:hover:border-red-600/50'}`}
              >
                <div className={`absolute top-0 left-0 w-[3px] h-full bg-red-600 transition-transform duration-700 origin-bottom ${isActive ? 'scale-y-100' : 'scale-y-0'}`}></div>

                <div className={`flex items-center gap-4 transition-transform duration-500 mb-6 ${isActive ? 'translate-x-2' : ''}`}>
                  <div className={`transition-colors duration-500 ${isActive ? 'text-red-500' : 'text-slate-400 dark:text-slate-600'}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-2xl font-black tracking-tight uppercase italic transition-colors duration-500 
                    ${isActive ? 'text-red-600' : 'text-slate-900 dark:text-white'}`}>
                    {item.judul}
                  </h3>
                </div>

                <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-500 uppercase tracking-wide mb-10 flex-grow
                  ${isActive ? 'text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {item.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-mono px-4 py-2 border transition-all duration-500 uppercase tracking-widest
                        ${isActive 
                          ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]' 
                          : 'bg-transparent border-red-600/30 text-red-600 dark:text-red-500'
                        }
                      `}
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                <div className="mt-10 relative">
                  <div className={`h-[1px] transition-all duration-1000 ${isActive ? 'w-full bg-red-600' : 'w-12 bg-slate-200 dark:bg-white/10'}`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}