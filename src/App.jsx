import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import Maintenance from './pages/Maintenance';

function App() {
  const [isMaintenance, setIsMaintenance] = useState(null);

  useEffect(() => {
    // Membaca file konfigurasi dari folder public saat aplikasi pertama kali dimuat
    fetch('/configMaintenanceMode.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal memuat file konfigurasi');
        }
        return response.json();
      })
      .then((data) => {
        setIsMaintenance(data.isMaintenanceMode);
      })
      .catch((error) => {
        console.error('Error fetching config:', error);
        // Jika file gagal dimuat, aplikasi diasumsikan berjalan normal (false)
        setIsMaintenance(false); 
      });
  }, []);

  // Mencegah konten utama berkedip (flicker) saat browser sedang memuat status JSON
  if (isMaintenance === null) {
    return <div className="min-h-screen bg-white dark:bg-[#050505]" />;
  }

  // Jika status JSON bernilai true, kunci semua rute dan tampilkan halaman pemeliharaan
  if (isMaintenance) {
    return <Maintenance />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;