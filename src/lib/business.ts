export const business = {
  name: "Ruby Jewellers",
  tagline: "Because It's Special",
  address: {
    street: "Main Bazar, Block 8",
    city: "Chichawatni",
    postalCode: "57200",
    country: "Pakistan",
    plusCode: "GMJQ+2X Chichawatni",
  },
  phones: [
    { label: "Primary", number: "+923222221258", display: "+92 322 2221258" },
    { label: "Secondary", number: "+923115877687", display: "+92 311 5877687" },
  ],
  whatsapp: "+923115877687",
  rating: 5.0,
  reviewCount: 18,
  mapEmbed:
    "https://www.google.com/maps?q=Ruby+Jewellers+Main+Bazar+Chichawatni&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Ruby+Jewellers+Main+Bazar+Chichawatni",
} as const;

export const waLink = (msg = "Hello Ruby Jewellers, I'd like to inquire about your jewellery.") =>
  `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;

export const telLink = (n: string) => `tel:${n.replace(/[^0-9+]/g, "")}`;
