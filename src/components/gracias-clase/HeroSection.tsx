import WhatsAppButton from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section 
      className="min-h-[85vh] flex flex-col items-center justify-center relative px-4 py-10 md:py-16"
      style={{ background: '#000000' }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-4xl opacity-10 text-[#1a1a1a] animate-float-slow">💔</div>
        <div className="absolute top-[20%] right-[8%] text-3xl opacity-10 text-[#1a1a1a] animate-float-slow" style={{ animationDelay: '1s' }}>💔</div>
        <div className="absolute bottom-[30%] left-[10%] text-3xl opacity-10 text-[#1a1a1a] animate-float-slow" style={{ animationDelay: '2s' }}>💔</div>
        <div className="absolute bottom-[20%] right-[5%] text-5xl opacity-10 text-[#1a1a1a] animate-float-slow" style={{ animationDelay: '1.5s' }}>💔</div>
        
        {/* Chains */}
        <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/20 to-transparent"></div>
        <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/20 to-transparent"></div>
      </div>

      {/* Confirmation Badge */}
      <div 
        className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-bold uppercase tracking-wider animate-fade-in"
        style={{ 
          background: 'rgba(37,211,102,0.15)',
          border: '2px solid #25D366',
          color: '#25D366',
          animationDelay: '0.1s'
        }}
      >
        ✓ REGISTRO CONFIRMADO
      </div>

      {/* Headline 1 - Thank you */}
      <h2 
        className="text-lg md:text-2xl font-bold uppercase text-center mb-3 leading-tight animate-fade-in"
        style={{ color: '#FFFFFF', animationDelay: '0.15s' }}
      >
        ¡GRACIAS POR INSCRIBIRTE!<br />
        YA ESTÁS DENTRO
      </h2>

      {/* Headline 2 - Transformation */}
      <h3 
        className="text-xl md:text-3xl font-black uppercase text-center mb-4 leading-tight animate-fade-in animate-text-glow"
        style={{ 
          color: '#FFD700',
          textShadow: '0 0 30px rgba(255,215,0,0.4), 0 0 60px rgba(255,215,0,0.2)',
          letterSpacing: '1px',
          animationDelay: '0.2s'
        }}
      >
        TU TRANSFORMACIÓN<br />
        EMPIEZA AHORA
      </h3>

      {/* Subheadline */}
      <p 
        className="text-sm md:text-lg font-medium text-center mb-5 max-w-md leading-relaxed animate-fade-in"
        style={{ color: '#E5E5E5', animationDelay: '0.3s' }}
      >
        La clase está lista. Solo falta <strong style={{ color: '#FFD700' }}>UN CLIC</strong><br />
        para recibir tu enlace de acceso.
      </p>

      {/* WhatsApp CTA */}
      <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <WhatsAppButton />
      </div>

      {/* Micro-copy */}
      <p 
        className="text-xs md:text-sm font-bold text-center mt-4 animate-fade-in"
        style={{ 
          color: '#FFD700',
          textShadow: '0 2px 10px rgba(255,215,0,0.3)',
          animationDelay: '0.5s'
        }}
      >
        👆 Escríbeme y te envío el enlace
      </p>
    </section>
  );
};

export default HeroSection;
