import { useEffect } from "react";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { IntegrationSection } from "@/components/landing/IntegrationSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Interpretable Machine Learning | AI Model Transparency & Explainability";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <IntegrationSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;