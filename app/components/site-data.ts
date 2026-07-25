export const SITE = {
  name: "AF Tours & Travels",
  location: "Kadapa, India",
  phoneDisplay: "+91 83281 82055",
  phoneE164: "+918328182055",
  whatsappNumber: "918328182055",
  email: "aftravels365@gmail.com",
  address: "Kadapa, Andhra Pradesh, India",
} as const;

export const serviceMessages = {
  general: `Hello AF Tours & Travels,\nI would like to enquire about your travel services. Please guide me with the available options.\nThank you.`,
  uaeVisa: `Hello AF Tours & Travels,\nI am interested in your UAE Tourist Visa service. Please share the visa requirements, fees, and available visa options.\nThank you.`,
  flightBooking: `Hello AF Tours & Travels,\nI would like assistance with flight booking. Please help me find the best flight options and fares.\nThank you.`,
  umrah: `Hello AF Tours & Travels,\nI am interested in your Umrah Packages. Please share the available packages, pricing, and inclusions.\nThank you.`,
  internationalTours: `Hello AF Tours & Travels,\nI would like to know more about your International Tour Packages. Please share the available destinations, itinerary, pricing, and inclusions.\nThank you.`,
  domesticTours: `Hello AF Tours & Travels,\nI am interested in your Domestic Tour Packages. Please share the available destinations, itinerary, pricing, and inclusions.\nThank you.`,
  hotelBooking: `Hello AF Tours & Travels,\nI need assistance with hotel booking. Please share the available hotel options, pricing, and booking details.\nThank you.`,
  travelAssistance: `Hello AF Tours & Travels,\nI need travel assistance. Please let me know how you can assist me with my travel requirements.\nThank you.`,
  kuwaitVisa: `Hello AF Tours & Travels,\nI am interested in your Kuwait Visa Stamping service. Please share the visa requirements, fees, and available options.\nThank you.`,
  travelInsurance: `Hello AF Tours & Travels,\nI am interested in your Travel Insurance service. Please share the coverage options, pricing, and details.\nThank you.`,
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  const url = getWhatsAppUrl(message);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

// Deprecated alias helpers for backwards compatibility
export const GENERAL_WHATSAPP_MESSAGE = serviceMessages.general;
export function getWhatsAppLink(message?: string): string {
  return getWhatsAppUrl(message || serviceMessages.general);
}
export function getServiceWhatsAppLink(serviceName: string): string {
  if (serviceName.includes("UAE") || serviceName.includes("Visa") && !serviceName.includes("Kuwait")) return getWhatsAppUrl(serviceMessages.uaeVisa);
  if (serviceName.includes("Kuwait")) return getWhatsAppUrl(serviceMessages.kuwaitVisa);
  if (serviceName.includes("Flight")) return getWhatsAppUrl(serviceMessages.flightBooking);
  if (serviceName.includes("Umrah")) return getWhatsAppUrl(serviceMessages.umrah);
  if (serviceName.includes("International")) return getWhatsAppUrl(serviceMessages.internationalTours);
  if (serviceName.includes("Domestic")) return getWhatsAppUrl(serviceMessages.domesticTours);
  if (serviceName.includes("Hotel")) return getWhatsAppUrl(serviceMessages.hotelBooking);
  return getWhatsAppUrl(serviceMessages.travelAssistance);
}

export const LINKS = {
  callNow: `tel:${SITE.phoneE164}`,
  whatsapp: getWhatsAppUrl(serviceMessages.general),
  email: `mailto:${SITE.email}`,
  instagram: "https://www.instagram.com/the_kadapa_aftravels?igsh=NGU2YmFzMXVkMzNz",
  facebook: "https://www.facebook.com/share/185kPHDLfm/",
} as const;
