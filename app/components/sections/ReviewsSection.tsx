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
    <section className="relative py-24 sm:py-32 bg-[#14213D] overflow-hidden border-t border-[rgba(201,162,39,0.12)]">
      {/* Soft Ambient Radial Light */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-semibold tracking-[0.2em] text-[#C9A227] uppercase mb-3"
          >
            Client Experiences
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-medium tracking-tight text-[#F7F7F5] sm:text-4xl md:text-5xl"
          >
            Words of Trust
          </motion.h2>
        </div>

        {/* Reviews Cards Grid */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:overflow-x-visible snap-x snap-mandatory hide-scrollbar">
          {REVIEWS.map((review, idx) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="luxury-card group relative p-8 rounded-2xl min-w-[300px] w-[85vw] sm:w-auto snap-center flex flex-col justify-between"
            >
              {/* Premium Quote Mark */}
              <div className="text-[#C9A227]/10 font-serif text-8xl leading-none absolute top-4 right-6 select-none pointer-events-none transition-colors duration-300 group-hover:text-[#C9A227]/20">
                &rdquo;
              </div>
              
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6 text-[#C9A227]">
                  {[...Array(5)].map((_, i) => (
                    <IconStar key={i} className="w-4 h-4" />
                  ))}
                </div>
                
                <p className="text-sm leading-relaxed text-[#C9D2E3] mb-8 min-h-[90px]">
                  &quot;{review.text}&quot;
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-[rgba(201,162,39,0.1)]">
                <div className="w-11 h-11 rounded-xl bg-[#14213D] border border-[rgba(201,162,39,0.2)] flex items-center justify-center text-[#F7F7F5] text-xs font-bold tracking-wider">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F7F5] tracking-wide">{review.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-[#C9D2E3] mt-0.5">{review.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
