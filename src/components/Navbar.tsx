import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Instagram, Mail } from 'lucide-react';
import { useLocation } from 'wouter';
import { PRODUCTS } from '@/data/products';

const CATEGORIES = [
  { name: 'Padel Rackets', img: '/images/product-carbonspectra.png', slug: '/category/padel-rackets' },
  { name: 'Bags',          img: '/images/category-bags.png',          slug: '/category/bags' },
  { name: 'Apparel',       img: '/images/category-apparel.png',       slug: '/category/apparel' },
  { name: 'Accessories',   img: '/images/category-accessories.png',   slug: '/category/accessories' },
];

const NAV_LINKS = [
  { label: 'Technology', path: '/technology' },
  { label: 'About',      path: '/about' },
  { label: 'Contact',    path: '/contact' },
];

interface NavbarProps {
  forceScrolled?: boolean;
}

export default function Navbar({ forceScrolled = false }: NavbarProps) {
  const [isScrolled, setIsScrolled]           = useState(forceScrolled);
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [megaMenuOpen, setMegaMenuOpen]       = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const megaMenuRef   = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [, navigate]  = useLocation();

  useEffect(() => {
    if (forceScrolled) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceScrolled]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => () => { if (closeTimerRef.current) clearTimeout(closeTimerRef.current); }, []);

  const openMega = () => { cancelMegaClose(); setMegaMenuOpen(true); };
  const scheduleMegaClose = () => {
    closeTimerRef.current = setTimeout(() => setMegaMenuOpen(false), 80);
  };
  const cancelMegaClose = () => {
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null; }
  };

  const closeMenu = () => setMobileMenuOpen(false);

  const goTo = (path: string) => {
    closeMenu();
    setMegaMenuOpen(false);
    cancelMegaClose();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;1,700&family=Barlow:wght@300;400;500&display=swap');

        .nav-link-desktop {
          position: relative;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
          transition: color 0.2s ease;
          padding-bottom: 3px;
        }
        .nav-link-desktop::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #a3e635;
          transition: width 0.25s ease;
        }
        .nav-link-desktop:hover { color: rgba(255,255,255,1); }
        .nav-link-desktop:hover::after { width: 100%; }
        .nav-link-desktop.active-menu { color: rgba(255,255,255,1); }
        .nav-link-desktop.active-menu::after { width: 100%; background: #a3e635; }

        .mega-menu-enter {
          animation: megaFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes megaFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .product-card-hover img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .product-card-hover:hover img { transform: scale(1.04); }
        .product-card-hover .card-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .product-card-hover:hover .card-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .cat-row {
          position: relative;
          overflow: hidden;
        }
        .cat-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #a3e635;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.2s ease;
        }
        .cat-row:hover::before { transform: scaleY(1); }
        .cat-row:hover { background: rgba(255,255,255,0.03); }

        .mobile-menu-item { transition: background 0.15s ease; }
        .mobile-menu-item:active { background: rgba(255,255,255,0.06); }

        .ticker-divider {
          width: 1px;
          height: 12px;
          background: rgba(255,255,255,0.15);
          display: inline-block;
          vertical-align: middle;
          margin: 0 16px;
        }
      `}</style>

      {/* ── MAIN NAV ─────────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || forceScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        onMouseLeave={scheduleMegaClose}
        onMouseEnter={cancelMegaClose}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">

          {/* LOGO */}
          <button
            className="flex items-center gap-3 group flex-shrink-0"
            onClick={() => goTo('/')}
          >
            <img
              src="/images/blkcarbon-icon.png"
              alt="BLKCARBON"
              className="w-7 h-7 object-contain transition-opacity duration-200 group-hover:opacity-60"
            />
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: '0.2em',
                fontSize: '1.3rem',
                lineHeight: 1,
              }}
              className="text-white uppercase transition-opacity duration-200 group-hover:opacity-60"
            >
              BLKCARBON
            </span>
          </button>

          {/* DESKTOP CENTER NAV */}
          <div className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            <button
              className={`nav-link-desktop ${megaMenuOpen ? 'active-menu' : ''}`}
              onMouseEnter={openMega}
            >
              Products
            </button>
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => goTo(item.path)}
                className="nav-link-desktop"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* MOBILE RIGHT */}
          <div className="flex md:hidden items-center gap-4">
            <button
              className="text-white/50 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen
                ? <X className="w-5 h-5" strokeWidth={1.5} />
                : <Menu className="w-5 h-5" strokeWidth={1.5} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* ── DESKTOP MEGA MENU ─────────────────────────────────────────────────── */}
      {megaMenuOpen && (
        <div
          ref={megaMenuRef}
          style={{ top: '80px', transform: 'translateZ(0)', willChange: 'transform' }}
          className="mega-menu-enter fixed left-0 right-0 bg-[#050505]/99 backdrop-blur-2xl border-b border-white/[0.06] z-40"
          onMouseEnter={cancelMegaClose}
          onMouseLeave={scheduleMegaClose}
        >
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex gap-8">

              {/* LEFT: CATEGORIES */}
              <div className="w-56 flex-shrink-0">
                <p
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.18em' }}
                  className="text-white/30 uppercase mb-3"
                >
                  Shop by Category
                </p>
                <div className="space-y-[2px]">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => goTo(cat.slug)}
                      onMouseEnter={() => setHoveredCategory(cat.slug)}
                      onMouseLeave={() => setHoveredCategory(null)}
                      className="cat-row w-full flex items-center gap-3 px-3 py-1.5 text-left"
                    >
                      <div className={`w-8 h-8 flex-shrink-0 overflow-hidden bg-zinc-900 transition-opacity duration-200 ${
                        hoveredCategory && hoveredCategory !== cat.slug ? 'opacity-30' : 'opacity-100'
                      }`}>
                        <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                      </div>
                      <span
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '12px', letterSpacing: '0.06em' }}
                        className={`font-medium uppercase transition-colors duration-150 ${
                          hoveredCategory === cat.slug ? 'text-white' : 'text-white/70'
                        }`}
                      >
                        {cat.name}
                      </span>
                      <ArrowRight
                        className={`w-3 h-3 ml-auto transition-all duration-150 ${
                          hoveredCategory === cat.slug ? 'text-[#a3e635] translate-x-0' : 'text-white/20 -translate-x-1'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/[0.08]">
                  <button
                    onClick={() => goTo('/products')}
                    style={{ fontFamily: "'Barlow', sans-serif", fontSize: '10px', letterSpacing: '0.15em' }}
                    className="text-white/40 uppercase hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    View All Products
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="w-px bg-white/[0.07] self-stretch flex-shrink-0" />

              {/* RIGHT: FEATURED PRODUCTS */}
              <div className="flex-1">
                <p
                  style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.18em' }}
                  className="text-white/30 uppercase mb-3"
                >
                  Featured
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {PRODUCTS.slice(0, 3).map((product) => (
                    <button
                      key={product.slug}
                      onClick={() => goTo(`/products/${product.slug}`)}
                      className="product-card-hover group text-left"
                    >
                      <div className="relative h-36 bg-zinc-900 overflow-hidden mb-2">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        {product.badge && (
                          <span
                            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '9px', letterSpacing: '0.18em' }}
                            className="absolute top-3 left-3 uppercase border border-white/20 bg-black/70 text-white/80 px-2 py-0.5 backdrop-blur-sm"
                          >
                            {product.badge}
                          </span>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end p-3">
                          <span
                            style={{ fontFamily: "'Barlow', sans-serif", fontSize: '10px', letterSpacing: '0.12em' }}
                            className="card-arrow text-white uppercase flex items-center gap-1"
                          >
                            View <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                      <p
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.15em' }}
                        className="text-white/40 uppercase mb-0.5"
                      >
                        Padel Racket
                      </p>
                      <h4
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '14px', letterSpacing: '0.06em' }}
                        className="text-white uppercase mb-0.5 group-hover:text-white/60 transition-colors"
                      >
                        {product.name}
                      </h4>
                      <p
                        style={{ fontFamily: "'Barlow', sans-serif", fontSize: '11px' }}
                        className="text-white/50"
                      >
                        {product.price}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t border-white/[0.06] bg-black/40">
            <div className="max-w-7xl mx-auto px-8 h-10 flex items-center gap-6">
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.15em' }} className="text-white/25 uppercase">New Season 2025</span>
              <span className="ticker-divider" />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.15em' }} className="text-white/25 uppercase">Carbon Fiber Technology</span>
              <span className="ticker-divider" />
              <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.15em' }} className="text-white/25 uppercase">Engineered for Performance</span>
            </div>
          </div>
        </div>
      )}

      {/* ── MOBILE BACKDROP ───────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* ── MOBILE SLIDE-IN PANEL ─────────────────────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 h-full w-[82vw] max-w-[340px] bg-[#080808] z-[70] flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.07] flex-shrink-0">
          <div className="flex items-center gap-2">
            <img src="/images/blkcarbon-icon.png" alt="BLKCARBON" className="w-5 h-5 object-contain" />
            <span
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontStyle: 'italic', letterSpacing: '0.2em', fontSize: '1rem' }}
              className="text-white uppercase"
            >
              BLKCARBON
            </span>
          </div>
          <button onClick={closeMenu} className="text-white/40 hover:text-white transition-colors p-1">
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="px-5 pt-6 pb-3">
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.18em' }} className="text-white/25 uppercase">Categories</p>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => goTo(cat.slug)}
              className="mobile-menu-item w-full flex items-center gap-4 px-5 py-3.5 border-b border-white/[0.05] group"
            >
              <div className="w-12 h-12 flex-shrink-0 overflow-hidden bg-zinc-900">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span
                style={{ fontFamily: "'Barlow', sans-serif", fontSize: '13px', letterSpacing: '0.05em', fontWeight: 500 }}
                className="text-white/70 group-hover:text-white transition-colors flex-1 text-left uppercase"
              >
                {cat.name}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#a3e635] group-hover:translate-x-0.5 transition-all flex-shrink-0" strokeWidth={1.5} />
            </button>
          ))}

          <div className="px-5 pt-6 pb-3">
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.18em' }} className="text-white/25 uppercase">Explore</p>
          </div>
          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              onClick={() => goTo(item.path)}
              className="mobile-menu-item w-full flex items-center justify-between px-5 py-3 border-b border-white/[0.05] group"
            >
              <span
                style={{ fontFamily: "'Barlow', sans-serif", fontSize: '13px', letterSpacing: '0.05em', fontWeight: 400 }}
                className="text-white/40 group-hover:text-white/80 transition-colors uppercase"
              >
                {item.label}
              </span>
              <ArrowRight className="w-3 h-3 text-white/15 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
            </button>
          ))}
        </div>

        {/* Bottom icons — tanpa account */}
        <div className="flex-shrink-0 border-t border-white/[0.07] px-5 py-5 flex items-center gap-5">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
            onClick={closeMenu}
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
          </a>
          <button onClick={() => goTo('/contact')} className="text-white/30 hover:text-white transition-colors">
            <Mail className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </>
  );
}