import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Protokol() {
  // State untuk melacak item mana yang sedang aktif/di-tap
  const [activeItem, setActiveItem] = useState(null);

  const protokolData = [
    { tahap: "01", judul: "DETEKSI DINI", isi: "Pemindaian algoritma pada media sosial dan portal berita untuk mendeteksi anomali reputasi sebelum menjadi krisis nasional." },
    { tahap: "02", judul: "ANALISIS RISIKO", isi: "Penentuan level urgensi dan identifikasi stakeholder utama yang terdampak menggunakan matriks probabilitas krisis." },
    { tahap: "03", judul: "EKSEKUSI TAKTIS", isi: "Penyusunan pernyataan publik, manajemen kanal komunikasi, dan koordinasi langkah hukum secara paralel dalam hitungan jam." },
    { tahap: "04", judul: "STABILISASI", isi: "Monitoring pasca-insiden untuk memastikan sentimen negatif telah terisolasi dan memulai proses pemulihan citra brand." }
  ];

  return (
    <section className="py-20 md:py-32 px-6 relative bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-white uppercase italic">
            PROTOKOL <span className="text-red-600">RESPONS</span>
          </h2>
          <p className="text-slate-400 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-left">
            Siklus Kerja Manajemen Krisis Terpadu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>

          {protokolData.map((item, index) => {
            const isActive = activeItem === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                
                // --- LOGIKA TAP UNTUK MENGAKTIFKAN ---
                onClick={() => setActiveItem(index)}
                // Menjaga hover tetap bekerja di desktop untuk kenyamanan kursor
                onMouseEnter={() => window.innerWidth > 768 && setActiveItem(index)}
                
                className={`relative flex flex-col cursor-pointer p-6 -m-2 rounded-lg transition-all duration-500 select-none touch-manipulation ${index % 2 !== 0 ? 'md:mt-24' : ''} ${isActive ? 'bg-red-600/5' : 'bg-transparent'}`}
              >
                {/* Angka Latar - Berubah warna jika aktif */}
                <div className={`text-7xl md:text-9xl font-black absolute -top-10 -left-4 md:-left-10 pointer-events-none font-mono transition-colors duration-500 ${isActive ? 'text-red-600/10' : 'text-white/[0.05]'}`}>
                  {item.tahap}
                </div>
                
                {/* Garis Samping - Menyala jika aktif */}
                <div className={`relative z-10 pl-6 border-l-2 transition-all duration-500 ${isActive ? 'border-red-600' : 'border-red-600/30'}`}>
                  <h3 className={`text-xl md:text-2xl font-black mb-4 tracking-tight flex items-center gap-3 transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/80'}`}>
                    <span className={`transition-all duration-500 ${isActive ? 'text-red-600 opacity-100 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'text-red-600 opacity-60'}`}>
                      //
                    </span> 
                    {item.judul}
                  </h3>

                  <p className={`text-sm md:text-base leading-relaxed font-light transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {item.isi}
                  </p>
                  
                  {/* Bar Scanner - Memanjang jika aktif */}
                  <div className={`mt-6 h-[2px] transition-all duration-700 ease-out ${isActive ? 'w-full bg-red-600' : 'w-8 bg-red-600/30'}`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Invisible Overlay untuk menghilangkan status saat men-tap area kosong luar section */}
      {activeItem !== null && (
        <div 
          className="fixed inset-0 z-0 pointer-events-auto" 
          onClick={(e) => {
            e.stopPropagation();
            setActiveItem(null);
          }}
        />
      )}
    </section>
  );
}