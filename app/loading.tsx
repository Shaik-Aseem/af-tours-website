"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505]">
      {/* Premium Loader Animation */}
      <div className="relative flex flex-col items-center gap-8">
        <div className="relative h-16 w-16">
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-[#d4af37] opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-r-2 border-[#d4af37] opacity-40"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-b-2 border-white opacity-80"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#d4af37] uppercase">
            AF Tours & Travels
          </span>
          <span className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase animate-pulse">
            Preparing your journey...
          </span>
        </motion.div>
      </div>
    </div>
  );
}
