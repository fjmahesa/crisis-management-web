import { useEffect, useState } from 'react';

export default function useDarkMode() {
  // Ambil initial state dari localStorage agar konsisten
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Sinkronisasi class dark di tag <html>
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Simpan ke localStorage setiap kali state berubah
    localStorage.setItem('theme', theme);
  }, [theme]); // Ini akan berjalan SETIAP KALI state theme berubah

  const toggleTheme = () => {
    // Mengubah state akan memicu re-render di Navbar dan Footer
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
}