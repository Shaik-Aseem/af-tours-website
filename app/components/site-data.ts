export const SITE = {
  name: "AF Tours & Travels",
  location: "Kadapa, India",
  phoneDisplay: "+91 83281 82055",
  phoneE164: "+918328182055",
  whatsappNumber: "918328182055",
  email: "aftravels365@gmail.com",
  address: "Kadapa, Andhra Pradesh, India",
} as const;

const WHATSAPP_TEXT =
  "Hi%20I%20am%20interested%20in%20your%20travel%20services";

export const LINKS = {
  callNow: `tel:${SITE.phoneE164}`,
  whatsapp: `https://wa.me/${SITE.whatsappNumber}?text=${WHATSAPP_TEXT}`,
  email: `mailto:${SITE.email}`,
} as const;

