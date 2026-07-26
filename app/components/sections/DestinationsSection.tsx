"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getServiceWhatsAppLink } from "../../lib/site-data";
import { IconWhatsApp } from "../Icons";

const DESTINATIONS = [
  {
    title: "Dubai",
    subtitle: "United Arab Emirates",
    image: "/dubai.jpg", 
    tag: "Tourist Visas",
  },
  {
    title: "Mecca",
    subtitle: "Saudi Arabia",
    image: "/mecca.jpg",
    tag: "Premium Umrah",
  },
  {
    title: "Kuwait City",
    subtitle: "Kuwait",
    image: "/kuwait.jpg",
    tag: "Visa Stamping",
  },
  {
    title: "Kuala Lumpur",
    subtitle: "Malaysia",
    image: "/departure.jpg", 
    tag: "Holiday Packages",
  },
] as const;

export default function DestinationsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev! + 1) % DESTINATIONS.length);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev! - 1 + DESTINATIONS.length) % DESTINATIONS.length);
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || lightboxIndex === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      setLightboxIndex((prev) => (prev! + 1) % DESTINATIONS.length);
    }
    if (distance < -swipeThreshold) {
      setLightboxIndex((prev) => (prev! - 1 + DESTINATIONS.length) % DESTINATIONS.length);
    }
    setTouchStart(null);
  };

  return (
    <section id="destinations" className="relative py-24 sm:py-32 bg-[#0C1528]">
      <div className="container relative z-10 mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-semibold tracking-[0.2em] text-[#C9A227] uppercase mb-3"
            >
              Featured Locations
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-medium tracking-tight text-[#F7F7F5] sm:text-4xl md:text-5xl"
            >
              Popular Destinations
            </motion.h2>
          </div>
          
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#C9D2E3] hover:text-[#C9A227] transition-colors border-b border-transparent hover:border-[#C9A227] pb-1 uppercase"
          >
            <span>View All Packages</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </motion.a>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map((dest, idx) => (
            <motion.article
              key={dest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#1B2A49] cursor-pointer border border-[rgba(201,162,39,0.12)] shadow-xl transition-all duration-300 hover:border-[#C9A227]/40"
            >
              <Image
                src={dest.image}
                alt={`${dest.title}, ${dest.subtitle}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1528] via-[#0C1528]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full transition-transform duration-300 ease-out group-hover:-translate-y-1">
                <div className="mb-3 inline-flex self-start rounded-xl border border-[rgba(201,162,39,0.3)] bg-[#0C1528]/80 backdrop-blur-md px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-[#C9A227] uppercase">
                  {dest.tag}
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-[#F7F7F5] mb-1">
                  {dest.title}
                </h3>
                <p className="text-xs font-medium tracking-widest text-[#C9D2E3] uppercase">
                  {dest.subtitle}
                </p>
              </div>
              
              <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[#0C1528]/80 backdrop-blur-md border border-[rgba(201,162,39,0.2)] flex items-center justify-center opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <svg className="w-4 h-4 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C1528]/95 backdrop-blur-xl"
            onClick={() => setLightboxIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-xl bg-[#14213D] border border-[rgba(201,162,39,0.2)] flex items-center justify-center text-[#C9D2E3] hover:text-[#F7F7F5] hover:border-[#C9A227] transition-colors focus:outline-none z-50"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Prev / Next Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! - 1 + DESTINATIONS.length) % DESTINATIONS.length); }}
              className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-[#14213D] border border-[rgba(201,162,39,0.2)] items-center justify-center text-[#C9D2E3] hover:text-[#F7F7F5] hover:border-[#C9A227] transition-colors focus:outline-none z-50"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % DESTINATIONS.length); }}
              className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-[#14213D] border border-[rgba(201,162,39,0.2)] items-center justify-center text-[#C9D2E3] hover:text-[#F7F7F5] hover:border-[#C9A227] transition-colors focus:outline-none z-50"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Counter Badge */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#14213D] border border-[rgba(201,162,39,0.2)] text-xs font-semibold tracking-widest text-[#C9D2E3] uppercase z-50">
              {lightboxIndex + 1} / {DESTINATIONS.length}
            </div>

            {/* Lightbox Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/9] px-4 sm:px-12"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[rgba(201,162,39,0.2)] shadow-2xl bg-[#1B2A49]">
                <Image
                  src={DESTINATIONS[lightboxIndex].image}
                  alt={DESTINATIONS[lightboxIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                
                {/* Details Banner */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#0C1528] via-[#0C1528]/80 to-transparent flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-[#F7F7F5] mb-1">
                      {DESTINATIONS[lightboxIndex].title}
                    </h3>
                    <p className="text-xs font-semibold tracking-widest text-[#C9A227] uppercase">
                      {DESTINATIONS[lightboxIndex].subtitle} • {DESTINATIONS[lightboxIndex].tag}
                    </p>
                  </div>
                  <a
                    href={getServiceWhatsAppLink(
                      DESTINATIONS[lightboxIndex].tag.includes("Visa")
                        ? "UAE Tourist Visa"
                        : DESTINATIONS[lightboxIndex].tag.includes("Umrah")
                        ? "Umrah Packages"
                        : DESTINATIONS[lightboxIndex].tag.includes("Stamping")
                        ? "Kuwait Visa Stamping"
                        : "International Tour Packages"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 px-5 py-3 text-xs shrink-0 cursor-pointer"
                  >
                    <IconWhatsApp className="w-4 h-4 text-[#0C1528]" />
                    <span className="hidden sm:inline">Inquire on WhatsApp</span>
                    <span className="sm:hidden">Inquire</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
