"use client";

import Image from "next/image";
import * as React from "react";
import { SITE } from "../../lib/site-data";
import { IconPhone, IconWhatsApp } from "../Icons";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "About", href: "#founder" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { scrollY } = useScroll();
  
  // Transition background from transparent to glass on scroll
  const background = useTransform(
    scrollY,
    [0, 50],
    ["rgba(5, 5, 5, 0)", "rgba(15, 17, 21, 0.95)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(16px)"]
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.08)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            current = `#${section}`;
            break;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(href);
    }
  };

  return (
    <motion.header 
      style={{ background, backdropFilter: backdropBlur, borderBottom }}
      className="fixed top-0 z-50 w-full transition-all duration-300"
    >
      <div className="container flex h-20 sm:h-24 items-center justify-between transition-all duration-300">
        <a
          href="#home"
          className="flex items-center gap-3 rounded-xl focus:outline-none group"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span className="relative h-11 w-11 overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 group-hover:ring-white/20">
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              fill
              sizes="44px"
              className="object-contain p-2"
              priority
            />
          </span>
          <span className="hidden text-[13px] font-bold tracking-[0.2em] text-white sm:inline uppercase transition-colors group-hover:text-[#d4af37]">
            {SITE.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                activeSection === item.href ? "text-[#d4af37]" : "text-[#a9b0b8] hover:text-white"
              }`}
            >
              {item.label}
              {activeSection === item.href && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#d4af37] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Direct Call & WhatsApp Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+918328182055"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[11px] font-bold tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 uppercase"
          >
            <IconPhone className="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#d4af37]" />
            Call
          </a>
          <a
            href="https://wa.me/918328182055"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-[11px] font-bold tracking-[0.15em] text-[#050505] shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] uppercase cursor-pointer"
          >
            <IconWhatsApp className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 md:hidden focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-[#d4af37]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#0F1115]/98 backdrop-blur-2xl border-b border-white/10 md:hidden shadow-2xl"
          >
            <div className="container py-6 px-6">
              <nav className="flex flex-col gap-5">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`py-2 text-sm font-bold tracking-[0.2em] uppercase transition-colors border-b border-white/5 ${
                      activeSection === item.href ? "text-[#d4af37]" : "text-[#a9b0b8] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 flex flex-col gap-3 pb-2">
                <a
                  href="tel:+918328182055"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-xs font-bold tracking-[0.15em] text-white transition-all uppercase hover:bg-white/10"
                >
                  <IconPhone className="h-4 w-4 text-[#d4af37]" />
                  Call (+91 83281 82055)
                </a>
                <a
                  href="https://wa.me/918328182055"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-xs font-bold tracking-[0.15em] text-[#050505] transition-all uppercase shadow-[0_0_20px_rgba(37,211,102,0.3)] cursor-pointer"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  WhatsApp Direct
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
