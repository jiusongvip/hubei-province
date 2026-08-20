import type { Faq } from "../data/faq";
import type { Destination } from "../data/destinations";

export function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Approximate centroid coordinates for each destination, used for GeoCoordinates schema.
const geo: Record<string, { lat: number; lng: number }> = {
  wuhan: { lat: 30.5928, lng: 114.3055 },
  "wudang-mountains": { lat: 32.3999, lng: 111.0042 },
  shennongjia: { lat: 31.7442, lng: 110.6751 },
  "yichang-three-gorges": { lat: 30.7085, lng: 111.2865 },
  "enshi-grand-canyon": { lat: 30.1786, lng: 109.483 },
  "jingzhou-ancient-city": { lat: 30.335, lng: 112.2397 },
  xiangyang: { lat: 32.0085, lng: 112.1224 },
  chibi: { lat: 29.7237, lng: 113.8834 },
};

export function attractionSchema(destinations: Destination[]) {
  return destinations.map((d) => ({
    "@type": "TouristAttraction",
    name: d.name,
    description: d.description,
    image: d.image,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Hubei Province",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo[d.slug]?.lat,
      longitude: geo[d.slug]?.lng,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Hubei",
      addressCountry: "CN",
    },
  }));
}
