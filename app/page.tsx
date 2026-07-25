
import HeroSection from "./components/sections/HeroSection";
import FounderSection from "./components/sections/FounderSection";
import ServicesSection from "./components/sections/ServicesSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import DestinationsSection from "./components/sections/DestinationsSection";
import ReviewsSection from "./components/sections/ReviewsSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#d4af37]/30 selection:text-white">
      <main>
        <HeroSection />
        <FounderSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <DestinationsSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}
