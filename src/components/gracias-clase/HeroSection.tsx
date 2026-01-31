import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative px-5 py-16 md:py-20"
      style={{ background: '#000000' }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Broken Hearts */}
        <div className="absolute top-[10%] left-[5%] text-6xl opacity-10 text-[#1a1a1a] animate-float-slow">💔</div>
        <div className="absolute top-[20%] right-[8%] text-5xl opacity-10 text-[#1a1a1a] animate-float-slow" style={{ animationDelay: '1s' }}>💔</div>
        <div className="absolute bottom-[30%] left-[10%] text-4xl opacity-10 text-[#1a1a1a] animate-float-slow" style={{ animationDelay: '2s' }}>💔</div>
        <div className="absolute bottom-[20%] right-[5%] text-7xl opacity-10 text-[#1a1a1a] animate-float-slow" style={{ animationDelay: '1.5s' }}>💔</div>
        
        {/* Chains */}
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/20 to-transparent"></div>
        <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/20 to-transparent"></div>
      </div>

      {/* Logo */}
      <Link to="/" className="mb-8 animate-fade-in">
        <h1 
          className="text-2xl md:text-4xl font-black uppercase tracking-[4px] md:tracking-[6px] text-center"
          style={{ color: '#FFD700' }}
        >
          APEGO DETOX
        </h1>
      </Link>

      {/* Divider */}
      <div 
        className="w-24 h-0.5 mb-10 opacity-50 animate-fade-in"
        style={{ background: '#FFD700', animationDelay: '0.1s' }}
      ></div>

      {/* Headline 1 */}
      <h2 
        className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center mb-6 leading-tight animate-fade-in"
        style={{ color: '#FFFFFF', animationDelay: '0.2s' }}
      >
        OTRA VEZ ESTÁS AQUÍ<br />
        BUSCANDO LA SALIDA
      </h2>

      {/* Headline 2 - Devastadora */}
      <h3 
        className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-center mb-8 leading-tight animate-fade-in animate-text-glow"
        style={{ 
          color: '#FFD700',
          textShadow: '0 0 30px rgba(255,215,0,0.4), 0 0 60px rgba(255,215,0,0.2)',
          letterSpacing: '2px',
          animationDelay: '0.3s'
        }}
      >
        ¿CUÁNTAS VECES MÁS<br />
        VAS A LLORAR<br />
        POR EL MISMO PATRÓN?
      </h3>

      {/* Subheadline */}
      <p 
        className="text-lg md:text-xl font-medium text-center mb-12 max-w-2xl leading-relaxed animate-fade-in"
        style={{ color: '#E5E5E5', animationDelay: '0.4s' }}
      >
        La clase empieza en minutos. No te quedes afuera.<br />
        Tu acceso está a <strong style={{ color: '#FFD700' }}>UN MENSAJE</strong> de distancia.
      </p>

      {/* WhatsApp CTA */}
      <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <WhatsAppButton />
      </div>

      {/* Micro-copy */}
      <p 
        className="text-base md:text-lg font-bold text-center mt-6 animate-fade-in"
        style={{ 
          color: '#FFD700',
          textShadow: '0 2px 10px rgba(255,215,0,0.3)',
          animationDelay: '0.6s'
        }}
      >
        👆 Toca el botón y te envío el enlace en segundos
      </p>
    </section>
  );
};

export default HeroSection;
