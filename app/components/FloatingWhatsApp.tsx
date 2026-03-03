import { LINKS } from "./site-data";
import { IconWhatsApp } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918328182055"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-18px_rgba(37,211,102,0.9)] ring-1 ring-white/10 transition-transform duration-300 hover:scale-110 whatsapp-pulse focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}

