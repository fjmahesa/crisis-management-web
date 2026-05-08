import { useEffect, useState } from 'react';

export default function useDarkMode() {
  // 1. Paksa default ke 'light' jika belum ada di storage
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved : 'light'; 
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      // Opsional: hapus class light jika ada
      root.classList.remove('light'); 
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return [theme, toggleTheme];
}