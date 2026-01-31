import mujerVuelvoAMi from "@/assets/mujer-vuelvo-a-mi.png";

const EmotionalSection = () => {
  return (
    <section 
      className="py-16 md:py-24 px-5 relative text-center"
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

      {/* Image Container with Animated Gold Border */}
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Animated border container */}
        <div className="relative p-1 rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Animated gradient border */}
          <div 
            className="absolute inset-0 rounded-2xl md:rounded-3xl animate-spin-slow"
            style={{ 
              background: 'conic-gradient(from 0deg, #FFD700, #000000, #FFD700, #000000, #FFD700)',
              animationDuration: '4s'
            }}
          ></div>
          
          {/* Inner dark container */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-black p-1">
            <img 
              src={mujerVuelvoAMi} 
              alt="Hoy dejo de rogar por amor, vuelvo a mí"
              className="w-full h-auto rounded-xl md:rounded-2xl"
              style={{ 
                boxShadow: 'inset 0 0 60px rgba(0,0,0,0.8)'
              }}
            />
          </div>
        </div>

        {/* Caption below image */}
        <p 
          className="text-lg md:text-xl lg:text-2xl font-bold text-center mt-8 md:mt-10 leading-relaxed max-w-xl mx-auto"
          style={{ color: '#FFFFFF' }}
        >
          Este es tu momento de transformación.<br />
          <span style={{ color: '#FFD700' }}>Tú mereces más.</span>
        </p>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default EmotionalSection;
