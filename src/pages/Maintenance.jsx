import React from 'react';
// Import gambar lokal dari folder assets
import MaintenanceImg from '../assets/maintenance.png'; 

export default function Maintenance() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center px-6 font-sans transition-colors duration-700">
      <div className="max-w-md w-full text-center flex flex-col items-center">
          <img 
            src={MaintenanceImg} 
            alt="System Optimization" 
            className="w-full h-full object-cover opacity-100 dark:opacity-100"
          />
        {/* TEKS UTAMA YANG LEBIH SIMPEL */}
        <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-3">
          Pemeliharaan Sistem
        </h1>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
          Situs sedang dalam pembaruan berkala. Kami akan segera kembali.
        </p>
        
        {/* FOOTER */}
        <div className="w-full pt-6 border-t border-slate-100 dark:border-white/5">
          <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
            Indonesia Crisis Management
          </p>
        </div>
        
      </div>
    </main>
  );
}