"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LINKS } from "../../lib/site-data";
import { IconFacebook, IconInstagram, IconPhone, IconWhatsApp } from "../Icons";

export default function FounderSection() {
  return (
    <section id="founder" className="relative py-24 sm:py-32 overflow-hidden bg-[#050505]">
      {/* Subtle Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Image Side (Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-md justify-center lg:mx-0 lg:justify-start"
          >
            {/* Glassmorphism Card Wrapper */}
            <div className="relative p-6 rounded-[3rem] glass-card shadow-[0_20px_60px_-20px_rgba(212,175,55,0.15)] group">
              {/* Soft Gold Glow behind portrait */}
              <div className="absolute inset-0 rounded-[3rem] bg-[#d4af37]/20 blur-2xl transition-all duration-700 group-hover:bg-[#d4af37]/30 group-hover:blur-3xl" />
              
              {/* Floating Animation Container */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 border-[#d4af37]/50 shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-700 group-hover:border-[#d4af37]/80 group-hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] z-10 bg-[#0F1115]"
              >
                <Image
                  src="/1000079337.png" // User uploaded owner image
                  alt="Founder of AF Tours & Travels"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 320px, 400px"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase">
              AF Tours & Travels – Kadapa
            </p>
            <h2 className="mb-6 text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
              Meet Your Trusted <span className="text-gradient-gold">Travel Expert</span>
            </h2>
            
            <p className="mb-8 text-base leading-relaxed text-[#a9b0b8] sm:text-lg">
              Helping customers with UAE Tourist Visas, Kuwait Visa Stamping, Flight Bookings, Umrah Packages, GAMCA Medical Appointments, Hotel Bookings, Travel Insurance and complete travel assistance with honest guidance and professional service.
            </p>
            
            <div className="mb-10 grid gap-4 text-sm font-medium tracking-wide text-white/90 sm:grid-cols-2">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#d4af37]">✓</span>
                Trusted Travel Partner
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#d4af37]">✓</span>
                Fast Visa Processing
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#d4af37]">✓</span>
                Personal Assistance
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#d4af37]">✓</span>
                24×7 WhatsApp Support
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start">
              <a
                href={LINKS.callNow}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#d4af37] px-8 py-3.5 text-sm font-semibold tracking-widest text-[#050505] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:bg-[#e6cc80] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] uppercase sm:w-auto"
              >
                <IconPhone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Call Now</span>
              </a>
              
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40 hover:text-[#d4af37] uppercase sm:w-auto"
              >
                <IconWhatsApp className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>WhatsApp</span>
              </a>

              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-[#E1306C]/20 hover:border-[#E1306C]/50 hover:text-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.3)]"
              >
                <IconInstagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-all hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50 hover:text-[#1877F2] hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]"
              >
                <IconFacebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
