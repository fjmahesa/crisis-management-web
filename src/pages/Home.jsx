import React from 'react';
import useDarkMode from '../hooks/useDarkMode'; // Import hook yang sudah kita buat
import Statistik from '../components/home/Statistik';
import Hero from '../components/home/Hero';
import Layanan from '../components/home/Layanan';
import Protokol from '../components/home/Protokol';
import Insights from '../components/home/Insights';
import CTA from '../components/home/CTA';
import Klien from '../components/home/Klien';

export default function Home() {
  // Kita panggil hook ini di level Page agar transisi warna terasa di seluruh container
  const [theme] = useDarkMode();

  return (
    <main className="bg-[var(--color-light-bg)] dark:bg-[var(--color-dark-bg)] text-slate-900 dark:text-white transition-colors duration-700 min-h-screen"> 
      <Hero />
      
      
      {/* 
          Section Statistik & Klien biasanya memiliki latar belakang sedikit berbeda 
          untuk memberikan pemisahan visual (Zebra Striping)
      */}
      <div className="bg-slate-100/50 dark:bg-transparent">
        <Statistik />
      </div>

      <Layanan />
      
      <div className="bg-white dark:bg-transparent">
        <Protokol />
      </div>

      <Insights />
      
      {/* Klien diletakkan sebelum CTA sebagai final trust building */}
      <Klien /> 
      
      <CTA />
    </main>
  );
}