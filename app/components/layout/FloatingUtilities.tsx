"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconWhatsApp, IconPhone } from "../Icons";

export default function FloatingUtilities() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((totalScroll / windowHeight) * 100);

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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] bg-transparent pointer-events-none">
        <div 
          className="h-full bg-[#C9A227] transition-all duration-150 ease-out" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Utilities (Desktop bottom-right) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 flex-col items-center gap-3.5 hidden md:flex"
          >
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-xl bg-[#1B2A49] border border-[rgba(201,162,39,0.2)] flex items-center justify-center text-[#C9D2E3] hover:text-[#F7F7F5] hover:border-[#C9A227] transition-all shadow-lg focus:outline-none"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {/* WhatsApp Float */}
            <a
              href="https://wa.me/918328182055"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-13 h-13 rounded-xl bg-[#C9A227] flex items-center justify-center text-[#0C1528] shadow-lg shadow-[rgba(201,162,39,0.2)] transition-all hover:bg-[#D8B84A] cursor-pointer"
              aria-label="Contact on WhatsApp"
            >
              <IconWhatsApp className="w-6 h-6 text-[#0C1528]" />
              
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#1B2A49] border border-[rgba(201,162,39,0.2)] text-[10px] font-bold tracking-widest text-[#F7F7F5] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity uppercase pointer-events-none">
                Chat with us
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#1B2A49] border-t border-r border-[rgba(201,162,39,0.2)] rotate-45" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile Action Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-[#0C1528]/95 backdrop-blur-xl border-t border-[rgba(201,162,39,0.15)] px-4 py-3 flex gap-3 shadow-2xl"
          >
            <a
              href="tel:+918328182055"
              className="btn-secondary flex-1 flex items-center justify-center gap-2 py-3 text-xs"
            >
              <IconPhone className="w-4 h-4 text-[#C9A227]" />
              Call
            </a>
            <a
              href="https://wa.me/918328182055"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 flex items-center justify-center gap-2 py-3 text-xs cursor-pointer"
            >
              <IconWhatsApp className="w-4 h-4 text-[#0C1528]" />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
