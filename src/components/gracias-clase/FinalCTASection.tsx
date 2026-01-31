import WhatsAppButton from "./WhatsAppButton";

const FinalCTASection = () => {
  return (
    <section 
      className="py-24 md:py-32 px-5 relative text-center"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)' }}
    >
      {/* Decorative Elements - More intense */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[8%] text-6xl opacity-15 text-[#1a1a1a]">💔</div>
        <div className="absolute top-[20%] right-[5%] text-5xl opacity-15 text-[#1a1a1a]">💔</div>
        <div className="absolute bottom-[30%] left-[3%] text-7xl opacity-15 text-[#1a1a1a]">💔</div>
        <div className="absolute bottom-[15%] right-[10%] text-4xl opacity-15 text-[#1a1a1a]">💔</div>
        
        {/* Chains */}
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-transparent"></div>
        <div className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/30 to-transparent"></div>
        
        {/* Red urgency glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(139,0,0,0.5) 0%, transparent 70%)' }}
        ></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Urgency Text */}
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-center mb-6 leading-tight"
          style={{ 
            color: '#FF4444',
            textShadow: '0 4px 20px rgba(255,68,68,0.4)'
          }}
        >
          ⏰ NO DEJES QUE PASE<br />
          OTRO DÍA MÁS
        </h2>

        {/* Secondary Text */}
        <p 
          className="text-lg md:text-xl lg:text-2xl font-medium text-center mb-12 leading-relaxed"
          style={{ color: '#FFFFFF' }}
        >
          El apego te ha robado suficiente tiempo, paz y amor propio.<br />
          Tu libertad emocional empieza <strong style={{ color: '#FFD700' }}>HOY. AHORA.</strong>
        </p>

        {/* WhatsApp Button */}
        <WhatsAppButton />

        {/* P.D. */}
        <p 
          className="text-base md:text-lg font-semibold text-center mt-10 leading-relaxed max-w-xl mx-auto"
          style={{ color: '#FFD700' }}
        >
          📧 P.D.: Mientras esperas mi respuesta,<br />
          revisa tu correo (y spam). Lo que te envié ahí<br />
          puede que sea lo más importante que leas hoy.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
