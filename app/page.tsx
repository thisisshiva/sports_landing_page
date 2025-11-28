import { AboutFounder } from "@/components/AboutFounder";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { FeaturedProject } from "@/components/FeaturedProject";
import { TournamentsGrid } from "@/components/TournamentsGrid";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutFounder />
      <ServicesSection />
      <AchievementsSection />
      <FeaturedProject />
      <TournamentsGrid />
      <GallerySection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
