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
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      >
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />
        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-[#3aa0ff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              Trusted Travel Partner in Kadapa
            </p>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {SITE.name}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
              Premium, hassle-free travel services—flights, visas, Umrah packages,
              hotels, and insurance—handled with care and clear communication.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={LINKS.callNow}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                <IconPhone className="h-4 w-4" />
                Call Now
                <IconArrowRight className="h-4 w-4 opacity-70" />
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#b88b1f] px-6 py-3 text-sm font-semibold text-[#0b1f3a] shadow-[0_16px_40px_-18px_rgba(212,175,55,0.75)] transition hover:brightness-110"
              >
                <IconWhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { k: "Fast support", v: "Quick responses & updates" },
                { k: "Transparent", v: "Clear pricing & guidance" },
                { k: "Local trust", v: "Serving Kadapa & beyond" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-white">{item.k}</p>
                  <p className="mt-1 text-xs leading-5 text-white/65">{item.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[0_20px_70px_-40px_rgba(0,0,0,0.8)]">
              <p className="text-sm font-semibold text-white/90">
                Quick Contact
              </p>
              <p className="mt-2 text-sm text-white/65">
                Call or WhatsApp us for bookings and consultation.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#081a30]/60 p-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-[#d4af37] ring-1 ring-white/10">
                    <IconPhone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-white/60">
                      Phone
                    </p>
                    <p className="truncate text-sm font-semibold text-white/90">
                      {SITE.phoneDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#081a30]/60 p-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-[#25D366] ring-1 ring-white/10">
                    <IconWhatsApp className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-white/60">
                      WhatsApp
                    </p>
                    <p className="truncate text-sm font-semibold text-white/90">
                      +{SITE.whatsappNumber}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#081a30]/60 p-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white/85 ring-1 ring-white/10">
                    <IconMapPin className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-wide text-white/60">
                      Location
                    </p>
                    <p className="truncate text-sm font-semibold text-white/90">
                      {SITE.location}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#d4af37]/15 blur-3xl"
                aria-hidden="true"
              />
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

