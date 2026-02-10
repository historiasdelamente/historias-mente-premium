import { Link } from 'react-router-dom';
import apegoDetoxBanner from '@/assets/apego-detox-clase-banner.png';

const GraciasEvaluacion = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#000000' }}>
      
      {/* SECCIÓN 1: HERO - Confirmación compacta */}
      <section 
        className="py-4 px-4 sm:px-6 md:py-8"
        style={{ background: 'linear-gradient(180deg, #1a1a1a, #000000)' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h1 
            className="text-xs sm:text-sm md:text-lg font-bold mb-1 uppercase tracking-widest"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: 'rgba(255, 212, 0, 0.7)'
            }}
          >
            Evaluación Completada
          </h1>
          <p 
            className="text-sm sm:text-base md:text-lg font-semibold"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#FFD400'
            }}
          >
            ¡Gracias por completar la evaluación!
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: RESULTADOS + CTA CLASE */}
      <section className="px-4 sm:px-6 -mt-2 relative z-10">
        <div 
          className="max-w-lg mx-auto p-4 sm:p-6 md:p-8 rounded-2xl"
          style={{ 
            background: 'linear-gradient(145deg, #050505, #0d0d0d)',
            border: '1px solid rgba(255, 212, 0, 0.25)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
          }}
        >
          <h2 
            className="text-base sm:text-lg md:text-xl font-bold text-center mb-3 uppercase"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: '#FFD400'
            }}
          >
            Tus Resultados Están en Camino
          </h2>

          <p 
            className="text-xs sm:text-sm md:text-base text-center mb-4"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255, 255, 255, 0.75)'
            }}
          >
            En los próximos 2-3 minutos recibirás un email con:
          </p>

          <ul className="space-y-2 mb-5 max-w-sm mx-auto">
            {[
              'Análisis detallado de tus respuestas',
              'Interpretación de las señales detectadas'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <span className="text-base flex-shrink-0" style={{ color: '#27AE60' }}>✓</span>
                <span 
                  className="text-xs sm:text-sm md:text-base"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: '#FFFFFF'
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Clase - Grande y claro en móvil */}
          <a 
            href="https://historiasdelamente.com/clase-apegodetox"
            className="block w-full py-3.5 sm:py-4 px-5 rounded-xl text-center font-bold text-sm sm:text-base mb-3"
            style={{ 
              background: 'linear-gradient(135deg, #FFD400, #FFC700)',
              color: '#000',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              boxShadow: '0 6px 20px rgba(255, 212, 0, 0.35)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          >
            🎬 NO TE PIERDAS LA CLASE GRATUITA →
          </a>

          <p 
            className="text-[10px] sm:text-xs text-center"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255, 212, 0, 0.6)'
            }}
          >
            Revisa tu bandeja de entrada (y spam)
          </p>
        </div>
      </section>

      {/* SECCIÓN 3: TRANSICIÓN emocional */}
      <section className="px-4 sm:px-6 py-8 sm:py-10 md:py-14">
        <div className="max-w-lg mx-auto text-center">
          <h2 
            className="text-lg sm:text-xl md:text-2xl font-bold mb-4 uppercase"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: '#FFD400'
            }}
          >
            Mientras Esperas...
          </h2>

          <p 
            className="text-xs sm:text-sm md:text-base mb-6 max-w-md mx-auto"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: 1.7
            }}
          >
            Si completaste esta evaluación es porque algo dentro de ti ya sabe que algo no está bien.
          </p>

          <ul className="space-y-3 mb-6 text-left max-w-md mx-auto">
            {[
              '¿Cómo sé si realmente es un narcisista?',
              '¿Por qué no puedo dejarlo aunque quiera?',
              '¿Hay forma de salir sin destruirme?'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-sm sm:text-base flex-shrink-0 mt-0.5" style={{ color: '#FFD400' }}>→</span>
                <span 
                  className="text-xs sm:text-sm md:text-base"
                  style={{ 
                    fontFamily: "'Inter', sans-serif",
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p 
            className="text-sm sm:text-base md:text-lg font-bold"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#FFD400'
            }}
          >
            Creé esta clase para responderte exactamente eso.
          </p>
        </div>
      </section>

      {/* SECCIÓN 4: CLASE GRATIS CON BANNER */}
      <section className="px-4 sm:px-6 -mt-4 md:-mt-8 relative z-10 pb-6">
        <div 
          className="max-w-lg md:max-w-3xl mx-auto rounded-2xl overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #1a1a1a, #0d0d0d)',
            border: '2px solid rgba(255, 212, 0, 0.35)',
            boxShadow: '0 15px 50px rgba(255, 212, 0, 0.12)'
          }}
        >
          {/* Banner Image */}
          <a 
            href="https://historiasdelamente.com/clase-apegodetox"
            className="block relative w-full aspect-video overflow-hidden hover:opacity-90 transition-opacity"
          >
            <img 
              src={apegoDetoxBanner} 
              alt="Apego Detox - Clase Gratis"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </a>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Badge */}
            <div className="text-center mb-3">
              <span 
                className="inline-block px-4 sm:px-5 py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold uppercase"
                style={{ 
                  background: '#27AE60',
                  color: '#000',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700
                }}
              >
                Clase Gratuita
              </span>
            </div>

            {/* Título */}
            <h2 
              className="text-base sm:text-lg md:text-2xl lg:text-3xl font-extrabold text-center mb-5 sm:mb-6 leading-tight"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                color: '#FFD400'
              }}
            >
              Cómo Romper el Vínculo Traumático con un Narcisista
            </h2>

            {/* Beneficios */}
            <div className="max-w-md md:max-w-xl mx-auto mb-6 sm:mb-8 space-y-3 sm:space-y-4">
              {[
                { text: 'Por qué tu cerebro está ', highlight: 'ADICTO', suffix: ' a esta persona' },
                { text: 'El error #1 que hace que el 90% recaiga', highlight: '', suffix: '' },
                { text: 'El método exacto de contacto cero', highlight: '', suffix: '' },
                { text: 'Cómo blindarte para ', highlight: 'NUNCA', suffix: ' volver a atraer otro narcisista' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="text-base sm:text-lg md:text-xl flex-shrink-0 mt-0.5" style={{ color: '#27AE60' }}>✓</span>
                  <p 
                    className="text-xs sm:text-sm md:text-base lg:text-lg"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      color: '#FFFFFF',
                      lineHeight: 1.5
                    }}
                  >
                    {item.text}
                    {item.highlight && <strong style={{ color: '#FFD400' }}>{item.highlight}</strong>}
                    {item.suffix}
                  </p>
                </div>
              ))}
            </div>

            {/* Detalles */}
            <p 
              className="text-[10px] sm:text-xs md:text-sm text-center mb-5"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255, 212, 0, 0.55)'
              }}
            >
              100% Online · 45 min · Acceso inmediato · Sin costo
            </p>

            {/* CTA Button - Full width en móvil */}
            <div className="text-center">
              <a 
                href="https://historiasdelamente.com/clase-apegodetox"
                className="block sm:inline-block w-full sm:w-auto px-6 sm:px-10 md:px-12 py-4 sm:py-4 md:py-5 rounded-full text-sm sm:text-base md:text-lg font-extrabold transition-all duration-300 hover:scale-105 active:scale-[0.98]"
                style={{ 
                  background: 'linear-gradient(135deg, #FFD400, #FFC700)',
                  color: '#000',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  boxShadow: '0 8px 25px rgba(255, 212, 0, 0.4)',
                  letterSpacing: '0.3px'
                }}
              >
                → SÍ, QUIERO ACCEDER A LA CLASE
              </a>
            </div>

            <p 
              className="text-[10px] sm:text-xs text-center mt-3"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255, 212, 0, 0.45)'
              }}
            >
              Sin tarjeta de crédito · Acceso por email
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: RECORDATORIO EMAIL - Compacto */}
      <section className="px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div 
          className="max-w-lg mx-auto p-4 sm:p-5 md:p-6 rounded-xl"
          style={{ 
            background: 'rgba(255, 212, 0, 0.04)',
            borderLeft: '3px solid #FFD400'
          }}
        >
          <p 
            className="text-xs sm:text-sm md:text-base text-center leading-relaxed"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255, 212, 0, 0.8)'
            }}
          >
            No olvides revisar tu email con los resultados de tu evaluación.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer 
        className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 text-center mt-auto"
        style={{ background: '#050505' }}
      >
        <h3 
          className="text-sm sm:text-base md:text-lg font-semibold mb-1"
          style={{ 
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            color: '#FFD400'
          }}
        >
          Historias de la Mente
        </h3>
        
        <p 
          className="text-xs sm:text-sm mb-0.5"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(255, 212, 0, 0.65)'
          }}
        >
          Javier Vieira - Psicólogo Clínico
        </p>
        
        <p 
          className="text-[10px] sm:text-xs mb-3"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(255, 212, 0, 0.45)'
          }}
        >
          COLPSIC 293219
        </p>

        <div className="flex items-center justify-center gap-3 mb-3">
          <Link 
            to="/privacy" 
            className="text-[10px] sm:text-xs hover:underline"
            style={{ color: 'rgba(255, 212, 0, 0.55)' }}
          >
            Privacidad
          </Link>
          <span style={{ color: 'rgba(255, 212, 0, 0.25)' }}>|</span>
          <Link 
            to="/terms" 
            className="text-[10px] sm:text-xs hover:underline"
            style={{ color: 'rgba(255, 212, 0, 0.55)' }}
          >
            Términos
          </Link>
        </div>

        <p 
          className="text-[10px] sm:text-xs"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(255, 212, 0, 0.35)'
          }}
        >
          © 2025 Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default GraciasEvaluacion;
