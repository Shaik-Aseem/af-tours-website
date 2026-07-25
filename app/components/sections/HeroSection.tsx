"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { IconArrowRight } from "../Icons";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Smooth Parallax movement on scroll
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 800], [0, 120]);

  // Programmatic autoplay fallback trigger for browser media policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Hero video autoplay initial trigger:", err);
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section ref={containerRef} id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505]">
      {/* Video Background Container with Parallax and Fade-in (z-index: 0) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y: videoY }}
        className="absolute -top-10 -bottom-10 inset-x-0 z-0 bg-[#050505] pointer-events-none"
      >
        {/* Animated Cinematic Zoom Video */}
        <motion.div
          animate={{ scale: [1.0, 1.05, 1.0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full"
        >
          <video
            ref={videoRef}
            src="/stars1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ 
              filter: "brightness(1.35) contrast(1.2) saturate(1.35)",
              willChange: "transform"
            }}
          >
            <source src="/stars1.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        {/* Subtle Gradient Overlay for High Star Visibility & Clear Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-[#050505]/15 to-[#050505]/80 z-10" />
        
        {/* Subtle deep blue radial glow for background depth (z-index: 10) */}
        <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] sm:h-[950px] sm:w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.18)_0%,rgba(15,23,42,0.12)_50%,transparent_75%)] blur-3xl z-10 pointer-events-none" />
      </motion.div>

      {/* Hero Content (z-index: 20) */}
      <div className="container relative z-20 mx-auto px-4 text-center -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl relative"
        >
          {/* Soft golden radial glow behind main headline */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[650px] h-[220px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.22)_0%,rgba(212,175,55,0.05)_55%,transparent_75%)] blur-3xl pointer-events-none -z-10" />

          {/* Trust Badge */}
          <motion.div variants={itemVariants} className="mb-5 sm:mb-6 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold tracking-widest text-white backdrop-blur-md uppercase transition-colors hover:border-[#d4af37]/50 hover:bg-white/10">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-5 w-5 rounded-full border border-[#050505] bg-[#d4af37]/20 flex items-center justify-center">
                    <span className="text-[8px] text-[#d4af37]">★</span>
                  </div>
                ))}
              </div>
              Trusted by 1000+ Travelers
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 sm:mb-8 text-balance text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "var(--font-geist-sans), serif" }}
          >
            Every Journey <br className="hidden sm:block" />
            <span className="text-gradient-gold drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">Begins With Trust</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.2em] text-[#a9b0b8] sm:flex-row sm:gap-6 uppercase">
            <span>Premium Visa Services</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#d4af37] sm:block" />
            <span>International Flights</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#d4af37] sm:block" />
            <span>Umrah Packages</span>
            <span className="hidden h-1 w-1 rounded-full bg-[#d4af37] xl:block" />
            <span className="hidden xl:block">Worldwide Travel Solutions</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#contact"
              className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#d4af37] px-8 py-4 text-[11px] font-bold tracking-widest text-[#050505] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#e6cc80] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] uppercase w-full sm:w-auto"
            >
              <span>Plan Your Journey</span>
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a
              href="#services"
              className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[11px] font-bold tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] uppercase w-full sm:w-auto"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator (z-index: 20) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 z-20"
      >
        <span className="text-[9px] font-semibold tracking-[0.3em] text-[#a9b0b8] uppercase">Scroll</span>
        <div className="h-12 w-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent h-full w-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
