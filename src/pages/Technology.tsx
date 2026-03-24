import React from 'react';
import { ArrowRight, Hexagon, Crosshair, Zap, Layers, Cpu, Shield } from 'lucide-react';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/FadeIn';
import Footer from '@/components/Footer';

export default function Technology() {
  const [, navigate] = useLocation();

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <Navbar forceScrolled />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;1,700&family=Cormorant+Garamond:wght@300;400&display=swap');

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.08); }
        }
        .hero-zoom { animation: slowZoom 8s ease-in-out forwards; }
        .slide-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      {/* HERO */}
      <section className="relative w-full pt-[80px]">
        <div className="relative w-full h-[55vw] max-h-[620px] min-h-[320px] overflow-hidden">
          <img
            src="/images/techbanner.jpg"
            alt="Carbon Matrix Technology"
            className="w-full h-full object-cover object-center hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-10 w-full slide-up">
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.35em' }}
                className="text-[#a3e635] uppercase mb-3">Innovation</p>
              <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.04em' }}
                className="text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.88] mb-4">
                CARBON MATRIX<br /><span className="text-[#a3e635]">TECHNOLOGY.</span>
              </h1>
              <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                Engineered for athletes who demand absolute performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-12 border-b border-white/[0.06]">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <p className="text-white/50 text-sm leading-relaxed max-w-lg">
              At the heart of every BLKCARBON racket lies our proprietary Carbon Matrix structure — combining aerospace-grade 3K, 12K, and 18K carbon fiber with precision-engineered core materials to maximize power while maintaining absolute control.
            </p>
            <div className="grid grid-cols-3 gap-6 lg:justify-items-end">
              {[
                { num: '2.4×',   label: 'Stronger' },
                { num: '98%',    label: 'Energy Return' },
                { num: '±0.1mm', label: 'Tolerance' },
              ].map(({ num, label }) => (
                <div key={label} className="text-right">
                  <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.02em' }}
                    className="text-white leading-none mb-1">{num}</p>
                  <p style={{ fontSize: '9px', letterSpacing: '0.2em' }}
                    className="text-white/30 uppercase">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CORE TECHNOLOGY — split layout */}
      <section id="carbon-matrix" className="bg-black border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* LEFT */}
            <div className="py-14 lg:py-20 lg:pr-16 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
              <FadeIn>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#a3e635] mb-4">The Foundation</p>
                <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight mb-6 leading-[0.92]">
                  Carbon Matrix<br />Structure
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-sm">
                  Every layer, every weave is mathematically optimized. The result is a racket that feels like an extension of your body — responsive, precise, and built to last.
                </p>
                {/* specs luxury table */}
                <div className="flex flex-col">
                  {[
                    { label: 'Carbon Weave',   value: 'Multi-Layer 3K / 12K / 18K Carbon' },
                    { label: 'Core Material',  value: 'EVA Foam Pro' },
                    { label: 'Core Thickness', value: '38mm' },
                    { label: 'Frame Weight',   value: '355 – 375g' },
                    { label: 'Surface',        value: 'Carbon Fiber Rough' },
                  ].map((row) => (
                    <div key={row.label} className="flex items-baseline justify-between py-3.5 border-t border-white/[0.05] last:border-b last:border-white/[0.05]">
                      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.28em' }}
                        className="text-white/25 uppercase">{row.label}</span>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', fontWeight: 300 }}
                        className="text-white/80">{row.value}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* RIGHT — tech features */}
            <div className="lg:pl-16 py-14 lg:py-20">
              <FadeIn>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-8">Key Features</p>
              </FadeIn>
              <div className="flex flex-col divide-y divide-white/[0.05]">
                {[
                  { num: '01', icon: Layers,    title: '3K / 12K / 18K Carbon Structure',        desc: 'Multi-layer carbon construction provides optimal balance between strength and flexibility across the entire frame.' },
                  { num: '02', icon: Cpu,       title: 'Precision Engineering',       desc: 'Every layer calculated to ±0.1mm tolerance — geometric perfection that translates to consistent performance.' },
                  { num: '03', icon: Shield,    title: 'Aerospace-Grade Materials',   desc: 'The same materials used in aviation engineering, adapted for elite sports performance.' },
                  { num: '04', icon: Zap,       title: 'Competition Ready',           desc: 'Immediate responsiveness and maximum energy return on every impact.' },
                ].map((tech, idx) => (
                  <FadeIn key={idx} delay={idx * 80}>
                    <div className="group py-6 flex items-start gap-5 hover:bg-white/[0.015] -mx-4 px-4 transition-colors">
                      <span style={{ fontSize: '10px', letterSpacing: '0.28em' }}
                        className="text-[#a3e635]/40 shrink-0 pt-0.5 w-5 group-hover:text-[#a3e635] transition-colors">
                        {tech.num}
                      </span>
                      <tech.icon className="w-4 h-4 text-white/20 shrink-0 mt-0.5 group-hover:text-[#a3e635]/70 transition-colors" strokeWidth={1.5} />
                      <div className="flex-1">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-1.5">{tech.title}</h3>
                        <p className="text-white/35 text-xs leading-relaxed">{tech.desc}</p>
                        <div className="mt-3 h-px bg-white/[0.04] relative overflow-hidden">
                          <div className="absolute left-0 top-0 h-full bg-[#a3e635]/50"
                            style={{ width: idx === 0 ? '85%' : idx === 1 ? '72%' : idx === 2 ? '90%' : '95%' }} />
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE METRICS */}
      <section id="performance-specs" className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <FadeIn>
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-3">Benchmark Data</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight leading-[0.92]">
                Performance<br />Metrics
              </h2>
            </div>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.05]">
          {[
            { metric: '38mm',   label: 'Core Thickness',  desc: 'Optimal for power delivery' },
            { metric: '355g',   label: 'Min Weight',      desc: 'Engineered for speed' },
            { metric: '98%',    label: 'Energy Return',   desc: 'Max responsiveness' },
            { metric: '2.4×',   label: 'Strength',        desc: 'vs conventional rackets' },
            { metric: '±0.1mm', label: 'Tolerance',       desc: 'Precision manufacturing' },
            { metric: '5 Year', label: 'Durability',      desc: 'With proper maintenance' },
          ].map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 60}>
              <div className="group bg-[#080808] p-6 md:p-8 hover:bg-[#0d0d0d] transition-colors">
                <div className="w-4 h-px bg-[#a3e635]/40 mb-5 group-hover:w-8 group-hover:bg-[#a3e635] transition-all duration-300" />
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 300 }}
                  className="text-white leading-none mb-2">{stat.metric}</p>
                <p style={{ fontSize: '9px', letterSpacing: '0.22em' }}
                  className="text-white/40 uppercase mb-1">{stat.label}</p>
                <p className="text-white/25 text-xs">{stat.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* RESEARCH & DEVELOPMENT */}
      <section id="research" className="bg-[#050505] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="lg:sticky lg:top-24">
                <img
                  src="/images/featured-tech.png"
                  alt="R&D Testing"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#a3e635] mb-4">Research & Testing</p>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.03em' }}
                    className="text-3xl md:text-4xl uppercase leading-[0.92] mb-5">
                    Engineered Through<br />Innovation
                  </h2>
                  <p className="text-white/40 text-sm leading-relaxed">
                    Every BLKCARBON racket undergoes rigorous testing. We simulate impact resistance, energy return, material durability, and player ergonomics to ensure every racket meets elite performance standards.
                  </p>
                </div>
                {/* process list */}
                <div className="flex flex-col">
                  {[
                    { num: '01', title: 'Computational Simulation',  desc: 'CFD analysis to optimize aerodynamics and impact zones.' },
                    { num: '02', title: '10,000+ Impact Tests',      desc: 'Every frame tested beyond competition conditions.' },
                    { num: '03', title: 'Material Stress Analysis',  desc: 'Finite element analysis ensures structural integrity.' },
                    { num: '04', title: 'Player Feedback Loop',      desc: 'Elite athletes validate every design iteration.' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-5 py-5 border-t border-white/[0.05] last:border-b last:border-white/[0.05]">
                      <span style={{ fontSize: '9px', letterSpacing: '0.25em' }}
                        className="text-[#a3e635]/50 shrink-0 pt-0.5">{step.num}</span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-white mb-1">{step.title}</p>
                        <p className="text-white/35 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA — editorial strip */}
      <section className="relative w-full h-[240px] md:h-[320px] overflow-hidden border-b border-white/5">
        <img src="/images/ctatech.png" alt="BLKCARBON" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <FadeIn>
              <p style={{ fontSize: '9px', letterSpacing: '0.32em' }}
                className="text-[#a3e635]/60 uppercase mb-3">Experience It</p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.03em' }}
                className="text-3xl md:text-5xl uppercase leading-[0.9] mb-5">
                TECHNOLOGY THAT<br />WINS MATCHES
              </h2>
              <button
                onClick={() => goTo('/category/padel-rackets')}
                className="group inline-flex items-center gap-2 bg-[#a3e635] text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#b8f54a] transition-colors"
              >
                Shop Collection
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}