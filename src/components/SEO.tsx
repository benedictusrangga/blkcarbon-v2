import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product';
  product?: {
    name: string;
    price: string;
    availability?: string;
    brand?: string;
  };
}

const BASE_URL = 'https://www.blkcarbon.co';
const DEFAULT_IMAGE = `${BASE_URL}/images/blkcarbon-icon.png`;

export default function SEO({ title, description, image, url, type = 'website', product }: SEOProps) {
  const fullTitle = title.includes('BLKCARBON') ? title : `${title} | BLKCARBON`;
  const fullImage = image ? `${BASE_URL}${image}` : DEFAULT_IMAGE;
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  useEffect(() => {
    document.title = fullTitle;
    setMeta('description', description);

    // Open Graph
    setOG('title', fullTitle);
    setOG('description', description);
    setOG('image', fullImage);
    setOG('url', fullUrl);
    setOG('type', type === 'product' ? 'product' : 'website');
    setOG('site_name', 'BLKCARBON');

    // Twitter Card
    setTwitter('card', 'summary_large_image');
    setTwitter('title', fullTitle);
    setTwitter('description', description);
    setTwitter('image', fullImage);

    // Canonical
    setCanonical(fullUrl);

    // Schema.org
    if (type === 'product' && product) {
      setSchema({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description,
        image: fullImage,
        brand: { '@type': 'Brand', name: product.brand ?? 'BLKCARBON' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'IDR',
          price: product.price.replace(/[^0-9]/g, ''),
          availability: 'https://schema.org/InStock',
          url: fullUrl,
        },
      });
    } else {
      setSchema({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'BLKCARBON',
        url: BASE_URL,
        logo: DEFAULT_IMAGE,
        sameAs: ['https://www.instagram.com/blkcarbon.co/'],
      });
    }
  }, [fullTitle, description, fullImage, fullUrl, type, product]);

  return null;
}

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
  el.content = content;
}

function setOG(property: string, content: string) {
  let el = document.querySelector(`meta[property="og:${property}"]`) as HTMLMetaElement;
  if (!el) { el = document.createElement('meta'); el.setAttribute('property', `og:${property}`); document.head.appendChild(el); }
  el.content = content;
}

function setTwitter(name: string, content: string) {
  let el = document.querySelector(`meta[name="twitter:${name}"]`) as HTMLMetaElement;
  if (!el) { el = document.createElement('meta'); el.name = `twitter:${name}`; document.head.appendChild(el); }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); }
  el.href = href;
}

function setSchema(data: object) {
  let el = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
  if (!el) { el = document.createElement('script'); el.type = 'application/ld+json'; document.head.appendChild(el); }
  el.textContent = JSON.stringify(data);
}
