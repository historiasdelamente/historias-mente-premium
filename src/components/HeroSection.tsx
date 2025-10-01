import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/banner-historias-mente.png";
import guiaNarcisismo from "@/assets/guia-narcisismo.png";
import { Play } from "lucide-react";

// Inline SVG WhatsApp icon to avoid any background artifacts and allow crisp scaling
const WhatsAppLogo = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="waShadow" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#25D366" />
        <stop offset="100%" stopColor="#20BD5A" />
      </linearGradient>
    </defs>
    <circle cx="128" cy="128" r="118" fill="url(#waShadow)" />
    <circle cx="128" cy="128" r="96" fill="#25D366" />
    <path fill="#FFFFFF" d="M175.7 150.3c-2.7-1.4-16-7.9-18.5-8.8-2.5-.9-4.3-1.4-6.1 1.4-1.8 2.7-7 8.8-8.6 10.6-1.6 1.8-3.2 2-5.9.7-2.7-1.4-11.5-4.2-21.9-13.5-8.1-7.2-13.6-16.1-15.2-18.8-1.6-2.7-.2-4.2 1.2-5.5 1.3-1.3 2.7-3.2 4.1-4.8 1.4-1.6 1.8-2.7 2.7-4.5.9-1.8.5-3.4-.2-4.8-.7-1.4-6.1-14.8-8.4-20.2-2.2-5.3-4.5-4.6-6.1-4.7-1.6-.1-3.4-.1-5.2-.1-1.8 0-4.8.7-7.3 3.4-2.5 2.7-9.6 9.4-9.6 22.9 0 13.5 9.8 26.5 11.1 28.3 1.4 1.8 19.2 29.2 46.5 41 6.5 2.8 11.5 4.5 15.5 5.8 6.5 2.1 12.5 1.8 17.2 1.1 5.3-.8 16-6.5 18.2-12.7 2.2-6.2 2.2-11.5 1.5-12.7-.7-1.1-2.5-1.8-5.2-3.2z" />
  </svg>
);

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
              <WhatsAppLogo className="w-10 h-10 transition-transform duration-300 ease-out group-hover:scale-110 shrink-0" />
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

        {/* Guía Práctica CTA */}
        <div className="w-full pt-8 md:pt-12">
          <div className="max-w-2xl mx-auto w-full">
            <a 
              href="https://libronarcisimo.historiasdelamente.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover-lift"
              aria-label="Guía práctica para salir del narcisismo"
            >
              <img 
                src={guiaNarcisismo} 
                alt="Guía práctica para salir del narcisismo - Consigue tu copia ahora"
                className="w-full h-auto rounded-xl shadow-golden ring-2 ring-amber-300/50 hover:ring-amber-200 transition-all duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;