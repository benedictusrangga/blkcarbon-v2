import React, { useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { ArrowRight, Instagram, Twitter, Youtube } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/FadeIn';
import { PRODUCTS, Product } from '@/data/products';

interface CategoryData {
  name: string;
  description: string;
  hero: string;
  products: Product[];
  comingSoon?: boolean;
}

const CATEGORIES: Record<string, CategoryData> = {
  'padel-rackets': {
    name: 'Padel Rackets',
    description:
      'Carbon fiber padel rackets engineered for explosive power, unparalleled stability, and precision control on the court.\nMinimal design, built for elite performance — no compromises.',
    hero: '/images/hero-racket.png',
    products: PRODUCTS,
  },
  bags: {
    name: 'Bags',
    description:
      "Premium sports bags built for the modern athlete. Lightweight, durable, and designed with the same carbon fiber DNA as our rackets.\nBuilt to carry everything you need — nothing you don't.",
    hero: '/images/category-bags.png',
    products: [],
    comingSoon: true,
  },
  apparel: {
    name: 'Apparel',
    description:
      "Performance apparel engineered for movement. Minimal, functional, and built to match your intensity on the court.\nWear the same precision that's in your racket.",
    hero: '/images/category-apparel.png',
    products: [],
    comingSoon: true,
  },
  accessories: {
    name: 'Accessories',
    description:
      'Every detail matters. Complete your setup with BLKCARBON accessories crafted with the same precision as our rackets.\nPerformance from grip to court.',
    hero: '/images/category-accessories.png',
    products: [],
    comingSoon: true,
  },
};

export default function CategoryPage() {
  const [, params] = useRoute('/category/:slug');
  const [, navigate] = useLocation();

  const slug = params?.slug ?? '';
  const category = CATEGORIES[slug];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center gap-6">
        <Navbar forceScrolled />
        <p className="text-white/40 text-sm uppercase tracking-widest mt-24">Category not found</p>
        <button
          onClick={() => goTo('/')}
          className="border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const descLines = category.description.split('\n');

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Navbar forceScrolled />

      {/* HERO + CATEGORY INFO OVERLAY */}
      <div className="w-full pt-[72px]">
        <div className="relative w-full h-[42vw] max-h-[420px] min-h-[260px] overflow-hidden">
          <img
            src={category.hero}
            alt={category.name}
            className="w-full h-full object-cover object-center"
          />
          {/* gradient gelap di bawah untuk readability teks */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80" />

          {/* teks overlay di bagian bawah hero */}
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-6">
            <FadeIn>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#a3e635]/80 mb-2">
                BLKCARBON — {category.name}
              </p>
              <h1 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight leading-[0.95]">
                {category.name}
              </h1>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* CATEGORY DESCRIPTION */}
      <div className="max-w-7xl mx-auto px-6 pt-5 pb-6">
        <FadeIn>
          <div className="max-w-lg">
            {descLines.map((line, i) => (
              <p key={i} className={`text-white/50 text-sm leading-relaxed ${i > 0 ? 'mt-2' : ''}`}>
                {line}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        {category.comingSoon ? (
          <FadeIn>
            <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
              <div className="w-10 h-[2px] bg-[#a3e635]/50 mx-auto" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#a3e635]/60">Coming Soon</p>
              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white">
                {category.name}
              </h2>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Kami sedang mempersiapkan koleksi {category.name.toLowerCase()} terbaik untuk kamu. Pantau terus.
              </p>
              <div className="w-10 h-[2px] bg-[#a3e635]/50 mx-auto" />
              <button
                onClick={() => goTo('/category/padel-rackets')}
                className="mt-3 group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white border-b border-[#a3e635]/60 pb-1 hover:border-[#a3e635] transition-colors"
              >
                Shop Padel Rackets <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-6 gap-y-8 md:gap-y-12">
            {category.products.map((product, idx) => (
              <FadeIn key={product.slug} delay={idx * 80}>
                <button
                  className="group text-left w-full"
                  onClick={() => goTo(`/products/${product.slug}`)}
                >
                  {/* image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-900 mb-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* hover overlay with centered VIEW */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-[10px] uppercase tracking-[0.25em] text-white border border-white/40 px-4 py-2 backdrop-blur-sm">
                        View
                      </span>
                    </div>
                    {product.badge && (
                      <span className="absolute top-2.5 left-2.5 text-[9px] uppercase tracking-widest border border-[#a3e635]/40 bg-black/70 text-[#a3e635]/90 px-2 py-0.5 backdrop-blur-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* info */}
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-1">Padel Racket</p>
                  <h3 className="text-sm md:text-base font-display font-semibold uppercase tracking-wide mb-0.5 group-hover:text-white/60 transition-colors leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-white/35 text-xs mb-3 leading-snug hidden md:block">{product.tagline}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-medium text-white">{product.price}</span>
                    <span className="text-[9px] uppercase tracking-widest text-white/30 flex items-center gap-1 group-hover:text-[#a3e635]/70 transition-colors">
                      View <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        )}
      </div>

      {/* OTHER CATEGORIES */}
      <div className="border-t border-white/8 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <FadeIn>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#a3e635]/60 mb-6">Browse Other Categories</p>
          </FadeIn>
          <div className="flex flex-wrap gap-2.5">
            {Object.entries(CATEGORIES)
              .filter(([s]) => s !== slug)
              .map(([s, cat], idx) => (
                <FadeIn key={s} delay={idx * 50}>
                  <button
                    onClick={() => goTo(`/category/${s}`)}
                    className="flex items-center gap-2 px-5 py-2.5 border border-white/10 text-white/55 hover:text-white hover:border-white/35 transition-all text-[10px] uppercase tracking-[0.18em]"
                  >
                    {cat.name} <ArrowRight className="w-3 h-3" />
                  </button>
                </FadeIn>
              ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black pt-14 pb-10 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start justify-between mb-10">
            <div>
              <span
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontStyle: 'italic', letterSpacing: '0.18em', fontSize: '1.1rem' }}
                className="text-white block mb-2 uppercase"
              >BLKCARBON</span>
              <p className="text-white/35 text-xs leading-relaxed max-w-[180px]">
                Live Beyond Limits. Premium carbon padel equipment untuk performa elite.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-1">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <button key={i} className="w-7 h-7 border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-white/35 transition-colors">
                  <Icon className="w-3 h-3" />
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-10 border-t border-white/5 pt-8">
            <div>
              <h4 className="font-display uppercase tracking-[0.2em] text-[9px] font-semibold mb-3 text-white/50">Produk</h4>
              <ul className="space-y-2">
                {[
                  ['Padel Rackets', '/category/padel-rackets'],
                  ['Bags', '/category/bags'],
                  ['Apparel', '/category/apparel'],
                  ['Accessories', '/category/accessories'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <button onClick={() => goTo(href)} className="text-white/35 hover:text-white text-[11px] transition-colors text-left leading-snug">{label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display uppercase tracking-[0.2em] text-[9px] font-semibold mb-3 text-white/50">Teknologi</h4>
              <ul className="space-y-2">
                {['Carbon Matrix', 'Precision Control', 'Materials', 'Research'].map((link) => (
                  <li key={link}>
                    <button onClick={() => goTo('/')} className="text-white/35 hover:text-white text-[11px] transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display uppercase tracking-[0.2em] text-[9px] font-semibold mb-3 text-white/50">Perusahaan</h4>
              <ul className="space-y-2">
                {['About Us', 'Athletes', 'Contact', 'Press'].map((link) => (
                  <li key={link}>
                    <button onClick={() => goTo('/')} className="text-white/35 hover:text-white text-[11px] transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-5 border-t border-white/8 text-white/20 text-[10px]">
            <p>&copy; {new Date().getFullYear()} BLKCARBON Sports. All rights reserved.</p>
            <div className="flex gap-4 mt-3 md:mt-0">
              <button className="hover:text-white/50 transition-colors">Privacy Policy</button>
              <button className="hover:text-white/50 transition-colors">Terms of Service</button>
              <button className="hover:text-white/50 transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}