const ValidationSection = () => {
  return (
    <section 
      className="py-12 md:py-20 px-4 relative"
      style={{ background: '#0a0a0a' }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[8%] text-3xl opacity-10 text-[#1a1a1a]">💔</div>
        <div className="absolute bottom-[15%] left-[5%] text-4xl opacity-10 text-[#1a1a1a]">💔</div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div 
          className="inline-block px-5 py-2 mb-6 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest"
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
          className="text-2xl md:text-3xl font-black uppercase text-center mb-6 leading-tight"
          style={{ color: '#FFD700' }}
        >
          SÉ EXACTAMENTE<br />
          CÓMO TE SIENTES
        </h2>

        {/* Validation Text */}
        <div 
          className="text-sm md:text-base font-normal leading-loose text-center space-y-4"
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
            className="text-base md:text-lg font-semibold pt-2"
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
