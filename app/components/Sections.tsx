import Image from "next/image";
import { LINKS, SITE } from "./site-data";
import {
  IconArrowRight,
  IconMail,
  IconMapPin,
  IconPhone,
  IconStar,
  IconWhatsApp,
} from "./Icons";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-xs font-semibold tracking-[0.25em] text-[#d4af37]/90">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-sm leading-6 text-white/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050c18] text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/terminal.jpg"
          alt="Airport terminal departures board"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020712]/80 via-[#020712]/70 to-[#020712]/90" />
      </div>

      <div className="relative">
        <div className="container flex min-h-[80vh] flex-col items-center justify-center py-24 sm:min-h-screen sm:py-32">
          <div className="max-w-3xl text-center animate-fade-in-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              PREMIUM TRAVEL SERVICES
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your{" "}
              <span className="bg-gradient-to-r from-[#d4af37] to-[#b88b1f] bg-clip-text text-transparent">
                Trusted Travel
              </span>{" "}
              Partner in Kadapa
            </h1>
            <p className="mt-5 text-pretty text-base leading-relaxed text-gray-300 sm:text-lg">
              {SITE.name} helps you with fast visa processing, international
              flights, Umrah packages, and complete travel support — handled
              with care and clear communication.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <a
                href={LINKS.callNow}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b88b1f] px-8 py-4 text-sm font-semibold text-[#0b1f3a] shadow-[0_18px_45px_-22px_rgba(212,175,55,0.9)] transition-transform transition-shadow duration-200 hover:scale-105 hover:shadow-[0_26px_70px_-32px_rgba(212,175,55,1)]"
              >
                <IconPhone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-black/30 px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur transition-transform transition-colors duration-200 hover:scale-105 hover:border-white/60 hover:bg-black/50"
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp Enquiry
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-xs font-semibold text-white/75 sm:grid-cols-3">
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#4ade80]">✔</span>
                Trusted Travel Partner in Kadapa
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#4ade80]">✔</span>
                Fast Visa Processing
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#4ade80]">✔</span>
                24/7 WhatsApp Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "Flight Booking",
      desc: "Domestic & international tickets with smart routing and fare guidance.",
    },
    {
      title: "Visa Assistance",
      desc: "Step-by-step support for documentation and appointment readiness.",
    },
    {
      title: "Umrah Packages",
      desc: "Comfort-focused plans with reliable coordination and support.",
    },
    {
      title: "Hotel Booking",
      desc: "Verified stays with great value, flexible options, and clear details.",
    },
    {
      title: "Travel Insurance",
      desc: "Coverage options that match your destination and travel duration.",
    },
  ] as const;

  return (
    <section id="services" className="scroll-mt-24 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="SERVICES"
          title="Everything you need for a smooth journey"
          description="From bookings to documentation—our services are designed to be fast, transparent, and dependable."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.07] hover:shadow-[0_16px_50px_-35px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b88b1f] text-[#0b1f3a] shadow-[0_14px_35px_-22px_rgba(212,175,55,0.8)]">
                  <IconArrowRight className="h-5 w-5 rotate-[-45deg]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{s.desc}</p>
                </div>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-white/65">
                <span>Premium support</span>
                <span className="text-[#d4af37]/90 transition group-hover:text-[#d4af37]">
                  Learn more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PopularVisaSection() {
  const cards = [
    {
      title: "UAE Tourist Visa Services",
      image: "/photo1.jpeg",
      description: "Hassle-free UAE tourist visa processing with clear guidance.",
    },
    {
      title: "GAMCA Medical Appointment",
      image: "/photo2.jpeg",
      description: "Quick appointment coordination for mandatory GAMCA medical tests.",
    },
    {
      title: "Kuwait Visa Stamping Assistance",
      image: "/photo3.jpeg",
      description: "End-to-end support for Kuwait visa stamping requirements.",
    },
  ] as const;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Popular Visa & Travel Services
          </h2>
          <p className="mt-3 text-pretty text-sm leading-6 text-white/70 sm:text-base">
            Fast, Reliable &amp; Professional Travel Assistance
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-xl bg-[#112240] shadow-[0_18px_45px_-30px_rgba(0,0,0,0.9)] transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-[0_26px_70px_-40px_rgba(0,0,0,1)]"
            >
              <div className="relative h-56 w-full overflow-hidden sm:h-64">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                  priority={card.image === "/photo1.jpeg"}
                />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">
                  {card.title}
                </h3>
                <p className="text-xs leading-5 text-white/70 sm:text-sm">
                  {card.description}
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/918328182055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b88b1f] px-4 py-2 text-xs font-semibold text-[#0b1f3a] shadow-[0_14px_35px_-22px_rgba(212,175,55,0.9)] transition hover:brightness-110"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const destinations = [
    {
      title: "Dubai – Tourist Visa",
      image: "/dubai.jpg",
      tag: "Tourist Visa",
    },
    {
      title: "Kuwait – Visa Stamping",
      image: "/kuwait.jpg",
      tag: "Visa Stamping",
    },
    {
      title: "Mecca – Umrah Packages",
      image: "/mecca.jpg",
      tag: "Umrah",
    },
    {
      title: "International Flights",
      image: "/departure.jpg",
      tag: "Flights",
    },
    {
      title: "Airport Assistance",
      image: "/terminal.jpg",
      tag: "Assistance",
    },
  ] as const;

  return (
    <section id="gallery" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Explore Popular Destinations
          </h2>
          <p className="mt-3 text-pretty text-sm leading-6 text-white/70 sm:text-base">
            International travel, visa services &amp; pilgrimage support
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <article
              key={dest.title}
              className="group overflow-hidden rounded-xl bg-[#112240] shadow-[0_18px_45px_-30px_rgba(0,0,0,0.9)] transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white sm:text-base">
                      {dest.title}
                    </p>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                      {dest.tag}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  const reviews = [
    {
      name: "Ahmed, Kadapa",
      text: "Very professional service. My UAE visa was processed quickly without any issues.",
    },
    {
      name: "Imran",
      text: "Best travel agency in Kadapa. They handled my Kuwait visa stamping smoothly.",
    },
    {
      name: "Sameer",
      text: "Booked Umrah package through them. Everything was perfectly arranged.",
    },
    {
      name: "Riyaz",
      text: "Fast flight booking and good customer support on WhatsApp.",
    },
  ] as const;

  return (
    <section id="reviews" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-pretty text-sm leading-6 text-white/70 sm:text-base">
            Trusted by travelers across Kadapa and beyond
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="rounded-xl bg-[#112240] p-6 text-left shadow-[0_18px_45px_-30px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-1 text-[#d4af37]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-white/80">“{r.text}”</p>
              <p className="mt-4 text-sm font-semibold text-white/90">{r.name}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let’s plan your next trip"
          description="Reach out by phone, WhatsApp, or email. We’ll respond quickly with the next steps."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
              <div className="space-y-4">
              <a
                href={LINKS.callNow}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.07]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-[#d4af37] ring-1 ring-white/10">
                  <IconPhone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/55">
                    PHONE
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {SITE.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-[#25D366]/15 to-transparent p-5 transition hover:from-[#25D366]/20"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#25D366] ring-1 ring-white/10">
                  <IconWhatsApp className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/55">
                    WHATSAPP
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    +{SITE.whatsappNumber}
                  </p>
                </div>
              </a>

              <a
                href={LINKS.email}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/[0.07]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white/90 ring-1 ring-white/10">
                  <IconMail className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/55">
                    EMAIL
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-white/90">
                    {SITE.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white/90 ring-1 ring-white/10">
                  <IconMapPin className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/55">
                    ADDRESS
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/90">
                    {SITE.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between border-b border-white/10 bg-[#081a30]/60 px-5 py-4">
                <p className="text-sm font-semibold text-white/90">
                  Google Maps
                </p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
                  Kadapa
                </span>
              </div>
              <div className="relative w-full overflow-hidden rounded-b-3xl">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title="AF Tours & Travels location map"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=D.No:+20/492-5,+Nawab+Complex,+Near+Krishna+Circle,+Opp.+Sai+Baba+Cycle+Mart,+Kadapa+-+516003&z=17&output=embed"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#081a30]/30">
      <div className="container py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white/90">{SITE.name}</p>
            <p className="mt-1 text-xs text-white/60">{SITE.location}</p>
          </div>
          <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:justify-end sm:gap-4">
            <a
              href={LINKS.callNow}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10"
            >
              <IconPhone className="h-4 w-4" />
              <span>{SITE.phoneDisplay}</span>
            </a>
            <a
              href={LINKS.email}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10"
            >
              <IconMail className="h-4 w-4" />
              <span className="truncate">{SITE.email}</span>
            </a>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b88b1f] px-4 py-2 text-xs font-semibold text-[#0b1f3a] transition hover:brightness-110"
            >
              <IconWhatsApp className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 transition hover:text-white"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

