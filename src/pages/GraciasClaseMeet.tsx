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
      </section>

      {/* SECCIÓN 1 - CONFIRMACIÓN */}
      <section className="relative py-12 md:py-16 bg-gradient-to-b from-black via-black to-background border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="mb-8 animate-bounce">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#10B981]/20 border-2 border-[#10B981]">
              <Check className="w-12 h-12 md:w-16 md:h-16 text-[#10B981]" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            ¡Felicidades! Tu Lugar Está Reservado
          </h1>

          <h2 className="text-2xl md:text-3xl mb-8 text-[#D4AF37] font-semibold">
            Acabas de dar el primer paso para liberarte del narcisista
          </h2>

          <p className="text-lg text-white/90 mb-6">
            Has tomado una decisión valiente. Ahora completa estos pasos críticos:
          </p>
        </div>
      </section>

      {/* SECCIÓN 2 - CTA PRINCIPAL WHATSAPP (PRIORIDAD #1) */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#25D366]/20 via-black to-[#25D366]/10 border-y-4 border-[#25D366]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] animate-pulse" style={{ animationDuration: '1.5s' }}>
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-[#25D366] animate-pulse" style={{ animationDuration: '1.5s' }} />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              ⚠️ PASO CRÍTICO: Únete AHORA a la Comunidad Privada de WhatsApp
            </h2>

            <div className="bg-[#25D366]/20 border-2 border-[#25D366] rounded-xl p-6 md:p-8 mb-8">
              <p className="text-xl md:text-2xl text-white mb-4 leading-relaxed">
                <strong className="text-[#25D366]">Este grupo NO es opcional.</strong> Es tu red de apoyo, tu recordatorio, tu comunidad de mujeres que entienden exactamente lo que vives.
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Aquí compartiremos estrategias, nos apoyaremos y te prepararemos para el taller.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#25D366]/20 to-transparent border-l-4 border-[#25D366] rounded-lg p-6 mb-8">
              <p className="text-xl md:text-2xl text-[#25D366] font-bold">
                Si no te unes, te perderás el 50% del valor de esta experiencia.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 mb-10">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">
              Lo que recibirás en el grupo:
            </h3>
            <div className="space-y-4 text-white">
              <p className="flex items-start gap-3 text-base md:text-lg">
                <Check className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" />
                <span><strong>Soporte entre mujeres</strong> que comprenden tu situación</span>
              </p>
              <p className="flex items-start gap-3 text-base md:text-lg">
                <Check className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" />
                <span><strong>Recordatorios importantes</strong> del taller</span>
              </p>
              <p className="flex items-start gap-3 text-base md:text-lg">
                <Check className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" />
                <span><strong>Material exclusivo pre-taller</strong> que no recibirás por otro medio</span>
              </p>
              <p className="flex items-start gap-3 text-base md:text-lg">
                <Check className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" />
                <span><strong>No estarás sola</strong> en este proceso de liberación</span>
              </p>
            </div>
          </div>

          <div className="text-center mb-6">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto"
            >
              <Button 
                className="w-full md:w-auto md:min-w-[500px] bg-[#25D366] hover:bg-[#20BD5A] text-white text-xl md:text-2xl px-10 md:px-16 py-8 md:py-10 rounded-2xl font-bold shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 animate-pulse"
                style={{ animationDuration: '2s' }}
              >
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                UNIRME AL GRUPO DE WHATSAPP AHORA
              </Button>
            </a>
            <p className="text-sm md:text-base text-white/70 mt-4">
              💡 <strong>Las mujeres que se unen al grupo aprovechan 2x más el taller</strong>
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 - EMAIL (MEJORADA) */}
      <section className="py-16 md:py-20 bg-background border-b border-white/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-primary/20 to-background border-l-4 border-primary rounded-xl p-8 md:p-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
                📧 REVISA TU CORREO AHORA (¡También el Spam!)
              </h2>
            </div>
            
            <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <p className="font-bold text-red-400 mb-3 text-lg md:text-xl">⚠️ IMPORTANTE:</p>
                  <p className="text-white text-base md:text-lg leading-relaxed">
                    Si no ves el correo en <strong>5 minutos</strong>, revisa tu carpeta de <strong className="text-red-400">SPAM o Promociones</strong>. El enlace a Google Meet llegará ahí.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8">
              <h3 className="font-semibold text-lg md:text-xl mb-6 text-white">
                En tu correo encontrarás:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-white text-base md:text-lg">
                    <strong className="text-primary">El enlace directo a Google Meet</strong> (SIN ESTO NO PODRÁS ENTRAR)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-white/90 text-base md:text-lg">Recordatorios antes de la clase</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-white/90 text-base md:text-lg">Material de preparación exclusivo para maximizar tu experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 - DETALLES DEL TALLER */}
      <section className="py-16 md:py-20 bg-black border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            📅 Detalles de Tu Taller
          </h2>
          
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-white">Día</h3>
                <p className="text-lg text-white font-semibold">Este Miércoles</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-white">Hora</h3>
                <p className="text-2xl text-[#D4AF37] font-bold">1:00 PM</p>
                <p className="text-sm text-white/70 mt-1">(horario Colombia)</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-white">Plataforma</h3>
                <p className="text-lg text-white font-semibold">Google Meet</p>
                <p className="text-xs text-white/70 mt-1">(enlace por email)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 - QUÉ APRENDERÁS */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Lo Que Aprenderás en Este Taller
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Check className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-lg text-white">
                Por qué vuelves una y otra vez (y cómo romper el ciclo definitivamente)
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Check className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-lg text-white">
                La trampa invisible del "tal vez cambie" que te mantiene atrapada
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Check className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-lg text-white">
                El error #1 que cometen el 90% al intentar alejarse del narcisista
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Check className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-lg text-white">
                El protocolo de Contacto Cero que realmente funciona
              </p>
            </div>

            <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <Check className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <p className="text-lg text-white">
                Cómo recuperar tu identidad después del apagón emocional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 - PRÓXIMOS PASOS */}
      <section className="py-16 md:py-20 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            ✅ Tus Próximos Pasos
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gradient-to-r from-[#25D366]/20 to-transparent border-l-4 border-[#25D366] rounded-lg p-6">
              <span className="text-3xl font-bold text-[#25D366] flex-shrink-0">1</span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#25D366]">Únete AHORA al grupo de WhatsApp ⬆️</h3>
                <p className="text-white/90">
                  Es tu red de apoyo y NO es opcional. Presiona el botón verde arriba.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-6">
              <span className="text-3xl font-bold text-[#D4AF37] flex-shrink-0">2</span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">Revisa tu correo (incluso SPAM)</h3>
                <p className="text-white/90">
                  El enlace de Google Meet está en tu email. Si no lo ves, revisa carpeta de SPAM.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-[#D4AF37]/20 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-6">
              <span className="text-3xl font-bold text-[#D4AF37] flex-shrink-0">3</span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">Marca la fecha: Este Miércoles 1:00 PM</h3>
                <p className="text-white/90">
                  Tu transformación comienza este miércoles. No faltes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 - INSTRUCTOR */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg text-white/70 mb-6">
            👨‍🏫 Esta clase la imparte:
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Javier Vieira
          </h3>

          <p className="text-2xl text-[#D4AF37] mb-2 font-semibold">
            Conferencista de Transformación Personal
          </p>

          <p className="text-xl text-white/90 mb-4 font-medium">
            Experto en Liberación del Narcisismo
          </p>

          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Te ayudo a salir del narcisismo con una técnica única: el Apagón Emocional. Un método probado que ha transformado la vida de cientos de mujeres atrapadas en relaciones tóxicas.
          </p>
        </div>
      </section>

      {/* SECCIÓN 8 - CIERRE MOTIVACIONAL */}
      <section className="py-16 md:py-20 bg-black border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-white">
            Has tomado una decisión valiente hoy.
          </p>

          <p className="text-xl md:text-2xl mb-6 text-white/90">
            La mayoría de las mujeres tardan años en dar este paso.
          </p>

          <p className="text-xl md:text-2xl mb-8 text-[#D4AF37] font-bold">
            Tú lo hiciste hoy.
          </p>

          <p className="text-xl md:text-2xl mb-8 text-white">
            Nos vemos el miércoles. Prepárate para tu liberación.
          </p>

          <p className="text-lg text-[#D4AF37] italic">
            — Javier Vieira
          </p>
        </div>
      </section>

      {/* FOOTER CON CTA WHATSAPP */}
      <footer className="bg-gradient-to-t from-black to-background border-t border-white/10 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-[#D4AF37]">Historias de la Mente</h3>
            </Link>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">¿Tienes preguntas?</h3>
            <p className="text-lg text-white/80 mb-6">Únete a nuestro grupo de WhatsApp para soporte directo</p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-10 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Unirme al Grupo de WhatsApp
              </Button>
            </a>
          </div>

          <div className="text-white/50 text-sm">
            <p>© 2025 Historias de la Mente. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GraciasClaseMeet;
