const ValidationSection = () => {
  return (
    <section 
      className="py-20 md:py-28 px-5 relative"
      style={{ background: '#0a0a0a' }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[8%] text-4xl opacity-10 text-[#1a1a1a]">💔</div>
        <div className="absolute bottom-[15%] left-[5%] text-5xl opacity-10 text-[#1a1a1a]">💔</div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div 
          className="inline-block px-6 md:px-8 py-3 mb-10 rounded-full text-sm md:text-base font-bold uppercase tracking-widest"
          style={{ 
            background: 'rgba(255,215,0,0.1)',
            border: '2px solid #FFD700',
            color: '#FFD700'
          }}
        >
          YA DISTE EL PRIMER PASO
        </div>

        {/* Title */}
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-center mb-10 leading-tight"
          style={{ color: '#FFD700' }}
        >
          SÉ EXACTAMENTE<br />
          CÓMO TE SIENTES
        </h2>

        {/* Validation Text - Walter Riso Style */}
        <div 
          className="text-base md:text-lg lg:text-xl font-normal leading-loose text-center space-y-6"
          style={{ color: '#E5E5E5' }}
        >
          <p>
            Ese nudo en el estómago cuando ves su nombre.<br />
            Esa ansiedad que te paraliza cuando no te escribe.<br />
            Ese terror a quedarte sola que te hace aceptar migajas.
          </p>
          
          <p>
            Llevas años repitiendo la misma historia.<br />
            <span style={{ color: '#FFFFFF' }}>Diferente cara, mismo guion.</span>
          </p>
          
          <p>
            Pero el problema no es <strong style={{ color: '#FFD700' }}>QUIÉN</strong> eliges.<br />
            Es <strong style={{ color: '#FFD700' }}>POR QUÉ</strong> lo eliges.
          </p>
          
          <p 
            className="text-lg md:text-xl lg:text-2xl font-semibold pt-4"
            style={{ color: '#FFFFFF' }}
          >
            Y eso... eso tiene solución.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;
