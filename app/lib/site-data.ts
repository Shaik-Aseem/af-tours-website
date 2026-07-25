export const SITE = {
  name: "AF Tours & Travels",
  location: "Kadapa, India",
  phoneDisplay: "+91 83281 82055",
  phoneE164: "+918328182055",
  whatsappNumber: "918328182055",
  email: "aftravels365@gmail.com",
  address: "Kadapa, Andhra Pradesh, India",
} as const;

export const LINKS = {
  callNow: `tel:${SITE.phoneE164}`,
  whatsapp: `https://wa.me/${SITE.whatsappNumber}`,
  email: `mailto:${SITE.email}`,
  instagram: "https://www.instagram.com/the_kadapa_aftravels?igsh=NGU2YmFzMXVkMzNz",
  facebook: "https://www.facebook.com/share/185kPHDLfm/",
} as const;
