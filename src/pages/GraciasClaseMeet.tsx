import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/gracias-hero-futurista.png";
import instructorImage from "@/assets/javier-vieira.png";

const GraciasClaseMeet = () => {
  const whatsappUrl = "https://chat.whatsapp.com/IqnYS92WRDwCtkPDH7fREk";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* HERO + CTA WHATSAPP INMEDIATO */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Tu transformación comienza ahora"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.95) 100%)'
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 px-5">
          <div className="max-w-[600px] mx-auto w-full">
            
            {/* Badge de confirmación */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div 
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{ 
                  background: 'rgba(212,175,55,0.15)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  color: '#D4AF37'
                }}
              >
                ✓ Registro Confirmado
              </div>
            </div>
            
            {/* Título principal */}
            <h1 
              className="text-3xl md:text-5xl font-bold text-white text-center mb-3 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Tu lugar está <span style={{ color: '#D4AF37' }}>asegurado</span>
            </h1>
            
            {/* Fecha destacada */}
            <div 
              className="text-center mb-6 py-3 px-4 rounded-xl mx-auto max-w-fit"
              style={{ 
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.3)'
              }}
            >
              <p className="text-lg md:text-xl font-semibold text-white">
                <span style={{ color: '#D4AF37' }}>Este Martes</span> • 1:00 PM Colombia
              </p>
            </div>
            
            {/* URGENCIA - CTA WhatsApp Principal */}
            <div 
              className="rounded-2xl p-5 mb-4"
              style={{ 
                background: 'linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.05) 100%)',
                border: '2px solid #25D366',
                boxShadow: '0 0 30px rgba(37,211,102,0.2)'
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-red-500 animate-pulse text-lg">●</span>
                <span className="text-sm font-bold text-white uppercase tracking-wide">
                  Paso obligatorio
                </span>
              </div>
              
              <p className="text-center text-white/90 text-sm mb-4">
                Únete al grupo para recibir el <strong>enlace de acceso</strong> y recordatorios
              </p>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl text-white font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{ 
                  background: '#25D366',
                  boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
                  fontSize: '16px'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Unirme al Grupo Ahora
              </a>
            </div>
            
            {/* Scroll indicator */}
            <div className="flex justify-center">
              <div className="animate-bounce opacity-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRÓXIMOS PASOS */}
      <section className="py-12 px-5" style={{ background: '#0a0a0a' }}>
        <div className="max-w-[600px] mx-auto">
          
          <h2 
            className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Tus próximos <span style={{ color: '#D4AF37' }}>pasos</span>
          </h2>
          
          {/* Paso 1 */}
          <div 
            className="relative rounded-xl p-5 mb-4"
            style={{ 
              background: 'linear-gradient(135deg, #111 0%, #0d0d0d 100%)',
              border: '1px solid rgba(212,175,55,0.2)'
            }}
          >
            <div 
              className="absolute -left-3 top-5 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: '#D4AF37', color: '#0a0a0a' }}
            >
              1
            </div>
            <div className="pl-6">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-green-500">●</span> Grupo de WhatsApp
              </h3>
              <p className="text-sm text-white/70">
                Ya deberías estar en el grupo. Si no, presiona el botón verde arriba.
              </p>
            </div>
          </div>
          
          {/* Paso 2 */}
          <div 
            className="relative rounded-xl p-5 mb-4"
            style={{ 
              background: 'linear-gradient(135deg, #111 0%, #0d0d0d 100%)',
              border: '1px solid rgba(212,175,55,0.2)'
            }}
          >
            <div 
              className="absolute -left-3 top-5 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: '#D4AF37', color: '#0a0a0a' }}
            >
              2
            </div>
            <div className="pl-6">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Revisa tu email
              </h3>
              <p className="text-sm text-white/70 mb-2">
                Recibirás el enlace de <strong className="text-white">Google Meet</strong> para acceder a la clase.
              </p>
              <div 
                className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}
              >
                <span className="text-red-400">⚠️</span>
                <span className="text-red-300">Revisa también tu carpeta de SPAM</span>
              </div>
            </div>
          </div>
          
          {/* Paso 3 */}
          <div 
            className="relative rounded-xl p-5"
            style={{ 
              background: 'linear-gradient(135deg, #111 0%, #0d0d0d 100%)',
              border: '1px solid rgba(212,175,55,0.2)'
            }}
          >
            <div 
              className="absolute -left-3 top-5 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ background: '#D4AF37', color: '#0a0a0a' }}
            >
              3
            </div>
            <div className="pl-6">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                Conecta este Martes
              </h3>
              <p className="text-sm text-white/70">
                <strong className="text-white">1:00 PM</strong> (hora Colombia) • Clase en vivo por Google Meet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LO QUE APRENDERÁS */}
      <section 
        className="py-12 px-5"
        style={{ background: 'linear-gradient(180deg, #0d0d0d 0%, #111 100%)' }}
      >
        <div className="max-w-[600px] mx-auto">
          <h2 
            className="text-2xl md:text-3xl font-bold text-white text-center mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            En esta clase <span style={{ color: '#D4AF37' }}>descubrirás</span>
          </h2>
          
          <div className="space-y-3">
            {[
              'Por qué vuelves una y otra vez (y cómo romper el ciclo)',
              'La trampa del "tal vez cambie" que te mantiene atrapada',
              'El error #1 al intentar alejarse del narcisista',
              'El protocolo de Contacto Cero que funciona',
              'Cómo recuperar tu identidad después del apagón emocional'
            ].map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300"
                style={{ 
                  background: 'rgba(212,175,55,0.05)',
                  border: '1px solid rgba(212,175,55,0.1)'
                }}
              >
                <span 
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                  style={{ background: '#D4AF37', color: '#0a0a0a' }}
                >
                  ✓
                </span>
                <span className="text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section 
        className="py-12 px-5"
        style={{ 
          background: '#0a0a0a',
          borderTop: '1px solid rgba(212,175,55,0.1)'
        }}
      >
        <div className="max-w-[500px] mx-auto text-center">
          
          {/* Foto del instructor */}
          <div className="relative inline-block mb-6">
            <img 
              src={instructorImage}
              alt="Javier Vieira"
              className="w-24 h-24 rounded-full object-cover"
              style={{ 
                border: '3px solid #D4AF37',
                boxShadow: '0 0 30px rgba(212,175,55,0.2)'
              }}
            />
            <div 
              className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs"
              style={{ background: '#D4AF37', color: '#0a0a0a' }}
            >
              ✓
            </div>
          </div>
          
          <p 
            className="text-xs uppercase tracking-wider mb-2"
            style={{ color: '#D4AF37' }}
          >
            Tu instructor
          </p>
          
          <h3 
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Javier Vieira
          </h3>
          
          <p className="text-sm text-white/70 mb-4">
            Conferencista de Transformación Personal<br />
            <span style={{ color: '#D4AF37' }}>Experto en Liberación del Narcisismo</span>
          </p>
          
          <p className="text-sm text-white/60 leading-relaxed">
            Ha ayudado a cientos de mujeres a liberarse de relaciones tóxicas 
            a través del método del Apagón Emocional.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section 
        className="py-10 px-5"
        style={{ 
          background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.05) 100%)',
          borderTop: '1px solid rgba(212,175,55,0.2)'
        }}
      >
        <div className="max-w-[500px] mx-auto text-center">
          <p className="text-xl md:text-2xl font-bold text-white mb-2">
            Has dado el primer paso.
          </p>
          <p className="text-sm text-white/70 mb-6">
            Ahora asegúrate de no perderte la clase.
          </p>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
            style={{ 
              background: '#25D366',
              boxShadow: '0 4px 20px rgba(37,211,102,0.3)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Unirme al Grupo de WhatsApp
          </a>
          
          <p className="text-xs text-white/50 mt-4">
            Revisa tu email para el enlace de Google Meet
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer 
        className="py-8 px-5 text-center"
        style={{ 
          background: '#0a0a0a',
          borderTop: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        <Link to="/">
          <span 
            className="text-lg font-bold"
            style={{ color: '#D4AF37', fontFamily: "'Poppins', sans-serif" }}
          >
            Historias de la Mente
          </span>
        </Link>
        <p className="text-xs text-white/40 mt-2">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default GraciasClaseMeet;
