import WhatsAppButton from "./WhatsAppButton";

const FinalCTASection = () => {
  return (
    <section 
      className="py-14 md:py-24 px-4 relative text-center"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)' }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[8%] text-4xl opacity-15 text-[#1a1a1a]">💔</div>
        <div className="absolute bottom-[15%] right-[10%] text-3xl opacity-15 text-[#1a1a1a]">💔</div>
        
        {/* Red urgency glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-10 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(139,0,0,0.5) 0%, transparent 70%)' }}
        ></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Urgency Text */}
        <h2 
          className="text-xl md:text-2xl font-black uppercase text-center mb-4 leading-tight"
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
          className="text-base md:text-lg font-medium text-center mb-8 leading-relaxed"
          style={{ color: '#FFFFFF' }}
        >
          El apego te ha robado suficiente tiempo y paz.<br />
          Tu libertad emocional empieza <strong style={{ color: '#FFD700' }}>HOY.</strong>
        </p>

        {/* WhatsApp Button */}
        <WhatsAppButton />

        {/* P.D. */}
        <p 
          className="text-sm md:text-base font-semibold text-center mt-8 leading-relaxed max-w-md mx-auto"
          style={{ color: '#FFD700' }}
        >
          📧 P.D.: Mientras esperas mi respuesta,<br />
          revisa tu correo (y spam). Lo que te envié<br />
          puede ser lo más importante que leas hoy.
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
