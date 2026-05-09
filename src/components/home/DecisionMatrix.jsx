import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTable, FaInfoCircle } from 'react-icons/fa';

export default function DecisionMatrix() {
  // State untuk melacak baris atau kartu yang sedang aktif di mobile
  const [activeMatrix, setActiveMatrix] = useState(null);

  const matrixData = [
    { situasi: "Isu kecil & engagement rendah", strategi: "Strategic Ignoring" },
    { situasi: "Fakta dapat dibuktikan cepat", strategi: "Rapid Clarification" },
    { situasi: "Framing negatif sudah terbentuk", strategi: "Narrative Reframing" },
    { situasi: "Serangan politis terstruktur", strategi: "Counter Framing" },
    { situasi: "Media mainstream mulai masuk", strategi: "Clarification + Reframing" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#050505] transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          {/* <h4 className="text-red-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold mb-4 flex items-center gap-2">
            <FaTable /> Intelligence_Matrix
          </h4> */}
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Strategic <span className="text-red-600">Respons Terukur Berdasarkan Tingkat Eskalasi</span>
          </h2>
          {/* <p className="mt-4 text-slate-500 dark:text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            Respons Terukur Berdasarkan Tingkat Eskalasi_
          </p> */}
        </motion.div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden border border-slate-200 dark:border-white/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-white/[0.02] border-b border-slate-200 dark:border-white/5">
                <th className="p-6 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 w-1/2">
                  Situasi Krisis
                </th>
                <th className="p-6 font-mono text-[10px] uppercase tracking-[0.3em] text-red-600">
                  Strategi Respons
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {matrixData.map((item, i) => (
                <motion.tr 
                  key={i}
                  onMouseEnter={() => setActiveMatrix(i)}
                  onMouseLeave={() => setActiveMatrix(null)}
                  className={`transition-colors group cursor-default ${
                    activeMatrix === i ? 'bg-red-600/[0.04]' : 'transparent'
                  }`}
                >
                  <td className={`p-6 text-sm font-bold uppercase tracking-tight transition-colors ${
                    activeMatrix === i ? 'text-red-600' : 'text-slate-700 dark:text-slate-300'
                  }`}>
                    {item.situasi}
                  </td>
                  <td className="p-6">
                    <span className={`inline-flex items-center gap-3 text-sm font-black uppercase italic tracking-widest transition-all duration-300 ${
                      activeMatrix === i ? 'text-red-600 translate-x-2' : 'text-red-600/50'
                    }`}>
                      <span className={`w-8 h-[1px] transition-colors ${activeMatrix === i ? 'bg-red-600' : 'bg-red-600/20'}`}></span>
                      {item.strategi}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View (Updated with Active Logic) */}
        <div className="md:hidden space-y-4">
          {matrixData.map((item, i) => (
            <motion.div 
              key={i}
              onClick={() => setActiveMatrix(i)}
              className={`p-6 transition-all duration-300 border relative ${
                activeMatrix === i 
                ? 'bg-red-600/[0.08] border-red-600/50 shadow-lg shadow-red-600/5' 
                : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5'
              }`}
            >
              {/* <div className="flex items-center gap-2 mb-3">
                <FaInfoCircle size={10} className={activeMatrix === i ? 'text-red-600' : 'text-slate-400'} />
                <span className={`font-mono text-[8px] uppercase tracking-[0.2em] ${
                  activeMatrix === i ? 'text-red-600' : 'text-slate-400 dark:text-slate-500'
                }`}>
                  Matrix_ID: 0{i + 1}
                </span>
              </div> */}
              <h3 className={`text-[11px] font-bold uppercase mb-4 leading-relaxed transition-colors ${
                activeMatrix === i ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-400'
              }`}>
                {item.situasi}
              </h3>
              <div className={`pt-4 border-t transition-colors ${
                activeMatrix === i ? 'border-red-600/20' : 'border-slate-200 dark:border-white/10'
              }`}>
                <span className={`text-[10px] font-black uppercase tracking-widest italic flex items-center gap-2 transition-colors ${
                  activeMatrix === i ? 'text-red-600' : 'text-red-600/40'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${activeMatrix === i ? 'bg-red-600 animate-pulse' : 'bg-red-600/20'}`}></span>
                  {item.strategi}
                </span>
              </div>

              {/* Indikator Samping Aktif */}
              {activeMatrix === i && (
                <motion.div 
                  layoutId="activeBar"
                  className="absolute left-0 top-0 w-1 h-full bg-red-600"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 border-l-2 border-red-600 bg-slate-50 dark:bg-white/[0.02]">
          <p className="text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 uppercase leading-relaxed tracking-wider italic">
            "Satu langkah salah dalam merespons bisa memperburuk krisis. Matriks ini memastikan setiap tindakan adalah kalkulasi politik yang presisi."
          </p>
        </div>

      </div>
    </section>
  );
}