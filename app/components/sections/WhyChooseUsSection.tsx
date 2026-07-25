"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    title: "Uncompromising Trust",
    desc: "Built on transparency with zero hidden fees. We handle your sensitive documents with strict confidentiality.",
    number: "01",
  },
  {
    title: "Fast Processing",
    desc: "Time is luxury. Our established embassy and airline connections ensure prioritized processing for every request.",
    number: "02",
  },
  {
    title: "Personal Assistance",
    desc: "Direct 24/7 access to your dedicated travel consultant. No automated phone trees, just real expert support.",
    number: "03",
  },
] as const;

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0F1115] overflow-hidden border-y border-white/[0.04]">
      {/* Subtle background element */}
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-4"
            >
              The AF Tours Standard
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl mb-6"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed text-[#a9b0b8] max-w-md"
            >
              We elevate travel management from a mere transaction to a highly personalized, secure, and rapid service experience. 
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-1">
              {PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group flex gap-6 sm:gap-8"
                >
                  <div className="flex-shrink-0 text-3xl sm:text-4xl font-serif italic text-[#d4af37]/30 transition-colors group-hover:text-[#d4af37]">
                    {pillar.number}
                  </div>
                  <div className="pt-2 sm:pt-3">
                    <h3 className="text-xl font-medium tracking-tight text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#a9b0b8]">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
