import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// Menggunakan kombinasi Font Awesome 6 dan Ionicons untuk hasil logo brand yang presisi
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from 'react-icons/fa6';
import { IoLogoWhatsapp, IoLinkOutline } from 'react-icons/io5';

export default function PostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [popularPosts, setPopularPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    // 1. Ambil data artikel utama berdasarkan slug
    fetch(`https://admin.crisismanagement.id/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((response) => {
        if (!response.ok) throw new Error('Gagal memuat artikel hari ini.');
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);

          // 2. Ambil artikel populer/terbaru untuk sidebar kanan (kecuali artikel aktif)
          return fetch(`https://admin.crisismanagement.id/wp-json/wp/v2/posts?per_page=5&exclude=${data[0].id}&_embed`);
        } else {
          throw new Error('Artikel tidak ditemukan di pangkalan data.');
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

  if (loading) return <div className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center font-mono text-xs tracking-widest uppercase text-slate-400 animate-pulse">Loading_Analysis_Document...</div>;
  if (error) return <div className="min-h-screen bg-white dark:bg-[#050505] flex items-center justify-center font-sans text-red-600 text-sm font-bold tracking-tight">{error}</div>;

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = post._embedded?.['wp:term']?.[0] || [];
  const authorName = post._embedded?.['author']?.[0]?.name || 'Official ICM';

  // Ambil URL halaman aktif secara dinamis untuk tombol share
  const currentUrl = encodeURIComponent(window.location.href);
  const currentTitle = encodeURIComponent(post.title.rendered);

  return (
    <main className="pt-32 pb-24 bg-white dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BREADCRUMBS */}
        <nav className="text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <Link to="/blog" className="hover:text-red-600 transition-colors">{categories[0]?.name || 'Publikasi'}</Link>
        </nav>

        {/* LAYOUT GRID UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* SISI KIRI: KONTEN UTAMA ARTIKEL (8 Kolom) */}
          <div className="lg:col-span-8 border-r-0 lg:border-r border-slate-100 dark:border-white/5 lg:pr-10">
            
            {/* JUDUL UTAMA */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-[1.15] tracking-tight mb-4 uppercase">
              {post.title.rendered}
            </h1>

            {/* SUBJUDUL / EXCERPT RINGKASAN */}
            <div 
              className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 font-medium border-l-4 border-red-600 pl-4 italic"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />

            {/* META BAR (Penulis, Tanggal, Kategori) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-white/5 pb-5 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center font-sans font-black text-[9px] tracking-tighter">
                  ICM
                </div>
                <span>BY <strong className="text-slate-700 dark:text-slate-300 uppercase tracking-wider">{authorName}</strong></span>
              </div>
              <span className="text-slate-200 dark:text-slate-800">•</span>
              <span>{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}</span>
              <span className="text-slate-200 dark:text-slate-800">•</span>
              <span className="text-red-600 dark:text-red-500 uppercase tracking-widest">
                IN {categories[0]?.name || 'UMUM'}
              </span>
            </div>

            {/* GAMBAR FITUR */}
            {featuredImage && (
              <div className="w-full overflow-hidden rounded-sm border border-slate-200/60 dark:border-white/5 shadow-md mb-8 bg-slate-50 dark:bg-white/[0.01]">
                <img 
                  src={featuredImage} 
                  alt={post.title.rendered} 
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            )}

            {/* ISI BODY ARTIKEL */}
            <div 
              className="prose prose-slate dark:prose-invert max-w-none
                prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:text-sm md:prose-p:text-[15px] prose-p:leading-relaxed prose-p:mb-6 prose-p:mt-2
                prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:mt-8 prose-headings:mb-4
                prose-strong:text-red-600 dark:prose-strong:text-red-500 prose-strong:font-bold
                prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5
                prose-blockquote:border-l-4 prose-blockquote:border-red-600 prose-blockquote:pl-4 prose-blockquote:my-8 prose-blockquote:italic prose-blockquote:text-slate-500 dark:prose-blockquote:text-slate-400 font-normal"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* SEKSI TOMBOL SHARE DENGAN WARNA BRAND (MENGGUNAKAN REACT ICONS) */}
<div className="flex flex-wrap items-center gap-3 mt-12 pt-6 border-t border-slate-100 dark:border-white/5">
  <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mr-2">
    Share Article:
  </span>

  {/* LINKEDIN */}
  <a 
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
    target="_blank" 
    rel="noopener noreferrer"
    title="Share on LinkedIn"
    className="flex items-center justify-center w-8 h-8 rounded-sm bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] dark:hover:bg-[#0077B5] dark:hover:border-[#0077B5] transition-all duration-300 shadow-sm"
  >
    <FaLinkedinIn size={14} />
  </a>

  {/* X (TWITTER) */}
  <a 
    href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${currentTitle}`}
    target="_blank" 
    rel="noopener noreferrer"
    title="Share on X (Twitter)"
    className="flex items-center justify-center w-8 h-8 rounded-sm bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300 shadow-sm"
  >
    <FaXTwitter size={13} />
  </a>

  {/* WHATSAPP */}
  <a 
    href={`https://api.whatsapp.com/send?text=${currentTitle}%20${currentUrl}`}
    target="_blank" 
    rel="noopener noreferrer"
    title="Share on WhatsApp"
    className="flex items-center justify-center w-8 h-8 rounded-sm bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] dark:hover:bg-[#25D366] dark:hover:border-[#25D366] transition-all duration-300 shadow-sm"
  >
    <IoLogoWhatsapp size={15} />
  </a>

  {/* FACEBOOK */}
  <a 
    href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
    target="_blank" 
    rel="noopener noreferrer"
    title="Share on Facebook"
    className="flex items-center justify-center w-8 h-8 rounded-sm bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] dark:hover:bg-[#1877F2] dark:hover:border-[#1877F2] transition-all duration-300 shadow-sm"
  >
    <FaFacebookF size={12} />
  </a>

  {/* COPY LINK */}
  <button 
    onClick={() => {
      navigator.clipboard.writeText(window.location.href);
      alert("Tautan laporan berhasil disalin!");
    }}
    title="Copy Link To Clipboard"
    className="flex items-center justify-center w-8 h-8 rounded-sm bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white hover:border-red-600 dark:hover:bg-red-600 dark:hover:bg-red-600 transition-all duration-300 shadow-sm cursor-pointer"
  >
    <IoLinkOutline size={15} />
  </button>
</div>

          </div>

          {/* SISI KANAN: SIDEBAR POPULAR NEWS (4 Kolom) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <div>
              <div className="border-b border-slate-200 dark:border-white/10 pb-2 mb-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white border-b-2 border-red-600 pb-2 inline-block -mb-[10px]">
                  Popular News
                </h3>
              </div>

              <div className="space-y-5">
                {popularPosts.map((pItem, index) => {
                  const pImage = pItem._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                  const formattedIndex = String(index + 1).padStart(2, '0');

                  return (
                    <Link 
                      key={pItem.id} 
                      to={`/blog/${pItem.slug}`}
                      className="group block transition-all"
                    >
                      {index === 0 && pImage ? (
                        <div className="flex flex-col gap-3 pb-5 border-b border-slate-100 dark:border-white/5">
                          <div className="w-full aspect-video bg-slate-100 dark:bg-white/5 overflow-hidden rounded-sm border border-slate-200/40 dark:border-white/5">
                            <img src={pImage} alt={pItem.title.rendered} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100" />
                          </div>
                          <h4 className="text-sm font-black text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-red-600 transition-colors uppercase line-clamp-2">
                            {pItem.title.rendered}
                          </h4>
                          <span className="text-[9px] font-mono font-bold text-slate-400 tracking-wider">0 SHARES</span>
                        </div>
                      ) : (
                        index !== 0 && (
                          <div className="flex items-start gap-4 pt-4 first:pt-0 border-b border-slate-100 dark:border-white/5 pb-4 last:border-none last:pb-0">
                            <div className="text-2xl font-black text-slate-200 dark:text-zinc-800 tracking-tighter font-mono group-hover:text-red-600/30 transition-colors">
                              {formattedIndex}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 tracking-tight leading-snug group-hover:text-red-600 transition-colors line-clamp-2 uppercase">
                                {pItem.title.rendered}
                              </h4>
                              <span className="text-[8px] font-mono font-bold text-slate-400 tracking-wider mt-1 block">0 SHARES</span>
                            </div>
                          </div>
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