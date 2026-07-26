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
    <section className="relative py-24 sm:py-32 bg-[#14213D] overflow-hidden border-y border-[rgba(201,162,39,0.12)]">
      {/* Subtle radial ambient lighting */}
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.2em] text-[#C9A227] uppercase mb-4"
            >
              The AF Tours Standard
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-medium tracking-tight text-[#F7F7F5] sm:text-4xl md:text-5xl mb-6"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base leading-relaxed text-[#C9D2E3] max-w-md"
            >
              We elevate travel management from a mere transaction to a highly personalized, secure, and rapid service experience. 
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-1">
              {PILLARS.map((pillar, idx) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="group flex gap-6 sm:gap-8 p-6 rounded-2xl bg-[#1B2A49] border border-[rgba(201,162,39,0.12)] transition-all duration-200 hover:border-[#C9A227]/30"
                >
                  <div className="flex-shrink-0 text-3xl sm:text-4xl font-serif italic text-[#C9A227]/40 transition-colors group-hover:text-[#C9A227]">
                    {pillar.number}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-medium tracking-tight text-[#F7F7F5] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#C9D2E3]">
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
