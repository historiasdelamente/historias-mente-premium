import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/banner-historias-mente.png";
import { Phone, Play } from "lucide-react";
import { WHATSAPP_COMMUNITY_URL } from "@/config/links";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] md:min-h-screen flex items-center justify-center px-6 py-12 md:py-20 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto text-center space-y-8 md:space-y-12 animate-fade-in">
        {/* Banner Image */}
        <div className="relative max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto">
          <img 
            src={bannerImage} 
            alt="Historias de la Mente - Conferencia exclusiva"
            className="w-full h-auto rounded-xl shadow-golden hover-lift"
          />
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-apple golden-text leading-tight break-words max-w-5xl mx-auto">
            CUANDO EL NARCISISTA TE ROMPE, NO ES EL FINAL… ES TU RENACER
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-3xl md:max-w-4xl mx-auto leading-relaxed font-apple">
            Sé lo que significa llorar en silencio, sentir que tu valor se pierde en manos equivocadas. Pero dentro de ti hay una fuerza intacta, esperando levantarse. Este encuentro es tu oportunidad de romper el ciclo.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-6 md:pt-8">
          {/* Primary CTA */}
          <Button 
            asChild
            size="lg"
            className="btn-cta-primary px-8 py-6 text-lg font-semibold rounded-xl font-apple min-w-[280px] animate-glow-pulse bg-emerald-500 hover:bg-emerald-600 text-black shadow-[0_0_20px_rgba(16,185,129,0.6)] ring-2 ring-emerald-300"
          >
            <a 
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <img src="/mujeres-sanadoras.png" alt="Mujeres Sanadoras" className="w-5 h-5 rounded-full" />
              HÁBLAME PARA RESERVAR HOY
            </a>
          </Button>

          {/* Secondary CTA */}
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="btn-cta-secondary px-8 py-6 text-lg font-semibold rounded-xl font-apple min-w-[280px]"
          >
            <a 
              href="https://kick.com/historiasdelamente"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              ver en vivo en kick
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;