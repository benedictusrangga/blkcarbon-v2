import { motion } from "framer-motion";

const links = [
  {
    label: "Tokopedia",
    sublabel: "Beli produk di Tokopedia",
    href: "https://www.tokopedia.com/blkcarbon",
    icon: (
      <img
        src="/images/tokopedia.ico"
        alt="Tokopedia"
        className="w-6 h-6 object-contain"
      />
    ),
    bg: "bg-[#42b549]",
  },
  {
    label: "Shopee",
    sublabel: "Beli produk di Shopee",
    href: "https://shopee.co.id/blkcarbon",
    icon: (
      <img
        src="/images/Shopee.svg"
        alt="Shopee"
        className="w-8 h-8 object-contain"
      />
    ),
    bg: "bg-[#1a1a1a]",
  },
  {
    label: "WhatsApp",
    sublabel: "Chat langsung dengan kami",
    href: "https://wa.me/6281234567890",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    bg: "bg-[#25d366]",
  },
  {
    label: "Website",
    sublabel: "Kunjungi website resmi kami",
    href: "https://blkcarbon.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    bg: "bg-[#222222]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Bio() {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-start px-4 py-16">
      {/* Logo & Brand */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10"
      >
        <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-5 overflow-hidden bg-[#111]">
          <img
            src="/favicon.png"
            alt="BLKCARBON"
            className="w-14 h-14 object-contain"
          />
        </div>
        <h1
          className="text-white text-2xl font-bold tracking-widest uppercase"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          BLKCARBON
        </h1>
        <p className="text-white/40 text-xs tracking-[0.3em] uppercase mt-1">
          Premium Padel & Sports Gear
        </p>
        <div className="w-12 h-px bg-white/20 mt-5" />
      </motion.div>

      {/* Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-sm flex flex-col gap-3"
      >
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 bg-[#111111] border border-white/10 rounded-xl px-5 py-4 group transition-colors hover:border-white/25"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${link.bg}`}
            >
              {link.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold tracking-wide">
                {link.label}
              </p>
              <p className="text-white/40 text-xs mt-0.5">{link.sublabel}</p>
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-14 text-white/20 text-xs tracking-widest uppercase"
      >
        blkcarbon.com
      </motion.p>
    </div>
  );
}
