import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/FadeIn';
import Footer from '@/components/Footer';
import { PRODUCTS, BAGS, ACCESSORIES, BIKES, APPAREL } from '@/data/products';

const ALL_CATEGORIES = [
  { key: 'all',        label: 'All' },
  { key: 'rackets',    label: 'Padel Rackets' },
  { key: 'bags',       label: 'Bags' },
  { key: 'accessories',label: 'Accessories' },
  { key: 'bikes',      label: 'Bikes' },
  { key: 'apparel',    label: 'Apparel' },
];

const ALL_PRODUCTS = [
  ...PRODUCTS.map(p => ({ ...p, category: 'rackets' })),
  ...BAGS.map(p => ({ ...p, category: 'bags' })),
  ...ACCESSORIES.map(p => ({ ...p, category: 'accessories' })),
  ...BIKES.map(p => ({ ...p, category: 'bikes' })),
  ...APPAREL.map(p => ({ ...p, category: 'apparel' })),
];

export default function ProductsPage() {
  const [, navigate] = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = activeCategory === 'all'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  const categoryLabel = (cat: string) => {
    switch (cat) {
      case 'rackets':     return 'Padel Racket';
      case 'bags':        return 'Bag';
      case 'accessories': return 'Accessory';
      case 'bikes':       return 'Bike';
      case 'apparel':     return 'Apparel';
      default:            return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <Navbar forceScrolled />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,700&display=swap');

        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.06); }
        }
        .hero-zoom { animation: slowZoom 7s ease-in-out forwards; }

        .filter-btn {
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 6px 16px;
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.4);
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .filter-btn:hover {
          border-color: rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.8);
        }
        .filter-btn.active {
          border-color: rgba(163,230,53,0.5);
          color: #a3e635;
          background: rgba(163,230,53,0.04);
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-[80px]">
        <div className="relative w-full h-[32vw] max-h-[360px] min-h-[220px] overflow-hidden">
          <img src="/images/hero-racket.png" alt="All Products"
            className="w-full h-full object-cover object-center hero-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-8 w-full">
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.35em' }}
                className="text-[#a3e635] uppercase mb-3">BLKCARBON</p>
              <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.04em' }}
                className="text-5xl md:text-7xl uppercase leading-[0.88]">
                ALL<br /><span className="text-[#a3e635]">PRODUCTS.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────────────────────── */}
      <section className="bg-[#050505] border-b border-white/[0.06] sticky top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 overflow-x-auto"
            style={{ scrollbarWidth: 'none' }}>
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`filter-btn flex-shrink-0 ${activeCategory === cat.key ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
            <div className="ml-auto flex-shrink-0 hidden md:flex items-center gap-2">
              <span style={{ fontSize: '9px', letterSpacing: '0.2em' }}
                className="text-white/20 uppercase">{filtered.length} Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT GRID ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/20 text-sm uppercase tracking-widest">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {filtered.map((product, idx) => (
              <FadeIn key={product.slug} delay={idx * 60}>
                <button
                  className="group text-left w-full"
                  onClick={() => goTo(`/products/${product.slug}`)}
                >
                  {/* image */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden mb-4 bg-zinc-900">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {product.badge && (
                      <span style={{ fontSize: '8px', letterSpacing: '0.2em' }}
                        className="absolute top-3 left-3 uppercase border border-[#a3e635]/40 bg-black/70 text-[#a3e635]/80 px-2 py-0.5 backdrop-blur-sm">
                        {product.badge}
                      </span>
                    )}
                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4 opacity-0 group-hover:opacity-100">
                      <span style={{ fontSize: '9px', letterSpacing: '0.2em' }}
                        className="text-white uppercase flex items-center gap-1">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>

                  {/* info */}
                  <p style={{ fontSize: '8px', letterSpacing: '0.22em' }}
                    className="text-white/25 uppercase mb-1">{categoryLabel(product.category)}</p>
                  <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.03em' }}
                    className="uppercase mb-1 group-hover:text-[#a3e635] transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-white/35 text-xs mb-3 leading-relaxed line-clamp-2">{product.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{product.price}</span>
                    <span style={{ fontSize: '8px', letterSpacing: '0.18em' }}
                      className="text-white/30 uppercase group-hover:text-[#a3e635]/60 transition-colors flex items-center gap-1">
                      Explore <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        )}
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden border-y border-white/[0.05]">
        <img src="/images/filo.png" alt="BLKCARBON"
          className="w-full h-[200px] md:h-[260px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/65 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <FadeIn>
              <p style={{ fontSize: '9px', letterSpacing: '0.32em' }}
                className="text-[#a3e635]/60 uppercase mb-2">Live Beyond Limits</p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.04em' }}
                className="text-3xl md:text-4xl uppercase leading-[0.9] mb-5">
                ENGINEERED FOR<br />ELITE PERFORMANCE
              </h2>
              <button
                onClick={() => goTo('/contact')}
                className="group inline-flex items-center gap-2 bg-[#a3e635] text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#b8f54a] transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer description="Live Beyond Limits. Premium carbon performance equipment." />
    </div>
  );
}