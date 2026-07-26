"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LINKS, serviceMessages, getWhatsAppUrl } from "../../lib/site-data";
import { IconFacebook, IconInstagram, IconPhone, IconWhatsApp } from "../Icons";

export default function FounderSection() {
  return (
    <section id="founder" className="relative py-24 sm:py-32 overflow-hidden bg-[#14213D]">
      {/* Subtle Background Radial Lighting */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Side (Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-md justify-center lg:mx-0 lg:justify-start"
          >
            {/* Muted Luxury Frame */}
            <div className="relative p-6 rounded-[2.5rem] bg-[#1B2A49] border border-[rgba(201,162,39,0.15)] shadow-2xl group">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-2 border-[rgba(201,162,39,0.3)] shadow-[0_10px_30px_rgba(12,21,40,0.6)] transition-all duration-300 group-hover:border-[#C9A227] z-10 bg-[#0C1528]">
                <Image
                  src="/1000079337.png"
                  alt="Founder of AF Tours & Travels"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 320px, 400px"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content Side (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#C9A227] uppercase">
              AF Tours & Travels – Kadapa
            </p>
            <h2 className="mb-6 text-3xl font-medium tracking-tight text-[#F7F7F5] sm:text-4xl md:text-5xl">
              Meet Your Trusted <span className="text-gradient-gold">Travel Expert</span>
            </h2>
            
            <p className="mb-8 text-base leading-relaxed text-[#C9D2E3] sm:text-lg">
              Helping customers with UAE Tourist Visas, Kuwait Visa Stamping, Flight Bookings, Umrah Packages, GAMCA Medical Appointments, Hotel Bookings, Travel Insurance and complete travel assistance with honest guidance and professional service.
            </p>
            
            <div className="mb-10 grid gap-4 text-sm font-medium tracking-wide text-[#F7F7F5] sm:grid-cols-2">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A227]/15 text-[#C9A227] text-xs font-bold">✓</span>
                Trusted Travel Partner
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A227]/15 text-[#C9A227] text-xs font-bold">✓</span>
                Fast Visa Processing
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A227]/15 text-[#C9A227] text-xs font-bold">✓</span>
                Personal Assistance
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A227]/15 text-[#C9A227] text-xs font-bold">✓</span>
                24×7 WhatsApp Support
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:justify-start">
              <a
                href={LINKS.callNow}
                className="btn-primary group relative flex w-full items-center justify-center gap-2 px-7 py-3.5 text-xs sm:w-auto"
              >
                <IconPhone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              
              <a
                href={getWhatsAppUrl(serviceMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex w-full items-center justify-center gap-2 px-7 py-3.5 text-xs sm:w-auto cursor-pointer"
              >
                <IconWhatsApp className="h-4 w-4 text-[#C9A227]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(201,162,39,0.2)] bg-[#1B2A49] text-[#C9D2E3] transition-all hover:border-[#C9A227] hover:text-[#F7F7F5]"
              >
                <IconInstagram className="h-5 w-5 transition-transform duration-200 group-hover:scale-105" />
              </a>

              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(201,162,39,0.2)] bg-[#1B2A49] text-[#C9D2E3] transition-all hover:border-[#C9A227] hover:text-[#F7F7F5]"
              >
                <IconFacebook className="h-5 w-5 transition-transform duration-200 group-hover:scale-105" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
