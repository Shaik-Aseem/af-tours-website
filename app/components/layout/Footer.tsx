"use client";

import { LINKS, SITE, serviceMessages, getWhatsAppUrl, openWhatsApp } from "../../lib/site-data";
import { IconFacebook, IconInstagram, IconPhone, IconWhatsApp } from "../Icons";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.04]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          <div className="lg:col-span-1 pr-8">
            <span className="inline-block text-xl font-bold tracking-[0.15em] text-white uppercase mb-6">
              {SITE.name}
            </span>
            <p className="text-sm text-[#a9b0b8] leading-relaxed mb-8">
              Your trusted partner for premium travel, visas, and Umrah packages in Kadapa. We handle the complexity so you can enjoy the journey.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook Page" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#a9b0b8] transition-all hover:bg-[#1877F2]/20 hover:text-white hover:border-[#1877F2]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                <IconFacebook className="w-4 h-4" />
              </a>
              <a 
                href={LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram Profile" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#a9b0b8] transition-all hover:bg-[#E1306C]/20 hover:text-white hover:border-[#E1306C]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-[#a9b0b8]">
              <li><a href="#services" className="hover:text-white transition-colors">Premium Services</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#founder" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase mb-8">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-[#a9b0b8]">
              <li>
                <a 
                  href={getWhatsAppUrl(serviceMessages.uaeVisa)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => { e.preventDefault(); openWhatsApp(serviceMessages.uaeVisa); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  UAE Tourist Visa
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppUrl(serviceMessages.kuwaitVisa)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => { e.preventDefault(); openWhatsApp(serviceMessages.kuwaitVisa); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kuwait Visa Stamping
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppUrl(serviceMessages.umrah)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => { e.preventDefault(); openWhatsApp(serviceMessages.umrah); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Umrah Packages
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppUrl(serviceMessages.flightBooking)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => { e.preventDefault(); openWhatsApp(serviceMessages.flightBooking); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Flight Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase mb-8">Connect</h4>
            <ul className="space-y-5 text-sm font-medium text-[#a9b0b8]">
              <li>
                <a href={LINKS.callNow} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-colors group-hover:bg-[#d4af37]/20">
                    <IconPhone className="w-3.5 h-3.5 text-white group-hover:text-[#d4af37]" />
                  </div>
                  <span className="group-hover:text-white transition-colors">{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppUrl(serviceMessages.general)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => { e.preventDefault(); openWhatsApp(serviceMessages.general); }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-colors group-hover:bg-[#25D366]/20">
                    <IconWhatsApp className="w-3.5 h-3.5 text-white group-hover:text-[#25D366]" />
                  </div>
                  <span className="group-hover:text-white transition-colors">WhatsApp Enquiry</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-xs leading-relaxed max-w-[200px]">
                  {SITE.address}
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-medium tracking-wide text-[#a9b0b8] uppercase">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
