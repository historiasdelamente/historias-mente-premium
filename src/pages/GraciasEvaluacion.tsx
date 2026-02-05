import { Link } from 'react-router-dom';
import apegoDetoxBanner from '@/assets/apego-detox-clase-banner.png';

const GraciasEvaluacion = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#000000' }}>
      
      {/* SECCIÓN 1: HERO - Confirmación */}
      <section 
        className="py-12 md:py-16 px-5"
        style={{ background: 'linear-gradient(180deg, #1a1a1a, #000000)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* H1 */}
          <h1 
            className="text-2xl md:text-4xl font-extrabold mb-4 uppercase tracking-wide"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              color: '#FFD400'
            }}
          >
            Evaluación Completada
          </h1>

          {/* Subtitle */}
          <p 
            className="text-base md:text-xl"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              color: 'rgba(255, 212, 0, 0.85)'
            }}
          >
            ¡Gracias por completar la evaluación!
          </p>
        </div>
      </section>

      {/* SECCIÓN 2: EMAIL NOTIFICATION CARD */}
      <section className="px-5 -mt-6 md:-mt-10 relative z-10">
        <div 
          className="max-w-3xl mx-auto p-6 md:p-10 rounded-2xl"
          style={{ 
            background: 'linear-gradient(145deg, #050505, #0d0d0d)',
            border: '1px solid rgba(255, 212, 0, 0.3)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
          }}
        >
          {/* Emoji */}
          <div className="text-4xl md:text-5xl text-center mb-4">📧</div>

          {/* H2 */}
          <h2 
            className="text-lg md:text-2xl font-bold text-center mb-4 uppercase"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: '#FFD400'
            }}
          >
            Tus Resultados Están en Camino
          </h2>

          {/* Texto */}
          <p 
            className="text-sm md:text-base text-center mb-6"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            En los próximos 2-3 minutos recibirás un email con:
          </p>

          {/* Lista */}
          <ul className="space-y-3 mb-6 max-w-md mx-auto">
            {[
              'Análisis detallado de tus respuestas',
              'Interpretación de las señales detectadas',
              'Primeros pasos recomendados'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0" style={{ color: '#27AE60' }}>✓</span>
                <span 
                  className="text-sm md:text-base"
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

          {/* Nota */}
          <p 
            className="text-sm md:text-base text-center font-semibold"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: '#FFD400'
            }}
          >
            Revisa tu bandeja de entrada (y la carpeta de spam por si acaso)
          </p>
        </div>
      </section>

      {/* SECCIÓN 3: TRANSICIÓN */}
      <section className="px-5 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* H2 */}
          <h2 
            className="text-xl md:text-3xl font-bold mb-6 uppercase"
            style={{ 
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: '#FFD400'
            }}
          >
            Mientras Esperas...
          </h2>

          {/* Texto */}
          <p 
            className="text-sm md:text-lg mb-8 max-w-xl mx-auto"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: 1.7
            }}
          >
            Si completaste esta evaluación es porque algo dentro de ti ya sabe que algo no está bien.
          </p>

          {/* Lista con flechas */}
          <ul className="space-y-4 mb-8 text-left max-w-lg mx-auto">
            {[
              '¿Cómo sé si realmente es un narcisista?',
              '¿Por qué no puedo dejarlo aunque quiera?',
              '¿Hay forma de salir sin destruirme?'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-lg flex-shrink-0" style={{ color: '#FFD400' }}>→</span>
                <span 
                  className="text-sm md:text-base"
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

          {/* Cierre */}
          <p 
            className="text-base md:text-lg font-bold"
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
      <section className="px-5 -mt-6 md:-mt-10 relative z-10">
        <div 
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #1a1a1a, #0d0d0d)',
            border: '2px solid rgba(255, 212, 0, 0.4)',
            boxShadow: '0 20px 60px rgba(255, 212, 0, 0.15)'
          }}
        >
          {/* Banner Image */}
          <a 
            href="https://historiasdelamente.com/clase-apegodetox"
            className="block relative w-full h-48 sm:h-56 md:h-72 lg:h-80 overflow-hidden hover:opacity-90 transition-opacity"
          >
            <img 
              src={apegoDetoxBanner} 
              alt="Apego Detox - Clase Gratis"
              className="w-full h-full object-cover object-center"
            />
          </a>

          {/* Content */}
          <div className="p-5 md:p-8 lg:p-10">
            {/* Badge */}
            <div className="text-center mb-4">
              <span 
                className="inline-block px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase"
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
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-8 leading-tight"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                color: '#FFD400'
              }}
            >
              Cómo Romper el Vínculo Traumático con un Narcisista
            </h2>

            {/* Beneficios */}
            <div className="max-w-2xl mx-auto mb-10 space-y-5">
              {[
                { text: 'Por qué tu cerebro está ', highlight: 'ADICTO', suffix: ' a esta persona (y cómo desactivar esa adicción)' },
                { text: 'El error #1 que hace que el 90% recaiga al intentar dejarlo', highlight: '', suffix: '' },
                { text: 'El método exacto de contacto cero sin sentir que te mueres', highlight: '', suffix: '' },
                { text: 'Cómo blindarte para ', highlight: 'NUNCA', suffix: ' volver a atraer otro narcisista' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-xl md:text-2xl flex-shrink-0" style={{ color: '#27AE60' }}>✓</span>
                  <p 
                    className="text-base md:text-lg lg:text-xl"
                    style={{ 
                      fontFamily: "'Inter', sans-serif",
                      color: '#FFFFFF',
                      lineHeight: 1.6
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
              className="text-xs md:text-sm text-center mb-8"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255, 212, 0, 0.6)'
              }}
            >
              100% Online | 45 minutos | Acceso inmediato | Sin costo
            </p>

            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="https://historiasdelamente.com/clase-apegodetox"
                className="inline-block px-8 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg font-extrabold transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #FFD400, #FFC700)',
                  color: '#000',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  boxShadow: '0 10px 30px rgba(255, 212, 0, 0.4)',
                  letterSpacing: '0.5px'
                }}
              >
                → SÍ, QUIERO ACCEDER A LA CLASE
              </a>
            </div>

            {/* Nota */}
            <p 
              className="text-xs md:text-sm text-center mt-4"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255, 212, 0, 0.5)'
              }}
            >
              No requiere tarjeta de crédito | Recibirás el acceso por email
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: RECORDATORIO EMAIL */}
      <section className="px-5 py-12 md:py-16">
        <div 
          className="max-w-2xl mx-auto p-6 md:p-8 rounded-lg"
          style={{ 
            background: 'rgba(255, 212, 0, 0.05)',
            borderLeft: '4px solid #FFD400'
          }}
        >
          <div className="text-4xl md:text-5xl text-center mb-4">💌</div>
          <p 
            className="text-sm md:text-lg text-center leading-relaxed"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              color: 'rgba(255, 212, 0, 0.85)'
            }}
          >
            Mientras tanto, no olvides revisar tu email con los resultados de tu evaluación.
          </p>
        </div>
      </section>

      {/* SECCIÓN 6: FOOTER */}
      <footer 
        className="py-10 px-5 text-center mt-auto"
        style={{ background: '#050505' }}
      >
        <h3 
          className="text-lg md:text-xl font-semibold mb-2"
          style={{ 
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            color: '#FFD400'
          }}
        >
          Historias de la Mente
        </h3>
        
        <p 
          className="text-sm md:text-base mb-1"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(255, 212, 0, 0.7)'
          }}
        >
          Javier Vieira - Psicólogo Clínico
        </p>
        
        <p 
          className="text-xs md:text-sm mb-4"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(255, 212, 0, 0.5)'
          }}
        >
          COLPSIC 293219
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <Link 
            to="/privacy" 
            className="text-xs md:text-sm hover:underline"
            style={{ color: 'rgba(255, 212, 0, 0.6)' }}
          >
            Privacidad
          </Link>
          <span style={{ color: 'rgba(255, 212, 0, 0.3)' }}>|</span>
          <Link 
            to="/terms" 
            className="text-xs md:text-sm hover:underline"
            style={{ color: 'rgba(255, 212, 0, 0.6)' }}
          >
            Términos
          </Link>
        </div>

        <p 
          className="text-xs"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            color: 'rgba(255, 212, 0, 0.4)'
          }}
        >
          © 2025 Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default GraciasEvaluacion;
