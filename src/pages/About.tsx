import React from 'react';
import { ArrowRight, Target, Users, Zap, Heart } from 'lucide-react';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/FadeIn';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

// FIX 2: navbar height as a constant — update in one place if navbar changes
const NAVBAR_HEIGHT = 80;

export default function About() {
  const [, navigate] = useLocation();

  // FIX 2: goTo kept local but clean — extract to @/lib/navigation if reuse grows
  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <Navbar forceScrolled />
      <SEO
        title="About Us — BLKCARBON"
        description="BLKCARBON is a premium sports brand built in 2025, engineered without compromise. Born from obsession with carbon fiber technology and elite athletic performance."
        url="/about"
        image="/images/aboutt.png"
      />
    <style>{`
        .value-card {
          position: relative;
          overflow: hidden;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .value-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #a3e635;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .value-card:hover::after { transform: scaleX(1); }
        .value-card:hover { background: rgba(163,230,53,0.03); border-color: rgba(163,230,53,0.2) !important; }

        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.07); }
        }
        .hero-zoom { animation: slowZoom 7s ease-in-out forwards; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* FIX 5: pt uses NAVBAR_HEIGHT constant via inline style */}
      <section className="relative w-full" style={{ paddingTop: NAVBAR_HEIGHT }}>
        <div className="relative w-full h-[46vw] max-h-[500px] min-h-[280px] overflow-hidden">
          <img
            src="/images/aboutt.png"
            alt="About BLKCARBON"
            className="w-full h-full object-cover object-center hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-10 w-full">
              {/* FIX 4: replaced slide-up CSS class with FadeIn component */}
              <FadeIn direction="up">
                <p
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.35em' }}
                  className="text-[#a3e635] uppercase mb-3"
                >
                  Who We Are
                </p>
                <h1
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.04em' }}
                  className="text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.88] mb-4"
                >
                  ENGINEERED<br /><span className="text-[#a3e635]">FOR ELITE.</span>
                </h1>
                <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                  A brand built on innovation, precision, and the relentless pursuit of excellence.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ──────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <FadeIn>
            <div className="flex items-center gap-5">
              <div className="w-1 h-10 bg-[#a3e635] flex-shrink-0" />
              <p
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, fontSize: '1.6rem', letterSpacing: '0.04em' }}
                className="uppercase leading-tight"
              >
                Built in 2025.{' '}
                <span
                  className="text-white/40 not-italic"
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: '0.95rem', fontWeight: 400, letterSpacing: '0.05em' }}
                >
                  Engineered without compromise.
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── BRAND STORY ──────────────────────────────────────────────────── */}
      <section className="bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* LEFT — image + quote */}
            <div className="py-14 lg:py-20 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <FadeIn>
                <div className="lg:sticky lg:top-24">
                  <img
                    src="/images/about.png"
                    alt="BLKCARBON Story"
                    className="w-full aspect-[4/3] object-cover mb-6"
                  />
                  <div className="border-l-[3px] border-[#a3e635] pl-5">
                    <p
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, fontSize: '1.3rem', letterSpacing: '0.02em' }}
                      className="text-white/70 leading-snug mb-2 uppercase"
                    >
                      "Live beyond limits — not just a tagline, but the standard we hold ourselves to every day."
                    </p>
                    <p
                      style={{ fontSize: '9px', letterSpacing: '0.25em' }}
                      className="text-[#a3e635]/50 uppercase"
                    >
                      BLKCARBON Founding Principle
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT — timeline */}
            <div className="lg:pl-16 py-14 lg:py-20">
              <FadeIn>
                <p style={{ fontSize: '9px', letterSpacing: '0.32em' }} className="text-[#a3e635]/60 uppercase mb-4">
                  Our Story
                </p>
                <h2
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.03em' }}
                  className="text-4xl md:text-5xl uppercase leading-[0.92] mb-8"
                >
                  BORN FROM<br />OBSESSION
                </h2>
              </FadeIn>
              <div className="flex flex-col divide-y divide-white/[0.05]">
                {[
                  { year: 'The Idea',   title: 'Born from Frustration',   desc: 'Born from the frustration of athletes who were tired of rackets that were too heavy, too weak, or too ordinary. We knew there was a better way.' },
                  { year: 'The Build',  title: 'Carbon Obsession',         desc: 'Months of intensive research into carbon materials — from 3K for control, 12K for balance, to 18K for maximum power output.' },
                  { year: 'The Launch', title: '2025 — BLKCARBON Arrives', desc: 'Carbon Matrix, Carbon Spectra, and Carbon Force officially launched. Three rackets, three characters, one philosophy: no compromises.' },
                  { year: 'Beyond',     title: 'Full Ecosystem',           desc: 'From rackets to bikes, bags, apparel, and accessories — BLKCARBON is building a complete performance ecosystem for the modern athlete.' },
                ].map((item, idx) => (
                  <FadeIn key={idx} delay={idx * 80}>
                    <div className="group flex gap-5 py-5 hover:bg-white/[0.015] -mx-4 px-4 transition-colors">
                      <span
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, fontSize: '1rem' }}
                        className="text-[#a3e635]/40 shrink-0 pt-0.5 w-12 group-hover:text-[#a3e635] transition-colors"
                      >
                        {item.year}
                      </span>
                      <div>
                        <p style={{ fontSize: '10px', letterSpacing: '0.18em' }} className="font-bold uppercase text-white mb-1.5">
                          {item.title}
                        </p>
                        <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <FadeIn>
          <div className="mb-10">
            <p style={{ fontSize: '9px', letterSpacing: '0.32em' }} className="text-[#a3e635]/60 uppercase mb-3">
              What Drives Us
            </p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.03em' }}
              className="text-4xl md:text-5xl uppercase leading-[0.92]"
            >
              CORE<br />VALUES
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Target, num: '01', title: 'Precision First',       desc: 'Every measurement, every layer, every detail engineered to ±0.1mm tolerance. No shortcuts, no compromises.' },
            { icon: Users,  num: '02', title: 'Athlete Obsessed',      desc: 'We design for elite performers. Your feedback shapes our innovation. Your performance validates our work.' },
            { icon: Zap,    num: '03', title: 'Innovation Relentless', desc: 'Standing still means falling behind. We constantly research, test, and refine to stay at the forefront.' },
            { icon: Heart,  num: '04', title: 'Passion Uncompromised', desc: 'We build because we love the sport. Quality never takes a backseat to profit margins.' },
          ].map((value, idx) => (
            <FadeIn key={idx} delay={idx * 80}>
              <div className="value-card border border-white/[0.08] p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, fontSize: '1.8rem', letterSpacing: '0.02em' }}
                      className="text-[#a3e635]/25 leading-none"
                    >
                      {value.num}
                    </span>
                    <value.icon className="w-4 h-4 text-white/20" strokeWidth={1.5} />
                  </div>
                  <div className="w-6 h-px bg-[#a3e635]/30 mt-2" />
                </div>
                <h3
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, fontSize: '1.4rem', letterSpacing: '0.03em' }}
                  className="uppercase text-white mb-2 leading-tight"
                >
                  {value.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">{value.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CARBON ENGINEERING ───────────────────────────────────────────── */}
      <section className="bg-[#050505] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <p style={{ fontSize: '9px', letterSpacing: '0.32em' }} className="text-[#a3e635]/60 uppercase mb-4">
                  Material & Craft
                </p>
                <h2
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.03em' }}
                  className="text-4xl md:text-5xl uppercase leading-[0.92] mb-6"
                >
                  CARBON<br />ENGINEERING
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-md">
                  Every BLKCARBON racket is built from carefully selected carbon materials — 3K for refined control, 12K for the perfect balance of power and precision, and 18K for aggressive professional-level performance. No compromises on every layer.
                </p>
                {/* FIX 1: all labels now in English */}
                <div className="flex flex-col divide-y divide-white/[0.05]">
                  {[
                    { label: 'Carbon Material', value: '3K / 12K / 18K Grade' },
                    { label: 'Construction',    value: 'Precision engineered' },
                    { label: 'Durability',      value: 'Built to last' },
                    { label: 'Design',          value: 'Minimalist performance' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-baseline justify-between py-3.5">
                      <span style={{ fontSize: '9px', letterSpacing: '0.28em' }} className="text-white/25 uppercase">
                        {row.label}
                      </span>
                      <span
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', fontWeight: 300 }}
                        className="text-white/75"
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <img
                src="/images/engineer.png"
                alt="Carbon Engineering"
                className="w-full aspect-[4/4] object-cover brightness-75"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden border-b border-white/5">
        <img
          src="/images/filosofi2.jpg"
          alt="Join BLKCARBON"
          className="w-full h-[220px] md:h-[375px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
            <FadeIn>
              <div>
                <p style={{ fontSize: '9px', letterSpacing: '0.32em' }} className="text-[#a3e635]/60 uppercase mb-2">
                  Join Us
                </p>
                <h2
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.03em' }}
                  className="text-3xl md:text-5xl uppercase leading-[0.9] mb-5"
                >
                  LIVE BEYOND<br />LIMITS
                </h2>
                <button
                  onClick={() => goTo('/category/padel-rackets')}
                  className="group inline-flex items-center gap-2 bg-[#a3e635] text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#b8f54a] transition-colors"
                >
                  Shop Collection
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer description="Engineered for elite athletes. Built to inspire excellence." />
    </div>
  );
}