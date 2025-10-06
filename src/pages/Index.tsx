import HeroSection from "@/components/HeroSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SocialMediaSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;
