"use client";

import { motion } from "framer-motion";
import { IconStar } from "../Icons";

const REVIEWS = [
  {
    name: "Ahmed Raza",
    location: "Kadapa, India",
    initials: "AR",
    text: "The level of professionalism is unmatched. My UAE visa was processed in record time with zero hidden fees. Highly recommended.",
  },
  {
    name: "Dr. Imran Khan",
    location: "Hyderabad, India",
    initials: "IK",
    text: "Booking our family's Umrah package through AF Tours was the best decision. Every detail from the flights to the hotel was perfectly orchestrated.",
  },
  {
    name: "Mohammed Sameer",
    location: "Kadapa, India",
    initials: "MS",
    text: "They handled my Kuwait visa stamping smoothly. The 24/7 WhatsApp support gave me complete peace of mind throughout the process.",
  },
] as const;

export default function ReviewsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
      {/* Decorative gradient */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-4"
          >
            Client Experiences
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Words of Trust
          </motion.h2>
        </div>

        {/* Mobile Carousel / Desktop Grid */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:overflow-x-visible snap-x snap-mandatory hide-scrollbar">
          {REVIEWS.map((review, idx) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 rounded-2xl glass-card border border-white/5 bg-[#0F1115]/80 backdrop-blur-xl min-w-[300px] w-[85vw] sm:w-auto snap-center transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Premium Quote Mark */}
              <div className="text-[#d4af37]/10 font-serif text-8xl leading-none absolute top-4 right-6 select-none pointer-events-none transition-colors duration-500 group-hover:text-[#d4af37]/20">
                &rdquo;
              </div>
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6 text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-4 h-4" />
                ))}
              </div>
              
              <p className="text-sm leading-relaxed text-[#a9b0b8] mb-10 min-h-[100px] transition-colors duration-500 group-hover:text-white/90">
                &quot;{review.text}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1a1d24] to-[#0F1115] border border-white/10 flex items-center justify-center text-white text-sm font-semibold tracking-wider shadow-inner transition-transform duration-500 group-hover:scale-110">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">{review.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#a9b0b8] mt-1">{review.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      
      {/* Hide scrollbar styles for mobile carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
