"use client";

import Image from "next/image";
import * as React from "react";
import { LINKS, SITE } from "./site-data";
import { IconPhone, IconWhatsApp } from "./Icons";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081a30]/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-9 w-9 overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10">
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              fill
              sizes="36px"
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white/90 sm:inline">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={LINKS.callNow}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
          >
            <IconPhone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b88b1f] px-4 py-2 text-sm font-semibold text-[#0b1f3a] shadow-[0_10px_30px_-12px_rgba(212,175,55,0.6)] transition hover:brightness-110"
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white/90 transition hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#081a30]/80 backdrop-blur md:hidden">
          <div className="container py-4">
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={LINKS.callNow}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <IconPhone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b88b1f] px-4 py-3 text-sm font-semibold text-[#0b1f3a] transition hover:brightness-110"
                onClick={() => setOpen(false)}
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

