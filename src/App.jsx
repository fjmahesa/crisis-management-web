import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import Maintenance from './pages/Maintenance';
import BlogTest from './pages/BlogTest';
import PostDetail from './pages/PostDetail';

function App() {
  const [isMaintenance, setIsMaintenance] = useState(null);

  useEffect(() => {
    
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
        
        setIsMaintenance(false); 
      });
  }, []);

  
  if (isMaintenance === null) {
    return <div className="min-h-screen bg-white dark:bg-[#050505]" />;
  }

  
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
          <Route path="/blog" element={<BlogTest />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;