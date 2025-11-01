import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import bannerImage from "@/assets/banner-historias-mente.png";
import guiaNarcisismo from "@/assets/guia-narcisismo.png";
import apagonEmocional from "@/assets/apagon-emocional.png";
import libroApagon from "@/assets/libro-apagon-emocional.png";
import { Download, Sparkles } from "lucide-react";

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

const HeroSection = ({ onOpenChat }: { onOpenChat?: () => void }) => {
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

        {/* Formulario de Descarga Gratis */}
        <div className="max-w-5xl mx-auto pt-6 md:pt-8">
          <Card className="card-premium border-golden/30 shadow-golden overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl -z-0"></div>
            
            <CardContent className="p-6 md:p-10 relative z-10">
              <div className="space-y-8">
                {/* Fila superior - Badge, título e imagen del libro */}
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                  <div className="space-y-4 flex-1">
                    {/* Badge de oferta */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-bold text-sm font-apple">OFERTA EXCLUSIVA DE HOY</span>
                    </div>

                    {/* Título principal */}
                    <div className="space-y-3">
                      <h2 className="text-3xl md:text-4xl font-extrabold golden-text font-apple leading-tight">
                        Descarga tu Muestra GRATIS
                      </h2>
                      <p className="text-xl md:text-2xl font-bold text-foreground font-apple">
                        del Libro Apagón Emocional
                      </p>
                      <p className="text-base md:text-lg text-muted-foreground font-apple">
                        Descubre los primeros pasos hacia tu libertad emocional. Solo por hoy.
                      </p>
                    </div>
                  </div>

                  {/* Imagen del libro - más pequeña al lado */}
                  <div className="flex justify-center animate-fade-in">
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-gradient-to-r from-golden via-amber-400 to-golden rounded-2xl opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
                      <img 
                        src={libroApagon} 
                        alt="Libro Apagón Emocional"
                        className="relative w-48 md:w-56 h-auto rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-300 ring-2 ring-golden/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Formulario de Airtable - Ancho completo */}
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden">
                    <style dangerouslySetInnerHTML={{__html: `
                      .airtable-embed-container {
                        background: transparent !important;
                      }
                      .airtable-embed {
                        background: transparent !important;
                      }
                      .airtable-embed iframe {
                        background: transparent !important;
                      }
                      /* Formato horizontal - más ancho y menos alto */
                      @media (max-width: 640px) {
                        .airtable-embed {
                          min-height: 320px !important;
                        }
                      }
                    `}} />
                    <iframe 
                      className="airtable-embed w-full h-[300px] sm:h-[320px] md:h-[340px] bg-transparent border-0"
                      src="https://airtable.com/embed/appnoVJ3z22gyaX9p/pagwkR4Bs7DJaxpiO/form"
                      width="100%"
                      height="340"
                      style={{ background: 'transparent', border: 'none' }}
                      title="Formulario de descarga del libro Apagón Emocional"
                    />
                  </div>

                  {/* Call to action adicional */}
                  <div className="flex items-center gap-3 text-muted-foreground text-sm font-apple justify-center">
                    <Download className="w-5 h-5 text-golden" />
                    <p>Completa el formulario y recibe tu muestra instantáneamente</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Test Narcisismo Section */}
        <div className="flex flex-col gap-6 justify-center items-center pt-6 md:pt-8">
          {/* Textos persuasivos */}
          <div className="text-center space-y-3 max-w-2xl mx-auto py-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold golden-text font-apple leading-tight animate-pulse">
              TE DIREMOS SI TU PAREJA ES NARCISISTA
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-apple">
              Rellena el cuestionario y lo descubrirás
            </p>
          </div>

          {/* Secondary CTA - Test Narcisismo */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-golden via-golden-light to-golden rounded-xl opacity-30 blur-lg animate-pulse"></div>
            
            <Button 
              onClick={onOpenChat}
              size="lg"
              className="relative px-8 py-6 text-lg font-semibold rounded-xl font-apple min-w-[280px] bg-gradient-to-r from-golden to-golden-light hover:from-golden-light hover:to-golden text-black shadow-golden ring-2 ring-golden/70 hover:ring-golden transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-golden/70"
            >
              Averigua si él es el narcisista
            </Button>
          </div>
        </div>

        {/* Libros Exclusivos */}
        <div className="w-full pt-8 md:pt-12">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guía Narcisismo */}
            <Card className="card-premium hover-lift group cursor-pointer border-golden/20 hover:border-golden/40 animate-scale-in relative overflow-hidden">
              <div className="absolute top-6 right-0 z-10 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-2 shadow-golden transform rotate-3">
                <p className="font-bold text-sm md:text-base font-apple tracking-wide">
                  <span className="font-extrabold">LIBRO</span> - TU LIBERACIÓN COMIENZA AQUÍ
                </p>
              </div>
              <CardContent className="p-6 md:p-8">
                <a 
                  href="https://libronarcisimo.historiasdelamente.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-4"
                  aria-label="Guía Definitiva para Salir del Narcisismo"
                >
                  <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-golden ring-2 ring-amber-300/50 group-hover:ring-amber-200 transition-all duration-300">
                    <img 
                      src={guiaNarcisismo} 
                      alt="Guía Definitiva para Salir del Narcisismo"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center space-y-2 pt-2">
                    <h3 className="text-xl md:text-2xl font-bold golden-text font-apple">
                      Guía Definitiva para Salir del Narcisismo
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-apple">
                      Transforma tu vida con las herramientas definitivas para liberarte
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* Apagón Emocional */}
            <Card className="card-premium hover-lift group cursor-pointer border-golden/20 hover:border-golden/40 animate-scale-in relative overflow-hidden" style={{ animationDelay: "100ms" }}>
              <div className="absolute top-6 right-0 z-10 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-2 shadow-golden transform rotate-3">
                <p className="font-bold text-sm md:text-base font-apple tracking-wide">
                  <span className="font-extrabold">LIBRO</span> - SANACIÓN PROFUNDA, NUEVO COMIENZO
                </p>
              </div>
              <CardContent className="p-6 md:p-8">
                <a 
                  href="https://apagonemocional.historiasdelamente.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-4"
                  aria-label="Apagón Emocional - Contacto Cero"
                >
                  <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-golden ring-2 ring-amber-300/50 group-hover:ring-amber-200 transition-all duration-300">
                    <img 
                      src={apagonEmocional} 
                      alt="Apagón Emocional - Contacto Cero"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center space-y-2 pt-2">
                    <h3 className="text-xl md:text-2xl font-bold golden-text font-apple">
                      Apagón Emocional
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground font-apple">
                      Transforma tu vida con la guía definitiva para sanar y avanzar
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;