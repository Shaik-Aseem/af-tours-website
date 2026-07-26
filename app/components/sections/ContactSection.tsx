"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { LINKS, SITE, serviceMessages, getWhatsAppUrl, openWhatsApp } from "../../lib/site-data";
import { IconFacebook, IconInstagram, IconMapPin, IconPhone, IconWhatsApp } from "../Icons";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [whatsAppRedirectUrl, setWhatsAppRedirectUrl] = useState<string>("");

  const cardRef = useRef<HTMLDivElement>(null);
  const errorBannerRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
      _gotcha: formData.get("_gotcha"),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");

        // Construct pre-filled WhatsApp text
        const waText = `Hello,\nMy enquiry has been submitted through your website.\n\nName: ${payload.name}\nPhone: ${payload.phone}\nService: ${payload.service}\nMessage: ${payload.message}`;
        const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(waText)}`;
        setWhatsAppRedirectUrl(waUrl);

        // Reset form ONLY on confirmed success
        form.reset();

        // Scroll smoothly to success modal
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

        // Open WhatsApp in a new tab after brief delay
        setTimeout(() => {
          if (typeof window !== "undefined") {
            window.open(waUrl, "_blank", "noopener,noreferrer");
          }
        }, 1200);

        setTimeout(() => {
          setSubmitStatus("idle");
          setWhatsAppRedirectUrl("");
        }, 12000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.error || "Sorry, your enquiry could not be sent. Please check your inputs and try again."
        );
        // Scroll smoothly to error banner without clearing form inputs
        setTimeout(() => {
          errorBannerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    } catch (err: unknown) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Sorry, your enquiry could not be sent. Please check your network connection and try again."
      );
      setTimeout(() => {
        errorBannerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0F1115] border-t border-white/[0.04] overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          
          {/* Left Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-10"
          >
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#d4af37] uppercase mb-4">
                Connect With Us
              </p>
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl mb-6">
                Start Your Journey
              </h2>
              <p className="text-sm leading-relaxed text-[#a9b0b8]">
                Reach out to our dedicated travel consultants. We aim to respond to all inquiries within 30 minutes during business hours.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={getWhatsAppUrl(serviceMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp(serviceMessages.general);
                }}
                className="group flex items-center gap-4 p-5 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-[#25D366]/30 hover:shadow-[0_15px_30px_rgba(37,211,102,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] cursor-pointer"
                aria-label="Contact AF Tours on WhatsApp Direct"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] ring-1 ring-[#25D366]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-black">
                  <IconWhatsApp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase mb-1">WhatsApp Direct</p>
                  <p className="text-base font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#25D366]">+{SITE.whatsappNumber}</p>
                </div>
              </a>

              <a
                href={LINKS.callNow}
                className="group flex items-center gap-4 p-5 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-white/20 hover:shadow-[0_15px_30px_rgba(255,255,255,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                aria-label="Direct Phone Call to AF Tours"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 text-white ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase mb-1">Direct Call</p>
                  <p className="text-base font-medium tracking-tight text-white transition-colors duration-300">{SITE.phoneDisplay}</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-[#E1306C]/30 hover:shadow-[0_15px_30px_rgba(225,48,108,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C]"
                  aria-label="Visit Instagram Profile"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E1306C]/10 text-[#E1306C] ring-1 ring-[#E1306C]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#E1306C] group-hover:text-white">
                    <IconInstagram className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase mb-0.5">Instagram</p>
                    <p className="text-xs font-medium tracking-tight text-white truncate transition-colors duration-300 group-hover:text-[#E1306C]">Instagram Profile</p>
                  </div>
                </a>

                <a
                  href={LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-2xl glass-card transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-[#1877F2]/30 hover:shadow-[0_15px_30px_rgba(24,119,242,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]"
                  aria-label="Visit Facebook Page"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] ring-1 ring-[#1877F2]/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#1877F2] group-hover:text-white">
                    <IconFacebook className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold tracking-widest text-[#a9b0b8] uppercase mb-0.5">Facebook</p>
                    <p className="text-xs font-medium tracking-tight text-white truncate transition-colors duration-300 group-hover:text-[#1877F2]">Facebook Page</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Compact Map Embed */}
            <div className="relative h-[250px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050505] group">
              <div className="absolute inset-0 bg-[#050505] flex items-center justify-center flex-col z-0">
                <IconMapPin className="w-8 h-8 text-[#d4af37]/30 mb-3 animate-pulse" />
                <p className="text-[9px] text-[#a9b0b8] font-semibold tracking-[0.2em] uppercase">Loading Map...</p>
              </div>
              <iframe
                title="AF Tours & Travels location map"
                className="absolute inset-0 h-full w-full z-10 opacity-70 mix-blend-luminosity grayscale transition-all duration-1000 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=D.No:+20/492-5,+Nawab+Complex,+Near+Krishna+Circle,+Opp.+Sai+Baba+Cycle+Mart,+Kadapa+-+516003&z=17&output=embed"
                style={{ border: 0 }}
                allowFullScreen
              />
              <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div 
              ref={cardRef}
              className="relative p-8 sm:p-12 rounded-[2rem] glass-card border border-white/10 bg-[#0F1115]/80 backdrop-blur-xl shadow-2xl"
            >
              <h3 className="text-2xl font-medium tracking-tight text-white mb-8">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-semibold tracking-widest text-[#a9b0b8] uppercase">Full Name *</label>
                    <input 
                      required 
                      type="text" 
                      id="name" 
                      name="name" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 transition-all" 
                      placeholder="John Doe" 
                      disabled={isSubmitting}
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-semibold tracking-widest text-[#a9b0b8] uppercase">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 transition-all" 
                      placeholder="john@example.com" 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] font-semibold tracking-widest text-[#a9b0b8] uppercase">Phone / WhatsApp *</label>
                    <input 
                      required 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 transition-all" 
                      placeholder="+91 99999 99999" 
                      disabled={isSubmitting}
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-[10px] font-semibold tracking-widest text-[#a9b0b8] uppercase">Service Required *</label>
                    <select 
                      required 
                      id="service" 
                      name="service" 
                      className="w-full bg-[#15181E] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 transition-all cursor-pointer"
                      disabled={isSubmitting}
                      aria-required="true"
                    >
                      <option value="">Select a service</option>
                      <option value="UAE Visa">UAE Tourist Visa</option>
                      <option value="Kuwait Visa">Kuwait Visa Stamping</option>
                      <option value="Umrah">Umrah Packages</option>
                      <option value="Flights">Flight Booking</option>
                      <option value="Other">Other Travel Assistance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-semibold tracking-widest text-[#a9b0b8] uppercase">Your Message *</label>
                  <textarea 
                    required 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 transition-all resize-none" 
                    placeholder="Tell us about your travel plans..." 
                    disabled={isSubmitting}
                    aria-required="true"
                  />
                </div>

                {/* Honeypot for spam protection */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

                {/* Accessible Error Alert Banner */}
                {submitStatus === "error" && errorMessage && (
                  <div 
                    ref={errorBannerRef}
                    role="alert"
                    aria-live="polite"
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium leading-relaxed"
                  >
                    <p className="font-semibold mb-1">Submission Failed:</p>
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#d4af37] px-8 py-4 text-[11px] font-bold tracking-widest text-[#050505] shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 hover:bg-[#e6cc80] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-70 disabled:cursor-not-allowed uppercase mt-4"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#050505]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Inquiry...
                    </span>
                  ) : (
                    <span>Submit Inquiry</span>
                  )}
                </button>

                {/* Accessible Success Modal Overlay */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      role="status"
                      aria-live="polite"
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center rounded-[2rem] bg-[#0F1115]/95 backdrop-blur-xl border border-[#d4af37]/30"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center mb-4 text-[#d4af37]">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <h4 className="text-2xl font-medium text-white mb-2">Enquiry Sent Successfully</h4>
                      <p className="text-[#a9b0b8] max-w-sm text-sm mb-6">
                        Thank you for reaching out. We have received your request and an email notification has been dispatched to our team.
                      </p>
                      
                      {whatsAppRedirectUrl && (
                        <a
                          href={whatsAppRedirectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#20bd5a] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        >
                          <IconWhatsApp className="w-4 h-4" />
                          <span>Open WhatsApp Chat</span>
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
