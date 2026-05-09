import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center px-6 transition-colors duration-700 font-sans">
      <div className="max-w-xl w-full text-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-8xl md:text-9xl font-black text-slate-900 dark:text-white uppercase tracking-tighter"
        >
          404
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 mb-12"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
            Halaman Tidak Ditemukan
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-sm mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan. Silakan periksa kembali URL Anda atau kembali ke halaman utama.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            to="/" 
            className="inline-block bg-red-600 text-white px-8 py-3 font-bold text-[11px] uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-600/10"
          >
            Kembali ke Beranda
          </Link>
        </motion.div>
        
        <div className="mt-16 text-[9px] font-medium text-slate-300 dark:text-slate-800 uppercase tracking-widest">
          © Indonesia Crisis Management
        </div>
      </div>
    </main>
  );
}