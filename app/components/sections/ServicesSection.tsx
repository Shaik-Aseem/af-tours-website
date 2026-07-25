"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LINKS } from "../../lib/site-data";
import { 
  IconArrowRight, 
  IconPlane, 
  IconVisa, 
  IconPassport, 
  IconBuilding, 
  IconShield, 
  IconMosque,
  IconWhatsApp,
  IconPhone
} from "../Icons";

type ServiceDetail = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  benefits: string[];
  processingTime?: string;
  documents?: string[];
};

const SERVICES: ServiceDetail[] = [
  {
    title: "UAE Tourist Visa",
    desc: "Step-by-step support for documentation and fast appointment readiness.",
    icon: <IconVisa className="w-6 h-6" />,
    processingTime: "2-4 Working Days",
    benefits: [
      "99% Approval Rate",
      "Express processing available",
      "Minimal documentation required",
      "Complete application assistance"
    ],
    documents: [
      "Original Passport (6 months validity)",
      "Passport size photographs (White background)",
      "Pan Card copy"
    ]
  },
  {
    title: "Flight Booking",
    desc: "Domestic & international tickets with smart routing and fair pricing.",
    icon: <IconPlane className="w-6 h-6" />,
    benefits: [
      "Best price guarantee on international routes",
      "Multi-city complex itinerary planning",
      "Baggage and meal preference handling",
      "24/7 support for date changes or cancellations"
    ]
  },
  {
    title: "Umrah Packages",
    desc: "Comfort-focused pilgrimage plans with reliable coordination.",
    icon: <IconMosque className="w-6 h-6" />,
    processingTime: "5-7 Working Days",
    benefits: [
      "Premium hotels near Haram",
      "Umrah Visa processing included",
      "Round-trip flight tickets",
      "Ground transportation (Ziyarat)"
    ],
    documents: [
      "Original Passport",
      "4 Passport size photographs",
      "Vaccination certificate (if applicable)"
    ]
  },
  {
    title: "Kuwait Visa Stamping",
    desc: "Hassle-free assistance for GAMCA medical and embassy submissions.",
    icon: <IconPassport className="w-6 h-6" />,
    processingTime: "7-10 Working Days",
    benefits: [
      "GAMCA Medical appointment booking",
      "Document attestation services",
      "Direct embassy submission",
      "End-to-end guidance"
    ],
    documents: [
      "Original Passport",
      "Original Visa",
      "GAMCA Medical Report",
      "PCC (Police Clearance Certificate)"
    ]
  },
  {
    title: "Travel Insurance",
    desc: "Comprehensive coverage options tailored to your destination.",
    icon: <IconShield className="w-6 h-6" />,
    benefits: [
      "Medical emergency coverage",
      "Trip cancellation protection",
      "Lost baggage compensation",
      "Schengen-approved policies available"
    ]
  },
  {
    title: "Hotel Booking",
    desc: "Verified premium stays with great value and flexible options.",
    icon: <IconBuilding className="w-6 h-6" />,
    benefits: [
      "Exclusive negotiated rates",
      "Global hotel network",
      "Flexible cancellation policies",
      "Special requests handling (Anniversary, Honeymoon)"
    ]
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (selectedService) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#050505]">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-3"
          >
            Core Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl mb-4"
          >
            Premium Travel Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-[#a9b0b8] leading-relaxed"
          >
            From complex visa documentation to luxury flight bookings, we handle every detail so you can focus on the journey.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="group relative h-full rounded-2xl glass-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#d4af37]/0 via-[#d4af37]/0 to-[#d4af37]/0 transition-all duration-500 group-hover:from-[#d4af37]/30 group-hover:via-transparent group-hover:to-[#d4af37]/10 opacity-0 group-hover:opacity-100 p-[1px] pointer-events-none -z-10">
                <div className="absolute inset-0 rounded-2xl bg-[#0F1115]/90 backdrop-blur-xl" />
              </div>
              
              <div className="relative z-10 flex h-full flex-col p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[#d4af37] transition-colors duration-500 group-hover:bg-[#d4af37]/10 group-hover:border-[#d4af37]/30 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  {service.icon}
                </div>
                
                <h3 className="mb-3 text-xl font-medium tracking-tight text-white transition-colors group-hover:text-[#d4af37]">
                  {service.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-[#a9b0b8] mb-8 flex-grow">
                  {service.desc}
                </p>
                
                <button className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white transition-colors duration-300 group-hover:text-[#d4af37] uppercase mt-auto focus:outline-none">
                  <span>Learn More</span>
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050505]/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[#0F1115] border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8 sm:p-12">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37]">
                  {selectedService.icon}
                </div>
                
                <h3 className="text-3xl font-medium tracking-tight text-white mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-base text-[#a9b0b8] leading-relaxed mb-8">
                  {selectedService.desc}
                </p>

                {selectedService.processingTime && (
                  <div className="mb-8 flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <svg className="w-5 h-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Processing Time</p>
                      <p className="text-sm font-medium text-white">{selectedService.processingTime}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#d4af37] uppercase mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#a9b0b8]">
                          <svg className="w-5 h-5 text-[#25D366] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedService.documents && (
                    <div>
                      <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#d4af37] uppercase mb-4">Required Documents</h4>
                      <ul className="space-y-3">
                        {selectedService.documents.map((doc, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#a9b0b8]">
                            <svg className="w-5 h-5 text-white/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                  <a
                    href={LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#25D366] px-8 py-4 text-[11px] font-bold tracking-widest text-[#050505] shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-all duration-300 hover:bg-[#34e678] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] uppercase"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>
                  <a
                    href={LINKS.callNow}
                    className="flex-1 group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-white/5 border border-white/10 px-8 py-4 text-[11px] font-bold tracking-widest text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 uppercase"
                  >
                    <IconPhone className="w-4 h-4 text-[#d4af37]" />
                    <span>Call Now</span>
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
