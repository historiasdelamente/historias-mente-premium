import { useEffect } from "react";
import logo from "@/assets/logo-historias-mente.png";

const W = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-golden/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-golden/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="absolute top-40 left-32 w-1.5 h-1.5 bg-golden/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-40 right-40 w-2.5 h-2.5 bg-golden/35 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-golden/50 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen py-8 px-4">
        {/* Logo with glow effect */}
        <div className="mb-6 relative group">
          <div className="absolute inset-0 bg-golden/20 blur-xl rounded-full scale-110 group-hover:bg-golden/30 transition-all duration-500" />
          <img 
            src={logo} 
            alt="Historias de la Mente" 
            className="w-32 md:w-40 h-auto relative z-10 drop-shadow-lg"
          />
        </div>

        {/* Title section */}
        <div className="text-center mb-6 space-y-3">
          <div className="inline-block px-4 py-1.5 border border-golden/30 rounded-full bg-golden/5 backdrop-blur-sm">
            <span className="text-golden text-xs md:text-sm font-medium tracking-widest uppercase">
              Acceso Exclusivo
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground">
            El <span className="golden-text">Secreto</span> de Historias de la Mente
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            Completa el formulario para desbloquear contenido exclusivo
          </p>
        </div>

        {/* Form container with decorative border */}
        <div className="w-full max-w-3xl relative">
          {/* Decorative corners */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-golden/50 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-golden/50 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-golden/50 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-golden/50 rounded-br-lg" />
          
          {/* Main card */}
          <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-4 md:p-6 shadow-2xl shadow-golden/5">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-golden/5 to-transparent pointer-events-none" />
            
            {/* Airtable iframe */}
            <div className="relative rounded-lg overflow-hidden bg-white/5">
              <iframe 
                className="airtable-embed w-full rounded-lg"
                src="https://airtable.com/embed/apppzqZl923asDFrr/pag0eOC6CkrJI6A55/form"
                frameBorder="0"
                width="100%"
                height="600"
                style={{ 
                  background: 'transparent',
                  minHeight: '600px'
                }}
                title="Formulario Historias de la Mente"
              />
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-8 flex items-center gap-3 text-muted-foreground/60 text-xs">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-golden/30 to-transparent" />
          <span className="tracking-wider">HISTORIAS DE LA MENTE</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-golden/30 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default W;
