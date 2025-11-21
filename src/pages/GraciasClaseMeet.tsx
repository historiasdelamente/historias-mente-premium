import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, MapPin, Mail, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/clase-registrada-hero.png";

const GraciasClaseMeet = () => {
  const whatsappUrl = "https://chat.whatsapp.com/IqnYS92WRDwCtkPDH7fREk";

  return (
    <div className="min-h-screen bg-background">
      {/* HERO BANNER */}
      <section className="relative w-full">
        <img 
          src={heroBanner} 
          alt="¡Felicidades! Ya estás inscrita a la clase"
          className="w-full h-auto object-cover"
        />
        {/* Dark overlay for consistency */}
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* SECCIÓN 1 - CTA PRINCIPAL WHATSAPP (PRIORIDAD #1) */}
      <section className="relative py-8 md:py-20 bg-gradient-to-br from-[#25D366]/15 via-black to-[#25D366]/5 border-b-4 border-[#25D366]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-4 text-white leading-tight px-2">
              🎉 ¡FELICIDADES! Tu Lugar Está Reservado
            </h2>
            <p className="text-base md:text-xl text-white/90 mb-4 md:mb-6 px-2">
              <strong className="text-[#D4AF37]">Este Miércoles a la 1:00 PM</strong> comienza tu transformación
            </p>

            <div className="bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/5 border-2 border-[#25D366] rounded-xl md:rounded-2xl p-4 md:p-8 mb-6 mx-2 md:mx-0">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-[#25D366] animate-pulse flex-shrink-0" />
                <h3 className="text-lg md:text-2xl font-bold text-[#25D366]">
                  PASO CRÍTICO #1
                </h3>
              </div>
              <p className="text-base md:text-xl text-white text-center mb-2 leading-relaxed px-2">
                <strong>Únete AHORA al Grupo Privado de WhatsApp</strong>
              </p>
              <p className="text-sm md:text-lg text-white/90 text-center px-2">
                Tu comunidad de apoyo y recordatorios del taller
              </p>
            </div>

          <div className="text-center px-2 md:px-0">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto mb-4 md:mb-6"
            >
              <Button 
                className="w-full md:w-auto md:min-w-[500px] bg-[#25D366] hover:bg-[#20BD5A] text-white text-base md:text-2xl px-8 md:px-16 py-6 md:py-9 rounded-xl md:rounded-2xl font-bold shadow-[0_6px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-[1.02] animate-pulse min-h-[60px] md:min-h-auto"
                style={{ animationDuration: '2s' }}
              >
                <svg className="w-7 h-7 md:w-10 md:h-10 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                UNIRME AL GRUPO AHORA
              </Button>
            </a>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto text-sm md:text-base px-2">
              <div className="flex items-center justify-center gap-2 text-white/80">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#25D366] flex-shrink-0" />
                <span>Recordatorios del taller</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#25D366] flex-shrink-0" />
                <span>Material exclusivo</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#25D366] flex-shrink-0" />
                <span>Comunidad de apoyo</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-[#25D366] flex-shrink-0" />
                <span>Soporte directo</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 - EMAIL Y DETALLES */}
      <section className="py-8 md:py-16 bg-background border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* EMAIL */}
            <div className="bg-gradient-to-br from-primary/15 to-background border-2 border-primary/30 rounded-xl p-5 md:p-8">
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  Paso #2: Revisa tu Email
                </h3>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/40 rounded-lg p-3 md:p-4 mb-4">
                <p className="text-xs md:text-sm text-red-400 font-semibold mb-1">⚠️ Revisa también SPAM</p>
                <p className="text-xs md:text-sm text-white/80">
                  El enlace de Google Meet puede llegar a tu carpeta de spam
                </p>
              </div>

              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-white/90 text-xs md:text-sm">
                    <strong>Enlace de Google Meet</strong> (requerido para entrar)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-xs md:text-sm">Recordatorios antes del taller</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 text-xs md:text-sm">Material de preparación</p>
                </div>
              </div>
            </div>

            {/* DETALLES DEL TALLER */}
            <div className="bg-gradient-to-br from-[#D4AF37]/15 to-background border-2 border-[#D4AF37]/30 rounded-xl p-5 md:p-8">
              <h3 className="text-lg md:text-2xl font-bold text-center mb-5 md:mb-6 text-white">
                📅 Detalles del Taller
              </h3>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 md:gap-4 bg-white/5 rounded-lg p-3 md:p-4">
                  <Calendar className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37] flex-shrink-0" />
                  <div>
                    <p className="text-xs md:text-sm text-white/70">Día</p>
                    <p className="text-base md:text-lg font-semibold text-white">Este Miércoles</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 bg-white/5 rounded-lg p-3 md:p-4">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37] flex-shrink-0" />
                  <div>
                    <p className="text-xs md:text-sm text-white/70">Hora</p>
                    <p className="text-lg md:text-xl font-bold text-[#D4AF37]">1:00 PM</p>
                    <p className="text-[10px] md:text-xs text-white/60">(horario Colombia)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 bg-white/5 rounded-lg p-3 md:p-4">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37] flex-shrink-0" />
                  <div>
                    <p className="text-xs md:text-sm text-white/70">Plataforma</p>
                    <p className="text-base md:text-lg font-semibold text-white">Google Meet</p>
                    <p className="text-[10px] md:text-xs text-white/60">(enlace por email)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 - QUÉ APRENDERÁS */}
      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
            Lo Que Aprenderás en Este Taller
          </h2>

          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start gap-3 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] flex-shrink-0 mt-0.5 md:mt-1" />
              <p className="text-sm md:text-lg text-white">
                Por qué vuelves una y otra vez (y cómo romper el ciclo definitivamente)
              </p>
            </div>

            <div className="flex items-start gap-3 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] flex-shrink-0 mt-0.5 md:mt-1" />
              <p className="text-sm md:text-lg text-white">
                La trampa invisible del "tal vez cambie" que te mantiene atrapada
              </p>
            </div>

            <div className="flex items-start gap-3 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] flex-shrink-0 mt-0.5 md:mt-1" />
              <p className="text-sm md:text-lg text-white">
                El error #1 que cometen el 90% al intentar alejarse del narcisista
              </p>
            </div>

            <div className="flex items-start gap-3 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] flex-shrink-0 mt-0.5 md:mt-1" />
              <p className="text-sm md:text-lg text-white">
                El protocolo de Contacto Cero que realmente funciona
              </p>
            </div>

            <div className="flex items-start gap-3 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 md:p-6">
              <Check className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37] flex-shrink-0 mt-0.5 md:mt-1" />
              <p className="text-sm md:text-lg text-white">
                Cómo recuperar tu identidad después del apagón emocional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 - PRÓXIMOS PASOS */}
      <section className="py-10 md:py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-white">
            ✅ Tus Próximos Pasos
          </h2>

          <div className="space-y-4 md:space-y-6">
            <div className="flex items-start gap-3 md:gap-4 bg-gradient-to-r from-[#25D366]/20 to-transparent border-l-4 border-[#25D366] rounded-lg p-4 md:p-6">
              <span className="text-2xl md:text-3xl font-bold text-[#25D366] flex-shrink-0">1</span>
              <div>
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#25D366]">Únete AHORA al grupo de WhatsApp ⬆️</h3>
                <p className="text-sm md:text-base text-white/90">
                  Es tu red de apoyo y NO es opcional. Presiona el botón verde arriba.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-4 md:p-6">
              <span className="text-2xl md:text-3xl font-bold text-[#D4AF37] flex-shrink-0">2</span>
              <div>
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#D4AF37]">Revisa tu correo (incluso SPAM)</h3>
                <p className="text-sm md:text-base text-white/90">
                  El enlace de Google Meet está en tu email. Si no lo ves, revisa carpeta de SPAM.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-4 md:p-6">
              <span className="text-2xl md:text-3xl font-bold text-[#D4AF37] flex-shrink-0">3</span>
              <div>
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-[#D4AF37]">Marca la fecha: Este Miércoles 1:00 PM</h3>
                <p className="text-sm md:text-base text-white/90">
                  Tu transformación comienza este miércoles. No faltes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 - INSTRUCTOR */}
      <section className="py-10 md:py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <p className="text-base md:text-lg text-white/70 mb-4 md:mb-6">
            👨‍🏫 Esta clase la imparte:
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            Javier Vieira
          </h3>

          <p className="text-lg md:text-2xl text-[#D4AF37] mb-2 font-semibold">
            Conferencista de Transformación Personal
          </p>

          <p className="text-base md:text-xl text-white/90 mb-3 md:mb-4 font-medium">
            Experto en Liberación del Narcisismo
          </p>

          <p className="text-sm md:text-lg text-white/80 max-w-2xl mx-auto px-2">
            Te ayudo a salir del narcisismo con una técnica única: el Apagón Emocional. Un método probado que ha transformado la vida de cientos de mujeres atrapadas en relaciones tóxicas.
          </p>
        </div>
      </section>

      {/* SECCIÓN 6 - CIERRE MOTIVACIONAL */}
      <section className="py-10 md:py-20 bg-black border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <p className="text-lg md:text-3xl font-semibold mb-4 md:mb-6 text-white">
            Has tomado una decisión valiente hoy.
          </p>

          <p className="text-base md:text-2xl mb-4 md:mb-6 text-white/90">
            La mayoría de las mujeres tardan años en dar este paso.
          </p>

          <p className="text-base md:text-2xl mb-6 md:mb-8 text-[#D4AF37] font-bold">
            Tú lo hiciste hoy.
          </p>

          <p className="text-base md:text-2xl mb-6 md:mb-8 text-white">
            Nos vemos el miércoles. Prepárate para tu liberación.
          </p>

          <p className="text-sm md:text-lg text-[#D4AF37] italic">
            — Javier Vieira
          </p>
        </div>
      </section>

      {/* FOOTER CON CTA WHATSAPP */}
      <footer className="bg-gradient-to-t from-black to-background border-t border-white/10 py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mb-6 md:mb-8">
            <Link to="/" className="inline-block">
              <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37]">Historias de la Mente</h3>
            </Link>
          </div>

          <div className="mb-6 md:mb-8">
            <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white">¿Tienes preguntas?</h3>
            <p className="text-sm md:text-lg text-white/80 mb-4 md:mb-6 px-2">Únete a nuestro grupo de WhatsApp para soporte directo</p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto px-4 md:px-0"
            >
              <Button className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white text-base md:text-lg px-8 md:px-10 py-5 md:py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Unirme al Grupo de WhatsApp
              </Button>
            </a>
          </div>

          <div className="text-white/50 text-xs md:text-sm">
            <p>© 2025 Historias de la Mente. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GraciasClaseMeet;
