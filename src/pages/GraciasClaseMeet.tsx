import { Button } from "@/components/ui/button";
import { Check, Calendar, Clock, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const GraciasClaseMeet = () => {
  const whatsappUrl = "https://chat.whatsapp.com/HO5TdPB0V8422JTLbNfwEE";

  return (
    <div className="min-h-screen bg-background">
      {/* SECCIÓN 1 - CONFIRMACIÓN */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-black via-black to-background border-b border-[#D4AF37]/20">
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

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 mb-8 text-left">
            <p className="text-lg mb-4 flex items-start gap-2">
              <Mail className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <span className="text-white">
                <strong>Revisa tu correo electrónico</strong> (también en spam) donde encontrarás:
              </span>
            </p>
            <ul className="space-y-2 ml-8 text-white/90">
              <li>• El enlace directo a Google Meet</li>
              <li>• Recordatorios antes de la clase</li>
              <li>• Material de preparación exclusivo</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-6 text-left">
            <div className="space-y-3 text-white">
              <p className="flex items-center gap-3 text-lg">
                <Calendar className="w-6 h-6 text-[#D4AF37]" />
                <span><strong>Este Miércoles</strong></span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
                <span><strong>1:00 PM o 8:00 PM</strong></span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
                <span><strong>Google Meet</strong> (enlace por email)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 - CTA PRINCIPAL WHATSAPP */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-black via-[#D4AF37]/5 to-black border-y-2 border-[#D4AF37]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#25D366] mb-6 animate-pulse">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              ⚠️ PASO CRÍTICO: Únete al Grupo de WhatsApp AHORA
            </h2>

            <p className="text-xl md:text-2xl text-[#D4AF37] mb-8 font-semibold">
              Este grupo NO es opcional. Es tu red de apoyo durante el proceso.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 md:p-8 mb-8">
            <div className="space-y-4 text-white">
              <p className="flex items-start gap-3 text-lg">
                <Check className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                <span>Recordatorios directos de la clase (no te la pierdas)</span>
              </p>
              <p className="flex items-start gap-3 text-lg">
                <Check className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                <span>Acceso inmediato a recursos y ejercicios previos</span>
              </p>
              <p className="flex items-start gap-3 text-lg">
                <Check className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                <span>Comunidad de mujeres que están pasando por lo mismo</span>
              </p>
              <p className="flex items-start gap-3 text-lg">
                <Check className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                <span>Soporte directo conmigo antes y después de la clase</span>
              </p>
              <p className="flex items-start gap-3 text-lg">
                <Check className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-1" />
                <span>Contenido exclusivo que NO comparto en otros lugares</span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-6 mb-8">
            <p className="text-xl text-[#D4AF37] font-bold text-center">
              Si no entras al grupo, te perderás información clave que enviaré SOLO por WhatsApp antes de la clase.
            </p>
          </div>

          <div className="text-center">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto"
            >
              <Button className="w-full md:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                SÍ, QUIERO UNIRME AL GRUPO AHORA
              </Button>
            </a>
            <p className="text-sm text-white/70 mt-4">
              Es gratis. Solo toma 10 segundos. Y puede cambiar todo.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 - REFUERZO DE VALOR */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Qué Esperar en la Clase
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

      {/* SECCIÓN 4 - RECORDATORIO WHATSAPP */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-black border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            ¿Ya te uniste al grupo de WhatsApp?
          </h3>
          <p className="text-lg text-white/80 mb-8">
            Recuerda: Si no estás en el grupo, te perderás actualizaciones importantes.
          </p>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              UNIRME AL GRUPO DE WHATSAPP
            </Button>
          </a>
        </div>
      </section>

      {/* SECCIÓN 5 - QUÉ HACER AHORA */}
      <section className="py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Próximos Pasos
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-6">
              <span className="text-3xl font-bold text-[#D4AF37] flex-shrink-0">1️⃣</span>
              <p className="text-xl text-white mt-1">
                Revisa tu email (incluyendo spam)
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-6">
              <span className="text-3xl font-bold text-[#D4AF37] flex-shrink-0">2️⃣</span>
              <p className="text-xl text-white mt-1">
                Únete al grupo de WhatsApp (haz clic arriba)
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-6">
              <span className="text-3xl font-bold text-[#D4AF37] flex-shrink-0">3️⃣</span>
              <p className="text-xl text-white mt-1">
                Guarda la fecha en tu calendario: Este Miércoles
              </p>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border-l-4 border-[#D4AF37] rounded-lg p-6">
              <span className="text-3xl font-bold text-[#D4AF37] flex-shrink-0">4️⃣</span>
              <p className="text-xl text-white mt-1">
                Prepárate mentalmente: Esto puede cambiar tu vida
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 - CREDIBILIDAD */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black to-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg text-white/70 mb-6">
            Esta clase la imparte:
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

      {/* SECCIÓN 7 - CIERRE MOTIVACIONAL */}
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

      {/* FOOTER CON ÚLTIMO CTA WHATSAPP */}
      <footer className="bg-gradient-to-t from-black to-background border-t border-white/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-[#D4AF37]">Historias de la Mente</h3>
            </Link>
          </div>

          <div className="mb-8">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 py-3 rounded-full font-semibold">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Unirme al grupo
              </Button>
            </a>
          </div>

          <div className="text-sm text-white/50">
            <p>© 2025 Historias de la Mente. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GraciasClaseMeet;
