import { useEffect } from "react";
import HeroSection from "@/components/gracias-clase/HeroSection";
import EmotionalSection from "@/components/gracias-clase/EmotionalSection";
import ValidationSection from "@/components/gracias-clase/ValidationSection";
import StepsSection from "@/components/gracias-clase/StepsSection";
import FinalCTASection from "@/components/gracias-clase/FinalCTASection";
import FooterSection from "@/components/gracias-clase/FooterSection";
import MobileStickyButton from "@/components/gracias-clase/MobileStickyButton";

// Custom animations
const styles = `
  @keyframes whatsapp-pulse {
    0%, 100% {
      box-shadow: 
        0 10px 40px rgba(37,211,102,0.5),
        0 0 60px rgba(37,211,102,0.3);
      transform: scale(1);
    }
    50% {
      box-shadow: 
        0 15px 50px rgba(37,211,102,0.6),
        0 0 80px rgba(37,215,102,0.4);
      transform: scale(1.02);
    }
  }

  @keyframes text-glow {
    0%, 100% {
      text-shadow: 
        0 0 20px rgba(255,215,0,0.3),
        0 0 40px rgba(255,215,0,0.2);
    }
    50% {
      text-shadow: 
        0 0 30px rgba(255,215,0,0.5),
        0 0 60px rgba(255,215,0,0.3),
        0 0 90px rgba(255,215,0,0.2);
    }
  }

  @keyframes float-slow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(3deg); }
    75% { transform: translateY(10px) rotate(-3deg); }
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-whatsapp-pulse {
    animation: whatsapp-pulse 2.5s ease-in-out infinite;
  }

  .animate-text-glow {
    animation: text-glow 3s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: float-slow 8s ease-in-out infinite;
  }

  .animate-fade-in {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }

  /* Mobile sticky padding for content */
  @media (max-width: 768px) {
    main {
      padding-bottom: 100px;
    }
  }
`;

const GraciasClaseMeet = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Inject animation styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    // Track ViewContent event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Thank You - Clase Apego Emocional',
        content_category: 'Lead Magnet',
        content_type: 'landing_page'
      });
    }
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div 
      className="min-h-screen"
      style={{ 
        background: '#000000',
        fontFamily: "'Poppins', 'Montserrat', sans-serif"
      }}
    >
      <main>
        <HeroSection />
        <EmotionalSection />
        <ValidationSection />
        <StepsSection />
        <FinalCTASection />
        <FooterSection />
      </main>

      {/* Mobile Sticky CTA */}
      <MobileStickyButton />
    </div>
  );
};

export default GraciasClaseMeet;
