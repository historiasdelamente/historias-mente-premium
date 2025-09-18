import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/banner-historias-mente.png";
import { Phone, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto text-center space-y-12 animate-fade-in">
        {/* Banner Image */}
        <div className="relative max-w-4xl mx-auto">
          <img 
            src={bannerImage} 
            alt="Historias de la Mente - Conferencia exclusiva"
            className="w-full h-auto rounded-xl shadow-golden hover-lift"
          />
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-apple golden-text leading-tight">
            Historias de la Mente
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-apple">
            Descubre los secretos de la mente humana en nuestra conferencia exclusiva
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          {/* Primary CTA */}
          <Button 
            asChild
            size="lg"
            className="btn-cta-primary px-8 py-6 text-lg font-semibold rounded-xl font-apple min-w-[280px] animate-glow-pulse"
          >
            <a 
              href="https://wa.me/573044737168?text=Taller%20gratis%3A%20dejar%20al%20narcisista"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              INSCRÍBETE GRATIS AHORA
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
              Únete en Vivo en KICK
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;