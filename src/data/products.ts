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

export const PRODUCTS: Product[] = [
  {
    slug: 'carbonspectra-pro',
    name: 'CarbonSpectra Pro',
    tagline: 'Pure power. Refined precision.',
    price: 'Rp 3.499.000',
    priceRange: 'Rp 3.499.000 – Rp 3.799.000',
    images: [
      '/images/product-carbonspectra.png',
      '/images/product-carbonspectra-2.png',
      '/images/product-carbonspectra-3.png',
    ],
    description: 'Dibangun dari serat karbon aerospace-grade, CarbonSpectra Pro menghadirkan keseimbangan sempurna antara kekuatan dan kontrol. Ideal untuk pemain kompetitif yang menginginkan performa tanpa kompromi.',
    longDescription: 'CarbonSpectra Pro menggunakan teknologi Carbon Matrix terdepan yang menggabungkan lapisan serat karbon 3K dan 12K untuk menghasilkan frame yang ringan namun sangat kaku. Sweet spot yang diperluas memastikan kontrol maksimal di setiap pukulan, sementara sistem absorpsi getaran EVA Foam Pro menjaga kenyamanan selama pertandingan panjang.',
    specs: [
      { label: 'Berat', value: '355–375g' },
      { label: 'Keseimbangan', value: 'Medium-High (26.5cm)' },
      { label: 'Ketebalan', value: '38mm' },
      { label: 'Material Frame', value: 'Carbon Fiber 3K/12K' },
      { label: 'Core', value: 'EVA Foam Pro' },
      { label: 'Permukaan', value: 'Carbon Fiber Rough' },
      { label: 'Level', value: 'Competition / Advanced' },
      { label: 'Bentuk', value: 'Round' },
    ],
    shopeeUrl: 'https://shopee.co.id/search?keyword=blkcarbon+carbonspectra',
    tokopediaUrl: 'https://www.tokopedia.com/search?st=product&q=blkcarbon+carbonspectra',
    badge: 'Best Seller',
  },
  {
    slug: 'carbonforce-elite',
    name: 'CarbonForce Elite',
    tagline: 'Engineered for absolute dominance.',
    price: 'Rp 3.899.000',
    priceRange: 'Rp 3.899.000 – Rp 4.199.000',
    images: [
      '/images/product-carbonforce.png',
      '/images/product-carbonforce-2.png',
      '/images/product-carbonforce-3.png',
    ],
    description: 'CarbonForce Elite dirancang khusus untuk pemain agresif yang mengutamakan power di setiap pukulan. Frame diamond shape memberikan sweet spot di area paling kuat untuk smash maksimal.',
    longDescription: 'Dengan geometri diamond yang teroptimasi, CarbonForce Elite mendistribusikan massa ke bagian atas frame untuk menghasilkan power pukulan tertinggi di kelasnya. Lapisan Nano Carbon Fiber eksklusif BLKCARBON memberikan kekakuan ekstrem tanpa menambah berat, sementara grip anti-slip premium memastikan kontrol penuh bahkan saat berkeringat.',
    specs: [
      { label: 'Berat', value: '365–385g' },
      { label: 'Keseimbangan', value: 'High (27.5cm)' },
      { label: 'Ketebalan', value: '40mm' },
      { label: 'Material Frame', value: 'Nano Carbon Fiber' },
      { label: 'Core', value: 'HR3 Foam' },
      { label: 'Permukaan', value: 'Carbon Fiber Textured' },
      { label: 'Level', value: 'Elite / Professional' },
      { label: 'Bentuk', value: 'Diamond' },
    ],
    shopeeUrl: 'https://shopee.co.id/search?keyword=blkcarbon+carbonforce',
    tokopediaUrl: 'https://www.tokopedia.com/search?st=product&q=blkcarbon+carbonforce',
    badge: 'New',
  },
  {
    slug: 'carbonmatrix-tour',
    name: 'CarbonMatrix Tour',
    tagline: 'The pinnacle of carbon performance.',
    price: 'Rp 4.499.000',
    priceRange: 'Rp 4.499.000 – Rp 4.999.000',
    images: [
      '/images/product-carbonmatrix.png',
      '/images/product-carbonmatrix-2.png',
      '/images/product-carbonmatrix-3.png',
    ],
    description: 'Puncak inovasi BLKCARBON. CarbonMatrix Tour adalah raket yang digunakan para atlet profesional di turnamen internasional — teknologi Carbon Matrix terlengkap dalam satu raket.',
    longDescription: 'CarbonMatrix Tour menggabungkan semua inovasi terbaik BLKCARBON: frame Quad-Layer Carbon dengan weave eksklusif hexagonal yang mengoptimalkan jalur distribusi energi, core Hybrid EVA-HR4 yang menyeimbangkan power dan kontrol sempurna, serta finish matte black premium yang tahan goresan. Setiap unit diproduksi secara manual dan melewati 47 titik quality control sebelum dikemas.',
    specs: [
      { label: 'Berat', value: '360–380g' },
      { label: 'Keseimbangan', value: 'Medium (26cm)' },
      { label: 'Ketebalan', value: '38mm' },
      { label: 'Material Frame', value: 'Quad-Layer Carbon Fiber' },
      { label: 'Core', value: 'Hybrid EVA-HR4' },
      { label: 'Permukaan', value: 'Matte Carbon Fiber' },
      { label: 'Level', value: 'Tournament / Pro' },
      { label: 'Bentuk', value: 'Teardrop' },
    ],
    shopeeUrl: 'https://shopee.co.id/search?keyword=blkcarbon+carbonmatrix',
    tokopediaUrl: 'https://www.tokopedia.com/search?st=product&q=blkcarbon+carbonmatrix',
    badge: 'Pro Choice',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
