"use client";

import { LINKS, SITE, serviceMessages, getWhatsAppUrl } from "../../lib/site-data";
import { IconFacebook, IconInstagram, IconPhone, IconWhatsApp } from "../Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0C1528] border-t border-[rgba(201,162,39,0.12)]">
      <div className="container mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          <div className="lg:col-span-1 pr-8">
            <span className="inline-block text-xl font-bold tracking-[0.15em] text-[#F7F7F5] uppercase mb-6">
              {SITE.name}
            </span>
            <p className="text-sm text-[#C9D2E3] leading-relaxed mb-8">
              Your trusted partner for premium travel, visas, and Umrah packages in Kadapa. We handle the complexity so you can enjoy the journey.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook Page" 
                className="w-10 h-10 rounded-xl border border-[rgba(201,162,39,0.2)] bg-[#14213D] flex items-center justify-center text-[#C9D2E3] transition-all hover:bg-[#1877F2]/20 hover:text-[#F7F7F5] hover:border-[#1877F2]/50 focus:outline-none"
              >
                <IconFacebook className="w-4 h-4" />
              </a>
              <a 
                href={LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram Profile" 
                className="w-10 h-10 rounded-xl border border-[rgba(201,162,39,0.2)] bg-[#14213D] flex items-center justify-center text-[#C9D2E3] transition-all hover:bg-[#E1306C]/20 hover:text-[#F7F7F5] hover:border-[#E1306C]/50 focus:outline-none"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C9A227] uppercase mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-[#C9D2E3]">
              <li><a href="#services" className="hover:text-[#F7F7F5] transition-colors">Premium Services</a></li>
              <li><a href="#destinations" className="hover:text-[#F7F7F5] transition-colors">Destinations</a></li>
              <li><a href="#founder" className="hover:text-[#F7F7F5] transition-colors">Our Story</a></li>
              <li><a href="#contact" className="hover:text-[#F7F7F5] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C9A227] uppercase mb-8">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-[#C9D2E3]">
              <li>
                <a 
                  href={getWhatsAppUrl(serviceMessages.uaeVisa)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#F7F7F5] transition-colors cursor-pointer"
                >
                  UAE Tourist Visa
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppUrl(serviceMessages.kuwaitVisa)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#F7F7F5] transition-colors cursor-pointer"
                >
                  Kuwait Visa Stamping
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppUrl(serviceMessages.umrah)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#F7F7F5] transition-colors cursor-pointer"
                >
                  Umrah Packages
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppUrl(serviceMessages.flightBooking)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#F7F7F5] transition-colors cursor-pointer"
                >
                  Flight Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C9A227] uppercase mb-8">Connect</h4>
            <ul className="space-y-5 text-sm font-medium text-[#C9D2E3]">
              <li>
                <a href="tel:+918328182055" className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-xl bg-[#14213D] border border-[rgba(201,162,39,0.2)] flex items-center justify-center transition-colors group-hover:border-[#C9A227]">
                    <IconPhone className="w-3.5 h-3.5 text-[#C9A227]" />
                  </div>
                  <span className="group-hover:text-[#F7F7F5] transition-colors">+91 83281 82055</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/918328182055"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#14213D] border border-[#25D366]/30 flex items-center justify-center transition-colors group-hover:bg-[#25D366]/20">
                    <IconWhatsApp className="w-3.5 h-3.5 text-[#25D366]" />
                  </div>
                  <span className="group-hover:text-[#F7F7F5] transition-colors">WhatsApp Enquiry</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-xs leading-relaxed max-w-[200px] text-[#C9D2E3]">
                  {SITE.address}
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-[rgba(201,162,39,0.12)] flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-medium tracking-wide text-[#C9D2E3] uppercase">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-[#F7F7F5] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#F7F7F5] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
