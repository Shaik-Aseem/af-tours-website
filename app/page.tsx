import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Navbar from "./components/Navbar";
import {
  ContactSection,
  Footer,
  GallerySection,
  HeroSection,
  PopularVisaSection,
  ReviewsSection,
  ServicesSection,
} from "./components/Sections";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PopularVisaSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

