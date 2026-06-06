import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogTest() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('https://admin.crisismanagement.id/wp-json/wp/v2/posts?_embed')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Gagal memuat data (Status: ${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Koneksi API gagal:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  
  if (loading) {
    return (
      <main className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center font-sans">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-400 animate-pulse">
          Memuat Data Dari Server...
        </p>
      </main>
    );
  }

  
  if (error) {
    return (
      <main className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center font-sans px-6">
        <div className="max-w-md w-full text-center">
          <h1 className="text-xl font-bold text-red-600 uppercase tracking-wider mb-2">
            Koneksi Gagal
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-mono bg-slate-50 dark:bg-white/[0.02] p-4 border border-slate-200 dark:border-white/10">
            {error}. Pastikan konfigurasi CORS pada file .htaccess di folder public_html/admin/ sudah diizinkan untuk localhost.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 bg-white dark:bg-[#050505] transition-colors duration-700 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <div className="border-b border-slate-100 dark:border-white/5 pb-8 mb-16">
          <h4 className="text-red-600 font-mono text-[10px] tracking-[0.5em] uppercase font-bold mb-3 italic">
            
          </h4>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
            Arsip Artikel & Publikasi
          </h1>
        </div>

        
        {posts.length === 0 ? (
          <p className="text-sm text-slate-500 uppercase tracking-wider italic">Tidak ada artikel yang ditemukan.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

              return (
                <article 
                  key={post.id} 
                  className="group flex flex-col justify-between p-6 bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 transition-all hover:border-slate-300 dark:hover:border-white/10"
                >
                  <div>
                    
                    <div className="relative w-full aspect-video bg-slate-200 dark:bg-white/5 overflow-hidden mb-6">
                      <img 
                        src={featuredImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600"} 
                        alt={post.title.rendered}
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      />
                    </div>

                    
                    <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2">
                      {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>

                    
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-3 group-hover:text-red-600 transition-colors">
                      {post.title.rendered}
                    </h3>

                    
                    <div 
                      className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed uppercase tracking-wider line-clamp-3 mb-6"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  </div>

                  
                  <div className="pt-4 border-t border-slate-200/40 dark:border-white/5">
  <Link 
    to={`/blog/${post.slug}`} 
    className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-widest group-hover:text-red-600 transition-colors flex items-center gap-2 cursor-pointer"
  >
    Baca Selengkapnya <span className="transition-transform group-hover:translate-x-1">→</span>
  </Link>
</div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}