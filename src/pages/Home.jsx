import React from 'react';
import Statistik from '../components/home/Statistik';
import Hero from '../components/home/Hero';
import Layanan from '../components/home/Layanan';
import Protokol from '../components/home/Protokol';
import Insights from '../components/home/Insights';
import CTA from '../components/home/CTA';
import Klien from '../components/home/Klien';

export default function Home() {
  return (
    <main className="bg-[#050505] text-white selection:bg-red-500/30 overflow-hidden font-sans">
      <Hero />
      <Statistik />
      
      <Layanan />
      <Protokol />
      <Insights />
      <Klien /> {/* Validasi industri tepat setelah angka statistik */}
      <CTA />
      {/* Footer atau section lainnya bisa ditaruh di bawah sini nanti */}
    </main>
  );
}