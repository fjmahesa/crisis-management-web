import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [popularPosts, setPopularPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // 1. Ambil data artikel utama
    fetch(`https://admin.crisismanagement.id/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((response) => {
        if (!response.ok) throw new Error('Gagal memuat artikel');
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);

          // 2. Ambil artikel populer/terbaru lainnya untuk sidebar kanan
          return fetch(`https://admin.crisismanagement.id/wp-json/wp/v2/posts?per_page=5&exclude=${data[0].id}&_embed`);
        } else {
          throw new Error('Artikel tidak ditemukan');
        }
      })
      .then((res) => res.json())
      .then((sidebarData) => {
        setPopularPosts(sidebarData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center font-mono text-xs tracking-widest uppercase text-slate-400">Loading_Document...</div>;
  if (error) return <div className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center font-sans text-red-600 text-sm">{error}</div>;

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const authorName = post._embedded?.['author']?.[0]?.name || 'Official ICM';

  return (
    <main className="pt-28 pb-24 bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* 1. BREADCRUMBS (Navigasi Jejak Halaman) */}
        <nav className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <span>›</span>
          <Link to="/blog-test" className="hover:text-red-600">Ekonomi</Link>
        </nav>

        {/* LAYOUT GRID UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SISI KIRI: KONTEN UTAMA ARTIKEL (8 Kolom) */}
          <div className="lg:col-span-8 border-r-0 lg:border-r border-slate-100 dark:border-white/5 lg:pr-8">
            
            {/* JUDUL BESAR BOLD */}
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
              {post.title.rendered}
            </h1>

            {/* SUBJUDUL / RINGKASAN TEKS (Berwarna Abu-abu) */}
            <div 
              className="text-slate-400 dark:text-slate-500 text-sm md:text-base leading-relaxed mb-6 font-medium"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            {/* META BAR (Penulis, Tanggal, Kategori) */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center font-bold text-[10px]">
                  ICM
                </div>
                <span>by <strong className="text-slate-600 dark:text-slate-300 font-semibold">{authorName}</strong></span>
              </div>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span className="text-red-600 font-bold uppercase tracking-wider">
                in {categories[0]?.name || 'Umum'}
              </span>
            </div>

            {/* GAMBAR FITUR BESAR */}
            {featuredImage && (
              <div className="w-full overflow-hidden mb-6 bg-slate-100 dark:bg-white/5">
                <img 
                  src={featuredImage} 
                  alt={post.title.rendered} 
                  className="w-full h-auto object-cover max-h-[480px]"
                />
              </div>
            )}

            {/* ISI BODY ARTIKEL */}
            <div 
              className="prose prose-slate dark:prose-invert max-w-none
                prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:text-sm md:prose-p:text-base prose-p:leading-relaxed prose-p:mb-5
                prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-bold prose-headings:mt-6 prose-headings:mb-3
                prose-strong:text-red-600 font-normal"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>

          {/* SISI KANAN: SIDEBAR POPULAR NEWS (4 Kolom) */}
          <aside className="lg:col-span-4 space-y-8">
            <div>
              {/* JUDUL SEKSI SIDEBAR */}
              <div className="border-b border-slate-200 dark:border-white/10 pb-2 mb-6 flex justify-between items-center">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-red-600 pb-2 -mb-[9px]">
                  Popular News
                </h3>
              </div>

              {/* DAFTAR ARTIKEL BERULANG */}
              <div className="divide-y divide-slate-100 dark:divide-white/5 space-y-4">
                {popularPosts.map((pItem, index) => {
                  const pImage = pItem._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                  const formattedIndex = String(index + 1).padStart(2, '0');

                  return (
                    <Link 
                      key={pItem.id} 
                      to={`/blog/${pItem.slug}`}
                      className="flex items-start gap-4 pt-4 first:pt-0 group block"
                    >
                      {/* Kondisi item pertama menggunakan layout gambar besar seperti di screenshot */}
                      {index === 0 && pImage ? (
                        <div className="flex flex-col gap-2 w-full">
                          <div className="w-full aspect-video bg-slate-100 dark:bg-white/5 overflow-hidden">
                            <img src={pImage} alt={pItem.title.rendered} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-red-600 transition-colors uppercase">
                            {pItem.title.rendered}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-400">0 SHARES</span>
                        </div>
                      ) : (
                        // Item urutan berikutnya menggunakan teks dan struktur list nomor besar (02, 03, dst)
                        index !== 0 && (
                          <>
                            <div className="text-2xl font-black text-slate-200 dark:text-white/10 tracking-tighter group-hover:text-red-600/30 transition-colors font-mono">
                              {formattedIndex}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight leading-snug group-hover:text-red-600 transition-colors line-clamp-2 uppercase">
                                {pItem.title.rendered}
                              </h4>
                              <span className="text-[9px] font-mono text-slate-400 mt-1 block">0 SHARES</span>
                            </div>
                          </>
                        )
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}