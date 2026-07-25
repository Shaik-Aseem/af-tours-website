"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Swipe support handlers
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || lightboxIndex === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      // Swiped left
      setLightboxIndex((prev) => (prev! + 1) % DESTINATIONS.length);
    }
    if (distance < -swipeThreshold) {
      // Swiped right
      setLightboxIndex((prev) => (prev! - 1 + DESTINATIONS.length) % DESTINATIONS.length);
    }
    setTouchStart(null);
  };

  return (
    <section id="destinations" className="relative py-24 sm:py-32 bg-[#050505]">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-4"
            >
              Featured Locations
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Popular Destinations
            </motion.h2>
          </div>
          
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[#a9b0b8] hover:text-[#d4af37] transition-colors border-b border-transparent hover:border-[#d4af37] pb-1 uppercase"
          >
            View All Packages
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DESTINATIONS.map((dest, idx) => (
            <motion.article
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#0F1115] cursor-pointer shadow-xl transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={dest.image}
                alt={`${dest.title}, ${dest.subtitle}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 opacity-70 group-hover:opacity-100"
                style={{ filter: "contrast(1.1) brightness(0.85)" }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-80" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full transition-transform duration-700 ease-out group-hover:-translate-y-2">
                <div className="mb-3 inline-flex self-start rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                  {dest.tag}
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-white mb-1">
                  {dest.title}
                </h3>
                <p className="text-xs font-medium tracking-widest text-white/60 uppercase">
                  {dest.subtitle}
                </p>
              </div>
              
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-colors duration-500 group-hover:ring-white/30 pointer-events-none" />
              
              {/* Expand Icon indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl"
            onClick={() => setLightboxIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors focus:outline-none z-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Navigation Buttons (Desktop) */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! - 1 + DESTINATIONS.length) % DESTINATIONS.length); }}
              className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors focus:outline-none z-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % DESTINATIONS.length); }}
              className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors focus:outline-none z-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-widest text-[#a9b0b8] uppercase z-50">
              {lightboxIndex + 1} / {DESTINATIONS.length}
            </div>

            {/* Active Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/9] px-4 sm:px-12"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-[#0F1115]">
                <Image
                  src={DESTINATIONS[lightboxIndex].image}
                  alt={DESTINATIONS[lightboxIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                
                {/* Image Details Banner */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-medium tracking-tight text-white mb-1">
                    {DESTINATIONS[lightboxIndex].title}
                  </h3>
                  <p className="text-sm font-medium tracking-widest text-[#d4af37] uppercase">
                    {DESTINATIONS[lightboxIndex].subtitle}
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
