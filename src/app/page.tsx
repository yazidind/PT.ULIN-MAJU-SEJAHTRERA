import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PendahuluanSection from "@/components/PendahuluanSection";
import ProfilSection from "@/components/ProfilSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import OrgStructureSection from "@/components/OrgStructureSection";
import LegalitySection from "@/components/LegalitySection";
import GallerySection from "@/components/GallerySection";
import PenutupSection from "@/components/PenutupSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] dark:bg-[#08131D] text-[#0F2537] dark:text-white transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <PendahuluanSection />
      <ProfilSection />
      <VisionMissionSection />
      <ValuesSection />
      <ServicesSection />
      <AdvantagesSection />
      <OrgStructureSection />
      <LegalitySection />
      <GallerySection />
      <PenutupSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsapp />
      <ScrollToTop />
    </main>
  );
}
