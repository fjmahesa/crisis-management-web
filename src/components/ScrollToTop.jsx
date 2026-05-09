import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Jika tidak ada hash (seperti #services), scroll ke paling atas
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Berjalan setiap kali URL atau hash berubah

  return null;
}