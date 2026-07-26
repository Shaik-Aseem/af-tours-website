"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LINKS, serviceMessages, getWhatsAppUrl } from "../../lib/site-data";
import { 
  IconArrowRight, 
  IconPlane, 
  IconVisa, 
  IconBuilding, 
  IconMosque,
  IconWhatsApp,
  IconPhone
} from "../Icons";

type ServiceDetail = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  message: string;
  benefits: string[];
  processingTime?: string;
  documents?: string[];
};

const SERVICES: ServiceDetail[] = [
  {
    title: "UAE Tourist Visa",
    desc: "Step-by-step support for documentation and fast appointment readiness.",
    icon: <IconVisa className="w-6 h-6" />,
    message: serviceMessages.uaeVisa,
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
    message: serviceMessages.flightBooking,
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
    message: serviceMessages.umrah,
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
    title: "International Tour Packages",
    desc: "Tailored global holiday packages with flights, hotels, and guided sightseeing.",
    icon: <IconPlane className="w-6 h-6" />,
    message: serviceMessages.internationalTours,
    benefits: [
      "Customized itineraries for popular global destinations",
      "End-to-end travel, accommodation & visa management",
      "Guided local tours and airport transfers",
      "Best group & family travel rates"
    ]
  },
  {
    title: "Domestic Tour Packages",
    desc: "Explore top Indian destinations with curated tour itineraries.",
    icon: <IconBuilding className="w-6 h-6" />,
    message: serviceMessages.domesticTours,
    benefits: [
      "Pan-India holiday packages",
      "Family, honeymoon & pilgrimage specials",
      "Verified stays and seamless transport",
      "Dedicated trip coordinator"
    ]
  },
  {
    title: "Hotel Booking",
    desc: "Curated luxury accommodations worldwide with exclusive rates.",
    icon: <IconBuilding className="w-6 h-6" />,
    message: serviceMessages.hotelBooking,
    benefits: [
      "Handpicked 3-star to 5-star properties",
      "Special corporate & family discounts",
      "Flexible check-in options",
      "Instant confirmation"
    ]
  },
  {
    title: "Travel Assistance",
    desc: "End-to-end guidance for medical appointments, insurance, and transit logistics.",
    icon: <IconPlane className="w-6 h-6" />,
    message: serviceMessages.travelAssistance,
    benefits: [
      "GAMCA Medical Appointment booking",
      "Comprehensive travel insurance plans",
      "Airport transfer arrangements",
      "24/7 travel query helpline"
    ]
  },
  {
    title: "Kuwait Visa Stamping",
    desc: "Official embassy processing and document authentication for Kuwait travel.",
    icon: <IconVisa className="w-6 h-6" />,
    message: serviceMessages.kuwaitVisa,
    processingTime: "7-10 Working Days",
    benefits: [
      "Authorized Embassy submission",
      "Document verification & attestation",
      "GAMCA medical coordination",
      "Real-time application tracking"
    ],
    documents: [
      "Original Passport & Visa Copy",
      "PCC (Police Clearance Certificate)",
      "GAMCA Medical Fit Report"
    ]
  },
  {
    title: "Travel Insurance",
    desc: "Comprehensive overseas medical & travel protection for peace of mind.",
    icon: <IconPlane className="w-6 h-6" />,
    message: serviceMessages.travelInsurance,
    benefits: [
      "Cashless hospitalization abroad",
      "Loss of passport & checked baggage coverage",
      "Flight delay & cancellation protection",
      "Instant policy generation"
    ]
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0C1528]">
      <div className="container relative z-10 mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.2em] text-[#C9A227] uppercase mb-3"
          >
            Core Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-medium tracking-tight text-[#F7F7F5] sm:text-4xl md:text-5xl mb-4"
          >
            Premium Travel Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-[#C9D2E3] leading-relaxed"
          >
            From complex visa documentation to luxury flight bookings, we handle every detail so you can focus on the journey.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedService(service)}
              className="luxury-card group relative h-full rounded-2xl p-8 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#14213D] border border-[rgba(201,162,39,0.2)] text-[#C9A227] transition-all duration-300 group-hover:border-[#C9A227] group-hover:bg-[#C9A227]/10">
                  {service.icon}
                </div>
                
                <h3 className="mb-3 text-xl font-medium tracking-tight text-[#F7F7F5] transition-colors group-hover:text-[#C9A227]">
                  {service.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-[#C9D2E3] mb-8">
                  {service.desc}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(201,162,39,0.1)]">
                <a
                  href={getWhatsAppUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F7F7F5] transition-colors duration-200 hover:text-[#C9A227] uppercase focus:outline-none cursor-pointer"
                >
                  <span>Learn More</span>
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0C1528]/85 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#1B2A49] border border-[rgba(201,162,39,0.2)] shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-[#14213D] border border-[rgba(201,162,39,0.2)] flex items-center justify-center text-[#C9D2E3] hover:text-[#F7F7F5] hover:border-[#C9A227] transition-colors focus:outline-none z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-8 sm:p-12">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#14213D] border border-[rgba(201,162,39,0.3)] text-[#C9A227]">
                  {selectedService.icon}
                </div>
                
                <h3 className="text-3xl font-medium tracking-tight text-[#F7F7F5] mb-3">
                  {selectedService.title}
                </h3>
                <p className="text-base text-[#C9D2E3] leading-relaxed mb-8">
                  {selectedService.desc}
                </p>

                {selectedService.processingTime && (
                  <div className="mb-8 flex items-center gap-3 bg-[#14213D] border border-[rgba(201,162,39,0.15)] rounded-xl p-4">
                    <svg className="w-5 h-5 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#C9D2E3] uppercase">Processing Time</p>
                      <p className="text-sm font-semibold text-[#F7F7F5]">{selectedService.processingTime}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-8">
                  <div>
                    <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#C9A227] uppercase mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#C9D2E3]">
                          <span className="text-[#C9A227] font-bold">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedService.documents && (
                    <div>
                      <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#C9A227] uppercase mb-4">Required Documents</h4>
                      <ul className="space-y-3">
                        {selectedService.documents.map((doc, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#C9D2E3]">
                            <svg className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-10 pt-8 border-t border-[rgba(201,162,39,0.12)] flex flex-col sm:flex-row gap-4">
                  <a
                    href={getWhatsAppUrl(selectedService.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 flex items-center justify-center gap-2 py-4 text-xs cursor-pointer"
                  >
                    <IconWhatsApp className="w-4 h-4 text-[#0C1528]" />
                    <span>WhatsApp Direct</span>
                  </a>
                  <a
                    href={LINKS.callNow}
                    className="btn-secondary flex-1 flex items-center justify-center gap-2 py-4 text-xs"
                  >
                    <IconPhone className="w-4 h-4 text-[#C9A227]" />
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
