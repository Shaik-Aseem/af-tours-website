import { LINKS } from "./site-data";
import { IconWhatsApp } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-18px_rgba(37,211,102,0.9)] ring-1 ring-white/10 transition hover:scale-105 hover:shadow-[0_18px_45px_-20px_rgba(37,211,102,1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}

