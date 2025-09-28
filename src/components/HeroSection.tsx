import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/banner-historias-mente.png";
import { Play } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

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
            className="btn-cta-primary px-8 py-6 text-lg font-semibold rounded-xl font-apple min-w-[280px] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black shadow-[0_6px_24px_rgba(251,191,36,0.45)] ring-2 ring-amber-300/70 hover:ring-amber-200 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300/70"
          >
            <a 
              href="https://wa.me/573044737168?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20del%20Taller%20del%20Apego."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reserva por WhatsApp hoy"
              title="Reserva por WhatsApp hoy"
              className="group flex items-center gap-3"
            >
              <img 
                src={whatsappIcon} 
                alt="WhatsApp" 
                className="w-7 h-7 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
              />
              <span className="tracking-tight">Reserva por WhatsApp hoy</span>
            </a>
          </Button>
        </div>
        {/* Video Embed */}
        <div className="w-full pt-4 md:pt-6">
          <div className="max-w-3xl mx-auto w-full">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-golden ring-2 ring-amber-300/50">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/rk3UpCY5CGM?si=-7byeWC2TlxF7Fzt"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;