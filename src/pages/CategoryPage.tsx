import React, { useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/FadeIn';
import { PRODUCTS, BAGS, ACCESSORIES, BIKES, APPAREL, Product } from '@/data/products';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

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
    hero: '/images/padelracket/rackethero.jpg',
    products: PRODUCTS,
  },
  bags: {
    name: 'Bags',
    description:
      "Premium sports bags built for the modern athlete. Lightweight, durable, and designed with the same carbon fiber DNA as our rackets.\nBuilt to carry everything you need — nothing you don't.",
    hero: '/images/bags/bagss.jpeg',
    products: BAGS,
  },
  apparel: {
    name: 'Apparel',
    description:
      "Performance apparel engineered for movement. Minimal, functional, and built to match your intensity on the court.\nWear the same precision that's in your racket.",
    hero: '/images/apparel/apparel.png',
    products: APPAREL,
  },
  accessories: {
    name: 'Accessories',
    description:
      'Every detail matters. Complete your setup with BLKCARBON accessories crafted with the same precision as our rackets.\nPerformance from grip to court.',
    hero: '/images/accessories/access.jpeg',
    products: ACCESSORIES,
  },
  bikes: {
    name: 'Bikes',
    description:
      'High-performance carbon road bikes engineered for speed, efficiency, and modern race aesthetics.\nBuilt for riders who refuse to compromise.',
    hero: '/images/bikes/sepeda.webp',
    products: BIKES,
  },
};

export default function CategoryPage() {
  const [, params] = useRoute('/category/:slug');
  const [, navigate] = useLocation();

  const slug = params?.slug ?? '';
  const category = CATEGORIES[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <SEO
        title={`${category.name} — BLKCARBON`}
        description={category.description.split('\n')[0]}
        url={`/category/${slug}`}
        image={category.hero}
      />

      {/* HERO */}
      <div className="w-full pt-[72px]">
        <div className="relative w-full h-[55vw] max-h-[620px] min-h-[320px] overflow-hidden">
          <img
            src={category.hero}
            alt={category.name}
            className="w-full h-full object-cover object-center"
          />

          {/* cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black" />

          {/* subtle noise for premium feel */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/images/noise.png')]" />

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

      {/* DESCRIPTION */}
      <div className="max-w-7xl mx-auto px-6 pt-5 pb-6">
        <FadeIn>
          <div className="max-w-lg">
            {descLines.map((line, i) => (
              <p
                key={i}
                className={`text-white/50 text-sm leading-relaxed ${i > 0 ? 'mt-2' : ''}`}
              >
                {line}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-14">
        {category.comingSoon ? (
          <FadeIn>
            <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
              <div className="w-10 h-[2px] bg-[#a3e635]/50 mx-auto" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#a3e635]/60">
                Coming Soon
              </p>

              <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white">
                {category.name}
              </h2>

          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                We are preparing our finest {category.name.toLowerCase()} collection. Stay tuned.
              </p>
              <div className="w-10 h-[2px] bg-[#a3e635]/50 mx-auto" />

              <button
                onClick={() => goTo('/category/padel-rackets')}
                className="mt-3 group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-white border-b border-[#a3e635]/60 pb-1 hover:border-[#a3e635] transition-colors"
              >
                Shop Padel Rackets
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-14">
            {category.products.map((product, idx) => (
              <FadeIn key={product.slug} delay={idx * 80}>
                <button
                  className="group text-left w-full transition-all duration-500 hover:-translate-y-[4px]"
                  onClick={() => goTo(`/products/${product.slug}`)}
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-900 mb-3 transition-shadow duration-500 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src = '/images/fallback.png')
                      }
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />

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

                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mb-1">
                    {category.name}
                  </p>

                  <h3 className="text-sm md:text-base font-display font-semibold uppercase tracking-wide mb-0.5 group-hover:text-white/70 transition-colors leading-tight">
                    {product.name}
                  </h3>

                  <p className="text-white/35 text-xs mb-3 leading-snug hidden md:block">
                    {product.tagline}
                  </p>

                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-medium text-white">{product.price}</span>

                    <span className="text-[9px] uppercase tracking-widest text-white/30 flex items-center gap-1 group-hover:text-[#a3e635]/70 transition-colors">
                      View
                      <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
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
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#a3e635]/60 mb-6">
              Browse Other Categories
            </p>
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
                    {cat.name}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </FadeIn>
              ))}
          </div>
        </div>
      </div>

      <Footer description="Live Beyond Limits. Premium carbon padel equipment for elite performance." />
    </div>
  );
}