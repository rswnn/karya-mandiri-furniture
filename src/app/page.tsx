import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

export default function Home() {
  return (
        <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Carousel/>
        <ServicesSection />
        <PricingSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
