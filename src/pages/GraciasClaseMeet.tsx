import { useEffect } from "react";
import { Link } from "react-router-dom";
import mujerWhatsapp from "@/assets/mujer-whatsapp-clase.png";

// WhatsApp link with pre-filled message
const WHATSAPP_URL = "https://wa.me/573137089920?text=Hola%20Javier%2C%20acabo%20de%20inscribirme%20a%20la%20Clase%20Gratuita%20del%20Apego%20Emocional.%20Estoy%20lista%20para%20dar%20el%20primer%20paso%20hacia%20mi%20libertad%20emocional.%20%C2%BFC%C3%B3mo%20accedo%3F%20%F0%9F%92%9C";

// Keyframes for pulse animation
const styles = `
  @keyframes whatsapp-pulse {
    0%, 100% { 
      transform: scale(1); 
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
    }
    50% { 
      transform: scale(1.03); 
      box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
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
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div 
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Main Content */}
      <main className="max-w-[800px] mx-auto px-5 py-10 md:py-16">
        
        {/* Header Logo */}
        <header className="text-center mb-10">
          <Link to="/">
            <span 
              className="text-lg font-bold tracking-wide"
              style={{ 
                color: '#8B5CF6',
                fontFamily: "'Montserrat', sans-serif",
                letterSpacing: '0.08em'
              }}
            >
              APEGO DETOX
            </span>
          </Link>
        </header>

        {/* Title */}
        <h1 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 leading-tight"
          style={{ 
            color: '#8B5CF6',
            fontFamily: "'Playfair Display', serif" 
          }}
        >
          ¿Sentiste que esto era exactamente lo que necesitabas?
        </h1>

        {/* Emotional Text */}
        <div className="space-y-6 mb-10">
          <p 
            className="text-base md:text-lg leading-relaxed text-center"
            style={{ color: '#2D3748' }}
          >
            No eres la única que despertó buscando respuestas... preguntándote por qué sigues atrapada en este patrón de dolor, de vacío, de relaciones que te destruyen.
          </p>

          {/* Validation */}
          <div 
            className="p-6 rounded-2xl"
            style={{ 
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(139, 92, 246, 0.03))',
              border: '1px solid rgba(139, 92, 246, 0.15)'
            }}
          >
            <p 
              className="text-base md:text-lg leading-relaxed text-center"
              style={{ color: '#2D3748' }}
            >
              <strong style={{ color: '#8B5CF6' }}>Sé exactamente cómo te sientes.</strong><br /><br />
              Ese nudo en el estómago cuando ves su nombre. Esa ansiedad que te paraliza cuando no te escribe.<br /><br />
              <span className="font-semibold">Ya diste el primer paso.</span>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-10">
          <img 
            src={mujerWhatsapp} 
            alt="Mujer sosteniendo letrero de WhatsApp para acceder a tu clase"
            className="w-full max-w-[400px] rounded-2xl shadow-lg"
            style={{ 
              boxShadow: '0 10px 40px rgba(139, 92, 246, 0.15)'
            }}
          />
        </div>

        {/* Instructions */}
        <div className="text-center mb-8">
          <p 
            className="text-lg md:text-xl font-semibold mb-2"
            style={{ color: '#2D3748' }}
          >
            🔓 Tu acceso está a un mensaje.
          </p>
          <p 
            className="text-base"
            style={{ color: '#4A5568' }}
          >
            Haz clic, te respondo con el enlace.<br />
            <span className="text-sm">Revisa tu correo: hay un regalo adicional ahí.</span>
          </p>
        </div>

        {/* WhatsApp CTA Button */}
        <div className="flex justify-center mb-12">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 py-5 px-10 rounded-2xl text-white font-bold text-lg md:text-xl transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
            style={{ 
              background: '#25D366',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
              animation: 'whatsapp-pulse 2s ease-in-out infinite'
            }}
          >
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quiero mi acceso ahora 📲
          </a>
        </div>

        {/* Closing */}
        <div 
          className="text-center p-6 rounded-2xl mb-10"
          style={{ 
            background: 'rgba(139, 92, 246, 0.05)',
            border: '1px solid rgba(139, 92, 246, 0.1)'
          }}
        >
          <p 
            className="text-base md:text-lg leading-relaxed"
            style={{ color: '#2D3748' }}
          >
            ⏰ <strong>No dejes que pase otro día.</strong><br />
            El apego te ha robado suficiente.<br /><br />
            📧 Revisa tu correo (y spam) — hay algo especial esperándote.
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer 
        className="py-8 px-5 text-center"
        style={{ borderTop: '1px solid rgba(139, 92, 246, 0.1)' }}
      >
        <Link to="/">
          <span 
            className="text-sm font-semibold"
            style={{ color: '#8B5CF6', letterSpacing: '0.06em' }}
          >
            APEGO DETOX
          </span>
        </Link>
        <p 
          className="text-xs mt-3 max-w-[400px] mx-auto"
          style={{ color: '#718096' }}
        >
          Contenido educativo. No reemplaza acompañamiento profesional.
        </p>
        <p 
          className="text-xs mt-2"
          style={{ color: '#A0AEC0' }}
        >
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default GraciasClaseMeet;
