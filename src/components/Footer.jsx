import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Menggunakan react-icons yang lebih stabil di Vite
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedinIn size={16} />, href: "#", label: "LinkedIn" },
    { icon: <FaTwitter size={16} />, href: "#", label: "Twitter" },
    { icon: <FaInstagram size={16} />, href: "#", label: "Instagram" },
    { icon: <FaFacebookF size={16} />, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden font-sans text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* KOLOM 1: BRAND & SOSIAL MEDIA */}
          <div className="space-y-8">
            <div>
              <Link to="/" className="text-xl font-black tracking-tighter">
                CRISIS<span className="text-red-600">MANAGEMENT</span>.ID
              </Link>
              <p className="mt-4 text-slate-500 text-xs leading-relaxed tracking-widest uppercase font-mono max-w-xs">
                Pusat komando pertahanan reputasi dan manajemen risiko strategis. Melindungi aset kritikal di era ketidakpastian.
              </p>
            </div>
            
            {/* SOSIAL MEDIA ICONS */}
            <div className="flex gap-5">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  aria-label={social.label}
                  className="text-slate-500 hover:text-red-600 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: NAVIGASI */}
          <div className="space-y-6 md:pl-10">
            <h4 className="text-white text-[10px] font-mono tracking-[0.4em] uppercase opacity-50">Direktori_Sistem</h4>
            <ul className="space-y-4 text-xs font-bold tracking-tight">
              <li><Link to="/layanan" className="text-slate-400 hover:text-red-600 transition-colors uppercase italic">// Layanan Utama</Link></li>
              <li><Link to="/metodologi" className="text-slate-400 hover:text-red-600 transition-colors uppercase italic">// Metodologi</Link></li>
              <li><Link to="/insights" className="text-slate-400 hover:text-red-600 transition-colors uppercase italic">// Intelligence Report</Link></li>
              <li><Link to="/tentang" className="text-slate-400 hover:text-red-600 transition-colors uppercase italic">// Tentang Kami</Link></li>
            </ul>
          </div>

          {/* KOLOM 3: KONTAK */}
          <div className="space-y-6">
            <h4 className="text-white text-[10px] font-mono tracking-[0.4em] uppercase opacity-50">Kontak_Darurat</h4>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <p className="text-[10px] text-slate-500 font-mono uppercase mb-1">Enkripsi Email</p>
                <p className="text-sm text-white group-hover:text-red-600 transition-colors font-medium">ops@crisismanagement.id</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[10px] text-slate-500 font-mono uppercase mb-1">Garis Aman</p>
                <p className="text-sm text-white group-hover:text-red-600 transition-colors font-medium">+62 21 0900 888</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest text-center md:text-left">
            © {currentYear} CRISISMANAGEMENT.ID // HAK CIPTA DILINDUNGI
          </div>
          <div className="flex flex-col items-end gap-1 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-default">
  <div className="flex items-center gap-2">
    {/* Indikator Titik: Sekarang menggunakan Ring untuk kesan lebih elegan */}
    <div className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-20"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
    </div>
    <span className="text-[9px] font-mono text-slate-300 uppercase tracking-[0.4em]">
      Encrypted Connection
    </span>
  </div>
  
  {/* Sub-text untuk kesan teknis yang dewasa */}
  <span className="text-[7px] font-mono text-slate-600 uppercase tracking-[0.2em]">
    Auth_Node: 256-BIT_SSL // Verified_Terminal
  </span>
</div>
        </div>
      </div>
    </footer>
  );
}