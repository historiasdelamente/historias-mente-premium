import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, Smartphone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Add keyframes for animations
const styles = `
  @keyframes pulse-glow {
    0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(255,210,0,0.5), 0 10px 40px rgba(255,210,0,0.4); }
    50% { transform: scale(1.03); box-shadow: 0 0 80px rgba(255,210,0,0.7), 0 15px 50px rgba(255,210,0,0.5); }
  }
  @keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const GraciasClaseMeet = () => {
  const whatsappUrl = "https://wa.me/573137089920?text=Quiero%20ir%20a%20la%20clase%20de%20apego";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Inject animation styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div 
      className="min-h-screen"
      style={{ 
        fontFamily: "'Inter', sans-serif",
        background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)'
      }}
    >
      {/* Subtle texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* HEADER MINIMAL */}
      <header className="relative z-10 py-6 px-5">
        <div className="max-w-[600px] mx-auto text-center">
          <Link to="/">
            <span 
              className="text-xl font-bold tracking-wide"
              style={{ 
                color: '#FFD200',
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '0.1em'
              }}
            >
              APEGO DETOX
            </span>
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-8 pb-12 px-5">
        <div className="max-w-[600px] mx-auto text-center">
          
          {/* Decorative element */}
          <div 
            className="w-16 h-1 mx-auto mb-8 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #FFD200, transparent)' }}
          />

          {/* URGENT BANNER */}
          <div 
            className="mb-8 py-3 px-6 rounded-full inline-flex items-center gap-2 animate-pulse"
            style={{ 
              background: 'rgba(239,68,68,0.2)',
              border: '1px solid rgba(239,68,68,0.4)'
            }}
          >
            <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" style={{ animationDuration: '1.5s' }} />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wide">
              La clase está EN VIVO ahora
            </span>
          </div>

          {/* H1 Emotional */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ¡Ya estás registrada!<br />
            <span style={{ color: '#FFD200' }}>INGRESA YA A LA CLASE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-[500px] mx-auto">
            No esperes más. La clase está empezando.<br />
            <strong className="text-white">Haz clic y entra ahora mismo.</strong>
          </p>

          {/* CTA DISRUPTIVO - ENTRAR A LA CLASE */}
          <a 
            href="https://historiasdelamente.com/clase-apegodetox"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-3 w-full max-w-[420px] py-6 px-10 rounded-2xl text-black font-black text-xl uppercase tracking-wide transition-all duration-300 hover:scale-105 active:scale-[0.98] overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #FFD200 0%, #FFEA00 50%, #FFD200 100%)',
              boxShadow: '0 0 60px rgba(255,210,0,0.5), 0 10px 40px rgba(255,210,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
              animation: 'pulse-glow 1.5s ease-in-out infinite'
            }}
          >
            {/* Shine effect */}
            <span 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 50%, transparent 60%)',
                animation: 'shine 2s infinite'
              }}
            />
            <span className="relative z-10">🚀 ENTRAR A LA CLASE AHORA</span>
          </a>

          <p className="mt-4 text-white/70 text-sm">
            👆 Toca el botón y entra directo a la clase
          </p>

          {/* Divider */}
          <div className="my-10 flex items-center gap-4 max-w-[400px] mx-auto">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/40 text-xs uppercase tracking-widest">o también</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* CTA Secundario WhatsApp */}
          <p className="text-white/60 text-sm mb-4">¿Prefieres confirmar por WhatsApp?</p>
          <a 
            id="cta-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full max-w-[400px] py-5 px-8 rounded-2xl text-black font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ 
              background: 'linear-gradient(135deg, #FFD200 0%, #FFC000 100%)',
              boxShadow: '0 8px 32px rgba(255,210,0,0.3), 0 0 0 1px rgba(255,210,0,0.1)',
            }}
          >
            <MessageCircle className="w-6 h-6" />
            Quiero ir a la clase de apego
          </a>

          {/* Micro-instructions */}
          <div 
            className="mt-6 p-4 rounded-xl max-w-[450px] mx-auto"
            style={{ 
              background: 'rgba(255,210,0,0.08)',
              border: '1px solid rgba(255,210,0,0.15)'
            }}
          >
            <p className="text-sm text-white/90 leading-relaxed">
              <span className="font-semibold" style={{ color: '#FFD200' }}>Paso 1:</span> Toca el botón de WhatsApp.<br />
              <span className="font-semibold" style={{ color: '#FFD200' }}>Paso 2:</span> Revisa tu correo (Inbox / Promociones / Spam) para ver el enlace.
            </p>
          </div>

          {/* Fallback note */}
          <p className="mt-4 text-xs text-white/50">
            Si no se abre WhatsApp, guarda este número: <span className="text-white/70">+57 313 708 9920</span>
          </p>
        </div>
      </section>

      {/* BLOQUE "ENTRA EN 30 SEGUNDOS" */}
      <section className="relative z-10 py-12 px-5">
        <div className="max-w-[500px] mx-auto">
          <div 
            className="rounded-3xl p-6 md:p-8"
            style={{ 
              background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            <h2 
              className="text-xl md:text-2xl font-bold text-white text-center mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Entra en <span style={{ color: '#FFD200' }}>30 segundos</span>
            </h2>

            <div className="space-y-5">
              {/* Paso 1 */}
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,210,0,0.15)', border: '1px solid rgba(255,210,0,0.3)' }}
                >
                  <MessageCircle className="w-5 h-5" style={{ color: '#FFD200' }} />
                </div>
                <div>
                  <p className="text-white font-medium">Toca el botón de WhatsApp</p>
                  <p className="text-sm text-white/60">El mensaje ya está listo</p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,210,0,0.15)', border: '1px solid rgba(255,210,0,0.3)' }}
                >
                  <Smartphone className="w-5 h-5" style={{ color: '#FFD200' }} />
                </div>
                <div>
                  <p className="text-white font-medium">Envía el mensaje para confirmar</p>
                  <p className="text-sm text-white/60">Solo presiona enviar</p>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(255,210,0,0.15)', border: '1px solid rgba(255,210,0,0.3)' }}
                >
                  <Mail className="w-5 h-5" style={{ color: '#FFD200' }} />
                </div>
                <div>
                  <p className="text-white font-medium">Abre tu correo y entra con el enlace</p>
                  <p className="text-sm text-white/60">El acceso llegará automáticamente</p>
                </div>
              </div>
            </div>

            {/* Reminder */}
            <div 
              className="mt-6 py-3 px-4 rounded-xl text-center"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
            >
              <p className="text-sm text-red-300">
                ⚠️ Revisa: <strong>Principal</strong>, <strong>Promociones</strong> y <strong>Spam</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE EMOCIONAL */}
      <section className="relative z-10 py-12 px-5">
        <div className="max-w-[500px] mx-auto text-center">
          
          <h2 
            className="text-xl md:text-2xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Si estás aquí, es porque ya no puedes con <span style={{ color: '#FFD200' }}>lo mismo.</span>
          </h2>

          <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
            <p>Esa ansiedad por mirar el celular.</p>
            <p>Esa culpa que te hace dudar de ti.</p>
            <p>Ese impulso de volver, aunque sabes que te rompe.</p>
            <p className="text-white font-medium pt-2">
              Hoy no estás pidiendo fuerza.<br />
              <span style={{ color: '#FFD200' }}>Estás pidiendo una salida.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECUNDARIO */}
      <section className="relative z-10 py-8 px-5">
        <div className="max-w-[500px] mx-auto text-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full max-w-[400px] py-5 px-8 rounded-2xl text-black font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ 
              background: 'linear-gradient(135deg, #FFD200 0%, #FFC000 100%)',
              boxShadow: '0 8px 32px rgba(255,210,0,0.3), 0 0 0 1px rgba(255,210,0,0.1)',
            }}
          >
            <MessageCircle className="w-6 h-6" />
            Quiero ir a la clase de apego
          </a>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="relative z-10 py-12 px-5">
        <div className="max-w-[500px] mx-auto">
          <h3 
            className="text-lg font-semibold text-white/80 text-center mb-6"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Preguntas frecuentes
          </h3>

          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem 
              value="item-1" 
              className="rounded-xl overflow-hidden"
              style={{ 
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              <AccordionTrigger 
                className="px-5 py-4 text-left text-white hover:no-underline hover:bg-white/[0.02] transition-colors"
              >
                ¿Dónde me llega el acceso?
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-white/70">
                A tu correo después de confirmar por WhatsApp.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-2" 
              className="rounded-xl overflow-hidden"
              style={{ 
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              <AccordionTrigger 
                className="px-5 py-4 text-left text-white hover:no-underline hover:bg-white/[0.02] transition-colors"
              >
                ¿No veo el correo?
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-white/70">
                Busca "Apego Detox" y revisa las carpetas Promociones y Spam.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-3" 
              className="rounded-xl overflow-hidden"
              style={{ 
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              <AccordionTrigger 
                className="px-5 py-4 text-left text-white hover:no-underline hover:bg-white/[0.02] transition-colors"
              >
                ¿Puedo entrar desde el celular?
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-white/70">
                Sí, entra directo desde el enlace del correo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-10 px-5 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Link to="/">
          <span 
            className="text-sm font-semibold"
            style={{ color: '#FFD200', letterSpacing: '0.08em' }}
          >
            APEGO DETOX
          </span>
        </Link>
        <p className="text-xs text-white/40 mt-3 max-w-[400px] mx-auto">
          Contenido educativo. No reemplaza acompañamiento profesional.
        </p>
        <p className="text-xs text-white/30 mt-2">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default GraciasClaseMeet;
