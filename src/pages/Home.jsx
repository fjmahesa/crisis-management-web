import React from 'react';
import useDarkMode from '../hooks/useDarkMode'; // Import hook yang sudah kita buat
import Statistik from '../components/home/Statistik';
import Hero from '../components/home/Hero';
import Layanan from '../components/home/Layanan';
import Insights from '../components/home/Insights';
import CTA from '../components/home/CTA';
import About from '../components/home/About';
import Problem from '../components/home/Problem';
import Framework from '../components/home/Framework';
import DecisionMatrix from '../components/home/DecisionMatrix';
import WhyChooseUs from '../components/home/WhyChooseUs';

export default function Home() {
  // Kita panggil hook ini di level Page agar transisi warna terasa di seluruh container
  const [theme] = useDarkMode();

  return (
    <main className="bg-[var(--color-light-bg)] dark:bg-[var(--color-dark-bg)] text-slate-900 dark:text-white transition-colors duration-700 min-h-screen"> 
      <Hero />
      <div className="bg-slate-100/50 dark:bg-transparent">
        <Statistik />
      </div>

      <About />
      <Problem />
      
      <Layanan />
      
      <div className="bg-white dark:bg-transparent">
        <Framework />
      </div>
      <DecisionMatrix />
      <WhyChooseUs />
      {/* <Insights /> */}
      <CTA />
    </main>
  );
}