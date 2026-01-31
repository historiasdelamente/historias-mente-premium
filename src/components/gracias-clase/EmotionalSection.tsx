import mujerEmotional from "@/assets/mujer-emotional-golden.png";

const EmotionalSection = () => {
  return (
    <section 
      className="py-20 md:py-28 px-5 relative text-center"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[3%] text-5xl opacity-15 text-[#1a1a1a]">💔</div>
        <div className="absolute bottom-[20%] right-[5%] text-6xl opacity-15 text-[#1a1a1a]">💔</div>
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/25 to-transparent"></div>
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#1a1a1a]/25 to-transparent"></div>
      </div>

      {/* Glow effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)' }}
      ></div>

      {/* Image Container */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative">
          <img 
            src={mujerEmotional} 
            alt="Mujer con expresión emocional vulnerable pero esperanzada"
            className="w-full h-auto rounded-2xl md:rounded-3xl"
            style={{ 
              boxShadow: '0 20px 60px rgba(255,215,0,0.2), 0 0 100px rgba(255,215,0,0.1)'
            }}
          />
          
          {/* Overlay Text on Image */}
          <div 
            className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12 rounded-2xl md:rounded-3xl"
            style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.9) 100%)' }}
          >
            <p 
              className="text-lg md:text-2xl lg:text-3xl font-bold uppercase text-center px-4 leading-tight"
              style={{ 
                color: '#FFFFFF',
                textShadow: '0 2px 20px rgba(0,0,0,0.8)'
              }}
            >
              OTRA VEZ ESTÁS LLORANDO POR EL MISMO PATRÓN.<br />
              <span style={{ color: '#FFD700' }}>NECESITAS AYUDA YA.</span>
            </p>
          </div>
        </div>

        {/* Caption below image */}
        <p 
          className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-10 md:mt-12 leading-relaxed max-w-xl mx-auto"
          style={{ color: '#FFFFFF' }}
        >
          ¿Reconoces este dolor?<br />
          <span style={{ color: '#E5E5E5' }}>No estás sola. Y hay una salida clara.</span>
        </p>
      </div>
    </section>
  );
};

export default EmotionalSection;
