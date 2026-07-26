"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "How long does a UAE Tourist Visa take to process?",
    answer: "Typically, a UAE Tourist Visa takes 2-4 working days to process. However, express processing options are available if you need it urgently. We handle all document verifications to ensure there are no unnecessary delays."
  },
  {
    question: "What is included in your Umrah packages?",
    answer: "Our premium Umrah packages are comprehensive. They include round-trip flights, premium hotel accommodations near the Haram, Umrah visa processing, ground transportation (Ziyarat), and guided support throughout your journey."
  },
  {
    question: "Do you assist with Kuwait Visa Stamping?",
    answer: "Yes, we provide end-to-end assistance for Kuwait Visa stamping, including GAMCA medical appointments, document attestation, and embassy submissions. We guide you step-by-step until the visa is stamped on your passport."
  },
  {
    question: "Can I book a multi-city international flight?",
    answer: "Absolutely. Our expert travel consultants specialize in complex flight itineraries. We ensure optimal routing, competitive pricing, and seamless connections for multi-city and round-the-world trips."
  },
  {
    question: "Is travel insurance mandatory?",
    answer: "While not mandatory for every country, we highly recommend travel insurance to cover unexpected medical emergencies, trip cancellations, or lost baggage. For certain destinations (like Schengen countries), it is legally required."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0C1528]">
      <div className="container relative z-10 mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.2em] text-[#C9A227] uppercase mb-3"
          >
            Knowledge Base
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-medium tracking-tight text-[#F7F7F5] sm:text-4xl md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? "border-[#C9A227]/40 bg-[#1B2A49]" 
                    : "border-[rgba(201,162,39,0.12)] bg-[#14213D] hover:border-[rgba(201,162,39,0.25)]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-6 text-left focus:outline-none rounded-2xl"
                >
                  <span className={`text-base font-medium tracking-wide transition-colors duration-200 ${isOpen ? "text-[#C9A227]" : "text-[#F7F7F5]"}`}>
                    {faq.question}
                  </span>
                  <span className={`ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-200 ${isOpen ? "border-[#C9A227] bg-[#C9A227]/15 text-[#C9A227] rotate-180" : "border-[rgba(201,162,39,0.2)] bg-[#0C1528] text-[#C9D2E3]"}`}>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-[#C9D2E3] pt-1 border-t border-[rgba(201,162,39,0.08)]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
