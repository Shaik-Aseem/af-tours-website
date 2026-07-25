"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconWhatsApp, IconPhone } from "../Icons";
import { LINKS, serviceMessages, getWhatsAppUrl, openWhatsApp } from "../../lib/site-data";

export default function FloatingUtilities() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress for the top bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);

      // Show floating buttons after scrolling down 300px
      if (totalScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll Progress Bar at the very top */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-transparent pointer-events-none">
        <div 
          className="h-full bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Buttons Container (Desktop bottom-right) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4 hidden md:flex"
          >
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-[#0F1115] border border-white/10 flex items-center justify-center text-white/50 hover:text-[#d4af37] hover:border-[#d4af37]/30 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] focus:outline-none"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* WhatsApp Float */}
            <a
              href={getWhatsAppUrl(serviceMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp(serviceMessages.general);
              }}
              className="relative group w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/20 transition-all hover:scale-110 hover:shadow-[#25D366]/40 cursor-pointer"
              aria-label="Contact on WhatsApp"
            >
              <IconWhatsApp className="w-7 h-7" />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#0F1115] border border-white/10 text-[10px] font-bold tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase pointer-events-none">
                Chat with us
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#0F1115] border-t border-r border-white/10 rotate-45" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile Action Bar (Visible only on small screens) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-[#0F1115]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex gap-3"
          >
            <a
              href={LINKS.callNow}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3 text-[11px] font-bold tracking-widest text-white uppercase"
            >
              <IconPhone className="w-4 h-4 text-[#d4af37]" />
              Call
            </a>
            <a
              href={getWhatsAppUrl(serviceMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp(serviceMessages.general);
              }}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-[11px] font-bold tracking-widest text-[#050505] uppercase shadow-[0_0_15px_rgba(37,211,102,0.3)] cursor-pointer"
            >
              <IconWhatsApp className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
