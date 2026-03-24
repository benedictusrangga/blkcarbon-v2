import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, MessageCircle, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLocation } from 'wouter';
import Navbar from '@/components/Navbar';
import Reveal from "@/components/Reveal";
import { FadeIn } from '@/components/FadeIn';
import Footer from '@/components/Footer';

const WA_NUMBER = '6285183390264';
const IG_HANDLE = 'blkcarbon.co';

function openWhatsApp(name: string, email: string, subject: string, message: string) {
  const text = `Hello BLKCARBON! \n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

export default function Contact() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const goTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(formData.name, formData.email, formData.subject, formData.message);
  };

  const isValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
      <Navbar forceScrolled />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;1,700&family=Barlow:wght@300;400;500&display=swap');

        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 0;
          padding: 14px 16px;
          color: white;
          font-size: 13px;
          letter-spacing: 0.03em;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          font-family: 'Barlow', sans-serif;
        }
        .form-input::placeholder { color: rgba(255,255,255,0.2); }
        .form-input:focus {
          border-color: rgba(163,230,53,0.6);
          background: rgba(163,230,53,0.03);
        }
        .form-input option { background: #0a0a0a; color: rgba(255,255,255,0.8); }
        select.form-input { cursor: pointer; appearance: none; -webkit-appearance: none; }

        .contact-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .contact-card:hover { transform: translateY(-2px); }
        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(163,230,53,0.08) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .contact-card:hover::before { opacity: 1; }

        .noise-bg { position: relative; }
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.06); }
        }
        .hero-zoom { animation: slowZoom 6s ease-in-out forwards; }
        .slide-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .slide-up-1 { animation-delay: 0.05s; }
        .slide-up-2 { animation-delay: 0.12s; }
        .slide-up-3 { animation-delay: 0.19s; }
      `}</style>

      {/* HERO */}
      <section className="relative w-full pt-[80px]">
        <div className="relative w-full h-[36vw] max-h-[400px] min-h-[240px] overflow-hidden">
          <img src="/images/cont.png" alt="Contact BLKCARBON"
            className="w-full h-full object-cover object-center hero-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-10 w-full">
              <div className="slide-up">
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: '9px', letterSpacing: '0.35em' }}
                  className="text-[#a3e635] uppercase mb-3">Get in Touch</p>
                <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.04em' }}
                  className="text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.88] mb-4">
                  LET'S<br /><span className="text-[#a3e635]">TALK.</span>
                </h1>
                <p className="text-white/50 text-sm max-w-xs leading-relaxed">
                  Product consultation, orders, or partnership — we're ready to respond via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-[#0a0a0a] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* WA */}
           <Reveal delay={0}>
              <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
                className="contact-card group flex items-start gap-4 p-6 border border-[#a3e635]/30 bg-[#a3e635]/[0.04] hover:border-[#a3e635]/60">
                <div className="w-10 h-10 flex items-center justify-center bg-[#a3e635]/10 border border-[#a3e635]/30 flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#a3e635]" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontSize: '9px', letterSpacing: '0.25em' }}
                    className="text-[#a3e635]/60 uppercase mb-1">WhatsApp</p>
                  <p className="text-white font-medium text-sm mb-1">+62 851-8339-0264</p>
                  <p className="text-white/40 text-xs">Response within 1–2 hours</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#a3e635]/40 group-hover:text-[#a3e635] group-hover:translate-x-1 transition-all ml-auto mt-1 flex-shrink-0" />
              </a>
            </Reveal>

            {/* Instagram */}
            <Reveal delay={80}>
              <a href={`https://instagram.com/${IG_HANDLE}`} target="_blank" rel="noopener noreferrer"
                className="contact-card group flex items-start gap-4 p-6 border border-white/[0.08] hover:border-white/20">
                <div className="w-10 h-10 flex items-center justify-center bg-white/[0.04] border border-white/[0.08] flex-shrink-0">
                  <Instagram className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontSize: '9px', letterSpacing: '0.25em' }}
                    className="text-white/30 uppercase mb-1">Instagram</p>
                  <p className="text-white/80 text-sm mb-1 group-hover:text-white transition-colors">@{IG_HANDLE}</p>
                  <p className="text-white/30 text-xs">Follow for updates</p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all ml-auto mt-1 flex-shrink-0" />
              </a>
            </Reveal>

            {/* Location */}
            <Reveal delay={160}>
              <div className="contact-card flex items-start gap-4 p-6 border border-white/[0.08]">
                <div className="w-10 h-10 flex items-center justify-center bg-white/[0.04] border border-white/[0.08] flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white/40" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ fontSize: '9px', letterSpacing: '0.25em' }}
                    className="text-white/30 uppercase mb-1">Address</p>
                  <p className="text-white/80 text-sm mb-1">Campton A No. 11</p>
                  <p className="text-white/40 text-xs">BSD City, Indonesia</p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="noise-bg bg-[#050505] border-b border-white/[0.05]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">

            {/* LEFT */}
            <Reveal delay={0}>
              <div className="lg:sticky lg:top-28">
                <div className="w-8 h-1 bg-[#a3e635] mb-6" />
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.04em' }}
                  className="text-4xl md:text-5xl uppercase leading-[0.92] mb-5">
                  SEND A<br /><span className="text-[#a3e635]">MESSAGE</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  Fill in the form — your message will open in WhatsApp. You can review before sending.
                </p>
                <div>
                  <p style={{ fontSize: '9px', letterSpacing: '0.28em' }}
                    className="text-white/20 uppercase mb-4">Follow Us</p>
                  <div className="flex items-center gap-2">
                    {[
                      { Icon: Instagram, href: `https://instagram.com/${IG_HANDLE}` },
                      { Icon: Twitter,   href: 'https://twitter.com' },
                      { Icon: Youtube,   href: 'https://youtube.com' },
                    ].map(({ Icon, href }, i) => (
                      <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 border border-white/8 flex items-center justify-center text-white/25 hover:text-[#a3e635] hover:border-[#a3e635]/30 transition-colors">
                        <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — form */}
            <Reveal delay={100}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="slide-up slide-up-1">
                    <label style={{ fontSize: '8px', letterSpacing: '0.28em' }}
                      className="block text-white/30 uppercase mb-2">Name</label>
                    <input type="text" name="name" value={formData.name}
                      onChange={handleChange} required placeholder="Full name"
                      className="form-input" />
                  </div>
                  <div className="slide-up slide-up-1">
                    <label style={{ fontSize: '8px', letterSpacing: '0.28em' }}
                      className="block text-white/30 uppercase mb-2">Email</label>
                    <input type="email" name="email" value={formData.email}
                      onChange={handleChange} required placeholder="your@email.com"
                      className="form-input" />
                  </div>
                </div>

                <div className="relative slide-up slide-up-2">
                  <label style={{ fontSize: '8px', letterSpacing: '0.28em' }}
                    className="block text-white/30 uppercase mb-2">Topic</label>
                  <select name="subject" value={formData.subject}
                    onChange={handleChange} required className="form-input">
                    <option value="" disabled>Select a topic...</option>
                    <option value="Product Consultation">Product Consultation</option>
                    <option value="Pricing Inquiry">Pricing Inquiry</option>
                    <option value="Order">Order</option>
                    <option value="After Sales / Warranty">After Sales / Warranty</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 bottom-4">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                <div className="slide-up slide-up-3">
                  <label style={{ fontSize: '8px', letterSpacing: '0.28em' }}
                    className="block text-white/30 uppercase mb-2">Message</label>
                  <textarea name="message" value={formData.message}
                    onChange={handleChange} required rows={5}
                    placeholder="Write your message here..."
                    className="form-input resize-none" />
                </div>

                <div className="flex items-center gap-2.5 py-2">
                  <MessageCircle className="w-3 h-3 text-[#a3e635]/50 shrink-0" strokeWidth={1.5} />
                  <p style={{ fontSize: '9px', letterSpacing: '0.1em' }}
                    className="text-white/25">
                    Message will open in WhatsApp — you can edit before sending
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!isValid}
                  className={`group relative flex items-center justify-center gap-3 w-full py-4 text-xs font-bold uppercase tracking-[0.25em] overflow-hidden transition-all duration-300 ${
                    isValid
                      ? 'bg-[#a3e635] text-black hover:bg-[#b8f54a] cursor-pointer'
                      : 'bg-white/[0.04] border border-white/[0.06] text-white/20 cursor-not-allowed'
                  }`}
                >
                  {isValid && <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  <MessageCircle className="w-4 h-4 relative z-10" strokeWidth={2} />
                  <span className="relative z-10">Send via WhatsApp</span>
                  {isValid && <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </Reveal>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <Reveal delay={0}>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p style={{ fontSize: '9px', letterSpacing: '0.32em' }}
                className="text-[#a3e635]/60 uppercase mb-3">FAQ</p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700 }}
                className="text-4xl md:text-5xl uppercase leading-[0.92]">
                Frequently<br />Asked
              </h2>
            </div>
            <button
              onClick={() => window.open(`https://wa.me/${WA_NUMBER}`, '_blank')}
              className="hidden md:flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#a3e635]/60 hover:text-[#a3e635] transition-colors border-b border-[#a3e635]/20 hover:border-[#a3e635]/50 pb-1"
            >
              Ask Directly <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </Reveal>

        <div className="flex flex-col divide-y divide-white/[0.05]">
          {[
            { q: 'How long is the BLKCARBON racket warranty?',     a: 'All rackets come with a 2-year manufacturer warranty covering material and workmanship defects.' },
            { q: 'Is shipping available outside Jakarta?',          a: 'Yes! We ship nationwide across Indonesia. Contact us for shipping rates to your area.' },
            { q: 'Can rackets be customized?',                      a: 'We offer limited customization options for bulk orders. Contact our team for more details.' },
            { q: 'How often are new products released?',            a: 'We release new models and updates twice a year. Follow us on Instagram for the latest news.' },
            { q: 'Can I try before I buy?',                         a: 'Contact us via WhatsApp for info on demo sessions and racket testing in the BSD City area.' },
            { q: 'Is there a reseller program?',                    a: 'Yes, we have a reseller program for communities and sports stores. Send us a message for more info.' },
          ].map((faq, idx) => (
            <Reveal key={idx} delay={idx * 40}>
              <div className="group grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-4 py-5 hover:bg-white/[0.015] -mx-6 px-6 transition-colors cursor-default">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-full min-h-[20px] bg-[#a3e635]/20 shrink-0 group-hover:bg-[#a3e635]/70 transition-colors duration-300 mt-0.5" />
                  <h3 style={{ fontSize: '10px', letterSpacing: '0.12em' }}
                    className="font-bold uppercase text-white/60 group-hover:text-white transition-colors leading-relaxed">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/55 transition-colors pl-4 md:pl-0">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative w-full overflow-hidden border-y border-white/[0.05]">
        <img src="/images/filosofi4.jpg" alt="BLKCARBON"
          className="w-full h-[220px] md:h-[375px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Reveal delay={0}>
              <p style={{ fontSize: '9px', letterSpacing: '0.32em' }}
                className="text-[#a3e635]/60 uppercase mb-2">Ready to Play?</p>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontStyle: 'italic', fontWeight: 700 }}
                className="text-3xl md:text-5xl uppercase leading-[0.9] mb-5">
                FIND YOUR<br />PERFECT RACKET
              </h2>
              <button
                onClick={() => goTo('/category/padel-rackets')}
                className="group inline-flex items-center gap-2 bg-[#a3e635] text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#b8f54a] transition-colors"
              >
                Shop Collection
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer description="Questions? We're here to help. Reach out anytime." />
    </div>
  );
}