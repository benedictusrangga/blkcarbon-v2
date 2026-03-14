import React from 'react';
import { ArrowRight, Hexagon, Crosshair, Zap, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/FadeIn';
import { PRODUCTS } from '@/data/products';

export default function Home() {
  const [, navigate] = useLocation();

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-end justify-start overflow-hidden">
        <img
          src="/images/hero-racket.png"
          alt="CarbonSpectra Pro Racket"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10 z-0" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28">
          <FadeIn delay={100} direction="up">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-5">
              New Collection — 2025
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-white mb-4 uppercase leading-[0.9]">
              CarbonSpectra<br />// Pro
            </h1>
          </FadeIn>
          <FadeIn delay={300} direction="up">
            <p className="text-white/70 text-base md:text-lg font-light mb-8 max-w-xs">
              Precision. Power. Beyond Limits.
            </p>
          </FadeIn>
          <FadeIn delay={500} direction="up">
            <button
              onClick={() => goTo('/products/carbonspectra-pro')}
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-white border-b border-[#a3e635]/60 pb-1 hover:border-[#a3e635] transition-colors"
            >
              Shop the Collection <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED PRODUCT CALLOUT */}
      <section className="w-full bg-[#0a0a0a] py-10 px-6 border-b border-white/5">
        <FadeIn className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 mb-3">Koleksi Terbaru</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-[0.15em] text-white mb-2">
            Carbon Matrix
          </h2>
          <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Engineered for elite performance.</p>
        </FadeIn>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="pt-14 pb-10 overflow-hidden">
        <FadeIn>
          <div className="flex items-center justify-between px-6 mb-8">
            <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-white/60">
              Shop by category
            </h2>
            <button
              onClick={() => goTo('/')}
              className="text-[10px] uppercase tracking-widest text-white/35 hover:text-white transition-colors flex items-center gap-1.5"
            >
              View all <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </FadeIn>
        <div
          className="flex overflow-x-auto snap-x snap-mandatory pl-6 md:pl-12 pr-6 pb-4 gap-3 md:gap-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[
            { img: '/images/hero-racket.png', name: 'Padel Rackets', slug: '/category/padel-rackets' },
            { img: '/images/category-bags.png', name: 'Bags', slug: '/category/bags' },
            { img: '/images/category-apparel.png', name: 'Apparel', slug: '/category/apparel' },
            { img: '/images/category-accessories.png', name: 'Accessories', slug: '/category/accessories' },
          ].map((cat, idx) => (
            <div
              key={idx}
              className="snap-start flex-none w-[240px] md:w-[300px] h-[340px] md:h-[440px] relative group cursor-pointer overflow-hidden"
              onClick={() => goTo(cat.slug)}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="text-sm font-semibold text-white tracking-wide">{cat.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID — THE COLLECTION */}
      <section className="pt-10 pb-0 px-6 lg:px-12 max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35 mb-3">Our Lineup</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight">The Collection</h2>
              <p className="text-white/45 mt-3 max-w-xs text-sm leading-relaxed">
                Aerospace-grade carbon fiber untuk atlet yang menuntut performa absolut.
              </p>
            </div>
            <button
              onClick={() => goTo('/')}
              className="text-[10px] uppercase tracking-[0.2em] border-b border-white/15 pb-1 hover:border-white/50 text-white/45 hover:text-white transition-all self-start md:self-auto whitespace-nowrap"
            >
              Lihat Semua →
            </button>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {PRODUCTS.map((product, idx) => (
            <FadeIn key={product.slug} delay={idx * 120}>
              <button
                className="group text-left w-full"
                onClick={() => goTo(`/products/${product.slug}`)}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden mb-5 bg-zinc-900">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 text-[9px] uppercase tracking-widest border border-[#a3e635]/40 bg-black/70 text-[#a3e635]/80 px-2 py-0.5 backdrop-blur-sm">
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35 mb-1.5">Padel Racket</p>
                <h3 className="text-base font-display font-semibold uppercase tracking-wide mb-1 group-hover:text-white/65 transition-colors">
                  {product.name}
                </h3>
                <p className="text-white/45 text-xs mb-4 leading-relaxed">{product.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{product.price}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/50 flex items-center gap-1.5 group-hover:text-white/60 transition-colors">
                    View <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FEATURED TECH SPLIT */}
      <section className="pt-8 pb-14 max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row border border-white/8 bg-[#050505]">
          <div className="w-full lg:w-1/2 relative overflow-hidden min-h-[360px] lg:min-h-[580px]">
            <img
              src="/images/featured-tech.png"
              alt="Carbon Matrix Technology"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-20">
            <FadeIn>
              <span className="inline-block border border-white/15 px-3 py-1 text-[9px] uppercase tracking-[0.25em] mb-8 text-white/45">
                Featured Technology
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-5 leading-[0.95]">
                Carbon Matrix<br />Technology
              </h2>
              <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                Engineered for elite performance with a proprietary lightweight carbon structure designed for explosive power, unparalleled stability, and precision control on the court.
              </p>
              <button
                onClick={() => goTo('/products/carbonmatrix-tour')}
                className="bg-white text-black px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-white/90 transition-colors inline-flex items-center gap-3 w-fit"
              >
                Discover Technology <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PERFORMANCE TECHNOLOGY — split layout, lime accent */}
      <section className="bg-black border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* LEFT — Heading + stats */}
            <div className="py-14 lg:py-20 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <FadeIn>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#a3e635] mb-4">
                  Engineering
                </p>
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6 leading-[0.92]">
                  Performance<br />Technology
                </h2>
                <p className="text-white/40 max-w-xs text-sm leading-relaxed mb-10">
                  Every layer, every weave is mathematically optimized to push the boundaries of physics.
                </p>
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.06]">
                  {[
                    { num: '3K/12K', label: 'Carbon Weave' },
                    { num: '38mm',   label: 'Core Thickness' },
                    { num: '355g',   label: 'Min Weight' },
                  ].map(({ num, label }) => (
                    <div key={label}>
                      <p className="text-xl md:text-2xl font-bold text-[#a3e635] tracking-tight mb-1">{num}</p>
                      <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">{label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* RIGHT — Tech list */}
            <div className="lg:pl-16 py-14 lg:py-20">
              <div className="flex flex-col divide-y divide-white/[0.06]">
                {[
                  {
                    num: '01', icon: Hexagon,
                    title: 'Carbon Matrix Structure',
                    desc: 'Engineered for unmatched power and long-lasting durability without adding weight.',
                    stat: '2.4×', statLabel: 'lebih kuat',
                  },
                  {
                    num: '02', icon: Crosshair,
                    title: 'Precision Control',
                    desc: 'Optimized balance point designed specifically for elite-level accuracy and finesse.',
                    stat: '±0.1mm', statLabel: 'toleransi',
                  },
                  {
                    num: '03', icon: Zap,
                    title: 'Competition Ready',
                    desc: 'Designed for players pushing beyond limits. Immediate responsiveness and energy return.',
                    stat: '98%', statLabel: 'energy return',
                  },
                ].map((tech, idx) => (
                  <FadeIn key={idx} delay={idx * 100}>
                    <div className="group py-7 flex items-start gap-5 hover:bg-white/[0.015] -mx-4 px-4 transition-colors rounded-sm">
                      <span className="text-[10px] font-semibold text-[#a3e635]/40 tracking-widest shrink-0 pt-0.5 w-5 group-hover:text-[#a3e635] transition-colors">
                        {tech.num}
                      </span>
                      <tech.icon className="w-4 h-4 text-white/25 shrink-0 mt-0.5 group-hover:text-[#a3e635]/70 transition-colors" strokeWidth={1.5} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-1.5">
                          <h3 className="text-xs font-semibold uppercase tracking-widest text-white leading-snug">
                            {tech.title}
                          </h3>
                          <div className="shrink-0 text-right">
                            <p className="text-sm font-bold text-[#a3e635] leading-none">{tech.stat}</p>
                            <p className="text-[8px] uppercase tracking-widest text-white/30 mt-0.5">{tech.statLabel}</p>
                          </div>
                        </div>
                        <p className="text-white/40 text-xs leading-relaxed">{tech.desc}</p>
                        <div className="mt-3 h-px bg-white/[0.06] relative overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full bg-[#a3e635]/60 transition-all duration-700"
                            style={{ width: idx === 0 ? '85%' : idx === 1 ? '72%' : '93%' }}
                          />
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={400}>
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <button
                    onClick={() => goTo('/technology')}
                    className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#a3e635]/60 hover:text-[#a3e635] transition-colors"
                  >
                    Explore Full Technology
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="relative h-[460px] md:h-[560px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/brand-philosophy.png"
          alt="Engineered for Performance"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight mb-5 leading-[0.95]">
              Engineered For<br />Performance
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-sm md:text-base text-white/65 max-w-sm mx-auto font-light leading-relaxed">
              BLKCARBON creates uncompromising performance gear for athletes who refuse to settle.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <button
              onClick={() => goTo('/products/carbonspectra-pro')}
              className="mt-8 inline-flex items-center gap-3 border border-white/25 px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300"
            >
              Shop Now <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </FadeIn>
        </div>
      </section>

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
                {PRODUCTS.map((p) => (
                  <li key={p.slug}>
                    <button onClick={() => goTo(`/products/${p.slug}`)} className="text-white/35 hover:text-white text-[11px] transition-colors text-left leading-snug">{p.name}</button>
                  </li>
                ))}
                {['Sports Bags', 'Apparel', 'Accessories'].map((link) => (
                  <li key={link}>
                    <button onClick={() => goTo('/')} className="text-white/35 hover:text-white text-[11px] transition-colors">{link}</button>
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