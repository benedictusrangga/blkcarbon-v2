export interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  priceRange: string;
  images: string[];
  description: string;
  longDescription: string;
  specs: { label: string; value: string }[];
  shopeeUrl: string;
  tokopediaUrl: string;
  badge?: string;
}

// ── PADEL RACKETS ─────────────────────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    slug: 'carbonmatrix',
    name: 'Carbon Matrix',
    tagline: 'Precision, control, and confidence on every shot.',
    price: 'Rp 2.300.000',
    priceRange: 'Rp 2.300.000',
    images: [
      '/images/padelracket/carbonmatrix/1.png',
      '/images/padelracket/carbonmatrix/2.png',
      '/images/padelracket/carbonmatrix/3.png',
      '/images/padelracket/carbonmatrix/4.png',
      '/images/padelracket/carbonmatrix/5.png',
      '/images/padelracket/carbonmatrix/6.png',
      '/images/padelracket/carbonmatrix/7.png',
    ],
    description:
      'Designed for players who prioritize precision, control, and consistency on the court. Built with a 3K carbon face, the CarbonMatrix delivers a combination of durability, responsiveness, and smooth ball feel — ideal for intermediate players looking to elevate their game.',
    longDescription:
      'With its teardrop shape, the CarbonMatrix generates controlled power alongside high accuracy. The sandblasted surface pattern enhances ball grip for better spin and shot control. A mid-density EVA core provides a comfortable and balanced response, while the clean matte carbon finish reflects refined performance and modern sports engineering.',
    specs: [
      { label: 'Type',        value: 'Teardrop' },
      { label: 'Level',       value: 'Intermediate' },
      { label: 'Play Style',  value: 'Control' },
      { label: 'Surface',     value: 'Sandblasted Pattern' },
      { label: 'Face',        value: '3K Carbon' },
      { label: 'Finish',      value: 'Matte' },
      { label: 'Weight',      value: '350g (±10g)' },
      { label: 'Thickness',   value: '38mm' },
      { label: 'Dimensions',  value: '(455–460) × 260 × 38mm' },
      { label: 'EVA',         value: 'Mid' },
      { label: 'Balance',     value: '260mm (±10)' },
      { label: 'Grip',        value: 'White' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-CarbonMatrix-3K-Carbon-Padel-Racket-i.1416048184.46307171984',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-carbonmatrix-3k-carbon-padel-racket-1734612153517770422',
    badge: 'Best Seller',
  },
  {
    slug: 'carbonspectra',
    name: 'Carbon Spectra',
    tagline: 'Precision, power, and control without compromise.',
    price: 'Rp 2.500.000',
    priceRange: 'Rp 2.500.000',
    images: [
      '/images/padelracket/carbonspectra/1.png',
      '/images/padelracket/carbonspectra/2.png',
      '/images/padelracket/carbonspectra/3.png',
      '/images/padelracket/carbonspectra/4.png',
      '/images/padelracket/carbonspectra/5.png',
      '/images/padelracket/carbonspectra/6.png',
    ],
    description:
      'Engineered for professional players who demand a perfect balance of power, control, and responsiveness. Built with CarbonMasterT technology, the CarbonSpectra enhances structural integrity and energy transfer for more stable and explosive performance.',
    longDescription:
      'The diamond shape positions the sweet spot higher on the racket face, delivering more powerful attacking shots with precise control. A 12K carbon face provides the ideal balance between stiffness and elasticity. The 3D textured honeycomb surface pattern improves ball grip for better spin and accuracy, while the mid-density EVA core enables smooth transitions between defensive and offensive play.',
    specs: [
      { label: 'Type',        value: 'Diamond' },
      { label: 'Level',       value: 'Professional' },
      { label: 'Play Style',  value: 'Balanced' },
      { label: 'Surface',     value: '3D Textured Honeycomb Pattern' },
      { label: 'Face',        value: '12K Carbon' },
      { label: 'Finish',      value: 'Glossy' },
      { label: 'Weight',      value: '350g (±10g)' },
      { label: 'Thickness',   value: '38mm' },
      { label: 'Dimensions',  value: '(455–460) × 260 × 38mm' },
      { label: 'EVA',         value: 'Mid' },
      { label: 'Balance',     value: '260mm (±10)' },
      { label: 'Grip',        value: 'Black' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-CarbonSpectra-12K-Carbon-Padel-Racket-i.1416048184.44857172165',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-carbonspectra-12k-carbon-padel-racket-1734614415719171766',
    badge: 'New',
  },
  {
    slug: 'carbonforce',
    name: 'Carbon Force',
    tagline: 'Powered by CarbonMasterT — Play Beyond Limits.',
    price: 'Rp 2.800.000',
    priceRange: 'Rp 2.800.000',
    images: [
      '/images/padelracket/carbonforce/1.png',
      '/images/padelracket/carbonforce/2.png',
      '/images/padelracket/carbonforce/3.png',
      '/images/padelracket/carbonforce/4.png',
      '/images/padelracket/carbonforce/5.png',
      '/images/padelracket/carbonforce/6.png',
    ],
    description:
      'Engineered for players who dominate the court with aggressive power and high precision. Built using CarbonMasterT technology, the CarbonForce combines high-performance carbon construction with exceptional structural stability for explosive shots.',
    longDescription:
      'An 18K carbon face maximizes stiffness and energy transfer for more powerful smashes with a solid feel on every hit. The 3D Textured Steel Pattern surface enhances spin and ball grip. The hard EVA core delivers firm, responsive feedback — the choice of advanced and professional players seeking maximum power output, finished with a premium glossy carbon coating.',
    specs: [
      { label: 'Type',        value: 'Teardrop' },
      { label: 'Level',       value: 'Professional' },
      { label: 'Play Style',  value: 'Power' },
      { label: 'Surface',     value: '3D Textured Steel Pattern' },
      { label: 'Face',        value: '18K Carbon' },
      { label: 'Finish',      value: 'Glossy' },
      { label: 'Weight',      value: '350g (±10g)' },
      { label: 'Thickness',   value: '38mm' },
      { label: 'Dimensions',  value: '(455–460) × 260 × 38mm' },
      { label: 'EVA',         value: 'Hard' },
      { label: 'Balance',     value: '260mm (±10)' },
      { label: 'Grip',        value: 'Black' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-CarbonForce-18K-Carbon-Padel-Racket-i.1416048184.50557149080',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-carbonforce-18k-carbon-padel-racket-1734614460780086966',
    badge: 'Pro Choice',
  },
];

// ── BAGS ──────────────────────────────────────────────────────────────────────
export const BAGS: Product[] = [
  {
    slug: 'tour-bag',
    name: 'Tour Bag',
    tagline: 'Engineered for players. Designed for performance.',
    price: 'Rp 450.000',
    priceRange: 'Rp 450.000',
    images: [
      '/images/bags/tourbag/1.png',
      '/images/bags/tourbag/2.png',
      '/images/bags/tourbag/3.png',
      '/images/bags/tourbag/4.png',
      '/images/bags/tourbag/5.png',
      '/images/bags/tourbag/6.png',
    ],
    description:
      'Designed for players who demand both functionality and minimalist performance aesthetics. Built with a clean structured silhouette, the Tour Bag provides organized storage for rackets, clothing, and everyday essentials.',
    longDescription:
      'Constructed with a durable fabric exterior and polyester interior lining, this bag is built to withstand daily training sessions and match days. A dedicated racket compartment keeps your padel rackets protected, while side pockets allow quick access to your water bottle. Weighing only 0.7 kg, it stays comfortable to carry without sacrificing durability.',
    specs: [
      { label: 'Exterior Material', value: 'Fabric' },
      { label: 'Interior Material', value: 'Polyester' },
      { label: 'Weight',            value: '0.7 kg' },
      { label: 'Width',             value: '43 cm' },
      { label: 'Height',            value: '36 cm' },
      { label: 'Depth',             value: '18 cm' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-Tour-Bag-Padel-And-Tennis-Bag-i.1416048184.51207155757',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-padel-tour-bag-padel-and-tennis-1734614670211385014',
    
  },
  {
    slug: 'game-bag',
    name: 'Game Bag',
    tagline: 'Lightweight protection. Minimalist by design.',
    price: 'Rp 150.000',
    priceRange: 'Rp 150.000',
    images: [
      '/images/bags/gamebag/1.png',
      '/images/bags/gamebag/2.png',
      '/images/bags/gamebag/3.png',
      '/images/bags/gamebag/4.png',
    ],
    description:
      'A minimalist protective sleeve designed to keep your padel racket safe while on the move — lightweight, compact, and easy to carry anywhere.',
    longDescription:
      'Built for players who prioritize simplicity and portability, the Game Bag delivers reliable protection from scratches, dust, and minor impacts. A durable fabric exterior with a padded interior helps maintain your racket\'s condition. The streamlined design allows for quick storage and easy access — ideal for casual training sessions, quick matches, or as an extra protective layer inside a larger sports bag.',
    specs: [
      { label: 'Length',            value: '50 cm' },
      { label: 'Width',             value: '30 cm' },
      { label: 'Exterior Material', value: 'Fabric' },
      { label: 'Interior Material', value: 'Padded Interior' },
      { label: 'Capacity',          value: '1 Racket' },
      { label: 'Closure',           value: 'Quick Access Zipper' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-Game-Bag-Single-Padel-Racket-i.1416048184.57857149325',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-game-bag-single-padel-racket-1734614590774019766',
    
  },
];

// ── ACCESSORIES ───────────────────────────────────────────────────────────────
export const ACCESSORIES: Product[] = [
  {
    slug: 'pressurized-balls',
    name: 'Pressurized Balls',
    tagline: 'Engineered for consistent play.',
    price: 'Rp 80.000',
    priceRange: 'Rp 80.000',
    images: [
      '/images/ball/1.png',
      '/images/ball/2.png',
      '/images/ball/3.png',
    ],
    description:
      'Designed to deliver consistent bounce, durability, and control for both competitive matches and everyday training sessions. For players who demand reliability on the court.',
    longDescription:
      'High-visibility neon yellow felt construction improves ball visibility across various lighting conditions, while the precision-engineered core maintains stable pressure and consistent bounce throughout play. Packed in a protective tube, the balls stay in optimal condition and are ready for match day.',
    specs: [
      { label: 'Contents',  value: '3 balls per tube' },
      { label: 'Color',     value: 'Neon Yellow' },
      { label: 'Type',      value: 'Pressurized' },
      { label: 'Use',       value: 'Padel & Tennis' },
      { label: 'Packaging', value: 'Protective Tube' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-Pressurized-Padel-And-Tennis-Balls-i.1416048184.44129245504',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-pressurized-padel-and-tennis-balls-1734614911718033078',
    
  },
  {
    slug: 'dry-grip',
    name: 'Dry Performance Grip',
    tagline: 'Maximum grip. Maximum control. BLKCARBON.',
    price: 'Rp 80.000',
    priceRange: 'Rp 80.000',
    images: ['/images/accessories/whitegrip/1.png'],
    description:
      'Designed for players who demand maximum control and comfort, the BLKCARBON Dry Performance Grip delivers a clean, high-performance grip engineered for confident play in all conditions.',
    longDescription:
      'Featuring a dry, non-sticky surface texture, the grip provides excellent hand feel and control without becoming tacky or uncomfortable during long sessions. The material is optimized to maintain a secure hold even when your hands are sweaty, ensuring stability and precision on every shot. The lightweight construction also offers shock absorption and vibration damping, reducing hand fatigue and improving comfort over extended play. Finished with a minimalist BLKCARBON identity band, the grip reflects the brand\'s clean performance aesthetic.',
    specs: [
      { label: 'Contents', value: '3 pcs' },
      { label: 'Use',      value: 'Racket / Handlebar' },
      { label: 'Surface',  value: 'Dry High-Tack' },
      { label: 'Feature',  value: 'Lightweight and durable construction' },
      { label: 'Design',   value: 'Minimalist BLKCARBON' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-Dry-Performance-Grip-For-Racket-Handlebar-i.1416048184.47407172751',
    tokopediaUrl: 'https://tokopedia.com/blkcarbon/blkcarbon-dry-performance-grip-for-racket-handlebar-1734600961890879158',
    
  },
  {
    slug: 'sticky-grip',
    name: 'Sticky Performance Grip',
    tagline: 'Maximum grip. Maximum control. BLKCARBON.',
    price: 'Rp 80.000',
    priceRange: 'Rp 80.000',
    images: ['/images/accessories/blackgrip/1.png'],
    description:
      'Designed for maximum grip and full confidence, the BLKCARBON Sticky Performance Grip delivers a secure, tacky feel — keeping your hand locked in even during the most intense play.',
    longDescription:
      'The high-tack sticky surface enhances grip and stability, ideal for aggressive play and situations that demand critical control. The material maintains strong traction even with sweaty hands. With lightweight cushioning and vibration absorption, this grip helps reduce hand fatigue while improving comfort. Comes in a pack of 3.',
    specs: [
      { label: 'Contents', value: '3 pcs' },
      { label: 'Use',      value: 'Racket / Handlebar' },
      { label: 'Surface',  value: 'Sticky High-Tack' },
      { label: 'Feature',  value: 'Shock Absorbing' },
      { label: 'Design',   value: 'Minimalist BLKCARBON' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-Sticky-Performance-Grip-For-Racket-Handlebar-i.1416048184.44507186242',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-sticky-performance-grip-for-racket-handlebar-1734601163559241398',
    
  },
];

// ── BIKES ─────────────────────────────────────────────────────────────────────
export const BIKES: Product[] = [
  {
    slug: 'phantom-x1',
    name: 'Phantom X-1 (Frame Only)',
    tagline: 'Speed, efficiency, and modern performance design.',
    price: 'Rp 12.000.000',
    priceRange: 'Rp 12.000.000',
    images: [
      '/images/bikes/frameonly/1.png',
      '/images/bikes/frameonly/2.png',
      '/images/bikes/frameonly/3.png',
    ],
    description:
      'Engineered for riders who demand uncompromising performance and a clean modern racing aesthetic. Built from high-grade T800 carbon fiber, this frame delivers exceptional stiffness, lightweight efficiency, and precise power transfer.',
    longDescription:
      'Aero-optimized tube shaping reduces aerodynamic drag while maintaining structural strength and responsive handling. Monocoque carbon construction enhances rigidity at critical areas such as the bottom bracket and head tube. Internal cable routing provides a streamlined appearance while protecting cables. With race-optimized geometry and BLKCARBON\'s stealth matte black finish, the Phantom X-1 is the ideal foundation for a high-performance road bike build.',
    specs: [
      { label: 'Material',      value: 'T800 Carbon Fiber' },
      { label: 'Construction',  value: 'Full Monocoque Carbon' },
      { label: 'Aerodynamics',  value: 'Aero-Optimized Tube Shaping' },
      { label: 'Cable Routing', value: 'Internal / Integrated' },
      { label: 'Geometry',      value: 'Race-Optimized' },
      { label: 'Finish',        value: 'Stealth Matte Black' },
      { label: 'Groupset',      value: 'Shimano Ultegra R8000' },
      { label: 'Includes',      value: 'Frame Only' },
    ],
    shopeeUrl: 'https://shopee.co.id/blkcarbon',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon',
    
  },
  {
    slug: 'ghostspeed-50',
    name: 'Ghostspeed 50',
    tagline: 'Built for speed. Designed for control. Engineered by BLKCARBON.',
    price: 'Rp 7.000.000',
    priceRange: 'Rp 7.000.000',
    images: [
      '/images/bikes/ban/1.png',
      '/images/bikes/ban/2.png',
    ],
    description:
      'Engineered for riders who demand pure speed and precision. Built from high-grade T800 carbon fiber, the Ghostspeed 50 delivers an exceptional balance of stiffness, strength, and lightweight performance.',
    longDescription:
      'The 50mm aerodynamic rim profile cuts through the wind efficiently, delivering superior momentum on straight roads and stability during high-speed efforts. Premium T800 carbon construction enhances power transfer and structural durability while keeping weight low. The result is a responsive ride feel with instant acceleration and confident handling. The minimalist matte black aesthetic with clean BLKCARBON identity reflects a performance-first design philosophy.',
    specs: [
      { label: 'Material',    value: 'T800 Carbon Fiber' },
      { label: 'Rim Depth',   value: '50mm' },
      { label: 'Diameter',    value: '700C' },
      { label: 'Includes',    value: '1 Set (2 pcs)' },
      { label: 'Hub System',  value: 'Precision Hub' },
      { label: 'Spoke Layout',value: 'High-Tension' },
      { label: 'Finish',      value: 'Stealth Matte Black' },
      { label: 'Use',         value: 'Road Bike' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-GHOSTSPEED-50-Roadbike-Carbon-Wheelset-Carbon-700C-50mm-1Set-(2pcs)-i.1416048184.55607161093',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/ghostspeed-50-roadbike-carbon-wheelset-carbon-700c-50mm-blkcarbon-1734600257980892854',
    
  },
  {
    slug: 'phantom-x1-complete',
    name: 'Phantom X-1 Complete',
    tagline: 'Engineered with T800 carbon. Built for pure speed.',
    price: 'Rp 35.000.000',
    priceRange: 'Rp 35.000.000',
    images: [
      '/images/bikes/sepeda/2.png',
      '/images/bikes/sepeda/1.png',
      '/images/bikes/sepeda/3.png',
      '/images/bikes/sepeda/4.png',
      '/images/bikes/sepeda/5.png',
      '/images/bikes/sepeda/6.png',
      '/images/bikes/sepeda/7.png',
      '/images/bikes/sepeda/8.png',
    ],
    description:
      'A high-performance road bike engineered for riders who demand speed, efficiency, and precision. Built around a T800 full carbon monocoque frame with GHOSTSPEED 50 wheelset — every pedal stroke translates directly into speed.',
    longDescription:
      'T800 carbon fiber construction delivers the ideal balance between strength and weight — responsive under acceleration and stable at high speeds. Equipped with GHOSTSPEED 50 deep-section carbon wheelset for optimal aerodynamic performance on straights and descents. An integrated cockpit with internal cable routing enhances aerodynamics while maintaining BLKCARBON\'s minimalist aesthetic. Full stealth matte finish from end to end.',
    specs: [
      { label: 'Frame Material', value: 'T800 Full Carbon Monocoque' },
      { label: 'Fork',           value: 'Full Carbon Racing Fork' },
      { label: 'Wheelset',       value: 'GHOSTSPEED 50 Carbon' },
      { label: 'Rim Depth',      value: '50mm Aero' },
      { label: 'Diameter',       value: '700C' },
      { label: 'Geometry',       value: 'Aerodynamic Race Geometry' },
      { label: 'Cable Routing',  value: 'Internal / Integrated' },
      { label: 'Cockpit',        value: 'Integrated' },
      { label: 'Finish',         value: 'Stealth Matte Black' },
      { label: 'Includes',       value: 'Complete Bike' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-Phantom-X-1-%E2%80%94-T800-Carbon-Road-Bike-i.1416048184.43979240771',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-phantom-x-1-t800-carbon-road-bike-1734600902854543030-1734672586171647670',
    
  },
];

// ── APPAREL ───────────────────────────────────────────────────────────────────
export const APPAREL: Product[] = [
  {
    slug: 'performance-zip-tee',
    name: 'Performance Zip Tee',
    tagline: 'Clean performance. Built to move. BLKCARBON.',
    price: 'Rp 450.000',
    priceRange: 'Rp 450.000',
    images: [
      '/images/apparel/performanceziptee/1.png',
      '/images/apparel/performanceziptee/2.png',
      '/images/apparel/performanceziptee/3.png',
      '/images/apparel/performanceziptee/4.png',
      '/images/apparel/performanceziptee/5.png',
      '/images/apparel/performanceziptee/6.png',
      '/images/apparel/performanceziptee/7.png',
    ],
    description:
      'Built for movement and engineered for comfort, the BLKCARBON Performance Zip Tee delivers a clean technical design for athletes who demand both function and style.',
    longDescription:
      'Made from lightweight performance fabric with superior moisture-wicking and stretch capabilities — keeping you cool and comfortable during intense training, long rides, or daily sessions. The quarter-zip collar allows adjustable ventilation. A minimal BLKCARBON logo on the chest and wordmark on the back reflect the brand\'s performance identity. The athletic fit moves naturally with your body.',
    specs: [
      { label: 'Material',  value: 'Lightweight Performance Fabric' },
      { label: 'Technology',value: 'Moisture-Wicking & Quick-Dry' },
      { label: 'Collar',    value: 'Quarter-Zip' },
      { label: 'Fit',       value: 'Athletic Fit' },
      { label: 'Use',       value: 'Cycling, Training, Running' },
      { label: 'Detail',    value: 'BLKCARBON Chest Logo & Back Wordmark' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-Performance-Zip-Tee-For-All-Sports-i.1416048184.42729236563',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-performance-zip-tee-for-all-sports-1734600804703307446',
    
  },
  {
    slug: 'performance-black-shirt',
    name: 'Performance Black Shirt',
    tagline: 'Performance driven. Minimal by design. BLKCARBON.',
    price: 'Rp 450.000',
    priceRange: 'Rp 450.000',
    images: [
      '/images/apparel/performanceblackshirt/1.png',
      '/images/apparel/performanceblackshirt/2.png',
      '/images/apparel/performanceblackshirt/3.png',
      '/images/apparel/performanceblackshirt/4.png',
      '/images/apparel/performanceblackshirt/5.png',
    ],
    description:
      'Designed for riders and athletes who value clean performance and understated style. The BLKCARBON Performance Shirt combines modern athletic function with a refined everyday look.',
    longDescription:
      'Made from lightweight, breathable performance fabric, this shirt offers excellent airflow, moisture management, and stretch — keeping you comfortable while commuting, traveling, or recovering after a long ride. The athletic tailored cut delivers a sharp silhouette without restricting movement. Minimal branding with a BLKCARBON icon on the chest and a subtle wordmark at the back collar creates an identity that balances performance with precision.',
    specs: [
      { label: 'Material',  value: 'Lightweight Performance Fabric' },
      { label: 'Technology',value: 'Moisture-Wicking & Quick-Dry' },
      { label: 'Fit',       value: 'Athletic Tailored Fit' },
      { label: 'Color',     value: 'Black' },
      { label: 'Use',       value: 'Sport & Casual' },
      { label: 'Detail',    value: 'BLKCARBON Chest Icon & Back Collar Wordmark' },
    ],
    shopeeUrl: 'https://shopee.co.id/BLKCARBON-Performance-Black-Shirt-For-All-Sports-i.1416048184.52957165095',
    tokopediaUrl: 'https://www.tokopedia.com/blkcarbon/blkcarbon-performance-black-shirt-for-all-sports-1734600588114101942',
    
  },
];

// ── LOOKUP ────────────────────────────────────────────────────────────────────
export function getProductBySlug(slug: string): Product | undefined {
  return (
    PRODUCTS.find((p) => p.slug === slug) ??
    BAGS.find((p) => p.slug === slug) ??
    ACCESSORIES.find((p) => p.slug === slug) ??
    BIKES.find((p) => p.slug === slug) ??
    APPAREL.find((p) => p.slug === slug)
  );
}

export function getAllProducts(): Product[] {
  return [...PRODUCTS, ...BAGS, ...ACCESSORIES, ...BIKES, ...APPAREL];
}