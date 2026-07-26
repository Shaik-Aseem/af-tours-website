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
  
  const background = useTransform(
    scrollY,
    [0, 50],
    ["rgba(12, 21, 40, 0)", "rgba(12, 21, 40, 0.95)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(16px)"]
  );
  
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(201, 162, 39, 0)", "1px solid rgba(201, 162, 39, 0.12)"]
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
      const headerOffset = 84;
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
      className="fixed top-0 z-50 w-full transition-all duration-200"
    >
      <div className="container flex h-20 sm:h-24 items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-3.5 focus:outline-none group"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span className="relative h-11 w-11 overflow-hidden rounded-xl bg-[#14213D] ring-1 ring-[rgba(201,162,39,0.2)] flex items-center justify-center transition-all duration-300 group-hover:ring-[#C9A227]/50">
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              fill
              sizes="44px"
              className="object-contain p-2"
              priority
            />
          </span>
          <span className="hidden text-[13px] font-bold tracking-[0.2em] text-[#F7F7F5] sm:inline uppercase transition-colors group-hover:text-[#C9A227]">
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
              className={`relative text-[11px] font-bold tracking-[0.18em] uppercase transition-colors duration-200 ${
                activeSection === item.href ? "text-[#C9A227]" : "text-[#C9D2E3] hover:text-[#F7F7F5]"
              }`}
            >
              {item.label}
              {activeSection === item.href && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#C9A227] rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 35 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Direct Actions */}
        <div className="hidden items-center gap-3.5 md:flex">
          <a
            href="tel:+918328182055"
            className="group inline-flex items-center gap-2 rounded-xl border border-[rgba(201,162,39,0.2)] bg-[#14213D] px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] text-[#F7F7F5] transition-all duration-200 hover:border-[#C9A227] hover:bg-[#1B2A49] uppercase"
          >
            <IconPhone className="h-4 w-4 text-[#C9A227] transition-colors duration-200" />
            Call
          </a>
          <a
            href="https://wa.me/918328182055"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] text-[#0C1528] transition-all duration-200 hover:bg-[#D8B84A] shadow-[0_4px_20px_rgba(201,162,39,0.15)] uppercase cursor-pointer"
          >
            <IconWhatsApp className="h-4 w-4 text-[#0C1528]" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-[rgba(201,162,39,0.2)] bg-[#14213D] p-3 text-[#F7F7F5] transition-all duration-200 hover:border-[#C9A227] md:hidden focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-[#C9A227]"
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#0C1528]/98 backdrop-blur-2xl border-b border-[rgba(201,162,39,0.15)] md:hidden shadow-2xl"
          >
            <div className="container py-6 px-6">
              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`py-2.5 text-xs font-bold tracking-[0.2em] uppercase transition-colors border-b border-[rgba(201,162,39,0.08)] ${
                      activeSection === item.href ? "text-[#C9A227]" : "text-[#C9D2E3] hover:text-[#F7F7F5]"
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
                  className="flex items-center justify-center gap-3 rounded-xl border border-[rgba(201,162,39,0.2)] bg-[#14213D] px-6 py-3.5 text-xs font-bold tracking-[0.15em] text-[#F7F7F5] transition-all uppercase hover:bg-[#1B2A49]"
                >
                  <IconPhone className="h-4 w-4 text-[#C9A227]" />
                  Call (+91 83281 82055)
                </a>
                <a
                  href="https://wa.me/918328182055"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-xl bg-[#C9A227] px-6 py-3.5 text-xs font-bold tracking-[0.15em] text-[#0C1528] transition-all uppercase shadow-[0_4px_20px_rgba(201,162,39,0.2)] cursor-pointer hover:bg-[#D8B84A]"
                >
                  <IconWhatsApp className="h-4 w-4 text-[#0C1528]" />
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
