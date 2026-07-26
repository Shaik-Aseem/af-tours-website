"use client";

import { motion } from "framer-motion";
import { LINKS, serviceMessages, getWhatsAppUrl, openWhatsApp } from "../../lib/site-data";
import { IconFacebook, IconInstagram, IconMapPin, IconPhone, IconWhatsApp } from "../Icons";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0F1115] border-t border-white/[0.04] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_top_left,rgba(37,211,102,0.02)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Direct Action & Location Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-4">
                Connect With Us
              </p>
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl mb-4">
                Start Your Journey
              </h2>
              <p className="text-sm leading-relaxed text-[#a9b0b8]">
                Reach out directly to our travel specialists for flight bookings, visa stamping, Umrah packages, and custom itineraries.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href={getWhatsAppUrl(serviceMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp(serviceMessages.general);
                }}
                className="group flex items-center gap-4 p-5 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-[#25D366]/30 hover:shadow-[0_15px_30px_rgba(37,211,102,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] cursor-pointer"
                aria-label="Direct WhatsApp Enquiry"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] ring-1 ring-[#25D366]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-black">
                  <IconWhatsApp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase mb-0.5">Instant WhatsApp</p>
                  <p className="text-base font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#25D366]">+91 83281 82055</p>
                </div>
              </a>

              <a
                href="tel:+918328182055"
                className="group flex items-center gap-4 p-5 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-[#d4af37]/30 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                aria-label="Direct Phone Call"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d4af37]/10 text-[#d4af37] ring-1 ring-[#d4af37]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase mb-0.5">Direct Call</p>
                  <p className="text-base font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#d4af37]">+91 83281 82055</p>
                </div>
              </a>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-4 pt-1">
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-[#E1306C]/30 hover:shadow-[0_15px_30px_rgba(225,48,108,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C]"
                  aria-label="Instagram Profile"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E1306C]/10 text-[#E1306C] ring-1 ring-[#E1306C]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#E1306C] group-hover:text-white">
                    <IconInstagram className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase mb-0.5">Instagram</p>
                    <p className="text-xs font-medium tracking-tight text-white truncate transition-colors duration-300 group-hover:text-[#E1306C]">@the_kadapa_aftravels</p>
                  </div>
                </a>

                <a
                  href={LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-[#1877F2]/30 hover:shadow-[0_15px_30px_rgba(24,119,242,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]"
                  aria-label="Facebook Page"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] ring-1 ring-[#1877F2]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#1877F2] group-hover:text-white">
                    <IconFacebook className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase mb-0.5">Facebook</p>
                    <p className="text-xs font-medium tracking-tight text-white truncate transition-colors duration-300 group-hover:text-[#1877F2]">AF Tours & Travels</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Compact Location Map */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050505] group">
              <div className="absolute inset-0 bg-[#050505] flex items-center justify-center flex-col z-0">
                <IconMapPin className="w-8 h-8 text-[#d4af37]/30 mb-3 animate-pulse" />
                <p className="text-[9px] text-[#a9b0b8] font-semibold tracking-[0.2em] uppercase">Loading Map...</p>
              </div>
              <iframe
                title="AF Tours & Travels location map"
                className="absolute inset-0 h-full w-full z-10 opacity-70 mix-blend-luminosity grayscale transition-all duration-1000 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=D.No:+20/492-5,+Nawab+Complex,+Near+Krishna+Circle,+Opp.+Sai+Baba+Cycle+Mart,+Kadapa+-+516003&z=17&output=embed"
                style={{ border: 0 }}
                allowFullScreen
              />
              <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>

          {/* Right Column: Premium "Get in Touch" Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="relative h-full p-8 sm:p-12 rounded-[2rem] glass-card border border-white/10 bg-[#0F1115]/80 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] border border-[#d4af37]/20">
                    <IconPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">Direct Assistance</span>
                    <h3 className="text-2xl font-medium tracking-tight text-white">Get in Touch</h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#a9b0b8] mb-10">
                  Prefer direct communication? Connect with our dedicated travel experts immediately via Call, WhatsApp, or Email for flight inquiries, visa assistance, or custom Umrah packages.
                </p>

                {/* Primary Contact Options Grid */}
                <div className="grid gap-4 sm:grid-cols-2 mb-10">
                  
                  {/* Call Now Action Button */}
                  <a
                    href="tel:+918328182055"
                    className="group relative flex items-center gap-4 p-5 rounded-2xl bg-[#d4af37] text-[#050505] transition-all duration-300 hover:bg-[#e6cc80] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#050505] text-[#d4af37] transition-transform duration-300 group-hover:scale-110">
                      <IconPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-extrabold tracking-widest uppercase opacity-80 mb-0.5">Call Now</p>
                      <p className="text-base font-bold tracking-tight">+91 83281 82055</p>
                    </div>
                  </a>

                  {/* WhatsApp Direct Action Button */}
                  <a
                    href="https://wa.me/918328182055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-4 p-5 rounded-2xl bg-[#25D366] text-black transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-black text-[#25D366] transition-transform duration-300 group-hover:scale-110">
                      <IconWhatsApp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-extrabold tracking-widest uppercase opacity-80 mb-0.5">WhatsApp Direct</p>
                      <p className="text-base font-bold tracking-tight">+91 83281 82055</p>
                    </div>
                  </a>

                  {/* Email Direct Option */}
                  <a
                    href="mailto:aftravels365@gmail.com"
                    className="group sm:col-span-2 flex items-center gap-4 p-5 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase mb-0.5">Official Email</p>
                      <p className="text-base font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#d4af37]">aftravels365@gmail.com</p>
                    </div>
                  </a>

                </div>
              </div>

              {/* Information Cards: Business Hours & Office Address */}
              <div className="grid gap-4 pt-6 border-t border-white/10 sm:grid-cols-2">
                
                {/* Business Hours */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-[#d4af37]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white">Business Hours</span>
                  </div>
                  <p className="text-xs text-[#a9b0b8] leading-relaxed">
                    <span className="font-semibold text-white">Mon – Sat:</span> 9:30 AM – 8:30 PM IST<br />
                    <span className="font-semibold text-white">Sunday:</span> Emergency On-Call Support
                  </p>
                </div>

                {/* Office Location */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-[#d4af37]">
                    <IconMapPin className="w-4 h-4" />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white">Headquarters</span>
                  </div>
                  <p className="text-xs text-[#a9b0b8] leading-relaxed">
                    D.No: 20/492-5, Nawab Complex,<br />
                    Near Krishna Circle, Kadapa - 516003
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
