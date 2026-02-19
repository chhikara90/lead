import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FitSection from "@/components/FitSection";
import ServicesSection from "@/components/ServicesSection";
import TimelineSection from "@/components/TimelineSection";
import RiskReversalSection from "@/components/RiskReversalSection";
import ProofSection from "@/components/ProofSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FitSection />
      <ServicesSection />
      <TimelineSection />
      <RiskReversalSection />
      <ProofSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
