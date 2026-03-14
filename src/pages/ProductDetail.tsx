import React, { useState, useEffect, useRef } from 'react';
import { useRoute, useLocation } from 'wouter';
import { ArrowRight, ShoppingCart, Star, Shield, Truck, RotateCcw, Instagram, Twitter, Youtube } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/FadeIn';
import { getProductBySlug, PRODUCTS } from '@/data/products';

const ShopeeIcon = () => (
  <img src="/images/Shopee.svg" alt="Shopee" className="w-4 h-4 object-contain flex-shrink-0" />
);
const TokopediaIcon = () => (
  <img src="/images/tokopedia.ico" alt="Tokopedia" className="w-4 h-4 object-contain flex-shrink-0" />
);

function MobileSlider({ product }: { product: any }) {
  const [active, setActive] = useState(0);
  return (
    <div className="relative w-full aspect-square overflow-hidden bg-zinc-900">
      <img
        key={active}
        src={product.images[active]}
        alt={product.name}
        className="w-full h-full object-cover"
        style={{ animation: 'fadeInImg 0.4s ease' }}
      />
      {product.badge && (
        <span className="absolute top-3 left-3 text-[9px] uppercase tracking-widest border border-[#a3e635]/40 bg-black/70 text-[#a3e635]/90 px-2.5 py-1 backdrop-blur-sm">
          {product.badge}
        </span>
      )}

      {/* arrow hints kiri & kanan */}
      {product.images.length > 1 && (
        <>
          <button
            onClick={() => setActive((p) => (p - 1 + product.images.length) % product.images.length)}
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/10 transition-opacity duration-200 ${
              active === 0 ? 'opacity-30' : 'opacity-80'
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6L8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => setActive((p) => (p + 1) % product.images.length)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/10 transition-opacity duration-200 ${
              active === product.images.length - 1 ? 'opacity-30' : 'opacity-80'
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2L8 6L4 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}

      {/* bottom bar: counter + dot indicators */}
      {product.images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2.5 bg-gradient-to-t from-black/50 to-transparent">
          <span className="text-[9px] uppercase tracking-widest text-white/40">
            {active + 1} / {product.images.length}
          </span>
          <div className="flex gap-1.5 items-center">
            {product.images.map((_: any, i: number) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-200 rounded-full ${
                  active === i
                    ? 'w-4 h-1.5 bg-[#a3e635]'
                    : 'w-1.5 h-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
          <span className="text-[9px] uppercase tracking-widest text-white/30 flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 5H9M6 2L9 5L6 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Geser
          </span>
        </div>
      )}
    </div>
  );
}

export default function ProductDetail() {
  const [, params] = useRoute('/products/:slug');
  const [, navigate] = useLocation();
  const [stickyVisible, setStickyVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  const product = getProductBySlug(params?.slug ?? '');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [params?.slug]);

  useEffect(() => {
    if (!ctaRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setStickyVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center gap-6">
        <Navbar forceScrolled />
        <p className="text-white/50 text-sm uppercase tracking-widest mt-24">Product not found</p>
        <button onClick={() => navigate('/')} className="text-white border border-white/20 px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Back to Home
        </button>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar forceScrolled />

      {/* STICKY BUY BAR */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${stickyVisible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/40 uppercase tracking-widest truncate">{product.name}</p>
              <p className="text-sm font-semibold">{product.price}</p>
            </div>
            <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] border border-white/12 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors whitespace-nowrap">
              <ShopeeIcon /> Shopee
            </a>
            <a href={product.tokopediaUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] border border-white/12 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/10 transition-colors whitespace-nowrap">
              <TokopediaIcon /> Tokopedia
            </a>
          </div>
        </div>
      </div>

      <div className="pt-20">

        {/* BREADCRUMB */}
        <div className="max-w-7xl mx-auto px-6 py-3 border-b border-white/5">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => navigate('/category/padel-rackets')} className="hover:text-white transition-colors">Padel Rackets</button>
            <span>/</span>
            <span className="text-white/60">{product.name}</span>
          </div>
        </div>

        {/* MAIN PRODUCT SECTION — split layout, sticky right */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 items-start">

            {/* LEFT — mobile: slider, desktop: stacked vertikal */}
            <div className="w-full lg:w-[55%] py-8">

              {/* MOBILE SLIDER */}
              <div className="lg:hidden">
                <MobileSlider product={product} />
              </div>

              {/* DESKTOP STACK */}
              <div className="hidden lg:flex flex-col gap-0">
                {product.images.map((img, i) => (
                  <FadeIn key={i} delay={i * 80}>
                    <div className={`relative w-full overflow-hidden bg-zinc-900 ${
                      i === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'
                    }`}>
                      <img
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {i === 0 && product.badge && (
                        <span className="absolute top-4 left-4 text-[9px] uppercase tracking-widest border border-[#a3e635]/40 bg-black/70 text-[#a3e635]/90 px-2.5 py-1 backdrop-blur-sm">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>

            </div>

            {/* RIGHT — sticky product info */}
            <div className="w-full lg:w-[45%] lg:sticky lg:top-24 py-8 lg:py-8 self-start">
              <FadeIn direction="none">
                <div className="flex flex-col gap-5">

                  <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 border border-white/10 w-fit px-3 py-1">
                    Padel Racket
                  </p>

                  <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-display font-bold uppercase tracking-tight leading-[0.92]">
                    {product.name}
                  </h1>

                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-[#a3e635] text-[#a3e635]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">5.0 (48 ulasan)</span>
                  </div>

                  <div className="border-t border-white/8 pt-4">
                    <p className="text-2xl md:text-3xl font-semibold tracking-tight">{product.price}</p>
                    <p className="text-[10px] text-white/35 mt-1 uppercase tracking-widest">Tersedia di Shopee & Tokopedia</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-white/60 leading-relaxed text-sm">{product.description}</p>
                    <p className="text-white/40 leading-relaxed text-sm">{product.longDescription}</p>
                  </div>

                  {/* CTA Buttons */}
                  <div ref={ctaRef} className="flex flex-col gap-2 pt-1">
                    <a href={product.shopeeUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full px-5 py-3.5 bg-white/[0.06] border border-white/12 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/10 hover:border-white/25 transition-all group">
                      <ShopeeIcon />
                      <span className="flex-1">Beli di Shopee</span>
                      <ArrowRight className="w-3 h-3 opacity-30 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all" />
                    </a>
                    <a href={product.tokopediaUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 w-full px-5 py-3.5 bg-white/[0.06] border border-white/12 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white/10 hover:border-white/25 transition-all group">
                      <TokopediaIcon />
                      <span className="flex-1">Beli di Tokopedia</span>
                      <ArrowRight className="w-3 h-3 opacity-30 group-hover:opacity-60 group-hover:translate-x-0.5 transition-all" />
                    </a>
                    <button className="flex items-center justify-center gap-2 w-full py-3 border border-white/8 text-white/40 text-xs font-medium uppercase tracking-widest hover:text-white/70 hover:border-white/20 transition-all duration-300">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Hubungi Kami
                    </button>
                  </div>

                  {/* Trust badges */}
                  <div className="flex flex-wrap gap-5 pt-3 border-t border-white/8">
                    {[
                      { icon: Truck,     label: 'Free Ongkir' },
                      { icon: Shield,    label: 'Garansi Resmi' },
                      { icon: RotateCcw, label: '14 Hari Retur' },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-[#a3e635]/60" />
                        <span className="text-[10px] text-white/45 uppercase tracking-widest">{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* SPECS — luxury typography, no border */}
                  <div className="pt-6 border-t border-white/8">
                    <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');`}</style>
                    <div className="mb-5">
                      <div className="w-6 h-px bg-[#a3e635] mb-4" />
                      <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.35em' }}
                        className="text-white/25 uppercase">Spesifikasi Teknis</p>
                    </div>
                    <div className="flex flex-col">
                      {product.specs.map((spec) => (
                        <div key={spec.label} className="flex items-baseline justify-between py-3 border-t border-white/[0.05] last:border-b last:border-white/[0.05]">
                          <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.28em' }}
                            className="text-white/30 uppercase">
                            {spec.label}
                          </span>
                          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontWeight: 300, letterSpacing: '0.04em' }}
                            className="text-white/85">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </FadeIn>
            </div>

          </div>
        </div>

        {/* EDITORIAL STRIP */}
        <div className="w-full relative overflow-hidden h-[180px] md:h-[240px] border-y border-white/5">
          <img src="/images/featured-tech.png" alt="Carbon Matrix Technology" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <FadeIn>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">BLKCARBON Technology</p>
                <h3 className="text-xl md:text-3xl font-display font-bold uppercase tracking-tight mb-3">
                  Carbon Matrix<br />Engineering
                </h3>
                <button onClick={() => navigate('/technology')}
                  className="text-[10px] uppercase tracking-widest flex items-center gap-2 text-[#a3e635]/80 hover:text-[#a3e635] transition-colors group">
                  Pelajari Teknologi
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <div className="max-w-7xl mx-auto px-6 py-10">
          <FadeIn>
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-base font-display font-bold uppercase tracking-tight">Produk Lainnya</h2>
              <button onClick={() => navigate('/category/padel-rackets')}
                className="text-[10px] uppercase tracking-widest text-white/35 hover:text-white transition-colors flex items-center gap-1 group">
                Lihat Semua <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {related.slice(0, 3).map((rel, idx) => (
              <FadeIn key={rel.slug} delay={idx * 80}>
                <button onClick={() => navigate(`/products/${rel.slug}`)} className="group text-left w-full">
                  <div className="relative w-full aspect-[3/4] bg-zinc-900 overflow-hidden mb-2.5">
                    <img src={rel.images[0]} alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    {rel.badge && (
                      <span className="absolute top-2.5 left-2.5 text-[9px] uppercase tracking-widest border border-[#a3e635]/35 bg-black/70 text-[#a3e635]/80 px-2 py-0.5 backdrop-blur-sm">
                        {rel.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[9px] uppercase tracking-widest text-white/30 mb-0.5">Padel Racket</p>
                  <h4 className="text-xs font-semibold uppercase tracking-wide mb-0.5 group-hover:text-white/60 transition-colors leading-tight">{rel.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium">{rel.price}</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/30 flex items-center gap-1 group-hover:text-[#a3e635]/70 transition-colors">
                      Lihat <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="bg-black pt-14 pb-10 border-t border-white/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-20 mb-12">
              <div>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontStyle: 'italic', letterSpacing: '0.18em', fontSize: '1.1rem' }}
                  className="text-white block mb-2 uppercase">BLKCARBON</span>
                <p className="text-white/35 text-xs mb-5 leading-relaxed max-w-[180px]">
                  Live Beyond Limits. Premium carbon padel equipment untuk performa elite.
                </p>
                <div className="flex items-center gap-2">
                  {[Instagram, Twitter, Youtube].map((Icon, i) => (
                    <button key={i} className="w-7 h-7 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/35 transition-colors">
                      <Icon className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>
              {[
                { title: 'Produk',     links: [['Padel Rackets','/category/padel-rackets'],['Bags','/category/bags'],['Apparel','/category/apparel'],['Accessories','/category/accessories']] },
                { title: 'Teknologi', links: [['Carbon Matrix','/technology'],['Precision Control','/technology'],['Materials','/technology'],['Research','/technology']] },
                { title: 'Perusahaan',links: [['About Us','/about'],['Athletes','/about'],['Contact','/contact'],['Press','/contact']] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="font-display uppercase tracking-[0.2em] text-[9px] font-semibold mb-3 text-white/50">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map(([label, href]) => (
                      <li key={label}>
                        <button onClick={() => navigate(href)} className="text-white/30 hover:text-white text-[11px] transition-colors text-left">{label}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between pt-5 border-t border-white/8 text-white/20 text-[10px]">
              <p>&copy; {new Date().getFullYear()} BLKCARBON Sports. All rights reserved.</p>
              <div className="flex gap-4 mt-3 md:mt-0">
                <button className="hover:text-white/50 transition-colors">Privacy Policy</button>
                <button className="hover:text-white/50 transition-colors">Terms of Service</button>
              </div>
            </div>
          </div>
        </footer>

      </div>

      <style>{`
        @keyframes fadeInImg {
          from { opacity: 0.5; transform: scale(1.015); }
          to   { opacity: 1;   transform: scale(1); }
        }
      `}</style>
    </div>
  );
}