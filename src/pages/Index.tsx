import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import SitelinksSection from "@/components/SitelinksSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import { FloatingChatWidget, FloatingChatWidgetRef } from "@/components/FloatingChatWidget";

const Index = () => {
  const chatWidgetRef = useRef<FloatingChatWidgetRef>(null);

  const handleOpenChat = () => {
    chatWidgetRef.current?.openChat();
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onOpenChat={handleOpenChat} />
      <SitelinksSection />
      <SocialMediaSection />
      <BenefitsSection />
      <Footer />
      <FloatingChatWidget ref={chatWidgetRef} />
    </div>
  );
};

export default Index;
