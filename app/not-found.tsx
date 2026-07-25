import Link from "next/link";
import { IconArrowRight } from "./components/Icons";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-[#050505] selection:bg-[#d4af37]/30 selection:text-white">
      <div className="relative">
        <h1 className="text-8xl sm:text-9xl font-bold text-white/5 tracking-tighter select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white drop-shadow-2xl">
            Lost in Transit
          </h2>
        </div>
      </div>
      
      <p className="mt-8 text-base text-[#a9b0b8] max-w-md mx-auto leading-relaxed">
        It seems the destination you&apos;re looking for has been moved or doesn&apos;t exist. Let&apos;s get you back on the right path.
      </p>

      <div className="mt-10">
        <Link
          href="/"
          className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#d4af37] px-8 py-4 text-[11px] font-bold tracking-widest text-[#050505] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#e6cc80] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] uppercase"
        >
          <span>Return Home</span>
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
