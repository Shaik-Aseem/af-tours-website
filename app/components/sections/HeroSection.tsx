"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { IconArrowRight } from "../Icons";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 800], [0, 80]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Hero video autoplay initial trigger:", err);
      });
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={containerRef} id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C1528] pt-24 pb-16">
      {/* Video Background Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ y: videoY }}
        className="absolute -top-10 -bottom-10 inset-x-0 z-0 bg-[#0C1528] pointer-events-none"
      >
        <div className="absolute inset-0 h-full w-full opacity-40 mix-blend-screen">
          <video
            ref={videoRef}
            src="/stars1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ filter: "brightness(1.1) contrast(1.1)" }}
          >
            <source src="/stars1.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Soft luxury navy & dark indigo ambient gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1528]/80 via-[#0C1528]/60 to-[#0C1528] z-10" />
        
        {/* Deep luxury ambient radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] sm:h-[900px] sm:w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(27,42,73,0.4)_0%,rgba(20,33,61,0.2)_50%,transparent_75%)] blur-3xl z-10 pointer-events-none" />
      </motion.div>

      {/* Hero Content */}
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl relative"
        >
          {/* Subtle champagne gold radial highlight behind headline */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.15)_0%,rgba(201,162,39,0.03)_50%,transparent_75%)] blur-3xl pointer-events-none -z-10" />

          {/* Trust Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(201,162,39,0.2)] bg-[#14213D]/90 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#F7F7F5] backdrop-blur-md uppercase transition-colors hover:border-[#C9A227]">
              <div className="flex -space-x-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 w-4 rounded-full border border-[#0C1528] bg-[#C9A227]/20 flex items-center justify-center">
                    <span className="text-[7px] text-[#C9A227]">★</span>
                  </div>
                ))}
              </div>
              <span>Trusted by 1000+ Travelers</span>
            </div>
          </motion.div>

          {/* Editorial Luxury Headline */}
          <motion.h1
            variants={itemVariants}
            className="mb-8 text-balance text-4xl font-medium leading-[1.15] tracking-tight text-[#F7F7F5] sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_4px_25px_rgba(12,21,40,0.8)]"
          >
            Every Journey <br className="hidden sm:block" />
            <span className="text-gradient-gold">Begins With Trust</span>
          </motion.h1>

          {/* Subtitle list */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-12 flex flex-col items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#C9D2E3] sm:flex-row sm:gap-6 uppercase">
            <span>UAE Tourist Visa</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#C9A227] sm:block" />
            <span>Kuwait Visa Stamping</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#C9A227] sm:block" />
            <span>Umrah Packages</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#C9A227] xl:block" />
            <span className="hidden xl:block">International Flights</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="#contact"
              className="btn-primary group relative flex items-center justify-center gap-2.5 px-8 py-4 text-xs w-full sm:w-auto"
            >
              <span>Get in Touch</span>
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            
            <a
              href="#services"
              className="btn-secondary flex items-center justify-center px-8 py-4 text-xs w-full sm:w-auto"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Understated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5 z-20"
      >
        <span className="text-[9px] font-semibold tracking-[0.3em] text-[#C9D2E3] uppercase">Scroll</span>
        <div className="h-10 w-[1px] bg-[rgba(201,162,39,0.2)] relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C9A227] to-transparent h-full w-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
