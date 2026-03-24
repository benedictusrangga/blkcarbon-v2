import React from 'react';
import { Instagram } from 'lucide-react';
import { useLocation } from 'wouter';

interface FooterLink {
  label: string;
  href?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  description?: string;
}

const DEFAULT_SECTIONS: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'Padel Rackets', href: '/category/padel-rackets' },
      { label: 'Bags', href: '/category/bags' },
      { label: 'Apparel', href: '/category/apparel' },
      { label: 'Accessories', href: '/category/accessories' },
      { label: 'Bikes', href: '/category/bikes' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'Carbon Matrix', href: '/technology#carbon-matrix' },
      { label: 'Performance Metrics', href: '/technology#performance-specs' },
      { label: 'Research', href: '/technology#research' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/blkcarbon.co/' },
];



const MARKETPLACE_BADGES = [
  {
    name: 'Tokopedia',
    href: 'https://www.tokopedia.com/blkcarbon',
    logo: (
      <img
        src="/images/tokopedia.ico"
        alt="Tokopedia"
        className="h-[14px] w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
      />
    ),
  },
  {
    name: 'Shopee',
    href: 'https://shopee.co.id/blkcarbon',
    logo: (
      <img
        src="/images/Shopee.svg"
        alt="Shopee"
        className="h-[14px] w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
      />
    ),
  },
];

export default function Footer({
  sections = DEFAULT_SECTIONS,
  description = 'Premium carbon padel equipment engineered for elite performance.',
}: FooterProps) {
  const [, navigate] = useLocation();

  const handleNavigation = (href?: string) => {
    if (!href || href === '#') return;

    if (href.includes('#')) {
      const [path, id] = href.split('#');
      navigate(path);

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black pt-14 pb-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">

          {/* BRAND */}
          <div className="flex items-start gap-3">
            <img
              src="/images/blkcarbon-icon.png"
              alt="BLKCARBON"
              className="w-6 h-6 object-contain mt-0.5 opacity-80"
            />

            <div>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontStyle: 'italic',
                  letterSpacing: '0.18em',
                  fontSize: '1.1rem',
                }}
                className="text-white block mb-2 uppercase"
              >
                BLKCARBON
              </span>

              <div className="text-white/35 text-xs leading-relaxed max-w-[220px]">
                <p className="mb-1 text-white/60">
                  Live Beyond Limits.
                </p>

                <p>
                  Premium carbon padel equipment for elite performance.
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL + MARKETPLACE */}
          <div className="flex flex-col items-end gap-3">

            {/* SOCIAL */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 border border-white/[0.10] flex items-center justify-center text-white/35 hover:text-white hover:border-white/[0.35] transition-colors"
                  title={label}
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>

            {/* MARKETPLACE */}
            <div className="flex flex-col items-end gap-1.5">
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '9px',
                  letterSpacing: '0.12em'
                }}
                className="text-white/25 uppercase"
              >
                Available on
              </span>

              <div className="flex gap-2">
                {MARKETPLACE_BADGES.map(({ name, href, logo }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 border border-white/[0.08] hover:border-white/[0.20] transition-colors flex items-center"
                    title={name}
                  >
                    {logo}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 mb-10 border-t border-white/[0.05] pt-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  fontWeight: 600
                }}
                className="uppercase mb-3 text-white/50"
              >
                {section.title}
              </h4>

              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-white/35 hover:text-white text-[11px] transition-colors text-left leading-snug"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-5 border-t border-white/[0.08] text-white/20 text-[10px]">
          <p>
            &copy; {new Date().getFullYear()} BLKCARBON Sports. All rights reserved.
          </p>

         
        </div>

      </div>
    </footer>
  );
}