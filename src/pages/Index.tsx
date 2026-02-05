import { useRef } from "react";
 import NewHeroSection from "@/components/landing/NewHeroSection";
 import QuestionnaireBanner from "@/components/landing/QuestionnaireBanner";
 import ApegoDetoxSection from "@/components/landing/ApegoDetoxSection";
 import BooksGrid from "@/components/landing/BooksGrid";
 import SocialIconBar from "@/components/landing/SocialIconBar";
import Footer from "@/components/Footer";
import { FloatingChatWidget, FloatingChatWidgetRef } from "@/components/FloatingChatWidget";

const Index = () => {
  const chatWidgetRef = useRef<FloatingChatWidgetRef>(null);

  const handleOpenChat = () => {
    chatWidgetRef.current?.openChat();
  };

  return (
    <div className="min-h-screen bg-background">
       <NewHeroSection onOpenChat={handleOpenChat} />
       <QuestionnaireBanner onOpenChat={handleOpenChat} />
       <ApegoDetoxSection />
       <BooksGrid />
       <SocialIconBar />
      <Footer />
      <FloatingChatWidget ref={chatWidgetRef} />
    </div>
  );
};

export default Index;
