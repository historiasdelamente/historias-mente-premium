import HeroSection from "@/components/HeroSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import { EmbeddedChatWidget } from "@/components/EmbeddedChatWidget";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SocialMediaSection />
      <EmbeddedChatWidget />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;
